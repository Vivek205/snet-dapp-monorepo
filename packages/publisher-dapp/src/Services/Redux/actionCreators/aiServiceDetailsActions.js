import { API } from "aws-amplify";
import isEmpty from "lodash/isEmpty";

import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { APIError } from "shared/dist/utils/API";
import { loaderActions } from "./";
import { LoaderContent } from "../../../Utils/Loader";
import { initSDK } from "shared/dist/utils/snetSdk";
import { blockChainEvents } from "../../../Utils/Blockchain";
import { defaultGroups } from "../reducers/aiServiceDetailsReducer";

export const SET_ALL_SERVICE_DETAILS_ATTRIBUTES = "SET_ALL_SERVICE_DETAILS_ATTRIBUTES";
export const SET_AI_SERVICE_ID = "SET_AI_SERVICE_ID";
export const SET_AI_SERVICE_ID_AVAILABILITY = "SET_AI_SERVICE_ID_AVAILABILITY";
export const SET_AI_SERVICE_NAME = "SET_AI_SERVICE_NAME";
export const SET_AI_SERVICE_UUID = "SET_AI_SERVICE_UUID";
export const SET_AI_SERVICE_TOUCH_FLAG = "SET_AI_SERVICE_TOUCH_FLAG";
export const SET_AI_SERVICE_GROUPS = "SET_AI_SERVICE_ENDPOINTS";
export const SET_AI_SERVICE_FREE_CALL_SIGNER_ADDRESS = "SET_AI_SERVICE_FREE_CALL_SIGNER_ADDRESS";
export const SET_AI_SERVICE_DETAIL_LEAF = "SET_AI_SERVICE_DETAIL_LEAF";
export const SET_AI_SERVICE_MULTIPLE_DETAILS = "SET_AI_SERVICE_MULTIPLE_DETAILS";
export const SET_SERVICE_PROVIDER_COMMENT = "SET_SERVICE_PROVIDER_COMMENT";

export const setAllAttributes = value => ({ type: SET_ALL_SERVICE_DETAILS_ATTRIBUTES, payload: value });

export const setServiceTouchFlag = touchFlag => ({
  type: SET_AI_SERVICE_TOUCH_FLAG,
  payload: touchFlag,
});

export const setServiceId = serviceId => ({
  type: SET_AI_SERVICE_ID,
  payload: serviceId,
});

export const setServiceAvailability = serviceAvailability => ({
  type: SET_AI_SERVICE_ID_AVAILABILITY,
  payload: serviceAvailability,
});

const setServiceName = serviceName => ({
  type: SET_AI_SERVICE_NAME,
  payload: serviceName,
});

export const setServiceUuid = serviceUuid => ({
  type: SET_AI_SERVICE_UUID,
  payload: serviceUuid,
});

export const setAiServiceDetailLeaf = (name, value) => ({
  type: SET_AI_SERVICE_DETAIL_LEAF,
  payload: { name, value },
});

export const setAiServiceGroups = groups => ({ type: SET_AI_SERVICE_GROUPS, payload: groups });

export const setAiServiceMultipleDetails = entries => ({ type: SET_AI_SERVICE_MULTIPLE_DETAILS, payload: entries });

const setAiServiceFreeCallSignerAddress = address => ({
  type: SET_AI_SERVICE_FREE_CALL_SIGNER_ADDRESS,
  payload: address,
});

export const setServiceProviderComment = comment => ({ type: SET_SERVICE_PROVIDER_COMMENT, payload: [comment] });

const createServiceAPI = (orgUuid, serviceName) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.AI_CREATE_SERVICE(orgUuid);
  const body = { display_name: serviceName };
  const apiOptions = initializeAPIOptions(token, body);
  return await API.post(apiName, apiPath, apiOptions);
};

export const createService = (orgUuid, serviceName) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.CREATE_SERVICE));
    const { data, error } = await dispatch(createServiceAPI(orgUuid, serviceName));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(setServiceName(serviceName));
    dispatch(setServiceUuid(data.service_uuid));
    dispatch(loaderActions.stopAppLoader());
    return data;
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const validateServiceIdAPI = (orgUuid, serviceId) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.AI_SERVICE_ID_VALIDATE(orgUuid, serviceId);
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
};

export const validateServiceId = (orgUuid, serviceId) => async dispatch => {
  try {
    const { data, error } = await dispatch(validateServiceIdAPI(orgUuid, serviceId));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(setServiceAvailability(data));
  } catch (error) {
    dispatch(setServiceAvailability("")); // In Case of error setting it to undefined
    throw error;
  }
};

const generateSaveServicePayload = serviceDetails => {
  const generateEndpointsPayload = endpoints => endpoints.map(endpointValue => ({ endpoint: endpointValue }));
  const generatePricingpayload = pricing =>
    pricing.map(price => ({ default: price.default, price_model: price.priceModel, price_in_cogs: price.priceInCogs }));

  const generateGroupsPayload = () =>
    serviceDetails.groups
      .map(group => {
        if (!group.id) {
          return undefined;
        }
        return {
          group_name: group.name,
          group_id: group.id,
          free_calls: group.freeCallsAllowed,
          free_call_signer_address: serviceDetails.freeCallSignerAddress,
          pricing: generatePricingpayload(group.pricing),
          endpoints: generateEndpointsPayload(group.endpoints),
        };
      })
      .filter(el => el !== undefined);
  // TODO: Certain values are hard coded here.... Need to look at for complete integration
  const payloadForSubmit = {
    service_id: serviceDetails.id,
    display_name: serviceDetails.name,
    short_description: serviceDetails.shortDescription,
    description: serviceDetails.longDescription,
    project_url: serviceDetails.projectURL,
    proto: {},
    assets: {},
    contributors: serviceDetails.contributors.split(",").map(c => ({ name: c, email: "" })),
    ipfs_hash: serviceDetails.ipfsHash,
    contacts: [],
    groups: generateGroupsPayload(),
    // groups: undefined,
    tags: serviceDetails.tags,
    price: serviceDetails.price,
    priceModel: serviceDetails.priceModel,
    comment: {
      service_provider: serviceDetails.comments.serviceProvider,
    },
  };

  return payloadForSubmit;
};

const saveServiceDetailsAPI = (orgUuid, serviceUuid, serviceDetailsPayload) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.SAVE_AI_SERVICE(orgUuid, serviceUuid);
  const body = serviceDetailsPayload;
  const apiOptions = initializeAPIOptions(token, body);
  return await API.put(apiName, apiPath, apiOptions);
};

export const saveServiceDetails = (orgUuid, serviceUuid, serviceDetails) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.SAVE_SERVICE_DETAILS));
    const serviceDetailsPayload = generateSaveServicePayload(serviceDetails);
    const { error } = await dispatch(saveServiceDetailsAPI(orgUuid, serviceUuid, serviceDetailsPayload));
    if (error.code) {
      dispatch(loaderActions.stopAppLoader());
      throw new APIError(error.message);
    }
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const getServiceDetailsAPI = (orgUuid, serviceUuid) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.FETCH_AI_SERVICE(orgUuid, serviceUuid);
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
};

export const getServiceDetails = (orgUuid, serviceUuid) => async dispatch => {
  try {
    const { data, error } = await dispatch(getServiceDetailsAPI(orgUuid, serviceUuid));
    if (error.code) {
      throw new APIError(error.message);
    }
    const service = parseServiceDetails(data, serviceUuid);
    dispatch(setAllAttributes(service));
  } catch (error) {
    throw error;
  }
};

const parseServiceDetails = (data, serviceUuid) => {
  const parseEndpoints = endpoints => endpoints.map(endpointValue => endpointValue.endpoint);
  const parsePricing = pricing =>
    pricing.map(price => ({
      default: price.default,
      priceModel: price.price_model,
      priceInCogs: price.price_in_cogs,
    }));
  const parseGroups = () => {
    if (isEmpty(data.groups)) {
      return defaultGroups;
    }
    data.groups.map(group => ({
      name: group.group_name,
      id: group.group_id,
      pricing: parsePricing(group.pricing),
      endpoints: parseEndpoints(group.endpoints),
      freeCallsAllowed: group.free_calls,
    }));
  };
  // TODO: Certain elements are hard coded need to update after all forms integration
  const service = {
    serviceState: {
      state: data.service_state.state,
    },
    uuid: serviceUuid,
    name: data.display_name,
    id: data.service_id,
    shortDescription: data.short_description,
    longDescription: data.description,
    projectURL: data.project_url,
    proto: {
      ipfsHash: "",
      encoding: "",
      type: "",
    },
    assets: {
      heroImage: {
        url: "",
        ipfsHash: "",
      },
      demoFiles: {
        url: "",
        ipfsHash: "",
      },
      protoFiles: {
        url: "",
        ipfsHash: "",
      },
    },
    contributors: data.contributors.map(c => c.name).join(","),
    ipfsHash: data.metadata_ipfs_hash,
    contacts: [],
    groups: parseGroups(),
    tags: data.tags,
    freecallsAllowed: data.freecalls_allowed,
  };

  return service;
};

const getFreeCallSignerAddressAPI = (orgId, serviceId, groupId) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.SIGNER.name;
  const apiPath = APIPaths.FREE_CALL_SIGNER_ADDRESS;
  const queryParams = { org_id: orgId, service_id: serviceId, group_id: groupId };
  const apiOptions = initializeAPIOptions(token, null, queryParams);
  return await API.get(apiName, apiPath, apiOptions);
};

export const getFreeCallSignerAddress = (orgId, serviceId, groupId) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.FREE_CALL_SIGNER_ADDRESS));
    const { data, error } = await dispatch(getFreeCallSignerAddressAPI(orgId, serviceId, groupId));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(setAiServiceFreeCallSignerAddress(data.free_call_signer_address));
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const submitServiceDetailsForReviewAPI = (orgUuid, serviceUuid, serviceDetailsPayload) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.SUBMIT_AI_SERVICE(orgUuid, serviceUuid);
  const body = serviceDetailsPayload;
  const apiOptions = initializeAPIOptions(token, body);
  return await API.put(apiName, apiPath, apiOptions);
};

export const submitServiceDetailsForReview = (orgUuid, serviceUuid, serviceDetails) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.FREE_CALL_SIGNER_ADDRESS));
    const serviceDetailsPayload = generateSaveServicePayload(serviceDetails);
    const { error } = await dispatch(submitServiceDetailsForReviewAPI(orgUuid, serviceUuid, serviceDetailsPayload));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const publishToIPFSAPI = (orgUuid, serviceUuid) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.PUBLISH_TO_BLOCKCHAIN(orgUuid, serviceUuid);
  const apiOptions = initializeAPIOptions(token);
  return await API.post(apiName, apiPath, apiOptions);
};

export const publishToIPFS = (orgUuid, serviceUuid) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.PUBLISH_SERVICE_TO_IPFS));
    const { data, error } = await dispatch(publishToIPFSAPI(orgUuid, serviceUuid));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(loaderActions.stopAppLoader());
    return data;
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const saveTransactionAPI = (orgUuid, serviceUuid, hash, publisherAddress) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.SAVE_SERVICE_TRANSACTION(orgUuid, serviceUuid);
  const body = { transaction_hash: hash, wallet_address: publisherAddress };
  const apiOptions = initializeAPIOptions(token, body);
  return await API.post(apiName, apiPath, apiOptions);
};

const saveTransaction = (orgUuid, serviceUuid, hash, ownerAddress) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.SAVE_SERVICE_TRANSACTION));
    const { error } = await dispatch(saveTransactionAPI(orgUuid, serviceUuid, hash, ownerAddress));
    if (error.code) {
      throw new APIError(error.message);
    }
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

export const publishToBlockchain = (organization, serviceDetails, serviceMetadataURI, tags) => async dispatch => {
  const orgId = organization.id;
  const serviceId = serviceDetails.id;
  try {
    const sdk = await initSDK();
    dispatch(loaderActions.startAppLoader(LoaderContent.METAMASK_TRANSACTION));
    return new Promise((resolve, reject) => {
      const method = sdk._registryContract
        .createServiceRegistration(orgId, serviceId, serviceMetadataURI, tags)
        .send()
        .on(blockChainEvents.TRANSACTION_HASH, async hash => {
          await dispatch(saveTransaction(organization.uuid, serviceDetails.uuid, hash, sdk.account.address));
          dispatch(loaderActions.startAppLoader(LoaderContent.PUBLISH_SERVICE_TO_BLOCKCHAIN));
        })
        .once(blockChainEvents.CONFIRMATION, async () => {
          dispatch(loaderActions.stopAppLoader());
          resolve();
          await method.off();
        })
        .on(blockChainEvents.ERROR, error => {
          dispatch(loaderActions.stopAppLoader());
          reject(error);
        });
    });
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const uploadFileAPI = (assetType, fileBinaryData, contentType, orgUuid, serviceUuid) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.UTILITY.name;
  const apiPath = APIPaths.UPLOAD_FILE;
  const additionalHeaders = { "Content-Type": contentType };
  const body = fileBinaryData;
  const queryParams = { type: assetType, org_uuid: orgUuid, service_uuid: serviceUuid };
  const apiOptions = initializeAPIOptions(token, body, queryParams, additionalHeaders);
  return await API.post(apiName, apiPath, apiOptions);
};

export const uploadFile = (assetType, fileBinaryData, contentType, orgUuid, serviceUuid) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.UPLOAD_FILE));
    const { data, error } = await dispatch(uploadFileAPI(assetType, fileBinaryData, contentType, orgUuid, serviceUuid));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(loaderActions.stopAppLoader());
    return data;
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

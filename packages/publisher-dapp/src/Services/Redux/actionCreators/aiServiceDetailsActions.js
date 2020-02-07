import { API } from "aws-amplify";

import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { APIError } from "shared/dist/utils/API";
import { loaderActions } from "./";
import { LoaderContent } from "../../../Utils/Loader";

export const SET_ALL_ATTRIBUTES = "SET_ALL_ATTRIBUTES";
export const SET_AI_SERVICE_ID = "SET_AI_SERVICE_ID";
export const SET_AI_SERVICE_ID_AVAILABILITY = "SET_AI_SERVICE_ID_AVAILABILITY";
export const SET_AI_SERVICE_NAME = "SET_AI_SERVICE_NAME";
export const SET_AI_SERVICE_UUID = "SET_AI_SERVICE_UUID";
export const SET_AI_SERVICE_TOUCH_FLAG = "SET_AI_SERVICE_TOUCH_FLAG";
export const SET_AI_SERVICE_GROUPS = "SET_AI_SERVICE_ENDPOINTS";
export const SET_AI_SERVICE_FREE_CALL_SIGNER_ADDRESS = "SET_AI_SERVICE_FREE_CALL_SIGNER_ADDRESS";
export const SET_AI_SERVICE_DETAIL_LEAF = "SET_AI_SERVICE_DETAIL_LEAF";
export const SET_AI_SERVICE_MULTIPLE_DETAILS = "SET_AI_SERVICE_MULTIPLE_DETAILS";

export const setAllAttributes = value => ({ type: SET_ALL_ATTRIBUTES, payload: value });

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

const setServiceUuid = serviceUuid => ({
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

const createServicePayload = serviceDetails => {
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
    groups: [],
    tags: serviceDetails.tags,
    freecalls_allowed: 0,
    price: serviceDetails.price,
    priceModel: serviceDetails.priceModel,
    freeCallsAllowed: serviceDetails.freeCallsAllowed,
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
    const serviceDetailsPayload = createServicePayload(serviceDetails);
    const { error } = await dispatch(saveServiceDetailsAPI(orgUuid, serviceUuid, serviceDetailsPayload));
    if (error.code) {
      throw new APIError(error.message);
    }
  } catch (error) {
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
    const service = createReduxServicePayload(data, serviceUuid);
    dispatch(setAllAttributes(service));
  } catch (error) {
    throw error;
  }
};

const createReduxServicePayload = (data, serviceUuid) => {
  // TODO: Certain elements are hard coded need to update after all forms integration
  const service = {
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
    groups: [
      {
        groupId: "",
        pricing: [],
        endpoints: [],
      },
    ],
    tags: [],
    freecallsAllowed: "",
    freeCallSignerAddress: "",
    price: "",
    priceModel: "fixed_price",
    freeCallsAllowed: "",
    endpoints: [],
  };

  return service;
};

const getFreeCallSignerAddressAPI = (orgId, serviceId, groupId) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.SIGNER.name;
  const apiPath = APIPaths.FREE_CALL_SIGNER_ADDRESS;
  const queryParams = { org_id: orgId, service_id: serviceId, group_id: groupId };
  const apiOptions = initializeAPIOptions(token, queryParams);
  return await API.get(apiName, apiPath, apiOptions);
};

export const getFreeCallSignerAddress = (orgId, serviceId, groupId) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.FREE_CALL_SIGNER_ADDRESS));
    const { data, error } = await dispatch(getFreeCallSignerAddressAPI(orgId, serviceId, groupId));
    if (error.code) {
      throw new APIError(error.message);
    }
    setAiServiceFreeCallSignerAddress(data.freecall_signer_address);
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

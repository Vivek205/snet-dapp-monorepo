import { API } from "aws-amplify";
import omitBy from "lodash/omitBy";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";
import isEmpty from "lodash/isEmpty";

import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { loaderActions } from "./";
import { LoaderContent } from "../../../Utils/Loader";
import { responseStatus, APIError } from "shared/dist/utils/API";
import { organizationSetupStatuses, addressTypes, orgSubmitActions } from "../../../Utils/organizationSetup";
import { initSDK } from "shared/dist/utils/snetSdk";

export const SET_ALL_ATTRIBUTES = "SET_ALL_ATTRIBUTES";
export const SET_ONE_BASIC_DETAIL = "SET_ONE_BASIC_DETAIL";
export const SET_CONTACTS = "SET_CONTACTS";
export const SET_HERO_IMAGE = "SET_HERO_IMAGE";
export const SET_GROUPS = "SET_GROUPS";
export const SET_ORGANIZATION_STATUS = "SET_ORGANIZATION_STATUS";
export const SET_HQ_ADDRESS_DETAIL = "SET_HQ_ADDRES_DETAIL";
export const SET_MAILING_ADDRESS_DETAIL = "SET_MAILING_ADDRESS_DETAIL";

export const setAllAttributes = value => ({ type: SET_ALL_ATTRIBUTES, payload: value });

export const setOneBasicDetail = (name, value) => ({ type: SET_ONE_BASIC_DETAIL, payload: { [name]: value } });

export const setContacts = contacts => ({ type: SET_CONTACTS, payload: contacts });

export const setHeroImage = (raw, fileType) => ({ type: SET_HERO_IMAGE, payload: { raw, fileType } });

export const setGroups = groups => ({ type: SET_GROUPS, payload: groups });

export const setOrganizationStatus = status => ({ type: SET_ORGANIZATION_STATUS, payload: status });

export const setHqAddressDetail = (name, value) => ({ type: SET_HQ_ADDRESS_DETAIL, payload: { [name]: value } });

export const setMailingAddressDetail = (name, value) => ({
  type: SET_MAILING_ADDRESS_DETAIL,
  payload: { [name]: value },
});

const payloadForSubmit = organization => {
  // prettier-ignore
  const { id, uuid,duns, name, type, website, shortDescription, longDescription, metadataIpfsHash,
    contacts, assets, ownerFullName, hqAddress, mailingAddress, sameMailingAddress } = organization;

  const payload = {
    org_id: id,
    org_uuid: uuid,
    org_name: name,
    duns_no: duns,
    org_type: type,
    owner_name: ownerFullName,
    metadata_ipfs_hash: metadataIpfsHash,
    description: longDescription,
    short_description: shortDescription,
    url: website,
    contacts,
    mail_address_same_hq_address: sameMailingAddress,
    addresses: [
      {
        address_type: addressTypes.HEAD_QUARTERS,
        street_address: hqAddress.street,
        apartment: hqAddress.apartment,
        city: hqAddress.city,
        pincode: hqAddress.zip,
        country: hqAddress.country,
      },
      {
        address_type: addressTypes.MAILING,
        street_address: sameMailingAddress ? hqAddress.street : mailingAddress.street,
        apartment: sameMailingAddress ? hqAddress.apartment : mailingAddress.apartment,
        city: sameMailingAddress ? hqAddress.city : mailingAddress.city,
        pincode: sameMailingAddress ? hqAddress.zip : mailingAddress.zip,
        country: sameMailingAddress ? hqAddress.country : mailingAddress.country,
      },
    ],
    assets: {
      hero_image: {
        raw: assets.heroImage.raw,
        file_type: assets.heroImage.fileType,
      },
    },
    ownerAddress: "",
    groups: [],
  };

  return payload;
};

const getStatusAPI = async () => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.ORG_SETUP;
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
};

export const getStatus = async dispatch => {
  const { data } = await getStatusAPI();
  if (isEmpty(data)) {
    return;
  }
  const organization = {
    status: data[0].status,
    id: data[0].org_id,
    uuid: data[0].org_uuid,
    // TODO rename data[0].name to data[0].org_name
    name: data[0].name,
    type: data[0].org_type,
    description: data[0].description,
    shortDescription: data[0].short_description,
    website: data[0].url,
    duns: data[0].duns_no,
    contacts: data[0].contacts,
    assets: {
      heroImage: {
        raw: data[0].assets.hero_image.url,
        fileType: "",
      },
    },
    // assets: data[0].assets,

    // groups: data[0].groups,
  };

  console.log("response", data, organization);

  // const enhancedOrg = omitBy(organization, isEmpty);
  const enhancedOrg = pickBy({ a: null, b: 1, c: undefined }, identity);

  // console.log("response", data, organization, enhancedOrg);
  dispatch(setAllAttributes(organization));
};

const finishLaterAPI = async payload => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.ORG_SETUP;
  const queryStringParameters = { action: orgSubmitActions.DRAFT };
  const apiOptions = initializeAPIOptions(token, payload, queryStringParameters);
  return await API.post(apiName, apiPath, apiOptions);
};

export const finishLater = organization => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.ORG_SETUP_FINISH_LATER));
    const payload = payloadForSubmit(organization);
    await finishLaterAPI(payload);
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

export const submitForApprovalAPI = async payload => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.ORG_SETUP;
  const queryStringParameters = { action: orgSubmitActions.SUBMIT };
  const apiOptions = initializeAPIOptions(token, payload, queryStringParameters);
  return await API.post(apiName, apiPath, apiOptions);
};

export const submitForApproval = organization => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.ORG_SETUP_SUBMIT_FOR_APPROVAL));
    const payload = payloadForSubmit(organization);
    const { status, error } = await submitForApprovalAPI(payload);
    if (status !== responseStatus.SUCCESS) {
      throw new APIError(error.message);
    }
    dispatch(setOrganizationStatus(organizationSetupStatuses.APPROVAL_PENDING));
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const publishToBlockchainAPI = async uuid => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.PUBLISH_TO_BLOCKCHAIN(uuid);
  const apiOptions = initializeAPIOptions(token);
  return await API.post(apiName, apiPath, apiOptions);
};

export const publishToBlockchain = uuid => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.ORG_SETUP_PUBLISH_TO_BLOCKCHAIN));
    const { status, data, error } = await publishToBlockchainAPI(uuid);
    dispatch(setOneBasicDetail("metadataIpfsHash", data[0].metadata_ipfs_hash));
    if (status !== responseStatus.SUCCESS) {
      throw new APIError(error.message);
    }
    dispatch(setOrganizationStatus(organizationSetupStatuses.PUBLISHED));
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

export const createOrganization = async organization => {
  const sdk = await initSDK();
  const orgId = organization.id;
  const orgMetadataURI = organization.metadataIpfsHash;
  const members = ["0x3Bb9b2499c283cec176e7C707Ecb495B7a961ebf"];
  const hash = await sdk._registryContract.createOrganization(orgId, orgMetadataURI, members);
  return hash;
};

const saveTransactionAPI = async (orgId, hash) => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.SAVE_TRANSACTION(orgId);
  const apiOptions = initializeAPIOptions(token);
  return await API.post(apiName, apiPath, apiOptions);
};

export const saveTransaction = (orgId, hash) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.ORG_SETUP_SAVING_TRANSACTION));
    const { status, data, error } = await saveTransactionAPI(orgId, hash);
    if (status !== responseStatus.SUCCESS) {
      throw new APIError(error.message);
    }
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

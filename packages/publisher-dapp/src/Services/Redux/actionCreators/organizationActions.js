import { API } from "aws-amplify";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { loaderActions } from "./";
import { LoaderContent } from "../../../Utils/Loader";
import { responseStatus, APIError } from "shared/dist/utils/API";
import { organizationSetupStatuses } from "../../../Utils/organizationSetup";

export const SET_ONE_BASIC_DETAIL = "SET_ONE_BASIC_DETAIL";
export const SET_CONTACTS = "SET_CONTACTS";
export const SET_HERO_IMAGE = "SET_HERO_IMAGE";
export const SET_GROUPS = "SET_GROUPS";
export const SET_ORGANIZATION_STATUS = "SET_ORGANIZATION_STATUS";
export const SET_HQ_ADDRESS_DETAIL = "SET_HQ_ADDRES_DETAIL";
export const SET_MAILING_ADDRESS_DETAIL = "SET_MAILING_ADDRESS_DETAIL";

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
  const { id, uuid,duns, name,type, website, shortDescription, longDescription, 
    contacts, assets, ownerFullName, hqAddress, mailingAddress, sameMailingAddress } = organization;

  const payload = {
    org_id: id,
    org_uuid: uuid,
    org_name: name,
    duns_no: duns,
    org_type: type,
    metadata_ipfs_hash: "",
    description: longDescription,
    short_description: shortDescription,
    url: website,
    contacts,
    address: {
      headquater_address: {
        street_address: hqAddress.street,
        apartment: hqAddress.apartment,
        city: hqAddress.city,
        pincode: hqAddress.zip,
        country: hqAddress.country,
      },
      mail_address_same_hq_address: sameMailingAddress,
      mailing_address: {
        street_address: mailingAddress.street,
        apartment: mailingAddress.apartment,
        city: mailingAddress.city,
        pincode: mailingAddress.zip,
        country: mailingAddress.country,
      },
    },
    assets: {
      hero_image: {
        raw: assets.heroImage.raw,
        file_type: assets.heroImage.fileType,
      },
    },
    groups: [],
  };

  return payload;
};

export const finishLaterAPI = async payload => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.FINISH_LATER;
  const apiOptions = initializeAPIOptions(token, payload);
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
  const apiPath = APIPaths.SUBMIT_FOR_APPROVAL(payload.uuid);
  const apiOptions = initializeAPIOptions(token, payload);
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
    dispatch(setOrganizationStatus(organizationSetupStatuses.BLOCKCHAIN_SUBMITTED));
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
    const { status, error } = await publishToBlockchainAPI(uuid);
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

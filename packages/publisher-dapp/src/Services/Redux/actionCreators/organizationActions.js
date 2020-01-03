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
  const apiOptions = initializeAPIOptions(token, payload,{"action":"draft"});
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
  const apiPath = APIPaths.SUBMIT_FOR_APPROVAL;
  const apiOptions = initializeAPIOptions(token, payload,{"action":"submit"});
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
    createOrganization()
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


export const createOrganization = async () => {
  const registryContractAddress = "0x663422c6999ff94933dbcb388623952cf2407f6f"
  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);
  let registryAbi=[{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"}],"name":"OrganizationCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"}],"name":"OrganizationModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"}],"name":"OrganizationDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"},{"indexed":true,"name":"serviceId","type":"bytes32"},{"indexed":false,"name":"metadataURI","type":"bytes"}],"name":"ServiceCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"},{"indexed":true,"name":"serviceId","type":"bytes32"},{"indexed":false,"name":"metadataURI","type":"bytes"}],"name":"ServiceMetadataModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"},{"indexed":true,"name":"serviceId","type":"bytes32"}],"name":"ServiceTagsModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"},{"indexed":true,"name":"serviceId","type":"bytes32"}],"name":"ServiceDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"},{"indexed":true,"name":"typeRepositoryId","type":"bytes32"}],"name":"TypeRepositoryCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"},{"indexed":true,"name":"typeRepositoryId","type":"bytes32"}],"name":"TypeRepositoryModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orgId","type":"bytes32"},{"indexed":true,"name":"typeRepositoryId","type":"bytes32"}],"name":"TypeRepositoryDeleted","type":"event"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"orgMetadataURI","type":"bytes"},{"name":"members","type":"address[]"}],"name":"createOrganization","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"newOwner","type":"address"}],"name":"changeOrganizationOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"orgMetadataURI","type":"bytes"}],"name":"changeOrganizationMetadataURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"newMembers","type":"address[]"}],"name":"addOrganizationMembers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"existingMembers","type":"address[]"}],"name":"removeOrganizationMembers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"}],"name":"deleteOrganization","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"serviceId","type":"bytes32"},{"name":"metadataURI","type":"bytes"},{"name":"tags","type":"bytes32[]"}],"name":"createServiceRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"serviceId","type":"bytes32"},{"name":"metadataURI","type":"bytes"}],"name":"updateServiceRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"serviceId","type":"bytes32"},{"name":"tags","type":"bytes32[]"}],"name":"addTagsToServiceRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"serviceId","type":"bytes32"},{"name":"tags","type":"bytes32[]"}],"name":"removeTagsFromServiceRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"serviceId","type":"bytes32"}],"name":"deleteServiceRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"repositoryId","type":"bytes32"},{"name":"repositoryURI","type":"bytes"},{"name":"tags","type":"bytes32[]"}],"name":"createTypeRepositoryRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"repositoryId","type":"bytes32"},{"name":"repositoryURI","type":"bytes"}],"name":"updateTypeRepositoryRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"repositoryId","type":"bytes32"},{"name":"tags","type":"bytes32[]"}],"name":"addTagsToTypeRepositoryRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"repositoryId","type":"bytes32"},{"name":"tags","type":"bytes32[]"}],"name":"removeTagsFromTypeRepositoryRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"repositoryId","type":"bytes32"}],"name":"deleteTypeRepositoryRegistration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"listOrganizations","outputs":[{"name":"orgIds","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orgId","type":"bytes32"}],"name":"getOrganizationById","outputs":[{"name":"found","type":"bool"},{"name":"id","type":"bytes32"},{"name":"orgMetadataURI","type":"bytes"},{"name":"owner","type":"address"},{"name":"members","type":"address[]"},{"name":"serviceIds","type":"bytes32[]"},{"name":"repositoryIds","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orgId","type":"bytes32"}],"name":"listServicesForOrganization","outputs":[{"name":"found","type":"bool"},{"name":"serviceIds","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"serviceId","type":"bytes32"}],"name":"getServiceRegistrationById","outputs":[{"name":"found","type":"bool"},{"name":"id","type":"bytes32"},{"name":"metadataURI","type":"bytes"},{"name":"tags","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orgId","type":"bytes32"}],"name":"listTypeRepositoriesForOrganization","outputs":[{"name":"found","type":"bool"},{"name":"repositoryIds","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orgId","type":"bytes32"},{"name":"repositoryId","type":"bytes32"}],"name":"getTypeRepositoryById","outputs":[{"name":"found","type":"bool"},{"name":"id","type":"bytes32"},{"name":"repositoryURI","type":"bytes"},{"name":"tags","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"listServiceTags","outputs":[{"name":"tags","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tag","type":"bytes32"}],"name":"listServicesForTag","outputs":[{"name":"orgIds","type":"bytes32[]"},{"name":"serviceIds","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"listTypeRepositoryTags","outputs":[{"name":"tags","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tag","type":"bytes32"}],"name":"listTypeRepositoriesForTag","outputs":[{"name":"orgIds","type":"bytes32[]"},{"name":"repositoryIds","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]

  const registryInstance = window.web3.eth.contract(registryAbi).at(registryContractAddress);
  let orgId = "TestId1233326"
  let accounts=["0x3Bb9b2499c283cec176e7C707Ecb495B7a961ebf"]
  let orgMetadataURI = "ipfs://QmUfwZ7pEWBE5zSepKpHDaPibQxpPqoEDRo5Kzai8h5U8B" // Check if it is the same way we are doing in the CLI
  await registryInstance.createOrganization(orgId, orgMetadataURI, [accounts[0]],function(err,hash){
    console.log(hash)
  }); // accounts[1] gives me a one member, in case multiple need to seperate with comma or we can pass the array variable itself.



};
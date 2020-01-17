import { API } from "aws-amplify";
import { initializeAPIOptions } from "../../../Utils/API";
import { memberStatus } from "../../../Utils/TeamMembers";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { loaderActions } from ".";
import { LoaderContent } from "../../../Utils/Loader";
import { APIError } from "shared/dist/utils/API";
import { setUserInviteeStatus } from "./userActions/onboardingActions";

export const SET_MEMBERS_FOR_STATUS = "SET_MEMBERS_FOR_STATUS";

export const setMembersForStatus = (status, members) => ({
  type: SET_MEMBERS_FOR_STATUS,
  payload: { [status]: members },
});

const getMembersAPI = (status, uuid) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.GET_MEMBERS(uuid);
  const queryStringParameters = { status };
  const apiOptions = initializeAPIOptions(token, null, queryStringParameters);
  return await API.get(apiName, apiPath, apiOptions);
};

export const getMembers = (status, uuid) => async dispatch => {
  const { data } = await dispatch(getMembersAPI(status, uuid));
  setMembersForStatus(status, data);
};

export const getAllMembers = uuid => async dispatch => {
  const promises = Object.values(memberStatus).map(status => {
    return dispatch(getMembers(status, uuid));
  });
  await Promise.all(promises);
};

const generateInviteMembersPayload = members => members.map(member => ({ username: member.trim() }));

const inviteMembersAPI = (payload, uuid) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.INVITE_MEMBERS(uuid);
  const apiOptions = initializeAPIOptions(token, payload);
  return await API.get(apiName, apiPath, apiOptions);
};

export const inviteMembers = (members, uuid) => async dispatch => {
  const payload = generateInviteMembersPayload(members);
  await dispatch(inviteMembersAPI(payload, uuid));
};

const acceptInvitationAPI = (orgUuid, payload) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.ACCEPT_INVITATION(orgUuid);
  const apiOptions = initializeAPIOptions(token, payload);
  return await API.post(apiName, apiPath, apiOptions);
};

export const acceptInvitation = (orgUuid, payload) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.ACCEPT_INVITATION));
    const { data, error } = await dispatch(acceptInvitationAPI(orgUuid, payload));
    if (error) {
      throw new APIError(error);
    }
    dispatch(loaderActions.stopAppLoader());
    return data;
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const verifyInvitationCodeAPI = code => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.VERIFY_INIVITATION;
  const queryParameters = {
    invite_code: code,
  };
  const apiOptions = initializeAPIOptions(token, null, queryParameters);
  return await API.post(apiName, apiPath, apiOptions);
};

export const verifyInvitation = code => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.VERIFY_INVITATION_CODE));
    const { data, error } = await dispatch(verifyInvitationCodeAPI(code));
    if (error) {
      throw new APIError(error);
    }
    dispatch(loaderActions.stopAppLoader());
    return data;
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};

const getMemberStatusAPI = (username, orgUuid) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.GET_MEMBER_STATUS(orgUuid, username);
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
};

export const getMemberStatus = (username, orgUuid) => async dispatch => {
  const { data, error } = await dispatch(getMemberStatusAPI(username, orgUuid));
  if (error) {
    throw new APIError(error);
  }
  if (data[0] && data[0].status) {
    setUserInviteeStatus(data[0].status);
  }
};

import { API } from "aws-amplify";
import { initializeAPIOptions } from "../../../Utils/API";
import { memberStatus } from "../../../Utils/TeamMembers";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { fetchAuthenticatedUser } from "./userActions/loginActions";

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

const generateInviteMembersPayload = members => members.map(member => ({ username: member }));

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

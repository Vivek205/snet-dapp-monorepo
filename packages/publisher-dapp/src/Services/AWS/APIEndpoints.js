export const APIEndpoints = {
  REGISTRY: {
    name: "Registry",
    endpoint: process.env.REACT_APP_REGISTRY_ENDPOINT,
  },
  USER: {
    name: "User",
    endpoint: process.env.REACT_APP_USER_ENDPOINT,
  },
};

export const APIPaths = {
  USER_PREFERENCES: "/user/preference",
  ORG_SETUP: "/org",
  GET_MEMBERS: orgUuid => `/org/${orgUuid}/member`,
  GET_MEMBER_STATUS: (orgUuid, username) => `/org/${orgUuid}/member/${username}`,
  INVITE_MEMBERS: orgUuid => `/org/${orgUuid}/member/invite`,
  PUBLISH_MEMBERS: orgUuid => `/org/${orgUuid}/member/publish`,
  PUBLISH_TO_IPFS: orgUuid => `/org/${orgUuid}/ipfs_publish`,
  SAVE_TRANSACTION: orgUuid => `/org/${orgUuid}/transaction`,
  ACCEPT_INVITATION: "/org/member/register",
  VERIFY_INIVITATION: "/org/member/verify",
  AI_SERVICE_LIST: orgUuid => `/org/${orgUuid}/services`,
  AI_CREATE_SERVICE: orgUuid => `/org/${orgUuid}/service`,
  AI_SERVICE_ID_VALIDATE: (orgUuid, serviceId) => `/org/${orgUuid}/verify?service_id=${serviceId}`,
};

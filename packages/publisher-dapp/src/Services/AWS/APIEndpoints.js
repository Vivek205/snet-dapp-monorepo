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
  INVITE_MEMBERS: orgUuid => `/org/${orgUuid}/member/invite`,
  PUBLISH_TO_IPFS: orgUuid => `/org/${orgUuid}/ipfs_publish`,
  SAVE_TRANSACTION: orgUuid => `/org/${orgUuid}/transaction`,
  ACCEPT_INVITATION: orgUuid => `/org/${orgUuid}/member/register`,
  VERIFY_INIVITATION: "/org/member/verify",
};

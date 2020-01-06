export const APIEndpoints = {
  REGISTRY: {
    name: "Registry",
    endpoint: process.env.REACT_APP_REGISTRY_ENDPOINT,
  },
};

export const APIPaths = {
  ORG_SETUP: "/org",
  PUBLISH_TO_BLOCKCHAIN: orgUuid => `/org/${orgUuid}/publish`,
  SAVE_TRANSACTION: orgId => `/org/${orgId}/transaction`,
};

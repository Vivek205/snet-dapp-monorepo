export const APIEndpoints = {
  REGISTRY: {
    name: "Registry",
    endpoint: process.env.REACT_APP_REGISTRY_ENDPOINT,
  },
};

export const APIPaths = {
  ORG_SETUP: "/org",
  PUBLISH_TO_IPFS: orgUuid => `/org/${orgUuid}/ipfs_publish`,
  SAVE_TRANSACTION: orgUuid => `/org/${orgUuid}/transaction`,
};

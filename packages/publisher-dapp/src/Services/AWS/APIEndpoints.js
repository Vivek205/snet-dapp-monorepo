export const APIEndpoints = {
  REGISTRY: {
    name: "Registry",
    endpoint: process.env.REACT_APP_REGISTRY_ENDPOINT,
  },
};

export const APIPaths = {
  FINISH_LATER: "/org",
  SUBMIT_FOR_APPROVAL: "/org",
  PUBLISH_TO_BLOCKCHAIN: org_uuid => `/org/${org_uuid}/publish`,
};

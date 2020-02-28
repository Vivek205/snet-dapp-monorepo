export const APIEndpoints = {
  REGISTRY: {
    name: "Registry",
    endpoint: process.env.REACT_APP_REGISTRY_ENDPOINT,
  },
  USER: {
    name: "User",
    endpoint: process.env.REACT_APP_USER_ENDPOINT,
  },
  UTILITY: {
    name: "utility",
    endpoint: process.env.REACT_APP_UTILITY_ENDPOINT,
  },
  STAKE: {
    name: "STAKE",
    endpoint: process.env.REACT_APP_STAKE_ENDPOINT,
  },
  ORCHESTRATOR: {
    name: "Orchestrator",
    endpoint: process.env.REACT_APP_ORCHESTRATOR_ENDPOINT,
  },
};

export const APIPaths = {
  USER_PREFERENCES: "/user/preference",
  WALLET: "/wallet",
  REGISTER_WALLET: "/wallet/register",
  ACTIVE_STAKE_WINDOW: (status, staker) => `/stake-window?status=${status}&staker=${staker}`,
};

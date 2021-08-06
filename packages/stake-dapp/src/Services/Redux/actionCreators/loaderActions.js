export const SET_APP_LOADER = "SET_APP_LOADER";
export const SET_AI_SERVICE_LIST_LOADER = "SET_AI_SERVICE_LIST_LOADER";
export const SET_INIT_SERVICE_CREATION_LOADER = "SET_INIT_SERVICE_CREATION_LOADER";

export const SET_STAKE_WINDOW_LOADER = "SET_STAKE_WINDOW_LOADER";
export const SET_STAKE_ACTIVE_LOADER = "SET_STAKE_ACTIVE_LOADER";
export const SET_STAKE_CLAIM_LOADER = "SET_STAKE_CLAIM_LOADER";
export const SET_STAKE_TXN_LOADER = "SET_STAKE_TXN_LOADER";

export const SET_UPCOMING_SESSION_LOADER = "SET_UPCOMING_SESSION_LOADER";

export const startAppLoader = loaderContent => ({
  type: SET_APP_LOADER,
  payload: { isLoading: true, title: loaderContent.title, content: loaderContent.content },
});

export const stopAppLoader = () => ({
  type: SET_APP_LOADER,
  payload: { isLoading: false, title: "", content: "" },
});

export const startStakeWindowLoader = () => ({
  type: SET_STAKE_WINDOW_LOADER,
  payload: { isLoading: true },
});

export const stopStakeWindowLoader = () => ({
  type: SET_STAKE_WINDOW_LOADER,
  payload: { isLoading: false },
});

export const startActiveStakeLoader = () => ({
  type: SET_STAKE_ACTIVE_LOADER,
  payload: { isLoading: true },
});

export const stopActiveStakeLoader = () => ({
  type: SET_STAKE_ACTIVE_LOADER,
  payload: { isLoading: false },
});

export const startClaimStakeLoader = () => ({
  type: SET_STAKE_CLAIM_LOADER,
  payload: { isLoading: true },
});

export const stopClaimStakeLoader = () => ({
  type: SET_STAKE_CLAIM_LOADER,
  payload: { isLoading: false },
});

export const startTxnStakeLoader = () => ({
  type: SET_STAKE_TXN_LOADER,
  payload: { isLoading: true },
});

export const stopTxnStakeLoader = () => ({
  type: SET_STAKE_TXN_LOADER,
  payload: { isLoading: false },
});

export const startSessionLoader = () => ({
  type: SET_UPCOMING_SESSION_LOADER,
  payload: { isLoading: true },
});

export const stopSessionLoader = () => ({
  type: SET_UPCOMING_SESSION_LOADER,
  payload: { isLoading: false },
});

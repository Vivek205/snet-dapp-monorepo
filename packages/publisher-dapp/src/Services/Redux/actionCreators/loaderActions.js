export const SET_APP_LOADER = "SET_APP_LOADER";
export const SET_AI_SERVICE_LIST_LOADER = "SET_AI_SERVICE_LIST_LOADER";

export const startAppLoader = loaderContent => ({
  type: SET_APP_LOADER,
  payload: { isLoading: true, title: loaderContent.title, content: loaderContent.content },
});

export const stopAppLoader = () => ({
  type: SET_APP_LOADER,
  payload: { isLoading: false, title: "", content: "" },
});

export const startAiServiceListLoader = () => ({
  type: SET_AI_SERVICE_LIST_LOADER,
  payload: { isLoading: true },
});

export const stopAiServiceListLoader = () => ({
  type: SET_AI_SERVICE_LIST_LOADER,
  payload: { isLoading: false },
});

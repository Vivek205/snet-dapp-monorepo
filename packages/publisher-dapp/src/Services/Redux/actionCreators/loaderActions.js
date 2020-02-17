export const SET_APP_LOADER = "SET_APP_LOADER";
export const SET_AI_SERVICE_LIST_LOADER = "SET_AI_SERVICE_LIST_LOADER";
export const SET_INIT_SERVICE_CREATION_LOADER = "SET_INIT_SERVICE_CREATION_LOADER";
export const SET_VALIDATE_SERVICE_ID_LOADER = "SET_VALIDATE_SERVICE_ID_LOADER";

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

export const startInitServiceCreationLoader = loaderContent => ({
  type: SET_INIT_SERVICE_CREATION_LOADER,
  payload: { isLoading: true, title: loaderContent.title, content: loaderContent.content },
});

export const stopInitServiceCreationLoader = () => ({
  type: SET_INIT_SERVICE_CREATION_LOADER,
  payload: { isLoading: false, title: "", content: "" },
});

export const startValidateServiceIdLoader = () => ({
  type: SET_VALIDATE_SERVICE_ID_LOADER,
  payload: { isLoading: true },
});

export const stopValidateServiceIdLoader = () => ({
  type: SET_VALIDATE_SERVICE_ID_LOADER,
  payload: { isLoading: false },
});

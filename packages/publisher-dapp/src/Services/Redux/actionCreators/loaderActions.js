export const SET_APP_LOADER = "SET_APP_LOADER";

export const startAppLoader = loaderContent => ({
  type: SET_APP_LOADER,
  payload: { isLoading: true, title: loaderContent.title, content: loaderContent.content },
});

export const stopAppLoader = () => ({
  type: SET_APP_LOADER,
  payload: { isLoading: false, title: "", content: "" },
});

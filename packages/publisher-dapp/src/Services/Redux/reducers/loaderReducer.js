import { loaderActions } from "../actionCreators";

const initialState = {
  app: { isLoading: false, title: "", content: "" },
  aiServiceList: { isLoading: false },
  initServiceCreation: { isLoading: false, title: "", content: "" },
  validateServiceId: { isLoading: false },
  validateOrgId: { isLoading: false },
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case loaderActions.SET_APP_LOADER:
      return { ...state, app: action.payload };
    case loaderActions.SET_AI_SERVICE_LIST_LOADER:
      return { ...state, aiServiceList: action.payload };
    case loaderActions.SET_INIT_SERVICE_CREATION_LOADER:
      return { ...state, initServiceCreation: action.payload };
    case loaderActions.SET_VALIDATE_SERVICE_ID_LOADER:
      return { ...state, validateServiceId: action.payload };
    case loaderActions.SET_VALIDATE_ORGANIZATION_ID_LOADER:
      return { ...state, validateOrgId: action.payload };

    default:
      return state;
  }
};

export default loaderReducer;

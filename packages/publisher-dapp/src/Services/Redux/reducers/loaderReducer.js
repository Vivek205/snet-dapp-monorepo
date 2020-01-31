import { loaderActions } from "../actionCreators";

const initialState = {
  app: { isLoading: false, title: "", content: "" },
  aiServiceList: { isLoading: false },
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case loaderActions.SET_APP_LOADER:
      return { ...state, app: action.payload };
    case loaderActions.SET_AI_SERVICE_LIST_LOADER:
      return { ...state, aiServiceList: action.payload };
    default:
      return state;
  }
};

export default loaderReducer;

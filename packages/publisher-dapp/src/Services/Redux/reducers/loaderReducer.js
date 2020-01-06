import { loaderActions } from "../actionCreators";

const initialState = {
  app: { isLoading: false, title: "", content: "" },
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case loaderActions.SET_APP_LOADER:
      return { ...state, app: action.payload };
    default:
      return state;
  }
};

export default loaderReducer;

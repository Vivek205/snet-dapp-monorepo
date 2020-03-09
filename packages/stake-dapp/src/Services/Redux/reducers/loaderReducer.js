import { loaderActions } from "../actionCreators";

const initialState = {
  app: { isLoading: false, title: "", content: "" },

  activeStakeWindow: { isLoading: false },
  incubationStakeList: { isLoading: false },
  claimStakeList: { isLoading: false },
  txnList: { isLoading: false },
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case loaderActions.SET_APP_LOADER:
      return { ...state, app: action.payload };
    case loaderActions.SET_AI_SERVICE_LIST_LOADER:
      return { ...state, aiServiceList: action.payload };
    case loaderActions.SET_INIT_SERVICE_CREATION_LOADER:
      return { ...state, initServiceCreation: action.payload };
    case loaderActions.SET_STAKE_WINDOW_LOADER:
      return { ...state, activeStakeWindow: action.payload };
    case loaderActions.SET_STAKE_ACTIVE_LOADER:
      return { ...state, incubationStakeList: action.payload };
    case loaderActions.SET_STAKE_CLAIM_LOADER:
      return { ...state, claimStakeList: action.payload };
    case loaderActions.SET_STAKE_TXN_LOADER:
      return { ...state, txnList: action.payload };
    default:
      return state;
  }
};

export default loaderReducer;

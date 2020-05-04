import { errorActions } from "../actionCreators";

const initialState = {
  app: undefined,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errorActions.SET_APP_ERROR:
      return { ...state, app: action.payload };
    default:
      return state;
  }
};

export default errorReducer;

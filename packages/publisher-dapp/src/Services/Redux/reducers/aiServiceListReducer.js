import { aiServiceListActions } from "../actionCreators";

const initialState = {
  data: [],
};

const aiServiceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case aiServiceListActions.SET_AI_SERVICE_LIST:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default aiServiceListReducer;
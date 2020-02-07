import { aiServiceListActions } from "../actionCreators";

const initialState = {
  data: [],
  pagination: {
    q: "",
    limit: 12,
    offset: 0,
    s: "display_name",
    sort_by: "",
    order_by: "",
    filters: [],
  },
  totalCount: 0,
};

const aiServiceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case aiServiceListActions.SET_AI_SERVICE_LIST:
      return { ...state, data: action.payload };
    case aiServiceListActions.SET_AI_SERVICE_LIST_PAGINATION:
      return { ...state, pagination: { ...state.pagination, ...action.payload } };
    case aiServiceListActions.SET_AI_SERVICE_LIST_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    default:
      return state;
  }
};

export default aiServiceListReducer;

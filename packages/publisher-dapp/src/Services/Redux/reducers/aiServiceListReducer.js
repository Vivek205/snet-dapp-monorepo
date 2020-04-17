import { aiServiceListActions } from "../actionCreators";

export const defaultPagination = {
  q: "",
  limit: 12,
  offset: 0,
  s: "display_name",
  sort_by: "",
  order_by: "",
  filters: [],
};

const initialState = {
  data: [],
  pagination: defaultPagination,
  totalCount: 0,
  recentlyPublishedService: undefined,
};

const aiServiceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case aiServiceListActions.SET_AI_SERVICE_LIST:
      return { ...state, data: action.payload };
    case aiServiceListActions.SET_AI_SERVICE_LIST_PAGINATION:
      return { ...state, pagination: { ...state.pagination, ...action.payload } };
    case aiServiceListActions.SET_AI_SERVICE_LIST_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    case aiServiceListActions.SET_RECENTLY_PUBLISHED_SERVICE:
      return { ...state, recentlyPublishedService: action.payload };
    default:
      return state;
  }
};

export default aiServiceListReducer;

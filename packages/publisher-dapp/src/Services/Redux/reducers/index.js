import { combineReducers } from "redux";

import userReducer from "./userReducer";
import OrganizationReducer from "./organizationReducer";
import loaderReducer from "./loaderReducer";
import aiServiceDetailsReducer from "./aiServiceDetailsReducer";
import aiServiceListReducer from "./aiServiceListReducer";
import errorReducer from "./errorReducer";
import { loginActions } from "../actionCreators/userActions";

const appReducer = combineReducers({
  user: userReducer,
  organization: OrganizationReducer,
  loader: loaderReducer,
  aiServiceDetails: aiServiceDetailsReducer,
  aiServiceList: aiServiceListReducer,
  error: errorReducer,
});

const rootReducer = (state, action) => {
  if (action.type === loginActions.SIGNOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

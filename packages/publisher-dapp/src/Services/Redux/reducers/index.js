import { combineReducers } from "redux";

import userReducer from "./userReducer";
import OrganizationReducer from "./organizationReducer";
import loaderReducer from "./loaderReducer";
import aiServiceDetailsReducer from "./aiServiceDetailsReducer";
import aiServiceListReducer from "./aiServiceListReducer";

const rootReducer = combineReducers({
  user: userReducer,
  organization: OrganizationReducer,
  loader: loaderReducer,
  aiServiceDetails: aiServiceDetailsReducer,
  aiServiceList: aiServiceListReducer,
});

export default rootReducer;

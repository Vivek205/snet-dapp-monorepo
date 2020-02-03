import { combineReducers } from "redux";

import userReducer from "./userReducer";
import OrganizationReducer from "./organizationReducer";
import loaderReducer from "./loaderReducer";
import serviceDetailsReducer from "./serviceDetailsReducers";
import aiServiceListReducer from "./aiServiceListReducer";

const rootReducer = combineReducers({
  user: userReducer,
  organization: OrganizationReducer,
  loader: loaderReducer,
  service: serviceDetailsReducer,
  aiServiceList: aiServiceListReducer,
});

export default rootReducer;

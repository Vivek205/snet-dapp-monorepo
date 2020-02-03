import { combineReducers } from "redux";

import userReducer from "./userReducer";
import OrganizationReducer from "./organizationReducer";
import loaderReducer from "./loaderReducer";
import serviceDetailsReducer from "./serviceDetailsReducers";

const rootReducer = combineReducers({
  user: userReducer,
  organization: OrganizationReducer,
  loader: loaderReducer,
  service: serviceDetailsReducer,
});

export default rootReducer;

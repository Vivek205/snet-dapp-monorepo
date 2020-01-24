import { combineReducers } from "redux";

import userReducer from "./userReducer";
import OrganizationReducer from "./organizationReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  user: userReducer,
  organization: OrganizationReducer,
  loader: loaderReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

import userReducer from "./userReducer";
import OrganizationReducer from "./organizationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  organization: OrganizationReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

import userReducer from "./userReducer";
import loaderReducer from "./loaderReducer";
import metamaskReducer from "./MetamaskReducer";
import tokenReducer from "./TokenReducer";
import stakeReducer from "./StakeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  metamaskReducer,
  tokenReducer,
  stakeReducer,
});

export default rootReducer;

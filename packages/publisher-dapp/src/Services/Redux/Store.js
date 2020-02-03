import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

let composeEnhancers = compose;
const middlewares = [thunk];
const eslint = "";
const test = "";
const github = "";
const actions = "";

if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
};

export default configureStore;

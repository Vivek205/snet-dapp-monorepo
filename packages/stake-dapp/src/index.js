// noprotect
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/browser";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: "staking-dapp@" + process.env.npm_package_version,
  });
}

ReactDOM.render(<App />, document.getElementById("root"));

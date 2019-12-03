import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import GlobalRouter from "./GlobalRouter";

import "./App.css";

function App() {
  return (
    <ReactReduxProvider>
      <GlobalRouter />
    </ReactReduxProvider>
  );
}

export default App;

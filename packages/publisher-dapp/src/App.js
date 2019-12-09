import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/core/styles";

import GlobalRouter from "./GlobalRouter";
import configureStore from "./Services/Redux/Store";
import { MUITheme } from "./Assets/MUITheme";
import DefaultHelmet from "./Services/Helmet";

const store = configureStore();

function App() {
  return (
    <ReactReduxProvider store={store}>
      <MUIThemeProvider theme={MUITheme}>
        <DefaultHelmet />
        <GlobalRouter />
      </MUIThemeProvider>
    </ReactReduxProvider>
  );
}

export default App;

import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/core/styles";
import Amplify from "aws-amplify";

import GlobalRouter from "./GlobalRouter";
import configureStore from "./Services/Redux/Store";
import { MUITheme } from "./Assets/MUITheme";
import DefaultHelmet from "./Services/Helmet";
import { aws_config } from "./Services/AWS/aws_config";

const store = configureStore();

Amplify.configure(aws_config);

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

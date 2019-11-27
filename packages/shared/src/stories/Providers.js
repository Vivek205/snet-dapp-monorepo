import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

const ProviderWrapper = ({ children, theme }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ProviderWrapper;

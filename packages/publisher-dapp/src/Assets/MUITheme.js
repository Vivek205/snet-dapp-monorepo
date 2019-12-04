import { createMuiTheme } from "@material-ui/core/styles";

const MUITheme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      footer: "#211D24",
    },
  },
});

export default MUITheme;

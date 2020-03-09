"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    forgotPwdMainContainer: {
      height: "calc(100vh - 126px)",
      backgroundColor: MUITheme.palette.background.mainContent
    },
    forgotPwdContent: {
      textAlign: "center",
      "& h3": {
        margin: 0,
        lineHeight: "48px"
      },
      "& p": {
        margin: "17px 0 0",
        color: MUITheme.palette.text.primary,
        fontFamily: MUITheme.typography.fontFamily,
        fontSize: "20px",
        lineHeight: "30px"
      },
      "@media (max-width:527px)": {
        width: "75%",
        margin: "0 auto",
        flexBasis: "90%"
      }
    },
    forgotPwdForm: {
      boxSizing: "border-box",
      width: 410,
      padding: "42px 20px 30px",
      margin: "41px auto 0",
      boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
      "& button": {
        width: "100%"
      },
      "& p": {
        marginBottom: 10
      },
      "& label": {
        color: MUITheme.palette.text.darkGrey,
        fontSize: 12,
        letterSpacing: 0.4,
        lineHeight: "16px"
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: "red"
      },
      "@media (max-width:527px)": {
        width: "100%"
      }
    },
    textField: {
      width: "100%",
      margin: "0 0 19px 0"
    },
    alertBoxContainer: {
      marginBottom: 19
    }
  };
});
exports.useStyles = useStyles;
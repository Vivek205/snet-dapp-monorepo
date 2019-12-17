"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MuiTheme) {
  return {
    confirmOtp: {
      width: 410,
      margin: "0 auto",
      "& h3": {
        margin: "0 0 11px",
        color: MuiTheme.palette.text.darkGrey,
        fontSize: 16,
        letterSpacing: "0.29px",
        textAlign: "center",
        textTransform: "uppercase"
      }
    },
    signupForm: {
      boxSizing: "border-box",
      padding: "20px 20px 30px",
      borderRadius: 4,
      backgroundColor: MuiTheme.palette.text.secondary,
      boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
      "& button": {
        width: "100%"
      },
      "@media (max-width:960px)": {
        width: "95%",
        marginTop: 35
      }
    },
    buttonsContainer: {
      marginTop: 10,
      display: "flex",
      "& button": {
        padding: " 13px 60px 11px",
        marginTop: 10,
        "&:first-of-type": {
          marginRight: 10
        }
      }
    }
  };
});
exports.useStyles = useStyles;
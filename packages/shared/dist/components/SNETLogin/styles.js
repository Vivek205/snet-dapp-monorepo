"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    loginDetails: {
      height: "100vh",
      textAlign: "center",
      backgroundColor: theme.palette.text.offWhiteColor,
      "& h2": {
        margin: 0,
        fontSize: 32,
        fontWeight: 600,
        color: theme.palette.text.darkShadedGray,
        letterSpacing: -0.5
      }
    },
    loginForm: {
      boxSizing: "border-box",
      width: 410,
      padding: "40px 20px 30px",
      borderRadius: 4,
      margin: "45px auto 0",
      backgroundColor: theme.palette.text.white,
      boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
      "& h3": {
        margin: "0 0 11px",
        color: theme.palette.text.darkShadedGray,
        fontSize: 16,
        letterSpacing: "0.29px",
        textTransform: "uppercase"
      },
      "& input": {
        color: "#212121 !important"
      },
      "& button": {
        width: "100%"
      },
      "@media (max-width:545px)": {
        width: "80%"
      }
    },
    textField: {
      width: "100%",
      "& label": {
        color: theme.palette.text.darkShadedGrayF
      },
      "& fieldset": {
        borderColor: "#828282 !important"
      },
      "& div": {
        color: "#212121 !important"
      }
    },
    checkboxSection: {
      margin: "10px 0 17px",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      "& label": {
        color: theme.palette.text.mediumShadeGray,
        fontSize: 14,
        letterSpacing: "0.25px"
      },
      "& a": {
        color: theme.palette.text.mediumShadeGray,
        fontSize: 14,
        letterSpacing: "0.25px",
        textDecoration: "none",
        "&:hover": {
          color: theme.palette.text.primary
        }
      },
      "@media (max-width:400px)": {
        flexDirection: "column"
      }
    }
  };
});
exports.useStyles = useStyles;
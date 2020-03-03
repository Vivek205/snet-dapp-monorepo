"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    secondaryFooter: {
      padding: "15px 4px 12px 23px",
      borderTopWidth: 1,
      borderTopStyle: "solid",
      marginTop: 23,
      opacity: 0.6,
      "& div": {
        "@media (max-width:1023px) and (min-width:768px)": {
          maxWidth: "50%"
        }
      },
      "@media (max-width:1023px) and (min-width:768px)": {
        padding: "15px 15px 0",
        alignItems: "center"
      },
      "@media (max-width:769px)": {
        paddingTop: 30,
        marginTop: 19,
        flexFlow: "column-reverse"
      }
    },
    copyrightText: {
      margin: 0,
      color: theme.palette.text.white,
      fontSize: 12,
      lineHeight: "17px",
      "@media (max-width:1023px) and (min-width:768px)": {
        width: 353
      },
      "@media (max-width:767px)": {
        textAlign: "center"
      }
    },
    socialIconsList: {
      padding: 0,
      margin: 0,
      display: "flex",
      justifyContent: "flex-end",
      "& li": {
        "&:first-of-type": {
          "@media (max-width:767px)": {
            marginLeft: 0
          }
        }
      },
      "@media (max-width:767px)": {
        marginBottom: 30,
        justifyContent: "center"
      }
    }
  };
});
exports.useStyles = useStyles;
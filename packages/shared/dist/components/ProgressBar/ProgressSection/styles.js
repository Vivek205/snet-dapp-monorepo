"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    number: {
      borderRadius: 25,
      padding: "4px 10px",
      marginRight: 8,
      backgroundColor: theme.palette.text.lightShadedGray,
      color: theme.palette.text.white,
      "@media(max-width:480px)": {
        padding: "4px 8px",
        fontSize: 12
      }
    },
    TabTitle: {
      color: theme.palette.text.lightShadedGray,
      fontSize: 14
    },
    completedIcon: {
      "& span": {
        color: theme.palette.text.successBoxBorder,
        fontSize: 28,
        marginRight: 10,
        "@media(max-width:480px)": {
          padding: "0 !important",
          marginRight: "0 !important",
          fontSize: "21px !important"
        }
      },
      "@media(max-width:480px)": {
        padding: "0 !important",
        margin: 0
      }
    },
    active: {
      "& span": {
        "&:first-of-type": {
          backgroundColor: theme.palette.text.primary
        },
        "&:last-of-type": {
          color: theme.palette.text.darkShadedGray
        }
      }
    },
    completed: {
      "&:last-of-type span": {
        color: theme.palette.text.darkShadedGray
      }
    }
  };
});
exports.useStyles = useStyles;
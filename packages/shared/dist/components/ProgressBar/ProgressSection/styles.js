"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    number: {
      borderRadius: 25,
      padding: "3px 10px",
      backgroundColor: MUITheme.palette.text.lightGrey,
      color: MUITheme.palette.text.white,
      "@media(max-width:480px)": {
        padding: "3px 8px",
        fontSize: 12
      }
    },
    TabTitle: {
      paddingTop: 10,
      color: MUITheme.palette.text.lightGrey,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 14
    },
    completedIcon: {
      "& svg": {
        color: MUITheme.palette.success.main,
        fontSize: 28
      },
      "@media(max-width:480px)": {
        padding: "0 !important"
      }
    },
    active: {
      "& span": {
        "&:first-of-type": {
          backgroundColor: MUITheme.palette.primary.main
        },
        "&:last-of-type": {
          color: MUITheme.palette.text.darkGrey
        }
      }
    },
    completed: {
      "&:last-of-type span": {
        color: MUITheme.palette.text.darkGrey
      }
    }
  };
});
exports.useStyles = useStyles;
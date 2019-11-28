"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    errorMsg: {
      margin: 0
    },
    error: {
      color: theme.palette.text.errorRed
    },
    success: {
      color: theme.palette.text.successBoxBorder
    },
    warning: {
      color: theme.palette.text.warningBorder
    },
    info: {
      color: theme.palette.text.primary
    }
  };
});
exports.useStyles = useStyles;
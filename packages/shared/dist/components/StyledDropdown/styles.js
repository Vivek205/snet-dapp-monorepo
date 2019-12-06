"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    selectEmpty: {
      fontFamily: theme.typography.primary.main,
      color: "".concat(theme.palette.text.dialogTitle, " !important"),
      "& .MuiSelect-root": {
        letterSpacing: 0.15,
        lineHeight: "24px"
      },
      "&:before": {
        display: "none"
      },
      "& select": {
        "&:hover": {
          backgroundColor: theme.palette.text.transBlueBorderBgHover
        }
      },
      "& .MuiSelect-select": {
        "&:focus": {
          backgroundColor: "transparent"
        }
      }
    }
  };
});
exports.useStyles = useStyles;
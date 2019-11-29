"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(theme) {
  return {
    button: {
      "& span": {
        textTransform: "none"
      }
    },
    menuItem: {
      fontFamily: theme.typography.primary.main
    }
  };
};

exports.useStyles = useStyles;
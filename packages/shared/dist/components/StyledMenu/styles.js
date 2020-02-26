"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(menuItem) {
  return {
    button: {
      "& span": {
        textTransform: "none"
      }
    },
    menuItem: {
      fontFamily: menuItem.typography.fontFamily
    }
  };
};

exports.useStyles = useStyles;
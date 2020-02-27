"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    button: {
      "& span": {
        textTransform: "none"
      }
    },
    menuItem: {
      '& a': {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 16
      }
    }
  };
};

exports.useStyles = useStyles;
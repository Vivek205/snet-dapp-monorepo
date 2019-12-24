"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(theme) {
  return {
    styledTextField: {
      "& label": {
        color: theme.palette.text.black1
      },
      "& div": {
        color: "#212121 !important"
      },
      "& fieldset": {
        borderColor: "#828282 !important"
      },
      "& p": {
        color: theme.palette.text.lightGrey
      }
    }
  };
};

exports.useStyles = useStyles;
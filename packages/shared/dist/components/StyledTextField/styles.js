"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(theme) {
  return {
    styledTextField: {
      margin: "0 0 26px !important",
      background: theme.palette.text.white,
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
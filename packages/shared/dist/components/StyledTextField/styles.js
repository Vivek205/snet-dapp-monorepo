"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    styledTextField: {
      background: MUITheme.palette.text.white,
      "& label": {
        color: MUITheme.palette.text.darkGrey
      },
      "& div": {
        color: "".concat(MUITheme.palette.text.darkGrey, " !important")
      },
      "& fieldset": {
        borderColor: MUITheme.palette.border.inputBorder
      },
      "& p": {
        color: MUITheme.palette.text.disabled
      },
      "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(14px, -6px) scale(0.90)"
      }
    }
  };
};

exports.useStyles = useStyles;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(theme) {
  return {
    styledProgressBar: {
      width: 553,
      height: 15,
      margin: "9px auto 5px",
      backgroundColor: "rgba(64, 134, 255, 0.3)",
      "& div": {
        backgroundColor: theme.palette.text.primary
      },
      "@media (max-width: 1045px)": {
        width: "auto"
      }
    }
  };
};

exports.useStyles = useStyles;
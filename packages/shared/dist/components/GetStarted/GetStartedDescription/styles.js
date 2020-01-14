"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    GetStartedDescription: {
      marginBottom: 40,
      "& h2": {
        margin: 0,
        color: MUITheme.palette.text.darkGrey,
        fontSize: 36,
        fontWeight: 600,
        lineHeight: "45px"
      },
      "& p": {
        margin: "10px 0 0",
        color: MUITheme.palette.text.lightGrey,
        fontSize: 24,
        lineHeight: "30px"
      },
      "& button": {
        padding: "13px 16% 11px",
        marginTop: 16
      }
    }
  };
};

exports.useStyles = useStyles;
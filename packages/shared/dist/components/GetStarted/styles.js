"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    GetStartedMainContaienr: {
      padding: "40px 0 60px",
      flexDirection: "column",
      "@media(max-width:360px)": {
        padding: "15px 15px 40px"
      }
    },
    TopSection: {
      textAlign: "center"
    },
    btnContainer: {
      marginTop: 50,
      display: "flex",
      justifyContent: "center"
    },
    createRequestLink: {
      textDecoration: "none"
    }
  };
};

exports.useStyles = useStyles;
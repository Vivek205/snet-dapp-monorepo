"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(theme) {
  return {
    offlineIndicator: {
      display: "flex",
      alignItems: "center",
      "& span": {
        "&:first-of-type": {
          color: theme.palette.text.offlineRed,
          fontSize: 8,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: theme.palette.text.offlineRed,
          borderRadius: 50,
          textAlign: "center",
          padding: 4,
          marginRight: 7
        },
        "&:last-of-type": {
          color: theme.palette.text.lightShadedGray,
          fontSize: 14,
          fontStyle: "italic",
          letterSpacing: 0.25,
          fontWeight: 600,
          lineHeight: "16px"
        }
      }
    }
  };
};

exports.useStyles = useStyles;
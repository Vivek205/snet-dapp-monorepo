"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(theme) {
  return {
    NotificationBar: {
      paddingLeft: "0 !important",
      paddingRight: "0 !important"
    },
    notificationText: {
      padding: "8px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& span": {
        fontSize: 14.2,
        letterSpacing: 0.25,
        lineHeight: "20px"
      }
    },
    WARNING: {
      backgroundColor: theme.palette.error,
      color: theme.palette.text.primary,
      "& svg": {
        marginRight: 17,
        color: theme.palette.text.primary
      }
    },
    INFORMATION: {
      backgroundColor: theme.palette.warning,
      color: theme.palette.text.white,
      "& svg": {
        marginRight: 21
      }
    }
  };
};

exports.useStyles = useStyles;
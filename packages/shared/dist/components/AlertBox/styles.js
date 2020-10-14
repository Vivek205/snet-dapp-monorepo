"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    alertBoxContainer: {
      padding: "7px 11px",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      "& svg": {
        paddingRight: 14
      }
    },
    content: {
      fontFamily: MUITheme.typography.fontFamily,
      textAlign: "left",
      "& p": {
        margin: "0 !important",
        color: MUITheme.palette.text.primary,
        fontSize: 14,
        lineHeight: "18px",
        "& a": {
          textDecoration: "none"
        }
      }
    },
    messageBox: {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 4,
      padding: "13px 20px",
      marginTop: "20px ",
      color: MUITheme.palette.text.darkGrey,
      fontSize: "14px !important",
      lineHeight: "20px",
      letterSpacing: 0.25,
      textAlign: "left",
      wordBreak: "break-all"
    },
    error: {
      borderColor: MUITheme.palette.border.alertBox,
      backgroundColor: MUITheme.palette.background.alertBox,
      "& svg": {
        color: MUITheme.palette.border.alertBox
      }
    },
    success: {
      borderColor: MUITheme.palette.success.main,
      backgroundColor: MUITheme.palette.background.succesBox,
      "& svg": {
        color: "".concat(MUITheme.palette.success.main, " !important")
      }
    },
    warning: {
      borderColor: MUITheme.palette.border.warningBox,
      backgroundColor: MUITheme.palette.background.warningBox,
      "& a": {
        color: MUITheme.palette.infoBoxLink,
        fontWeight: 600
      },
      "& svg": {
        color: "#FFC200"
      }
    },
    info: {
      borderColor: MUITheme.palette.primary.main,
      backgroundColor: MUITheme.palette.background.infoBox,
      "& svg": {
        color: MUITheme.palette.primary.main
      },
      "& a": {
        color: MUITheme.palette.infoBoxLink,
        fontWeight: 600
      }
    },
    alertHeader: {
      color: MUITheme.palette.text.primary,
      fontSize: 14,
      lineHeight: "18px",
      fontWeight: "bold"
    }
  };
};

exports.useStyles = useStyles;
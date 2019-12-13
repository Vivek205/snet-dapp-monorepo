"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    messageBox: {
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 4,
      padding: "13px 20px",
      marginTop: "20px ",
      color: MUITheme.palette.text.alertBoxColor,
      fontSize: "14px !important",
      lineHeight: "20px",
      letterSpacing: 0.25,
      textAlign: "left",
      wordBreak: "break-all"
    },
    error: {
      borderColor: MUITheme.palette.text.alertBoxBorder,
      backgroundColor: MUITheme.palette.text.alertBoxBackgroundColor
    },
    success: {
      borderColor: MUITheme.palette.text.successBoxBorder,
      backgroundColor: MUITheme.palette.background.succesBox
    },
    warning: {
      borderColor: MUITheme.palette.text.warningBoxBorder,
      backgroundColor: MUITheme.palette.text.warningBoxBg,
      "& a": {
        color: MUITheme.palette.text.infoBoxLink,
        fontWeight: 600
      }
    },
    info: {
      borderColor: MUITheme.palette.text.primary,
      backgroundColor: MUITheme.palette.text.infoBoxBg,
      "& a": {
        color: MUITheme.palette.text.infoBoxLink,
        fontWeight: 600
      }
    }
  };
};

exports.useStyles = useStyles;
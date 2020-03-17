"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    Userdetails: {
      padding: "12px 18px",
      display: "flex",
      "& svg": {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 81
      },
      "& div": {
        marginLeft: 16,
        "& h4": {
          fontWeight: 600,
          margin: 0,
          color: MUITheme.palette.text.darkGrey,
          lineHeight: "25px",
          fontSize: 20
        },
        "& a": {
          color: MUITheme.palette.text.lightGrey,
          fontSize: 16,
          lineHeight: "22px",
          textDecoration: "none",
          "&:hover": {
            color: MUITheme.palette.primary.main,
            fontweight: 600
          }
        }
      }
    },
    closeIcon: {
      position: "absolute",
      cursor: "pointer",
      top: 10,
      right: 20,
      display: "none",
      "@media(max-width: 768px)": {
        display: "block"
      }
    },
    reactBlockies: {
      borderRadius: 30
    }
  };
};

exports.useStyles = useStyles;
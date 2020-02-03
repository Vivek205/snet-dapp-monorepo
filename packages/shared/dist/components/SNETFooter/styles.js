"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    footer: {
      padding: "23px 0",
      position: "absolute",
      right: 0,
      left: 0,
      zIndex: 999,
      backgroundColor: MUITheme.palette.background.footer,
      color: MUITheme.palette.text.footerText,
      "@media (max-width:767px)": {
        padding: "21px 0 52px"
      }
    },
    footerWrapper: {
      width: "80%",
      margin: "0 auto",
      "@media (max-width:1279px) and (min-width:1024px)": {
        width: "98%"
      },
      "@media (max-width:1023px)": {
        width: "100%"
      }
    },
    footerLinks: {
      listStyle: "none"
    },
    footerLinkText: {
      color: MUITheme.palette.text.white,
      fontSize: 14,
      lineHeight: "28px",
      opacity: 0.6,
      textDecoration: "none",
      "&:hover": {
        opacity: 1
      }
    },
    footerLinksTitle: {
      marginBottom: 8,
      display: "inline-block",
      color: MUITheme.palette.text.white,
      fontSize: 20,
      fontWeight: 600,
      opacity: 0.8,
      "@media (max-width:1023px) and (min-width:768px)": {
        fontSize: 18
      }
    },
    socialIconsLink: {
      listStyle: "none",
      marginLeft: 45
    },
    socialIcon: {
      color: MUITheme.palette.text.white,
      opacity: 0.6,
      "& span": {
        fontSize: 20,
        "@media (max-width:767px)": {
          fontSize: 14
        }
      },
      "&:hover": {
        opacity: 1
      }
    }
  };
});
exports.useStyles = useStyles;
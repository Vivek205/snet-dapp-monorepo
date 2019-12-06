"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    navlist: {
      padding: 0,
      margin: 0,
      display: "flex"
    },
    navLink: {
      textDecoration: "none",
      color: MUITheme.palette.text.disabled
    },
    navLinkActive: function navLinkActive(props) {
      return {
        borderBottom: "1px solid ".concat(MUITheme.palette.primary.main),
        paddingBottom: 3,
        color: MUITheme.palette.primary.main,
        "&: visited": {
          borderBottom: "1px solid ".concat(MUITheme.palette.primary.main),
          paddingBottom: 3,
          color: MUITheme.palette.primary.main
        }
      };
    }
  };
});
exports.useStyles = useStyles;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  var navLinkColor = {
    white: MUITheme.palette.text.disabled,
    purple: MUITheme.typography.body1.color
  };
  var navLinkActiveColor = {
    white: MUITheme.palette.primary.main,
    purple: MUITheme.palette.text.secondary
  };
  return {
    navlist: {
      padding: 0,
      margin: 0,
      display: "flex"
    },
    navLink: function navLink(props) {
      return {
        textDecoration: "none",
        color: navLinkColor[props.headerColor],
        "&:hover": {
          color: navLinkActiveColor[props.headerColor]
        }
      };
    },
    navLinkActive: function navLinkActive(props) {
      return {
        borderBottom: "2px solid ".concat(navLinkActiveColor[props.headerColor]),
        paddingBottom: 3,
        color: navLinkActiveColor[props.headerColor],
        "&: visited": {
          borderBottom: "2px solid ".concat(navLinkActiveColor[props.headerColor]),
          paddingBottom: 3,
          color: navLinkActiveColor[props.headerColor]
        }
      };
    }
  };
});
exports.useStyles = useStyles;
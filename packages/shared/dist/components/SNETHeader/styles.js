"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    logoContainer: {
      flexGrow: 1,
      "& img": {
        width: 172
      }
    },
    navContainer: {
      flexGrow: 1
    },
    actionsContainer: {
      flexGrow: 1,
      "& *": {
        marginLeft: 5
      }
    }
  };
});
exports.useStyles = useStyles;
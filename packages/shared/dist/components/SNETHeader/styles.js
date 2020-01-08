"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      "& img": {
        width: 172
      }
    },
    portalName: {
      marginLeft: 8,
      color: MUITheme.palette.text.darkGrey,
      fontSize: 22,
      fontWeight: 300,
      lineHeight: '30px'
    },
    navContainer: {
      flexGrow: 1
    },
    actionsContainer: {
      flexGrow: 1,
      "& *": {
        marginLeft: 5
      },
      textAlign: "end"
    }
  };
});
exports.useStyles = useStyles;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    pendingSection: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "center",
      marginBottom: 20,
      color: theme.palette.text.orange,
      fontWeight: 600,
      "& span": {
        "&::before": {
          fontSize: 14
        }
      }
    }
  };
});
exports.useStyles = useStyles;
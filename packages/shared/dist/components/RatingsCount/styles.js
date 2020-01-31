"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    ratedCount: {
      marginLeft: 10,
      display: "inline-block",
      color: theme.palette.text.lightShadedGray,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 2,
      verticalAlign: "super"
    }
  };
});
exports.useStyles = useStyles;
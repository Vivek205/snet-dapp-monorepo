"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    appBar: _defineProperty({
      padding: "14px 60px",
      flexDirection: "row",
      alignItems: "center",
      boxShadow: "0 2px 6px 0 rgba(0,0,0,0.2)",
      zIndex: 1110
    }, MUITheme.breakpoints.down("md"), {
      padding: "14px 10px"
    }),
    purple: {
      "& h5": {
        color: "".concat(MUITheme.palette.text.white, " !important")
      }
    },
    logoContainer: _defineProperty({
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      "& img": {
        width: 172
      },
      "& h5": {
        marginLeft: 11,
        fontWeight: 300,
        lineHeight: "30px"
      }
    }, MUITheme.breakpoints.down("md"), {
      padding: 0
    }),
    navContainer: _defineProperty({
      flexGrow: 1
    }, MUITheme.breakpoints.down("md"), {
      padding: 0
    })
  };
});
exports.useStyles = useStyles;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    grayBox: {
      padding: "24px 16px 36px",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#F1F1F1",
      borderRadius: 4,
      backgroundColor: "#F6F6F6"
    },
    title: {
      color: MUITheme.palette.text.lightGrey,
      fontSize: 14,
      fontWeight: "bold",
      letterSpacing: 0.25,
      lineHeight: "20px"
    },
    value: {
      color: MUITheme.palette.text.lightGrey,
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: "20px"
    },
    uploadStatusContainer: {
      display: "flex",
      fontSize: 18,
      lineHeight: "23px",
      "& svg": {
        color: "#6D7278",
        fontSize: 41
      },
      "& p": {
        marginLeft: 10,
        color: "rgba(0,0,0,0.25)"
      }
    },
    successfullUpload: {
      display: "flex",
      alignItems: "center",
      "& svg": {
        color: MUITheme.palette.success,
        fontSize: 41
      },
      "& p": {
        marginLeft: 10,
        color: MUITheme.palette.success
      }
    },
    imgUploaderContainer: _defineProperty({
      display: "flex",
      "& > div": {
        "&:first-of-type": _defineProperty({
          width: 377
        }, MUITheme.breakpoints.down("sm"), {
          width: "100%"
        })
      }
    }, MUITheme.breakpoints.down("sm"), {
      flexDirection: "column"
    }),
    uploadDetails: _defineProperty({
      paddingTop: 60,
      marginLeft: 27,
      "& > div": {
        marginBottom: 8
      }
    }, MUITheme.breakpoints.down("sm"), {
      paddingTop: 25
    })
  };
});
exports.useStyles = useStyles;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = function useStyles(MUITheme) {
  return {
    statusBannerContainer: {
      padding: "38px 14px",
      marginTop: 40,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#F1F1F1",
      borderRadius: 4,
      display: "flex",
      backgroundColor: MUITheme.palette.text.secondary
    },
    statusBannerMedia: _defineProperty({
      "& img": _defineProperty({
        width: "100%"
      }, MUITheme.breakpoints.down("xs"), {
        width: 302
      })
    }, MUITheme.breakpoints.down("xs"), {
      marginBottom: 25,
      textAlign: "center"
    }),
    statusBannerContent: {
      paddingLeft: 24,
      "& p": {
        margin: "24px 0 0",
        color: MUITheme.palette.text.primary,
        fontSize: 14,
        lineHeight: "21px"
      },
      "& button": {
        marginTop: 24,
        "&:first-of-type": {
          marginRight: 40
        }
      }
    },
    pendingtitle: {
      color: MUITheme.palette.warning.main
    },
    rejectedtitle: {
      color: MUITheme.palette.text.red
    }
  };
};

exports.useStyles = useStyles;
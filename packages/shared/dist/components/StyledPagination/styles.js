"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/styles");

var useStyles = (0, _styles.makeStyles)(function (MUITheme) {
  return {
    paginationContainer: {
      paddingTop: 14,
      "@media(max-width: 480px)": {
        flexDirection: "column-reverse",
        alignItems: "center"
      }
    },
    pageListformControl: {
      width: 72,
      margin: "0 12px 0 15px",
      "& div": {
        "& div": {
          padding: "8px 13px"
        }
      },
      "& fieldset": {
        paddingLeft: "0 !important",
        top: 0,
        "& + div": {
          "& div": {
            padding: "8.5px 13px",
            color: MUITheme.palette.text.darkGrey
          }
        },
        "& legend": {
          display: "none"
        }
      }
    },
    pageCountSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      "& span": {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 14
      },
      "@media(max-width: 768px)": {
        marginBottom: 15
      }
    },
    styledPagination: {
      "& button": {
        color: "#4a4a4a"
      },
      "& .MuiFlatPagination-rootCurrent": {
        padding: "0 8px",
        backgroundColor: MUITheme.palette.primary.main,
        color: "".concat(MUITheme.palette.text.white, " !important")
      },
      "& .MuiFlatPageButton-rootEnd": {
        color: "#4a4a4a",
        fontWeight: 600
      },
      "& .MuiFlatPageButton-rootEnd.Mui-disabled": {
        color: "rgba(155,155,155,0.5) !important"
      }
    }
  };
});
exports.useStyles = useStyles;
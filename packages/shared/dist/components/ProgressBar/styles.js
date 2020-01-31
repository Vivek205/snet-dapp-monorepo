"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    tabsContainer: {
      width: 630,
      paddingTop: 41,
      margin: "0 auto",
      "& ul": {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        "@media (max-width:470px)": {
          flexDirection: "column",
          alignItems: "center"
        }
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        listStyle: "none",
        "&:first-of-type": {
          "&::before": {
            display: "none"
          }
        },
        "&::before": {
          content: '""',
          width: 90,
          height: 1,
          marginRight: 16,
          display: "inline-block",
          backgroundColor: MUITheme.palette.background.grey,
          verticalAlign: "middle",
          "@media (max-width:1150px)": {
            width: 50
          }
        },
        "& i": {
          marginRight: 5,
          color: MUITheme.palette.success,
          fontSize: 20
        },
        "@media (max-width:470px)": {
          marginBottom: 20
        }
      },
      "@media (max-width:724px)": {
        width: "90%"
      }
    }
  };
};

exports.useStyles = useStyles;
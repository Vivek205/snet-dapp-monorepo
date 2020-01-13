"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(MUITheme) {
  return {
    userDetails: {
      display: 'flex'
    },
    avatar: {
      width: 40,
      height: 40,
      marginRight: 12
    },
    userName: {
      color: MUITheme.palette.text.black,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 14,
      letterSpacing: 0.17,
      lineHeight: '18px'
    },
    userEmail: {
      color: MUITheme.palette.text.lightGrey,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 12,
      lineHeight: '15px'
    }
  };
};

exports.useStyles = useStyles;
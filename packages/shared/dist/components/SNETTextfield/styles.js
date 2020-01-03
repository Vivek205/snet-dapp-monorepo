"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = function useStyles(MUITheme) {
  return {
    basicTextFieldGrid: _defineProperty({
      display: 'flex',
      '& label': {
        color: MUITheme.palette.text.darkGrey,
        fontSize: 12,
        letterSpacing: 0.4,
        '&.MuiFormLabel-root.Mui-focused': {
          color: MUITheme.palette.text.darkGrey
        }
      }
    }, MUITheme.breakpoints.down('xs'), {
      width: '100%'
    }),
    description: _defineProperty({
      paddingLeft: 30,
      '& p': {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: '20px'
      }
    }, MUITheme.breakpoints.down('sm'), {
      paddingLeft: 0,
      marginTop: 0,
      marginBottom: 10
    }),
    infoIconContainer: {
      '& svg': {
        padding: '5px 10px 0 0',
        fontSize: 20,
        color: '#d6d6d6'
      }
    }
  };
};

exports.useStyles = useStyles;
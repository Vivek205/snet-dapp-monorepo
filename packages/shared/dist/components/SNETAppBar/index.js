"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETAppBar = (0, _styles.withStyles)(function (MuiTheme) {
  return {
    root: function root(props) {
      var rootStyles = {};

      if (props.color === "white") {
        rootStyles.backgroundColor = MuiTheme.palette.background.white;
        return rootStyles;
      }

      if (props.color === "purple") {
        rootStyles.backgroundColor = MuiTheme.palette.purple.main;
        return rootStyles;
      }

      return rootStyles;
    }
  };
})(_AppBar.default);
var _default = SNETAppBar;
exports.default = _default;
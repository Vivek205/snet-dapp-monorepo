"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETButton = (0, _styles.withStyles)(function (MuiTheme) {
  return {
    root: function root(props) {
      var rootStyles = {
        fontWeight: 600,
        letterSpacing: 1.25,
        padding: "13px 28px 11px",
        lineHeight: "16px"
      };

      if (props.color === "purple" && props.variant === "contained-inverted") {
        rootStyles.color = MuiTheme.palette.text.secondary;
        rootStyles.backgroundColor = MuiTheme.palette.purple.main;
        rootStyles.border = "1px solid";
        rootStyles["&:hover"] = {
          backgroundColor: MuiTheme.palette.purple.light,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: MuiTheme.palette.purple.main
          }
        };
      }

      return rootStyles;
    },
    containedSecondary: {
      color: MuiTheme.palette.text.secondary
    }
  };
})(_Button.default);
var _default = SNETButton;
exports.default = _default;
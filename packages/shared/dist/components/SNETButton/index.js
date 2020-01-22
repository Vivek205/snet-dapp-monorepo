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
        fontSize: 14,
        letterSpacing: 1.25,
        padding: "13px 28px 11px",
        lineHeight: "16px"
      };

      if (props.color === "purple" && props.variant === "contained") {
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

      if (props.color === "white" && props.variant === "text") {
        rootStyles.color = theme.palette.primary.main;
        rootStyles.backgroundColor = theme.palette.background.white;
        rootStyles.boxShadow = "0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)";
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var buttonColor = {
  blue: "blueBg",
  gradient: "gradientBg",
  black: "blackBg",
  transparent: "transparentBg",
  transparentBlueBorder: "transparentBlueBorder",
  transparentBlueBorderDisable: "transparentBlueBorderDisable",
  red: "red",
  redBg: "redBg"
};

var StyledButton = function StyledButton(_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      type = _ref.type,
      btnType = _ref.btnType,
      iconClass = _ref.iconClass,
      href = _ref.href,
      newTab = _ref.newTab,
      btnText = _ref.btnText,
      rest = _objectWithoutProperties(_ref, ["disabled", "onClick", "type", "btnType", "iconClass", "href", "newTab", "btnText"]);

  var classes = (0, _styles.useStyles)();
  return _react.default.createElement(_Button.default, _extends({
    className: (0, _clsx.default)(classes.styledButton, classes[buttonColor[type]]),
    disabled: disabled,
    onClick: onClick,
    type: btnType,
    href: href,
    target: href && newTab ? "_blank" : "",
    rel: href && newTab ? "noopener" : ""
  }, rest), iconClass ? _react.default.createElement(_Icon.default, {
    className: iconClass
  }) : null, btnText);
};

StyledButton.propTypes = {
  type: _propTypes.default.oneOf(["blue", "gradient", "black", "transparent", "red", "redBg", "transparentBlueBorder", "transparentBlueBorderDisable"]),
  btnType: _propTypes.default.oneOf(["submit", "reset", "button"]),
  btnText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  iconClass: _propTypes.default.string,
  href: _propTypes.default.string,
  newTab: _propTypes.default.bool
};
StyledButton.defaultProps = {
  type: "blue",
  btnType: "button"
};
var _default = StyledButton;
exports.default = _default;
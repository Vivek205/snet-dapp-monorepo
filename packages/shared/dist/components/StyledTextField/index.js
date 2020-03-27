"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledTextField = function StyledTextField(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      label = _ref.label,
      handleChange = _ref.handleChange,
      value = _ref.value,
      restProps = _objectWithoutProperties(_ref, ["classes", "className", "label", "handleChange", "value"]);

  return _react.default.createElement(_TextField.default, _extends({
    id: "outlined-name",
    label: label,
    className: "".concat(classes.styledTextField, " ").concat(classes.className),
    value: value,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined"
  }, restProps));
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(StyledTextField);

exports.default = _default;
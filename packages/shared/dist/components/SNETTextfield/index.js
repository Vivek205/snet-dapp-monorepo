"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _styles2 = require("./styles");

var _StyledTextField = _interopRequireDefault(require("shared/dist/components/StyledTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETTextfield = function SNETTextfield(_ref) {
  var classes = _ref.classes,
      name = _ref.name,
      label = _ref.label,
      helperText = _ref.helperText,
      value = _ref.value,
      onChange = _ref.onChange,
      description = _ref.description;
  return _react.default.createElement(_Grid.default, {
    container: true
  }, _react.default.createElement(_Grid.default, {
    item: true,
    sx: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.basicTextFieldGrid
  }, _react.default.createElement(_StyledTextField.default, {
    name: name,
    label: label,
    helperText: helperText,
    variant: "outlined",
    value: value,
    onChange: onChange,
    fullWidth: true
  })), _react.default.createElement(_Grid.default, {
    item: true,
    sx: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.description
  }, _react.default.createElement(_Typography.default, null, description)));
};

SNETTextfield.propTypes = {
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  helperText: _propTypes.default.string,
  description: _propTypes.default.string,
  onChange: _propTypes.default.func
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(SNETTextfield);

exports.default = _default;
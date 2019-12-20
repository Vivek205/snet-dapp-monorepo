"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _AlertBox = _interopRequireDefault(require("shared/dist/components/AlertBox"));

var _StyledButton = _interopRequireDefault(require("shared/dist/components/StyledButton"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = require("./styles");

var _PrivacyTerms = _interopRequireDefault(require("./PrivacyTerms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TermsAndConditions = function TermsAndConditions(props) {
  var classes = props.classes,
      title = props.title,
      formLabel = props.formLabel,
      onAccept = props.onAccept,
      agreed = props.agreed,
      onChangeAgreed = props.onChangeAgreed;
  return _react.default.createElement("div", {
    className: classes.onboardingContainer
  }, _react.default.createElement("div", {
    className: classes.termsAndConditionsContainer
  }, _react.default.createElement("h3", null, title), _react.default.createElement("div", {
    className: classes.termsAndConditions
  }, _react.default.createElement(_PrivacyTerms.default, null)), _react.default.createElement("div", {
    className: classes.checkboxAndButton
  }, _react.default.createElement(_FormControlLabel.default, {
    control: _react.default.createElement(_Checkbox.default, {
      onChange: onChangeAgreed,
      color: "primary"
    }),
    label: formLabel
  }), onAccept ? _react.default.createElement(_StyledButton.default, {
    btnText: "accept",
    disabled: !agreed,
    onClick: onAccept
  }) : ""), _react.default.createElement(_AlertBox.default, {
    type: alert.type,
    message: alert.message
  })));
};

TermsAndConditions.protoTypes = {
  title: _propTypes.default.string,
  formLabel: _propTypes.default.string,
  onAccept: _propTypes.default.func,
  agreed: _propTypes.default.bool,
  onChangeAgreed: _propTypes.default.func
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(TermsAndConditions);

exports.default = _default;
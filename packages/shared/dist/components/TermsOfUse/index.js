"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _AlertBox = _interopRequireDefault(require("shared/dist/components/AlertBox"));

var _StyledButton = _interopRequireDefault(require("shared/dist/components/StyledButton"));

var _styles2 = require("./styles");

var _PrivacyTerms = _interopRequireDefault(require("./PrivacyTerms"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsOfUse = function TermsOfUse(_ref) {
  var classes = _ref.classes,
      title = _ref.title,
      checkboxChecked = _ref.checkboxChecked,
      formLabel = _ref.formLabel,
      CTAType = _ref.CTAType,
      CTAText = _ref.CTAText,
      CTADisabled = _ref.CTADisabled,
      handleCTA = _ref.handleCTA,
      alertType = _ref.alertType,
      alertMsg = _ref.alertMsg;
  return _react.default.createElement("div", {
    className: classes.onboardingContainer
  }, _react.default.createElement("div", {
    className: classes.termsOfUseContainer
  }, _react.default.createElement("h3", null, title), _react.default.createElement("div", {
    className: classes.termsAndConditions
  }, _react.default.createElement(_PrivacyTerms.default, null)), _react.default.createElement("div", {
    className: classes.checkboxAndButton
  }, _react.default.createElement(_FormControlLabel.default, {
    control: _react.default.createElement(_Checkbox.default, {
      checked: checkboxChecked,
      onChange: _this.handleChange,
      color: "primary"
    }),
    label: formLabel
  }), _react.default.createElement(_StyledButton.default, {
    type: CTAType,
    btnText: CTAText,
    disabled: CTADisabled,
    onClick: handleCTA
  })), _react.default.createElement(_AlertBox.default, {
    type: alertType,
    message: alertMsg
  })));
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(TermsOfUse);

exports.default = _default;
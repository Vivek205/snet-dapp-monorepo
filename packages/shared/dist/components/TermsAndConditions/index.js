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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = require("./styles");

var _PrivacyTerms = _interopRequireDefault(require("./PrivacyTerms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditions = function TermsAndConditions(props) {
  var classes = props.classes,
      title = props.title,
      formLabel = props.formLabel,
      onAccept = props.onAccept,
      agreed = props.agreed,
<<<<<<< HEAD
      onChangeAgreed = props.onChangeAgreed;
=======
      onChangeAgreed = props.onChangeAgreed,
      Content = props.Content;
>>>>>>> 24a8482d6719438eb46217e3347b9a6eb8077314
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.onboardingContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.termsAndConditionsContainer
  }, /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.termsAndConditions
<<<<<<< HEAD
  }, /*#__PURE__*/_react.default.createElement(_PrivacyTerms.default, null)), /*#__PURE__*/_react.default.createElement("div", {
=======
  }, /*#__PURE__*/_react.default.createElement(Content, null)), /*#__PURE__*/_react.default.createElement("div", {
>>>>>>> 24a8482d6719438eb46217e3347b9a6eb8077314
    className: classes.checkboxAndButton
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
      onChange: onChangeAgreed,
      color: "primary"
    }),
    label: formLabel
  }), onAccept ? /*#__PURE__*/_react.default.createElement(_StyledButton.default, {
    btnText: "accept",
    disabled: !agreed,
    onClick: onAccept
  }) : ""), /*#__PURE__*/_react.default.createElement(_AlertBox.default, {
    type: alert.type,
    message: alert.message
  })));
};

TermsAndConditions.protoTypes = {
  title: _propTypes.default.string,
  formLabel: _propTypes.default.string,
  onAccept: _propTypes.default.func,
  agreed: _propTypes.default.bool,
  onChangeAgreed: _propTypes.default.func,
  Content: _propTypes.default.element
};
TermsAndConditions.defaultProps = {
  Content: _PrivacyTerms.default
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(TermsAndConditions);

exports.default = _default;
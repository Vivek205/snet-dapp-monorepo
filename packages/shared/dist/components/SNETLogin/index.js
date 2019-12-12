"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("./styles");

var _SNETButton = _interopRequireDefault(require("../SNETButton"));

var _AlertBox = _interopRequireDefault(require("../AlertBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETLogin = function SNETLogin(props) {
  var classes = (0, _styles.useStyles)();
  var title = props.title,
      email = props.email,
      password = props.password,
      forgotPasswordLink = props.forgotPasswordLink,
      onEmailChange = props.onEmailChange,
      onPasswordChange = props.onPasswordChange,
      onSubmit = props.onSubmit,
      loginError = props.loginError;
  return _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 24
  }, _react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    className: classes.loginDetails
  }, _react.default.createElement("h2", null, title), _react.default.createElement("form", {
    noValidate: true,
    autoComplete: "off",
    className: classes.loginForm
  }, _react.default.createElement(_TextField.default, {
    id: "outlined-user-name",
    label: "Email",
    className: classes.textField,
    margin: "normal",
    variant: "outlined",
    value: email,
    autoFocus: true,
    onChange: onEmailChange
  }), _react.default.createElement(_TextField.default, {
    id: "outlined-password-input",
    label: "Password",
    className: classes.textField,
    type: "password",
    autoComplete: "current-password",
    margin: "normal",
    variant: "outlined",
    value: password,
    onChange: onPasswordChange
  }), _react.default.createElement("div", {
    className: classes.checkboxSection
  }, _react.default.createElement("div", {
    className: classes.checkbox
  }), _react.default.createElement(_reactRouterDom.Link, {
    to: forgotPasswordLink
  }, "Forgot password?")), _react.default.createElement(_AlertBox.default, {
    type: "error",
    message: loginError
  }), _react.default.createElement(_SNETButton.default, {
    type: "blue",
    btnText: "login",
    onClick: onSubmit,
    btnType: "submit"
  }))));
};

SNETLogin.propTypes = {
  title: _propTypes.default.string,
  email: _propTypes.default.string,
  password: _propTypes.default.string,
  forgotPasswordLink: _propTypes.default.string,
  loginError: _propTypes.default.string,
  onEmailChange: _propTypes.default.func,
  onPasswordChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func
};
var _default = SNETLogin;
exports.default = _default;
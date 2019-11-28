"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _styles = require("./styles");

var _NavBar = _interopRequireDefault(require("./NavBar"));

var _HeaderActions = _interopRequireDefault(require("./HeaderActions"));

var _Title = _interopRequireDefault(require("./Title"));

var _MobileHeader = _interopRequireDefault(require("./MobileHeader"));

var _Header = require("../../../utility/constants/Header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("div", null, _react.default.createElement("header", {
    className: classes.header
  }, _react.default.createElement("div", {
    className: classes.logoSection
  }, _react.default.createElement(_MobileHeader.default, {
    data: _Header.NavData,
    isLoggedIn: isLoggedIn
  }), _react.default.createElement(_Title.default, null)), _react.default.createElement("div", {
    className: classes.navigationSection
  }, _react.default.createElement(_NavBar.default, {
    data: _Header.NavData
  })), _react.default.createElement("div", {
    className: classes.loginBtnsSection
  }, _react.default.createElement(_HeaderActions.default, {
    isLoggedIn: isLoggedIn
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.userReducer.login.isLoggedIn
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Header);

exports.default = _default;
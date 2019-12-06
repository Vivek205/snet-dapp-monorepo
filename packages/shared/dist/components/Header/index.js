"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _BlackLogo = _interopRequireDefault(require("../../assets/images/BlackLogo.svg"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _SNETButton = _interopRequireDefault(require("../SNETButton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { connect } from "react-redux";
// import NavBar from "./NavBar";
// import HeaderActions from "./HeaderActions";
// import Title from "./Title";
// import MobileHeader from "./MobileHeader";
// import { NavData } from "../../../utility/constants/Header";
var Header = function Header(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement(_AppBar.default, {
    position: "fixed",
    color: "error"
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Container.default, {
    className: classes.logoContainer
  }, _react.default.createElement(_CardMedia.default, {
    component: "img",
    image: _BlackLogo.default,
    alt: "SingularityNET"
  })), _react.default.createElement(_Container.default, {
    className: classes.navContainer
  }, "menus"), _react.default.createElement(_Container.default, {
    className: classes.actionsContainer
  }, _react.default.createElement(_SNETButton.default, {
    color: "primary",
    children: "login"
  }), _react.default.createElement(_SNETButton.default, {
    color: "primary",
    children: "enroll",
    variant: "contained"
  }))))));
}; // const mapStateToProps = state => ({ isLoggedIn: state.userReducer.login.isLoggedIn });
// export default connect(mapStateToProps)(Header);


var _default = Header;
exports.default = _default;
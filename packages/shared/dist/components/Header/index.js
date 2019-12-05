"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _BlackLogo = _interopRequireDefault(require("../../assets/images/BlackLogo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useStyles } from "./styles";
// import NavBar from "./NavBar";
// import HeaderActions from "./HeaderActions";
// import Title from "./Title";
// import MobileHeader from "./MobileHeader";
// import { NavData } from "../../../utility/constants/Header";
var Header = function Header(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  // const classes = useStyles();
  return _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement(_AppBar.default, {
    position: "fixed",
    color: "error"
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement("img", {
    src: _BlackLogo.default,
    alt: "SingularityNET"
  })))));
}; // const mapStateToProps = state => ({ isLoggedIn: state.userReducer.login.isLoggedIn });
// export default connect(mapStateToProps)(Header);


var _default = Header;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _BlackLogo = _interopRequireDefault(require("../../assets/images/BlackLogo.svg"));

var _styles = require("./styles");

var _HeaderActions = _interopRequireDefault(require("./HeaderActions"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETHeader = function SNETHeader(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      color = _ref.color,
      navbar = _ref.navbar,
      LoggedInActions = _ref.LoggedInActions,
      LoggedOutActions = _ref.LoggedOutActions;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement(_AppBar.default, {
    position: "fixed",
    color: color
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Container.default, {
    className: classes.logoContainer
  }, _react.default.createElement(_CardMedia.default, {
    component: "img",
    image: _BlackLogo.default,
    alt: "SingularityNET"
  })), _react.default.createElement(_Container.default, {
    className: classes.navContainer
  }, _react.default.createElement(_Navbar.default, navbar)), _react.default.createElement(_Container.default, {
    className: classes.actionsContainer
  }, _react.default.createElement(_HeaderActions.default, {
    isLoggedIn: isLoggedIn,
    LoggedInActions: LoggedInActions,
    LoggedOutActions: LoggedOutActions
  }))))));
};

SNETHeader.propTypes = {
  isLoggedIn: _propTypes.default.bool,
  color: _propTypes.default.string,
  navbar: _propTypes.default.shape({
    navbarItems: _propTypes.default.arrayOf(_propTypes.default.shape({
      type: _propTypes.default.string,
      activeLinks: _propTypes.default.arrayOf(_propTypes.default.string),
      label: _propTypes.default.string,
      openInNewTab: _propTypes.default.bool,
      to: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
    }))
  }),
  LoggedInActions: _propTypes.default.elementType,
  LoggedOutActions: _propTypes.default.elementType
};
var _default = SNETHeader;
exports.default = _default;
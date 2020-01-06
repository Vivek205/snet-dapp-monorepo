"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _HeaderActions = _interopRequireDefault(require("./HeaderActions"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _SNETAppBar = _interopRequireDefault(require("../SNETAppBar"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SNETHeader = function SNETHeader(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      color = _ref.color,
      navbar = _ref.navbar,
      LoggedInActions = _ref.LoggedInActions,
      LoggedOutActions = _ref.LoggedOutActions;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement(_SNETAppBar.default, {
    position: "fixed",
    color: color
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Container.default, {
    className: classes.logoContainer
  }, _react.default.createElement(_Logo.default, {
    headerColor: color
  })), _react.default.createElement(_Container.default, {
    className: classes.navContainer
  }, _react.default.createElement(_Navbar.default, _extends({}, navbar, {
    headerColor: color
  }))), _react.default.createElement(_Container.default, {
    className: classes.actionsContainer
  }, _react.default.createElement(_HeaderActions.default, {
<<<<<<< HEAD
    actions: actions,
    isLoggedIn: isLoggedIn,
    headerColor: color
  }))));
};

SNETHeader.defaultProps = {
  color: "white",
  navbar: {
    navbarItems: [{
      label: "Overview",
      type: "link",
      openInNewTab: false,
      activeLinks: ["/", "/overview"],
      to: "/overview"
    }, {
      label: "How It Works",
      type: "link",
      openInNewTab: false,
      activeLinks: ["/enroll"],
      to: "/enroll"
    }]
  },
  actions: [{
    children: "login",
    color: "primary",
    onClick: function onClick() {
      return console.log("clicked");
    },
    component: "a"
  }, {
    children: "enroll",
    color: "primary",
    onClick: function onClick() {
      return console.log("clicked");
    },
    variant: "contained"
  }]
};
=======
    isLoggedIn: isLoggedIn,
    LoggedInActions: LoggedInActions,
    LoggedOutActions: LoggedOutActions
  }))))));
};

>>>>>>> ad00213e6383dc46a16bf0bca66f3a3f428a8ec9
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
<<<<<<< HEAD
  actions: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    color: _propTypes.default.string,
    variant: _propTypes.default.string,
    handler: _propTypes.default.func
  }))
=======
  LoggedInActions: _propTypes.default.elementType,
  LoggedOutActions: _propTypes.default.elementType
>>>>>>> ad00213e6383dc46a16bf0bca66f3a3f428a8ec9
};
var _default = SNETHeader;
exports.default = _default;
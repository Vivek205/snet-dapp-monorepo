"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _SNETAppBar = _interopRequireDefault(require("../SNETAppBar"));

var _BlackLogo = _interopRequireDefault(require("../../assets/images/BlackLogo.svg"));

var _WhiteLogo = _interopRequireDefault(require("../../assets/images/WhiteLogo.svg"));

var _styles = require("./styles");

var _HeaderActions = _interopRequireDefault(require("./HeaderActions"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _MobileHeader = _interopRequireDefault(require("./MobileHeader"));

var _UpdateNotificationBar = _interopRequireDefault(require("../UpdateNotificationBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SNETHeader = function SNETHeader(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      color = _ref.color,
      NavigationBar = _ref.NavigationBar,
      LoggedInActions = _ref.LoggedInActions,
      LoggedOutActions = _ref.LoggedOutActions,
      portalName = _ref.portalName,
      mobileNavLinks = _ref.mobileNavLinks,
      mobileDropDown = _ref.mobileDropDown,
      onLogoClick = _ref.onLogoClick;
  var classes = (0, _styles.useStyles)();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      showUpdateNotification = _useState2[0],
      setShowUpdateNotificationBar = _useState2[1];

  var onUpdateCloseClick = function onUpdateCloseClick() {
    setShowUpdateNotificationBar(false);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("header", {
    className: "".concat(classes.snetHeader, " ").concat(color === "purple" ? classes.purpleHeader : null)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.updateNotificationBar
  }, /*#__PURE__*/_react.default.createElement(_UpdateNotificationBar.default, {
    showNotification: showUpdateNotification,
    onCloseClick: onUpdateCloseClick
  })), /*#__PURE__*/_react.default.createElement(_SNETAppBar.default, {
    position: "static",
    color: color,
    className: "".concat(classes.appBar, " ").concat(color === "purple" ? classes.purple : null)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.logoContainer,
    onClick: onLogoClick
  }, /*#__PURE__*/_react.default.createElement(_MobileHeader.default, {
    mobileNavLinks: mobileNavLinks,
    mobileDropDown: mobileDropDown,
    isLoggedIn: isLoggedIn,
    LoggedInActions: LoggedInActions,
    LoggedOutActions: LoggedOutActions,
    color: color
  }), /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    component: "img",
    image: color === "purple" ? _WhiteLogo.default : _BlackLogo.default,
    alt: "SingularityNET"
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h5"
  }, portalName)), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.navContainer
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    NavigationBar: NavigationBar
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.headerActionsContainer
  }, /*#__PURE__*/_react.default.createElement(_HeaderActions.default, {
    isLoggedIn: isLoggedIn,
    LoggedInActions: LoggedInActions,
    LoggedOutActions: LoggedOutActions,
    headerType: "desktop"
  })))));
};

SNETHeader.propTypes = {
  isLoggedIn: _propTypes.default.bool,
  color: _propTypes.default.string,
  LoggedInActions: _propTypes.default.object,
  LoggedOutActions: _propTypes.default.object,
  onLogoClick: _propTypes.default.func
};
SNETHeader.defaultProps = {
  isLoggedIn: _propTypes.default.bool,
  onLogoClick: _propTypes.default.func
};
var _default = SNETHeader;
exports.default = _default;
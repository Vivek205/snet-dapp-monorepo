"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _reactRedux = require("react-redux");

var _actionCreators = require("../../../../Redux/actionCreators");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _HeaderActions = _interopRequireDefault(require("../HeaderActions"));

var _NavItem = _interopRequireDefault(require("../NavItem"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MobileHeader = function MobileHeader(_ref) {
  var classes = _ref.classes,
      data = _ref.data,
      isLoggedIn = _ref.isLoggedIn,
      hamburgerMenu = _ref.hamburgerMenu,
      updateHamburgerState = _ref.updateHamburgerState;

  var toggleMobileMenu = function toggleMobileMenu() {
    updateHamburgerState(!hamburgerMenu);
  };

  if (!hamburgerMenu) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.hamburger,
      onClick: toggleMobileMenu
    }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null));
  }

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.mobileNavContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.closeMenuIcon
  }, /*#__PURE__*/_react.default.createElement(_Close.default, {
    onClick: toggleMobileMenu
  })), /*#__PURE__*/_react.default.createElement("nav", {
    className: classes.mobileNavigation
  }, /*#__PURE__*/_react.default.createElement("ul", null, data.tabs.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
      key: tab.title,
      title: tab.title,
      link: tab.link,
      active: tab.active
    });
  }), data.dropdowns.map(function (dropdown) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: dropdown.label,
      className: classes.subMenues
    }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_NavItem.default, {
      title: dropdown.label,
      subHeader: true
    }), dropdown.list.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
        key: item.label,
        title: item.label,
        link: item.link,
        subListItem: true
      });
    })));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes.mobileActionBtns, " ").concat(isLoggedIn ? classes.loggedInState : "")
  }, /*#__PURE__*/_react.default.createElement(_HeaderActions.default, {
    isLoggedIn: isLoggedIn
  })))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    hamburgerMenu: state.stylesReducer.hamburgerMenu
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateHamburgerState: function updateHamburgerState(hamburgerState) {
      return dispatch(_actionCreators.stylesActions.updateHamburgerState(hamburgerState));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(_styles2.useStyles)(MobileHeader));

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _StyledMenu = _interopRequireDefault(require("shared/dist/components/StyledMenu"));

var _styles = require("./styles");

var _NavItem = _interopRequireDefault(require("./NavItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(_ref) {
  var data = _ref.data,
      history = _ref.history;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("nav", null, _react.default.createElement("ul", {
    className: classes.navUl
  }, data.tabs.map(function (tab) {
    return _react.default.createElement(_NavItem.default, {
      key: tab.title,
      title: tab.title,
      link: tab.link
    });
  }), data.dropdowns.map(function (dropdown) {
    return _react.default.createElement("div", {
      key: dropdown.label,
      className: classes.headerDropDown
    }, _react.default.createElement(_StyledMenu.default, {
      label: dropdown.label,
      list: dropdown.list
    }));
  })));
};

var _default = (0, _reactRouterDom.withRouter)(NavBar);

exports.default = _default;
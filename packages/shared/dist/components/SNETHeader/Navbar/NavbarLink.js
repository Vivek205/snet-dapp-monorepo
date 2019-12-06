"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarLink = function NavbarLink(_ref) {
  var activeLinks = _ref.activeLinks,
      label = _ref.label,
      openInNewTab = _ref.openInNewTab,
      to = _ref.to;
  var classes = (0, _styles.useStyles)();

  var isActive = function isActive(unused, _ref2) {
    var pathname = _ref2.pathname;
    return activeLinks.includes(pathname);
  };

  return _react.default.createElement(_reactRouterDom.NavLink, {
    children: label,
    to: to,
    isActive: isActive,
    target: openInNewTab ? "_blank" : "",
    rel: openInNewTab ? "noreferrer noopener" : "",
    className: classes.navLink,
    activeClassName: classes.navLinkActive
  });
};

NavbarLink.propTypes = {
  activeLinks: _propTypes.default.arrayOf(_propTypes.default.string),
  label: _propTypes.default.string,
  openInNewTab: _propTypes.default.bool,
  to: _propTypes.default.oneOf(_propTypes.default.string, _propTypes.default.object)
};
var _default = NavbarLink;
exports.default = _default;
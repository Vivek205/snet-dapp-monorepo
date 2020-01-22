"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _SNETList = _interopRequireDefault(require("../../SNETList"));

var _NavbarLink = _interopRequireDefault(require("./NavbarLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var navbarItems = _ref.navbarItems;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("nav", null, _react.default.createElement(_SNETList.default, {
    display: "inline",
    className: classes.navlist
  }, navbarItems.map(function (navbarItem) {
    if (navbarItem.type === "link") {
      return _react.default.createElement(_ListItem.default, {
        key: navbarItem.label,
        children: _react.default.createElement(_NavbarLink.default, navbarItem)
      });
    }

    return null;
  })));
};

Navbar.propTypes = {
  navbarItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    type: _propTypes.default.string,
    activeLinks: _propTypes.default.arrayOf(_propTypes.default.string),
    label: _propTypes.default.string,
    openInNewTab: _propTypes.default.bool,
    to: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
  }))
};
var _default = Navbar;
exports.default = _default;
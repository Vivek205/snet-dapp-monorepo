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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Navbar = function Navbar(props) {
  var navbarItems = props.navbarItems,
      headerColor = props.headerColor;
  var classes = (0, _styles.useStyles)(props);
  return _react.default.createElement("nav", null, _react.default.createElement(_SNETList.default, {
    display: "inline",
    className: classes.navlist
  }, navbarItems.map(function (navbarItem) {
    if (navbarItem.type === "link") {
      return _react.default.createElement(_ListItem.default, {
        key: navbarItem.label,
        children: _react.default.createElement(_NavbarLink.default, _extends({}, navbarItem, {
          headerColor: headerColor
        }))
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
  })),
  headerColor: _propTypes.default.string
};
var _default = Navbar;
exports.default = _default;
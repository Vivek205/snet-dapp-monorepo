"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _FooterLink = _interopRequireDefault(require("../../FooterLink"));

var _FooterLinkTitle = _interopRequireDefault(require("../../FooterLinkTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterLinks = function FooterLinks(_ref) {
  var data = _ref.data;
  var classes = (0, _styles.useStyles)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.footerRightSideLinks
  }, data.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("ul", {
      key: item.title,
      className: classes.footerLinksList
    }, /*#__PURE__*/_react.default.createElement(_FooterLinkTitle.default, {
      title: item.title
    }), item.children.map(function (child) {
      return /*#__PURE__*/_react.default.createElement(_FooterLink.default, {
        key: child.label,
        image: child.image,
        link: child.link,
        label: child.label,
        internalLink: child.internalLink
      });
    }));
  }));
};

var _default = FooterLinks;
exports.default = _default;
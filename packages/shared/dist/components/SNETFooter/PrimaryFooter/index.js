"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _FooterLinks = _interopRequireDefault(require("./FooterLinks"));

var _styles2 = require("./styles");

var _FooterLink = _interopRequireDefault(require("../FooterLink"));

var _FooterLogo = _interopRequireDefault(require("./FooterLogo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryFooter = function PrimaryFooter(_ref) {
  var classes = _ref.classes,
      leftData = _ref.leftData,
      mainData = _ref.mainData;
  return _react.default.createElement("div", {
    className: classes.PrimaryFooter
  }, _react.default.createElement("div", {
    className: classes.LeftData
  }, _react.default.createElement(_FooterLogo.default, null), _react.default.createElement("ul", {
    className: classes.footerLogoSection
  }, leftData.map(function (item) {
    return _react.default.createElement(_FooterLink.default, {
      key: item.label,
      image: item.image,
      link: item.link,
      label: item.label,
      internalLink: item.internalLink
    });
  }))), _react.default.createElement(_FooterLinks.default, {
    data: mainData
  }));
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(PrimaryFooter);

exports.default = _default;
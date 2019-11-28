"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _WhiteLogo = _interopRequireDefault(require("./../../../../assets/images/WhiteLogo.svg"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterLogo = function FooterLogo() {
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("div", {
    className: classes.FooterLogo
  }, _react.default.createElement("h1", null, _react.default.createElement("a", {
    href: "/",
    title: "SingularityNET"
  }, _react.default.createElement("img", {
    src: _WhiteLogo.default,
    alt: "SingularityNET"
  }))));
};

var _default = FooterLogo;
exports.default = _default;
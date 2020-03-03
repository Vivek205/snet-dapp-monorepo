"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _styles2 = require("./styles");

var _WhiteLogo = _interopRequireDefault(require("../../../assets/images/WhiteLogo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterLogo = function FooterLogo(_ref) {
  var classes = _ref.classes;
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

var _default = (0, _styles.withStyles)(_styles2.useStyles)(FooterLogo);

exports.default = _default;
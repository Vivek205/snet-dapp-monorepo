"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _BlackLogo = _interopRequireDefault(require("../../../assets/images/BlackLogo.svg"));

var _WhiteLogo = _interopRequireDefault(require("../../../assets/images/WhiteLogo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SnetSvgLogo = {
  white: _BlackLogo.default,
  purple: _WhiteLogo.default
};

var Logo = function Logo(_ref) {
  var headerColor = _ref.headerColor;
  return /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    component: "img",
    image: SnetSvgLogo[headerColor],
    alt: "SingularityNET"
  });
};

Logo.propTypes = {
  headerColor: _propTypes.default.string
};
var _default = Logo;
exports.default = _default;
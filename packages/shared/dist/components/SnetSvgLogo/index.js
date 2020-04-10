"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BlackLogo = _interopRequireDefault(require("../../assets/images/BlackLogo.svg"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SnetSvgLogo = function SnetSvgLogo() {
  return /*#__PURE__*/_react.default.createElement("img", {
    src: _BlackLogo.default,
    alt: "SingularityNET"
  });
};

var _default = SnetSvgLogo;
exports.default = _default;
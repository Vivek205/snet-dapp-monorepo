"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertIcon = function AlertIcon(_ref) {
  var Icon = _ref.icon;

  if (Icon) {
    return /*#__PURE__*/_react.default.createElement(Icon, null);
  }

  return null;
};

var _default = AlertIcon;
exports.default = _default;
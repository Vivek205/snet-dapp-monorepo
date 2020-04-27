"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertHeader = function AlertHeader(_ref) {
  var header = _ref.header;

  if (header) {
    return /*#__PURE__*/_react.default.createElement("span", null, header);
  }

  return null;
};

var _default = AlertHeader;
exports.default = _default;
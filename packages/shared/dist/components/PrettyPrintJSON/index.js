"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrettyPrintJson = function PrettyPrintJson(_ref) {
  var data = _ref.data,
      space = _ref.space;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(data, null, space)));
};

PrettyPrintJson.propTypes = {
  data: _propTypes.default.object.isRequired,
  space: _propTypes.default.number
};
PrettyPrintJson.defaultProps = {
  space: 2
};
var _default = PrettyPrintJson;
exports.default = _default;
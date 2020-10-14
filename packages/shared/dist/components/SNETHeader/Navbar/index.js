"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(_ref) {
  var NavigationBar = _ref.NavigationBar;
  return /*#__PURE__*/_react.default.createElement(NavigationBar, null);
};

NavBar.propTypes = {
  NavigationBar: _propTypes.default.elementType
};
var _default = NavBar;
exports.default = _default;
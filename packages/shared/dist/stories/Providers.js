"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProviderWrapper = function ProviderWrapper(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, children);
};

var _default = ProviderWrapper;
exports.default = _default;
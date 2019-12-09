"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHeaderThemeContext = exports.createHeaderThemeContext = void 0;

var _react = require("react");

var HeaderThemeContext = (0, _react.createContext)();

var createHeaderThemeContext = function createHeaderThemeContext(color) {
  return HeaderThemeContext = (0, _react.createContext)(color);
};

exports.createHeaderThemeContext = createHeaderThemeContext;

var useHeaderThemeContext = function useHeaderThemeContext() {
  return (0, _react.useContext)(HeaderThemeContext);
};

exports.useHeaderThemeContext = useHeaderThemeContext;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SNETButton = _interopRequireDefault(require("../SNETButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HeaderActions = function HeaderActions(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      actions = _ref.actions;

  if (isLoggedIn) {
    return null;
  }

  return actions.map(function (action) {
    return _react.default.createElement(_SNETButton.default, _extends({
      key: action.children
    }, action));
  });
};

HeaderActions.propTypes = {
  actions: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    color: _propTypes.default.string,
    vaiant: _propTypes.default.string,
    handler: _propTypes.default.func
  }))
};
var _default = HeaderActions;
exports.default = _default;
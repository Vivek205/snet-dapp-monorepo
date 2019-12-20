"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SNETButton = _interopRequireDefault(require("../SNETButton"));

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HeaderActions = function HeaderActions(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      actions = _ref.actions;

  if (isLoggedIn) {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Notifications.default, {
      fontSize: "large"
    }), _react.default.createElement(_AccountCircle.default, {
      fontSize: "large"
    }));
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
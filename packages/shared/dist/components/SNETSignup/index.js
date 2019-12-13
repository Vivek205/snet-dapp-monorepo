"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Info = _interopRequireDefault(require("./Info"));

var _Form = _interopRequireDefault(require("./Form"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SNETSignup = function SNETSignup(props) {
  var classes = (0, _styles.useStyles)();
  var info = props.info,
      onSubmit = props.onSubmit;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.signupInfo
  }, _react.default.createElement(_Info.default, info)), _react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.signupFormWrapper
  }, _react.default.createElement(_Form.default, {
    onSubmit: onSubmit
  })));
};

SNETSignup.propTypes = {
  info: _propTypes.default.shape({
    title: _propTypes.default.string,
    description: _propTypes.default.string,
    list: _propTypes.default.arrayOf(_propTypes.default.string)
  }),
  onSubmit: _propTypes.default.func
};
var _default = SNETSignup;
exports.default = _default;
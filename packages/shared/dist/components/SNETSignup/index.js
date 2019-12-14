"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Info = _interopRequireDefault(require("./Info"));

var _Form = _interopRequireDefault(require("./Form"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETSignup = function SNETSignup(props) {
  var classes = (0, _styles.useStyles)();
  var info = props.info,
      onSubmit = props.onSubmit,
      signupError = props.signupError;
  return _react.default.createElement(_Grid.default, {
    container: true
  }, _react.default.createElement(_Grid.default, {
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
    onSubmit: onSubmit,
    signupError: signupError
  })));
};

SNETSignup.propTypes = {
  info: _propTypes.default.shape({
    title: _propTypes.default.string,
    description: _propTypes.default.string,
    list: _propTypes.default.arrayOf(_propTypes.default.string)
  }),
  onSubmit: _propTypes.default.func,
  signupError: _propTypes.default.string
};
var _default = SNETSignup;
exports.default = _default;
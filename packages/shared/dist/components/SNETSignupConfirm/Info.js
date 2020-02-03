"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(props) {
  var title = props.title,
      description = props.description;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("p", {
    className: classes.signupconfirmDetail
  }, _react.default.createElement("span", null, title), description);
};

Info.propTypes = {
  title: _propTypes.default.string,
  description: _propTypes.default.string
};
var _default = Info;
exports.default = _default;
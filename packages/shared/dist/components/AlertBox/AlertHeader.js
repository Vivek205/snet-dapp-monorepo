"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertHeader = function AlertHeader(_ref) {
  var header = _ref.header,
      classes = _ref.classes;

  if (header) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: classes.alertHeader
    }, header);
  }

  return null;
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(AlertHeader);

exports.default = _default;
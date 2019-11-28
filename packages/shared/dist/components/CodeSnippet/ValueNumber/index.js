"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValueNumber = function ValueNumber(_ref) {
  var classes = _ref.classes,
      number = _ref.number;
  return _react.default.createElement("span", {
    className: classes.valueNumbergContainer
  }, number);
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(ValueNumber);

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLinearProgress = function StyledLinearProgress(_ref) {
  var classes = _ref.classes,
      value = _ref.value;
  return /*#__PURE__*/_react.default.createElement(_LinearProgress.default, {
    className: classes.styledProgressBar,
    variant: "determinate",
    value: value
  });
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(StyledLinearProgress);

exports.default = _default;
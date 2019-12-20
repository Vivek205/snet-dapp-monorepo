"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _styles2 = require("./styles");

var _StyledTextField = _interopRequireDefault(require("shared/dist/components/StyledTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETTextarea = function SNETTextarea(_ref) {
  var classes = _ref.classes,
      label = _ref.label,
      rowCount = _ref.rowCount,
      colCount = _ref.colCount,
      content = _ref.content,
      minCount = _ref.minCount,
      maxCount = _ref.maxCount;
  return _react.default.createElement("div", {
    className: classes.textareaIconContainer
  }, _react.default.createElement("div", {
    className: classes.infoIconContainer
  }, _react.default.createElement(_Info.default, null)), _react.default.createElement("div", {
    className: classes.textareaContainer
  }, _react.default.createElement("span", {
    className: classes.label
  }, label), _react.default.createElement("textarea", {
    rows: rowCount,
    cols: colCount
  }, content), _react.default.createElement("span", {
    className: classes.charLength
  }, minCount, "/", maxCount, " char")));
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(SNETTextarea);

exports.default = _default;
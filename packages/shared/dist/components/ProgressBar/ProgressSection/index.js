"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProgressStatusList = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _StatusToggler = _interopRequireDefault(require("./StatusToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressStatusList = {
  IDLE: "idle",
  ACTIVE: "active",
  COMPLETED: "completed"
};
exports.ProgressStatusList = ProgressStatusList;

var ProgressSection = function ProgressSection(_ref) {
  var progressNumber = _ref.progressNumber,
      progressText = _ref.progressText,
      progressStatus = _ref.progressStatus;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("li", {
    className: classes[progressStatus]
  }, _react.default.createElement(_StatusToggler.default, {
    progressStatus: progressStatus,
    progressNumber: progressNumber
  }), _react.default.createElement("span", {
    className: classes.TabTitle
  }, progressText));
};

ProgressSection.propTypes = {
  progressNumber: _propTypes.default.number.isRequired,
  progressText: _propTypes.default.string.isRequired,
  progressStatus: _propTypes.default.oneOf(["idle", "active", "completed"])
};
var _default = ProgressSection;
exports.default = _default;
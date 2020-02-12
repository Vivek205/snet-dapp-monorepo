"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.alertTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _styles2 = require("./styles");

var _AlertLink = _interopRequireDefault(require("./AlertLink"));

var _AlertIcon = _interopRequireDefault(require("./AlertIcon"));

var _AlertHeader = _interopRequireDefault(require("./AlertHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alertTypes = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info"
};
exports.alertTypes = alertTypes;
var backgroundColor = {
  error: alertTypes.ERROR,
  success: alertTypes.SUCCESS,
  warning: alertTypes.WARNING,
  info: alertTypes.INFO
};

var AlertBox = function AlertBox(_ref) {
  var classes = _ref.classes,
      message = _ref.message,
      type = _ref.type,
      link = _ref.link,
      icon = _ref.icon,
      header = _ref.header;

  if (!message) {
    return null;
  }

  return _react.default.createElement("div", {
    className: (0, _clsx.default)(classes.alertBoxContainer, classes[backgroundColor[type]])
  }, _react.default.createElement(_AlertIcon.default, {
    icon: icon
  }), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_AlertHeader.default, {
    header: header
  }), _react.default.createElement("p", null, message, " ", _react.default.createElement(_AlertLink.default, {
    link: link
  }))));
};

AlertBox.propTypes = {
  type: _propTypes.default.oneOf(["error", "success", "warning", "info"]),
  message: _propTypes.default.string
};
AlertBox.defaultProps = {
  type: "error"
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(AlertBox);

exports.default = _default;
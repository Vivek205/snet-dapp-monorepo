"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfflineIndicator = function OfflineIndicator(_ref) {
  var classes = _ref.classes,
      show = _ref.show;

  if (show) {
    return _react.default.createElement("div", {
      className: classes.offlineIndicator
    }, _react.default.createElement(_Icon.default, {
      className: (0, _clsx.default)(classes.icon, "fas fa-exclamation")
    }), _react.default.createElement("span", null, "Currently Offline"));
  }

  return null;
};

OfflineIndicator.propTypes = {
  show: _propTypes.default.bool
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(OfflineIndicator);

exports.default = _default;
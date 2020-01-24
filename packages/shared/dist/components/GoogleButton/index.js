"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleButton = function GoogleButton() {
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("div", {
    className: classes.pendingSection
  }, _react.default.createElement(_core.Icon, {
    className: "far fa-hourglass"
  }), _react.default.createElement("span", null, "Pending"));
};

var _default = GoogleButton;
exports.default = _default;
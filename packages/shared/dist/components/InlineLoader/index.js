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

var InlineLoader = function InlineLoader(_ref) {
  var loading = _ref.loading;
  var classes = (0, _styles.useStyles)();

  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.pendingSection
    }, /*#__PURE__*/_react.default.createElement(_core.Icon, {
      className: "far fa-hourglass"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Pending"));
  }

  return null;
};

InlineLoader.propTypes = {
  loading: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
};
var _default = InlineLoader;
exports.default = _default;
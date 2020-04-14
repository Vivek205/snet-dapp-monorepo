"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SNETLoader = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETLoader = function SNETLoader(_ref) {
  var isLoading = _ref.isLoading,
      title = _ref.title,
      content = _ref.content;
  var classes = (0, _styles.useStyles)();
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    disableBackdropClick: true,
    open: isLoading
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    title: /*#__PURE__*/_react.default.createElement("h2", null, title)
  }), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.circularProgressContainer
  }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, {
    className: classes.circularProgress
  })), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    component: "p"
  }, content))));
};

exports.SNETLoader = SNETLoader;
SNETLoader.propTypes = {
  isLoading: _propTypes.default.bool,
  title: _propTypes.default.string,
  content: _propTypes.default.string
};
var _default = SNETLoader;
exports.default = _default;


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _error = _interopRequireDefault(require("../../assets/images/error.svg"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorBox = function ErrorBox(_ref) {
  var classes = _ref.classes,
      errImg = _ref.errImg,
      errText = _ref.errText;
  return _react.default.createElement("div", {
    className: classes.errorMsgContainer
  }, _react.default.createElement("img", {
    src: errImg || _error.default,
    alt: "No connection"
  }), _react.default.createElement("span", null, errText || "Unable to reach our servers. We have been notified of this.\n        Please try again Later."));
};

ErrorBox.propTypes = {
  errImg: _propTypes.default.string,
  errText: _propTypes.default.string
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(ErrorBox);

exports.default = _default;
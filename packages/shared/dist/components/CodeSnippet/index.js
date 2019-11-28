

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeSnippet = function CodeSnippet(_ref) {
  var classes = _ref.classes,
      children = _ref.children;
  return _react.default.createElement("section", {
    className: classes.codeSnippetContainer
  }, _react.default.createElement("div", {
    className: classes.codeSnippet
  }, children));
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(CodeSnippet);

exports.default = _default;


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterLinkTitle = function FooterLinkTitle(_ref) {
  var title = _ref.title;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("span", {
    className: classes.footerLinksTitle
  }, title);
};

var _default = FooterLinkTitle;
exports.default = _default;
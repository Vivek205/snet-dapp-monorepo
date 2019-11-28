

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SnetSvgLogo = _interopRequireDefault(require("../SnetSvgLogo"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterLink = function FooterLink(_ref) {
  var label = _ref.label,
      link = _ref.link,
      image = _ref.image,
      internalLink = _ref.internalLink;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("li", {
    className: classes.footerLinks
  }, _react.default.createElement("a", {
    href: link,
    className: classes.footerLinkText,
    title: label,
    target: internalLink ? "_self" : "_blank",
    rel: "noopener noreferrer"
  }, image ? _react.default.createElement(_SnetSvgLogo.default, null) : label));
};

var _default = FooterLink;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialIcon = function SocialIcon(_ref) {
  var item = _ref.item;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("li", {
    className: classes.socialIconsLink
  }, _react.default.createElement("a", {
    href: item.link,
    title: item.title,
    className: classes.socialIcon,
    target: "_blank",
    rel: "noopener noreferrer"
  }, _react.default.createElement(_core.Icon, {
    className: item.className,
    fontSize: "large"
  })));
};

var _default = SocialIcon;
exports.default = _default;
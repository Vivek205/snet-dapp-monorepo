"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _WhiteLogo = _interopRequireDefault(require("../../../assets/images/WhiteLogo.svg"));

var _Routes = _interopRequireDefault(require("../../../utility/constants/Routes"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var title = _ref.title;
  var classes = (0, _styles.useStyles)();
  return /*#__PURE__*/_react.default.createElement("h1", {
    className: classes.h1
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(_Routes.default.AI_MARKETPLACE),
    className: classes.logoAnchor
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _WhiteLogo.default,
    alt: "SingularityNET"
  })));
};

var _default = Title;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertLink = function AlertLink(_ref) {
  var link = _ref.link,
      linkTo = _ref.linkTo;

  if (link) {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: linkTo,
      title: link,
      target: "_blank"
    }, link);
  }

  return null;
};

var _default = AlertLink;
exports.default = _default;
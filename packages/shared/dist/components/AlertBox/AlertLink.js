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
<<<<<<< HEAD
      href: "#",
      title: "demo"
=======
      href: linkTo,
      title: link,
      target: "_blank"
>>>>>>> 24a8482d6719438eb46217e3347b9a6eb8077314
    }, link);
  }

  return null;
};

var _default = AlertLink;
exports.default = _default;
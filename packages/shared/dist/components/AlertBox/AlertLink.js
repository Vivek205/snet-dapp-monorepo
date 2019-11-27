

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertLink = function AlertLink(_ref) {
  var link = _ref.link;

  if (link) {
    return _react.default.createElement("a", {
      href: "#",
      title: "demo"
    }, link);
  }

  return null;
};

var _default = AlertLink;
exports.default = _default;
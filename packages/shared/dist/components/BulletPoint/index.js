

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AlertBox = _interopRequireWildcard(require("shared/dist/components/AlertBox"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = {
  warning: _react.default.createElement(_Warning.default, null)
};

var BulletPoint = function BulletPoint(_ref) {
  var message = _ref.message,
      type = _ref.type;
  return _react.default.createElement("div", null, _react.default.createElement("div", null, Icon[type]), _react.default.createElement(_AlertBox.default, {
    type: type,
    message: message
  }));
};

BulletPoint.defaultProps = {
  type: _AlertBox.alertTypes.WARNING
};
BulletPoint.propTypes = {
  message: _propTypes.default.string,
  type: _propTypes.default.oneOf(Object.values(_AlertBox.alertTypes))
};
var _default = BulletPoint;
exports.default = _default;
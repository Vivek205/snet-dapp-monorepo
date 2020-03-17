"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isObject = _interopRequireDefault(require("lodash/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var JSONtoUl = function JSONtoUl(obj) {
  if ((0, _isEmpty.default)(obj)) {
    return null;
  }

  return _react.default.createElement("ul", null, Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if ((0, _isArray.default)(value)) {
      return _react.default.createElement("li", {
        key: key
      }, _react.default.createElement("strong", null, key), _react.default.createElement("span", null, "[", value.join(","), "]"));
    } else if ((0, _isObject.default)(value)) {
      return JSONtoUl(value);
    }

    return _react.default.createElement("li", {
      key: key
    }, _react.default.createElement("strong", null, key), _react.default.createElement("span", null, "".concat(value)));
  }));
};

var _default = JSONtoUl;
exports.default = _default;
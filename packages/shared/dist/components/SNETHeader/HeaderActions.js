"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderActions = function HeaderActions(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      LoggedInActions = _ref.LoggedInActions,
      LoggedOutActions = _ref.LoggedOutActions,
      headerType = _ref.headerType;

  if (isLoggedIn) {
<<<<<<< HEAD
    return /*#__PURE__*/_react.default.createElement(LoggedInActions, null);
=======
    return /*#__PURE__*/_react.default.createElement(LoggedInActions, {
      headerType: headerType
    });
>>>>>>> 24a8482d6719438eb46217e3347b9a6eb8077314
  }

  return /*#__PURE__*/_react.default.createElement(LoggedOutActions, null);
};

HeaderActions.propTypes = {
  LoggedInActions: _propTypes.default.elementType,
  LoggedOutActions: _propTypes.default.elementType
};
var _default = HeaderActions;
exports.default = _default;
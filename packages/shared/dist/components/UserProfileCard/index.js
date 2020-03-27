"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserProfileCard = function UserProfileCard(_ref) {
  var classes = _ref.classes,
      nickName = _ref.nickName,
      onClose = _ref.onClose;
  return _react.default.createElement("div", {
    className: classes.Userdetails
  }, _react.default.createElement(_AccountCircle.default, null), _react.default.createElement("div", null, _react.default.createElement("h4", null, nickName)), onClose && _react.default.createElement(_Close.default, {
    className: classes.closeIcon,
    onClick: onClose
  }));
};

UserProfileCard.propTypes = {
  nickName: _propTypes.default.string,
  onClose: _propTypes.default.func
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(UserProfileCard);

exports.default = _default;
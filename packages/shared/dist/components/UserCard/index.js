"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _avatar = _interopRequireDefault(require("shared/dist/assets/images/avatar.png"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCard = function UserCard(_ref) {
  var classes = _ref.classes,
      userImg = _ref.userImg,
      userName = _ref.userName,
      userEmail = _ref.userEmail;
  return _react.default.createElement(_Grid.default, {
    item: true,
    sx: 12,
    sm: 12,
    md: 12,
    lg: 12,
    className: classes.userCardContainer
  }, _react.default.createElement(_Grid.default, {
    item: true,
    sx: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.userDetails
  }, _react.default.createElement(_Avatar.default, {
    alt: "Singularity",
    src: userImg || _avatar.default,
    className: classes.avatar
  }), _react.default.createElement("div", null, _react.default.createElement(_Typography.default, {
    className: classes.userName
  }, userName), _react.default.createElement(_Typography.default, {
    className: classes.userEmail
  }, userEmail))));
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(UserCard);

exports.default = _default;
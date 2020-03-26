"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actionCreators = require("../../../Redux/actionCreators");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignOut = function SignOut(props) {
  var classes = (0, _styles.useStyles)();

  var handleSignOut = function handleSignOut() {
    props.signOut();
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "".concat(classes.signupBtn, " ").concat(classes.loginBtnsLi),
    onClick: handleSignOut
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(classes.loginBtnsAnchor, " ").concat(classes.UppercaseText, " ").concat(classes.signupBtnText)
  }, " Sign Out"));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signOut: function signOut() {
      return dispatch(_actionCreators.userActions.signOut);
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SignOut);

exports.default = _default;
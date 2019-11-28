"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("./styles");

var _Routes = _interopRequireDefault(require("../../../utility/constants/Routes"));

var _UserProfileToggler = _interopRequireDefault(require("../../UserProfilePopUp/UserProfileToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeaderActions = function HeaderActions(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      history = _ref.history;
  var classes = (0, _styles.useStyles)();

  var handleRedirection = function handleRedirection(redirectTo) {
    var sourcePath = history.location.pathname;
    history.push({
      pathname: redirectTo,
      state: {
        sourcePath: sourcePath
      }
    });
  };

  return _react.default.createElement("ul", {
    className: classes.loginBtnsUl
  }, isLoggedIn ? _react.default.createElement(_UserProfileToggler.default, null) : _react.default.createElement(_react.Fragment, null, _react.default.createElement("li", {
    className: classes.loginBtnsLi
  }, _react.default.createElement("span", {
    className: "".concat(classes.loginBtnsAnchor, " ").concat(classes.loginBtn),
    onClick: function onClick() {
      return handleRedirection("/".concat(_Routes.default.LOGIN));
    }
  }, "Login")), _react.default.createElement("li", {
    className: "".concat(classes.signupBtn, " ").concat(classes.loginBtnsLi)
  }, _react.default.createElement("span", {
    className: "".concat(classes.loginBtnsAnchor, " ").concat(classes.UppercaseText, " ").concat(classes.signupBtnText),
    onClick: function onClick() {
      return handleRedirection("/".concat(_Routes.default.SIGNUP));
    }
  }, "Sign Up Free"))));
};

var _default = (0, _reactRouterDom.withRouter)(HeaderActions);

exports.default = _default;
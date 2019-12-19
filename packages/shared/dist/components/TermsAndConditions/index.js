"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _AlertBox = _interopRequireDefault(require("shared/dist/components/AlertBox"));

var _StyledButton = _interopRequireDefault(require("shared/dist/components/StyledButton"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = require("./styles");

var _PrivacyTerms = _interopRequireDefault(require("./PrivacyTerms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TermsAndConditions = function TermsAndConditions(_ref) {
  var classes = _ref.classes,
      title = _ref.title,
      formLabel = _ref.formLabel,
      onAccept = _ref.onAccept;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      agreed = _useState2[0],
      setAgreed = _useState2[1];

  return _react.default.createElement("div", {
    className: classes.onboardingContainer
  }, _react.default.createElement("div", {
    className: classes.termsAndConditionsContainer
  }, _react.default.createElement("h3", null, title), _react.default.createElement("div", {
    className: classes.termsAndConditions
  }, _react.default.createElement(_PrivacyTerms.default, null)), _react.default.createElement("div", {
    className: classes.checkboxAndButton
  }, _react.default.createElement(_FormControlLabel.default, {
    control: _react.default.createElement(_Checkbox.default, {
      onChange: function onChange() {
        return setAgreed(!agreed);
      },
      color: "primary"
    }),
    label: formLabel
  }), _react.default.createElement(_StyledButton.default, {
    btnText: "accept",
    disabled: !agreed,
    onClick: onAccept
  })), _react.default.createElement(_AlertBox.default, {
    type: alert.type,
    message: alert.message
  })));
};

TermsAndConditions.protoTypes = {
  title: _propTypes.default.string,
  formLabel: _propTypes.default.string,
  onAccept: _propTypes.default.func
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(TermsAndConditions);

exports.default = _default;
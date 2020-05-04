"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _validator = _interopRequireDefault(require("../../../utils/validator"));

var _validationConstraints = require("./validationConstraints");

var _constants = require("./constants");

var _AlertText = _interopRequireDefault(require("../../AlertText"));

var _AlertBox = require("../../AlertBox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordInlineValidation = function PasswordInlineValidation(props) {
  var password = props.password;
  var validationInputs = [{
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.upperCase)),
    message: "".concat(_constants.passwordValidationMsgs.UPPER_CASE, ", ")
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.lowerCase)),
    message: "".concat(_constants.passwordValidationMsgs.LOWER_CASE, ", ")
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.length)),
    message: "".concat(_constants.passwordValidationMsgs.LENGTH, ", ")
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.AWSSplChars)),
    message: "".concat(_constants.passwordValidationMsgs.SPECIAL_CHAR, ", ")
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.number)),
    message: _constants.passwordValidationMsgs.NUMBER
  }];
  return validationInputs.map(function (alert) {
    return /*#__PURE__*/_react.default.createElement(_AlertText.default, {
      key: alert.message,
      type: alert.condition ? _AlertBox.alertTypes.SUCCESS : _AlertBox.alertTypes.ERROR,
      message: alert.message
    });
  });
};

PasswordInlineValidation.propTypes = {
  password: _propTypes.default.string
};
var _default = PasswordInlineValidation;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _validator = _interopRequireDefault(require("../../SNETUtils/validator"));

var _validationConstraints = require("./validationConstraints");

var _constants = require("./constants");

var _AlertText = _interopRequireDefault(require("../../AlertText"));

var _AlertBox = require("../../AlertBox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordInlineValidation = function PasswordInlineValidation(props) {
  var password = props.password;
  var validationInputs = [{
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.upperCase)),
    message: _constants.passwordValidationMsgs.UPPER_CASE
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.lowerCase)),
    message: _constants.passwordValidationMsgs.LOWER_CASE
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.length)),
    message: _constants.passwordValidationMsgs.LENGTH
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.AWSSplChars)),
    message: _constants.passwordValidationMsgs.SPECIAL_CHAR
  }, {
    condition: (0, _isEmpty.default)(_validator.default.single(password, _validationConstraints.passwordInlineConstraints.number)),
    message: _constants.passwordValidationMsgs.NUMBER
  }];
  return validationInputs.map(function (value) {
    return _react.default.createElement(_AlertText.default, {
      type: value.condition ? _AlertBox.alertTypes.SUCCESS : _AlertBox.alertTypes.ERROR,
      message: value.message
    });
  });
};

PasswordInlineValidation.propTypes = {
  password: _propTypes.default.string
};
var _default = PasswordInlineValidation;
exports.default = _default;
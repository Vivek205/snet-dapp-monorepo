"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forgotPassworSubmitConstraints = void 0;
var forgotPassworSubmitConstraints = {
  password: {
    presence: {
      allowEmpty: false
    },
    hasLowerCase: true,
    hasUpperCase: true,
    hasNumber: true,
    hasAWSPasswordSplChar: true,
    length: {
      minimum: 8
    }
  },
  code: {
    presence: {
      allowEmpty: false
    },
    length: {
      minimum: 6
    }
  },
  confirmPassword: {
    equality: "password"
  }
};
exports.forgotPassworSubmitConstraints = forgotPassworSubmitConstraints;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupFormConstraints = exports.passwordInlineConstraints = void 0;
var passwordInlineConstraints = {
  lowerCase: {
    hasLowerCase: true
  },
  upperCase: {
    hasUpperCase: true
  },
  number: {
    hasNumber: true
  },
  AWSSplChars: {
    hasAWSPasswordSplChar: true
  },
  length: {
    length: {
      minimum: 8
    }
  }
};
exports.passwordInlineConstraints = passwordInlineConstraints;
var signupFormConstraints = {
  nickname: {
    presence: {
      allowEmpty: false
    }
  },
  email: {
    presence: {
      allowEmpty: false
    },
    email: {
      message: "'%{value}' is not valid"
    }
  },
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
  }
};
exports.signupFormConstraints = signupFormConstraints;
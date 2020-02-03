"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forgotPasswordConstraints = void 0;
var forgotPasswordConstraints = {
  email: {
    presence: {
      allowEmpty: false
    },
    email: {
      message: "'%{value}' is not valid"
    }
  }
};
exports.forgotPasswordConstraints = forgotPasswordConstraints;
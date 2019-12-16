"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationConstraints = void 0;
var validationConstraints = {
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
    }
  }
};
exports.validationConstraints = validationConstraints;
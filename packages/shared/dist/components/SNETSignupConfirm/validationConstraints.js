"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupConfirmConstraints = void 0;
var signupConfirmConstraints = {
  otp: {
    presence: {
      empty: false
    },
    length: {
      is: 6
    }
  }
};
exports.signupConfirmConstraints = signupConfirmConstraints;
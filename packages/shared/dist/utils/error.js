"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfKnownError = void 0;

var _API = require("./API");

var _validationError = _interopRequireDefault(require("./validationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkIfKnownError = function checkIfKnownError(error) {
  return error instanceof _API.APIError || error instanceof _validationError.default;
};

exports.checkIfKnownError = checkIfKnownError;
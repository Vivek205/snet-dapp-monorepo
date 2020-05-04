"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64ToArrayBuffer = exports.getFileBinary = void 0;

var getFileBinary = function getFileBinary(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsBinaryString(file);
  });
};

exports.getFileBinary = getFileBinary;

var base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
  var binary_string = atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }

  return bytes.buffer;
};

exports.base64ToArrayBuffer = base64ToArrayBuffer;
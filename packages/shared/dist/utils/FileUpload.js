"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileBinary = void 0;

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
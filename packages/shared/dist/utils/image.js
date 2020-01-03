"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgSrcInBase64 = exports.fileTypeToMimeType = exports.mimeTypeToFileType = void 0;

var mimeTypeToFileType = function mimeTypeToFileType(mimeType) {
  if (!mimeType) {
    return null;
  }

  var fileType = mimeType.split("/")[1];
  return fileType;
};

exports.mimeTypeToFileType = mimeTypeToFileType;

var fileTypeToMimeType = function fileTypeToMimeType(fileType) {
  if (!fileType) {
    return null;
  }

  var mimeType = "image/".concat(fileType);
  return mimeType;
};

exports.fileTypeToMimeType = fileTypeToMimeType;

var imgSrcInBase64 = function imgSrcInBase64(mimeType, data) {
  if (!mimeType || !data) {
    return null;
  }

  var src = "data:".concat(mimeType, ";base64,").concat(data);
  return src;
};

exports.imgSrcInBase64 = imgSrcInBase64;
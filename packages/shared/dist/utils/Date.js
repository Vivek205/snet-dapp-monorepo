"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDateFromAPIResponse = exports.getLocalDateFromUTC = exports.getCurrentUTCEpoch = void 0;

var getCurrentUTCEpoch = function getCurrentUTCEpoch() {
  var currentDate = new Date();
  var currentUTCDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());
  var currentUTCEpoch = Math.floor(currentUTCDate.getTime() / 1000);
  return currentUTCEpoch;
};

exports.getCurrentUTCEpoch = getCurrentUTCEpoch;

var getLocalDateFromUTC = function getLocalDateFromUTC(dateString) {
  var dateStringInUTC = "".concat(dateString, " UTC");
  var localDate = new Date(dateStringInUTC);
  return localDate;
};

exports.getLocalDateFromUTC = getLocalDateFromUTC;

var parseDateFromAPIResponse = function parseDateFromAPIResponse(dateString) {
  if (!dateString) {
    return null;
  }

  var localDate = new Date(dateString);
  var intlDateOptions = {
    month: "short",
    year: "numeric",
    day: "2-digit"
  }; // Date format - "MMM DD, YYYY"

  var formattedDateString = new Intl.DateTimeFormat("en-US", intlDateOptions).format(localDate);
  return formattedDateString;
};

exports.parseDateFromAPIResponse = parseDateFromAPIResponse;
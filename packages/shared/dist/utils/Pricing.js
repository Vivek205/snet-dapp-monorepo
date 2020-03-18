"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.agiInDecimal = exports.agiToCogs = exports.cogsToAgi = void 0;
var priceData = {
  fixed_price_model: "fixed_price",
  fixed_price_per_method: "fixed_price_per_method",
  agi_precision: 100000000,
  agi_divisibility: 8,
  usd_conv_rate: 0.000001
};

var cogsToAgi = function cogsToAgi(cogs) {
  return (cogs / priceData.agi_precision).toFixed(priceData.agi_divisibility);
};

exports.cogsToAgi = cogsToAgi;

var agiToCogs = function agiToCogs(agi) {
  return Math.round(agi * priceData.agi_precision);
};

exports.agiToCogs = agiToCogs;

var agiInDecimal = function agiInDecimal(agi) {
  return parseFloat(agi).toFixed(priceData.agi_divisibility);
};

exports.agiInDecimal = agiInDecimal;
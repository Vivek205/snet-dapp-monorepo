"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RatingsCount = function RatingsCount(_ref) {
  var ratingGiven = _ref.ratingGiven,
      totalRating = _ref.totalRating;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("span", {
    className: classes.ratedCount
  }, parseFloat(ratingGiven).toFixed(1), " (", totalRating ? "".concat(totalRating) : 0, ")");
};

RatingsCount.propTypes = {
  ratingGiven: _propTypes.default.number,
  totalRating: _propTypes.default.number
};
var _default = RatingsCount;
exports.default = _default;
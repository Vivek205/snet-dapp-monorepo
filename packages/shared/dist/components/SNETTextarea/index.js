"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SNETTextarea = function SNETTextarea(_ref) {
  var classes = _ref.classes,
      label = _ref.label,
      rowCount = _ref.rowCount,
      colCount = _ref.colCount,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      content = _ref.content,
      minCount = _ref.minCount,
      maxCount = _ref.maxCount,
      showInfoIcon = _ref.showInfoIcon,
      extraInfo = _ref.extraInfo;
  return _react.default.createElement("div", {
    className: classes.textareaIconContainer
  }, showInfoIcon ? _react.default.createElement("div", {
    className: classes.infoIconContainer
  }, _react.default.createElement(_Info.default, null)) : null, _react.default.createElement("div", {
    className: classes.textareaContainer
  }, _react.default.createElement("span", {
    className: classes.label
  }, label), _react.default.createElement("textarea", {
    rows: rowCount,
    cols: colCount,
    name: name,
    value: value,
    onChange: onChange
  }, content), maxCount ? _react.default.createElement("span", {
    className: classes.charLength
  }, minCount, "/", maxCount, " char") : null, extraInfo ? _react.default.createElement("span", {
    className: classes.extraInfo
  }, extraInfo) : null));
};

SNETTextarea.propTypes = {
  label: _propTypes.default.string,
  rowCount: _propTypes.default.number,
  colCount: _propTypes.default.number,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  content: _propTypes.default.string,
  mainCount: _propTypes.default.number,
  maxCount: _propTypes.default.number
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(SNETTextarea);

exports.default = _default;
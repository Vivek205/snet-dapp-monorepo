"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("AppLoader", module).add("_default", function () {
  return /*#__PURE__*/_react.default.createElement(_.SNETLoader, {
    isLoading: true,
    title: "Sample Header",
    content: "Please wait. this is a sample loader text"
  });
});
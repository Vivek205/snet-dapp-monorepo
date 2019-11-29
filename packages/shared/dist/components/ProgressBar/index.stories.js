"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _withLiveEditScope = _interopRequireDefault(require("storybook-addon-react-live-edit/dist/withLiveEditScope"));

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sampleList = ["completed", "active", "idle"];
(0, _react2.storiesOf)("Progress | ProgressBar", module).addParameters({
  props: {
    propTables: [_.default]
  }
}).addDecorator((0, _withLiveEditScope.default)({
  React: _react.default,
  ProgressBar: _.default,
  sampleList: sampleList
})).addLiveSource("live source", "return <ProgressBar activeSection=\"2\" progressText={sampleList} />");
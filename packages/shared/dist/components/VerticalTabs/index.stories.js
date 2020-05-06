"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _withLiveEditScope = _interopRequireDefault(require("storybook-addon-react-live-edit/dist/withLiveEditScope"));

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upperTabs = [{
  title: "My AI Apps",
  openInNewTab: false
}, {
  title: "Teams & Access",
  openInNewTab: false
}];
var lowerTabs = [{
  title: "Wallet Account",
  openInNewTab: false
}, {
  title: "Dev Docs",
  openInNewTab: true
}];
(0, _react2.storiesOf)("VerticalTabs", module).addParameters({
  props: {
    propTables: [_.default]
  }
}).addDecorator((0, _withLiveEditScope.default)({
  React: _react.default,
  VerticalTabs: _.default,
  upperTabs: upperTabs,
  lowerTabs: lowerTabs
})).addLiveSource("live source", "return <VerticalTabs  upperTabs={upperTabs} lowerTabs={lowerTabs}/>");
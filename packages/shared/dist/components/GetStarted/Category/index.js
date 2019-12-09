"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/styles");

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _styles2 = require("./styles");

var _StyledButton = _interopRequireDefault(require("../../StyledButton"));

var _dummyCard = _interopRequireDefault(require("../../../assets/images/dummy-card.png"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description(_ref) {
  var content = _ref.content;
  return _react.default.createElement("p", null, (0, _htmlReactParser.default)(content));
};

var Subheading = function Subheading(_ref2) {
  var content = _ref2.content;
  return _react.default.createElement("p", null, (0, _htmlReactParser.default)(content));
};

var ListHeading = function ListHeading(_ref3) {
  var content = _ref3.content;
  return _react.default.createElement("span", null, (0, _htmlReactParser.default)(content));
};

var List = function List(_ref4) {
  var items = _ref4.items;
  return _react.default.createElement("ul", null, items.map(function (item) {
    return _react.default.createElement("li", {
      key: item
    }, (0, _htmlReactParser.default)(item));
  }));
};

var Category = function Category(_ref5) {
  var classes = _ref5.classes,
      title = _ref5.title,
      content = _ref5.content,
      rightAlign = _ref5.rightAlign,
      media = _ref5.media;
  return _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 24,
    className: "".concat(classes.CategoryWrapper, " ").concat(rightAlign ? classes.reverseDirection : null)
  }, _react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    className: classes.CategoryMedia
  }, _react.default.createElement("img", {
    src: media || _dummyCard.default,
    alt: "DummyImage",
    className: classes.FullWidth
  })), _react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    className: classes.CategoryContent
  }, _react.default.createElement("h3", null, title), content.map(function (item, index) {
    if (item.type === "description") {
      return _react.default.createElement(Description, {
        content: item.value
      });
    }

    if (item.type === "subheading") {
      return _react.default.createElement(Subheading, {
        content: item.value
      });
    }

    if (item.type === "listHeading") {
      return _react.default.createElement(ListHeading, {
        content: item.value
      });
    }

    if (item.type === "list") {
      return _react.default.createElement(List, {
        items: item.items
      });
    }

    if (item.type === "action") {
      //return <StyledButton {...item.value} />;
      return _react.default.createElement(_reactRouterDom.Link, {
        to: item.linkTo,
        className: classes.createRequestLink
      }, _react.default.createElement(_StyledButton.default, item.value));
    }

    return null;
  })));
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(Category);

exports.default = _default;
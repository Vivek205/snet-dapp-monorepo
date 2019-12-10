"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _StyledButton = _interopRequireDefault(require("../../../StyledButton"));

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

var CategoriesSubComponents = {
  "description": function description(props) {
    return _react.default.createElement(Description, props);
  },
  "subheading": function subheading(props) {
    return _react.default.createElement(Subheading, props);
  },
  "listHeading": function listHeading(props) {
    return _react.default.createElement(ListHeading, props);
  },
  "list": function list(props) {
    return _react.default.createElement(List, props);
  },
  "button": function button(props) {
    return _react.default.createElement(_StyledButton.default, props);
  }
};

var CategoryDetails = function CategoryDetails(_ref5) {
  var classes = _ref5.classes,
      type = _ref5.type,
      value = _ref5.value;
  var CategorySubComponent = CategoriesSubComponents[type];

  if (CategorySubComponent) {
    return _react.default.createElement(CategoriesSubComponents, {
      content: value,
      key: type
    });
  }

  return null;
};

var _default = CategoryDetails;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleMenu = function ToggleMenu(_ref) {
  var isOpen = _ref.isOpen,
      setIsOpen = _ref.setIsOpen,
      classes = _ref.classes;

  if (isOpen) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.toolbar
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      onClick: function onClick() {
        return setIsOpen(false);
      }
    }, /*#__PURE__*/_react.default.createElement(_ChevronLeft.default, {
      className: classes.chevronIcon
    })));
  }

  return /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: function onClick() {
      return setIsOpen(true);
    },
    edge: "start",
    className: (0, _clsx.default)(classes.menuButton)
  }, /*#__PURE__*/_react.default.createElement(_ChevronRight.default, {
    className: classes.chevronIcon
  }));
};

var _default = ToggleMenu;
exports.default = _default;
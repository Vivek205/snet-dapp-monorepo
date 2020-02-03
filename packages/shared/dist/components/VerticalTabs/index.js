"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ToggleMenu = _interopRequireDefault(require("./ToggleMenu"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VerticalTabs = function VerticalTabs(_ref) {
  var _clsx;

  var upperTabs = _ref.upperTabs,
      lowerTabs = _ref.lowerTabs;
  var classes = (0, _styles.useStyles)();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_Drawer.default, {
    variant: "permanent",
    classes: {
      paper: (0, _clsx2.default)((_clsx = {}, _defineProperty(_clsx, classes.drawerOpen, open), _defineProperty(_clsx, classes.drawerClose, !open), _clsx))
    }
  }, _react.default.createElement(_ToggleMenu.default, {
    classes: classes,
    isOpen: open,
    setIsOpen: setOpen
  }), _react.default.createElement(_List.default, {
    className: classes.list
  }, upperTabs.map(function (item) {
    return _react.default.createElement(_ListItem.default, {
      button: true,
      key: item.title,
      className: classes.listItem
    }, _react.default.createElement(_ListItemIcon.default, {
      className: classes.listItemIcon
    }, item.icon), _react.default.createElement(_ListItemText.default, {
      primary: item.title
    }));
  })), _react.default.createElement(_Divider.default, null), _react.default.createElement(_List.default, {
    className: classes.list
  }, lowerTabs.map(function (item) {
    return _react.default.createElement(_ListItem.default, {
      button: true,
      key: item.title,
      className: classes.listItem
    }, _react.default.createElement(_ListItemIcon.default, {
      className: classes.listItemIcon
    }, item.icon), _react.default.createElement(_ListItemText.default, {
      primary: item.title
    }));
  }))));
};

var _default = VerticalTabs;
exports.default = _default;
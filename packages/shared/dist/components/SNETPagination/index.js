"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _materialUiFlatPagination = _interopRequireDefault(require("material-ui-flat-pagination"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SNETPagination = function SNETPagination(_ref) {
  var limit = _ref.limit,
      offset = _ref.offset,
      total_count = _ref.total_count,
      handleChange = _ref.handleChange;

  var _useState = (0, _react.useState)(12),
      _useState2 = _slicedToArray(_useState, 2),
      itemsPerPage = _useState2[0],
      setItemsPerPage = _useState2[1];

  var classes = (0, _styles.useStyles)();

  var handleItemsPerPage = function handleItemsPerPage(event) {
    var pagination = {
      offset: 0,
      limit: event.target.value
    };
    setItemsPerPage(event.target.value);
    handleChange(pagination);
  };

  var handlePageChange = function handlePageChange(selectedOffset) {
    if (selectedOffset === parseFloat(offset)) {
      return;
    }

    var pagination = {
      offset: selectedOffset
    };
    handleChange(pagination);
  };

  var currentFirstItem = offset;
  var currentLastItem = parseFloat(limit) + parseFloat(offset);
  return _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 24,
    className: classes.paginationContainer
  }, _react.default.createElement(_Grid.default, {
    item: true,
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
    className: classes.pagination
  }, _react.default.createElement(_materialUiFlatPagination.default, {
    limit: limit,
    offset: offset,
    total: total_count,
    reduced: true,
    onClick: function onClick(e, offset) {
      return handlePageChange(offset);
    },
    className: classes.styledPagination
  })), _react.default.createElement(_Grid.default, {
    item: true,
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
    className: classes.pageCountSection
  }, _react.default.createElement("span", {
    className: classes.itemPerPageTxt
  }, "Items per page"), _react.default.createElement(_FormControl.default, {
    variant: "outlined",
    className: classes.pageListformControl
  }, _react.default.createElement(_Select.default, {
    value: itemsPerPage,
    input: _react.default.createElement(_OutlinedInput.default, {
      labelWidth: 75,
      name: "age",
      id: "outlined-age-simple",
      onChange: handleItemsPerPage
    }),
    className: classes.selectBox
  }, _react.default.createElement(_MenuItem.default, {
    value: 12
  }, "12"), _react.default.createElement(_MenuItem.default, {
    value: 24
  }, "24"), _react.default.createElement(_MenuItem.default, {
    value: 36
  }, "36"))), _react.default.createElement("span", null, currentFirstItem, "-", currentLastItem, " of ", total_count)));
};

var _default = SNETPagination;
exports.default = _default;
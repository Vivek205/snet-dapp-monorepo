"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledTable = function StyledTable(_ref) {
  var classes = _ref.classes,
      title = _ref.title,
      columns = _ref.columns,
      rows = _ref.rows;
  return _react.default.createElement("div", {
    className: classes.styledTable
  }, _react.default.createElement(_Typography.default, {
    variant: "h5",
    className: classes.styledTableHeader
  }, title), _react.default.createElement("div", {
    className: classes.styledTableContent
  }, _react.default.createElement("div", {
    className: classes.styledTableColumn
  }, columns.map(function (column) {
    return _react.default.createElement(_Typography.default, {
      key: column.key,
      variant: "body2"
    }, column.label);
  })), rows.map(function (row) {
    return _react.default.createElement("div", {
      key: row.key,
      className: row.highlight ? classes.styledTableDataHighlighted : classes.styledTableData
    }, row.values.map(function (value) {
      return _react.default.createElement("div", {
        key: value.label
      }, value.icon && _react.default.createElement(value.icon, {
        className: classes.infoIconContainer
      }), _react.default.createElement(_Typography.default, {
        variant: "body2"
      }, value.label));
    }));
  })));
};

StyledTable.defaultProps = {
  columns: [{}],
  rows: [{
    values: [{}]
  }]
};
StyledTable.propTypes = {
  title: _propTypes.default.string
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(StyledTable);

exports.default = _default;
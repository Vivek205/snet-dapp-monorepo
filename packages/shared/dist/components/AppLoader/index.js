

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppLoader = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppLoader = function AppLoader(_ref) {
  var loading = _ref.loading,
      loaderHeader = _ref.loaderHeader,
      loaderText = _ref.loaderText;
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement(_Modal.default, {
    disableBackdropClick: true,
    open: loading
  }, _react.default.createElement(_Card.default, {
    className: classes.card
  }, _react.default.createElement(_CardHeader.default, {
    title: _react.default.createElement("h2", null, loaderHeader)
  }), _react.default.createElement(_Divider.default, null), _react.default.createElement("div", {
    className: classes.circularProgressContainer
  }, _react.default.createElement(_CircularProgress.default, {
    className: classes.circularProgress
  })), _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, {
    variant: "body2",
    component: "p"
  }, loaderText))));
};

exports.AppLoader = AppLoader;
AppLoader.propTypes = {
  loading: _propTypes.default.bool,
  loaderHeader: _propTypes.default.string,
  loaderText: _propTypes.default.string
};

var mapStateToProps = function mapStateToProps(state) {
  var app = state.loaderReducer.app;
  return _objectSpread({}, app);
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(AppLoader);

exports.default = _default;
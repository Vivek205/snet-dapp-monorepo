"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _StyledButton = _interopRequireDefault(require("shared/dist/components/StyledButton"));

var _pageNotFound = _interopRequireDefault(require("../../assets/images/pageNotFound.png"));

var _AnchorLink = _interopRequireDefault(require("../AnchorLink"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNotFound = function PageNotFound(_ref) {
  var classes = _ref.classes,
      handleGoToHome = _ref.handleGoToHome;
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    className: classes.pageNotFoundContainer
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    className: classes.mediaContentContainer
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.mediaContiner
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _pageNotFound.default,
    title: "Page Not Found",
    alt: "Page not found"
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    className: classes.contentContainer
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h3"
  }, "Page not found!"), /*#__PURE__*/_react.default.createElement(_Typography.default, null, "The page that you are trying to access is moved, currently down or never existed. Please check the URL."), /*#__PURE__*/_react.default.createElement(_StyledButton.default, {
    type: "transparentBlueBorder",
    btnText: "go to home",
    onClick: handleGoToHome
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    className: classes.description
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "If you are seeing this message repeatedly, let us know at ", /*#__PURE__*/_react.default.createElement(_AnchorLink.default, {
    label: "support@singularitynet.io ",
    href: "/"
  }), " and we will look into it.")));
};

PageNotFound.propTypes = {
  handleGoToHome: _propTypes.default.func
};

var _default = (0, _styles.withStyles)(_styles2.useStyles)(PageNotFound);

exports.default = _default;
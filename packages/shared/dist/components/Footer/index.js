"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _PrimaryFooter = _interopRequireDefault(require("./PrimaryFooter"));

var _SecondaryFooter = _interopRequireDefault(require("./SecondaryFooter"));

var _styles = require("./styles");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  var classes = (0, _styles.useStyles)();
  return _react.default.createElement("footer", {
    className: classes.footer
  }, _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 24,
    className: classes.footerWrapper
  }, _react.default.createElement(_PrimaryFooter.default, {
    leftData: _data.FooterData.PrimaryFooterLeft,
    mainData: _data.FooterData.PrimaryFooterMain
  }), _react.default.createElement(_SecondaryFooter.default, {
    data: _data.FooterData.SecondaryFooter
  })));
};

var _default = Footer;
exports.default = _default;
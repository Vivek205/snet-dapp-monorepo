"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavItem = function NavItem(_ref) {
  var title = _ref.title,
      link = _ref.link,
      isActive = _ref.isActive;
  var classes = (0, _styles.useStyles)();
<<<<<<< HEAD

  var isActive = function isActive(unused, _ref2) {
    var pathname = _ref2.pathname;

    switch (link) {
      case "/".concat(_Routes.default.AI_MARKETPLACE):
        {
          if (pathname === "/" || pathname.includes(_Routes.default.AI_MARKETPLACE)) {
            return true;
          }

          return false;
        }

      default:
        {
          return pathname === link;
        }
    }
  };

=======
>>>>>>> 24a8482d6719438eb46217e3347b9a6eb8077314
  return /*#__PURE__*/_react.default.createElement("li", {
    className: classes.navLinks
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: link,
    className: classes.navLinksAnchor,
    activeClassName: classes.activeTab,
    isActive: isActive
  }, title));
};

NavItem.defaultProps = {
  link: "#"
};
NavItem.propTypes = {
  link: _propTypes.default.string,
  isActive: _propTypes.default.func
};
var _default = NavItem;
exports.default = _default;
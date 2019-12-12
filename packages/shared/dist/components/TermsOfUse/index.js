"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _AlertBox = _interopRequireWildcard(require("shared/dist/components/AlertBox"));

var _StyledButton = _interopRequireDefault(require("shared/dist/components/StyledButton"));

var _styles2 = require("./styles");

var _PrivacyTerms = _interopRequireDefault(require("./PrivacyTerms"));

var _actionCreators = require("../../../Redux/actionCreators");

var _Routes = _interopRequireDefault(require("../../../utility/constants/Routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TermsOfUse =
/*#__PURE__*/
function (_Component) {
  _inherits(TermsOfUse, _Component);

  function TermsOfUse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TermsOfUse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TermsOfUse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isTermsAccepted: false,
      alertMessage: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        isTermsAccepted: event.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function _callee() {
      var _this$props, updateUserProfile, history, updatedUserData;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                alertMessage: undefined
              });

              _this$props = _this.props, updateUserProfile = _this$props.updateUserProfile, history = _this$props.history;
              updatedUserData = {
                is_terms_accepted: _this.state.isTermsAccepted,
                email_alerts: false
              };
              _context.prev = 3;
              _context.next = 6;
              return regeneratorRuntime.awrap(updateUserProfile(updatedUserData));

            case 6:
              if (!(history.location.state && history.location.state.sourcePath)) {
                _context.next = 9;
                break;
              }

              history.push(history.location.state.sourcePath);
              return _context.abrupt("return");

            case 9:
              history.push("/".concat(_Routes.default.AI_MARKETPLACE));
              _context.next = 18;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);

              if (!(_context.t0.response && _context.t0.response.data && _context.t0.response.data.error)) {
                _context.next = 17;
                break;
              }

              _this.setState({
                alertMessage: _context.t0.response.data.error
              });

              return _context.abrupt("return");

            case 17:
              _this.setState({
                alertMessage: String(_context.t0)
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 12]]);
    });

    return _this;
  }

  _createClass(TermsOfUse, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          title = _this$props2.title,
          formLabel = _this$props2.formLabel,
          CTAText = _this$props2.CTAText,
          CTAType = _this$props2.CTAType;
      var _this$state = this.state,
          isTermsAccepted = _this$state.isTermsAccepted,
          alertMessage = _this$state.alertMessage;
      return _react.default.createElement("div", {
        className: classes.onboardingContainer
      }, _react.default.createElement("div", {
        className: classes.termsOfUseContainer
      }, _react.default.createElement("h3", null, title), _react.default.createElement("div", {
        className: classes.termsAndConditions
      }, _react.default.createElement(_PrivacyTerms.default, null)), _react.default.createElement("div", {
        className: classes.checkboxAndButton
      }, _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Checkbox.default, {
          checked: isTermsAccepted,
          onChange: this.handleChange,
          color: "primary"
        }),
        label: formLabel
      }), _react.default.createElement(_StyledButton.default, {
        type: CTAType,
        btnText: CTAText,
        disabled: !isTermsAccepted,
        onClick: this.handleSubmit
      })), _react.default.createElement(_AlertBox.default, {
        type: _AlertBox.alertTypes.ERROR,
        message: alertMessage
      })));
    }
  }]);

  return TermsOfUse;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUserProfile: function updateUserProfile(updatedUserData) {
      return dispatch(_actionCreators.userActions.updateUserProfile(updatedUserData));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)((0, _styles.withStyles)(_styles2.useStyles)((0, _reactRouter.withRouter)(TermsOfUse)));

exports.default = _default;
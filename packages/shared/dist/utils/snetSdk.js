"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSDK = void 0;

var _snetSdkWeb = _interopRequireDefault(require("snet-sdk-web"));

var _Blockchain = require("../../../publisher-dapp/src/Utils/Blockchain");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DEFAULT_GAS_LIMIT = undefined;
var DEFAULT_GAS_PRICE = undefined;
var ON_ACCOUNT_CHANGE = "accountsChanged";
var ON_NETWORK_CHANGE = "networkChanged";

var initSDK = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var sdk, web3Provider, updateSDK, hasEth, hasWeb3;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            updateSDK = function updateSDK() {
              var chainIdHex = web3Provider.chainId;
              var networkId = parseInt(chainIdHex);
              var config = {
                networkId: networkId,
                web3Provider: web3Provider,
                defaultGasLimit: DEFAULT_GAS_LIMIT,
                defaultGasPrice: DEFAULT_GAS_PRICE
              };
              sdk = new _snetSdkWeb.default(config);
            };

            hasEth = typeof window.ethereum !== "undefined";
            hasWeb3 = typeof window.web3 !== "undefined";
            _context.prev = 3;

            if (!(hasEth && hasWeb3)) {
              _context.next = 12;
              break;
            }

            web3Provider = window.ethereum;
            _context.next = 8;
            return web3Provider.request({
              method: _Blockchain.ethereumMethods.REQUEST_ACCOUNTS
            });

          case 8:
            // eslint-disable-next-line require-atomic-updates
            web3Provider.addListener(ON_ACCOUNT_CHANGE, function (accounts) {
              var event = new CustomEvent("snetMMAccountChanged", {
                detail: {
                  address: accounts[0]
                }
              });
              window.dispatchEvent(event);
            });
            web3Provider.addListener(ON_NETWORK_CHANGE, function (network) {
              var event = new CustomEvent("snetMMNetworkChanged", {
                detail: {
                  network: network
                }
              });
              window.dispatchEvent(event);
            });
            updateSDK();
            return _context.abrupt("return", sdk);

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            throw _context.t0;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 14]]);
  }));

  return function initSDK() {
    return _ref.apply(this, arguments);
  };
}();

exports.initSDK = initSDK;
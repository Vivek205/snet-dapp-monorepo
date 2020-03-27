"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var initHotjar = function initHotjar(hjid, hjsv) {
  return function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };

    h._hjSettings = {
      hjid: hjid,
      hjsv: hjsv
    };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
};

var _default = initHotjar;
exports.default = _default;
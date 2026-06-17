function s0(u, c) {
  for (var r = 0; r < c.length; r++) {
    const o = c[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const f in o) if (f !== "default" && !(f in u)) {
        const m = Object.getOwnPropertyDescriptor(o, f);
        m && Object.defineProperty(u, f, m.get ? m : { enumerable: true, get: () => o[f] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) o(f);
  new MutationObserver((f) => {
    for (const m of f) if (m.type === "childList") for (const p of m.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && o(p);
  }).observe(document, { childList: true, subtree: true });
  function r(f) {
    const m = {};
    return f.integrity && (m.integrity = f.integrity), f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy), f.crossOrigin === "use-credentials" ? m.credentials = "include" : f.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m;
  }
  function o(f) {
    if (f.ep) return;
    f.ep = true;
    const m = r(f);
    fetch(f.href, m);
  }
})();
function Tv(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var rr = { exports: {} }, Ia = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Gm;
function f0() {
  if (Gm) return Ia;
  Gm = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function r(o, f, m) {
    var p = null;
    if (m !== void 0 && (p = "" + m), f.key !== void 0 && (p = "" + f.key), "key" in f) {
      m = {};
      for (var b in f) b !== "key" && (m[b] = f[b]);
    } else m = f;
    return f = m.ref, { $$typeof: u, type: o, key: p, ref: f !== void 0 ? f : null, props: m };
  }
  return Ia.Fragment = c, Ia.jsx = r, Ia.jsxs = r, Ia;
}
var Xm;
function d0() {
  return Xm || (Xm = 1, rr.exports = f0()), rr.exports;
}
var x = d0(), sr = { exports: {} }, at = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Qm;
function m0() {
  if (Qm) return at;
  Qm = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), p = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), B = Symbol.iterator;
  function X(y) {
    return y === null || typeof y != "object" ? null : (y = B && y[B] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var et = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, U = Object.assign, Q = {};
  function I(y, j, Y) {
    this.props = y, this.context = j, this.refs = Q, this.updater = Y || et;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(y, j) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, j, "setState");
  }, I.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function lt() {
  }
  lt.prototype = I.prototype;
  function nt(y, j, Y) {
    this.props = y, this.context = j, this.refs = Q, this.updater = Y || et;
  }
  var ut = nt.prototype = new lt();
  ut.constructor = nt, U(ut, I.prototype), ut.isPureReactComponent = true;
  var st = Array.isArray;
  function yt() {
  }
  var G = { H: null, A: null, T: null, S: null }, L = Object.prototype.hasOwnProperty;
  function Et(y, j, Y) {
    var Z = Y.ref;
    return { $$typeof: u, type: y, key: j, ref: Z !== void 0 ? Z : null, props: Y };
  }
  function le(y, j) {
    return Et(y.type, j, y.props);
  }
  function Qt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function Rt(y) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(Y) {
      return j[Y];
    });
  }
  var He = /\/+/g;
  function fe(y, j) {
    return typeof y == "object" && y !== null && y.key != null ? Rt("" + y.key) : j.toString(36);
  }
  function Vt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(yt, yt) : (y.status = "pending", y.then(function(j) {
          y.status === "pending" && (y.status = "fulfilled", y.value = j);
        }, function(j) {
          y.status === "pending" && (y.status = "rejected", y.reason = j);
        })), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function C(y, j, Y, Z, W) {
    var $ = typeof y;
    ($ === "undefined" || $ === "boolean") && (y = null);
    var ht = false;
    if (y === null) ht = true;
    else switch ($) {
      case "bigint":
      case "string":
      case "number":
        ht = true;
        break;
      case "object":
        switch (y.$$typeof) {
          case u:
          case c:
            ht = true;
            break;
          case R:
            return ht = y._init, C(ht(y._payload), j, Y, Z, W);
        }
    }
    if (ht) return W = W(y), ht = Z === "" ? "." + fe(y, 0) : Z, st(W) ? (Y = "", ht != null && (Y = ht.replace(He, "$&/") + "/"), C(W, j, Y, "", function(hl) {
      return hl;
    })) : W != null && (Qt(W) && (W = le(W, Y + (W.key == null || y && y.key === W.key ? "" : ("" + W.key).replace(He, "$&/") + "/") + ht)), j.push(W)), 1;
    ht = 0;
    var Zt = Z === "" ? "." : Z + ":";
    if (st(y)) for (var ot = 0; ot < y.length; ot++) Z = y[ot], $ = Zt + fe(Z, ot), ht += C(Z, j, Y, $, W);
    else if (ot = X(y), typeof ot == "function") for (y = ot.call(y), ot = 0; !(Z = y.next()).done; ) Z = Z.value, $ = Zt + fe(Z, ot++), ht += C(Z, j, Y, $, W);
    else if ($ === "object") {
      if (typeof y.then == "function") return C(Vt(y), j, Y, Z, W);
      throw j = String(y), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ht;
  }
  function H(y, j, Y) {
    if (y == null) return y;
    var Z = [], W = 0;
    return C(y, Z, "", "", function($) {
      return j.call(Y, $, W++);
    }), Z;
  }
  function P(y) {
    if (y._status === -1) {
      var j = y._result;
      j = j(), j.then(function(Y) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = Y);
      }, function(Y) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = Y);
      }), y._status === -1 && (y._status = 0, y._result = j);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var bt = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y), error: y });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, q = { map: H, forEach: function(y, j, Y) {
    H(y, function() {
      j.apply(this, arguments);
    }, Y);
  }, count: function(y) {
    var j = 0;
    return H(y, function() {
      j++;
    }), j;
  }, toArray: function(y) {
    return H(y, function(j) {
      return j;
    }) || [];
  }, only: function(y) {
    if (!Qt(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } };
  return at.Activity = O, at.Children = q, at.Component = I, at.Fragment = r, at.Profiler = f, at.PureComponent = nt, at.StrictMode = o, at.Suspense = E, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, at.__COMPILER_RUNTIME = { __proto__: null, c: function(y) {
    return G.H.useMemoCache(y);
  } }, at.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, at.cacheSignal = function() {
    return null;
  }, at.cloneElement = function(y, j, Y) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var Z = U({}, y.props), W = y.key;
    if (j != null) for ($ in j.key !== void 0 && (W = "" + j.key), j) !L.call(j, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && j.ref === void 0 || (Z[$] = j[$]);
    var $ = arguments.length - 2;
    if ($ === 1) Z.children = Y;
    else if (1 < $) {
      for (var ht = Array($), Zt = 0; Zt < $; Zt++) ht[Zt] = arguments[Zt + 2];
      Z.children = ht;
    }
    return Et(y.type, W, Z);
  }, at.createContext = function(y) {
    return y = { $$typeof: p, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null }, y.Provider = y, y.Consumer = { $$typeof: m, _context: y }, y;
  }, at.createElement = function(y, j, Y) {
    var Z, W = {}, $ = null;
    if (j != null) for (Z in j.key !== void 0 && ($ = "" + j.key), j) L.call(j, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (W[Z] = j[Z]);
    var ht = arguments.length - 2;
    if (ht === 1) W.children = Y;
    else if (1 < ht) {
      for (var Zt = Array(ht), ot = 0; ot < ht; ot++) Zt[ot] = arguments[ot + 2];
      W.children = Zt;
    }
    if (y && y.defaultProps) for (Z in ht = y.defaultProps, ht) W[Z] === void 0 && (W[Z] = ht[Z]);
    return Et(y, $, W);
  }, at.createRef = function() {
    return { current: null };
  }, at.forwardRef = function(y) {
    return { $$typeof: b, render: y };
  }, at.isValidElement = Qt, at.lazy = function(y) {
    return { $$typeof: R, _payload: { _status: -1, _result: y }, _init: P };
  }, at.memo = function(y, j) {
    return { $$typeof: v, type: y, compare: j === void 0 ? null : j };
  }, at.startTransition = function(y) {
    var j = G.T, Y = {};
    G.T = Y;
    try {
      var Z = y(), W = G.S;
      W !== null && W(Y, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(yt, bt);
    } catch ($) {
      bt($);
    } finally {
      j !== null && Y.types !== null && (j.types = Y.types), G.T = j;
    }
  }, at.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, at.use = function(y) {
    return G.H.use(y);
  }, at.useActionState = function(y, j, Y) {
    return G.H.useActionState(y, j, Y);
  }, at.useCallback = function(y, j) {
    return G.H.useCallback(y, j);
  }, at.useContext = function(y) {
    return G.H.useContext(y);
  }, at.useDebugValue = function() {
  }, at.useDeferredValue = function(y, j) {
    return G.H.useDeferredValue(y, j);
  }, at.useEffect = function(y, j) {
    return G.H.useEffect(y, j);
  }, at.useEffectEvent = function(y) {
    return G.H.useEffectEvent(y);
  }, at.useId = function() {
    return G.H.useId();
  }, at.useImperativeHandle = function(y, j, Y) {
    return G.H.useImperativeHandle(y, j, Y);
  }, at.useInsertionEffect = function(y, j) {
    return G.H.useInsertionEffect(y, j);
  }, at.useLayoutEffect = function(y, j) {
    return G.H.useLayoutEffect(y, j);
  }, at.useMemo = function(y, j) {
    return G.H.useMemo(y, j);
  }, at.useOptimistic = function(y, j) {
    return G.H.useOptimistic(y, j);
  }, at.useReducer = function(y, j, Y) {
    return G.H.useReducer(y, j, Y);
  }, at.useRef = function(y) {
    return G.H.useRef(y);
  }, at.useState = function(y) {
    return G.H.useState(y);
  }, at.useSyncExternalStore = function(y, j, Y) {
    return G.H.useSyncExternalStore(y, j, Y);
  }, at.useTransition = function() {
    return G.H.useTransition();
  }, at.version = "19.2.4", at;
}
var Vm;
function Mr() {
  return Vm || (Vm = 1, sr.exports = m0()), sr.exports;
}
var A = Mr();
const lu = Tv(A), _v = s0({ __proto__: null, default: lu }, [A]);
var fr = { exports: {} }, Pa = {}, dr = { exports: {} }, mr = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Zm;
function v0() {
  return Zm || (Zm = 1, (function(u) {
    function c(C, H) {
      var P = C.length;
      C.push(H);
      t: for (; 0 < P; ) {
        var bt = P - 1 >>> 1, q = C[bt];
        if (0 < f(q, H)) C[bt] = H, C[P] = q, P = bt;
        else break t;
      }
    }
    function r(C) {
      return C.length === 0 ? null : C[0];
    }
    function o(C) {
      if (C.length === 0) return null;
      var H = C[0], P = C.pop();
      if (P !== H) {
        C[0] = P;
        t: for (var bt = 0, q = C.length, y = q >>> 1; bt < y; ) {
          var j = 2 * (bt + 1) - 1, Y = C[j], Z = j + 1, W = C[Z];
          if (0 > f(Y, P)) Z < q && 0 > f(W, Y) ? (C[bt] = W, C[Z] = P, bt = Z) : (C[bt] = Y, C[j] = P, bt = j);
          else if (Z < q && 0 > f(W, P)) C[bt] = W, C[Z] = P, bt = Z;
          else break t;
        }
      }
      return H;
    }
    function f(C, H) {
      var P = C.sortIndex - H.sortIndex;
      return P !== 0 ? P : C.id - H.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      u.unstable_now = function() {
        return m.now();
      };
    } else {
      var p = Date, b = p.now();
      u.unstable_now = function() {
        return p.now() - b;
      };
    }
    var E = [], v = [], R = 1, O = null, B = 3, X = false, et = false, U = false, Q = false, I = typeof setTimeout == "function" ? setTimeout : null, lt = typeof clearTimeout == "function" ? clearTimeout : null, nt = typeof setImmediate < "u" ? setImmediate : null;
    function ut(C) {
      for (var H = r(v); H !== null; ) {
        if (H.callback === null) o(v);
        else if (H.startTime <= C) o(v), H.sortIndex = H.expirationTime, c(E, H);
        else break;
        H = r(v);
      }
    }
    function st(C) {
      if (U = false, ut(C), !et) if (r(E) !== null) et = true, yt || (yt = true, Rt());
      else {
        var H = r(v);
        H !== null && Vt(st, H.startTime - C);
      }
    }
    var yt = false, G = -1, L = 5, Et = -1;
    function le() {
      return Q ? true : !(u.unstable_now() - Et < L);
    }
    function Qt() {
      if (Q = false, yt) {
        var C = u.unstable_now();
        Et = C;
        var H = true;
        try {
          t: {
            et = false, U && (U = false, lt(G), G = -1), X = true;
            var P = B;
            try {
              e: {
                for (ut(C), O = r(E); O !== null && !(O.expirationTime > C && le()); ) {
                  var bt = O.callback;
                  if (typeof bt == "function") {
                    O.callback = null, B = O.priorityLevel;
                    var q = bt(O.expirationTime <= C);
                    if (C = u.unstable_now(), typeof q == "function") {
                      O.callback = q, ut(C), H = true;
                      break e;
                    }
                    O === r(E) && o(E), ut(C);
                  } else o(E);
                  O = r(E);
                }
                if (O !== null) H = true;
                else {
                  var y = r(v);
                  y !== null && Vt(st, y.startTime - C), H = false;
                }
              }
              break t;
            } finally {
              O = null, B = P, X = false;
            }
            H = void 0;
          }
        } finally {
          H ? Rt() : yt = false;
        }
      }
    }
    var Rt;
    if (typeof nt == "function") Rt = function() {
      nt(Qt);
    };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), fe = He.port2;
      He.port1.onmessage = Qt, Rt = function() {
        fe.postMessage(null);
      };
    } else Rt = function() {
      I(Qt, 0);
    };
    function Vt(C, H) {
      G = I(function() {
        C(u.unstable_now());
      }, H);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, u.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < C ? Math.floor(1e3 / C) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, u.unstable_next = function(C) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = B;
      }
      var P = B;
      B = H;
      try {
        return C();
      } finally {
        B = P;
      }
    }, u.unstable_requestPaint = function() {
      Q = true;
    }, u.unstable_runWithPriority = function(C, H) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var P = B;
      B = C;
      try {
        return H();
      } finally {
        B = P;
      }
    }, u.unstable_scheduleCallback = function(C, H, P) {
      var bt = u.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? bt + P : bt) : P = bt, C) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = P + q, C = { id: R++, callback: H, priorityLevel: C, startTime: P, expirationTime: q, sortIndex: -1 }, P > bt ? (C.sortIndex = P, c(v, C), r(E) === null && C === r(v) && (U ? (lt(G), G = -1) : U = true, Vt(st, P - bt))) : (C.sortIndex = q, c(E, C), et || X || (et = true, yt || (yt = true, Rt()))), C;
    }, u.unstable_shouldYield = le, u.unstable_wrapCallback = function(C) {
      var H = B;
      return function() {
        var P = B;
        B = H;
        try {
          return C.apply(this, arguments);
        } finally {
          B = P;
        }
      };
    };
  })(mr)), mr;
}
var Km;
function h0() {
  return Km || (Km = 1, dr.exports = v0()), dr.exports;
}
var vr = { exports: {} }, ee = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var km;
function g0() {
  if (km) return ee;
  km = 1;
  var u = Mr();
  function c(E) {
    var v = "https://react.dev/errors/" + E;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++) v += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + E + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = { d: { f: r, r: function() {
    throw Error(c(522));
  }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, f = Symbol.for("react.portal");
  function m(E, v, R) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: f, key: O == null ? null : "" + O, children: E, containerInfo: v, implementation: R };
  }
  var p = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(E, v) {
    if (E === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ee.createPortal = function(E, v) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(c(299));
    return m(E, v, null, R);
  }, ee.flushSync = function(E) {
    var v = p.T, R = o.p;
    try {
      if (p.T = null, o.p = 2, E) return E();
    } finally {
      p.T = v, o.p = R, o.d.f();
    }
  }, ee.preconnect = function(E, v) {
    typeof E == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(E, v));
  }, ee.prefetchDNS = function(E) {
    typeof E == "string" && o.d.D(E);
  }, ee.preinit = function(E, v) {
    if (typeof E == "string" && v && typeof v.as == "string") {
      var R = v.as, O = b(R, v.crossOrigin), B = typeof v.integrity == "string" ? v.integrity : void 0, X = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      R === "style" ? o.d.S(E, typeof v.precedence == "string" ? v.precedence : void 0, { crossOrigin: O, integrity: B, fetchPriority: X }) : R === "script" && o.d.X(E, { crossOrigin: O, integrity: B, fetchPriority: X, nonce: typeof v.nonce == "string" ? v.nonce : void 0 });
    }
  }, ee.preinitModule = function(E, v) {
    if (typeof E == "string") if (typeof v == "object" && v !== null) {
      if (v.as == null || v.as === "script") {
        var R = b(v.as, v.crossOrigin);
        o.d.M(E, { crossOrigin: R, integrity: typeof v.integrity == "string" ? v.integrity : void 0, nonce: typeof v.nonce == "string" ? v.nonce : void 0 });
      }
    } else v == null && o.d.M(E);
  }, ee.preload = function(E, v) {
    if (typeof E == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var R = v.as, O = b(R, v.crossOrigin);
      o.d.L(E, R, { crossOrigin: O, integrity: typeof v.integrity == "string" ? v.integrity : void 0, nonce: typeof v.nonce == "string" ? v.nonce : void 0, type: typeof v.type == "string" ? v.type : void 0, fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0, referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0, imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0, imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0, media: typeof v.media == "string" ? v.media : void 0 });
    }
  }, ee.preloadModule = function(E, v) {
    if (typeof E == "string") if (v) {
      var R = b(v.as, v.crossOrigin);
      o.d.m(E, { as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0, crossOrigin: R, integrity: typeof v.integrity == "string" ? v.integrity : void 0 });
    } else o.d.m(E);
  }, ee.requestFormReset = function(E) {
    o.d.r(E);
  }, ee.unstable_batchedUpdates = function(E, v) {
    return E(v);
  }, ee.useFormState = function(E, v, R) {
    return p.H.useFormState(E, v, R);
  }, ee.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, ee.version = "19.2.4", ee;
}
var Jm;
function zv() {
  if (Jm) return vr.exports;
  Jm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
    } catch (c) {
      console.error(c);
    }
  }
  return u(), vr.exports = g0(), vr.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Wm;
function y0() {
  if (Wm) return Pa;
  Wm = 1;
  var u = h0(), c = Mr(), r = zv();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function m(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function b(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function E(t) {
    if (m(t) !== t) throw Error(o(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = m(t), e === null) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return E(a), t;
          if (i === n) return E(a), e;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var s = false, d = a.child; d; ) {
          if (d === l) {
            s = true, l = a, n = i;
            break;
          }
          if (d === n) {
            s = true, n = a, l = i;
            break;
          }
          d = d.sibling;
        }
        if (!s) {
          for (d = i.child; d; ) {
            if (d === l) {
              s = true, l = i, n = a;
              break;
            }
            if (d === n) {
              s = true, n = i, l = a;
              break;
            }
            d = d.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (l.alternate !== n) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? t : e;
  }
  function R(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = R(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var O = Object.assign, B = Symbol.for("react.element"), X = Symbol.for("react.transitional.element"), et = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), lt = Symbol.for("react.consumer"), nt = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), yt = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Et = Symbol.for("react.activity"), le = Symbol.for("react.memo_cache_sentinel"), Qt = Symbol.iterator;
  function Rt(t) {
    return t === null || typeof t != "object" ? null : (t = Qt && t[Qt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var He = Symbol.for("react.client.reference");
  function fe(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === He ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case U:
        return "Fragment";
      case I:
        return "Profiler";
      case Q:
        return "StrictMode";
      case st:
        return "Suspense";
      case yt:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case et:
        return "Portal";
      case nt:
        return t.displayName || "Context";
      case lt:
        return (t._context.displayName || "Context") + ".Consumer";
      case ut:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case G:
        return e = t.displayName || null, e !== null ? e : fe(t.type) || "Memo";
      case L:
        e = t._payload, t = t._init;
        try {
          return fe(t(e));
        } catch {
        }
    }
    return null;
  }
  var Vt = Array.isArray, C = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = { pending: false, data: null, method: null, action: null }, bt = [], q = -1;
  function y(t) {
    return { current: t };
  }
  function j(t) {
    0 > q || (t.current = bt[q], bt[q] = null, q--);
  }
  function Y(t, e) {
    q++, bt[q] = t.current, t.current = e;
  }
  var Z = y(null), W = y(null), $ = y(null), ht = y(null);
  function Zt(t, e) {
    switch (Y($, e), Y(W, t), Y(Z, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = sm(e), t = fm(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    j(Z), Y(Z, t);
  }
  function ot() {
    j(Z), j(W), j($);
  }
  function hl(t) {
    t.memoizedState !== null && Y(ht, t);
    var e = Z.current, l = fm(e, t.type);
    e !== l && (Y(W, t), Y(Z, l));
  }
  function Ve(t) {
    W.current === t && (j(Z), j(W)), ht.current === t && (j(ht), Ja._currentValue = P);
  }
  var gl, hn;
  function xe(t) {
    if (gl === void 0) try {
      throw Error();
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      gl = e && e[1] || "", hn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + gl + t + hn;
  }
  var Zi = false;
  function Ki(t, e) {
    if (!t || Zi) return "";
    Zi = true;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var w = function() {
              throw Error();
            };
            if (Object.defineProperty(w.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(w, []);
              } catch (D) {
                var z = D;
              }
              Reflect.construct(t, [], w);
            } else {
              try {
                w.call();
              } catch (D) {
                z = D;
              }
              t.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (D) {
              z = D;
            }
            (w = t()) && typeof w.catch == "function" && w.catch(function() {
            });
          }
        } catch (D) {
          if (D && z && typeof D.stack == "string") return [D.stack, z.stack];
        }
        return [null, null];
      } };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
      a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var i = n.DetermineComponentFrameRoot(), s = i[0], d = i[1];
      if (s && d) {
        var h = s.split(`
`), _ = d.split(`
`);
        for (a = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); ) n++;
        for (; a < _.length && !_[a].includes("DetermineComponentFrameRoot"); ) a++;
        if (n === h.length || a === _.length) for (n = h.length - 1, a = _.length - 1; 1 <= n && 0 <= a && h[n] !== _[a]; ) a--;
        for (; 1 <= n && 0 <= a; n--, a--) if (h[n] !== _[a]) {
          if (n !== 1 || a !== 1) do
            if (n--, a--, 0 > a || h[n] !== _[a]) {
              var M = `
` + h[n].replace(" at new ", " at ");
              return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), M;
            }
          while (1 <= n && 0 <= a);
          break;
        }
      }
    } finally {
      Zi = false, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? xe(l) : "";
  }
  function Gh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return xe(t.type);
      case 16:
        return xe("Lazy");
      case 13:
        return t.child !== e && e !== null ? xe("Suspense Fallback") : xe("Suspense");
      case 19:
        return xe("SuspenseList");
      case 0:
      case 15:
        return Ki(t.type, false);
      case 11:
        return Ki(t.type.render, false);
      case 1:
        return Ki(t.type, true);
      case 31:
        return xe("Activity");
      default:
        return "";
    }
  }
  function Yr(t) {
    try {
      var e = "", l = null;
      do
        e += Gh(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var ki = Object.prototype.hasOwnProperty, Ji = u.unstable_scheduleCallback, Wi = u.unstable_cancelCallback, Xh = u.unstable_shouldYield, Qh = u.unstable_requestPaint, de = u.unstable_now, Vh = u.unstable_getCurrentPriorityLevel, Gr = u.unstable_ImmediatePriority, Xr = u.unstable_UserBlockingPriority, ou = u.unstable_NormalPriority, Zh = u.unstable_LowPriority, Qr = u.unstable_IdlePriority, Kh = u.log, kh = u.unstable_setDisableYieldValue, ia = null, me = null;
  function yl(t) {
    if (typeof Kh == "function" && kh(t), me && typeof me.setStrictMode == "function") try {
      me.setStrictMode(ia, t);
    } catch {
    }
  }
  var ve = Math.clz32 ? Math.clz32 : Fh, Jh = Math.log, Wh = Math.LN2;
  function Fh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Jh(t) / Wh | 0) | 0;
  }
  var ru = 256, su = 262144, fu = 4194304;
  function Zl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function du(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var d = n & 134217727;
    return d !== 0 ? (n = d & ~i, n !== 0 ? a = Zl(n) : (s &= d, s !== 0 ? a = Zl(s) : l || (l = d & ~t, l !== 0 && (a = Zl(l))))) : (d = n & ~i, d !== 0 ? a = Zl(d) : s !== 0 ? a = Zl(s) : l || (l = n & ~t, l !== 0 && (a = Zl(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function ca(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function $h(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Vr() {
    var t = fu;
    return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), t;
  }
  function Fi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function oa(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Ih(t, e, l, n, a, i) {
    var s = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var d = t.entanglements, h = t.expirationTimes, _ = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var M = 31 - ve(l), w = 1 << M;
      d[M] = 0, h[M] = -1;
      var z = _[M];
      if (z !== null) for (_[M] = null, M = 0; M < z.length; M++) {
        var D = z[M];
        D !== null && (D.lane &= -536870913);
      }
      l &= ~w;
    }
    n !== 0 && Zr(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(s & ~e));
  }
  function Zr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function Kr(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - ve(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function kr(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : $i(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function $i(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ii(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Jr() {
    var t = H.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : jm(t.type));
  }
  function Wr(t, e) {
    var l = H.p;
    try {
      return H.p = t, e();
    } finally {
      H.p = l;
    }
  }
  var bl = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + bl, ae = "__reactProps$" + bl, gn = "__reactContainer$" + bl, Pi = "__reactEvents$" + bl, Ph = "__reactListeners$" + bl, tg = "__reactHandles$" + bl, Fr = "__reactResources$" + bl, ra = "__reactMarker$" + bl;
  function tc(t) {
    delete t[Jt], delete t[ae], delete t[Pi], delete t[Ph], delete t[tg];
  }
  function yn(t) {
    var e = t[Jt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[gn] || l[Jt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = bm(t); t !== null; ) {
          if (l = t[Jt]) return l;
          t = bm(t);
        }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function bn(t) {
    if (t = t[Jt] || t[gn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function sa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function pn(t) {
    var e = t[Fr];
    return e || (e = t[Fr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Kt(t) {
    t[ra] = true;
  }
  var $r = /* @__PURE__ */ new Set(), Ir = {};
  function Kl(t, e) {
    Sn(t, e), Sn(t + "Capture", e);
  }
  function Sn(t, e) {
    for (Ir[t] = e, t = 0; t < e.length; t++) $r.add(e[t]);
  }
  var eg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Pr = {}, ts = {};
  function lg(t) {
    return ki.call(ts, t) ? true : ki.call(Pr, t) ? false : eg.test(t) ? ts[t] = true : (Pr[t] = true, false);
  }
  function mu(t, e, l) {
    if (lg(e)) if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var n = e.toLowerCase().slice(0, 5);
          if (n !== "data-" && n !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + l);
    }
  }
  function vu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ze(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  function Ae(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function es(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function ng(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(t, e, { configurable: true, get: function() {
        return a.call(this);
      }, set: function(s) {
        l = "" + s, i.call(this, s);
      } }), Object.defineProperty(t, e, { enumerable: n.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(s) {
        l = "" + s;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[e];
      } };
    }
  }
  function ec(t) {
    if (!t._valueTracker) {
      var e = es(t) ? "checked" : "value";
      t._valueTracker = ng(t, e, "" + t[e]);
    }
  }
  function ls(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var l = e.getValue(), n = "";
    return t && (n = es(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), true) : false;
  }
  function hu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ag = /[\n"\\]/g;
  function Te(t) {
    return t.replace(ag, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(t, e, l, n, a, i, s, d) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ae(e)) : t.value !== "" + Ae(e) && (t.value = "" + Ae(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? nc(t, s, Ae(e)) : l != null ? nc(t, s, Ae(l)) : n != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.name = "" + Ae(d) : t.removeAttribute("name");
  }
  function ns(t, e, l, n, a, i, s, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        ec(t);
        return;
      }
      l = l != null ? "" + Ae(l) : "", e = e != null ? "" + Ae(e) : l, d || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = d ? t.checked : !!n, t.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s), ec(t);
  }
  function nc(t, e, l) {
    e === "number" && hu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function En(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++) e["$" + l[a]] = true;
      for (l = 0; l < t.length; l++) a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = true);
    } else {
      for (l = "" + Ae(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = true, n && (t[a].defaultSelected = true);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = true);
    }
  }
  function as(t, e, l) {
    if (e != null && (e = "" + Ae(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Ae(l) : "";
  }
  function us(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(o(92));
        if (Vt(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Ae(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), ec(t);
  }
  function xn(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ug = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function is(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || ug.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function cs(t, e, l) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (t = t.style, l != null) {
      for (var n in l) !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e) n = e[a], e.hasOwnProperty(a) && l[a] !== n && is(t, a, n);
    } else for (var i in e) e.hasOwnProperty(i) && is(t, i, e[i]);
  }
  function ac(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ig = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), cg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gu(t) {
    return cg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ke() {
  }
  var uc = null;
  function ic(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var An = null, Tn = null;
  function os(t) {
    var e = bn(t);
    if (e && (t = e.stateNode)) {
      var l = t[ae] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (lc(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + Te("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[ae] || null;
                if (!a) throw Error(o(90));
                lc(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (e = 0; e < l.length; e++) n = l[e], n.form === t.form && ls(n);
          }
          break t;
        case "textarea":
          as(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && En(t, !!l.multiple, e, false);
      }
    }
  }
  var cc = false;
  function rs(t, e, l) {
    if (cc) return t(e, l);
    cc = true;
    try {
      var n = t(e);
      return n;
    } finally {
      if (cc = false, (An !== null || Tn !== null) && (ni(), An && (e = An, t = Tn, Tn = An = null, os(e), t))) for (e = 0; e < t.length; e++) os(t[e]);
    }
  }
  function fa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ae] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(o(231, e, typeof l));
    return l;
  }
  var ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oc = false;
  if (ke) try {
    var da = {};
    Object.defineProperty(da, "passive", { get: function() {
      oc = true;
    } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
  } catch {
    oc = false;
  }
  var pl = null, rc = null, yu = null;
  function ss() {
    if (yu) return yu;
    var t, e = rc, l = e.length, n, a = "value" in pl ? pl.value : pl.textContent, i = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var s = l - t;
    for (n = 1; n <= s && e[l - n] === a[i - n]; n++) ;
    return yu = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function bu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function pu() {
    return true;
  }
  function fs() {
    return false;
  }
  function ue(t) {
    function e(l, n, a, i, s) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var d in t) t.hasOwnProperty(d) && (l = t[d], this[d] = l ? l(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? pu : fs, this.isPropagationStopped = fs, this;
    }
    return O(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = pu);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = pu);
    }, persist: function() {
    }, isPersistent: pu }), e;
  }
  var kl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Su = ue(kl), ma = O({}, kl, { view: 0, detail: 0 }), og = ue(ma), sc, fc, va, Eu = O({}, ma, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mc, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== va && (va && t.type === "mousemove" ? (sc = t.screenX - va.screenX, fc = t.screenY - va.screenY) : fc = sc = 0, va = t), sc);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : fc;
  } }), ds = ue(Eu), rg = O({}, Eu, { dataTransfer: 0 }), sg = ue(rg), fg = O({}, ma, { relatedTarget: 0 }), dc = ue(fg), dg = O({}, kl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mg = ue(dg), vg = O({}, kl, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), hg = ue(vg), gg = O({}, kl, { data: 0 }), ms = ue(gg), yg = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, bg = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, pg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sg(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = pg[t]) ? !!e[t] : false;
  }
  function mc() {
    return Sg;
  }
  var Eg = O({}, ma, { key: function(t) {
    if (t.key) {
      var e = yg[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = bu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bg[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mc, charCode: function(t) {
    return t.type === "keypress" ? bu(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? bu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), xg = ue(Eg), Ag = O({}, Eu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vs = ue(Ag), Tg = O({}, ma, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mc }), _g = ue(Tg), zg = O({}, kl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Og = ue(zg), Dg = O({}, Eu, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Cg = ue(Dg), Mg = O({}, kl, { newState: 0, oldState: 0 }), Ng = ue(Mg), Rg = [9, 13, 27, 32], vc = ke && "CompositionEvent" in window, ha = null;
  ke && "documentMode" in document && (ha = document.documentMode);
  var wg = ke && "TextEvent" in window && !ha, hs = ke && (!vc || ha && 8 < ha && 11 >= ha), gs = " ", ys = false;
  function bs(t, e) {
    switch (t) {
      case "keyup":
        return Rg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function ps(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var _n = false;
  function jg(t, e) {
    switch (t) {
      case "compositionend":
        return ps(e);
      case "keypress":
        return e.which !== 32 ? null : (ys = true, gs);
      case "textInput":
        return t = e.data, t === gs && ys ? null : t;
      default:
        return null;
    }
  }
  function Ug(t, e) {
    if (_n) return t === "compositionend" || !vc && bs(t, e) ? (t = ss(), yu = rc = pl = null, _n = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return hs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Bg = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Ss(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Bg[t.type] : e === "textarea";
  }
  function Es(t, e, l, n) {
    An ? Tn ? Tn.push(n) : Tn = [n] : An = n, e = si(e, "onChange"), 0 < e.length && (l = new Su("onChange", "change", null, l, n), t.push({ event: l, listeners: e }));
  }
  var ga = null, ya = null;
  function Hg(t) {
    am(t, 0);
  }
  function xu(t) {
    var e = sa(t);
    if (ls(e)) return t;
  }
  function xs(t, e) {
    if (t === "change") return e;
  }
  var As = false;
  if (ke) {
    var hc;
    if (ke) {
      var gc = "oninput" in document;
      if (!gc) {
        var Ts = document.createElement("div");
        Ts.setAttribute("oninput", "return;"), gc = typeof Ts.oninput == "function";
      }
      hc = gc;
    } else hc = false;
    As = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function _s() {
    ga && (ga.detachEvent("onpropertychange", zs), ya = ga = null);
  }
  function zs(t) {
    if (t.propertyName === "value" && xu(ya)) {
      var e = [];
      Es(e, ya, t, ic(t)), rs(Hg, e);
    }
  }
  function Lg(t, e, l) {
    t === "focusin" ? (_s(), ga = e, ya = l, ga.attachEvent("onpropertychange", zs)) : t === "focusout" && _s();
  }
  function qg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return xu(ya);
  }
  function Yg(t, e) {
    if (t === "click") return xu(e);
  }
  function Gg(t, e) {
    if (t === "input" || t === "change") return xu(e);
  }
  function Xg(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var he = typeof Object.is == "function" ? Object.is : Xg;
  function ba(t, e) {
    if (he(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return false;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!ki.call(e, a) || !he(t[a], e[a])) return false;
    }
    return true;
  }
  function Os(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ds(t, e) {
    var l = Os(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e) return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Os(l);
    }
  }
  function Cs(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Cs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Ms(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = hu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) t = e.contentWindow;
      else break;
      e = hu(t.document);
    }
    return e;
  }
  function yc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Qg = ke && "documentMode" in document && 11 >= document.documentMode, zn = null, bc = null, pa = null, pc = false;
  function Ns(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pc || zn == null || zn !== hu(n) || (n = zn, "selectionStart" in n && yc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), pa && ba(pa, n) || (pa = n, n = si(bc, "onSelect"), 0 < n.length && (e = new Su("onSelect", "select", null, e, l), t.push({ event: e, listeners: n }), e.target = zn)));
  }
  function Jl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var On = { animationend: Jl("Animation", "AnimationEnd"), animationiteration: Jl("Animation", "AnimationIteration"), animationstart: Jl("Animation", "AnimationStart"), transitionrun: Jl("Transition", "TransitionRun"), transitionstart: Jl("Transition", "TransitionStart"), transitioncancel: Jl("Transition", "TransitionCancel"), transitionend: Jl("Transition", "TransitionEnd") }, Sc = {}, Rs = {};
  ke && (Rs = document.createElement("div").style, "AnimationEvent" in window || (delete On.animationend.animation, delete On.animationiteration.animation, delete On.animationstart.animation), "TransitionEvent" in window || delete On.transitionend.transition);
  function Wl(t) {
    if (Sc[t]) return Sc[t];
    if (!On[t]) return t;
    var e = On[t], l;
    for (l in e) if (e.hasOwnProperty(l) && l in Rs) return Sc[t] = e[l];
    return t;
  }
  var ws = Wl("animationend"), js = Wl("animationiteration"), Us = Wl("animationstart"), Vg = Wl("transitionrun"), Zg = Wl("transitionstart"), Kg = Wl("transitioncancel"), Bs = Wl("transitionend"), Hs = /* @__PURE__ */ new Map(), Ec = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ec.push("scrollEnd");
  function we(t, e) {
    Hs.set(t, e), Kl(e, [t]);
  }
  var Au = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, _e = [], Dn = 0, xc = 0;
  function Tu() {
    for (var t = Dn, e = xc = Dn = 0; e < t; ) {
      var l = _e[e];
      _e[e++] = null;
      var n = _e[e];
      _e[e++] = null;
      var a = _e[e];
      _e[e++] = null;
      var i = _e[e];
      if (_e[e++] = null, n !== null && a !== null) {
        var s = n.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), n.pending = a;
      }
      i !== 0 && Ls(l, a, i);
    }
  }
  function _u(t, e, l, n) {
    _e[Dn++] = t, _e[Dn++] = e, _e[Dn++] = l, _e[Dn++] = n, xc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Ac(t, e, l, n) {
    return _u(t, e, l, n), zu(t);
  }
  function Fl(t, e) {
    return _u(t, null, null, e), zu(t);
  }
  function Ls(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = false, i = t.return; i !== null; ) i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (a = true)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, a && e !== null && (a = 31 - ve(l), t = i.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), i) : null;
  }
  function zu(t) {
    if (50 < Ga) throw Ga = 0, wo = null, Error(o(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Cn = {};
  function kg(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ge(t, e, l, n) {
    return new kg(t, e, l, n);
  }
  function Tc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Je(t, e) {
    var l = t.alternate;
    return l === null ? (l = ge(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function qs(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function Ou(t, e, l, n, a, i) {
    var s = 0;
    if (n = t, typeof t == "function") Tc(t) && (s = 1);
    else if (typeof t == "string") s = Iy(t, l, Z.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case Et:
        return t = ge(31, l, e, a), t.elementType = Et, t.lanes = i, t;
      case U:
        return $l(l.children, a, i, e);
      case Q:
        s = 8, a |= 24;
        break;
      case I:
        return t = ge(12, l, e, a | 2), t.elementType = I, t.lanes = i, t;
      case st:
        return t = ge(13, l, e, a), t.elementType = st, t.lanes = i, t;
      case yt:
        return t = ge(19, l, e, a), t.elementType = yt, t.lanes = i, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case nt:
            s = 10;
            break t;
          case lt:
            s = 9;
            break t;
          case ut:
            s = 11;
            break t;
          case G:
            s = 14;
            break t;
          case L:
            s = 16, n = null;
            break t;
        }
        s = 29, l = Error(o(130, t === null ? "null" : typeof t, "")), n = null;
    }
    return e = ge(s, l, e, a), e.elementType = t, e.type = n, e.lanes = i, e;
  }
  function $l(t, e, l, n) {
    return t = ge(7, t, n, e), t.lanes = l, t;
  }
  function _c(t, e, l) {
    return t = ge(6, t, null, e), t.lanes = l, t;
  }
  function Ys(t) {
    var e = ge(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function zc(t, e, l) {
    return e = ge(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  var Gs = /* @__PURE__ */ new WeakMap();
  function ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Gs.get(t);
      return l !== void 0 ? l : (e = { value: t, source: e, stack: Yr(e) }, Gs.set(t, e), e);
    }
    return { value: t, source: e, stack: Yr(e) };
  }
  var Mn = [], Nn = 0, Du = null, Sa = 0, Oe = [], De = 0, Sl = null, Le = 1, qe = "";
  function We(t, e) {
    Mn[Nn++] = Sa, Mn[Nn++] = Du, Du = t, Sa = e;
  }
  function Xs(t, e, l) {
    Oe[De++] = Le, Oe[De++] = qe, Oe[De++] = Sl, Sl = t;
    var n = Le;
    t = qe;
    var a = 32 - ve(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - ve(e) + a;
    if (30 < i) {
      var s = a - a % 5;
      i = (n & (1 << s) - 1).toString(32), n >>= s, a -= s, Le = 1 << 32 - ve(e) + a | l << a | n, qe = i + t;
    } else Le = 1 << i | l << a | n, qe = t;
  }
  function Oc(t) {
    t.return !== null && (We(t, 1), Xs(t, 1, 0));
  }
  function Dc(t) {
    for (; t === Du; ) Du = Mn[--Nn], Mn[Nn] = null, Sa = Mn[--Nn], Mn[Nn] = null;
    for (; t === Sl; ) Sl = Oe[--De], Oe[De] = null, qe = Oe[--De], Oe[De] = null, Le = Oe[--De], Oe[De] = null;
  }
  function Qs(t, e) {
    Oe[De++] = Le, Oe[De++] = qe, Oe[De++] = Sl, Le = e.id, qe = e.overflow, Sl = t;
  }
  var Wt = null, Ct = null, gt = false, El = null, Ce = false, Cc = Error(o(519));
  function xl(t) {
    var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Ea(ze(e, t)), Cc;
  }
  function Vs(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Jt] = t, e[ae] = n, l) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Qa.length; l++) dt(Qa[l], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e), ns(e, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, true);
        break;
      case "select":
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), us(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === true || om(e.textContent, l) ? (n.popover != null && (dt("beforetoggle", e), dt("toggle", e)), n.onScroll != null && dt("scroll", e), n.onScrollEnd != null && dt("scrollend", e), n.onClick != null && (e.onclick = Ke), e = true) : e = false, e || xl(t, true);
  }
  function Zs(t) {
    for (Wt = t.return; Wt; ) switch (Wt.tag) {
      case 5:
      case 31:
      case 13:
        Ce = false;
        return;
      case 27:
      case 3:
        Ce = true;
        return;
      default:
        Wt = Wt.return;
    }
  }
  function Rn(t) {
    if (t !== Wt) return false;
    if (!gt) return Zs(t), gt = true, false;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Jo(t.type, t.memoizedProps)), l = !l), l && Ct && xl(t), Zs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ct = ym(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ct = ym(t);
    } else e === 27 ? (e = Ct, Bl(t.type) ? (t = Po, Po = null, Ct = t) : Ct = e) : Ct = Wt ? Ne(t.stateNode.nextSibling) : null;
    return true;
  }
  function Il() {
    Ct = Wt = null, gt = false;
  }
  function Mc() {
    var t = El;
    return t !== null && (re === null ? re = t : re.push.apply(re, t), El = null), t;
  }
  function Ea(t) {
    El === null ? El = [t] : El.push(t);
  }
  var Nc = y(null), Pl = null, Fe = null;
  function Al(t, e, l) {
    Y(Nc, e._currentValue), e._currentValue = l;
  }
  function $e(t) {
    t._currentValue = Nc.current, j(Nc);
  }
  function Rc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function wc(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var s = a.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var d = i;
          i = a;
          for (var h = 0; h < e.length; h++) if (d.context === e[h]) {
            i.lanes |= l, d = i.alternate, d !== null && (d.lanes |= l), Rc(i.return, l, t), n || (s = null);
            break t;
          }
          i = d.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(o(341));
        s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), Rc(s, l, t), s = null;
      } else s = a.child;
      if (s !== null) s.return = a;
      else for (s = a; s !== null; ) {
        if (s === t) {
          s = null;
          break;
        }
        if (a = s.sibling, a !== null) {
          a.return = s.return, s = a;
          break;
        }
        s = s.return;
      }
      a = s;
    }
  }
  function wn(t, e, l, n) {
    t = null;
    for (var a = e, i = false; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = true;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(o(387));
        if (s = s.memoizedProps, s !== null) {
          var d = a.type;
          he(a.pendingProps.value, s.value) || (t !== null ? t.push(d) : t = [d]);
        }
      } else if (a === ht.current) {
        if (s = a.alternate, s === null) throw Error(o(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(Ja) : t = [Ja]);
      }
      a = a.return;
    }
    t !== null && wc(e, t, l, n), e.flags |= 262144;
  }
  function Cu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!he(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function tn(t) {
    Pl = t, Fe = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ft(t) {
    return Ks(Pl, t);
  }
  function Mu(t, e) {
    return Pl === null && tn(t), Ks(t, e);
  }
  function Ks(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Fe === null) {
      if (t === null) throw Error(o(308));
      Fe = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Fe = Fe.next = e;
    return l;
  }
  var Jg = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(l, n) {
      t.push(n);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(l) {
        return l();
      });
    };
  }, Wg = u.unstable_scheduleCallback, Fg = u.unstable_NormalPriority, Ht = { $$typeof: nt, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function jc() {
    return { controller: new Jg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function xa(t) {
    t.refCount--, t.refCount === 0 && Wg(Fg, function() {
      t.controller.abort();
    });
  }
  var Aa = null, Uc = 0, jn = 0, Un = null;
  function $g(t, e) {
    if (Aa === null) {
      var l = Aa = [];
      Uc = 0, jn = qo(), Un = { status: "pending", value: void 0, then: function(n) {
        l.push(n);
      } };
    }
    return Uc++, e.then(ks, ks), e;
  }
  function ks() {
    if (--Uc === 0 && Aa !== null) {
      Un !== null && (Un.status = "fulfilled");
      var t = Aa;
      Aa = null, jn = 0, Un = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Ig(t, e) {
    var l = [], n = { status: "pending", value: null, reason: null, then: function(a) {
      l.push(a);
    } };
    return t.then(function() {
      n.status = "fulfilled", n.value = e;
      for (var a = 0; a < l.length; a++) (0, l[a])(e);
    }, function(a) {
      for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++) (0, l[a])(void 0);
    }), n;
  }
  var Js = C.S;
  C.S = function(t, e) {
    Rd = de(), typeof e == "object" && e !== null && typeof e.then == "function" && $g(t, e), Js !== null && Js(t, e);
  };
  var en = y(null);
  function Bc() {
    var t = en.current;
    return t !== null ? t : Dt.pooledCache;
  }
  function Nu(t, e) {
    e === null ? Y(en, en.current) : Y(en, e.pool);
  }
  function Ws() {
    var t = Bc();
    return t === null ? null : { parent: Ht._currentValue, pool: t };
  }
  var Bn = Error(o(460)), Hc = Error(o(474)), Ru = Error(o(542)), wu = { then: function() {
  } };
  function Fs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function $s(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ke, Ke), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ps(t), t;
      default:
        if (typeof e.status == "string") e.then(Ke, Ke);
        else {
          if (t = Dt, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482));
          t = e, t.status = "pending", t.then(function(n) {
            if (e.status === "pending") {
              var a = e;
              a.status = "fulfilled", a.value = n;
            }
          }, function(n) {
            if (e.status === "pending") {
              var a = e;
              a.status = "rejected", a.reason = n;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Ps(t), t;
        }
        throw nn = e, Bn;
    }
  }
  function ln(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (nn = l, Bn) : l;
    }
  }
  var nn = null;
  function Is() {
    if (nn === null) throw Error(o(459));
    var t = nn;
    return nn = null, t;
  }
  function Ps(t) {
    if (t === Bn || t === Ru) throw Error(o(483));
  }
  var Hn = null, Ta = 0;
  function ju(t) {
    var e = Ta;
    return Ta += 1, Hn === null && (Hn = []), $s(Hn, t, e);
  }
  function _a(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Uu(t, e) {
    throw e.$$typeof === B ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function tf(t) {
    function e(S, g) {
      if (t) {
        var T = S.deletions;
        T === null ? (S.deletions = [g], S.flags |= 16) : T.push(g);
      }
    }
    function l(S, g) {
      if (!t) return null;
      for (; g !== null; ) e(S, g), g = g.sibling;
      return null;
    }
    function n(S) {
      for (var g = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? g.set(S.key, S) : g.set(S.index, S), S = S.sibling;
      return g;
    }
    function a(S, g) {
      return S = Je(S, g), S.index = 0, S.sibling = null, S;
    }
    function i(S, g, T) {
      return S.index = T, t ? (T = S.alternate, T !== null ? (T = T.index, T < g ? (S.flags |= 67108866, g) : T) : (S.flags |= 67108866, g)) : (S.flags |= 1048576, g);
    }
    function s(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function d(S, g, T, N) {
      return g === null || g.tag !== 6 ? (g = _c(T, S.mode, N), g.return = S, g) : (g = a(g, T), g.return = S, g);
    }
    function h(S, g, T, N) {
      var F = T.type;
      return F === U ? M(S, g, T.props.children, N, T.key) : g !== null && (g.elementType === F || typeof F == "object" && F !== null && F.$$typeof === L && ln(F) === g.type) ? (g = a(g, T.props), _a(g, T), g.return = S, g) : (g = Ou(T.type, T.key, T.props, null, S.mode, N), _a(g, T), g.return = S, g);
    }
    function _(S, g, T, N) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== T.containerInfo || g.stateNode.implementation !== T.implementation ? (g = zc(T, S.mode, N), g.return = S, g) : (g = a(g, T.children || []), g.return = S, g);
    }
    function M(S, g, T, N, F) {
      return g === null || g.tag !== 7 ? (g = $l(T, S.mode, N, F), g.return = S, g) : (g = a(g, T), g.return = S, g);
    }
    function w(S, g, T) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return g = _c("" + g, S.mode, T), g.return = S, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case X:
            return T = Ou(g.type, g.key, g.props, null, S.mode, T), _a(T, g), T.return = S, T;
          case et:
            return g = zc(g, S.mode, T), g.return = S, g;
          case L:
            return g = ln(g), w(S, g, T);
        }
        if (Vt(g) || Rt(g)) return g = $l(g, S.mode, T, null), g.return = S, g;
        if (typeof g.then == "function") return w(S, ju(g), T);
        if (g.$$typeof === nt) return w(S, Mu(S, g), T);
        Uu(S, g);
      }
      return null;
    }
    function z(S, g, T, N) {
      var F = g !== null ? g.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return F !== null ? null : d(S, g, "" + T, N);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case X:
            return T.key === F ? h(S, g, T, N) : null;
          case et:
            return T.key === F ? _(S, g, T, N) : null;
          case L:
            return T = ln(T), z(S, g, T, N);
        }
        if (Vt(T) || Rt(T)) return F !== null ? null : M(S, g, T, N, null);
        if (typeof T.then == "function") return z(S, g, ju(T), N);
        if (T.$$typeof === nt) return z(S, g, Mu(S, T), N);
        Uu(S, T);
      }
      return null;
    }
    function D(S, g, T, N, F) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return S = S.get(T) || null, d(g, S, "" + N, F);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case X:
            return S = S.get(N.key === null ? T : N.key) || null, h(g, S, N, F);
          case et:
            return S = S.get(N.key === null ? T : N.key) || null, _(g, S, N, F);
          case L:
            return N = ln(N), D(S, g, T, N, F);
        }
        if (Vt(N) || Rt(N)) return S = S.get(T) || null, M(g, S, N, F, null);
        if (typeof N.then == "function") return D(S, g, T, ju(N), F);
        if (N.$$typeof === nt) return D(S, g, T, Mu(g, N), F);
        Uu(g, N);
      }
      return null;
    }
    function k(S, g, T, N) {
      for (var F = null, pt = null, J = g, ct = g = 0, vt = null; J !== null && ct < T.length; ct++) {
        J.index > ct ? (vt = J, J = null) : vt = J.sibling;
        var St = z(S, J, T[ct], N);
        if (St === null) {
          J === null && (J = vt);
          break;
        }
        t && J && St.alternate === null && e(S, J), g = i(St, g, ct), pt === null ? F = St : pt.sibling = St, pt = St, J = vt;
      }
      if (ct === T.length) return l(S, J), gt && We(S, ct), F;
      if (J === null) {
        for (; ct < T.length; ct++) J = w(S, T[ct], N), J !== null && (g = i(J, g, ct), pt === null ? F = J : pt.sibling = J, pt = J);
        return gt && We(S, ct), F;
      }
      for (J = n(J); ct < T.length; ct++) vt = D(J, S, ct, T[ct], N), vt !== null && (t && vt.alternate !== null && J.delete(vt.key === null ? ct : vt.key), g = i(vt, g, ct), pt === null ? F = vt : pt.sibling = vt, pt = vt);
      return t && J.forEach(function(Gl) {
        return e(S, Gl);
      }), gt && We(S, ct), F;
    }
    function tt(S, g, T, N) {
      if (T == null) throw Error(o(151));
      for (var F = null, pt = null, J = g, ct = g = 0, vt = null, St = T.next(); J !== null && !St.done; ct++, St = T.next()) {
        J.index > ct ? (vt = J, J = null) : vt = J.sibling;
        var Gl = z(S, J, St.value, N);
        if (Gl === null) {
          J === null && (J = vt);
          break;
        }
        t && J && Gl.alternate === null && e(S, J), g = i(Gl, g, ct), pt === null ? F = Gl : pt.sibling = Gl, pt = Gl, J = vt;
      }
      if (St.done) return l(S, J), gt && We(S, ct), F;
      if (J === null) {
        for (; !St.done; ct++, St = T.next()) St = w(S, St.value, N), St !== null && (g = i(St, g, ct), pt === null ? F = St : pt.sibling = St, pt = St);
        return gt && We(S, ct), F;
      }
      for (J = n(J); !St.done; ct++, St = T.next()) St = D(J, S, ct, St.value, N), St !== null && (t && St.alternate !== null && J.delete(St.key === null ? ct : St.key), g = i(St, g, ct), pt === null ? F = St : pt.sibling = St, pt = St);
      return t && J.forEach(function(r0) {
        return e(S, r0);
      }), gt && We(S, ct), F;
    }
    function Ot(S, g, T, N) {
      if (typeof T == "object" && T !== null && T.type === U && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case X:
            t: {
              for (var F = T.key; g !== null; ) {
                if (g.key === F) {
                  if (F = T.type, F === U) {
                    if (g.tag === 7) {
                      l(S, g.sibling), N = a(g, T.props.children), N.return = S, S = N;
                      break t;
                    }
                  } else if (g.elementType === F || typeof F == "object" && F !== null && F.$$typeof === L && ln(F) === g.type) {
                    l(S, g.sibling), N = a(g, T.props), _a(N, T), N.return = S, S = N;
                    break t;
                  }
                  l(S, g);
                  break;
                } else e(S, g);
                g = g.sibling;
              }
              T.type === U ? (N = $l(T.props.children, S.mode, N, T.key), N.return = S, S = N) : (N = Ou(T.type, T.key, T.props, null, S.mode, N), _a(N, T), N.return = S, S = N);
            }
            return s(S);
          case et:
            t: {
              for (F = T.key; g !== null; ) {
                if (g.key === F) if (g.tag === 4 && g.stateNode.containerInfo === T.containerInfo && g.stateNode.implementation === T.implementation) {
                  l(S, g.sibling), N = a(g, T.children || []), N.return = S, S = N;
                  break t;
                } else {
                  l(S, g);
                  break;
                }
                else e(S, g);
                g = g.sibling;
              }
              N = zc(T, S.mode, N), N.return = S, S = N;
            }
            return s(S);
          case L:
            return T = ln(T), Ot(S, g, T, N);
        }
        if (Vt(T)) return k(S, g, T, N);
        if (Rt(T)) {
          if (F = Rt(T), typeof F != "function") throw Error(o(150));
          return T = F.call(T), tt(S, g, T, N);
        }
        if (typeof T.then == "function") return Ot(S, g, ju(T), N);
        if (T.$$typeof === nt) return Ot(S, g, Mu(S, T), N);
        Uu(S, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, g !== null && g.tag === 6 ? (l(S, g.sibling), N = a(g, T), N.return = S, S = N) : (l(S, g), N = _c(T, S.mode, N), N.return = S, S = N), s(S)) : l(S, g);
    }
    return function(S, g, T, N) {
      try {
        Ta = 0;
        var F = Ot(S, g, T, N);
        return Hn = null, F;
      } catch (J) {
        if (J === Bn || J === Ru) throw J;
        var pt = ge(29, J, null, S.mode);
        return pt.lanes = N, pt.return = S, pt;
      } finally {
      }
    };
  }
  var an = tf(true), ef = tf(false), Tl = false;
  function Lc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function qc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function _l(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function zl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (xt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = zu(t), Ls(t, null, l), e;
    }
    return _u(t, n, e, l), zu(t);
  }
  function za(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Kr(t, l);
    }
  }
  function Yc(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          i === null ? a = i = s : i = i.next = s, l = l.next;
        } while (l !== null);
        i === null ? a = i = e : i = i.next = e;
      } else a = i = e;
      l = { baseState: n.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: n.shared, callbacks: n.callbacks }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Gc = false;
  function Oa() {
    if (Gc) {
      var t = Un;
      if (t !== null) throw t;
    }
  }
  function Da(t, e, l, n) {
    Gc = false;
    var a = t.updateQueue;
    Tl = false;
    var i = a.firstBaseUpdate, s = a.lastBaseUpdate, d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var h = d, _ = h.next;
      h.next = null, s === null ? i = _ : s.next = _, s = h;
      var M = t.alternate;
      M !== null && (M = M.updateQueue, d = M.lastBaseUpdate, d !== s && (d === null ? M.firstBaseUpdate = _ : d.next = _, M.lastBaseUpdate = h));
    }
    if (i !== null) {
      var w = a.baseState;
      s = 0, M = _ = h = null, d = i;
      do {
        var z = d.lane & -536870913, D = z !== d.lane;
        if (D ? (mt & z) === z : (n & z) === z) {
          z !== 0 && z === jn && (Gc = true), M !== null && (M = M.next = { lane: 0, tag: d.tag, payload: d.payload, callback: null, next: null });
          t: {
            var k = t, tt = d;
            z = e;
            var Ot = l;
            switch (tt.tag) {
              case 1:
                if (k = tt.payload, typeof k == "function") {
                  w = k.call(Ot, w, z);
                  break t;
                }
                w = k;
                break t;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = tt.payload, z = typeof k == "function" ? k.call(Ot, w, z) : k, z == null) break t;
                w = O({}, w, z);
                break t;
              case 2:
                Tl = true;
            }
          }
          z = d.callback, z !== null && (t.flags |= 64, D && (t.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [z] : D.push(z));
        } else D = { lane: z, tag: d.tag, payload: d.payload, callback: d.callback, next: null }, M === null ? (_ = M = D, h = w) : M = M.next = D, s |= z;
        if (d = d.next, d === null) {
          if (d = a.shared.pending, d === null) break;
          D = d, d = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
        }
      } while (true);
      M === null && (h = w), a.baseState = h, a.firstBaseUpdate = _, a.lastBaseUpdate = M, i === null && (a.shared.lanes = 0), Nl |= s, t.lanes = s, t.memoizedState = w;
    }
  }
  function lf(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function nf(t, e) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) lf(l[t], e);
  }
  var Ln = y(null), Bu = y(0);
  function af(t, e) {
    t = il, Y(Bu, t), Y(Ln, e), il = t | e.baseLanes;
  }
  function Xc() {
    Y(Bu, il), Y(Ln, Ln.current);
  }
  function Qc() {
    il = Bu.current, j(Ln), j(Bu);
  }
  var ye = y(null), Me = null;
  function Ol(t) {
    var e = t.alternate;
    Y(Ut, Ut.current & 1), Y(ye, t), Me === null && (e === null || Ln.current !== null || e.memoizedState !== null) && (Me = t);
  }
  function Vc(t) {
    Y(Ut, Ut.current), Y(ye, t), Me === null && (Me = t);
  }
  function uf(t) {
    t.tag === 22 ? (Y(Ut, Ut.current), Y(ye, t), Me === null && (Me = t)) : Dl();
  }
  function Dl() {
    Y(Ut, Ut.current), Y(ye, ye.current);
  }
  function be(t) {
    j(ye), Me === t && (Me = null), j(Ut);
  }
  var Ut = y(0);
  function Hu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || $o(l) || Io(l))) return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Ie = 0, it = null, _t = null, Lt = null, Lu = false, qn = false, un = false, qu = 0, Ca = 0, Yn = null, Pg = 0;
  function wt() {
    throw Error(o(321));
  }
  function Zc(t, e) {
    if (e === null) return false;
    for (var l = 0; l < e.length && l < t.length; l++) if (!he(t[l], e[l])) return false;
    return true;
  }
  function Kc(t, e, l, n, a, i) {
    return Ie = i, it = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? Qf : co, un = false, i = l(n, a), un = false, qn && (i = of(e, l, n, a)), cf(t), i;
  }
  function cf(t) {
    C.H = Ra;
    var e = _t !== null && _t.next !== null;
    if (Ie = 0, Lt = _t = it = null, Lu = false, Ca = 0, Yn = null, e) throw Error(o(300));
    t === null || qt || (t = t.dependencies, t !== null && Cu(t) && (qt = true));
  }
  function of(t, e, l, n) {
    it = t;
    var a = 0;
    do {
      if (qn && (Yn = null), Ca = 0, qn = false, 25 <= a) throw Error(o(301));
      if (a += 1, Lt = _t = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      C.H = Vf, i = e(l, n);
    } while (qn);
    return i;
  }
  function ty() {
    var t = C.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ma(e) : e, t = t.useState()[0], (_t !== null ? _t.memoizedState : null) !== t && (it.flags |= 1024), e;
  }
  function kc() {
    var t = qu !== 0;
    return qu = 0, t;
  }
  function Jc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Wc(t) {
    if (Lu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Lu = false;
    }
    Ie = 0, Lt = _t = it = null, qn = false, Ca = qu = 0, Yn = null;
  }
  function ne() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Lt === null ? it.memoizedState = Lt = t : Lt = Lt.next = t, Lt;
  }
  function Bt() {
    if (_t === null) {
      var t = it.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = _t.next;
    var e = Lt === null ? it.memoizedState : Lt.next;
    if (e !== null) Lt = e, _t = t;
    else {
      if (t === null) throw it.alternate === null ? Error(o(467)) : Error(o(310));
      _t = t, t = { memoizedState: _t.memoizedState, baseState: _t.baseState, baseQueue: _t.baseQueue, queue: _t.queue, next: null }, Lt === null ? it.memoizedState = Lt = t : Lt = Lt.next = t;
    }
    return Lt;
  }
  function Yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ma(t) {
    var e = Ca;
    return Ca += 1, Yn === null && (Yn = []), t = $s(Yn, t, e), e = it, (Lt === null ? e.memoizedState : Lt.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? Qf : co), t;
  }
  function Gu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ma(t);
      if (t.$$typeof === nt) return Ft(t);
    }
    throw Error(o(438, String(t)));
  }
  function Fc(t) {
    var e = null, l = it.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = it.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = { data: n.data.map(function(a) {
        return a.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Yu(), it.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = le;
    return e.index++, l;
  }
  function Pe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Xu(t) {
    var e = Bt();
    return $c(e, _t, t);
  }
  function $c(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = i.next, i.next = s;
      }
      e.baseQueue = a = i, n.pending = null;
    }
    if (i = t.baseState, a === null) t.memoizedState = i;
    else {
      e = a.next;
      var d = s = null, h = null, _ = e, M = false;
      do {
        var w = _.lane & -536870913;
        if (w !== _.lane ? (mt & w) === w : (Ie & w) === w) {
          var z = _.revertLane;
          if (z === 0) h !== null && (h = h.next = { lane: 0, revertLane: 0, gesture: null, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), w === jn && (M = true);
          else if ((Ie & z) === z) {
            _ = _.next, z === jn && (M = true);
            continue;
          } else w = { lane: 0, revertLane: _.revertLane, gesture: null, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }, h === null ? (d = h = w, s = i) : h = h.next = w, it.lanes |= z, Nl |= z;
          w = _.action, un && l(i, w), i = _.hasEagerState ? _.eagerState : l(i, w);
        } else z = { lane: w, revertLane: _.revertLane, gesture: _.gesture, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }, h === null ? (d = h = z, s = i) : h = h.next = z, it.lanes |= w, Nl |= w;
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (h === null ? s = i : h.next = d, !he(i, t.memoizedState) && (qt = true, M && (l = Un, l !== null))) throw l;
      t.memoizedState = i, t.baseState = s, t.baseQueue = h, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Ic(t) {
    var e = Bt(), l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var s = a = a.next;
      do
        i = t(i, s.action), s = s.next;
      while (s !== a);
      he(i, e.memoizedState) || (qt = true), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function rf(t, e, l) {
    var n = it, a = Bt(), i = gt;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = e();
    var s = !he((_t || a).memoizedState, l);
    if (s && (a.memoizedState = l, qt = true), a = a.queue, eo(df.bind(null, n, a, t), [t]), a.getSnapshot !== e || s || Lt !== null && Lt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Gn(9, { destroy: void 0 }, ff.bind(null, n, a, l, e), null), Dt === null) throw Error(o(349));
      i || (Ie & 127) !== 0 || sf(n, e, l);
    }
    return l;
  }
  function sf(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = it.updateQueue, e === null ? (e = Yu(), it.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function ff(t, e, l, n) {
    e.value = l, e.getSnapshot = n, mf(e) && vf(t);
  }
  function df(t, e, l) {
    return l(function() {
      mf(e) && vf(t);
    });
  }
  function mf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !he(t, l);
    } catch {
      return true;
    }
  }
  function vf(t) {
    var e = Fl(t, 2);
    e !== null && se(e, t, 2);
  }
  function Pc(t) {
    var e = ne();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), un) {
        yl(true);
        try {
          l();
        } finally {
          yl(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pe, lastRenderedState: t }, e;
  }
  function hf(t, e, l, n) {
    return t.baseState = l, $c(t, _t, typeof n == "function" ? n : Pe);
  }
  function ey(t, e, l, n, a) {
    if (Zu(t)) throw Error(o(485));
    if (t = e.action, t !== null) {
      var i = { payload: a, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(s) {
        i.listeners.push(s);
      } };
      C.T !== null ? l(true) : i.isTransition = false, n(i), l = e.pending, l === null ? (i.next = e.pending = i, gf(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function gf(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var i = C.T, s = {};
      C.T = s;
      try {
        var d = l(a, n), h = C.S;
        h !== null && h(s, d), yf(t, e, d);
      } catch (_) {
        to(t, e, _);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), C.T = i;
      }
    } else try {
      i = l(a, n), yf(t, e, i);
    } catch (_) {
      to(t, e, _);
    }
  }
  function yf(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
      bf(t, e, n);
    }, function(n) {
      return to(t, e, n);
    }) : bf(t, e, l);
  }
  function bf(t, e, l) {
    e.status = "fulfilled", e.value = l, pf(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, gf(t, l)));
  }
  function to(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, pf(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function pf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Sf(t, e) {
    return e;
  }
  function Ef(t, e) {
    if (gt) {
      var l = Dt.formState;
      if (l !== null) {
        t: {
          var n = it;
          if (gt) {
            if (Ct) {
              e: {
                for (var a = Ct, i = Ce; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break e;
                  }
                  if (a = Ne(a.nextSibling), a === null) {
                    a = null;
                    break e;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Ct = Ne(a.nextSibling), n = a.data === "F!";
                break t;
              }
            }
            xl(n);
          }
          n = false;
        }
        n && (e = l[0]);
      }
    }
    return l = ne(), l.memoizedState = l.baseState = e, n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Sf, lastRenderedState: e }, l.queue = n, l = Yf.bind(null, it, n), n.dispatch = l, n = Pc(false), i = io.bind(null, it, false, n.queue), n = ne(), a = { state: e, dispatch: null, action: t, pending: null }, n.queue = a, l = ey.bind(null, it, a, i, l), a.dispatch = l, n.memoizedState = t, [e, l, false];
  }
  function xf(t) {
    var e = Bt();
    return Af(e, _t, t);
  }
  function Af(t, e, l) {
    if (e = $c(t, e, Sf)[0], t = Xu(Pe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var n = Ma(e);
    } catch (s) {
      throw s === Bn ? Ru : s;
    }
    else n = e;
    e = Bt();
    var a = e.queue, i = a.dispatch;
    return l !== e.memoizedState && (it.flags |= 2048, Gn(9, { destroy: void 0 }, ly.bind(null, a, l), null)), [n, i, t];
  }
  function ly(t, e) {
    t.action = e;
  }
  function Tf(t) {
    var e = Bt(), l = _t;
    if (l !== null) return Af(e, l, t);
    Bt(), e = e.memoizedState, l = Bt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, false];
  }
  function Gn(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = it.updateQueue, e === null && (e = Yu(), it.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function _f() {
    return Bt().memoizedState;
  }
  function Qu(t, e, l, n) {
    var a = ne();
    it.flags |= t, a.memoizedState = Gn(1 | e, { destroy: void 0 }, l, n === void 0 ? null : n);
  }
  function Vu(t, e, l, n) {
    var a = Bt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    _t !== null && n !== null && Zc(n, _t.memoizedState.deps) ? a.memoizedState = Gn(e, i, l, n) : (it.flags |= t, a.memoizedState = Gn(1 | e, i, l, n));
  }
  function zf(t, e) {
    Qu(8390656, 8, t, e);
  }
  function eo(t, e) {
    Vu(2048, 8, t, e);
  }
  function ny(t) {
    it.flags |= 4;
    var e = it.updateQueue;
    if (e === null) e = Yu(), it.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Of(t) {
    var e = Bt().memoizedState;
    return ny({ ref: e, nextImpl: t }), function() {
      if ((xt & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Df(t, e) {
    return Vu(4, 2, t, e);
  }
  function Cf(t, e) {
    return Vu(4, 4, t, e);
  }
  function Mf(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function Nf(t, e, l) {
    l = l != null ? l.concat([t]) : null, Vu(4, 4, Mf.bind(null, e, t), l);
  }
  function lo() {
  }
  function Rf(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Zc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function wf(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Zc(e, n[1])) return n[0];
    if (n = t(), un) {
      yl(true);
      try {
        t();
      } finally {
        yl(false);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function no(t, e, l) {
    return l === void 0 || (Ie & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = jd(), it.lanes |= t, Nl |= t, l);
  }
  function jf(t, e, l, n) {
    return he(l, e) ? l : Ln.current !== null ? (t = no(t, l, n), he(t, e) || (qt = true), t) : (Ie & 42) === 0 || (Ie & 1073741824) !== 0 && (mt & 261930) === 0 ? (qt = true, t.memoizedState = l) : (t = jd(), it.lanes |= t, Nl |= t, e);
  }
  function Uf(t, e, l, n, a) {
    var i = H.p;
    H.p = i !== 0 && 8 > i ? i : 8;
    var s = C.T, d = {};
    C.T = d, io(t, false, e, l);
    try {
      var h = a(), _ = C.S;
      if (_ !== null && _(d, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var M = Ig(h, n);
        Na(t, e, M, Ee(t));
      } else Na(t, e, n, Ee(t));
    } catch (w) {
      Na(t, e, { then: function() {
      }, status: "rejected", reason: w }, Ee());
    } finally {
      H.p = i, s !== null && d.types !== null && (s.types = d.types), C.T = s;
    }
  }
  function ay() {
  }
  function ao(t, e, l, n) {
    if (t.tag !== 5) throw Error(o(476));
    var a = Bf(t).queue;
    Uf(t, a, e, P, l === null ? ay : function() {
      return Hf(t), l(n);
    });
  }
  function Bf(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: P, baseState: P, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pe, lastRenderedState: P }, next: null };
    var l = {};
    return e.next = { memoizedState: l, baseState: l, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pe, lastRenderedState: l }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Hf(t) {
    var e = Bf(t);
    e.next === null && (e = t.alternate.memoizedState), Na(t, e.next.queue, {}, Ee());
  }
  function uo() {
    return Ft(Ja);
  }
  function Lf() {
    return Bt().memoizedState;
  }
  function qf() {
    return Bt().memoizedState;
  }
  function uy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ee();
          t = _l(l);
          var n = zl(e, t, l);
          n !== null && (se(n, e, l), za(n, e, l)), e = { cache: jc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function iy(t, e, l) {
    var n = Ee();
    l = { lane: n, revertLane: 0, gesture: null, action: l, hasEagerState: false, eagerState: null, next: null }, Zu(t) ? Gf(e, l) : (l = Ac(t, e, l, n), l !== null && (se(l, t, n), Xf(l, e, n)));
  }
  function Yf(t, e, l) {
    var n = Ee();
    Na(t, e, l, n);
  }
  function Na(t, e, l, n) {
    var a = { lane: n, revertLane: 0, gesture: null, action: l, hasEagerState: false, eagerState: null, next: null };
    if (Zu(t)) Gf(e, a);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null)) try {
        var s = e.lastRenderedState, d = i(s, l);
        if (a.hasEagerState = true, a.eagerState = d, he(d, s)) return _u(t, e, a, 0), Dt === null && Tu(), false;
      } catch {
      } finally {
      }
      if (l = Ac(t, e, a, n), l !== null) return se(l, t, n), Xf(l, e, n), true;
    }
    return false;
  }
  function io(t, e, l, n) {
    if (n = { lane: 2, revertLane: qo(), gesture: null, action: n, hasEagerState: false, eagerState: null, next: null }, Zu(t)) {
      if (e) throw Error(o(479));
    } else e = Ac(t, l, n, 2), e !== null && se(e, t, 2);
  }
  function Zu(t) {
    var e = t.alternate;
    return t === it || e !== null && e === it;
  }
  function Gf(t, e) {
    qn = Lu = true;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Xf(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, Kr(t, l);
    }
  }
  var Ra = { readContext: Ft, use: Gu, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useLayoutEffect: wt, useInsertionEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useSyncExternalStore: wt, useId: wt, useHostTransitionStatus: wt, useFormState: wt, useActionState: wt, useOptimistic: wt, useMemoCache: wt, useCacheRefresh: wt };
  Ra.useEffectEvent = wt;
  var Qf = { readContext: Ft, use: Gu, useCallback: function(t, e) {
    return ne().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: Ft, useEffect: zf, useImperativeHandle: function(t, e, l) {
    l = l != null ? l.concat([t]) : null, Qu(4194308, 4, Mf.bind(null, e, t), l);
  }, useLayoutEffect: function(t, e) {
    return Qu(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    Qu(4, 2, t, e);
  }, useMemo: function(t, e) {
    var l = ne();
    e = e === void 0 ? null : e;
    var n = t();
    if (un) {
      yl(true);
      try {
        t();
      } finally {
        yl(false);
      }
    }
    return l.memoizedState = [n, e], n;
  }, useReducer: function(t, e, l) {
    var n = ne();
    if (l !== void 0) {
      var a = l(e);
      if (un) {
        yl(true);
        try {
          l(e);
        } finally {
          yl(false);
        }
      }
    } else a = e;
    return n.memoizedState = n.baseState = a, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: a }, n.queue = t, t = t.dispatch = iy.bind(null, it, t), [n.memoizedState, t];
  }, useRef: function(t) {
    var e = ne();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = Pc(t);
    var e = t.queue, l = Yf.bind(null, it, e);
    return e.dispatch = l, [t.memoizedState, l];
  }, useDebugValue: lo, useDeferredValue: function(t, e) {
    var l = ne();
    return no(l, t, e);
  }, useTransition: function() {
    var t = Pc(false);
    return t = Uf.bind(null, it, t.queue, true, false), ne().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, l) {
    var n = it, a = ne();
    if (gt) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else {
      if (l = e(), Dt === null) throw Error(o(349));
      (mt & 127) !== 0 || sf(n, e, l);
    }
    a.memoizedState = l;
    var i = { value: l, getSnapshot: e };
    return a.queue = i, zf(df.bind(null, n, i, t), [t]), n.flags |= 2048, Gn(9, { destroy: void 0 }, ff.bind(null, n, i, l, e), null), l;
  }, useId: function() {
    var t = ne(), e = Dt.identifierPrefix;
    if (gt) {
      var l = qe, n = Le;
      l = (n & ~(1 << 32 - ve(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = qu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
    } else l = Pg++, e = "_" + e + "r_" + l.toString(32) + "_";
    return t.memoizedState = e;
  }, useHostTransitionStatus: uo, useFormState: Ef, useActionState: Ef, useOptimistic: function(t) {
    var e = ne();
    e.memoizedState = e.baseState = t;
    var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = l, e = io.bind(null, it, true, l), l.dispatch = e, [t, e];
  }, useMemoCache: Fc, useCacheRefresh: function() {
    return ne().memoizedState = uy.bind(null, it);
  }, useEffectEvent: function(t) {
    var e = ne(), l = { impl: t };
    return e.memoizedState = l, function() {
      if ((xt & 2) !== 0) throw Error(o(440));
      return l.impl.apply(void 0, arguments);
    };
  } }, co = { readContext: Ft, use: Gu, useCallback: Rf, useContext: Ft, useEffect: eo, useImperativeHandle: Nf, useInsertionEffect: Df, useLayoutEffect: Cf, useMemo: wf, useReducer: Xu, useRef: _f, useState: function() {
    return Xu(Pe);
  }, useDebugValue: lo, useDeferredValue: function(t, e) {
    var l = Bt();
    return jf(l, _t.memoizedState, t, e);
  }, useTransition: function() {
    var t = Xu(Pe)[0], e = Bt().memoizedState;
    return [typeof t == "boolean" ? t : Ma(t), e];
  }, useSyncExternalStore: rf, useId: Lf, useHostTransitionStatus: uo, useFormState: xf, useActionState: xf, useOptimistic: function(t, e) {
    var l = Bt();
    return hf(l, _t, t, e);
  }, useMemoCache: Fc, useCacheRefresh: qf };
  co.useEffectEvent = Of;
  var Vf = { readContext: Ft, use: Gu, useCallback: Rf, useContext: Ft, useEffect: eo, useImperativeHandle: Nf, useInsertionEffect: Df, useLayoutEffect: Cf, useMemo: wf, useReducer: Ic, useRef: _f, useState: function() {
    return Ic(Pe);
  }, useDebugValue: lo, useDeferredValue: function(t, e) {
    var l = Bt();
    return _t === null ? no(l, t, e) : jf(l, _t.memoizedState, t, e);
  }, useTransition: function() {
    var t = Ic(Pe)[0], e = Bt().memoizedState;
    return [typeof t == "boolean" ? t : Ma(t), e];
  }, useSyncExternalStore: rf, useId: Lf, useHostTransitionStatus: uo, useFormState: Tf, useActionState: Tf, useOptimistic: function(t, e) {
    var l = Bt();
    return _t !== null ? hf(l, _t, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
  }, useMemoCache: Fc, useCacheRefresh: qf };
  Vf.useEffectEvent = Of;
  function oo(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : O({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var ro = { enqueueSetState: function(t, e, l) {
    t = t._reactInternals;
    var n = Ee(), a = _l(n);
    a.payload = e, l != null && (a.callback = l), e = zl(t, a, n), e !== null && (se(e, t, n), za(e, t, n));
  }, enqueueReplaceState: function(t, e, l) {
    t = t._reactInternals;
    var n = Ee(), a = _l(n);
    a.tag = 1, a.payload = e, l != null && (a.callback = l), e = zl(t, a, n), e !== null && (se(e, t, n), za(e, t, n));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var l = Ee(), n = _l(l);
    n.tag = 2, e != null && (n.callback = e), e = zl(t, n, l), e !== null && (se(e, t, l), za(e, t, l));
  } };
  function Zf(t, e, l, n, a, i, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, s) : e.prototype && e.prototype.isPureReactComponent ? !ba(l, n) || !ba(a, i) : true;
  }
  function Kf(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && ro.enqueueReplaceState(e, e.state, null);
  }
  function cn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e) n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = O({}, l));
      for (var a in t) l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function kf(t) {
    Au(t);
  }
  function Jf(t) {
    console.error(t);
  }
  function Wf(t) {
    Au(t);
  }
  function Ku(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ff(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, { componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function so(t, e, l) {
    return l = _l(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ku(t, e);
    }, l;
  }
  function $f(t) {
    return t = _l(t), t.tag = 3, t;
  }
  function If(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      t.payload = function() {
        return a(i);
      }, t.callback = function() {
        Ff(e, l, n);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      Ff(e, l, n), typeof a != "function" && (Rl === null ? Rl = /* @__PURE__ */ new Set([this]) : Rl.add(this));
      var d = n.stack;
      this.componentDidCatch(n.value, { componentStack: d !== null ? d : "" });
    });
  }
  function cy(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && wn(e, l, a, true), l = ye.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Me === null ? ai() : l.alternate === null && jt === 0 && (jt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === wu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Bo(t, n, a)), false;
          case 22:
            return l.flags |= 65536, n === wu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([n]) }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Bo(t, n, a)), false;
        }
        throw Error(o(435, l.tag));
      }
      return Bo(t, n, a), ai(), false;
    }
    if (gt) return e = ye.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Cc && (t = Error(o(422), { cause: n }), Ea(ze(t, l)))) : (n !== Cc && (e = Error(o(423), { cause: n }), Ea(ze(e, l))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = ze(n, l), a = so(t.stateNode, n, a), Yc(t, a), jt !== 4 && (jt = 2)), false;
    var i = Error(o(520), { cause: n });
    if (i = ze(i, l), Ya === null ? Ya = [i] : Ya.push(i), jt !== 4 && (jt = 2), e === null) return true;
    n = ze(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = so(l.stateNode, n, t), Yc(l, t), false;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Rl === null || !Rl.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = $f(a), If(a, t, l, n), Yc(l, a), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var fo = Error(o(461)), qt = false;
  function $t(t, e, l, n) {
    e.child = t === null ? ef(e, null, l, n) : an(e, t.child, l, n);
  }
  function Pf(t, e, l, n, a) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var s = {};
      for (var d in n) d !== "ref" && (s[d] = n[d]);
    } else s = n;
    return tn(e), n = Kc(t, e, l, s, i, a), d = kc(), t !== null && !qt ? (Jc(t, e, a), tl(t, e, a)) : (gt && d && Oc(e), e.flags |= 1, $t(t, e, n, a), e.child);
  }
  function td(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !Tc(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, ed(t, e, i, n, a)) : (t = Ou(l.type, null, n, e, e.mode, a), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !So(t, a)) {
      var s = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ba, l(s, n) && t.ref === e.ref) return tl(t, e, a);
    }
    return e.flags |= 1, t = Je(i, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function ed(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (ba(i, n) && t.ref === e.ref) if (qt = false, e.pendingProps = n = i, So(t, a)) (t.flags & 131072) !== 0 && (qt = true);
      else return e.lanes = t.lanes, tl(t, e, a);
    }
    return mo(t, e, l, n, a);
  }
  function ld(t, e, l, n) {
    var a = n.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, a = 0; n !== null; ) a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~i;
        } else n = 0, e.child = null;
        return nd(t, e, i, l, n);
      }
      if ((l & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Nu(e, i !== null ? i.cachePool : null), i !== null ? af(e, i) : Xc(), uf(e);
      else return n = e.lanes = 536870912, nd(t, e, i !== null ? i.baseLanes | l : l, l, n);
    } else i !== null ? (Nu(e, i.cachePool), af(e, i), Dl(), e.memoizedState = null) : (t !== null && Nu(e, null), Xc(), Dl());
    return $t(t, e, a, l), e.child;
  }
  function wa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.sibling;
  }
  function nd(t, e, l, n, a) {
    var i = Bc();
    return i = i === null ? null : { parent: Ht._currentValue, pool: i }, e.memoizedState = { baseLanes: l, cachePool: i }, t !== null && Nu(e, null), Xc(), uf(e), t !== null && wn(t, e, n, true), e.childLanes = a, null;
  }
  function ku(t, e) {
    return e = Wu({ mode: e.mode, children: e.children }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ad(t, e, l) {
    return an(e, t.child, null, l), t = ku(e, e.pendingProps), t.flags |= 2, be(e), e.memoizedState = null, t;
  }
  function oy(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (gt) {
        if (n.mode === "hidden") return t = ku(e, n), e.lanes = 536870912, wa(null, t);
        if (Vc(e), (t = Ct) ? (t = gm(t, Ce), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: Sl !== null ? { id: Le, overflow: qe } : null, retryLane: 536870912, hydrationErrors: null }, l = Ys(t), l.return = e, e.child = l, Wt = e, Ct = null)) : t = null, t === null) throw xl(e);
        return e.lanes = 536870912, null;
      }
      return ku(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (Vc(e), a) if (e.flags & 256) e.flags &= -257, e = ad(t, e, l);
      else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(o(558));
      else if (qt || wn(t, e, l, false), a = (l & t.childLanes) !== 0, qt || a) {
        if (n = Dt, n !== null && (s = kr(n, l), s !== 0 && s !== i.retryLane)) throw i.retryLane = s, Fl(t, s), se(n, t, s), fo;
        ai(), e = ad(t, e, l);
      } else t = i.treeContext, Ct = Ne(s.nextSibling), Wt = e, gt = true, El = null, Ce = false, t !== null && Qs(e, t), e = ku(e, n), e.flags |= 4096;
      return e;
    }
    return t = Je(t.child, { mode: n.mode, children: n.children }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ju(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function mo(t, e, l, n, a) {
    return tn(e), l = Kc(t, e, l, n, void 0, a), n = kc(), t !== null && !qt ? (Jc(t, e, a), tl(t, e, a)) : (gt && n && Oc(e), e.flags |= 1, $t(t, e, l, a), e.child);
  }
  function ud(t, e, l, n, a, i) {
    return tn(e), e.updateQueue = null, l = of(e, n, l, a), cf(t), n = kc(), t !== null && !qt ? (Jc(t, e, i), tl(t, e, i)) : (gt && n && Oc(e), e.flags |= 1, $t(t, e, l, i), e.child);
  }
  function id(t, e, l, n, a) {
    if (tn(e), e.stateNode === null) {
      var i = Cn, s = l.contextType;
      typeof s == "object" && s !== null && (i = Ft(s)), i = new l(n, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ro, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = n, i.state = e.memoizedState, i.refs = {}, Lc(e), s = l.contextType, i.context = typeof s == "object" && s !== null ? Ft(s) : Cn, i.state = e.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (oo(e, l, s, n), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && ro.enqueueReplaceState(i, i.state, null), Da(e, n, i, a), Oa(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = true;
    } else if (t === null) {
      i = e.stateNode;
      var d = e.memoizedProps, h = cn(l, d);
      i.props = h;
      var _ = i.context, M = l.contextType;
      s = Cn, typeof M == "object" && M !== null && (s = Ft(M));
      var w = l.getDerivedStateFromProps;
      M = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = e.pendingProps !== d, M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || _ !== s) && Kf(e, i, n, s), Tl = false;
      var z = e.memoizedState;
      i.state = z, Da(e, n, i, a), Oa(), _ = e.memoizedState, d || z !== _ || Tl ? (typeof w == "function" && (oo(e, l, w, n), _ = e.memoizedState), (h = Tl || Zf(e, l, h, n, z, _, s)) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = _), i.props = n, i.state = _, i.context = s, n = h) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = false);
    } else {
      i = e.stateNode, qc(t, e), s = e.memoizedProps, M = cn(l, s), i.props = M, w = e.pendingProps, z = i.context, _ = l.contextType, h = Cn, typeof _ == "object" && _ !== null && (h = Ft(_)), d = l.getDerivedStateFromProps, (_ = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== w || z !== h) && Kf(e, i, n, h), Tl = false, z = e.memoizedState, i.state = z, Da(e, n, i, a), Oa();
      var D = e.memoizedState;
      s !== w || z !== D || Tl || t !== null && t.dependencies !== null && Cu(t.dependencies) ? (typeof d == "function" && (oo(e, l, d, n), D = e.memoizedState), (M = Tl || Zf(e, l, M, n, z, D, h) || t !== null && t.dependencies !== null && Cu(t.dependencies)) ? (_ || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, D, h), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, D, h)), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = D), i.props = n, i.state = D, i.context = h, n = M) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && z === t.memoizedState || (e.flags |= 1024), n = false);
    }
    return i = n, Ju(t, e), n = (e.flags & 128) !== 0, i || n ? (i = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && n ? (e.child = an(e, t.child, null, a), e.child = an(e, null, l, a)) : $t(t, e, l, a), e.memoizedState = i.state, t = e.child) : t = tl(t, e, a), t;
  }
  function cd(t, e, l, n) {
    return Il(), e.flags |= 256, $t(t, e, l, n), e.child;
  }
  var vo = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ho(t) {
    return { baseLanes: t, cachePool: Ws() };
  }
  function go(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Se), t;
  }
  function od(t, e, l) {
    var n = e.pendingProps, a = false, i = (e.flags & 128) !== 0, s;
    if ((s = i) || (s = t !== null && t.memoizedState === null ? false : (Ut.current & 2) !== 0), s && (a = true, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (gt) {
        if (a ? Ol(e) : Dl(), (t = Ct) ? (t = gm(t, Ce), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: Sl !== null ? { id: Le, overflow: qe } : null, retryLane: 536870912, hydrationErrors: null }, l = Ys(t), l.return = e, e.child = l, Wt = e, Ct = null)) : t = null, t === null) throw xl(e);
        return Io(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var d = n.children;
      return n = n.fallback, a ? (Dl(), a = e.mode, d = Wu({ mode: "hidden", children: d }, a), n = $l(n, a, l, null), d.return = e, n.return = e, d.sibling = n, e.child = d, n = e.child, n.memoizedState = ho(l), n.childLanes = go(t, s, l), e.memoizedState = vo, wa(null, n)) : (Ol(e), yo(e, d));
    }
    var h = t.memoizedState;
    if (h !== null && (d = h.dehydrated, d !== null)) {
      if (i) e.flags & 256 ? (Ol(e), e.flags &= -257, e = bo(t, e, l)) : e.memoizedState !== null ? (Dl(), e.child = t.child, e.flags |= 128, e = null) : (Dl(), d = n.fallback, a = e.mode, n = Wu({ mode: "visible", children: n.children }, a), d = $l(d, a, l, null), d.flags |= 2, n.return = e, d.return = e, n.sibling = d, e.child = n, an(e, t.child, null, l), n = e.child, n.memoizedState = ho(l), n.childLanes = go(t, s, l), e.memoizedState = vo, e = wa(null, n));
      else if (Ol(e), Io(d)) {
        if (s = d.nextSibling && d.nextSibling.dataset, s) var _ = s.dgst;
        s = _, n = Error(o(419)), n.stack = "", n.digest = s, Ea({ value: n, source: null, stack: null }), e = bo(t, e, l);
      } else if (qt || wn(t, e, l, false), s = (l & t.childLanes) !== 0, qt || s) {
        if (s = Dt, s !== null && (n = kr(s, l), n !== 0 && n !== h.retryLane)) throw h.retryLane = n, Fl(t, n), se(s, t, n), fo;
        $o(d) || ai(), e = bo(t, e, l);
      } else $o(d) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, Ct = Ne(d.nextSibling), Wt = e, gt = true, El = null, Ce = false, t !== null && Qs(e, t), e = yo(e, n.children), e.flags |= 4096);
      return e;
    }
    return a ? (Dl(), d = n.fallback, a = e.mode, h = t.child, _ = h.sibling, n = Je(h, { mode: "hidden", children: n.children }), n.subtreeFlags = h.subtreeFlags & 65011712, _ !== null ? d = Je(_, d) : (d = $l(d, a, l, null), d.flags |= 2), d.return = e, n.return = e, n.sibling = d, e.child = n, wa(null, n), n = e.child, d = t.child.memoizedState, d === null ? d = ho(l) : (a = d.cachePool, a !== null ? (h = Ht._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Ws(), d = { baseLanes: d.baseLanes | l, cachePool: a }), n.memoizedState = d, n.childLanes = go(t, s, l), e.memoizedState = vo, wa(t.child, n)) : (Ol(e), l = t.child, t = l.sibling, l = Je(l, { mode: "visible", children: n.children }), l.return = e, l.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function yo(t, e) {
    return e = Wu({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function Wu(t, e) {
    return t = ge(22, t, null, e), t.lanes = 0, t;
  }
  function bo(t, e, l) {
    return an(e, t.child, null, l), t = yo(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function rd(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Rc(t.return, e, l);
  }
  function po(t, e, l, n, a, i) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: n, tail: l, tailMode: a, treeForkCount: i } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = l, s.tailMode = a, s.treeForkCount = i);
  }
  function sd(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var s = Ut.current, d = (s & 2) !== 0;
    if (d ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, Y(Ut, s), $t(t, e, n, l), n = gt ? Sa : 0, !d && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && rd(t, l, e);
      else if (t.tag === 19) rd(t, l, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (a) {
      case "forwards":
        for (l = e.child, a = null; l !== null; ) t = l.alternate, t !== null && Hu(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), po(e, false, a, l, i, n);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && Hu(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        po(e, true, l, null, i, n);
        break;
      case "together":
        po(e, false, null, null, void 0, n);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function tl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Nl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
      if (wn(t, e, l, false), (l & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, l = Je(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = Je(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function So(t, e) {
    return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && Cu(t)));
  }
  function ry(t, e, l) {
    switch (e.tag) {
      case 3:
        Zt(e, e.stateNode.containerInfo), Al(e, Ht, t.memoizedState.cache), Il();
        break;
      case 27:
      case 5:
        hl(e);
        break;
      case 4:
        Zt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Al(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, Vc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null) return n.dehydrated !== null ? (Ol(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? od(t, e, l) : (Ol(e), t = tl(t, e, l), t !== null ? t.sibling : null);
        Ol(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (wn(t, e, l, false), n = (l & e.childLanes) !== 0), a) {
          if (n) return sd(t, e, l);
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Y(Ut, Ut.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, ld(t, e, l, e.pendingProps);
      case 24:
        Al(e, Ht, t.memoizedState.cache);
    }
    return tl(t, e, l);
  }
  function fd(t, e, l) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) qt = true;
    else {
      if (!So(t, l) && (e.flags & 128) === 0) return qt = false, ry(t, e, l);
      qt = (t.flags & 131072) !== 0;
    }
    else qt = false, gt && (e.flags & 1048576) !== 0 && Xs(e, Sa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = ln(e.elementType), e.type = t, typeof t == "function") Tc(t) ? (n = cn(t, n), e.tag = 1, e = id(null, e, t, n, l)) : (e.tag = 0, e = mo(null, e, t, n, l));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === ut) {
                e.tag = 11, e = Pf(null, e, t, n, l);
                break t;
              } else if (a === G) {
                e.tag = 14, e = td(null, e, t, n, l);
                break t;
              }
            }
            throw e = fe(t) || t, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return mo(t, e, e.type, e.pendingProps, l);
      case 1:
        return n = e.type, a = cn(n, e.pendingProps), id(t, e, n, a, l);
      case 3:
        t: {
          if (Zt(e, e.stateNode.containerInfo), t === null) throw Error(o(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          a = i.element, qc(t, e), Da(e, n, null, l);
          var s = e.memoizedState;
          if (n = s.cache, Al(e, Ht, n), n !== i.cache && wc(e, [Ht], l, true), Oa(), n = s.element, i.isDehydrated) if (i = { element: n, isDehydrated: false, cache: s.cache }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
            e = cd(t, e, n, l);
            break t;
          } else if (n !== a) {
            a = ze(Error(o(424)), e), Ea(a), e = cd(t, e, n, l);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (Ct = Ne(t.firstChild), Wt = e, gt = true, El = null, Ce = true, l = ef(e, null, n, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          }
          else {
            if (Il(), n === a) {
              e = tl(t, e, l);
              break t;
            }
            $t(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ju(t, e), t === null ? (l = xm(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : gt || (l = e.type, t = e.pendingProps, n = fi($.current).createElement(l), n[Jt] = e, n[ae] = t, It(n, l, t), Kt(n), e.stateNode = n) : e.memoizedState = xm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return hl(e), t === null && gt && (n = e.stateNode = pm(e.type, e.pendingProps, $.current), Wt = e, Ce = true, a = Ct, Bl(e.type) ? (Po = a, Ct = Ne(n.firstChild)) : Ct = a), $t(t, e, e.pendingProps.children, l), Ju(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && gt && ((a = n = Ct) && (n = qy(n, e.type, e.pendingProps, Ce), n !== null ? (e.stateNode = n, Wt = e, Ct = Ne(n.firstChild), Ce = false, a = true) : a = false), a || xl(e)), hl(e), a = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, n = i.children, Jo(a, i) ? n = null : s !== null && Jo(a, s) && (e.flags |= 32), e.memoizedState !== null && (a = Kc(t, e, ty, null, null, l), Ja._currentValue = a), Ju(t, e), $t(t, e, n, l), e.child;
      case 6:
        return t === null && gt && ((t = l = Ct) && (l = Yy(l, e.pendingProps, Ce), l !== null ? (e.stateNode = l, Wt = e, Ct = null, t = true) : t = false), t || xl(e)), null;
      case 13:
        return od(t, e, l);
      case 4:
        return Zt(e, e.stateNode.containerInfo), n = e.pendingProps, t === null ? e.child = an(e, null, n, l) : $t(t, e, n, l), e.child;
      case 11:
        return Pf(t, e, e.type, e.pendingProps, l);
      case 7:
        return $t(t, e, e.pendingProps, l), e.child;
      case 8:
        return $t(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return $t(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return n = e.pendingProps, Al(e, e.type, n.value), $t(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, tn(e), a = Ft(a), n = n(a), e.flags |= 1, $t(t, e, n, l), e.child;
      case 14:
        return td(t, e, e.type, e.pendingProps, l);
      case 15:
        return ed(t, e, e.type, e.pendingProps, l);
      case 19:
        return sd(t, e, l);
      case 31:
        return oy(t, e, l);
      case 22:
        return ld(t, e, l, e.pendingProps);
      case 24:
        return tn(e), n = Ft(Ht), t === null ? (a = Bc(), a === null && (a = Dt, i = jc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), e.memoizedState = { parent: n, cache: a }, Lc(e), Al(e, Ht, a)) : ((t.lanes & l) !== 0 && (qc(t, e), Da(e, null, null, l), Oa()), a = t.memoizedState, i = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Al(e, Ht, n)) : (n = i.cache, Al(e, Ht, n), n !== a.cache && wc(e, [Ht], l, true))), $t(t, e, e.pendingProps.children, l), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function el(t) {
    t.flags |= 4;
  }
  function Eo(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = false), e) {
      if (t.flags |= 16777216, (a & 335544128) === a) if (t.stateNode.complete) t.flags |= 8192;
      else if (Ld()) t.flags |= 8192;
      else throw nn = wu, Hc;
    } else t.flags &= -16777217;
  }
  function dd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Om(e)) if (Ld()) t.flags |= 8192;
    else throw nn = wu, Hc;
  }
  function Fu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Vr() : 536870912, t.lanes |= e, Zn |= e);
  }
  function ja(t, e) {
    if (!gt) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var l = null; e !== null; ) e.alternate !== null && (l = e), e = e.sibling;
        l === null ? t.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = t.tail;
        for (var n = null; l !== null; ) l.alternate !== null && (n = l), l = l.sibling;
        n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
    }
  }
  function Mt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e) for (var a = t.child; a !== null; ) l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = t, a = a.sibling;
    else for (a = t.child; a !== null; ) l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function sy(t, e, l) {
    var n = e.pendingProps;
    switch (Dc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(e), null;
      case 1:
        return Mt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), $e(Ht), ot(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Rn(e) ? el(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Mc())), Mt(e), null;
      case 26:
        var a = e.type, i = e.memoizedState;
        return t === null ? (el(e), i !== null ? (Mt(e), dd(e, i)) : (Mt(e), Eo(e, a, null, n, l))) : i ? i !== t.memoizedState ? (el(e), Mt(e), dd(e, i)) : (Mt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && el(e), Mt(e), Eo(e, a, t, n, l)), null;
      case 27:
        if (Ve(e), l = $.current, a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== n && el(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(o(166));
            return Mt(e), null;
          }
          t = Z.current, Rn(e) ? Vs(e) : (t = pm(a, n, l), e.stateNode = t, el(e));
        }
        return Mt(e), null;
      case 5:
        if (Ve(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== n && el(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(o(166));
            return Mt(e), null;
          }
          if (i = Z.current, Rn(e)) Vs(e);
          else {
            var s = fi($.current);
            switch (i) {
              case 1:
                i = s.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                i = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    i = s.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    i = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                    break;
                  case "select":
                    i = typeof n.is == "string" ? s.createElement("select", { is: n.is }) : s.createElement("select"), n.multiple ? i.multiple = true : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? s.createElement(a, { is: n.is }) : s.createElement(a);
                }
            }
            i[Jt] = e, i[ae] = n;
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            e.stateNode = i;
            t: switch (It(i, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = true;
                break t;
              default:
                n = false;
            }
            n && el(e);
          }
        }
        return Mt(e), Eo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && el(e);
        else {
          if (typeof n != "string" && e.stateNode === null) throw Error(o(166));
          if (t = $.current, Rn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = Wt, a !== null) switch (a.tag) {
              case 27:
              case 5:
                n = a.memoizedProps;
            }
            t[Jt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === true || om(t.nodeValue, l)), t || xl(e, true);
          } else t = fi(t).createTextNode(n), t[Jt] = e, e.stateNode = t;
        }
        return Mt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Rn(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(o(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[Jt] = e;
            } else Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), t = false;
          } else l = Mc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
          if (!t) return e.flags & 256 ? (be(e), e) : (be(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return Mt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Rn(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Jt] = e;
            } else Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Mt(e), a = false;
          } else a = Mc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = true;
          if (!a) return e.flags & 256 ? (be(e), e) : (be(e), null);
        }
        return be(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Fu(e, e.updateQueue), Mt(e), null);
      case 4:
        return ot(), t === null && Qo(e.stateNode.containerInfo), Mt(e), null;
      case 10:
        return $e(e.type), Mt(e), null;
      case 19:
        if (j(Ut), n = e.memoizedState, n === null) return Mt(e), null;
        if (a = (e.flags & 128) !== 0, i = n.rendering, i === null) if (a) ja(n, false);
        else {
          if (jt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (i = Hu(t), i !== null) {
              for (e.flags |= 128, ja(n, false), t = i.updateQueue, e.updateQueue = t, Fu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) qs(l, t), l = l.sibling;
              return Y(Ut, Ut.current & 1 | 2), gt && We(e, n.treeForkCount), e.child;
            }
            t = t.sibling;
          }
          n.tail !== null && de() > ei && (e.flags |= 128, a = true, ja(n, false), e.lanes = 4194304);
        }
        else {
          if (!a) if (t = Hu(i), t !== null) {
            if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, Fu(e, t), ja(n, true), n.tail === null && n.tailMode === "hidden" && !i.alternate && !gt) return Mt(e), null;
          } else 2 * de() - n.renderingStartTime > ei && l !== 536870912 && (e.flags |= 128, a = true, ja(n, false), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = de(), t.sibling = null, l = Ut.current, Y(Ut, a ? l & 1 | 2 : l & 1), gt && We(e, n.treeForkCount), t) : (Mt(e), null);
      case 22:
      case 23:
        return be(e), Qc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Mt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Mt(e), l = e.updateQueue, l !== null && Fu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && j(en), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), $e(Ht), Mt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function fy(t, e) {
    switch (Dc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return $e(Ht), ot(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ve(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (be(e), e.alternate === null) throw Error(o(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (be(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(o(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return j(Ut), null;
      case 4:
        return ot(), null;
      case 10:
        return $e(e.type), null;
      case 22:
      case 23:
        return be(e), Qc(), t !== null && j(en), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return $e(Ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function md(t, e) {
    switch (Dc(e), e.tag) {
      case 3:
        $e(Ht), ot();
        break;
      case 26:
      case 27:
      case 5:
        Ve(e);
        break;
      case 4:
        ot();
        break;
      case 31:
        e.memoizedState !== null && be(e);
        break;
      case 13:
        be(e);
        break;
      case 19:
        j(Ut);
        break;
      case 10:
        $e(e.type);
        break;
      case 22:
      case 23:
        be(e), Qc(), t !== null && j(en);
        break;
      case 24:
        $e(Ht);
    }
  }
  function Ua(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create, s = l.inst;
            n = i(), s.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (d) {
      Tt(e, e.return, d);
    }
  }
  function Cl(t, e, l) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var s = n.inst, d = s.destroy;
            if (d !== void 0) {
              s.destroy = void 0, a = e;
              var h = l, _ = d;
              try {
                _();
              } catch (M) {
                Tt(a, h, M);
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (M) {
      Tt(e, e.return, M);
    }
  }
  function vd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        nf(e, l);
      } catch (n) {
        Tt(t, t.return, n);
      }
    }
  }
  function hd(t, e, l) {
    l.props = cn(t.type, t.memoizedProps), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Tt(t, e, n);
    }
  }
  function Ba(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      Tt(t, e, a);
    }
  }
  function Ye(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null) if (typeof n == "function") try {
      n();
    } catch (a) {
      Tt(t, e, a);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (a) {
      Tt(t, e, a);
    }
    else l.current = null;
  }
  function gd(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Tt(t, t.return, a);
    }
  }
  function xo(t, e, l) {
    try {
      var n = t.stateNode;
      wy(n, t.type, l, e), n[ae] = e;
    } catch (a) {
      Tt(t, t.return, a);
    }
  }
  function yd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Bl(t.type) || t.tag === 4;
  }
  function Ao(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || yd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Bl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function To(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ke));
    else if (n !== 4 && (n === 27 && Bl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (To(t, e, l), t = t.sibling; t !== null; ) To(t, e, l), t = t.sibling;
  }
  function $u(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && Bl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for ($u(t, e, l), t = t.sibling; t !== null; ) $u(t, e, l), t = t.sibling;
  }
  function bd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
      It(e, n, l), e[Jt] = t, e[ae] = l;
    } catch (i) {
      Tt(t, t.return, i);
    }
  }
  var ll = false, Yt = false, _o = false, pd = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function dy(t, e) {
    if (t = t.containerInfo, Ko = bi, t = Ms(t), yc(t)) {
      if ("selectionStart" in t) var l = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        l = (l = t.ownerDocument) && l.defaultView || window;
        var n = l.getSelection && l.getSelection();
        if (n && n.rangeCount !== 0) {
          l = n.anchorNode;
          var a = n.anchorOffset, i = n.focusNode;
          n = n.focusOffset;
          try {
            l.nodeType, i.nodeType;
          } catch {
            l = null;
            break t;
          }
          var s = 0, d = -1, h = -1, _ = 0, M = 0, w = t, z = null;
          e: for (; ; ) {
            for (var D; w !== l || a !== 0 && w.nodeType !== 3 || (d = s + a), w !== i || n !== 0 && w.nodeType !== 3 || (h = s + n), w.nodeType === 3 && (s += w.nodeValue.length), (D = w.firstChild) !== null; ) z = w, w = D;
            for (; ; ) {
              if (w === t) break e;
              if (z === l && ++_ === a && (d = s), z === i && ++M === n && (h = s), (D = w.nextSibling) !== null) break;
              w = z, z = w.parentNode;
            }
            w = D;
          }
          l = d === -1 || h === -1 ? null : { start: d, end: h };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ko = { focusedElem: t, selectionRange: l }, bi = false, kt = e; kt !== null; ) if (e = kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, kt = t;
    else for (; kt !== null; ) {
      switch (e = kt, i = e.alternate, t = e.flags, e.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) a = t[l], a.ref.impl = a.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && i !== null) {
            t = void 0, l = e, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
            try {
              var k = cn(l.type, a);
              t = n.getSnapshotBeforeUpdate(k, i), n.__reactInternalSnapshotBeforeUpdate = t;
            } catch (tt) {
              Tt(l, l.return, tt);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) Fo(t);
            else if (l === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Fo(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(o(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, kt = t;
        break;
      }
      kt = e.return;
    }
  }
  function Sd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        al(t, l), n & 4 && Ua(5, l);
        break;
      case 1:
        if (al(t, l), n & 4) if (t = l.stateNode, e === null) try {
          t.componentDidMount();
        } catch (s) {
          Tt(l, l.return, s);
        }
        else {
          var a = cn(l.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (s) {
            Tt(l, l.return, s);
          }
        }
        n & 64 && vd(l), n & 512 && Ba(l, l.return);
        break;
      case 3:
        if (al(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              e = l.child.stateNode;
              break;
            case 1:
              e = l.child.stateNode;
          }
          try {
            nf(t, e);
          } catch (s) {
            Tt(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && n & 4 && bd(l);
      case 26:
      case 5:
        al(t, l), e === null && n & 4 && gd(l), n & 512 && Ba(l, l.return);
        break;
      case 12:
        al(t, l);
        break;
      case 31:
        al(t, l), n & 4 && Ad(t, l);
        break;
      case 13:
        al(t, l), n & 4 && Td(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Ey.bind(null, l), Gy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ll, !n) {
          e = e !== null && e.memoizedState !== null || Yt, a = ll;
          var i = Yt;
          ll = n, (Yt = e) && !i ? ul(t, l, (l.subtreeFlags & 8772) !== 0) : al(t, l), ll = a, Yt = i;
        }
        break;
      case 30:
        break;
      default:
        al(t, l);
    }
  }
  function Ed(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ed(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && tc(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Nt = null, ie = false;
  function nl(t, e, l) {
    for (l = l.child; l !== null; ) xd(t, e, l), l = l.sibling;
  }
  function xd(t, e, l) {
    if (me && typeof me.onCommitFiberUnmount == "function") try {
      me.onCommitFiberUnmount(ia, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        Yt || Ye(l, e), nl(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Yt || Ye(l, e);
        var n = Nt, a = ie;
        Bl(l.type) && (Nt = l.stateNode, ie = false), nl(t, e, l), Za(l.stateNode), Nt = n, ie = a;
        break;
      case 5:
        Yt || Ye(l, e);
      case 6:
        if (n = Nt, a = ie, Nt = null, nl(t, e, l), Nt = n, ie = a, Nt !== null) if (ie) try {
          (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(l.stateNode);
        } catch (i) {
          Tt(l, e, i);
        }
        else try {
          Nt.removeChild(l.stateNode);
        } catch (i) {
          Tt(l, e, i);
        }
        break;
      case 18:
        Nt !== null && (ie ? (t = Nt, vm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Pn(t)) : vm(Nt, l.stateNode));
        break;
      case 4:
        n = Nt, a = ie, Nt = l.stateNode.containerInfo, ie = true, nl(t, e, l), Nt = n, ie = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Cl(2, l, e), Yt || Cl(4, l, e), nl(t, e, l);
        break;
      case 1:
        Yt || (Ye(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && hd(l, e, n)), nl(t, e, l);
        break;
      case 21:
        nl(t, e, l);
        break;
      case 22:
        Yt = (n = Yt) || l.memoizedState !== null, nl(t, e, l), Yt = n;
        break;
      default:
        nl(t, e, l);
    }
  }
  function Ad(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Pn(t);
      } catch (l) {
        Tt(e, e.return, l);
      }
    }
  }
  function Td(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Pn(t);
    } catch (l) {
      Tt(e, e.return, l);
    }
  }
  function my(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new pd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new pd()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Iu(t, e) {
    var l = my(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = xy.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function ce(t, e) {
    var l = e.deletions;
    if (l !== null) for (var n = 0; n < l.length; n++) {
      var a = l[n], i = t, s = e, d = s;
      t: for (; d !== null; ) {
        switch (d.tag) {
          case 27:
            if (Bl(d.type)) {
              Nt = d.stateNode, ie = false;
              break t;
            }
            break;
          case 5:
            Nt = d.stateNode, ie = false;
            break t;
          case 3:
          case 4:
            Nt = d.stateNode.containerInfo, ie = true;
            break t;
        }
        d = d.return;
      }
      if (Nt === null) throw Error(o(160));
      xd(i, s, a), Nt = null, ie = false, i = a.alternate, i !== null && (i.return = null), a.return = null;
    }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) _d(e, t), e = e.sibling;
  }
  var je = null;
  function _d(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ce(e, t), oe(t), n & 4 && (Cl(3, t, t.return), Ua(3, t), Cl(5, t, t.return));
        break;
      case 1:
        ce(e, t), oe(t), n & 512 && (Yt || l === null || Ye(l, l.return)), n & 64 && ll && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = je;
        if (ce(e, t), oe(t), n & 512 && (Yt || l === null || Ye(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null) if (n === null) if (t.stateNode === null) {
            t: {
              n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
              e: switch (n) {
                case "title":
                  i = a.getElementsByTagName("title")[0], (!i || i[ra] || i[Jt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), It(i, n, l), i[Jt] = t, Kt(i), n = i;
                  break t;
                case "link":
                  var s = _m("link", "href", a).get(n + (l.href || ""));
                  if (s) {
                    for (var d = 0; d < s.length; d++) if (i = s[d], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      s.splice(d, 1);
                      break e;
                    }
                  }
                  i = a.createElement(n), It(i, n, l), a.head.appendChild(i);
                  break;
                case "meta":
                  if (s = _m("meta", "content", a).get(n + (l.content || ""))) {
                    for (d = 0; d < s.length; d++) if (i = s[d], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      s.splice(d, 1);
                      break e;
                    }
                  }
                  i = a.createElement(n), It(i, n, l), a.head.appendChild(i);
                  break;
                default:
                  throw Error(o(468, n));
              }
              i[Jt] = t, Kt(i), n = i;
            }
            t.stateNode = n;
          } else zm(a, t.type, t.stateNode);
          else t.stateNode = Tm(a, n, t.memoizedProps);
          else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? zm(a, t.type, t.stateNode) : Tm(a, n, t.memoizedProps)) : n === null && t.stateNode !== null && xo(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ce(e, t), oe(t), n & 512 && (Yt || l === null || Ye(l, l.return)), l !== null && n & 4 && xo(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (ce(e, t), oe(t), n & 512 && (Yt || l === null || Ye(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            xn(a, "");
          } catch (k) {
            Tt(t, t.return, k);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, xo(t, a, l !== null ? l.memoizedProps : a)), n & 1024 && (_o = true);
        break;
      case 6:
        if (ce(e, t), oe(t), n & 4) {
          if (t.stateNode === null) throw Error(o(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (k) {
            Tt(t, t.return, k);
          }
        }
        break;
      case 3:
        if (vi = null, a = je, je = di(e.containerInfo), ce(e, t), je = a, oe(t), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Pn(e.containerInfo);
        } catch (k) {
          Tt(t, t.return, k);
        }
        _o && (_o = false, zd(t));
        break;
      case 4:
        n = je, je = di(t.stateNode.containerInfo), ce(e, t), oe(t), je = n;
        break;
      case 12:
        ce(e, t), oe(t);
        break;
      case 31:
        ce(e, t), oe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Iu(t, n)));
        break;
      case 13:
        ce(e, t), oe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ti = de()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Iu(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, _ = ll, M = Yt;
        if (ll = _ || a, Yt = M || h, ce(e, t), Yt = M, ll = _, oe(t), n & 8192) t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || h || ll || Yt || on(t)), l = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (l === null) {
              h = l = e;
              try {
                if (i = h.stateNode, a) s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                else {
                  d = h.stateNode;
                  var w = h.memoizedProps.style, z = w != null && w.hasOwnProperty("display") ? w.display : null;
                  d.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                }
              } catch (k) {
                Tt(h, h.return, k);
              }
            }
          } else if (e.tag === 6) {
            if (l === null) {
              h = e;
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (k) {
                Tt(h, h.return, k);
              }
            }
          } else if (e.tag === 18) {
            if (l === null) {
              h = e;
              try {
                var D = h.stateNode;
                a ? hm(D, true) : hm(h.stateNode, false);
              } catch (k) {
                Tt(h, h.return, k);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            l === e && (l = null), e = e.return;
          }
          l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
        }
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Iu(t, l))));
        break;
      case 19:
        ce(e, t), oe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, Iu(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ce(e, t), oe(t);
    }
  }
  function oe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (yd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Ao(t);
            $u(t, i, a);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (xn(s, ""), l.flags &= -33);
            var d = Ao(t);
            $u(t, d, s);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, _ = Ao(t);
            To(t, _, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (M) {
        Tt(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function zd(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      zd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function al(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Sd(t, e.alternate, e), e = e.sibling;
  }
  function on(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Cl(4, e, e.return), on(e);
          break;
        case 1:
          Ye(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && hd(e, e.return, l), on(e);
          break;
        case 27:
          Za(e.stateNode);
        case 26:
        case 5:
          Ye(e, e.return), on(e);
          break;
        case 22:
          e.memoizedState === null && on(e);
          break;
        case 30:
          on(e);
          break;
        default:
          on(e);
      }
      t = t.sibling;
    }
  }
  function ul(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, i = e, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ul(a, i, l), Ua(4, i);
          break;
        case 1:
          if (ul(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
            a.componentDidMount();
          } catch (_) {
            Tt(n, n.return, _);
          }
          if (n = i, a = n.updateQueue, a !== null) {
            var d = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++) lf(h[a], d);
            } catch (_) {
              Tt(n, n.return, _);
            }
          }
          l && s & 64 && vd(i), Ba(i, i.return);
          break;
        case 27:
          bd(i);
        case 26:
        case 5:
          ul(a, i, l), l && n === null && s & 4 && gd(i), Ba(i, i.return);
          break;
        case 12:
          ul(a, i, l);
          break;
        case 31:
          ul(a, i, l), l && s & 4 && Ad(a, i);
          break;
        case 13:
          ul(a, i, l), l && s & 4 && Td(a, i);
          break;
        case 22:
          i.memoizedState === null && ul(a, i, l), Ba(i, i.return);
          break;
        case 30:
          break;
        default:
          ul(a, i, l);
      }
      e = e.sibling;
    }
  }
  function zo(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && xa(l));
  }
  function Oo(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && xa(t));
  }
  function Ue(t, e, l, n) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Od(t, e, l, n), e = e.sibling;
  }
  function Od(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ue(t, e, l, n), a & 2048 && Ua(9, e);
        break;
      case 1:
        Ue(t, e, l, n);
        break;
      case 3:
        Ue(t, e, l, n), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && xa(t)));
        break;
      case 12:
        if (a & 2048) {
          Ue(t, e, l, n), t = e.stateNode;
          try {
            var i = e.memoizedProps, s = i.id, d = i.onPostCommit;
            typeof d == "function" && d(s, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (h) {
            Tt(e, e.return, h);
          }
        } else Ue(t, e, l, n);
        break;
      case 31:
        Ue(t, e, l, n);
        break;
      case 13:
        Ue(t, e, l, n);
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, s = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Ue(t, e, l, n) : Ha(t, e) : i._visibility & 2 ? Ue(t, e, l, n) : (i._visibility |= 2, Xn(t, e, l, n, (e.subtreeFlags & 10256) !== 0 || false)), a & 2048 && zo(s, e);
        break;
      case 24:
        Ue(t, e, l, n), a & 2048 && Oo(e.alternate, e);
        break;
      default:
        Ue(t, e, l, n);
    }
  }
  function Xn(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
      var i = t, s = e, d = l, h = n, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Xn(i, s, d, h, a), Ua(8, s);
          break;
        case 23:
          break;
        case 22:
          var M = s.stateNode;
          s.memoizedState !== null ? M._visibility & 2 ? Xn(i, s, d, h, a) : Ha(i, s) : (M._visibility |= 2, Xn(i, s, d, h, a)), a && _ & 2048 && zo(s.alternate, s);
          break;
        case 24:
          Xn(i, s, d, h, a), a && _ & 2048 && Oo(s.alternate, s);
          break;
        default:
          Xn(i, s, d, h, a);
      }
      e = e.sibling;
    }
  }
  function Ha(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var l = t, n = e, a = n.flags;
      switch (n.tag) {
        case 22:
          Ha(l, n), a & 2048 && zo(n.alternate, n);
          break;
        case 24:
          Ha(l, n), a & 2048 && Oo(n.alternate, n);
          break;
        default:
          Ha(l, n);
      }
      e = e.sibling;
    }
  }
  var La = 8192;
  function Qn(t, e, l) {
    if (t.subtreeFlags & La) for (t = t.child; t !== null; ) Dd(t, e, l), t = t.sibling;
  }
  function Dd(t, e, l) {
    switch (t.tag) {
      case 26:
        Qn(t, e, l), t.flags & La && t.memoizedState !== null && Py(l, je, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Qn(t, e, l);
        break;
      case 3:
      case 4:
        var n = je;
        je = di(t.stateNode.containerInfo), Qn(t, e, l), je = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = La, La = 16777216, Qn(t, e, l), La = n) : Qn(t, e, l));
        break;
      default:
        Qn(t, e, l);
    }
  }
  function Cd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function qa(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var n = e[l];
        kt = n, Nd(n, t);
      }
      Cd(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Md(t), t = t.sibling;
  }
  function Md(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qa(t), t.flags & 2048 && Cl(9, t, t.return);
        break;
      case 3:
        qa(t);
        break;
      case 12:
        qa(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Pu(t)) : qa(t);
        break;
      default:
        qa(t);
    }
  }
  function Pu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var l = 0; l < e.length; l++) {
        var n = e[l];
        kt = n, Nd(n, t);
      }
      Cd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Cl(8, e, e.return), Pu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Pu(e));
          break;
        default:
          Pu(e);
      }
      t = t.sibling;
    }
  }
  function Nd(t, e) {
    for (; kt !== null; ) {
      var l = kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Cl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          xa(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, kt = n;
      else t: for (l = t; kt !== null; ) {
        n = kt;
        var a = n.sibling, i = n.return;
        if (Ed(n), n === l) {
          kt = null;
          break t;
        }
        if (a !== null) {
          a.return = i, kt = a;
          break t;
        }
        kt = i;
      }
    }
  }
  var vy = { getCacheForType: function(t) {
    var e = Ft(Ht), l = e.data.get(t);
    return l === void 0 && (l = t(), e.data.set(t, l)), l;
  }, cacheSignal: function() {
    return Ft(Ht).controller.signal;
  } }, hy = typeof WeakMap == "function" ? WeakMap : Map, xt = 0, Dt = null, ft = null, mt = 0, At = 0, pe = null, Ml = false, Vn = false, Do = false, il = 0, jt = 0, Nl = 0, rn = 0, Co = 0, Se = 0, Zn = 0, Ya = null, re = null, Mo = false, ti = 0, Rd = 0, ei = 1 / 0, li = null, Rl = null, Gt = 0, wl = null, Kn = null, cl = 0, No = 0, Ro = null, wd = null, Ga = 0, wo = null;
  function Ee() {
    return (xt & 2) !== 0 && mt !== 0 ? mt & -mt : C.T !== null ? qo() : Jr();
  }
  function jd() {
    if (Se === 0) if ((mt & 536870912) === 0 || gt) {
      var t = su;
      su <<= 1, (su & 3932160) === 0 && (su = 262144), Se = t;
    } else Se = 536870912;
    return t = ye.current, t !== null && (t.flags |= 32), Se;
  }
  function se(t, e, l) {
    (t === Dt && (At === 2 || At === 9) || t.cancelPendingCommit !== null) && (kn(t, 0), jl(t, mt, Se, false)), oa(t, l), ((xt & 2) === 0 || t !== Dt) && (t === Dt && ((xt & 2) === 0 && (rn |= l), jt === 4 && jl(t, mt, Se, false)), Ge(t));
  }
  function Ud(t, e, l) {
    if ((xt & 6) !== 0) throw Error(o(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ca(t, e), a = n ? by(t, e) : Uo(t, e, true), i = n;
    do {
      if (a === 0) {
        Vn && !n && jl(t, e, 0, false);
        break;
      } else {
        if (l = t.current.alternate, i && !gy(l)) {
          a = Uo(t, e, false), i = false;
          continue;
        }
        if (a === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i) var s = 0;
          else s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            e = s;
            t: {
              var d = t;
              a = Ya;
              var h = d.current.memoizedState.isDehydrated;
              if (h && (kn(d, s).flags |= 256), s = Uo(d, s, false), s !== 2) {
                if (Do && !h) {
                  d.errorRecoveryDisabledLanes |= i, rn |= i, a = 4;
                  break t;
                }
                i = re, re = a, i !== null && (re === null ? re = i : re.push.apply(re, i));
              }
              a = s;
            }
            if (i = false, a !== 2) continue;
          }
        }
        if (a === 1) {
          kn(t, 0), jl(t, e, 0, true);
          break;
        }
        t: {
          switch (n = t, i = a, i) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              jl(n, e, Se, !Ml);
              break t;
            case 2:
              re = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (a = ti + 300 - de(), 10 < a)) {
            if (jl(n, e, Se, !Ml), du(n, 0, true) !== 0) break t;
            cl = e, n.timeoutHandle = dm(Bd.bind(null, n, l, re, li, Mo, e, Se, rn, Zn, Ml, i, "Throttled", -0, 0), a);
            break t;
          }
          Bd(n, l, re, li, Mo, e, Se, rn, Zn, Ml, i, null, -0, 0);
        }
      }
      break;
    } while (true);
    Ge(t);
  }
  function Bd(t, e, l, n, a, i, s, d, h, _, M, w, z, D) {
    if (t.timeoutHandle = -1, w = e.subtreeFlags, w & 8192 || (w & 16785408) === 16785408) {
      w = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Ke }, Dd(e, i, w);
      var k = (i & 62914560) === i ? ti - de() : (i & 4194048) === i ? Rd - de() : 0;
      if (k = t0(w, k), k !== null) {
        cl = i, t.cancelPendingCommit = k(Vd.bind(null, t, e, i, l, n, a, s, d, h, M, w, null, z, D)), jl(t, i, s, !_);
        return;
      }
    }
    Vd(t, e, i, l, n, a, s, d, h);
  }
  function gy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var n = 0; n < l.length; n++) {
        var a = l[n], i = a.getSnapshot;
        a = a.value;
        try {
          if (!he(i(), a)) return false;
        } catch {
          return false;
        }
      }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return true;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return true;
  }
  function jl(t, e, l, n) {
    e &= ~Co, e &= ~rn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var i = 31 - ve(a), s = 1 << i;
      n[i] = -1, a &= ~s;
    }
    l !== 0 && Zr(t, l, e);
  }
  function ni() {
    return (xt & 6) === 0 ? (Xa(0), false) : true;
  }
  function jo() {
    if (ft !== null) {
      if (At === 0) var t = ft.return;
      else t = ft, Fe = Pl = null, Wc(t), Hn = null, Ta = 0, t = ft;
      for (; t !== null; ) md(t.alternate, t), t = t.return;
      ft = null;
    }
  }
  function kn(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, By(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), cl = 0, jo(), Dt = t, ft = l = Je(t.current, null), mt = e, At = 0, pe = null, Ml = false, Vn = ca(t, e), Do = false, Zn = Se = Co = rn = Nl = jt = 0, re = Ya = null, Mo = false, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0) for (t = t.entanglements, n &= e; 0 < n; ) {
      var a = 31 - ve(n), i = 1 << a;
      e |= t[a], n &= ~i;
    }
    return il = e, Tu(), l;
  }
  function Hd(t, e) {
    it = null, C.H = Ra, e === Bn || e === Ru ? (e = Is(), At = 3) : e === Hc ? (e = Is(), At = 4) : At = e === fo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, pe = e, ft === null && (jt = 1, Ku(t, ze(e, t.current)));
  }
  function Ld() {
    var t = ye.current;
    return t === null ? true : (mt & 4194048) === mt ? Me === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === Me : false;
  }
  function qd() {
    var t = C.H;
    return C.H = Ra, t === null ? Ra : t;
  }
  function Yd() {
    var t = C.A;
    return C.A = vy, t;
  }
  function ai() {
    jt = 4, Ml || (mt & 4194048) !== mt && ye.current !== null || (Vn = true), (Nl & 134217727) === 0 && (rn & 134217727) === 0 || Dt === null || jl(Dt, mt, Se, false);
  }
  function Uo(t, e, l) {
    var n = xt;
    xt |= 2;
    var a = qd(), i = Yd();
    (Dt !== t || mt !== e) && (li = null, kn(t, e)), e = false;
    var s = jt;
    t: do
      try {
        if (At !== 0 && ft !== null) {
          var d = ft, h = pe;
          switch (At) {
            case 8:
              jo(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ye.current === null && (e = true);
              var _ = At;
              if (At = 0, pe = null, Jn(t, d, h, _), l && Vn) {
                s = 0;
                break t;
              }
              break;
            default:
              _ = At, At = 0, pe = null, Jn(t, d, h, _);
          }
        }
        yy(), s = jt;
        break;
      } catch (M) {
        Hd(t, M);
      }
    while (true);
    return e && t.shellSuspendCounter++, Fe = Pl = null, xt = n, C.H = a, C.A = i, ft === null && (Dt = null, mt = 0, Tu()), s;
  }
  function yy() {
    for (; ft !== null; ) Gd(ft);
  }
  function by(t, e) {
    var l = xt;
    xt |= 2;
    var n = qd(), a = Yd();
    Dt !== t || mt !== e ? (li = null, ei = de() + 500, kn(t, e)) : Vn = ca(t, e);
    t: do
      try {
        if (At !== 0 && ft !== null) {
          e = ft;
          var i = pe;
          e: switch (At) {
            case 1:
              At = 0, pe = null, Jn(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Fs(i)) {
                At = 0, pe = null, Xd(e);
                break;
              }
              e = function() {
                At !== 2 && At !== 9 || Dt !== t || (At = 7), Ge(t);
              }, i.then(e, e);
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              Fs(i) ? (At = 0, pe = null, Xd(e)) : (At = 0, pe = null, Jn(t, e, i, 7));
              break;
            case 5:
              var s = null;
              switch (ft.tag) {
                case 26:
                  s = ft.memoizedState;
                case 5:
                case 27:
                  var d = ft;
                  if (s ? Om(s) : d.stateNode.complete) {
                    At = 0, pe = null;
                    var h = d.sibling;
                    if (h !== null) ft = h;
                    else {
                      var _ = d.return;
                      _ !== null ? (ft = _, ui(_)) : ft = null;
                    }
                    break e;
                  }
              }
              At = 0, pe = null, Jn(t, e, i, 5);
              break;
            case 6:
              At = 0, pe = null, Jn(t, e, i, 6);
              break;
            case 8:
              jo(), jt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        py();
        break;
      } catch (M) {
        Hd(t, M);
      }
    while (true);
    return Fe = Pl = null, C.H = n, C.A = a, xt = l, ft !== null ? 0 : (Dt = null, mt = 0, Tu(), jt);
  }
  function py() {
    for (; ft !== null && !Xh(); ) Gd(ft);
  }
  function Gd(t) {
    var e = fd(t.alternate, t, il);
    t.memoizedProps = t.pendingProps, e === null ? ui(t) : ft = e;
  }
  function Xd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ud(l, e, e.pendingProps, e.type, void 0, mt);
        break;
      case 11:
        e = ud(l, e, e.pendingProps, e.type.render, e.ref, mt);
        break;
      case 5:
        Wc(e);
      default:
        md(l, e), e = ft = qs(e, il), e = fd(l, e, il);
    }
    t.memoizedProps = t.pendingProps, e === null ? ui(t) : ft = e;
  }
  function Jn(t, e, l, n) {
    Fe = Pl = null, Wc(e), Hn = null, Ta = 0;
    var a = e.return;
    try {
      if (cy(t, a, e, l, mt)) {
        jt = 1, Ku(t, ze(l, t.current)), ft = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw ft = a, i;
      jt = 1, Ku(t, ze(l, t.current)), ft = null;
      return;
    }
    e.flags & 32768 ? (gt || n === 1 ? t = true : Vn || (mt & 536870912) !== 0 ? t = false : (Ml = t = true, (n === 2 || n === 9 || n === 3 || n === 6) && (n = ye.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Qd(e, t)) : ui(e);
  }
  function ui(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Qd(e, Ml);
        return;
      }
      t = e.return;
      var l = sy(e.alternate, e, il);
      if (l !== null) {
        ft = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    jt === 0 && (jt = 5);
  }
  function Qd(t, e) {
    do {
      var l = fy(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, ft = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        ft = t;
        return;
      }
      ft = t = l;
    } while (t !== null);
    jt = 6, ft = null;
  }
  function Vd(t, e, l, n, a, i, s, d, h) {
    t.cancelPendingCommit = null;
    do
      ii();
    while (Gt !== 0);
    if ((xt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (i = e.lanes | e.childLanes, i |= xc, Ih(t, l, i, s, d, h), t === Dt && (ft = Dt = null, mt = 0), Kn = e, wl = t, cl = l, No = i, Ro = a, wd = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Ay(ou, function() {
        return Wd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = C.T, C.T = null, a = H.p, H.p = 2, s = xt, xt |= 4;
        try {
          dy(t, e, l);
        } finally {
          xt = s, H.p = a, C.T = n;
        }
      }
      Gt = 1, Zd(), Kd(), kd();
    }
  }
  function Zd() {
    if (Gt === 1) {
      Gt = 0;
      var t = wl, e = Kn, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null;
        var n = H.p;
        H.p = 2;
        var a = xt;
        xt |= 4;
        try {
          _d(e, t);
          var i = ko, s = Ms(t.containerInfo), d = i.focusedElem, h = i.selectionRange;
          if (s !== d && d && d.ownerDocument && Cs(d.ownerDocument.documentElement, d)) {
            if (h !== null && yc(d)) {
              var _ = h.start, M = h.end;
              if (M === void 0 && (M = _), "selectionStart" in d) d.selectionStart = _, d.selectionEnd = Math.min(M, d.value.length);
              else {
                var w = d.ownerDocument || document, z = w && w.defaultView || window;
                if (z.getSelection) {
                  var D = z.getSelection(), k = d.textContent.length, tt = Math.min(h.start, k), Ot = h.end === void 0 ? tt : Math.min(h.end, k);
                  !D.extend && tt > Ot && (s = Ot, Ot = tt, tt = s);
                  var S = Ds(d, tt), g = Ds(d, Ot);
                  if (S && g && (D.rangeCount !== 1 || D.anchorNode !== S.node || D.anchorOffset !== S.offset || D.focusNode !== g.node || D.focusOffset !== g.offset)) {
                    var T = w.createRange();
                    T.setStart(S.node, S.offset), D.removeAllRanges(), tt > Ot ? (D.addRange(T), D.extend(g.node, g.offset)) : (T.setEnd(g.node, g.offset), D.addRange(T));
                  }
                }
              }
            }
            for (w = [], D = d; D = D.parentNode; ) D.nodeType === 1 && w.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < w.length; d++) {
              var N = w[d];
              N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
            }
          }
          bi = !!Ko, ko = Ko = null;
        } finally {
          xt = a, H.p = n, C.T = l;
        }
      }
      t.current = e, Gt = 2;
    }
  }
  function Kd() {
    if (Gt === 2) {
      Gt = 0;
      var t = wl, e = Kn, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = C.T, C.T = null;
        var n = H.p;
        H.p = 2;
        var a = xt;
        xt |= 4;
        try {
          Sd(t, e.alternate, e);
        } finally {
          xt = a, H.p = n, C.T = l;
        }
      }
      Gt = 3;
    }
  }
  function kd() {
    if (Gt === 4 || Gt === 3) {
      Gt = 0, Qh();
      var t = wl, e = Kn, l = cl, n = wd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Gt = 5 : (Gt = 0, Kn = wl = null, Jd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (Rl = null), Ii(l), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function") try {
        me.onCommitFiberRoot(ia, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (n !== null) {
        e = C.T, a = H.p, H.p = 2, C.T = null;
        try {
          for (var i = t.onRecoverableError, s = 0; s < n.length; s++) {
            var d = n[s];
            i(d.value, { componentStack: d.stack });
          }
        } finally {
          C.T = e, H.p = a;
        }
      }
      (cl & 3) !== 0 && ii(), Ge(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === wo ? Ga++ : (Ga = 0, wo = t) : Ga = 0, Xa(0);
    }
  }
  function Jd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, xa(e)));
  }
  function ii() {
    return Zd(), Kd(), kd(), Wd();
  }
  function Wd() {
    if (Gt !== 5) return false;
    var t = wl, e = No;
    No = 0;
    var l = Ii(cl), n = C.T, a = H.p;
    try {
      H.p = 32 > l ? 32 : l, C.T = null, l = Ro, Ro = null;
      var i = wl, s = cl;
      if (Gt = 0, Kn = wl = null, cl = 0, (xt & 6) !== 0) throw Error(o(331));
      var d = xt;
      if (xt |= 4, Md(i.current), Od(i, i.current, s, l), xt = d, Xa(0, false), me && typeof me.onPostCommitFiberRoot == "function") try {
        me.onPostCommitFiberRoot(ia, i);
      } catch {
      }
      return true;
    } finally {
      H.p = a, C.T = n, Jd(t, e);
    }
  }
  function Fd(t, e, l) {
    e = ze(l, e), e = so(t.stateNode, e, 2), t = zl(t, e, 2), t !== null && (oa(t, 2), Ge(t));
  }
  function Tt(t, e, l) {
    if (t.tag === 3) Fd(t, t, l);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        Fd(e, t, l);
        break;
      } else if (e.tag === 1) {
        var n = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Rl === null || !Rl.has(n))) {
          t = ze(l, t), l = $f(2), n = zl(e, l, 2), n !== null && (If(l, n, e, t), oa(n, 2), Ge(n));
          break;
        }
      }
      e = e.return;
    }
  }
  function Bo(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new hy();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (Do = true, a.add(l), t = Sy.bind(null, t, e, l), e.then(t, t));
  }
  function Sy(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Dt === t && (mt & l) === l && (jt === 4 || jt === 3 && (mt & 62914560) === mt && 300 > de() - ti ? (xt & 2) === 0 && kn(t, 0) : Co |= l, Zn === mt && (Zn = 0)), Ge(t);
  }
  function $d(t, e) {
    e === 0 && (e = Vr()), t = Fl(t, e), t !== null && (oa(t, e), Ge(t));
  }
  function Ey(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), $d(t, l);
  }
  function xy(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    n !== null && n.delete(e), $d(t, l);
  }
  function Ay(t, e) {
    return Ji(t, e);
  }
  var ci = null, Wn = null, Ho = false, oi = false, Lo = false, Ul = 0;
  function Ge(t) {
    t !== Wn && t.next === null && (Wn === null ? ci = Wn = t : Wn = Wn.next = t), oi = true, Ho || (Ho = true, _y());
  }
  function Xa(t, e) {
    if (!Lo && oi) {
      Lo = true;
      do
        for (var l = false, n = ci; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var s = n.suspendedLanes, d = n.pingedLanes;
              i = (1 << 31 - ve(42 | t) + 1) - 1, i &= a & ~(s & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = true, em(n, i));
          } else i = mt, i = du(n, n === Dt ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || ca(n, i) || (l = true, em(n, i));
          n = n.next;
        }
      while (l);
      Lo = false;
    }
  }
  function Ty() {
    Id();
  }
  function Id() {
    oi = Ho = false;
    var t = 0;
    Ul !== 0 && Uy() && (t = Ul);
    for (var e = de(), l = null, n = ci; n !== null; ) {
      var a = n.next, i = Pd(n, e);
      i === 0 ? (n.next = null, l === null ? ci = a : l.next = a, a === null && (Wn = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (oi = true)), n = a;
    }
    Gt !== 0 && Gt !== 5 || Xa(t), Ul !== 0 && (Ul = 0);
  }
  function Pd(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - ve(i), d = 1 << s, h = a[s];
      h === -1 ? ((d & l) === 0 || (d & n) !== 0) && (a[s] = $h(d, e)) : h <= e && (t.expiredLanes |= d), i &= ~d;
    }
    if (e = Dt, l = mt, l = du(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n = t.callbackNode, l === 0 || t === e && (At === 2 || At === 9) || t.cancelPendingCommit !== null) return n !== null && n !== null && Wi(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || ca(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Wi(n), Ii(l)) {
        case 2:
        case 8:
          l = Xr;
          break;
        case 32:
          l = ou;
          break;
        case 268435456:
          l = Qr;
          break;
        default:
          l = ou;
      }
      return n = tm.bind(null, t), l = Ji(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Wi(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function tm(t, e) {
    if (Gt !== 0 && Gt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (ii() && t.callbackNode !== l) return null;
    var n = mt;
    return n = du(t, t === Dt ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n === 0 ? null : (Ud(t, n, e), Pd(t, de()), t.callbackNode != null && t.callbackNode === l ? tm.bind(null, t) : null);
  }
  function em(t, e) {
    if (ii()) return null;
    Ud(t, e, true);
  }
  function _y() {
    Hy(function() {
      (xt & 6) !== 0 ? Ji(Gr, Ty) : Id();
    });
  }
  function qo() {
    if (Ul === 0) {
      var t = jn;
      t === 0 && (t = ru, ru <<= 1, (ru & 261888) === 0 && (ru = 256)), Ul = t;
    }
    return Ul;
  }
  function lm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : gu("" + t);
  }
  function nm(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function zy(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var i = lm((a[ae] || null).action), s = n.submitter;
      s && (e = (e = s[ae] || null) ? lm(e.formAction) : s.getAttribute("formAction"), e !== null && (i = e, s = null));
      var d = new Su("action", "action", null, n, a);
      t.push({ event: d, listeners: [{ instance: null, listener: function() {
        if (n.defaultPrevented) {
          if (Ul !== 0) {
            var h = s ? nm(a, s) : new FormData(a);
            ao(l, { pending: true, data: h, method: a.method, action: i }, null, h);
          }
        } else typeof i == "function" && (d.preventDefault(), h = s ? nm(a, s) : new FormData(a), ao(l, { pending: true, data: h, method: a.method, action: i }, i, h));
      }, currentTarget: a }] });
    }
  }
  for (var Yo = 0; Yo < Ec.length; Yo++) {
    var Go = Ec[Yo], Oy = Go.toLowerCase(), Dy = Go[0].toUpperCase() + Go.slice(1);
    we(Oy, "on" + Dy);
  }
  we(ws, "onAnimationEnd"), we(js, "onAnimationIteration"), we(Us, "onAnimationStart"), we("dblclick", "onDoubleClick"), we("focusin", "onFocus"), we("focusout", "onBlur"), we(Vg, "onTransitionRun"), we(Zg, "onTransitionStart"), we(Kg, "onTransitionCancel"), we(Bs, "onTransitionEnd"), Sn("onMouseEnter", ["mouseout", "mouseover"]), Sn("onMouseLeave", ["mouseout", "mouseover"]), Sn("onPointerEnter", ["pointerout", "pointerover"]), Sn("onPointerLeave", ["pointerout", "pointerover"]), Kl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Kl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Kl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Kl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Kl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Kl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Qa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qa));
  function am(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e) for (var s = n.length - 1; 0 <= s; s--) {
          var d = n[s], h = d.instance, _ = d.currentTarget;
          if (d = d.listener, h !== i && a.isPropagationStopped()) break t;
          i = d, a.currentTarget = _;
          try {
            i(a);
          } catch (M) {
            Au(M);
          }
          a.currentTarget = null, i = h;
        }
        else for (s = 0; s < n.length; s++) {
          if (d = n[s], h = d.instance, _ = d.currentTarget, d = d.listener, h !== i && a.isPropagationStopped()) break t;
          i = d, a.currentTarget = _;
          try {
            i(a);
          } catch (M) {
            Au(M);
          }
          a.currentTarget = null, i = h;
        }
      }
    }
  }
  function dt(t, e) {
    var l = e[Pi];
    l === void 0 && (l = e[Pi] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (um(e, t, 2, false), l.add(n));
  }
  function Xo(t, e, l) {
    var n = 0;
    e && (n |= 4), um(l, t, n, e);
  }
  var ri = "_reactListening" + Math.random().toString(36).slice(2);
  function Qo(t) {
    if (!t[ri]) {
      t[ri] = true, $r.forEach(function(l) {
        l !== "selectionchange" && (Cy.has(l) || Xo(l, false, t), Xo(l, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ri] || (e[ri] = true, Xo("selectionchange", false, e));
    }
  }
  function um(t, e, l, n) {
    switch (jm(e)) {
      case 2:
        var a = n0;
        break;
      case 8:
        a = a0;
        break;
      default:
        a = ar;
    }
    l = a.bind(null, e, l, t), a = void 0, !oc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = true), n ? a !== void 0 ? t.addEventListener(e, l, { capture: true, passive: a }) : t.addEventListener(e, l, true) : a !== void 0 ? t.addEventListener(e, l, { passive: a }) : t.addEventListener(e, l, false);
  }
  function Vo(t, e, l, n, a) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null) t: for (; ; ) {
      if (n === null) return;
      var s = n.tag;
      if (s === 3 || s === 4) {
        var d = n.stateNode.containerInfo;
        if (d === a) break;
        if (s === 4) for (s = n.return; s !== null; ) {
          var h = s.tag;
          if ((h === 3 || h === 4) && s.stateNode.containerInfo === a) return;
          s = s.return;
        }
        for (; d !== null; ) {
          if (s = yn(d), s === null) return;
          if (h = s.tag, h === 5 || h === 6 || h === 26 || h === 27) {
            n = i = s;
            continue t;
          }
          d = d.parentNode;
        }
      }
      n = n.return;
    }
    rs(function() {
      var _ = i, M = ic(l), w = [];
      t: {
        var z = Hs.get(t);
        if (z !== void 0) {
          var D = Su, k = t;
          switch (t) {
            case "keypress":
              if (bu(l) === 0) break t;
            case "keydown":
            case "keyup":
              D = xg;
              break;
            case "focusin":
              k = "focus", D = dc;
              break;
            case "focusout":
              k = "blur", D = dc;
              break;
            case "beforeblur":
            case "afterblur":
              D = dc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = sg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = _g;
              break;
            case ws:
            case js:
            case Us:
              D = mg;
              break;
            case Bs:
              D = Og;
              break;
            case "scroll":
            case "scrollend":
              D = og;
              break;
            case "wheel":
              D = Cg;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = hg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = vs;
              break;
            case "toggle":
            case "beforetoggle":
              D = Ng;
          }
          var tt = (e & 4) !== 0, Ot = !tt && (t === "scroll" || t === "scrollend"), S = tt ? z !== null ? z + "Capture" : null : z;
          tt = [];
          for (var g = _, T; g !== null; ) {
            var N = g;
            if (T = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || T === null || S === null || (N = fa(g, S), N != null && tt.push(Va(g, N, T))), Ot) break;
            g = g.return;
          }
          0 < tt.length && (z = new D(z, k, null, l, M), w.push({ event: z, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", D = t === "mouseout" || t === "pointerout", z && l !== uc && (k = l.relatedTarget || l.fromElement) && (yn(k) || k[gn])) break t;
          if ((D || z) && (z = M.window === M ? M : (z = M.ownerDocument) ? z.defaultView || z.parentWindow : window, D ? (k = l.relatedTarget || l.toElement, D = _, k = k ? yn(k) : null, k !== null && (Ot = m(k), tt = k.tag, k !== Ot || tt !== 5 && tt !== 27 && tt !== 6) && (k = null)) : (D = null, k = _), D !== k)) {
            if (tt = ds, N = "onMouseLeave", S = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (tt = vs, N = "onPointerLeave", S = "onPointerEnter", g = "pointer"), Ot = D == null ? z : sa(D), T = k == null ? z : sa(k), z = new tt(N, g + "leave", D, l, M), z.target = Ot, z.relatedTarget = T, N = null, yn(M) === _ && (tt = new tt(S, g + "enter", k, l, M), tt.target = T, tt.relatedTarget = Ot, N = tt), Ot = N, D && k) e: {
              for (tt = My, S = D, g = k, T = 0, N = S; N; N = tt(N)) T++;
              N = 0;
              for (var F = g; F; F = tt(F)) N++;
              for (; 0 < T - N; ) S = tt(S), T--;
              for (; 0 < N - T; ) g = tt(g), N--;
              for (; T--; ) {
                if (S === g || g !== null && S === g.alternate) {
                  tt = S;
                  break e;
                }
                S = tt(S), g = tt(g);
              }
              tt = null;
            }
            else tt = null;
            D !== null && im(w, z, D, tt, false), k !== null && Ot !== null && im(w, Ot, k, tt, true);
          }
        }
        t: {
          if (z = _ ? sa(_) : window, D = z.nodeName && z.nodeName.toLowerCase(), D === "select" || D === "input" && z.type === "file") var pt = xs;
          else if (Ss(z)) if (As) pt = Gg;
          else {
            pt = qg;
            var J = Lg;
          }
          else D = z.nodeName, !D || D.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? _ && ac(_.elementType) && (pt = xs) : pt = Yg;
          if (pt && (pt = pt(t, _))) {
            Es(w, pt, l, M);
            break t;
          }
          J && J(t, z, _), t === "focusout" && _ && z.type === "number" && _.memoizedProps.value != null && nc(z, "number", z.value);
        }
        switch (J = _ ? sa(_) : window, t) {
          case "focusin":
            (Ss(J) || J.contentEditable === "true") && (zn = J, bc = _, pa = null);
            break;
          case "focusout":
            pa = bc = zn = null;
            break;
          case "mousedown":
            pc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pc = false, Ns(w, l, M);
            break;
          case "selectionchange":
            if (Qg) break;
          case "keydown":
          case "keyup":
            Ns(w, l, M);
        }
        var ct;
        if (vc) t: {
          switch (t) {
            case "compositionstart":
              var vt = "onCompositionStart";
              break t;
            case "compositionend":
              vt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              vt = "onCompositionUpdate";
              break t;
          }
          vt = void 0;
        }
        else _n ? bs(t, l) && (vt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (vt = "onCompositionStart");
        vt && (hs && l.locale !== "ko" && (_n || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && _n && (ct = ss()) : (pl = M, rc = "value" in pl ? pl.value : pl.textContent, _n = true)), J = si(_, vt), 0 < J.length && (vt = new ms(vt, t, null, l, M), w.push({ event: vt, listeners: J }), ct ? vt.data = ct : (ct = ps(l), ct !== null && (vt.data = ct)))), (ct = wg ? jg(t, l) : Ug(t, l)) && (vt = si(_, "onBeforeInput"), 0 < vt.length && (J = new ms("onBeforeInput", "beforeinput", null, l, M), w.push({ event: J, listeners: vt }), J.data = ct)), zy(w, t, _, l, M);
      }
      am(w, e);
    });
  }
  function Va(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function si(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = fa(t, l), a != null && n.unshift(Va(t, a, i)), a = fa(t, e), a != null && n.push(Va(t, a, i))), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function My(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function im(t, e, l, n, a) {
    for (var i = e._reactName, s = []; l !== null && l !== n; ) {
      var d = l, h = d.alternate, _ = d.stateNode;
      if (d = d.tag, h !== null && h === n) break;
      d !== 5 && d !== 26 && d !== 27 || _ === null || (h = _, a ? (_ = fa(l, i), _ != null && s.unshift(Va(l, _, h))) : a || (_ = fa(l, i), _ != null && s.push(Va(l, _, h)))), l = l.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var Ny = /\r\n?/g, Ry = /\u0000|\uFFFD/g;
  function cm(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ny, `
`).replace(Ry, "");
  }
  function om(t, e) {
    return e = cm(e), cm(t) === e;
  }
  function zt(t, e, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || xn(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && xn(t, "" + n);
        break;
      case "className":
        vu(t, "class", n);
        break;
      case "tabIndex":
        vu(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        vu(t, l, n);
        break;
      case "style":
        cs(t, n, i);
        break;
      case "data":
        if (e !== "object") {
          vu(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = gu("" + n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof i == "function" && (l === "formAction" ? (e !== "input" && zt(t, e, "name", a.name, a, null), zt(t, e, "formEncType", a.formEncType, a, null), zt(t, e, "formMethod", a.formMethod, a, null), zt(t, e, "formTarget", a.formTarget, a, null)) : (zt(t, e, "encType", a.encType, a, null), zt(t, e, "method", a.method, a, null), zt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = gu("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = Ke);
        break;
      case "onScroll":
        n != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(o(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = gu("" + n), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "" + n) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === true ? t.setAttribute(l, "") : n !== false && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), mu(t, "popover", n);
        break;
      case "xlinkActuate":
        Ze(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        Ze(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        Ze(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        Ze(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        Ze(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        Ze(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        Ze(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        Ze(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        Ze(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        mu(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = ig.get(l) || l, mu(t, l, n));
    }
  }
  function Zo(t, e, l, n, a, i) {
    switch (l) {
      case "style":
        cs(t, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(o(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? xn(t, n) : (typeof n == "number" || typeof n == "bigint") && xn(t, "" + n);
        break;
      case "onScroll":
        n != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && dt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = Ke);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ir.hasOwnProperty(l)) t: {
          if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), i = t[ae] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, a), typeof n == "function")) {
            typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
            break t;
          }
          l in t ? t[l] = n : n === true ? t.setAttribute(l, "") : mu(t, l, n);
        }
    }
  }
  function It(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var n = false, a = false, i;
        for (i in l) if (l.hasOwnProperty(i)) {
          var s = l[i];
          if (s != null) switch (i) {
            case "src":
              n = true;
              break;
            case "srcSet":
              a = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, e));
            default:
              zt(t, e, i, s, l, null);
          }
        }
        a && zt(t, e, "srcSet", l.srcSet, l, null), n && zt(t, e, "src", l.src, l, null);
        return;
      case "input":
        dt("invalid", t);
        var d = i = s = a = null, h = null, _ = null;
        for (n in l) if (l.hasOwnProperty(n)) {
          var M = l[n];
          if (M != null) switch (n) {
            case "name":
              a = M;
              break;
            case "type":
              s = M;
              break;
            case "checked":
              h = M;
              break;
            case "defaultChecked":
              _ = M;
              break;
            case "value":
              i = M;
              break;
            case "defaultValue":
              d = M;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (M != null) throw Error(o(137, e));
              break;
            default:
              zt(t, e, n, M, l, null);
          }
        }
        ns(t, i, d, h, _, s, a, false);
        return;
      case "select":
        dt("invalid", t), n = s = i = null;
        for (a in l) if (l.hasOwnProperty(a) && (d = l[a], d != null)) switch (a) {
          case "value":
            i = d;
            break;
          case "defaultValue":
            s = d;
            break;
          case "multiple":
            n = d;
          default:
            zt(t, e, a, d, l, null);
        }
        e = i, l = s, t.multiple = !!n, e != null ? En(t, !!n, e, false) : l != null && En(t, !!n, l, true);
        return;
      case "textarea":
        dt("invalid", t), i = a = n = null;
        for (s in l) if (l.hasOwnProperty(s) && (d = l[s], d != null)) switch (s) {
          case "value":
            n = d;
            break;
          case "defaultValue":
            a = d;
            break;
          case "children":
            i = d;
            break;
          case "dangerouslySetInnerHTML":
            if (d != null) throw Error(o(91));
            break;
          default:
            zt(t, e, s, d, l, null);
        }
        us(t, n, a, i);
        return;
      case "option":
        for (h in l) if (l.hasOwnProperty(h) && (n = l[h], n != null)) switch (h) {
          case "selected":
            t.selected = n && typeof n != "function" && typeof n != "symbol";
            break;
          default:
            zt(t, e, h, n, l, null);
        }
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Qa.length; n++) dt(Qa[n], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in l) if (l.hasOwnProperty(_) && (n = l[_], n != null)) switch (_) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(137, e));
          default:
            zt(t, e, _, n, l, null);
        }
        return;
      default:
        if (ac(e)) {
          for (M in l) l.hasOwnProperty(M) && (n = l[M], n !== void 0 && Zo(t, e, M, n, l, void 0));
          return;
        }
    }
    for (d in l) l.hasOwnProperty(d) && (n = l[d], n != null && zt(t, e, d, n, l, null));
  }
  function wy(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, i = null, s = null, d = null, h = null, _ = null, M = null;
        for (D in l) {
          var w = l[D];
          if (l.hasOwnProperty(D) && w != null) switch (D) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              h = w;
            default:
              n.hasOwnProperty(D) || zt(t, e, D, null, n, w);
          }
        }
        for (var z in n) {
          var D = n[z];
          if (w = l[z], n.hasOwnProperty(z) && (D != null || w != null)) switch (z) {
            case "type":
              i = D;
              break;
            case "name":
              a = D;
              break;
            case "checked":
              _ = D;
              break;
            case "defaultChecked":
              M = D;
              break;
            case "value":
              s = D;
              break;
            case "defaultValue":
              d = D;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (D != null) throw Error(o(137, e));
              break;
            default:
              D !== w && zt(t, e, z, D, n, w);
          }
        }
        lc(t, s, d, h, _, M, i, a);
        return;
      case "select":
        D = s = d = z = null;
        for (i in l) if (h = l[i], l.hasOwnProperty(i) && h != null) switch (i) {
          case "value":
            break;
          case "multiple":
            D = h;
          default:
            n.hasOwnProperty(i) || zt(t, e, i, null, n, h);
        }
        for (a in n) if (i = n[a], h = l[a], n.hasOwnProperty(a) && (i != null || h != null)) switch (a) {
          case "value":
            z = i;
            break;
          case "defaultValue":
            d = i;
            break;
          case "multiple":
            s = i;
          default:
            i !== h && zt(t, e, a, i, n, h);
        }
        e = d, l = s, n = D, z != null ? En(t, !!l, z, false) : !!n != !!l && (e != null ? En(t, !!l, e, true) : En(t, !!l, l ? [] : "", false));
        return;
      case "textarea":
        D = z = null;
        for (d in l) if (a = l[d], l.hasOwnProperty(d) && a != null && !n.hasOwnProperty(d)) switch (d) {
          case "value":
            break;
          case "children":
            break;
          default:
            zt(t, e, d, null, n, a);
        }
        for (s in n) if (a = n[s], i = l[s], n.hasOwnProperty(s) && (a != null || i != null)) switch (s) {
          case "value":
            z = a;
            break;
          case "defaultValue":
            D = a;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (a != null) throw Error(o(91));
            break;
          default:
            a !== i && zt(t, e, s, a, n, i);
        }
        as(t, z, D);
        return;
      case "option":
        for (var k in l) if (z = l[k], l.hasOwnProperty(k) && z != null && !n.hasOwnProperty(k)) switch (k) {
          case "selected":
            t.selected = false;
            break;
          default:
            zt(t, e, k, null, n, z);
        }
        for (h in n) if (z = n[h], D = l[h], n.hasOwnProperty(h) && z !== D && (z != null || D != null)) switch (h) {
          case "selected":
            t.selected = z && typeof z != "function" && typeof z != "symbol";
            break;
          default:
            zt(t, e, h, z, n, D);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var tt in l) z = l[tt], l.hasOwnProperty(tt) && z != null && !n.hasOwnProperty(tt) && zt(t, e, tt, null, n, z);
        for (_ in n) if (z = n[_], D = l[_], n.hasOwnProperty(_) && z !== D && (z != null || D != null)) switch (_) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (z != null) throw Error(o(137, e));
            break;
          default:
            zt(t, e, _, z, n, D);
        }
        return;
      default:
        if (ac(e)) {
          for (var Ot in l) z = l[Ot], l.hasOwnProperty(Ot) && z !== void 0 && !n.hasOwnProperty(Ot) && Zo(t, e, Ot, void 0, n, z);
          for (M in n) z = n[M], D = l[M], !n.hasOwnProperty(M) || z === D || z === void 0 && D === void 0 || Zo(t, e, M, z, n, D);
          return;
        }
    }
    for (var S in l) z = l[S], l.hasOwnProperty(S) && z != null && !n.hasOwnProperty(S) && zt(t, e, S, null, n, z);
    for (w in n) z = n[w], D = l[w], !n.hasOwnProperty(w) || z === D || z == null && D == null || zt(t, e, w, z, n, D);
  }
  function rm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function jy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, s = a.initiatorType, d = a.duration;
        if (i && d && rm(s)) {
          for (s = 0, d = a.responseEnd, n += 1; n < l.length; n++) {
            var h = l[n], _ = h.startTime;
            if (_ > d) break;
            var M = h.transferSize, w = h.initiatorType;
            M && rm(w) && (h = h.responseEnd, s += M * (h < d ? 1 : (d - _) / (h - _)));
          }
          if (--n, e += 8 * (i + s) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ko = null, ko = null;
  function fi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fm(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Jo(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Wo = null;
  function Uy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Wo ? false : (Wo = t, true) : (Wo = null, false);
  }
  var dm = typeof setTimeout == "function" ? setTimeout : void 0, By = typeof clearTimeout == "function" ? clearTimeout : void 0, mm = typeof Promise == "function" ? Promise : void 0, Hy = typeof queueMicrotask == "function" ? queueMicrotask : typeof mm < "u" ? function(t) {
    return mm.resolve(null).then(t).catch(Ly);
  } : dm;
  function Ly(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Bl(t) {
    return t === "head";
  }
  function vm(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8) if (l = a.data, l === "/$" || l === "/&") {
        if (n === 0) {
          t.removeChild(a), Pn(e);
          return;
        }
        n--;
      } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") n++;
      else if (l === "html") Za(t.ownerDocument.documentElement);
      else if (l === "head") {
        l = t.ownerDocument.head, Za(l);
        for (var i = l.firstChild; i; ) {
          var s = i.nextSibling, d = i.nodeName;
          i[ra] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s;
        }
      } else l === "body" && Za(t.ownerDocument.body);
      l = a;
    } while (l);
    Pn(e);
  }
  function hm(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8) if (l = n.data, l === "/$") {
        if (t === 0) break;
        t--;
      } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function Fo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fo(l), tc(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function qy(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (n) {
        if (!t[ra]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (i !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (i = t.getAttribute("src"), (i !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (t = Ne(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Yy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ne(t.nextSibling), t === null)) return null;
    return t;
  }
  function gm(t, e) {
    for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ne(t.nextSibling), t === null)) return null;
    return t;
  }
  function $o(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Io(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Gy(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function Ne(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Po = null;
  function ym(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return Ne(t.nextSibling);
          e--;
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function bm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function pm(t, e, l) {
    switch (e = fi(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Za(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    tc(t);
  }
  var Re = /* @__PURE__ */ new Map(), Sm = /* @__PURE__ */ new Set();
  function di(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ol = H.d;
  H.d = { f: Xy, r: Qy, D: Vy, C: Zy, L: Ky, m: ky, X: Wy, S: Jy, M: Fy };
  function Xy() {
    var t = ol.f(), e = ni();
    return t || e;
  }
  function Qy(t) {
    var e = bn(t);
    e !== null && e.tag === 5 && e.type === "form" ? Hf(e) : ol.r(t);
  }
  var Fn = typeof document > "u" ? null : document;
  function Em(t, e, l) {
    var n = Fn;
    if (n && typeof e == "string" && e) {
      var a = Te(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Sm.has(a) || (Sm.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), It(e, "link", t), Kt(e), n.head.appendChild(e)));
    }
  }
  function Vy(t) {
    ol.D(t), Em("dns-prefetch", t, null);
  }
  function Zy(t, e) {
    ol.C(t, e), Em("preconnect", t, e);
  }
  function Ky(t, e, l) {
    ol.L(t, e, l);
    var n = Fn;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Te(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Te(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Te(l.imageSizes) + '"]')) : a += '[href="' + Te(t) + '"]';
      var i = a;
      switch (e) {
        case "style":
          i = $n(t);
          break;
        case "script":
          i = In(t);
      }
      Re.has(i) || (t = O({ rel: "preload", href: e === "image" && l && l.imageSrcSet ? void 0 : t, as: e }, l), Re.set(i, t), n.querySelector(a) !== null || e === "style" && n.querySelector(Ka(i)) || e === "script" && n.querySelector(ka(i)) || (e = n.createElement("link"), It(e, "link", t), Kt(e), n.head.appendChild(e)));
    }
  }
  function ky(t, e) {
    ol.m(t, e);
    var l = Fn;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Te(n) + '"][href="' + Te(t) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = In(t);
      }
      if (!Re.has(i) && (t = O({ rel: "modulepreload", href: t }, e), Re.set(i, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ka(i))) return;
        }
        n = l.createElement("link"), It(n, "link", t), Kt(n), l.head.appendChild(n);
      }
    }
  }
  function Jy(t, e, l) {
    ol.S(t, e, l);
    var n = Fn;
    if (n && t) {
      var a = pn(n).hoistableStyles, i = $n(t);
      e = e || "default";
      var s = a.get(i);
      if (!s) {
        var d = { loading: 0, preload: null };
        if (s = n.querySelector(Ka(i))) d.loading = 5;
        else {
          t = O({ rel: "stylesheet", href: t, "data-precedence": e }, l), (l = Re.get(i)) && tr(t, l);
          var h = s = n.createElement("link");
          Kt(h), It(h, "link", t), h._p = new Promise(function(_, M) {
            h.onload = _, h.onerror = M;
          }), h.addEventListener("load", function() {
            d.loading |= 1;
          }), h.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, mi(s, e, n);
        }
        s = { type: "stylesheet", instance: s, count: 1, state: d }, a.set(i, s);
      }
    }
  }
  function Wy(t, e) {
    ol.X(t, e);
    var l = Fn;
    if (l && t) {
      var n = pn(l).hoistableScripts, a = In(t), i = n.get(a);
      i || (i = l.querySelector(ka(a)), i || (t = O({ src: t, async: true }, e), (e = Re.get(a)) && er(t, e), i = l.createElement("script"), Kt(i), It(i, "link", t), l.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, n.set(a, i));
    }
  }
  function Fy(t, e) {
    ol.M(t, e);
    var l = Fn;
    if (l && t) {
      var n = pn(l).hoistableScripts, a = In(t), i = n.get(a);
      i || (i = l.querySelector(ka(a)), i || (t = O({ src: t, async: true, type: "module" }, e), (e = Re.get(a)) && er(t, e), i = l.createElement("script"), Kt(i), It(i, "link", t), l.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, n.set(a, i));
    }
  }
  function xm(t, e, l, n) {
    var a = (a = $.current) ? di(a) : null;
    if (!a) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = $n(l.href), l = pn(a).hoistableStyles, n = l.get(e), n || (n = { type: "style", instance: null, count: 0, state: null }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = $n(l.href);
          var i = pn(a).hoistableStyles, s = i.get(t);
          if (s || (a = a.ownerDocument || a, s = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(t, s), (i = a.querySelector(Ka(t))) && !i._p && (s.instance = i, s.state.loading = 5), Re.has(t) || (l = { rel: "preload", as: "style", href: l.href, crossOrigin: l.crossOrigin, integrity: l.integrity, media: l.media, hrefLang: l.hrefLang, referrerPolicy: l.referrerPolicy }, Re.set(t, l), i || $y(a, t, l, s.state))), e && n === null) throw Error(o(528, ""));
          return s;
        }
        if (e && n !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = In(l), l = pn(a).hoistableScripts, n = l.get(e), n || (n = { type: "script", instance: null, count: 0, state: null }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function $n(t) {
    return 'href="' + Te(t) + '"';
  }
  function Ka(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Am(t) {
    return O({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function $y(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), It(e, "link", l), Kt(e), t.head.appendChild(e));
  }
  function In(t) {
    return '[src="' + Te(t) + '"]';
  }
  function ka(t) {
    return "script[async]" + t;
  }
  function Tm(t, e, l) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var n = t.querySelector('style[data-href~="' + Te(l.href) + '"]');
        if (n) return e.instance = n, Kt(n), n;
        var a = O({}, l, { "data-href": l.href, "data-precedence": l.precedence, href: null, precedence: null });
        return n = (t.ownerDocument || t).createElement("style"), Kt(n), It(n, "style", a), mi(n, l.precedence, t), e.instance = n;
      case "stylesheet":
        a = $n(l.href);
        var i = t.querySelector(Ka(a));
        if (i) return e.state.loading |= 4, e.instance = i, Kt(i), i;
        n = Am(l), (a = Re.get(a)) && tr(n, a), i = (t.ownerDocument || t).createElement("link"), Kt(i);
        var s = i;
        return s._p = new Promise(function(d, h) {
          s.onload = d, s.onerror = h;
        }), It(i, "link", n), e.state.loading |= 4, mi(i, l.precedence, t), e.instance = i;
      case "script":
        return i = In(l.src), (a = t.querySelector(ka(i))) ? (e.instance = a, Kt(a), a) : (n = l, (a = Re.get(i)) && (n = O({}, l), er(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Kt(a), It(a, "link", n), t.head.appendChild(a), e.instance = a);
      case "void":
        return null;
      default:
        throw Error(o(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, mi(n, l.precedence, t));
    return e.instance;
  }
  function mi(t, e, l) {
    for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, s = 0; s < n.length; s++) {
      var d = n[s];
      if (d.dataset.precedence === e) i = d;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function tr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function er(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var vi = null;
  function _m(t, e, l) {
    if (vi === null) {
      var n = /* @__PURE__ */ new Map(), a = vi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else a = vi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[ra] || i[Jt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(e) || "";
        s = t + s;
        var d = n.get(s);
        d ? d.push(i) : n.set(s, [i]);
      }
    }
    return n;
  }
  function zm(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
  }
  function Iy(t, e, l) {
    if (l === 1 || e.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return true;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
    }
    return false;
  }
  function Om(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Py(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = $n(n.href), i = e.querySelector(Ka(a));
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = hi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Kt(i);
          return;
        }
        i = e.ownerDocument || e, n = Am(n), (a = Re.get(a)) && tr(n, a), i = i.createElement("link"), Kt(i);
        var s = i;
        s._p = new Promise(function(d, h) {
          s.onload = d, s.onerror = h;
        }), It(i, "link", n), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = hi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var lr = 0;
  function t0(t, e) {
    return t.stylesheets && t.count === 0 && yi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && yi(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && lr === 0 && (lr = 62500 * jy());
      var a = setTimeout(function() {
        if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && yi(t, t.stylesheets), t.unsuspend)) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, (t.imgBytes > lr ? 50 : 800) + e);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function hi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) yi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var gi = null;
  function yi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, gi = /* @__PURE__ */ new Map(), e.forEach(e0, t), gi = null, hi.call(t));
  }
  function e0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = gi.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), gi.set(t, l);
        for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
          var s = a[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), n = s);
        }
        n && l.set(null, n);
      }
      a = e.instance, s = a.getAttribute("data-precedence"), i = l.get(s) || n, i === n && l.set(null, a), l.set(s, a), this.count++, n = hi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ja = { $$typeof: nt, Provider: null, Consumer: null, _currentValue: P, _currentValue2: P, _threadCount: 0 };
  function l0(t, e, l, n, a, i, s, d, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fi(0), this.hiddenUpdates = Fi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Dm(t, e, l, n, a, i, s, d, h, _, M, w) {
    return t = new l0(t, e, l, s, h, _, M, w, d), e = 1, i === true && (e |= 24), i = ge(3, null, null, e), t.current = i, i.stateNode = t, e = jc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = { element: n, isDehydrated: l, cache: e }, Lc(i), t;
  }
  function Cm(t) {
    return t ? (t = Cn, t) : Cn;
  }
  function Mm(t, e, l, n, a, i) {
    a = Cm(a), n.context === null ? n.context = a : n.pendingContext = a, n = _l(e), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = zl(t, n, e), l !== null && (se(l, t, e), za(l, t, e));
  }
  function Nm(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function nr(t, e) {
    Nm(t, e), (t = t.alternate) && Nm(t, e);
  }
  function Rm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fl(t, 67108864);
      e !== null && se(e, t, 67108864), nr(t, 67108864);
    }
  }
  function wm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ee();
      e = $i(e);
      var l = Fl(t, e);
      l !== null && se(l, t, e), nr(t, e);
    }
  }
  var bi = true;
  function n0(t, e, l, n) {
    var a = C.T;
    C.T = null;
    var i = H.p;
    try {
      H.p = 2, ar(t, e, l, n);
    } finally {
      H.p = i, C.T = a;
    }
  }
  function a0(t, e, l, n) {
    var a = C.T;
    C.T = null;
    var i = H.p;
    try {
      H.p = 8, ar(t, e, l, n);
    } finally {
      H.p = i, C.T = a;
    }
  }
  function ar(t, e, l, n) {
    if (bi) {
      var a = ur(n);
      if (a === null) Vo(t, e, n, pi, l), Um(t, n);
      else if (i0(a, t, e, l, n)) n.stopPropagation();
      else if (Um(t, n), e & 4 && -1 < u0.indexOf(t)) {
        for (; a !== null; ) {
          var i = bn(a);
          if (i !== null) switch (i.tag) {
            case 3:
              if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                var s = Zl(i.pendingLanes);
                if (s !== 0) {
                  var d = i;
                  for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                    var h = 1 << 31 - ve(s);
                    d.entanglements[1] |= h, s &= ~h;
                  }
                  Ge(i), (xt & 6) === 0 && (ei = de() + 500, Xa(0));
                }
              }
              break;
            case 31:
            case 13:
              d = Fl(i, 2), d !== null && se(d, i, 2), ni(), nr(i, 2);
          }
          if (i = ur(n), i === null && Vo(t, e, n, pi, l), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else Vo(t, e, n, null, l);
    }
  }
  function ur(t) {
    return t = ic(t), ir(t);
  }
  var pi = null;
  function ir(t) {
    if (pi = null, t = yn(t), t !== null) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = b(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return pi = t, null;
  }
  function jm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Vh()) {
          case Gr:
            return 2;
          case Xr:
            return 8;
          case ou:
          case Zh:
            return 32;
          case Qr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cr = false, Hl = null, Ll = null, ql = null, Wa = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Yl = [], u0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Um(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Hl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ll = null;
        break;
      case "mouseover":
      case "mouseout":
        ql = null;
        break;
      case "pointerover":
      case "pointerout":
        Wa.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fa.delete(e.pointerId);
    }
  }
  function $a(t, e, l, n, a, i) {
    return t === null || t.nativeEvent !== i ? (t = { blockedOn: e, domEventName: l, eventSystemFlags: n, nativeEvent: i, targetContainers: [a] }, e !== null && (e = bn(e), e !== null && Rm(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function i0(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Hl = $a(Hl, t, e, l, n, a), true;
      case "dragenter":
        return Ll = $a(Ll, t, e, l, n, a), true;
      case "mouseover":
        return ql = $a(ql, t, e, l, n, a), true;
      case "pointerover":
        var i = a.pointerId;
        return Wa.set(i, $a(Wa.get(i) || null, t, e, l, n, a)), true;
      case "gotpointercapture":
        return i = a.pointerId, Fa.set(i, $a(Fa.get(i) || null, t, e, l, n, a)), true;
    }
    return false;
  }
  function Bm(t) {
    var e = yn(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = p(l), e !== null) {
            t.blockedOn = e, Wr(t.priority, function() {
              wm(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = b(l), e !== null) {
            t.blockedOn = e, Wr(t.priority, function() {
              wm(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Si(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = ur(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(l.type, l);
        uc = n, l.target.dispatchEvent(n), uc = null;
      } else return e = bn(l), e !== null && Rm(e), t.blockedOn = l, false;
      e.shift();
    }
    return true;
  }
  function Hm(t, e, l) {
    Si(t) && l.delete(e);
  }
  function c0() {
    cr = false, Hl !== null && Si(Hl) && (Hl = null), Ll !== null && Si(Ll) && (Ll = null), ql !== null && Si(ql) && (ql = null), Wa.forEach(Hm), Fa.forEach(Hm);
  }
  function Ei(t, e) {
    t.blockedOn === e && (t.blockedOn = null, cr || (cr = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, c0)));
  }
  var xi = null;
  function Lm(t) {
    xi !== t && (xi = t, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
      xi === t && (xi = null);
      for (var e = 0; e < t.length; e += 3) {
        var l = t[e], n = t[e + 1], a = t[e + 2];
        if (typeof n != "function") {
          if (ir(n || l) === null) continue;
          break;
        }
        var i = bn(l);
        i !== null && (t.splice(e, 3), e -= 3, ao(i, { pending: true, data: a, method: l.method, action: n }, n, a));
      }
    }));
  }
  function Pn(t) {
    function e(h) {
      return Ei(h, t);
    }
    Hl !== null && Ei(Hl, t), Ll !== null && Ei(Ll, t), ql !== null && Ei(ql, t), Wa.forEach(e), Fa.forEach(e);
    for (var l = 0; l < Yl.length; l++) {
      var n = Yl[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Yl.length && (l = Yl[0], l.blockedOn === null); ) Bm(l), l.blockedOn === null && Yl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (n = 0; n < l.length; n += 3) {
      var a = l[n], i = l[n + 1], s = a[ae] || null;
      if (typeof i == "function") s || Lm(l);
      else if (s) {
        var d = null;
        if (i && i.hasAttribute("formAction")) {
          if (a = i, s = i[ae] || null) d = s.formAction;
          else if (ir(a) !== null) continue;
        } else d = s.action;
        typeof d == "function" ? l[n + 1] = d : (l.splice(n, 3), n -= 3), Lm(l);
      }
    }
  }
  function qm() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({ handler: function() {
        return new Promise(function(s) {
          return a = s;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function e() {
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, { state: i.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var n = false, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
      };
    }
  }
  function or(t) {
    this._internalRoot = t;
  }
  Ai.prototype.render = or.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var l = e.current, n = Ee();
    Mm(l, n, t, e, null, null);
  }, Ai.prototype.unmount = or.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Mm(t.current, 2, null, t, null, null), ni(), e[gn] = null;
    }
  };
  function Ai(t) {
    this._internalRoot = t;
  }
  Ai.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Jr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Yl.length && e !== 0 && e < Yl[l].priority; l++) ;
      Yl.splice(l, 0, t), l === 0 && Bm(t);
    }
  };
  var Ym = c.version;
  if (Ym !== "19.2.4") throw Error(o(527, Ym, "19.2.4"));
  H.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = v(e), t = t !== null ? R(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var o0 = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: C, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber) try {
      ia = Ti.inject(o0), me = Ti;
    } catch {
    }
  }
  return Pa.createRoot = function(t, e) {
    if (!f(t)) throw Error(o(299));
    var l = false, n = "", a = kf, i = Jf, s = Wf;
    return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = Dm(t, 1, false, null, null, l, n, null, a, i, s, qm), t[gn] = e.current, Qo(t), new or(e);
  }, Pa.hydrateRoot = function(t, e, l) {
    if (!f(t)) throw Error(o(299));
    var n = false, a = "", i = kf, s = Jf, d = Wf, h = null;
    return l != null && (l.unstable_strictMode === true && (n = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = Dm(t, 1, true, e, l ?? null, n, a, h, i, s, d, qm), e.context = Cm(null), l = e.current, n = Ee(), n = $i(n), a = _l(n), a.callback = null, zl(l, a, n), l = n, e.current.lanes = l, oa(e, l), Ge(e), t[gn] = e.current, Qo(t), new Ai(e);
  }, Pa.version = "19.2.4", Pa;
}
var Fm;
function b0() {
  if (Fm) return fr.exports;
  Fm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
    } catch (c) {
      console.error(c);
    }
  }
  return u(), fr.exports = y0(), fr.exports;
}
var p0 = b0();
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ov = (...u) => u.filter((c, r, o) => !!c && c.trim() !== "" && o.indexOf(c) === r).join(" ").trim();
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const S0 = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const E0 = (u) => u.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, r, o) => o ? o.toUpperCase() : r.toLowerCase());
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $m = (u) => {
  const c = E0(u);
  return c.charAt(0).toUpperCase() + c.slice(1);
};
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hr = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const x0 = (u) => {
  for (const c in u) if (c.startsWith("aria-") || c === "role" || c === "title") return true;
  return false;
}, A0 = A.createContext({}), T0 = () => A.useContext(A0), _0 = A.forwardRef(({ color: u, size: c, strokeWidth: r, absoluteStrokeWidth: o, className: f = "", children: m, iconNode: p, ...b }, E) => {
  const { size: v = 24, strokeWidth: R = 2, absoluteStrokeWidth: O = false, color: B = "currentColor", className: X = "" } = T0() ?? {}, et = o ?? O ? Number(r ?? R) * 24 / Number(c ?? v) : r ?? R;
  return A.createElement("svg", { ref: E, ...hr, width: c ?? v ?? hr.width, height: c ?? v ?? hr.height, stroke: u ?? B, strokeWidth: et, className: Ov("lucide", X, f), ...!m && !x0(b) && { "aria-hidden": "true" }, ...b }, [...p.map(([U, Q]) => A.createElement(U, Q)), ...Array.isArray(m) ? m : [m]]);
});
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nr = (u, c) => {
  const r = A.forwardRef(({ className: o, ...f }, m) => A.createElement(_0, { ref: m, iconNode: c, className: Ov(`lucide-${S0($m(u))}`, `lucide-${u}`, o), ...f }));
  return r.displayName = $m(u), r;
};
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const z0 = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]], O0 = Nr("file", z0);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const D0 = [["path", { d: "M10 11v6", key: "nco0om" }], ["path", { d: "M14 11v6", key: "outv1u" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]], C0 = Nr("trash-2", D0);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const M0 = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]], N0 = Nr("upload", M0), Im = (u) => {
  let c;
  const r = /* @__PURE__ */ new Set(), o = (v, R) => {
    const O = typeof v == "function" ? v(c) : v;
    if (!Object.is(O, c)) {
      const B = c;
      c = R ?? (typeof O != "object" || O === null) ? O : Object.assign({}, c, O), r.forEach((X) => X(c, B));
    }
  }, f = () => c, b = { setState: o, getState: f, getInitialState: () => E, subscribe: (v) => (r.add(v), () => r.delete(v)) }, E = c = u(o, f, b);
  return b;
}, R0 = ((u) => u ? Im(u) : Im), w0 = (u) => u;
function j0(u, c = w0) {
  const r = lu.useSyncExternalStore(u.subscribe, lu.useCallback(() => c(u.getState()), [u, c]), lu.useCallback(() => c(u.getInitialState()), [u, c]));
  return lu.useDebugValue(r), r;
}
const Pm = (u) => {
  const c = R0(u), r = (o) => j0(c, o);
  return Object.assign(r, c), r;
}, U0 = ((u) => u ? Pm(u) : Pm);
let _i = null;
class Rr {
  constructor(c) {
    this.db = c;
  }
  static async new() {
    return new Promise((c) => {
      const r = indexedDB.open("B_VISUALIZER");
      r.onblocked = function(o) {
        c(new Error(`db connection blocked: ${o}`));
      }, r.onsuccess = function() {
        const o = r.result;
        c(new Rr(o));
      }, r.onerror = function(o) {
        c(new Error(`error opening db connection: ${o}`));
      }, r.onupgradeneeded = () => {
        r.result.createObjectStore("FILES", { keyPath: "id" });
      };
    });
  }
  getAll() {
    return new Promise((c) => {
      const f = this.db.transaction("FILES").objectStore("FILES").getAll();
      f.onsuccess = function() {
        f.result !== void 0 ? c(f.result.map((m) => ({ id: m.id, name: m.name, arrayBuffer: m.arrayBuffer }))) : c([]);
      }, f.onerror = function(m) {
        c(new Error(`Error getting files: ${m}`));
      };
    });
  }
  get(c) {
    return new Promise((r) => {
      const m = this.db.transaction("FILES").objectStore("FILES").get(c);
      m.onsuccess = function() {
        m.result !== void 0 ? r({ id: m.result.id, name: m.result.name, arrayBuffer: m.result.arrayBuffer }) : r(new Error("Error getting file"));
      }, m.onerror = function(p) {
        r(new Error(`Error getting file: ${p}`));
      };
    });
  }
  add(c) {
    return new Promise((r) => {
      const m = this.db.transaction("FILES", "readwrite").objectStore("FILES").put(c);
      m.onsuccess = function() {
        r();
      }, m.onerror = function() {
        r(new Error(`Error storing file: ${m.error}`));
      };
    });
  }
  remove(c) {
    return new Promise((r) => {
      const m = this.db.transaction("FILES", "readwrite").objectStore("FILES").delete(c);
      m.onsuccess = function() {
        r();
      }, m.onerror = function() {
        r(new Error(`Error deleting file: ${m.error}`));
      };
    });
  }
}
async function zi() {
  if (_i) return Promise.resolve(_i);
  const u = await Rr.new();
  return u instanceof Error ? u : (_i = u, _i);
}
function B0(u, c) {
  const r = Dv(u, te.__wbindgen_malloc), o = ua, f = te.details(r, o, c);
  if (f[2]) throw Li(f[1]);
  return Li(f[0]);
}
function tv(u, c, r) {
  const o = Dv(u, te.__wbindgen_malloc), f = ua, m = te.read(o, f, c, r);
  if (m[2]) throw Li(m[1]);
  return Li(m[0]);
}
function H0() {
  return { __proto__: null, "./wasm_engine_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(c, r) {
    return Error(gr(c, r));
  }, __wbg_String_8564e559799eccda: function(c, r) {
    const o = String(r), f = L0(o, te.__wbindgen_malloc, te.__wbindgen_realloc), m = ua;
    ev().setInt32(c + 4, m, true), ev().setInt32(c + 0, f, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(c, r) {
    throw new Error(gr(c, r));
  }, __wbg_new_02d162bc6cf02f60: function() {
    return new Object();
  }, __wbg_new_310879b66b6e95e1: function() {
    return new Array();
  }, __wbg_set_6be42768c690e380: function(c, r, o) {
    c[r] = o;
  }, __wbg_set_78ea6a19f4818587: function(c, r, o) {
    c[r >>> 0] = o;
  }, __wbindgen_cast_0000000000000001: function(c) {
    return c;
  }, __wbindgen_cast_0000000000000002: function(c, r) {
    return gr(c, r);
  }, __wbindgen_cast_0000000000000003: function(c) {
    return BigInt.asUintN(64, c);
  }, __wbindgen_init_externref_table: function() {
    const c = te.__wbindgen_externrefs, r = c.grow(4);
    c.set(0, void 0), c.set(r + 0, void 0), c.set(r + 1, null), c.set(r + 2, true), c.set(r + 3, false);
  } } };
}
let dn = null;
function ev() {
  return (dn === null || dn.buffer.detached === true || dn.buffer.detached === void 0 && dn.buffer !== te.memory.buffer) && (dn = new DataView(te.memory.buffer)), dn;
}
function gr(u, c) {
  return Y0(u >>> 0, c);
}
let nu = null;
function au() {
  return (nu === null || nu.byteLength === 0) && (nu = new Uint8Array(te.memory.buffer)), nu;
}
function Dv(u, c) {
  const r = c(u.length * 1, 1) >>> 0;
  return au().set(u, r / 1), ua = u.length, r;
}
function L0(u, c, r) {
  if (r === void 0) {
    const b = uu.encode(u), E = c(b.length, 1) >>> 0;
    return au().subarray(E, E + b.length).set(b), ua = b.length, E;
  }
  let o = u.length, f = c(o, 1) >>> 0;
  const m = au();
  let p = 0;
  for (; p < o; p++) {
    const b = u.charCodeAt(p);
    if (b > 127) break;
    m[f + p] = b;
  }
  if (p !== o) {
    p !== 0 && (u = u.slice(p)), f = r(f, o, o = p + u.length * 3, 1) >>> 0;
    const b = au().subarray(f + p, f + o), E = uu.encodeInto(u, b);
    p += E.written, f = r(f, o, p, 1) >>> 0;
  }
  return ua = p, f;
}
function Li(u) {
  const c = te.__wbindgen_externrefs.get(u);
  return te.__externref_table_dealloc(u), c;
}
let ji = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
ji.decode();
const q0 = 2146435072;
let yr = 0;
function Y0(u, c) {
  return yr += c, yr >= q0 && (ji = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), ji.decode(), yr = c), ji.decode(au().subarray(u, u + c));
}
const uu = new TextEncoder();
"encodeInto" in uu || (uu.encodeInto = function(u, c) {
  const r = uu.encode(u);
  return c.set(r), { read: u.length, written: r.length };
});
let ua = 0, te;
function G0(u, c) {
  return te = u.exports, dn = null, nu = null, te.__wbindgen_start(), te;
}
async function X0(u, c) {
  if (typeof Response == "function" && u instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(u, c);
    } catch (f) {
      if (u.ok && r(u.type) && u.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", f);
      else throw f;
    }
    const o = await u.arrayBuffer();
    return await WebAssembly.instantiate(o, c);
  } else {
    const o = await WebAssembly.instantiate(u, c);
    return o instanceof WebAssembly.Instance ? { instance: o, module: u } : o;
  }
  function r(o) {
    switch (o) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function Q0(u) {
  if (te !== void 0) return te;
  u !== void 0 && (Object.getPrototypeOf(u) === Object.prototype ? { module_or_path: u } = u : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), u === void 0 && (u = new URL("/b-visualiser/assets/wasm_engine_bg-DaS3i835.wasm", import.meta.url));
  const c = H0();
  (typeof u == "string" || typeof Request == "function" && u instanceof Request || typeof URL == "function" && u instanceof URL) && (u = fetch(u));
  const { instance: r, module: o } = await X0(await u, c);
  return G0(r);
}
const Pt = U0((u, c) => ({ files: [], selectedFile: null, rawBytes: null, loading: true, error: null, selectedByteOffset: null, bytesHighlightedRange: null, byteDetails: null, selectByte: (r) => {
  const { rawBytes: o, selectedByteOffset: f } = c();
  if (!o) return;
  if (f === r) {
    u({ selectedByteOffset: null, byteDetails: null });
    return;
  }
  const m = B0(o, r);
  u({ selectedByteOffset: r, byteDetails: m });
}, highlightExtraBytes: (r, o) => {
  u({ bytesHighlightedRange: [r, o] });
}, resetHighlightBytes: () => {
  u({ bytesHighlightedRange: null });
}, clearSelectedByte: () => u({ selectedByteOffset: null, byteDetails: null }), loadFiles: async () => {
  u({ loading: true, error: null });
  const r = await zi();
  if (r instanceof Error) u({ error: r, loading: false });
  else {
    const o = await r.getAll();
    o instanceof Error ? u({ error: o, loading: false }) : (await Q0(), u({ files: o.map((f) => ({ id: f.id, name: f.name })), loading: false }));
  }
}, addFile: async (r) => {
  u({ loading: true, error: null });
  const o = await zi();
  if (o instanceof Error) u({ error: o, loading: false });
  else {
    const f = await o.add(r);
    if (u({ loading: false }), f instanceof Error) u({ error: f, loading: false });
    else {
      const m = new Uint8Array(r.arrayBuffer);
      u({ rawBytes: m, selectedFile: { id: r.id, name: r.name, rows: tv(m, 0, m.length) } }), c().loadFiles();
    }
  }
}, selectFile: async (r) => {
  const o = await zi();
  if (o instanceof Error) {
    u({ error: o });
    return;
  }
  const f = await o.get(r);
  if (f instanceof Error) {
    u({ error: f });
    return;
  }
  const m = new Uint8Array(f.arrayBuffer);
  u({ rawBytes: m, selectedByteOffset: null, byteDetails: null, selectedFile: { id: f.id, name: f.name, rows: tv(m, 0, m.length) } });
}, removeFile: async (r) => {
  const o = await zi(), f = c().selectedFile;
  if (o instanceof Error) {
    u({ error: o });
    return;
  }
  const m = await o.get(r);
  if (m instanceof Error) {
    u({ error: m });
    return;
  }
  await o.remove(r), u({ files: c().files.filter((p) => p.id !== r), selectedFile: r === (f == null ? void 0 : f.id) ? null : f });
} })), V0 = () => {
  const { addFile: u } = Pt(), c = A.useRef(null), r = async (o) => {
    const f = o.target.files;
    if (f == null ? void 0 : f.length) {
      const m = await f[0].arrayBuffer();
      u({ arrayBuffer: m, id: f[0].name, name: f[0].name });
    }
  };
  return x.jsxs(x.Fragment, { children: [x.jsx("input", { ref: c, type: "file", onChange: r, className: "hidden" }), x.jsxs("button", { onClick: () => {
    var _a;
    return (_a = c.current) == null ? void 0 : _a.click();
  }, className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded border border-dashed border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors", children: [x.jsx(N0, { className: "w-3 h-3" }), "Upload file"] })] });
};
var Cv = zv();
const Z0 = Tv(Cv);
function lv(u, c) {
  if (typeof u == "function") return u(c);
  u != null && (u.current = c);
}
function Mv(...u) {
  return (c) => {
    let r = false;
    const o = u.map((f) => {
      const m = lv(f, c);
      return !r && typeof m == "function" && (r = true), m;
    });
    if (r) return () => {
      for (let f = 0; f < o.length; f++) {
        const m = o[f];
        typeof m == "function" ? m() : lv(u[f], null);
      }
    };
  };
}
function fl(...u) {
  return A.useCallback(Mv(...u), u);
}
function wr(u) {
  const c = k0(u), r = A.forwardRef((o, f) => {
    const { children: m, ...p } = o, b = A.Children.toArray(m), E = b.find(W0);
    if (E) {
      const v = E.props.children, R = b.map((O) => O === E ? A.Children.count(v) > 1 ? A.Children.only(null) : A.isValidElement(v) ? v.props.children : null : O);
      return x.jsx(c, { ...p, ref: f, children: A.isValidElement(v) ? A.cloneElement(v, void 0, R) : null });
    }
    return x.jsx(c, { ...p, ref: f, children: m });
  });
  return r.displayName = `${u}.Slot`, r;
}
var K0 = wr("Slot");
function k0(u) {
  const c = A.forwardRef((r, o) => {
    const { children: f, ...m } = r;
    if (A.isValidElement(f)) {
      const p = $0(f), b = F0(m, f.props);
      return f.type !== A.Fragment && (b.ref = o ? Mv(o, p) : p), A.cloneElement(f, b);
    }
    return A.Children.count(f) > 1 ? A.Children.only(null) : null;
  });
  return c.displayName = `${u}.SlotClone`, c;
}
var Nv = Symbol("radix.slottable");
function J0(u) {
  const c = ({ children: r }) => x.jsx(x.Fragment, { children: r });
  return c.displayName = `${u}.Slottable`, c.__radixId = Nv, c;
}
function W0(u) {
  return A.isValidElement(u) && typeof u.type == "function" && "__radixId" in u.type && u.type.__radixId === Nv;
}
function F0(u, c) {
  const r = { ...c };
  for (const o in c) {
    const f = u[o], m = c[o];
    /^on[A-Z]/.test(o) ? f && m ? r[o] = (...b) => {
      const E = m(...b);
      return f(...b), E;
    } : f && (r[o] = f) : o === "style" ? r[o] = { ...f, ...m } : o === "className" && (r[o] = [f, m].filter(Boolean).join(" "));
  }
  return { ...u, ...r };
}
function $0(u) {
  var _a, _b2;
  let c = (_a = Object.getOwnPropertyDescriptor(u.props, "ref")) == null ? void 0 : _a.get, r = c && "isReactWarning" in c && c.isReactWarning;
  return r ? u.ref : (c = (_b2 = Object.getOwnPropertyDescriptor(u, "ref")) == null ? void 0 : _b2.get, r = c && "isReactWarning" in c && c.isReactWarning, r ? u.props.ref : u.props.ref || u.ref);
}
var I0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], dl = I0.reduce((u, c) => {
  const r = wr(`Primitive.${c}`), o = A.forwardRef((f, m) => {
    const { asChild: p, ...b } = f, E = p ? r : c;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), x.jsx(E, { ...b, ref: m });
  });
  return o.displayName = `Primitive.${c}`, { ...u, [c]: o };
}, {});
function P0(u, c) {
  u && Cv.flushSync(() => u.dispatchEvent(c));
}
function tb(u, c) {
  const r = A.createContext(c), o = (m) => {
    const { children: p, ...b } = m, E = A.useMemo(() => b, Object.values(b));
    return x.jsx(r.Provider, { value: E, children: p });
  };
  o.displayName = u + "Provider";
  function f(m) {
    const p = A.useContext(r);
    if (p) return p;
    if (c !== void 0) return c;
    throw new Error(`\`${m}\` must be used within \`${u}\``);
  }
  return [o, f];
}
function Rv(u, c = []) {
  let r = [];
  function o(m, p) {
    const b = A.createContext(p), E = r.length;
    r = [...r, p];
    const v = (O) => {
      var _a;
      const { scope: B, children: X, ...et } = O, U = ((_a = B == null ? void 0 : B[u]) == null ? void 0 : _a[E]) || b, Q = A.useMemo(() => et, Object.values(et));
      return x.jsx(U.Provider, { value: Q, children: X });
    };
    v.displayName = m + "Provider";
    function R(O, B) {
      var _a;
      const X = ((_a = B == null ? void 0 : B[u]) == null ? void 0 : _a[E]) || b, et = A.useContext(X);
      if (et) return et;
      if (p !== void 0) return p;
      throw new Error(`\`${O}\` must be used within \`${m}\``);
    }
    return [v, R];
  }
  const f = () => {
    const m = r.map((p) => A.createContext(p));
    return function(b) {
      const E = (b == null ? void 0 : b[u]) || m;
      return A.useMemo(() => ({ [`__scope${u}`]: { ...b, [u]: E } }), [b, E]);
    };
  };
  return f.scopeName = u, [o, eb(f, ...c)];
}
function eb(...u) {
  const c = u[0];
  if (u.length === 1) return c;
  const r = () => {
    const o = u.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function(m) {
      const p = o.reduce((b, { useScope: E, scopeName: v }) => {
        const O = E(m)[`__scope${v}`];
        return { ...b, ...O };
      }, {});
      return A.useMemo(() => ({ [`__scope${c.scopeName}`]: p }), [p]);
    };
  };
  return r.scopeName = c.scopeName, r;
}
function sl(u, c, { checkForDefaultPrevented: r = true } = {}) {
  return function(f) {
    if (u == null ? void 0 : u(f), r === false || !f.defaultPrevented) return c == null ? void 0 : c(f);
  };
}
var iu = (globalThis == null ? void 0 : globalThis.document) ? A.useLayoutEffect : () => {
}, lb = _v[" useInsertionEffect ".trim().toString()] || iu;
function nb({ prop: u, defaultProp: c, onChange: r = () => {
}, caller: o }) {
  const [f, m, p] = ab({ defaultProp: c, onChange: r }), b = u !== void 0, E = b ? u : f;
  {
    const R = A.useRef(u !== void 0);
    A.useEffect(() => {
      const O = R.current;
      O !== b && console.warn(`${o} is changing from ${O ? "controlled" : "uncontrolled"} to ${b ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), R.current = b;
    }, [b, o]);
  }
  const v = A.useCallback((R) => {
    var _a;
    if (b) {
      const O = ub(R) ? R(u) : R;
      O !== u && ((_a = p.current) == null ? void 0 : _a.call(p, O));
    } else m(R);
  }, [b, u, m, p]);
  return [E, v];
}
function ab({ defaultProp: u, onChange: c }) {
  const [r, o] = A.useState(u), f = A.useRef(r), m = A.useRef(c);
  return lb(() => {
    m.current = c;
  }, [c]), A.useEffect(() => {
    var _a;
    f.current !== r && ((_a = m.current) == null ? void 0 : _a.call(m, r), f.current = r);
  }, [r, f]), [r, o, m];
}
function ub(u) {
  return typeof u == "function";
}
function ib(u, c) {
  return A.useReducer((r, o) => c[r][o] ?? r, u);
}
var Xi = (u) => {
  const { present: c, children: r } = u, o = cb(c), f = typeof r == "function" ? r({ present: o.isPresent }) : A.Children.only(r), m = fl(o.ref, ob(f));
  return typeof r == "function" || o.isPresent ? A.cloneElement(f, { ref: m }) : null;
};
Xi.displayName = "Presence";
function cb(u) {
  const [c, r] = A.useState(), o = A.useRef(null), f = A.useRef(u), m = A.useRef("none"), p = u ? "mounted" : "unmounted", [b, E] = ib(p, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return A.useEffect(() => {
    const v = Oi(o.current);
    m.current = b === "mounted" ? v : "none";
  }, [b]), iu(() => {
    const v = o.current, R = f.current;
    if (R !== u) {
      const B = m.current, X = Oi(v);
      u ? E("MOUNT") : X === "none" || (v == null ? void 0 : v.display) === "none" ? E("UNMOUNT") : E(R && B !== X ? "ANIMATION_OUT" : "UNMOUNT"), f.current = u;
    }
  }, [u, E]), iu(() => {
    if (c) {
      let v;
      const R = c.ownerDocument.defaultView ?? window, O = (X) => {
        const U = Oi(o.current).includes(CSS.escape(X.animationName));
        if (X.target === c && U && (E("ANIMATION_END"), !f.current)) {
          const Q = c.style.animationFillMode;
          c.style.animationFillMode = "forwards", v = R.setTimeout(() => {
            c.style.animationFillMode === "forwards" && (c.style.animationFillMode = Q);
          });
        }
      }, B = (X) => {
        X.target === c && (m.current = Oi(o.current));
      };
      return c.addEventListener("animationstart", B), c.addEventListener("animationcancel", O), c.addEventListener("animationend", O), () => {
        R.clearTimeout(v), c.removeEventListener("animationstart", B), c.removeEventListener("animationcancel", O), c.removeEventListener("animationend", O);
      };
    } else E("ANIMATION_END");
  }, [c, E]), { isPresent: ["mounted", "unmountSuspended"].includes(b), ref: A.useCallback((v) => {
    o.current = v ? getComputedStyle(v) : null, r(v);
  }, []) };
}
function Oi(u) {
  return (u == null ? void 0 : u.animationName) || "none";
}
function ob(u) {
  var _a, _b2;
  let c = (_a = Object.getOwnPropertyDescriptor(u.props, "ref")) == null ? void 0 : _a.get, r = c && "isReactWarning" in c && c.isReactWarning;
  return r ? u.ref : (c = (_b2 = Object.getOwnPropertyDescriptor(u, "ref")) == null ? void 0 : _b2.get, r = c && "isReactWarning" in c && c.isReactWarning, r ? u.props.ref : u.props.ref || u.ref);
}
var rb = _v[" useId ".trim().toString()] || (() => {
}), sb = 0;
function br(u) {
  const [c, r] = A.useState(rb());
  return iu(() => {
    r((o) => o ?? String(sb++));
  }, [u]), u || (c ? `radix-${c}` : "");
}
function cu(u) {
  const c = A.useRef(u);
  return A.useEffect(() => {
    c.current = u;
  }), A.useMemo(() => (...r) => {
    var _a;
    return (_a = c.current) == null ? void 0 : _a.call(c, ...r);
  }, []);
}
function fb(u, c = globalThis == null ? void 0 : globalThis.document) {
  const r = cu(u);
  A.useEffect(() => {
    const o = (f) => {
      f.key === "Escape" && r(f);
    };
    return c.addEventListener("keydown", o, { capture: true }), () => c.removeEventListener("keydown", o, { capture: true });
  }, [r, c]);
}
var db = "DismissableLayer", Or = "dismissableLayer.update", mb = "dismissableLayer.pointerDownOutside", vb = "dismissableLayer.focusOutside", nv, wv = A.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), jv = A.forwardRef((u, c) => {
  const { disableOutsidePointerEvents: r = false, onEscapeKeyDown: o, onPointerDownOutside: f, onFocusOutside: m, onInteractOutside: p, onDismiss: b, ...E } = u, v = A.useContext(wv), [R, O] = A.useState(null), B = (R == null ? void 0 : R.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, X] = A.useState({}), et = fl(c, (G) => O(G)), U = Array.from(v.layers), [Q] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1), I = U.indexOf(Q), lt = R ? U.indexOf(R) : -1, nt = v.layersWithOutsidePointerEventsDisabled.size > 0, ut = lt >= I, st = yb((G) => {
    const L = G.target, Et = [...v.branches].some((le) => le.contains(L));
    !ut || Et || (f == null ? void 0 : f(G), p == null ? void 0 : p(G), G.defaultPrevented || (b == null ? void 0 : b()));
  }, B), yt = bb((G) => {
    const L = G.target;
    [...v.branches].some((le) => le.contains(L)) || (m == null ? void 0 : m(G), p == null ? void 0 : p(G), G.defaultPrevented || (b == null ? void 0 : b()));
  }, B);
  return fb((G) => {
    lt === v.layers.size - 1 && (o == null ? void 0 : o(G), !G.defaultPrevented && b && (G.preventDefault(), b()));
  }, B), A.useEffect(() => {
    if (R) return r && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (nv = B.body.style.pointerEvents, B.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(R)), v.layers.add(R), av(), () => {
      r && v.layersWithOutsidePointerEventsDisabled.size === 1 && (B.body.style.pointerEvents = nv);
    };
  }, [R, B, r, v]), A.useEffect(() => () => {
    R && (v.layers.delete(R), v.layersWithOutsidePointerEventsDisabled.delete(R), av());
  }, [R, v]), A.useEffect(() => {
    const G = () => X({});
    return document.addEventListener(Or, G), () => document.removeEventListener(Or, G);
  }, []), x.jsx(dl.div, { ...E, ref: et, style: { pointerEvents: nt ? ut ? "auto" : "none" : void 0, ...u.style }, onFocusCapture: sl(u.onFocusCapture, yt.onFocusCapture), onBlurCapture: sl(u.onBlurCapture, yt.onBlurCapture), onPointerDownCapture: sl(u.onPointerDownCapture, st.onPointerDownCapture) });
});
jv.displayName = db;
var hb = "DismissableLayerBranch", gb = A.forwardRef((u, c) => {
  const r = A.useContext(wv), o = A.useRef(null), f = fl(c, o);
  return A.useEffect(() => {
    const m = o.current;
    if (m) return r.branches.add(m), () => {
      r.branches.delete(m);
    };
  }, [r.branches]), x.jsx(dl.div, { ...u, ref: f });
});
gb.displayName = hb;
function yb(u, c = globalThis == null ? void 0 : globalThis.document) {
  const r = cu(u), o = A.useRef(false), f = A.useRef(() => {
  });
  return A.useEffect(() => {
    const m = (b) => {
      if (b.target && !o.current) {
        let E = function() {
          Uv(mb, r, v, { discrete: true });
        };
        const v = { originalEvent: b };
        b.pointerType === "touch" ? (c.removeEventListener("click", f.current), f.current = E, c.addEventListener("click", f.current, { once: true })) : E();
      } else c.removeEventListener("click", f.current);
      o.current = false;
    }, p = window.setTimeout(() => {
      c.addEventListener("pointerdown", m);
    }, 0);
    return () => {
      window.clearTimeout(p), c.removeEventListener("pointerdown", m), c.removeEventListener("click", f.current);
    };
  }, [c, r]), { onPointerDownCapture: () => o.current = true };
}
function bb(u, c = globalThis == null ? void 0 : globalThis.document) {
  const r = cu(u), o = A.useRef(false);
  return A.useEffect(() => {
    const f = (m) => {
      m.target && !o.current && Uv(vb, r, { originalEvent: m }, { discrete: false });
    };
    return c.addEventListener("focusin", f), () => c.removeEventListener("focusin", f);
  }, [c, r]), { onFocusCapture: () => o.current = true, onBlurCapture: () => o.current = false };
}
function av() {
  const u = new CustomEvent(Or);
  document.dispatchEvent(u);
}
function Uv(u, c, r, { discrete: o }) {
  const f = r.originalEvent.target, m = new CustomEvent(u, { bubbles: false, cancelable: true, detail: r });
  c && f.addEventListener(u, c, { once: true }), o ? P0(f, m) : f.dispatchEvent(m);
}
var pr = "focusScope.autoFocusOnMount", Sr = "focusScope.autoFocusOnUnmount", uv = { bubbles: false, cancelable: true }, pb = "FocusScope", Bv = A.forwardRef((u, c) => {
  const { loop: r = false, trapped: o = false, onMountAutoFocus: f, onUnmountAutoFocus: m, ...p } = u, [b, E] = A.useState(null), v = cu(f), R = cu(m), O = A.useRef(null), B = fl(c, (U) => E(U)), X = A.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  A.useEffect(() => {
    if (o) {
      let U = function(nt) {
        if (X.paused || !b) return;
        const ut = nt.target;
        b.contains(ut) ? O.current = ut : Ql(O.current, { select: true });
      }, Q = function(nt) {
        if (X.paused || !b) return;
        const ut = nt.relatedTarget;
        ut !== null && (b.contains(ut) || Ql(O.current, { select: true }));
      }, I = function(nt) {
        if (document.activeElement === document.body) for (const st of nt) st.removedNodes.length > 0 && Ql(b);
      };
      document.addEventListener("focusin", U), document.addEventListener("focusout", Q);
      const lt = new MutationObserver(I);
      return b && lt.observe(b, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", U), document.removeEventListener("focusout", Q), lt.disconnect();
      };
    }
  }, [o, b, X.paused]), A.useEffect(() => {
    if (b) {
      cv.add(X);
      const U = document.activeElement;
      if (!b.contains(U)) {
        const I = new CustomEvent(pr, uv);
        b.addEventListener(pr, v), b.dispatchEvent(I), I.defaultPrevented || (Sb(_b(Hv(b)), { select: true }), document.activeElement === U && Ql(b));
      }
      return () => {
        b.removeEventListener(pr, v), setTimeout(() => {
          const I = new CustomEvent(Sr, uv);
          b.addEventListener(Sr, R), b.dispatchEvent(I), I.defaultPrevented || Ql(U ?? document.body, { select: true }), b.removeEventListener(Sr, R), cv.remove(X);
        }, 0);
      };
    }
  }, [b, v, R, X]);
  const et = A.useCallback((U) => {
    if (!r && !o || X.paused) return;
    const Q = U.key === "Tab" && !U.altKey && !U.ctrlKey && !U.metaKey, I = document.activeElement;
    if (Q && I) {
      const lt = U.currentTarget, [nt, ut] = Eb(lt);
      nt && ut ? !U.shiftKey && I === ut ? (U.preventDefault(), r && Ql(nt, { select: true })) : U.shiftKey && I === nt && (U.preventDefault(), r && Ql(ut, { select: true })) : I === lt && U.preventDefault();
    }
  }, [r, o, X.paused]);
  return x.jsx(dl.div, { tabIndex: -1, ...p, ref: B, onKeyDown: et });
});
Bv.displayName = pb;
function Sb(u, { select: c = false } = {}) {
  const r = document.activeElement;
  for (const o of u) if (Ql(o, { select: c }), document.activeElement !== r) return;
}
function Eb(u) {
  const c = Hv(u), r = iv(c, u), o = iv(c.reverse(), u);
  return [r, o];
}
function Hv(u) {
  const c = [], r = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const f = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || f ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) c.push(r.currentNode);
  return c;
}
function iv(u, c) {
  for (const r of u) if (!xb(r, { upTo: c })) return r;
}
function xb(u, { upTo: c }) {
  if (getComputedStyle(u).visibility === "hidden") return true;
  for (; u; ) {
    if (c !== void 0 && u === c) return false;
    if (getComputedStyle(u).display === "none") return true;
    u = u.parentElement;
  }
  return false;
}
function Ab(u) {
  return u instanceof HTMLInputElement && "select" in u;
}
function Ql(u, { select: c = false } = {}) {
  if (u && u.focus) {
    const r = document.activeElement;
    u.focus({ preventScroll: true }), u !== r && Ab(u) && c && u.select();
  }
}
var cv = Tb();
function Tb() {
  let u = [];
  return { add(c) {
    const r = u[0];
    c !== r && (r == null ? void 0 : r.pause()), u = ov(u, c), u.unshift(c);
  }, remove(c) {
    var _a;
    u = ov(u, c), (_a = u[0]) == null ? void 0 : _a.resume();
  } };
}
function ov(u, c) {
  const r = [...u], o = r.indexOf(c);
  return o !== -1 && r.splice(o, 1), r;
}
function _b(u) {
  return u.filter((c) => c.tagName !== "A");
}
var zb = "Portal", Lv = A.forwardRef((u, c) => {
  var _a;
  const { container: r, ...o } = u, [f, m] = A.useState(false);
  iu(() => m(true), []);
  const p = r || f && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return p ? Z0.createPortal(x.jsx(dl.div, { ...o, ref: c }), p) : null;
});
Lv.displayName = zb;
var Er = 0;
function Ob() {
  A.useEffect(() => {
    const u = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", u[0] ?? rv()), document.body.insertAdjacentElement("beforeend", u[1] ?? rv()), Er++, () => {
      Er === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((c) => c.remove()), Er--;
    };
  }, []);
}
function rv() {
  const u = document.createElement("span");
  return u.setAttribute("data-radix-focus-guard", ""), u.tabIndex = 0, u.style.outline = "none", u.style.opacity = "0", u.style.position = "fixed", u.style.pointerEvents = "none", u;
}
var Qe = function() {
  return Qe = Object.assign || function(c) {
    for (var r, o = 1, f = arguments.length; o < f; o++) {
      r = arguments[o];
      for (var m in r) Object.prototype.hasOwnProperty.call(r, m) && (c[m] = r[m]);
    }
    return c;
  }, Qe.apply(this, arguments);
};
function qv(u, c) {
  var r = {};
  for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && c.indexOf(o) < 0 && (r[o] = u[o]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function") for (var f = 0, o = Object.getOwnPropertySymbols(u); f < o.length; f++) c.indexOf(o[f]) < 0 && Object.prototype.propertyIsEnumerable.call(u, o[f]) && (r[o[f]] = u[o[f]]);
  return r;
}
function Db(u, c, r) {
  if (r || arguments.length === 2) for (var o = 0, f = c.length, m; o < f; o++) (m || !(o in c)) && (m || (m = Array.prototype.slice.call(c, 0, o)), m[o] = c[o]);
  return u.concat(m || Array.prototype.slice.call(c));
}
var Ui = "right-scroll-bar-position", Bi = "width-before-scroll-bar", Cb = "with-scroll-bars-hidden", Mb = "--removed-body-scroll-bar-size";
function xr(u, c) {
  return typeof u == "function" ? u(c) : u && (u.current = c), u;
}
function Nb(u, c) {
  var r = A.useState(function() {
    return { value: u, callback: c, facade: { get current() {
      return r.value;
    }, set current(o) {
      var f = r.value;
      f !== o && (r.value = o, r.callback(o, f));
    } } };
  })[0];
  return r.callback = c, r.facade;
}
var Rb = typeof window < "u" ? A.useLayoutEffect : A.useEffect, sv = /* @__PURE__ */ new WeakMap();
function wb(u, c) {
  var r = Nb(null, function(o) {
    return u.forEach(function(f) {
      return xr(f, o);
    });
  });
  return Rb(function() {
    var o = sv.get(r);
    if (o) {
      var f = new Set(o), m = new Set(u), p = r.current;
      f.forEach(function(b) {
        m.has(b) || xr(b, null);
      }), m.forEach(function(b) {
        f.has(b) || xr(b, p);
      });
    }
    sv.set(r, u);
  }, [u]), r;
}
function jb(u) {
  return u;
}
function Ub(u, c) {
  c === void 0 && (c = jb);
  var r = [], o = false, f = { read: function() {
    if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return r.length ? r[r.length - 1] : u;
  }, useMedium: function(m) {
    var p = c(m, o);
    return r.push(p), function() {
      r = r.filter(function(b) {
        return b !== p;
      });
    };
  }, assignSyncMedium: function(m) {
    for (o = true; r.length; ) {
      var p = r;
      r = [], p.forEach(m);
    }
    r = { push: function(b) {
      return m(b);
    }, filter: function() {
      return r;
    } };
  }, assignMedium: function(m) {
    o = true;
    var p = [];
    if (r.length) {
      var b = r;
      r = [], b.forEach(m), p = r;
    }
    var E = function() {
      var R = p;
      p = [], R.forEach(m);
    }, v = function() {
      return Promise.resolve().then(E);
    };
    v(), r = { push: function(R) {
      p.push(R), v();
    }, filter: function(R) {
      return p = p.filter(R), r;
    } };
  } };
  return f;
}
function Bb(u) {
  u === void 0 && (u = {});
  var c = Ub(null);
  return c.options = Qe({ async: true, ssr: false }, u), c;
}
var Yv = function(u) {
  var c = u.sideCar, r = qv(u, ["sideCar"]);
  if (!c) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = c.read();
  if (!o) throw new Error("Sidecar medium not found");
  return A.createElement(o, Qe({}, r));
};
Yv.isSideCarExport = true;
function Hb(u, c) {
  return u.useMedium(c), Yv;
}
var Gv = Bb(), Ar = function() {
}, Qi = A.forwardRef(function(u, c) {
  var r = A.useRef(null), o = A.useState({ onScrollCapture: Ar, onWheelCapture: Ar, onTouchMoveCapture: Ar }), f = o[0], m = o[1], p = u.forwardProps, b = u.children, E = u.className, v = u.removeScrollBar, R = u.enabled, O = u.shards, B = u.sideCar, X = u.noRelative, et = u.noIsolation, U = u.inert, Q = u.allowPinchZoom, I = u.as, lt = I === void 0 ? "div" : I, nt = u.gapMode, ut = qv(u, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), st = B, yt = wb([r, c]), G = Qe(Qe({}, ut), f);
  return A.createElement(A.Fragment, null, R && A.createElement(st, { sideCar: Gv, removeScrollBar: v, shards: O, noRelative: X, noIsolation: et, inert: U, setCallbacks: m, allowPinchZoom: !!Q, lockRef: r, gapMode: nt }), p ? A.cloneElement(A.Children.only(b), Qe(Qe({}, G), { ref: yt })) : A.createElement(lt, Qe({}, G, { className: E, ref: yt }), b));
});
Qi.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
Qi.classNames = { fullWidth: Bi, zeroRight: Ui };
var Lb = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function qb() {
  if (!document) return null;
  var u = document.createElement("style");
  u.type = "text/css";
  var c = Lb();
  return c && u.setAttribute("nonce", c), u;
}
function Yb(u, c) {
  u.styleSheet ? u.styleSheet.cssText = c : u.appendChild(document.createTextNode(c));
}
function Gb(u) {
  var c = document.head || document.getElementsByTagName("head")[0];
  c.appendChild(u);
}
var Xb = function() {
  var u = 0, c = null;
  return { add: function(r) {
    u == 0 && (c = qb()) && (Yb(c, r), Gb(c)), u++;
  }, remove: function() {
    u--, !u && c && (c.parentNode && c.parentNode.removeChild(c), c = null);
  } };
}, Qb = function() {
  var u = Xb();
  return function(c, r) {
    A.useEffect(function() {
      return u.add(c), function() {
        u.remove();
      };
    }, [c && r]);
  };
}, Xv = function() {
  var u = Qb(), c = function(r) {
    var o = r.styles, f = r.dynamic;
    return u(o, f), null;
  };
  return c;
}, Vb = { left: 0, top: 0, right: 0, gap: 0 }, Tr = function(u) {
  return parseInt(u || "", 10) || 0;
}, Zb = function(u) {
  var c = window.getComputedStyle(document.body), r = c[u === "padding" ? "paddingLeft" : "marginLeft"], o = c[u === "padding" ? "paddingTop" : "marginTop"], f = c[u === "padding" ? "paddingRight" : "marginRight"];
  return [Tr(r), Tr(o), Tr(f)];
}, Kb = function(u) {
  if (u === void 0 && (u = "margin"), typeof window > "u") return Vb;
  var c = Zb(u), r = document.documentElement.clientWidth, o = window.innerWidth;
  return { left: c[0], top: c[1], right: c[2], gap: Math.max(0, o - r + c[2] - c[0]) };
}, kb = Xv(), na = "data-scroll-locked", Jb = function(u, c, r, o) {
  var f = u.left, m = u.top, p = u.right, b = u.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Cb, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(b, "px ").concat(o, `;
  }
  body[`).concat(na, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([c && "position: relative ".concat(o, ";"), r === "margin" && `
    padding-left: `.concat(f, `px;
    padding-top: `).concat(m, `px;
    padding-right: `).concat(p, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(b, "px ").concat(o, `;
    `), r === "padding" && "padding-right: ".concat(b, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ui, ` {
    right: `).concat(b, "px ").concat(o, `;
  }
  
  .`).concat(Bi, ` {
    margin-right: `).concat(b, "px ").concat(o, `;
  }
  
  .`).concat(Ui, " .").concat(Ui, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Bi, " .").concat(Bi, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(na, `] {
    `).concat(Mb, ": ").concat(b, `px;
  }
`);
}, fv = function() {
  var u = parseInt(document.body.getAttribute(na) || "0", 10);
  return isFinite(u) ? u : 0;
}, Wb = function() {
  A.useEffect(function() {
    return document.body.setAttribute(na, (fv() + 1).toString()), function() {
      var u = fv() - 1;
      u <= 0 ? document.body.removeAttribute(na) : document.body.setAttribute(na, u.toString());
    };
  }, []);
}, Fb = function(u) {
  var c = u.noRelative, r = u.noImportant, o = u.gapMode, f = o === void 0 ? "margin" : o;
  Wb();
  var m = A.useMemo(function() {
    return Kb(f);
  }, [f]);
  return A.createElement(kb, { styles: Jb(m, !c, f, r ? "" : "!important") });
}, Dr = false;
if (typeof window < "u") try {
  var Di = Object.defineProperty({}, "passive", { get: function() {
    return Dr = true, true;
  } });
  window.addEventListener("test", Di, Di), window.removeEventListener("test", Di, Di);
} catch {
  Dr = false;
}
var ta = Dr ? { passive: false } : false, $b = function(u) {
  return u.tagName === "TEXTAREA";
}, Qv = function(u, c) {
  if (!(u instanceof Element)) return false;
  var r = window.getComputedStyle(u);
  return r[c] !== "hidden" && !(r.overflowY === r.overflowX && !$b(u) && r[c] === "visible");
}, Ib = function(u) {
  return Qv(u, "overflowY");
}, Pb = function(u) {
  return Qv(u, "overflowX");
}, dv = function(u, c) {
  var r = c.ownerDocument, o = c;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var f = Vv(u, o);
    if (f) {
      var m = Zv(u, o), p = m[1], b = m[2];
      if (p > b) return true;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return false;
}, tp = function(u) {
  var c = u.scrollTop, r = u.scrollHeight, o = u.clientHeight;
  return [c, r, o];
}, ep = function(u) {
  var c = u.scrollLeft, r = u.scrollWidth, o = u.clientWidth;
  return [c, r, o];
}, Vv = function(u, c) {
  return u === "v" ? Ib(c) : Pb(c);
}, Zv = function(u, c) {
  return u === "v" ? tp(c) : ep(c);
}, lp = function(u, c) {
  return u === "h" && c === "rtl" ? -1 : 1;
}, np = function(u, c, r, o, f) {
  var m = lp(u, window.getComputedStyle(c).direction), p = m * o, b = r.target, E = c.contains(b), v = false, R = p > 0, O = 0, B = 0;
  do {
    if (!b) break;
    var X = Zv(u, b), et = X[0], U = X[1], Q = X[2], I = U - Q - m * et;
    (et || I) && Vv(u, b) && (O += I, B += et);
    var lt = b.parentNode;
    b = lt && lt.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? lt.host : lt;
  } while (!E && b !== document.body || E && (c.contains(b) || c === b));
  return (R && Math.abs(O) < 1 || !R && Math.abs(B) < 1) && (v = true), v;
}, Ci = function(u) {
  return "changedTouches" in u ? [u.changedTouches[0].clientX, u.changedTouches[0].clientY] : [0, 0];
}, mv = function(u) {
  return [u.deltaX, u.deltaY];
}, vv = function(u) {
  return u && "current" in u ? u.current : u;
}, ap = function(u, c) {
  return u[0] === c[0] && u[1] === c[1];
}, up = function(u) {
  return `
  .block-interactivity-`.concat(u, ` {pointer-events: none;}
  .allow-interactivity-`).concat(u, ` {pointer-events: all;}
`);
}, ip = 0, ea = [];
function cp(u) {
  var c = A.useRef([]), r = A.useRef([0, 0]), o = A.useRef(), f = A.useState(ip++)[0], m = A.useState(Xv)[0], p = A.useRef(u);
  A.useEffect(function() {
    p.current = u;
  }, [u]), A.useEffect(function() {
    if (u.inert) {
      document.body.classList.add("block-interactivity-".concat(f));
      var U = Db([u.lockRef.current], (u.shards || []).map(vv), true).filter(Boolean);
      return U.forEach(function(Q) {
        return Q.classList.add("allow-interactivity-".concat(f));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(f)), U.forEach(function(Q) {
          return Q.classList.remove("allow-interactivity-".concat(f));
        });
      };
    }
  }, [u.inert, u.lockRef.current, u.shards]);
  var b = A.useCallback(function(U, Q) {
    if ("touches" in U && U.touches.length === 2 || U.type === "wheel" && U.ctrlKey) return !p.current.allowPinchZoom;
    var I = Ci(U), lt = r.current, nt = "deltaX" in U ? U.deltaX : lt[0] - I[0], ut = "deltaY" in U ? U.deltaY : lt[1] - I[1], st, yt = U.target, G = Math.abs(nt) > Math.abs(ut) ? "h" : "v";
    if ("touches" in U && G === "h" && yt.type === "range") return false;
    var L = window.getSelection(), Et = L && L.anchorNode, le = Et ? Et === yt || Et.contains(yt) : false;
    if (le) return false;
    var Qt = dv(G, yt);
    if (!Qt) return true;
    if (Qt ? st = G : (st = G === "v" ? "h" : "v", Qt = dv(G, yt)), !Qt) return false;
    if (!o.current && "changedTouches" in U && (nt || ut) && (o.current = st), !st) return true;
    var Rt = o.current || st;
    return np(Rt, Q, U, Rt === "h" ? nt : ut);
  }, []), E = A.useCallback(function(U) {
    var Q = U;
    if (!(!ea.length || ea[ea.length - 1] !== m)) {
      var I = "deltaY" in Q ? mv(Q) : Ci(Q), lt = c.current.filter(function(st) {
        return st.name === Q.type && (st.target === Q.target || Q.target === st.shadowParent) && ap(st.delta, I);
      })[0];
      if (lt && lt.should) {
        Q.cancelable && Q.preventDefault();
        return;
      }
      if (!lt) {
        var nt = (p.current.shards || []).map(vv).filter(Boolean).filter(function(st) {
          return st.contains(Q.target);
        }), ut = nt.length > 0 ? b(Q, nt[0]) : !p.current.noIsolation;
        ut && Q.cancelable && Q.preventDefault();
      }
    }
  }, []), v = A.useCallback(function(U, Q, I, lt) {
    var nt = { name: U, delta: Q, target: I, should: lt, shadowParent: op(I) };
    c.current.push(nt), setTimeout(function() {
      c.current = c.current.filter(function(ut) {
        return ut !== nt;
      });
    }, 1);
  }, []), R = A.useCallback(function(U) {
    r.current = Ci(U), o.current = void 0;
  }, []), O = A.useCallback(function(U) {
    v(U.type, mv(U), U.target, b(U, u.lockRef.current));
  }, []), B = A.useCallback(function(U) {
    v(U.type, Ci(U), U.target, b(U, u.lockRef.current));
  }, []);
  A.useEffect(function() {
    return ea.push(m), u.setCallbacks({ onScrollCapture: O, onWheelCapture: O, onTouchMoveCapture: B }), document.addEventListener("wheel", E, ta), document.addEventListener("touchmove", E, ta), document.addEventListener("touchstart", R, ta), function() {
      ea = ea.filter(function(U) {
        return U !== m;
      }), document.removeEventListener("wheel", E, ta), document.removeEventListener("touchmove", E, ta), document.removeEventListener("touchstart", R, ta);
    };
  }, []);
  var X = u.removeScrollBar, et = u.inert;
  return A.createElement(A.Fragment, null, et ? A.createElement(m, { styles: up(f) }) : null, X ? A.createElement(Fb, { noRelative: u.noRelative, gapMode: u.gapMode }) : null);
}
function op(u) {
  for (var c = null; u !== null; ) u instanceof ShadowRoot && (c = u.host, u = u.host), u = u.parentNode;
  return c;
}
const rp = Hb(Gv, cp);
var Kv = A.forwardRef(function(u, c) {
  return A.createElement(Qi, Qe({}, u, { ref: c, sideCar: rp }));
});
Kv.classNames = Qi.classNames;
var sp = function(u) {
  if (typeof document > "u") return null;
  var c = Array.isArray(u) ? u[0] : u;
  return c.ownerDocument.body;
}, la = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), Ni = {}, _r = 0, kv = function(u) {
  return u && (u.host || kv(u.parentNode));
}, fp = function(u, c) {
  return c.map(function(r) {
    if (u.contains(r)) return r;
    var o = kv(r);
    return o && u.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", u, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, dp = function(u, c, r, o) {
  var f = fp(c, Array.isArray(u) ? u : [u]);
  Ni[r] || (Ni[r] = /* @__PURE__ */ new WeakMap());
  var m = Ni[r], p = [], b = /* @__PURE__ */ new Set(), E = new Set(f), v = function(O) {
    !O || b.has(O) || (b.add(O), v(O.parentNode));
  };
  f.forEach(v);
  var R = function(O) {
    !O || E.has(O) || Array.prototype.forEach.call(O.children, function(B) {
      if (b.has(B)) R(B);
      else try {
        var X = B.getAttribute(o), et = X !== null && X !== "false", U = (la.get(B) || 0) + 1, Q = (m.get(B) || 0) + 1;
        la.set(B, U), m.set(B, Q), p.push(B), U === 1 && et && Mi.set(B, true), Q === 1 && B.setAttribute(r, "true"), et || B.setAttribute(o, "true");
      } catch (I) {
        console.error("aria-hidden: cannot operate on ", B, I);
      }
    });
  };
  return R(c), b.clear(), _r++, function() {
    p.forEach(function(O) {
      var B = la.get(O) - 1, X = m.get(O) - 1;
      la.set(O, B), m.set(O, X), B || (Mi.has(O) || O.removeAttribute(o), Mi.delete(O)), X || O.removeAttribute(r);
    }), _r--, _r || (la = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), Ni = {});
  };
}, mp = function(u, c, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(u) ? u : [u]), f = sp(u);
  return f ? (o.push.apply(o, Array.from(f.querySelectorAll("[aria-live], script"))), dp(o, f, r, "aria-hidden")) : function() {
    return null;
  };
}, Vi = "Dialog", [Jv, Wv] = Rv(Vi), [vp, Be] = Jv(Vi), Fv = (u) => {
  const { __scopeDialog: c, children: r, open: o, defaultOpen: f, onOpenChange: m, modal: p = true } = u, b = A.useRef(null), E = A.useRef(null), [v, R] = nb({ prop: o, defaultProp: f ?? false, onChange: m, caller: Vi });
  return x.jsx(vp, { scope: c, triggerRef: b, contentRef: E, contentId: br(), titleId: br(), descriptionId: br(), open: v, onOpenChange: R, onOpenToggle: A.useCallback(() => R((O) => !O), [R]), modal: p, children: r });
};
Fv.displayName = Vi;
var $v = "DialogTrigger", Iv = A.forwardRef((u, c) => {
  const { __scopeDialog: r, ...o } = u, f = Be($v, r), m = fl(c, f.triggerRef);
  return x.jsx(dl.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": f.open, "aria-controls": f.contentId, "data-state": Br(f.open), ...o, ref: m, onClick: sl(u.onClick, f.onOpenToggle) });
});
Iv.displayName = $v;
var jr = "DialogPortal", [hp, Pv] = Jv(jr, { forceMount: void 0 }), th = (u) => {
  const { __scopeDialog: c, forceMount: r, children: o, container: f } = u, m = Be(jr, c);
  return x.jsx(hp, { scope: c, forceMount: r, children: A.Children.map(o, (p) => x.jsx(Xi, { present: r || m.open, children: x.jsx(Lv, { asChild: true, container: f, children: p }) })) });
};
th.displayName = jr;
var qi = "DialogOverlay", eh = A.forwardRef((u, c) => {
  const r = Pv(qi, u.__scopeDialog), { forceMount: o = r.forceMount, ...f } = u, m = Be(qi, u.__scopeDialog);
  return m.modal ? x.jsx(Xi, { present: o || m.open, children: x.jsx(yp, { ...f, ref: c }) }) : null;
});
eh.displayName = qi;
var gp = wr("DialogOverlay.RemoveScroll"), yp = A.forwardRef((u, c) => {
  const { __scopeDialog: r, ...o } = u, f = Be(qi, r);
  return x.jsx(Kv, { as: gp, allowPinchZoom: true, shards: [f.contentRef], children: x.jsx(dl.div, { "data-state": Br(f.open), ...o, ref: c, style: { pointerEvents: "auto", ...o.style } }) });
}), mn = "DialogContent", lh = A.forwardRef((u, c) => {
  const r = Pv(mn, u.__scopeDialog), { forceMount: o = r.forceMount, ...f } = u, m = Be(mn, u.__scopeDialog);
  return x.jsx(Xi, { present: o || m.open, children: m.modal ? x.jsx(bp, { ...f, ref: c }) : x.jsx(pp, { ...f, ref: c }) });
});
lh.displayName = mn;
var bp = A.forwardRef((u, c) => {
  const r = Be(mn, u.__scopeDialog), o = A.useRef(null), f = fl(c, r.contentRef, o);
  return A.useEffect(() => {
    const m = o.current;
    if (m) return mp(m);
  }, []), x.jsx(nh, { ...u, ref: f, trapFocus: r.open, disableOutsidePointerEvents: true, onCloseAutoFocus: sl(u.onCloseAutoFocus, (m) => {
    var _a;
    m.preventDefault(), (_a = r.triggerRef.current) == null ? void 0 : _a.focus();
  }), onPointerDownOutside: sl(u.onPointerDownOutside, (m) => {
    const p = m.detail.originalEvent, b = p.button === 0 && p.ctrlKey === true;
    (p.button === 2 || b) && m.preventDefault();
  }), onFocusOutside: sl(u.onFocusOutside, (m) => m.preventDefault()) });
}), pp = A.forwardRef((u, c) => {
  const r = Be(mn, u.__scopeDialog), o = A.useRef(false), f = A.useRef(false);
  return x.jsx(nh, { ...u, ref: c, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (m) => {
    var _a, _b2;
    (_a = u.onCloseAutoFocus) == null ? void 0 : _a.call(u, m), m.defaultPrevented || (o.current || ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.focus()), m.preventDefault()), o.current = false, f.current = false;
  }, onInteractOutside: (m) => {
    var _a, _b2;
    (_a = u.onInteractOutside) == null ? void 0 : _a.call(u, m), m.defaultPrevented || (o.current = true, m.detail.originalEvent.type === "pointerdown" && (f.current = true));
    const p = m.target;
    ((_b2 = r.triggerRef.current) == null ? void 0 : _b2.contains(p)) && m.preventDefault(), m.detail.originalEvent.type === "focusin" && f.current && m.preventDefault();
  } });
}), nh = A.forwardRef((u, c) => {
  const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: f, onCloseAutoFocus: m, ...p } = u, b = Be(mn, r), E = A.useRef(null), v = fl(c, E);
  return Ob(), x.jsxs(x.Fragment, { children: [x.jsx(Bv, { asChild: true, loop: true, trapped: o, onMountAutoFocus: f, onUnmountAutoFocus: m, children: x.jsx(jv, { role: "dialog", id: b.contentId, "aria-describedby": b.descriptionId, "aria-labelledby": b.titleId, "data-state": Br(b.open), ...p, ref: v, onDismiss: () => b.onOpenChange(false) }) }), x.jsxs(x.Fragment, { children: [x.jsx(Ep, { titleId: b.titleId }), x.jsx(Ap, { contentRef: E, descriptionId: b.descriptionId })] })] });
}), Ur = "DialogTitle", ah = A.forwardRef((u, c) => {
  const { __scopeDialog: r, ...o } = u, f = Be(Ur, r);
  return x.jsx(dl.h2, { id: f.titleId, ...o, ref: c });
});
ah.displayName = Ur;
var uh = "DialogDescription", ih = A.forwardRef((u, c) => {
  const { __scopeDialog: r, ...o } = u, f = Be(uh, r);
  return x.jsx(dl.p, { id: f.descriptionId, ...o, ref: c });
});
ih.displayName = uh;
var ch = "DialogClose", oh = A.forwardRef((u, c) => {
  const { __scopeDialog: r, ...o } = u, f = Be(ch, r);
  return x.jsx(dl.button, { type: "button", ...o, ref: c, onClick: sl(u.onClick, () => f.onOpenChange(false)) });
});
oh.displayName = ch;
function Br(u) {
  return u ? "open" : "closed";
}
var rh = "DialogTitleWarning", [Sp, sh] = tb(rh, { contentName: mn, titleName: Ur, docsSlug: "dialog" }), Ep = ({ titleId: u }) => {
  const c = sh(rh), r = `\`${c.contentName}\` requires a \`${c.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${c.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${c.docsSlug}`;
  return A.useEffect(() => {
    u && (document.getElementById(u) || console.error(r));
  }, [r, u]), null;
}, xp = "DialogDescriptionWarning", Ap = ({ contentRef: u, descriptionId: c }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${sh(xp).contentName}}.`;
  return A.useEffect(() => {
    var _a;
    const f = (_a = u.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    c && f && (document.getElementById(c) || console.warn(o));
  }, [o, u, c]), null;
}, Tp = Fv, _p = Iv, zp = th, Op = eh, Dp = lh, Cp = ah, Mp = ih, fh = oh, dh = "AlertDialog", [Np] = Rv(dh, [Wv]), ml = Wv(), mh = (u) => {
  const { __scopeAlertDialog: c, ...r } = u, o = ml(c);
  return x.jsx(Tp, { ...o, ...r, modal: true });
};
mh.displayName = dh;
var Rp = "AlertDialogTrigger", vh = A.forwardRef((u, c) => {
  const { __scopeAlertDialog: r, ...o } = u, f = ml(r);
  return x.jsx(_p, { ...f, ...o, ref: c });
});
vh.displayName = Rp;
var wp = "AlertDialogPortal", hh = (u) => {
  const { __scopeAlertDialog: c, ...r } = u, o = ml(c);
  return x.jsx(zp, { ...o, ...r });
};
hh.displayName = wp;
var jp = "AlertDialogOverlay", gh = A.forwardRef((u, c) => {
  const { __scopeAlertDialog: r, ...o } = u, f = ml(r);
  return x.jsx(Op, { ...f, ...o, ref: c });
});
gh.displayName = jp;
var aa = "AlertDialogContent", [Up, Bp] = Np(aa), Hp = J0("AlertDialogContent"), yh = A.forwardRef((u, c) => {
  const { __scopeAlertDialog: r, children: o, ...f } = u, m = ml(r), p = A.useRef(null), b = fl(c, p), E = A.useRef(null);
  return x.jsx(Sp, { contentName: aa, titleName: bh, docsSlug: "alert-dialog", children: x.jsx(Up, { scope: r, cancelRef: E, children: x.jsxs(Dp, { role: "alertdialog", ...m, ...f, ref: b, onOpenAutoFocus: sl(f.onOpenAutoFocus, (v) => {
    var _a;
    v.preventDefault(), (_a = E.current) == null ? void 0 : _a.focus({ preventScroll: true });
  }), onPointerDownOutside: (v) => v.preventDefault(), onInteractOutside: (v) => v.preventDefault(), children: [x.jsx(Hp, { children: o }), x.jsx(qp, { contentRef: p })] }) }) });
});
yh.displayName = aa;
var bh = "AlertDialogTitle", ph = A.forwardRef((u, c) => {
  const { __scopeAlertDialog: r, ...o } = u, f = ml(r);
  return x.jsx(Cp, { ...f, ...o, ref: c });
});
ph.displayName = bh;
var Sh = "AlertDialogDescription", Eh = A.forwardRef((u, c) => {
  const { __scopeAlertDialog: r, ...o } = u, f = ml(r);
  return x.jsx(Mp, { ...f, ...o, ref: c });
});
Eh.displayName = Sh;
var Lp = "AlertDialogAction", xh = A.forwardRef((u, c) => {
  const { __scopeAlertDialog: r, ...o } = u, f = ml(r);
  return x.jsx(fh, { ...f, ...o, ref: c });
});
xh.displayName = Lp;
var Ah = "AlertDialogCancel", Th = A.forwardRef((u, c) => {
  const { __scopeAlertDialog: r, ...o } = u, { cancelRef: f } = Bp(Ah, r), m = ml(r), p = fl(c, f);
  return x.jsx(fh, { ...m, ...o, ref: p });
});
Th.displayName = Ah;
var qp = ({ contentRef: u }) => {
  const c = `\`${aa}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${aa}\` by passing a \`${Sh}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${aa}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return A.useEffect(() => {
    var _a;
    document.getElementById((_a = u.current) == null ? void 0 : _a.getAttribute("aria-describedby")) || console.warn(c);
  }, [c, u]), null;
}, Yp = mh, Gp = vh, Xp = hh, Qp = gh, Vp = yh, Zp = xh, Kp = Th, kp = ph, Jp = Eh;
function _h(u) {
  var c, r, o = "";
  if (typeof u == "string" || typeof u == "number") o += u;
  else if (typeof u == "object") if (Array.isArray(u)) {
    var f = u.length;
    for (c = 0; c < f; c++) u[c] && (r = _h(u[c])) && (o && (o += " "), o += r);
  } else for (r in u) u[r] && (o && (o += " "), o += r);
  return o;
}
function zh() {
  for (var u, c, r = 0, o = "", f = arguments.length; r < f; r++) (u = arguments[r]) && (c = _h(u)) && (o && (o += " "), o += c);
  return o;
}
const Wp = (u, c) => {
  const r = new Array(u.length + c.length);
  for (let o = 0; o < u.length; o++) r[o] = u[o];
  for (let o = 0; o < c.length; o++) r[u.length + o] = c[o];
  return r;
}, Fp = (u, c) => ({ classGroupId: u, validator: c }), Oh = (u = /* @__PURE__ */ new Map(), c = null, r) => ({ nextPart: u, validators: c, classGroupId: r }), Yi = "-", hv = [], $p = "arbitrary..", Ip = (u) => {
  const c = t1(u), { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = u;
  return { getClassGroupId: (p) => {
    if (p.startsWith("[") && p.endsWith("]")) return Pp(p);
    const b = p.split(Yi), E = b[0] === "" && b.length > 1 ? 1 : 0;
    return Dh(b, E, c);
  }, getConflictingClassGroupIds: (p, b) => {
    if (b) {
      const E = o[p], v = r[p];
      return E ? v ? Wp(v, E) : E : v || hv;
    }
    return r[p] || hv;
  } };
}, Dh = (u, c, r) => {
  if (u.length - c === 0) return r.classGroupId;
  const f = u[c], m = r.nextPart.get(f);
  if (m) {
    const v = Dh(u, c + 1, m);
    if (v) return v;
  }
  const p = r.validators;
  if (p === null) return;
  const b = c === 0 ? u.join(Yi) : u.slice(c).join(Yi), E = p.length;
  for (let v = 0; v < E; v++) {
    const R = p[v];
    if (R.validator(b)) return R.classGroupId;
  }
}, Pp = (u) => u.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const c = u.slice(1, -1), r = c.indexOf(":"), o = c.slice(0, r);
  return o ? $p + o : void 0;
})(), t1 = (u) => {
  const { theme: c, classGroups: r } = u;
  return e1(r, c);
}, e1 = (u, c) => {
  const r = Oh();
  for (const o in u) {
    const f = u[o];
    Hr(f, r, o, c);
  }
  return r;
}, Hr = (u, c, r, o) => {
  const f = u.length;
  for (let m = 0; m < f; m++) {
    const p = u[m];
    l1(p, c, r, o);
  }
}, l1 = (u, c, r, o) => {
  if (typeof u == "string") {
    n1(u, c, r);
    return;
  }
  if (typeof u == "function") {
    a1(u, c, r, o);
    return;
  }
  u1(u, c, r, o);
}, n1 = (u, c, r) => {
  const o = u === "" ? c : Ch(c, u);
  o.classGroupId = r;
}, a1 = (u, c, r, o) => {
  if (i1(u)) {
    Hr(u(o), c, r, o);
    return;
  }
  c.validators === null && (c.validators = []), c.validators.push(Fp(r, u));
}, u1 = (u, c, r, o) => {
  const f = Object.entries(u), m = f.length;
  for (let p = 0; p < m; p++) {
    const [b, E] = f[p];
    Hr(E, Ch(c, b), r, o);
  }
}, Ch = (u, c) => {
  let r = u;
  const o = c.split(Yi), f = o.length;
  for (let m = 0; m < f; m++) {
    const p = o[m];
    let b = r.nextPart.get(p);
    b || (b = Oh(), r.nextPart.set(p, b)), r = b;
  }
  return r;
}, i1 = (u) => "isThemeGetter" in u && u.isThemeGetter === true, c1 = (u) => {
  if (u < 1) return { get: () => {
  }, set: () => {
  } };
  let c = 0, r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const f = (m, p) => {
    r[m] = p, c++, c > u && (c = 0, o = r, r = /* @__PURE__ */ Object.create(null));
  };
  return { get(m) {
    let p = r[m];
    if (p !== void 0) return p;
    if ((p = o[m]) !== void 0) return f(m, p), p;
  }, set(m, p) {
    m in r ? r[m] = p : f(m, p);
  } };
}, Cr = "!", gv = ":", o1 = [], yv = (u, c, r, o, f) => ({ modifiers: u, hasImportantModifier: c, baseClassName: r, maybePostfixModifierPosition: o, isExternal: f }), r1 = (u) => {
  const { prefix: c, experimentalParseClassName: r } = u;
  let o = (f) => {
    const m = [];
    let p = 0, b = 0, E = 0, v;
    const R = f.length;
    for (let U = 0; U < R; U++) {
      const Q = f[U];
      if (p === 0 && b === 0) {
        if (Q === gv) {
          m.push(f.slice(E, U)), E = U + 1;
          continue;
        }
        if (Q === "/") {
          v = U;
          continue;
        }
      }
      Q === "[" ? p++ : Q === "]" ? p-- : Q === "(" ? b++ : Q === ")" && b--;
    }
    const O = m.length === 0 ? f : f.slice(E);
    let B = O, X = false;
    O.endsWith(Cr) ? (B = O.slice(0, -1), X = true) : O.startsWith(Cr) && (B = O.slice(1), X = true);
    const et = v && v > E ? v - E : void 0;
    return yv(m, X, B, et);
  };
  if (c) {
    const f = c + gv, m = o;
    o = (p) => p.startsWith(f) ? m(p.slice(f.length)) : yv(o1, false, p, void 0, true);
  }
  if (r) {
    const f = o;
    o = (m) => r({ className: m, parseClassName: f });
  }
  return o;
}, s1 = (u) => {
  const c = /* @__PURE__ */ new Map();
  return u.orderSensitiveModifiers.forEach((r, o) => {
    c.set(r, 1e6 + o);
  }), (r) => {
    const o = [];
    let f = [];
    for (let m = 0; m < r.length; m++) {
      const p = r[m], b = p[0] === "[", E = c.has(p);
      b || E ? (f.length > 0 && (f.sort(), o.push(...f), f = []), o.push(p)) : f.push(p);
    }
    return f.length > 0 && (f.sort(), o.push(...f)), o;
  };
}, f1 = (u) => ({ cache: c1(u.cacheSize), parseClassName: r1(u), sortModifiers: s1(u), postfixLookupClassGroupIds: d1(u), ...Ip(u) }), d1 = (u) => {
  const c = /* @__PURE__ */ Object.create(null), r = u.postfixLookupClassGroups;
  if (r) for (let o = 0; o < r.length; o++) c[r[o]] = true;
  return c;
}, m1 = /\s+/, v1 = (u, c) => {
  const { parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: f, sortModifiers: m, postfixLookupClassGroupIds: p } = c, b = [], E = u.trim().split(m1);
  let v = "";
  for (let R = E.length - 1; R >= 0; R -= 1) {
    const O = E[R], { isExternal: B, modifiers: X, hasImportantModifier: et, baseClassName: U, maybePostfixModifierPosition: Q } = r(O);
    if (B) {
      v = O + (v.length > 0 ? " " + v : v);
      continue;
    }
    let I = !!Q, lt;
    if (I) {
      const G = U.substring(0, Q);
      lt = o(G);
      const L = lt && p[lt] ? o(U) : void 0;
      L && L !== lt && (lt = L, I = false);
    } else lt = o(U);
    if (!lt) {
      if (!I) {
        v = O + (v.length > 0 ? " " + v : v);
        continue;
      }
      if (lt = o(U), !lt) {
        v = O + (v.length > 0 ? " " + v : v);
        continue;
      }
      I = false;
    }
    const nt = X.length === 0 ? "" : X.length === 1 ? X[0] : m(X).join(":"), ut = et ? nt + Cr : nt, st = ut + lt;
    if (b.indexOf(st) > -1) continue;
    b.push(st);
    const yt = f(lt, I);
    for (let G = 0; G < yt.length; ++G) {
      const L = yt[G];
      b.push(ut + L);
    }
    v = O + (v.length > 0 ? " " + v : v);
  }
  return v;
}, h1 = (...u) => {
  let c = 0, r, o, f = "";
  for (; c < u.length; ) (r = u[c++]) && (o = Mh(r)) && (f && (f += " "), f += o);
  return f;
}, Mh = (u) => {
  if (typeof u == "string") return u;
  let c, r = "";
  for (let o = 0; o < u.length; o++) u[o] && (c = Mh(u[o])) && (r && (r += " "), r += c);
  return r;
}, g1 = (u, ...c) => {
  let r, o, f, m;
  const p = (E) => {
    const v = c.reduce((R, O) => O(R), u());
    return r = f1(v), o = r.cache.get, f = r.cache.set, m = b, b(E);
  }, b = (E) => {
    const v = o(E);
    if (v) return v;
    const R = v1(E, r);
    return f(E, R), R;
  };
  return m = p, (...E) => m(h1(...E));
}, y1 = [], Xt = (u) => {
  const c = (r) => r[u] || y1;
  return c.isThemeGetter = true, c;
}, Nh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Rh = /^\((?:(\w[\w-]*):)?(.+)\)$/i, b1 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, p1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, S1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, E1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, x1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, A1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xl = (u) => b1.test(u), rt = (u) => !!u && !Number.isNaN(Number(u)), Xe = (u) => !!u && Number.isInteger(Number(u)), zr = (u) => u.endsWith("%") && rt(u.slice(0, -1)), rl = (u) => p1.test(u), wh = () => true, T1 = (u) => S1.test(u) && !E1.test(u), Lr = () => false, _1 = (u) => x1.test(u), z1 = (u) => A1.test(u), O1 = (u) => !V(u) && !K(u), D1 = (u) => u.startsWith("@container") && (u[10] === "/" && u[11] !== void 0 || u[11] === "s" && u[16] !== void 0 && u.startsWith("-size/", 10) || u[11] === "n" && u[18] !== void 0 && u.startsWith("-normal/", 10)), C1 = (u) => Vl(u, Bh, Lr), V = (u) => Nh.test(u), sn = (u) => Vl(u, Hh, T1), bv = (u) => Vl(u, H1, rt), M1 = (u) => Vl(u, qh, wh), N1 = (u) => Vl(u, Lh, Lr), pv = (u) => Vl(u, jh, Lr), R1 = (u) => Vl(u, Uh, z1), Ri = (u) => Vl(u, Yh, _1), K = (u) => Rh.test(u), tu = (u) => vn(u, Hh), w1 = (u) => vn(u, Lh), Sv = (u) => vn(u, jh), j1 = (u) => vn(u, Bh), U1 = (u) => vn(u, Uh), wi = (u) => vn(u, Yh, true), B1 = (u) => vn(u, qh, true), Vl = (u, c, r) => {
  const o = Nh.exec(u);
  return o ? o[1] ? c(o[1]) : r(o[2]) : false;
}, vn = (u, c, r = false) => {
  const o = Rh.exec(u);
  return o ? o[1] ? c(o[1]) : r : false;
}, jh = (u) => u === "position" || u === "percentage", Uh = (u) => u === "image" || u === "url", Bh = (u) => u === "length" || u === "size" || u === "bg-size", Hh = (u) => u === "length", H1 = (u) => u === "number", Lh = (u) => u === "family-name", qh = (u) => u === "number" || u === "weight", Yh = (u) => u === "shadow", L1 = () => {
  const u = Xt("color"), c = Xt("font"), r = Xt("text"), o = Xt("font-weight"), f = Xt("tracking"), m = Xt("leading"), p = Xt("breakpoint"), b = Xt("container"), E = Xt("spacing"), v = Xt("radius"), R = Xt("shadow"), O = Xt("inset-shadow"), B = Xt("text-shadow"), X = Xt("drop-shadow"), et = Xt("blur"), U = Xt("perspective"), Q = Xt("aspect"), I = Xt("ease"), lt = Xt("animate"), nt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ut = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], st = () => [...ut(), K, V], yt = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", "contain", "none"], L = () => [K, V, E], Et = () => [Xl, "full", "auto", ...L()], le = () => [Xe, "none", "subgrid", K, V], Qt = () => ["auto", { span: ["full", Xe, K, V] }, Xe, K, V], Rt = () => [Xe, "auto", K, V], He = () => ["auto", "min", "max", "fr", K, V], fe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Vt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], C = () => ["auto", ...L()], H = () => [Xl, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...L()], P = () => [Xl, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...L()], bt = () => [Xl, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...L()], q = () => [u, K, V], y = () => [...ut(), Sv, pv, { position: [K, V] }], j = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], Y = () => ["auto", "cover", "contain", j1, C1, { size: [K, V] }], Z = () => [zr, tu, sn], W = () => ["", "none", "full", v, K, V], $ = () => ["", rt, tu, sn], ht = () => ["solid", "dashed", "dotted", "double"], Zt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ot = () => [rt, zr, Sv, pv], hl = () => ["", "none", et, K, V], Ve = () => ["none", rt, K, V], gl = () => ["none", rt, K, V], hn = () => [rt, K, V], xe = () => [Xl, "full", ...L()];
  return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [rl], breakpoint: [rl], color: [wh], container: [rl], "drop-shadow": [rl], ease: ["in", "out", "in-out"], font: [O1], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [rl], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [rl], shadow: [rl], spacing: ["px", rt], text: [rl], "text-shadow": [rl], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", Xl, V, K, Q] }], container: ["container"], "container-type": [{ "@container": ["", "normal", "size", K, V] }], "container-named": [D1], columns: [{ columns: [rt, V, K, b] }], "break-after": [{ "break-after": nt() }], "break-before": [{ "break-before": nt() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: st() }], overflow: [{ overflow: yt() }], "overflow-x": [{ "overflow-x": yt() }], "overflow-y": [{ "overflow-y": yt() }], overscroll: [{ overscroll: G() }], "overscroll-x": [{ "overscroll-x": G() }], "overscroll-y": [{ "overscroll-y": G() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: Et() }], "inset-x": [{ "inset-x": Et() }], "inset-y": [{ "inset-y": Et() }], start: [{ "inset-s": Et(), start: Et() }], end: [{ "inset-e": Et(), end: Et() }], "inset-bs": [{ "inset-bs": Et() }], "inset-be": [{ "inset-be": Et() }], top: [{ top: Et() }], right: [{ right: Et() }], bottom: [{ bottom: Et() }], left: [{ left: Et() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [Xe, "auto", K, V] }], basis: [{ basis: [Xl, "full", "auto", b, ...L()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [rt, Xl, "auto", "initial", "none", V] }], grow: [{ grow: ["", rt, K, V] }], shrink: [{ shrink: ["", rt, K, V] }], order: [{ order: [Xe, "first", "last", "none", K, V] }], "grid-cols": [{ "grid-cols": le() }], "col-start-end": [{ col: Qt() }], "col-start": [{ "col-start": Rt() }], "col-end": [{ "col-end": Rt() }], "grid-rows": [{ "grid-rows": le() }], "row-start-end": [{ row: Qt() }], "row-start": [{ "row-start": Rt() }], "row-end": [{ "row-end": Rt() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": He() }], "auto-rows": [{ "auto-rows": He() }], gap: [{ gap: L() }], "gap-x": [{ "gap-x": L() }], "gap-y": [{ "gap-y": L() }], "justify-content": [{ justify: [...fe(), "normal"] }], "justify-items": [{ "justify-items": [...Vt(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...Vt()] }], "align-content": [{ content: ["normal", ...fe()] }], "align-items": [{ items: [...Vt(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...Vt(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": fe() }], "place-items": [{ "place-items": [...Vt(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...Vt()] }], p: [{ p: L() }], px: [{ px: L() }], py: [{ py: L() }], ps: [{ ps: L() }], pe: [{ pe: L() }], pbs: [{ pbs: L() }], pbe: [{ pbe: L() }], pt: [{ pt: L() }], pr: [{ pr: L() }], pb: [{ pb: L() }], pl: [{ pl: L() }], m: [{ m: C() }], mx: [{ mx: C() }], my: [{ my: C() }], ms: [{ ms: C() }], me: [{ me: C() }], mbs: [{ mbs: C() }], mbe: [{ mbe: C() }], mt: [{ mt: C() }], mr: [{ mr: C() }], mb: [{ mb: C() }], ml: [{ ml: C() }], "space-x": [{ "space-x": L() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": L() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: H() }], "inline-size": [{ inline: ["auto", ...P()] }], "min-inline-size": [{ "min-inline": ["auto", ...P()] }], "max-inline-size": [{ "max-inline": ["none", ...P()] }], "block-size": [{ block: ["auto", ...bt()] }], "min-block-size": [{ "min-block": ["auto", ...bt()] }], "max-block-size": [{ "max-block": ["none", ...bt()] }], w: [{ w: [b, "screen", ...H()] }], "min-w": [{ "min-w": [b, "screen", "none", ...H()] }], "max-w": [{ "max-w": [b, "screen", "none", "prose", { screen: [p] }, ...H()] }], h: [{ h: ["screen", "lh", ...H()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...H()] }], "max-h": [{ "max-h": ["screen", "lh", ...H()] }], "font-size": [{ text: ["base", r, tu, sn] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [o, B1, M1] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", zr, V] }], "font-family": [{ font: [w1, N1, c] }], "font-features": [{ "font-features": [V] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [f, K, V] }], "line-clamp": [{ "line-clamp": [rt, "none", K, bv] }], leading: [{ leading: [m, ...L()] }], "list-image": [{ "list-image": ["none", K, V] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", K, V] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: q() }], "text-color": [{ text: q() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...ht(), "wavy"] }], "text-decoration-thickness": [{ decoration: [rt, "from-font", "auto", K, sn] }], "text-decoration-color": [{ decoration: q() }], "underline-offset": [{ "underline-offset": [rt, "auto", K, V] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: L() }], "tab-size": [{ tab: [Xe, K, V] }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K, V] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", K, V] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: y() }], "bg-repeat": [{ bg: j() }], "bg-size": [{ bg: Y() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Xe, K, V], radial: ["", K, V], conic: [Xe, K, V] }, U1, R1] }], "bg-color": [{ bg: q() }], "gradient-from-pos": [{ from: Z() }], "gradient-via-pos": [{ via: Z() }], "gradient-to-pos": [{ to: Z() }], "gradient-from": [{ from: q() }], "gradient-via": [{ via: q() }], "gradient-to": [{ to: q() }], rounded: [{ rounded: W() }], "rounded-s": [{ "rounded-s": W() }], "rounded-e": [{ "rounded-e": W() }], "rounded-t": [{ "rounded-t": W() }], "rounded-r": [{ "rounded-r": W() }], "rounded-b": [{ "rounded-b": W() }], "rounded-l": [{ "rounded-l": W() }], "rounded-ss": [{ "rounded-ss": W() }], "rounded-se": [{ "rounded-se": W() }], "rounded-ee": [{ "rounded-ee": W() }], "rounded-es": [{ "rounded-es": W() }], "rounded-tl": [{ "rounded-tl": W() }], "rounded-tr": [{ "rounded-tr": W() }], "rounded-br": [{ "rounded-br": W() }], "rounded-bl": [{ "rounded-bl": W() }], "border-w": [{ border: $() }], "border-w-x": [{ "border-x": $() }], "border-w-y": [{ "border-y": $() }], "border-w-s": [{ "border-s": $() }], "border-w-e": [{ "border-e": $() }], "border-w-bs": [{ "border-bs": $() }], "border-w-be": [{ "border-be": $() }], "border-w-t": [{ "border-t": $() }], "border-w-r": [{ "border-r": $() }], "border-w-b": [{ "border-b": $() }], "border-w-l": [{ "border-l": $() }], "divide-x": [{ "divide-x": $() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": $() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...ht(), "hidden", "none"] }], "divide-style": [{ divide: [...ht(), "hidden", "none"] }], "border-color": [{ border: q() }], "border-color-x": [{ "border-x": q() }], "border-color-y": [{ "border-y": q() }], "border-color-s": [{ "border-s": q() }], "border-color-e": [{ "border-e": q() }], "border-color-bs": [{ "border-bs": q() }], "border-color-be": [{ "border-be": q() }], "border-color-t": [{ "border-t": q() }], "border-color-r": [{ "border-r": q() }], "border-color-b": [{ "border-b": q() }], "border-color-l": [{ "border-l": q() }], "divide-color": [{ divide: q() }], "outline-style": [{ outline: [...ht(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [rt, K, V] }], "outline-w": [{ outline: ["", rt, tu, sn] }], "outline-color": [{ outline: q() }], shadow: [{ shadow: ["", "none", R, wi, Ri] }], "shadow-color": [{ shadow: q() }], "inset-shadow": [{ "inset-shadow": ["none", O, wi, Ri] }], "inset-shadow-color": [{ "inset-shadow": q() }], "ring-w": [{ ring: $() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: q() }], "ring-offset-w": [{ "ring-offset": [rt, sn] }], "ring-offset-color": [{ "ring-offset": q() }], "inset-ring-w": [{ "inset-ring": $() }], "inset-ring-color": [{ "inset-ring": q() }], "text-shadow": [{ "text-shadow": ["none", B, wi, Ri] }], "text-shadow-color": [{ "text-shadow": q() }], opacity: [{ opacity: [rt, K, V] }], "mix-blend": [{ "mix-blend": [...Zt(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": Zt() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [rt] }], "mask-image-linear-from-pos": [{ "mask-linear-from": ot() }], "mask-image-linear-to-pos": [{ "mask-linear-to": ot() }], "mask-image-linear-from-color": [{ "mask-linear-from": q() }], "mask-image-linear-to-color": [{ "mask-linear-to": q() }], "mask-image-t-from-pos": [{ "mask-t-from": ot() }], "mask-image-t-to-pos": [{ "mask-t-to": ot() }], "mask-image-t-from-color": [{ "mask-t-from": q() }], "mask-image-t-to-color": [{ "mask-t-to": q() }], "mask-image-r-from-pos": [{ "mask-r-from": ot() }], "mask-image-r-to-pos": [{ "mask-r-to": ot() }], "mask-image-r-from-color": [{ "mask-r-from": q() }], "mask-image-r-to-color": [{ "mask-r-to": q() }], "mask-image-b-from-pos": [{ "mask-b-from": ot() }], "mask-image-b-to-pos": [{ "mask-b-to": ot() }], "mask-image-b-from-color": [{ "mask-b-from": q() }], "mask-image-b-to-color": [{ "mask-b-to": q() }], "mask-image-l-from-pos": [{ "mask-l-from": ot() }], "mask-image-l-to-pos": [{ "mask-l-to": ot() }], "mask-image-l-from-color": [{ "mask-l-from": q() }], "mask-image-l-to-color": [{ "mask-l-to": q() }], "mask-image-x-from-pos": [{ "mask-x-from": ot() }], "mask-image-x-to-pos": [{ "mask-x-to": ot() }], "mask-image-x-from-color": [{ "mask-x-from": q() }], "mask-image-x-to-color": [{ "mask-x-to": q() }], "mask-image-y-from-pos": [{ "mask-y-from": ot() }], "mask-image-y-to-pos": [{ "mask-y-to": ot() }], "mask-image-y-from-color": [{ "mask-y-from": q() }], "mask-image-y-to-color": [{ "mask-y-to": q() }], "mask-image-radial": [{ "mask-radial": [K, V] }], "mask-image-radial-from-pos": [{ "mask-radial-from": ot() }], "mask-image-radial-to-pos": [{ "mask-radial-to": ot() }], "mask-image-radial-from-color": [{ "mask-radial-from": q() }], "mask-image-radial-to-color": [{ "mask-radial-to": q() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": ut() }], "mask-image-conic-pos": [{ "mask-conic": [rt] }], "mask-image-conic-from-pos": [{ "mask-conic-from": ot() }], "mask-image-conic-to-pos": [{ "mask-conic-to": ot() }], "mask-image-conic-from-color": [{ "mask-conic-from": q() }], "mask-image-conic-to-color": [{ "mask-conic-to": q() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: y() }], "mask-repeat": [{ mask: j() }], "mask-size": [{ mask: Y() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", K, V] }], filter: [{ filter: ["", "none", K, V] }], blur: [{ blur: hl() }], brightness: [{ brightness: [rt, K, V] }], contrast: [{ contrast: [rt, K, V] }], "drop-shadow": [{ "drop-shadow": ["", "none", X, wi, Ri] }], "drop-shadow-color": [{ "drop-shadow": q() }], grayscale: [{ grayscale: ["", rt, K, V] }], "hue-rotate": [{ "hue-rotate": [rt, K, V] }], invert: [{ invert: ["", rt, K, V] }], saturate: [{ saturate: [rt, K, V] }], sepia: [{ sepia: ["", rt, K, V] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", K, V] }], "backdrop-blur": [{ "backdrop-blur": hl() }], "backdrop-brightness": [{ "backdrop-brightness": [rt, K, V] }], "backdrop-contrast": [{ "backdrop-contrast": [rt, K, V] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", rt, K, V] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [rt, K, V] }], "backdrop-invert": [{ "backdrop-invert": ["", rt, K, V] }], "backdrop-opacity": [{ "backdrop-opacity": [rt, K, V] }], "backdrop-saturate": [{ "backdrop-saturate": [rt, K, V] }], "backdrop-sepia": [{ "backdrop-sepia": ["", rt, K, V] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": L() }], "border-spacing-x": [{ "border-spacing-x": L() }], "border-spacing-y": [{ "border-spacing-y": L() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", K, V] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [rt, "initial", K, V] }], ease: [{ ease: ["linear", "initial", I, K, V] }], delay: [{ delay: [rt, K, V] }], animate: [{ animate: ["none", lt, K, V] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [U, K, V] }], "perspective-origin": [{ "perspective-origin": st() }], rotate: [{ rotate: Ve() }], "rotate-x": [{ "rotate-x": Ve() }], "rotate-y": [{ "rotate-y": Ve() }], "rotate-z": [{ "rotate-z": Ve() }], scale: [{ scale: gl() }], "scale-x": [{ "scale-x": gl() }], "scale-y": [{ "scale-y": gl() }], "scale-z": [{ "scale-z": gl() }], "scale-3d": ["scale-3d"], skew: [{ skew: hn() }], "skew-x": [{ "skew-x": hn() }], "skew-y": [{ "skew-y": hn() }], transform: [{ transform: [K, V, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: st() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: xe() }], "translate-x": [{ "translate-x": xe() }], "translate-y": [{ "translate-y": xe() }], "translate-z": [{ "translate-z": xe() }], "translate-none": ["translate-none"], zoom: [{ zoom: [Xe, K, V] }], accent: [{ accent: q() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: q() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K, V] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scrollbar-thumb-color": [{ "scrollbar-thumb": q() }], "scrollbar-track-color": [{ "scrollbar-track": q() }], "scrollbar-gutter": [{ "scrollbar-gutter": ["auto", "stable", "both"] }], "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }], "scroll-m": [{ "scroll-m": L() }], "scroll-mx": [{ "scroll-mx": L() }], "scroll-my": [{ "scroll-my": L() }], "scroll-ms": [{ "scroll-ms": L() }], "scroll-me": [{ "scroll-me": L() }], "scroll-mbs": [{ "scroll-mbs": L() }], "scroll-mbe": [{ "scroll-mbe": L() }], "scroll-mt": [{ "scroll-mt": L() }], "scroll-mr": [{ "scroll-mr": L() }], "scroll-mb": [{ "scroll-mb": L() }], "scroll-ml": [{ "scroll-ml": L() }], "scroll-p": [{ "scroll-p": L() }], "scroll-px": [{ "scroll-px": L() }], "scroll-py": [{ "scroll-py": L() }], "scroll-ps": [{ "scroll-ps": L() }], "scroll-pe": [{ "scroll-pe": L() }], "scroll-pbs": [{ "scroll-pbs": L() }], "scroll-pbe": [{ "scroll-pbe": L() }], "scroll-pt": [{ "scroll-pt": L() }], "scroll-pr": [{ "scroll-pr": L() }], "scroll-pb": [{ "scroll-pb": L() }], "scroll-pl": [{ "scroll-pl": L() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", K, V] }], fill: [{ fill: ["none", ...q()] }], "stroke-w": [{ stroke: [rt, tu, sn, bv] }], stroke: [{ stroke: ["none", ...q()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { "container-named": ["container-type"], overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, postfixLookupClassGroups: ["container-type"], orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] };
}, q1 = g1(L1);
function vl(...u) {
  return q1(zh(u));
}
const Ev = (u) => typeof u == "boolean" ? `${u}` : u === 0 ? "0" : u, xv = zh, Y1 = (u, c) => (r) => {
  var o;
  if ((c == null ? void 0 : c.variants) == null) return xv(u, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: f, defaultVariants: m } = c, p = Object.keys(f).map((v) => {
    const R = r == null ? void 0 : r[v], O = m == null ? void 0 : m[v];
    if (R === null) return null;
    const B = Ev(R) || Ev(O);
    return f[v][B];
  }), b = r && Object.entries(r).reduce((v, R) => {
    let [O, B] = R;
    return B === void 0 || (v[O] = B), v;
  }, {}), E = c == null || (o = c.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((v, R) => {
    let { class: O, className: B, ...X } = R;
    return Object.entries(X).every((et) => {
      let [U, Q] = et;
      return Array.isArray(Q) ? Q.includes({ ...m, ...b }[U]) : { ...m, ...b }[U] === Q;
    }) ? [...v, O, B] : v;
  }, []);
  return xv(u, p, E, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, G1 = Y1("group/button inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/80", outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-transparent dark:hover:bg-input/30", secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground", ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50", destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5", xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3", sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2", lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3", icon: "size-9", "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3", "icon-sm": "size-8", "icon-lg": "size-10" } }, defaultVariants: { variant: "default", size: "default" } });
function qr({ className: u, variant: c = "default", size: r = "default", asChild: o = false, ...f }) {
  const m = o ? K0 : "button";
  return x.jsx(m, { "data-slot": "button", "data-variant": c, "data-size": r, className: vl(G1({ variant: c, size: r, className: u })), ...f });
}
function X1({ ...u }) {
  return x.jsx(Yp, { "data-slot": "alert-dialog", ...u });
}
function Q1({ ...u }) {
  return x.jsx(Gp, { "data-slot": "alert-dialog-trigger", ...u });
}
function V1({ ...u }) {
  return x.jsx(Xp, { "data-slot": "alert-dialog-portal", ...u });
}
function Z1({ className: u, ...c }) {
  return x.jsx(Qp, { "data-slot": "alert-dialog-overlay", className: vl("fixed inset-0 z-50 bg-black/30 duration-100 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", u), ...c });
}
function K1({ className: u, size: c = "default", ...r }) {
  return x.jsxs(V1, { children: [x.jsx(Z1, {}), x.jsx(Vp, { "data-slot": "alert-dialog-content", "data-size": c, className: vl("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-6 rounded-4xl bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-md dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", u), ...r })] });
}
function k1({ className: u, ...c }) {
  return x.jsx("div", { "data-slot": "alert-dialog-header", className: vl("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", u), ...c });
}
function J1({ className: u, ...c }) {
  return x.jsx("div", { "data-slot": "alert-dialog-footer", className: vl("flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", u), ...c });
}
function W1({ className: u, ...c }) {
  return x.jsx(kp, { "data-slot": "alert-dialog-title", className: vl("font-heading text-lg font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", u), ...c });
}
function F1({ className: u, ...c }) {
  return x.jsx(Jp, { "data-slot": "alert-dialog-description", className: vl("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", u), ...c });
}
function $1({ className: u, variant: c = "default", size: r = "default", ...o }) {
  return x.jsx(qr, { variant: c, size: r, asChild: true, children: x.jsx(Zp, { "data-slot": "alert-dialog-action", className: vl(u), ...o }) });
}
function I1({ className: u, variant: c = "outline", size: r = "default", ...o }) {
  return x.jsx(qr, { variant: c, size: r, asChild: true, children: x.jsx(Kp, { "data-slot": "alert-dialog-cancel", className: vl(u), ...o }) });
}
const P1 = () => {
  const { files: u } = Pt();
  return x.jsxs("div", { className: "flex flex-col h-full", children: [x.jsxs("div", { className: "p-3 border-b shrink-0", children: [x.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Files" }), x.jsx(V0, {})] }), x.jsxs("div", { className: "flex-1 overflow-y-auto p-2 space-y-0.5", children: [u.length === 0 && x.jsx("p", { className: "text-xs text-muted-foreground text-center py-6", children: "No files yet" }), u.map((c) => x.jsx(tS, { file: c }, c.id))] })] });
}, tS = ({ file: u }) => {
  const { selectedFile: c, selectFile: r, removeFile: o } = Pt(), f = (c == null ? void 0 : c.id) === u.id;
  return x.jsxs("div", { className: "flex", children: [x.jsxs("button", { onClick: () => r(u.id), className: `w-full flex items-center gap-2 px-2 py-1.5 rounded text-left text-xs transition-colors ${f ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"}`, children: [x.jsx(O0, { className: "w-3 h-3 shrink-0" }), x.jsx("span", { className: "truncate", children: u.name })] }, u.id), x.jsxs(X1, { children: [x.jsxs(K1, { children: [x.jsxs(k1, { children: [x.jsx(W1, { children: "Are you absolutely sure?" }), x.jsxs(F1, { children: ["Deleting file ", u.name] })] }), x.jsxs(J1, { children: [x.jsx(I1, { children: "Cancel" }), x.jsx($1, { onClick: () => o(u.id), children: "Continue" })] })] }), x.jsx(Q1, { asChild: true, children: x.jsx(qr, { variant: "ghost", size: "xs", children: x.jsx(C0, { className: "w-3 h-3 shrink-0" }) }) })] })] });
}, eS = ({ rowHeight: u, listLength: c, render: r, containerClassName: o }) => {
  const f = A.useRef(null), [m, p] = A.useState(0), [b, E] = A.useState(0);
  A.useEffect(() => {
    if (!f.current) return;
    const O = new ResizeObserver(() => {
      f.current && p(f.current.clientHeight);
    });
    return O.observe(f.current), () => O.disconnect();
  }, []), A.useEffect(() => {
    const O = f.current;
    return O !== null && O.addEventListener("scroll", () => E(O.scrollTop)), () => {
      O !== null && O.removeEventListener("scroll", () => E(O.scrollTop));
    };
  }, [c, u]);
  const v = lS(u, c, b, m), R = [];
  for (let O = v.rowStart; O < v.rowEnd; O++) R.push(r(O));
  return x.jsxs("div", { className: "h-full overflow-y-auto " + o, ref: f, children: [x.jsx("div", { style: { height: v.virtualSpaceTop } }), R, x.jsx("div", { style: { height: v.virtualSpaceBottom } })] });
}, lS = (u, c, r, o) => {
  const m = Math.floor(o / u) + 10;
  if (c < m) return { rowStart: 0, rowEnd: c, virtualSpaceTop: 0, virtualSpaceBottom: 0 };
  const p = Math.min(c - m, Math.max(0, Math.floor(r / u) - 5)), b = Math.min(c, p + m), E = p * u, v = (c - m - p) * u;
  return { rowStart: p, rowEnd: b, virtualSpaceTop: E, virtualSpaceBottom: v };
}, nS = () => {
  const u = Pt((r) => r.selectedFile), c = Pt((r) => r.clearSelectedByte);
  return A.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && c();
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [c]), x.jsx(eS, { containerClassName: "p-6 font-mono", rowHeight: 32, listLength: (u == null ? void 0 : u.rows.length) ?? 0, render: (r) => x.jsx(aS, { index: r, row: u.rows[r] }, r) });
}, aS = ({ index: u, row: c }) => x.jsxs("div", { className: "flex items-center gap-4", children: [x.jsx("span", { className: "shrink-0 select-none text-muted-foreground/40 w-[10ch] text-right", children: c.hex_offset }), x.jsx("div", { className: "flex py-1 hover:bg-muted/20 rounded px-1 w-[calc(16*2.4ch+0.4ch)] shrink-0", children: c.hexadecimal.map((r, o) => x.jsx(Av, { index: u * 16 + o, value: r, className: "w-[2.4ch] px-[0.2ch]" }, "hex-" + (u * 16 + o))) }), x.jsx("div", { className: "flex py-1 hover:bg-muted/20 rounded px-1", children: c.ascii.map((r, o) => x.jsx(Av, { index: u * 16 + o, value: r, className: "w-[1.4ch] px-[0.2ch]" }, "ascii-" + (u * 16 + o))) })] }), Av = ({ index: u, value: c, className: r }) => {
  const o = Pt((E) => E.selectedByteOffset == u), f = Pt((E) => E.bytesHighlightedRange === null ? false : u >= E.bytesHighlightedRange[0] && u <= E.bytesHighlightedRange[1]), m = Pt((E) => E.selectByte);
  return x.jsx("span", { onClick: () => m(u), className: `${r} text-center cursor-pointer select-none rounded-sm ${o ? "bg-blue-500/20 text-blue-700 dark:text-blue-300" : f ? "bg-blue-100/20 text-blue-500 dark:text-blue-300" : "hover:bg-accent"}`, children: c }, u);
}, uS = ({ onToggleSidebar: u, sidebarOpen: c }) => {
  const r = Pt((f) => f.selectedByteOffset), o = Pt((f) => f.selectedFile);
  return x.jsxs("div", { className: "flex items-center gap-3 px-3 py-3 border-b font-mono text-sm shrink-0 h-8", children: [x.jsx("button", { onClick: u, className: "text-muted-foreground hover:text-foreground transition-colors", title: c ? "Collapse sidebar" : "Expand sidebar", children: x.jsxs("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: [x.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", strokeLinecap: "round", strokeLinejoin: "round" }), x.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 3v18" })] }) }), x.jsx("span", { className: "text-blue-500/80", children: o == null ? void 0 : o.name }), r !== null && x.jsxs("span", { className: "ml-auto text-xs text-blue-500/80 select-none", children: ["offset ", r, " \xB7 Esc to clear"] })] });
}, iS = () => {
  var _a, _b2;
  const u = Pt((f) => f.selectedByteOffset), c = Pt((f) => f.byteDetails), r = Pt((f) => f.highlightExtraBytes), o = Pt((f) => f.resetHighlightBytes);
  return u === null || !c ? x.jsx("div", { className: "flex items-center justify-center h-full text-muted-foreground text-sm", children: "Select a byte to inspect" }) : x.jsxs("div", { className: "h-full overflow-y-auto p-5 font-mono text-sm space-y-5", children: [x.jsxs("div", { className: "space-y-2", children: [x.jsx(Hi, { children: "ASCII" }), x.jsx(Gi, { label: "Symbol", value: c.ascii_symbol })] }), x.jsx(fn, {}), x.jsxs("button", { className: "w-full text-left cursor-pointer space-y-2", onBlur: o, onMouseLeave: o, onFocus: () => {
    if (c.utf8) return r(c.utf8.byte_start, c.utf8.byte_end);
  }, onMouseEnter: () => {
    if (c.utf8) return r(c.utf8.byte_start, c.utf8.byte_end);
  }, children: [x.jsxs(Hi, { children: ["UTF8 (", (_a = c.utf8) == null ? void 0 : _a.hex, ")"] }), x.jsx(Gi, { label: "", value: ((_b2 = c.utf8) == null ? void 0 : _b2.value) ?? null })] }), x.jsx(fn, {}), x.jsx(eu, { label: "U8", details: c.decimal_8, onFocus: () => r(u, u), onBlur: o, onMouseLeave: o, onMouseEnter: () => r(u, u) }), x.jsx(fn, {}), x.jsx(eu, { label: "U16", details: c.decimal_16, onFocus: () => r(u, u + 1), onBlur: o, onMouseLeave: o, onMouseEnter: () => r(u, u + 1) }), x.jsx(fn, {}), x.jsx(eu, { label: "U32", details: c.decimal_32, onFocus: () => r(u, u + 3), onBlur: o, onMouseLeave: o, onMouseEnter: () => r(u, u + 3) }), x.jsx(fn, {}), x.jsx(eu, { label: "U64", details: c.decimal_64, onFocus: () => r(u, u + 7), onBlur: o, onMouseLeave: o, onMouseEnter: () => r(u, u + 7) }), x.jsx(fn, {}), x.jsx(eu, { label: "U128", details: c.decimal_128, onFocus: () => r(u, u + 15), onBlur: o, onMouseLeave: o, onMouseEnter: () => r(u, u + 15) }), x.jsx(fn, {}), x.jsxs("div", { className: "space-y-2", children: [x.jsx(Hi, { children: "BINARY" }), x.jsx("div", { className: "flex gap-1", children: c.binary.split("").map((f, m) => x.jsx("div", { className: `w-7 h-7 flex items-center justify-center rounded text-xs font-bold ${f === "1" ? "bg-blue-500/20 text-blue-700 dark:text-blue-300" : "bg-muted text-muted-foreground"}`, children: f }, m)) })] })] });
}, eu = ({ label: u, details: c, onMouseEnter: r, onMouseLeave: o, onFocus: f, onBlur: m }) => x.jsxs("button", { className: "w-full text-left cursor-pointer space-y-1.5", onFocus: f, onBlur: m, onMouseEnter: r, onMouseLeave: o, children: [x.jsxs(Hi, { children: [u, " (", c == null ? void 0 : c.hex, ")"] }), x.jsx(Gi, { label: "BE", value: (c == null ? void 0 : c.be) ?? null }), x.jsx(Gi, { label: "LE", value: (c == null ? void 0 : c.le) ?? null })] }), Hi = ({ children: u }) => x.jsx("span", { className: "text-xs text-muted-foreground tracking-wider mb-1", children: u }), Gi = ({ label: u, value: c }) => x.jsxs("div", { className: "flex items-center justify-between", children: [x.jsx("span", { className: "text-xs text-muted-foreground w-6", children: u }), x.jsx("span", { className: "text-foreground", children: c === null ? x.jsx("span", { className: "text-muted-foreground/40", children: "\u2014" }) : c })] }), fn = () => x.jsx("div", { className: "border-t border-border/50" });
function cS() {
  const u = Pt((f) => f.error), c = Pt((f) => f.loading), [r, o] = A.useState(true);
  return A.useEffect(() => {
    Pt.getState().loadFiles();
  }, []), x.jsxs(x.Fragment, { children: [u && x.jsx("span", { className: "text-destructive text-sm p-4", children: u.message }), x.jsxs("div", { className: "flex h-dvh overflow-hidden", children: [x.jsx("div", { className: `shrink-0 border-r bg-muted/40 transition-all duration-200 ${r ? "w-56" : "w-0"}`, children: x.jsx("div", { className: "h-full w-56 overflow-hidden", children: x.jsx("div", { className: `h-full transition-opacity duration-200 ${c || !r ? "opacity-0 pointer-events-none" : "opacity-100"}`, children: x.jsx(P1, {}) }) }) }), x.jsx("div", { className: "flex-1 flex flex-col border-r h-dvh min-w-0", children: x.jsxs("div", { className: `flex flex-col h-full transition-opacity duration-300 ${c ? "opacity-0" : "opacity-100"}`, children: [x.jsx(uS, { onToggleSidebar: () => o((f) => !f), sidebarOpen: r }), x.jsx(nS, {})] }) }), x.jsx("div", { className: "w-90 shrink-0 border-l h-dvh", children: x.jsx("div", { className: `h-full transition-opacity duration-300 ${c ? "opacity-0" : "opacity-100"}`, children: x.jsx(iS, {}) }) })] })] });
}
p0.createRoot(document.getElementById("root")).render(x.jsx(A.StrictMode, { children: x.jsx(cS, {}) }));

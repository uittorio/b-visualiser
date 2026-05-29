(function() {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload")) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) s(M);
  new MutationObserver((M) => {
    for (const O of M) if (O.type === "childList") for (const q of O.addedNodes) q.tagName === "LINK" && q.rel === "modulepreload" && s(q);
  }).observe(document, { childList: true, subtree: true });
  function b(M) {
    const O = {};
    return M.integrity && (O.integrity = M.integrity), M.referrerPolicy && (O.referrerPolicy = M.referrerPolicy), M.crossOrigin === "use-credentials" ? O.credentials = "include" : M.crossOrigin === "anonymous" ? O.credentials = "omit" : O.credentials = "same-origin", O;
  }
  function s(M) {
    if (M.ep) return;
    M.ep = true;
    const O = b(M);
    fetch(M.href, O);
  }
})();
function Ev(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var bi = { exports: {} }, pu = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Bd;
function zv() {
  if (Bd) return pu;
  Bd = 1;
  var d = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
  function b(s, M, O) {
    var q = null;
    if (O !== void 0 && (q = "" + O), M.key !== void 0 && (q = "" + M.key), "key" in M) {
      O = {};
      for (var I in M) I !== "key" && (O[I] = M[I]);
    } else O = M;
    return M = O.ref, { $$typeof: d, type: s, key: q, ref: M !== void 0 ? M : null, props: O };
  }
  return pu.Fragment = v, pu.jsx = b, pu.jsxs = b, pu;
}
var Hd;
function _v() {
  return Hd || (Hd = 1, bi.exports = zv()), bi.exports;
}
var D = _v(), Ei = { exports: {} }, X = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var jd;
function Tv() {
  if (jd) return X;
  jd = 1;
  var d = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), q = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), nl = Symbol.iterator;
  function Ml(y) {
    return y === null || typeof y != "object" ? null : (y = nl && y[nl] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var jl = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Dl = Object.assign, Et = {};
  function kl(y, p, N) {
    this.props = y, this.context = p, this.refs = Et, this.updater = N || jl;
  }
  kl.prototype.isReactComponent = {}, kl.prototype.setState = function(y, p) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, p, "setState");
  }, kl.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function It() {
  }
  It.prototype = kl.prototype;
  function Cl(y, p, N) {
    this.props = y, this.context = p, this.refs = Et, this.updater = N || jl;
  }
  var it = Cl.prototype = new It();
  it.constructor = Cl, Dl(it, kl.prototype), it.isPureReactComponent = true;
  var pt = Array.isArray;
  function Ql() {
  }
  var F = { H: null, A: null, T: null, S: null }, Zl = Object.prototype.hasOwnProperty;
  function Ot(y, p, N) {
    var B = N.ref;
    return { $$typeof: d, type: y, key: p, ref: B !== void 0 ? B : null, props: N };
  }
  function Ke(y, p) {
    return Ot(y.type, p, y.props);
  }
  function Mt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === d;
  }
  function Ll(y) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(N) {
      return p[N];
    });
  }
  var Ae = /\/+/g;
  function Bt(y, p) {
    return typeof y == "object" && y !== null && y.key != null ? Ll("" + y.key) : p.toString(36);
  }
  function zt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Ql, Ql) : (y.status = "pending", y.then(function(p) {
          y.status === "pending" && (y.status = "fulfilled", y.value = p);
        }, function(p) {
          y.status === "pending" && (y.status = "rejected", y.reason = p);
        })), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function z(y, p, N, B, Q) {
    var K = typeof y;
    (K === "undefined" || K === "boolean") && (y = null);
    var el = false;
    if (y === null) el = true;
    else switch (K) {
      case "bigint":
      case "string":
      case "number":
        el = true;
        break;
      case "object":
        switch (y.$$typeof) {
          case d:
          case v:
            el = true;
            break;
          case V:
            return el = y._init, z(el(y._payload), p, N, B, Q);
        }
    }
    if (el) return Q = Q(y), el = B === "" ? "." + Bt(y, 0) : B, pt(Q) ? (N = "", el != null && (N = el.replace(Ae, "$&/") + "/"), z(Q, p, N, "", function(Ra) {
      return Ra;
    })) : Q != null && (Mt(Q) && (Q = Ke(Q, N + (Q.key == null || y && y.key === Q.key ? "" : ("" + Q.key).replace(Ae, "$&/") + "/") + el)), p.push(Q)), 1;
    el = 0;
    var Yl = B === "" ? "." : B + ":";
    if (pt(y)) for (var gl = 0; gl < y.length; gl++) B = y[gl], K = Yl + Bt(B, gl), el += z(B, p, N, K, Q);
    else if (gl = Ml(y), typeof gl == "function") for (y = gl.call(y), gl = 0; !(B = y.next()).done; ) B = B.value, K = Yl + Bt(B, gl++), el += z(B, p, N, K, Q);
    else if (K === "object") {
      if (typeof y.then == "function") return z(zt(y), p, N, B, Q);
      throw p = String(y), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.");
    }
    return el;
  }
  function U(y, p, N) {
    if (y == null) return y;
    var B = [], Q = 0;
    return z(y, B, "", "", function(K) {
      return p.call(N, K, Q++);
    }), B;
  }
  function G(y) {
    if (y._status === -1) {
      var p = y._result;
      p = p(), p.then(function(N) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = N);
      }, function(N) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = N);
      }), y._status === -1 && (y._status = 0, y._result = p);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var cl = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var p = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y), error: y });
      if (!window.dispatchEvent(p)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, ol = { map: U, forEach: function(y, p, N) {
    U(y, function() {
      p.apply(this, arguments);
    }, N);
  }, count: function(y) {
    var p = 0;
    return U(y, function() {
      p++;
    }), p;
  }, toArray: function(y) {
    return U(y, function(p) {
      return p;
    }) || [];
  }, only: function(y) {
    if (!Mt(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } };
  return X.Activity = j, X.Children = ol, X.Component = kl, X.Fragment = b, X.Profiler = M, X.PureComponent = Cl, X.StrictMode = s, X.Suspense = x, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, X.__COMPILER_RUNTIME = { __proto__: null, c: function(y) {
    return F.H.useMemoCache(y);
  } }, X.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, X.cacheSignal = function() {
    return null;
  }, X.cloneElement = function(y, p, N) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var B = Dl({}, y.props), Q = y.key;
    if (p != null) for (K in p.key !== void 0 && (Q = "" + p.key), p) !Zl.call(p, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && p.ref === void 0 || (B[K] = p[K]);
    var K = arguments.length - 2;
    if (K === 1) B.children = N;
    else if (1 < K) {
      for (var el = Array(K), Yl = 0; Yl < K; Yl++) el[Yl] = arguments[Yl + 2];
      B.children = el;
    }
    return Ot(y.type, Q, B);
  }, X.createContext = function(y) {
    return y = { $$typeof: q, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null }, y.Provider = y, y.Consumer = { $$typeof: O, _context: y }, y;
  }, X.createElement = function(y, p, N) {
    var B, Q = {}, K = null;
    if (p != null) for (B in p.key !== void 0 && (K = "" + p.key), p) Zl.call(p, B) && B !== "key" && B !== "__self" && B !== "__source" && (Q[B] = p[B]);
    var el = arguments.length - 2;
    if (el === 1) Q.children = N;
    else if (1 < el) {
      for (var Yl = Array(el), gl = 0; gl < el; gl++) Yl[gl] = arguments[gl + 2];
      Q.children = Yl;
    }
    if (y && y.defaultProps) for (B in el = y.defaultProps, el) Q[B] === void 0 && (Q[B] = el[B]);
    return Ot(y, K, Q);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(y) {
    return { $$typeof: I, render: y };
  }, X.isValidElement = Mt, X.lazy = function(y) {
    return { $$typeof: V, _payload: { _status: -1, _result: y }, _init: G };
  }, X.memo = function(y, p) {
    return { $$typeof: A, type: y, compare: p === void 0 ? null : p };
  }, X.startTransition = function(y) {
    var p = F.T, N = {};
    F.T = N;
    try {
      var B = y(), Q = F.S;
      Q !== null && Q(N, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(Ql, cl);
    } catch (K) {
      cl(K);
    } finally {
      p !== null && N.types !== null && (p.types = N.types), F.T = p;
    }
  }, X.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, X.use = function(y) {
    return F.H.use(y);
  }, X.useActionState = function(y, p, N) {
    return F.H.useActionState(y, p, N);
  }, X.useCallback = function(y, p) {
    return F.H.useCallback(y, p);
  }, X.useContext = function(y) {
    return F.H.useContext(y);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(y, p) {
    return F.H.useDeferredValue(y, p);
  }, X.useEffect = function(y, p) {
    return F.H.useEffect(y, p);
  }, X.useEffectEvent = function(y) {
    return F.H.useEffectEvent(y);
  }, X.useId = function() {
    return F.H.useId();
  }, X.useImperativeHandle = function(y, p, N) {
    return F.H.useImperativeHandle(y, p, N);
  }, X.useInsertionEffect = function(y, p) {
    return F.H.useInsertionEffect(y, p);
  }, X.useLayoutEffect = function(y, p) {
    return F.H.useLayoutEffect(y, p);
  }, X.useMemo = function(y, p) {
    return F.H.useMemo(y, p);
  }, X.useOptimistic = function(y, p) {
    return F.H.useOptimistic(y, p);
  }, X.useReducer = function(y, p, N) {
    return F.H.useReducer(y, p, N);
  }, X.useRef = function(y) {
    return F.H.useRef(y);
  }, X.useState = function(y) {
    return F.H.useState(y);
  }, X.useSyncExternalStore = function(y, p, N) {
    return F.H.useSyncExternalStore(y, p, N);
  }, X.useTransition = function() {
    return F.H.useTransition();
  }, X.version = "19.2.4", X;
}
var Cd;
function Ui() {
  return Cd || (Cd = 1, Ei.exports = Tv()), Ei.exports;
}
var bt = Ui();
const Fn = Ev(bt);
var zi = { exports: {} }, Ou = {}, _i = { exports: {} }, Ti = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var qd;
function Av() {
  return qd || (qd = 1, (function(d) {
    function v(z, U) {
      var G = z.length;
      z.push(U);
      l: for (; 0 < G; ) {
        var cl = G - 1 >>> 1, ol = z[cl];
        if (0 < M(ol, U)) z[cl] = U, z[G] = ol, G = cl;
        else break l;
      }
    }
    function b(z) {
      return z.length === 0 ? null : z[0];
    }
    function s(z) {
      if (z.length === 0) return null;
      var U = z[0], G = z.pop();
      if (G !== U) {
        z[0] = G;
        l: for (var cl = 0, ol = z.length, y = ol >>> 1; cl < y; ) {
          var p = 2 * (cl + 1) - 1, N = z[p], B = p + 1, Q = z[B];
          if (0 > M(N, G)) B < ol && 0 > M(Q, N) ? (z[cl] = Q, z[B] = G, cl = B) : (z[cl] = N, z[p] = G, cl = p);
          else if (B < ol && 0 > M(Q, G)) z[cl] = Q, z[B] = G, cl = B;
          else break l;
        }
      }
      return U;
    }
    function M(z, U) {
      var G = z.sortIndex - U.sortIndex;
      return G !== 0 ? G : z.id - U.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      d.unstable_now = function() {
        return O.now();
      };
    } else {
      var q = Date, I = q.now();
      d.unstable_now = function() {
        return q.now() - I;
      };
    }
    var x = [], A = [], V = 1, j = null, nl = 3, Ml = false, jl = false, Dl = false, Et = false, kl = typeof setTimeout == "function" ? setTimeout : null, It = typeof clearTimeout == "function" ? clearTimeout : null, Cl = typeof setImmediate < "u" ? setImmediate : null;
    function it(z) {
      for (var U = b(A); U !== null; ) {
        if (U.callback === null) s(A);
        else if (U.startTime <= z) s(A), U.sortIndex = U.expirationTime, v(x, U);
        else break;
        U = b(A);
      }
    }
    function pt(z) {
      if (Dl = false, it(z), !jl) if (b(x) !== null) jl = true, Ql || (Ql = true, Ll());
      else {
        var U = b(A);
        U !== null && zt(pt, U.startTime - z);
      }
    }
    var Ql = false, F = -1, Zl = 5, Ot = -1;
    function Ke() {
      return Et ? true : !(d.unstable_now() - Ot < Zl);
    }
    function Mt() {
      if (Et = false, Ql) {
        var z = d.unstable_now();
        Ot = z;
        var U = true;
        try {
          l: {
            jl = false, Dl && (Dl = false, It(F), F = -1), Ml = true;
            var G = nl;
            try {
              t: {
                for (it(z), j = b(x); j !== null && !(j.expirationTime > z && Ke()); ) {
                  var cl = j.callback;
                  if (typeof cl == "function") {
                    j.callback = null, nl = j.priorityLevel;
                    var ol = cl(j.expirationTime <= z);
                    if (z = d.unstable_now(), typeof ol == "function") {
                      j.callback = ol, it(z), U = true;
                      break t;
                    }
                    j === b(x) && s(x), it(z);
                  } else s(x);
                  j = b(x);
                }
                if (j !== null) U = true;
                else {
                  var y = b(A);
                  y !== null && zt(pt, y.startTime - z), U = false;
                }
              }
              break l;
            } finally {
              j = null, nl = G, Ml = false;
            }
            U = void 0;
          }
        } finally {
          U ? Ll() : Ql = false;
        }
      }
    }
    var Ll;
    if (typeof Cl == "function") Ll = function() {
      Cl(Mt);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Bt = Ae.port2;
      Ae.port1.onmessage = Mt, Ll = function() {
        Bt.postMessage(null);
      };
    } else Ll = function() {
      kl(Mt, 0);
    };
    function zt(z, U) {
      F = kl(function() {
        z(d.unstable_now());
      }, U);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, d.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Zl = 0 < z ? Math.floor(1e3 / z) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return nl;
    }, d.unstable_next = function(z) {
      switch (nl) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = nl;
      }
      var G = nl;
      nl = U;
      try {
        return z();
      } finally {
        nl = G;
      }
    }, d.unstable_requestPaint = function() {
      Et = true;
    }, d.unstable_runWithPriority = function(z, U) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var G = nl;
      nl = z;
      try {
        return U();
      } finally {
        nl = G;
      }
    }, d.unstable_scheduleCallback = function(z, U, G) {
      var cl = d.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? cl + G : cl) : G = cl, z) {
        case 1:
          var ol = -1;
          break;
        case 2:
          ol = 250;
          break;
        case 5:
          ol = 1073741823;
          break;
        case 4:
          ol = 1e4;
          break;
        default:
          ol = 5e3;
      }
      return ol = G + ol, z = { id: V++, callback: U, priorityLevel: z, startTime: G, expirationTime: ol, sortIndex: -1 }, G > cl ? (z.sortIndex = G, v(A, z), b(x) === null && z === b(A) && (Dl ? (It(F), F = -1) : Dl = true, zt(pt, G - cl))) : (z.sortIndex = ol, v(x, z), jl || Ml || (jl = true, Ql || (Ql = true, Ll()))), z;
    }, d.unstable_shouldYield = Ke, d.unstable_wrapCallback = function(z) {
      var U = nl;
      return function() {
        var G = nl;
        nl = U;
        try {
          return z.apply(this, arguments);
        } finally {
          nl = G;
        }
      };
    };
  })(Ti)), Ti;
}
var Yd;
function pv() {
  return Yd || (Yd = 1, _i.exports = Av()), _i.exports;
}
var Ai = { exports: {} }, ql = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Gd;
function Ov() {
  if (Gd) return ql;
  Gd = 1;
  var d = Ui();
  function v(x) {
    var A = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var V = 2; V < arguments.length; V++) A += "&args[]=" + encodeURIComponent(arguments[V]);
    }
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b() {
  }
  var s = { d: { f: b, r: function() {
    throw Error(v(522));
  }, D: b, C: b, L: b, m: b, X: b, S: b, M: b }, p: 0, findDOMNode: null }, M = Symbol.for("react.portal");
  function O(x, A, V) {
    var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: M, key: j == null ? null : "" + j, children: x, containerInfo: A, implementation: V };
  }
  var q = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function I(x, A) {
    if (x === "font") return "";
    if (typeof A == "string") return A === "use-credentials" ? A : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ql.createPortal = function(x, A) {
    var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11) throw Error(v(299));
    return O(x, A, null, V);
  }, ql.flushSync = function(x) {
    var A = q.T, V = s.p;
    try {
      if (q.T = null, s.p = 2, x) return x();
    } finally {
      q.T = A, s.p = V, s.d.f();
    }
  }, ql.preconnect = function(x, A) {
    typeof x == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, s.d.C(x, A));
  }, ql.prefetchDNS = function(x) {
    typeof x == "string" && s.d.D(x);
  }, ql.preinit = function(x, A) {
    if (typeof x == "string" && A && typeof A.as == "string") {
      var V = A.as, j = I(V, A.crossOrigin), nl = typeof A.integrity == "string" ? A.integrity : void 0, Ml = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      V === "style" ? s.d.S(x, typeof A.precedence == "string" ? A.precedence : void 0, { crossOrigin: j, integrity: nl, fetchPriority: Ml }) : V === "script" && s.d.X(x, { crossOrigin: j, integrity: nl, fetchPriority: Ml, nonce: typeof A.nonce == "string" ? A.nonce : void 0 });
    }
  }, ql.preinitModule = function(x, A) {
    if (typeof x == "string") if (typeof A == "object" && A !== null) {
      if (A.as == null || A.as === "script") {
        var V = I(A.as, A.crossOrigin);
        s.d.M(x, { crossOrigin: V, integrity: typeof A.integrity == "string" ? A.integrity : void 0, nonce: typeof A.nonce == "string" ? A.nonce : void 0 });
      }
    } else A == null && s.d.M(x);
  }, ql.preload = function(x, A) {
    if (typeof x == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var V = A.as, j = I(V, A.crossOrigin);
      s.d.L(x, V, { crossOrigin: j, integrity: typeof A.integrity == "string" ? A.integrity : void 0, nonce: typeof A.nonce == "string" ? A.nonce : void 0, type: typeof A.type == "string" ? A.type : void 0, fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0, referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0, imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0, imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0, media: typeof A.media == "string" ? A.media : void 0 });
    }
  }, ql.preloadModule = function(x, A) {
    if (typeof x == "string") if (A) {
      var V = I(A.as, A.crossOrigin);
      s.d.m(x, { as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0, crossOrigin: V, integrity: typeof A.integrity == "string" ? A.integrity : void 0 });
    } else s.d.m(x);
  }, ql.requestFormReset = function(x) {
    s.d.r(x);
  }, ql.unstable_batchedUpdates = function(x, A) {
    return x(A);
  }, ql.useFormState = function(x, A, V) {
    return q.H.useFormState(x, A, V);
  }, ql.useFormStatus = function() {
    return q.H.useHostTransitionStatus();
  }, ql.version = "19.2.4", ql;
}
var Xd;
function Mv() {
  if (Xd) return Ai.exports;
  Xd = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
    } catch (v) {
      console.error(v);
    }
  }
  return d(), Ai.exports = Ov(), Ai.exports;
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
var Qd;
function Dv() {
  if (Qd) return Ou;
  Qd = 1;
  var d = pv(), v = Ui(), b = Mv();
  function s(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function M(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function O(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function q(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function I(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function x(l) {
    if (O(l) !== l) throw Error(s(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (t = O(l), t === null) throw Error(s(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return x(u), l;
          if (n === a) return x(u), t;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var c = false, f = u.child; f; ) {
          if (f === e) {
            c = true, e = u, a = n;
            break;
          }
          if (f === a) {
            c = true, a = u, e = n;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === e) {
              c = true, e = n, a = u;
              break;
            }
            if (f === a) {
              c = true, a = n, e = u;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? l : t;
  }
  function V(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = V(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var j = Object.assign, nl = Symbol.for("react.element"), Ml = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Dl = Symbol.for("react.fragment"), Et = Symbol.for("react.strict_mode"), kl = Symbol.for("react.profiler"), It = Symbol.for("react.consumer"), Cl = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), Ql = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), Zl = Symbol.for("react.lazy"), Ot = Symbol.for("react.activity"), Ke = Symbol.for("react.memo_cache_sentinel"), Mt = Symbol.iterator;
  function Ll(l) {
    return l === null || typeof l != "object" ? null : (l = Mt && l[Mt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ae = Symbol.for("react.client.reference");
  function Bt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Ae ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Dl:
        return "Fragment";
      case kl:
        return "Profiler";
      case Et:
        return "StrictMode";
      case pt:
        return "Suspense";
      case Ql:
        return "SuspenseList";
      case Ot:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case jl:
        return "Portal";
      case Cl:
        return l.displayName || "Context";
      case It:
        return (l._context.displayName || "Context") + ".Consumer";
      case it:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case F:
        return t = l.displayName || null, t !== null ? t : Bt(l.type) || "Memo";
      case Zl:
        t = l._payload, l = l._init;
        try {
          return Bt(l(t));
        } catch {
        }
    }
    return null;
  }
  var zt = Array.isArray, z = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = { pending: false, data: null, method: null, action: null }, cl = [], ol = -1;
  function y(l) {
    return { current: l };
  }
  function p(l) {
    0 > ol || (l.current = cl[ol], cl[ol] = null, ol--);
  }
  function N(l, t) {
    ol++, cl[ol] = l.current, l.current = t;
  }
  var B = y(null), Q = y(null), K = y(null), el = y(null);
  function Yl(l, t) {
    switch (N(K, t), N(Q, l), N(B, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? ed(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = ed(t), l = ad(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    p(B), N(B, l);
  }
  function gl() {
    p(B), p(Q), p(K);
  }
  function Ra(l) {
    l.memoizedState !== null && N(el, l);
    var t = B.current, e = ad(t, l.type);
    t !== e && (N(Q, l), N(B, e));
  }
  function xu(l) {
    Q.current === l && (p(B), p(Q)), el.current === l && (p(el), zu._currentValue = G);
  }
  var lc, xi;
  function pe(l) {
    if (lc === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      lc = t && t[1] || "", xi = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + lc + l + xi;
  }
  var tc = false;
  function ec(l, t) {
    if (!l || tc) return "";
    tc = true;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var T = function() {
              throw Error();
            };
            if (Object.defineProperty(T.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(T, []);
              } catch (S) {
                var g = S;
              }
              Reflect.construct(l, [], T);
            } else {
              try {
                T.call();
              } catch (S) {
                g = S;
              }
              l.call(T.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (S) {
              g = S;
            }
            (T = l()) && typeof T.catch == "function" && T.catch(function() {
            });
          }
        } catch (S) {
          if (S && g && typeof S.stack == "string") return [S.stack, g.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = a.DetermineComponentFrameRoot(), c = n[0], f = n[1];
      if (c && f) {
        var i = c.split(`
`), h = f.split(`
`);
        for (u = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; u < h.length && !h[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (a === i.length || u === h.length) for (a = i.length - 1, u = h.length - 1; 1 <= a && 0 <= u && i[a] !== h[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--) if (i[a] !== h[u]) {
          if (a !== 1 || u !== 1) do
            if (a--, u--, 0 > u || i[a] !== h[u]) {
              var E = `
` + i[a].replace(" at new ", " at ");
              return l.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", l.displayName)), E;
            }
          while (1 <= a && 0 <= u);
          break;
        }
      }
    } finally {
      tc = false, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? pe(e) : "";
  }
  function kd(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return pe(l.type);
      case 16:
        return pe("Lazy");
      case 13:
        return l.child !== t && t !== null ? pe("Suspense Fallback") : pe("Suspense");
      case 19:
        return pe("SuspenseList");
      case 0:
      case 15:
        return ec(l.type, false);
      case 11:
        return ec(l.type.render, false);
      case 1:
        return ec(l.type, true);
      case 31:
        return pe("Activity");
      default:
        return "";
    }
  }
  function Ri(l) {
    try {
      var t = "", e = null;
      do
        t += kd(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ac = Object.prototype.hasOwnProperty, uc = d.unstable_scheduleCallback, nc = d.unstable_cancelCallback, Id = d.unstable_shouldYield, Pd = d.unstable_requestPaint, Il = d.unstable_now, ly = d.unstable_getCurrentPriorityLevel, Bi = d.unstable_ImmediatePriority, Hi = d.unstable_UserBlockingPriority, Ru = d.unstable_NormalPriority, ty = d.unstable_LowPriority, ji = d.unstable_IdlePriority, ey = d.log, ay = d.unstable_setDisableYieldValue, Ba = null, Pl = null;
  function Pt(l) {
    if (typeof ey == "function" && ay(l), Pl && typeof Pl.setStrictMode == "function") try {
      Pl.setStrictMode(Ba, l);
    } catch {
    }
  }
  var lt = Math.clz32 ? Math.clz32 : cy, uy = Math.log, ny = Math.LN2;
  function cy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (uy(l) / ny | 0) | 0;
  }
  var Bu = 256, Hu = 262144, ju = 4194304;
  function Oe(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Cu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~n, a !== 0 ? u = Oe(a) : (c &= f, c !== 0 ? u = Oe(c) : e || (e = f & ~l, e !== 0 && (u = Oe(e))))) : (f = a & ~n, f !== 0 ? u = Oe(f) : c !== 0 ? u = Oe(c) : e || (e = a & ~l, e !== 0 && (u = Oe(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Ha(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function fy(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function Ci() {
    var l = ju;
    return ju <<= 1, (ju & 62914560) === 0 && (ju = 4194304), l;
  }
  function cc(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function ja(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function iy(l, t, e, a, u, n) {
    var c = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var f = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var E = 31 - lt(e), T = 1 << E;
      f[E] = 0, i[E] = -1;
      var g = h[E];
      if (g !== null) for (h[E] = null, E = 0; E < g.length; E++) {
        var S = g[E];
        S !== null && (S.lane &= -536870913);
      }
      e &= ~T;
    }
    a !== 0 && qi(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function qi(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - lt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Yi(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - lt(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function Gi(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : fc(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function fc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ic(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xi() {
    var l = U.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Od(l.type));
  }
  function Qi(l, t) {
    var e = U.p;
    try {
      return U.p = l, t();
    } finally {
      U.p = e;
    }
  }
  var le = Math.random().toString(36).slice(2), Ul = "__reactFiber$" + le, Vl = "__reactProps$" + le, Je = "__reactContainer$" + le, sc = "__reactEvents$" + le, sy = "__reactListeners$" + le, oy = "__reactHandles$" + le, Zi = "__reactResources$" + le, Ca = "__reactMarker$" + le;
  function oc(l) {
    delete l[Ul], delete l[Vl], delete l[sc], delete l[sy], delete l[oy];
  }
  function we(l) {
    var t = l[Ul];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[Je] || e[Ul]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (l = od(l); l !== null; ) {
          if (e = l[Ul]) return e;
          l = od(l);
        }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function We(l) {
    if (l = l[Ul] || l[Je]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function qa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(s(33));
  }
  function $e(l) {
    var t = l[Zi];
    return t || (t = l[Zi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function pl(l) {
    l[Ca] = true;
  }
  var Li = /* @__PURE__ */ new Set(), Vi = {};
  function Me(l, t) {
    Fe(l, t), Fe(l + "Capture", t);
  }
  function Fe(l, t) {
    for (Vi[l] = t, l = 0; l < t.length; l++) Li.add(t[l]);
  }
  var dy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ki = {}, Ji = {};
  function yy(l) {
    return ac.call(Ji, l) ? true : ac.call(Ki, l) ? false : dy.test(l) ? Ji[l] = true : (Ki[l] = true, false);
  }
  function qu(l, t, e) {
    if (yy(t)) if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Yu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Ht(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function st(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function wi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function my(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return u.call(this);
      }, set: function(c) {
        e = "" + c, n.call(this, c);
      } }), Object.defineProperty(l, t, { enumerable: a.enumerable }), { getValue: function() {
        return e;
      }, setValue: function(c) {
        e = "" + c;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function dc(l) {
    if (!l._valueTracker) {
      var t = wi(l) ? "checked" : "value";
      l._valueTracker = my(l, t, "" + l[t]);
    }
  }
  function Wi(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var e = t.getValue(), a = "";
    return l && (a = wi(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), true) : false;
  }
  function Gu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var vy = /[\n"\\]/g;
  function ot(l) {
    return l.replace(vy, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function yc(l, t, e, a, u, n, c, f) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? mc(l, c, st(t)) : e != null ? mc(l, c, st(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + st(f) : l.removeAttribute("name");
  }
  function $i(l, t, e, a, u, n, c, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        dc(l);
        return;
      }
      e = e != null ? "" + st(e) : "", t = t != null ? "" + st(t) : e, f || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = f ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), dc(l);
  }
  function mc(l, t, e) {
    t === "number" && Gu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function ke(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = true;
      for (e = 0; e < l.length; e++) u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = true);
    } else {
      for (e = "" + st(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = true, a && (l[u].defaultSelected = true);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Fi(l, t, e) {
    if (t != null && (t = "" + st(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + st(e) : "";
  }
  function ki(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (zt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = st(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), dc(l);
  }
  function Ie(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var ry = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Ii(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || ry.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Pi(l, t, e) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (l = l.style, e != null) {
      for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t) a = t[u], t.hasOwnProperty(u) && e[u] !== a && Ii(l, u, a);
    } else for (var n in t) t.hasOwnProperty(n) && Ii(l, n, t[n]);
  }
  function vc(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
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
  var hy = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), gy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xu(l) {
    return gy.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function jt() {
  }
  var rc = null;
  function hc(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Pe = null, la = null;
  function ls(l) {
    var t = We(l);
    if (t && (l = t.stateNode)) {
      var e = l[Vl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (yc(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + ot("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Vl] || null;
                if (!u) throw Error(s(90));
                yc(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && Wi(a);
          }
          break l;
        case "textarea":
          Fi(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && ke(l, !!e.multiple, t, false);
      }
    }
  }
  var gc = false;
  function ts(l, t, e) {
    if (gc) return l(t, e);
    gc = true;
    try {
      var a = l(t);
      return a;
    } finally {
      if (gc = false, (Pe !== null || la !== null) && (Dn(), Pe && (t = Pe, l = la, la = Pe = null, ls(t), l))) for (t = 0; t < l.length; t++) ls(l[t]);
    }
  }
  function Ya(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Vl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(s(231, t, typeof e));
    return e;
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Sc = false;
  if (Ct) try {
    var Ga = {};
    Object.defineProperty(Ga, "passive", { get: function() {
      Sc = true;
    } }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
  } catch {
    Sc = false;
  }
  var te = null, bc = null, Qu = null;
  function es() {
    if (Qu) return Qu;
    var l, t = bc, e = t.length, a, u = "value" in te ? te.value : te.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var c = e - l;
    for (a = 1; a <= c && t[e - a] === u[n - a]; a++) ;
    return Qu = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Zu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Lu() {
    return true;
  }
  function as() {
    return false;
  }
  function Kl(l) {
    function t(e, a, u, n, c) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var f in l) l.hasOwnProperty(f) && (e = l[f], this[f] = e ? e(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Lu : as, this.isPropagationStopped = as, this;
    }
    return j(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Lu);
    }, stopPropagation: function() {
      var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Lu);
    }, persist: function() {
    }, isPersistent: Lu }), t;
  }
  var De = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Vu = Kl(De), Xa = j({}, De, { view: 0, detail: 0 }), Sy = Kl(Xa), Ec, zc, Qa, Ku = j({}, Xa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tc, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== Qa && (Qa && l.type === "mousemove" ? (Ec = l.screenX - Qa.screenX, zc = l.screenY - Qa.screenY) : zc = Ec = 0, Qa = l), Ec);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : zc;
  } }), us = Kl(Ku), by = j({}, Ku, { dataTransfer: 0 }), Ey = Kl(by), zy = j({}, Xa, { relatedTarget: 0 }), _c = Kl(zy), _y = j({}, De, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ty = Kl(_y), Ay = j({}, De, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), py = Kl(Ay), Oy = j({}, De, { data: 0 }), ns = Kl(Oy), My = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Dy = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Uy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ny(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Uy[l]) ? !!t[l] : false;
  }
  function Tc() {
    return Ny;
  }
  var xy = j({}, Xa, { key: function(l) {
    if (l.key) {
      var t = My[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = Zu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Dy[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tc, charCode: function(l) {
    return l.type === "keypress" ? Zu(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? Zu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), Ry = Kl(xy), By = j({}, Ku, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cs = Kl(By), Hy = j({}, Xa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tc }), jy = Kl(Hy), Cy = j({}, De, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qy = Kl(Cy), Yy = j({}, Ku, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Gy = Kl(Yy), Xy = j({}, De, { newState: 0, oldState: 0 }), Qy = Kl(Xy), Zy = [9, 13, 27, 32], Ac = Ct && "CompositionEvent" in window, Za = null;
  Ct && "documentMode" in document && (Za = document.documentMode);
  var Ly = Ct && "TextEvent" in window && !Za, fs = Ct && (!Ac || Za && 8 < Za && 11 >= Za), is = " ", ss = false;
  function os(l, t) {
    switch (l) {
      case "keyup":
        return Zy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function ds(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ta = false;
  function Vy(l, t) {
    switch (l) {
      case "compositionend":
        return ds(t);
      case "keypress":
        return t.which !== 32 ? null : (ss = true, is);
      case "textInput":
        return l = t.data, l === is && ss ? null : l;
      default:
        return null;
    }
  }
  function Ky(l, t) {
    if (ta) return l === "compositionend" || !Ac && os(l, t) ? (l = es(), Qu = bc = te = null, ta = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return fs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jy = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ys(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Jy[l.type] : t === "textarea";
  }
  function ms(l, t, e, a) {
    Pe ? la ? la.push(a) : la = [a] : Pe = a, t = jn(t, "onChange"), 0 < t.length && (e = new Vu("onChange", "change", null, e, a), l.push({ event: e, listeners: t }));
  }
  var La = null, Va = null;
  function wy(l) {
    F0(l, 0);
  }
  function Ju(l) {
    var t = qa(l);
    if (Wi(t)) return l;
  }
  function vs(l, t) {
    if (l === "change") return t;
  }
  var rs = false;
  if (Ct) {
    var pc;
    if (Ct) {
      var Oc = "oninput" in document;
      if (!Oc) {
        var hs = document.createElement("div");
        hs.setAttribute("oninput", "return;"), Oc = typeof hs.oninput == "function";
      }
      pc = Oc;
    } else pc = false;
    rs = pc && (!document.documentMode || 9 < document.documentMode);
  }
  function gs() {
    La && (La.detachEvent("onpropertychange", Ss), Va = La = null);
  }
  function Ss(l) {
    if (l.propertyName === "value" && Ju(Va)) {
      var t = [];
      ms(t, Va, l, hc(l)), ts(wy, t);
    }
  }
  function Wy(l, t, e) {
    l === "focusin" ? (gs(), La = t, Va = e, La.attachEvent("onpropertychange", Ss)) : l === "focusout" && gs();
  }
  function $y(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return Ju(Va);
  }
  function Fy(l, t) {
    if (l === "click") return Ju(t);
  }
  function ky(l, t) {
    if (l === "input" || l === "change") return Ju(t);
  }
  function Iy(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var tt = typeof Object.is == "function" ? Object.is : Iy;
  function Ka(l, t) {
    if (tt(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return false;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!ac.call(t, u) || !tt(l[u], t[u])) return false;
    }
    return true;
  }
  function bs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Es(l, t) {
    var e = bs(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t) return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = bs(e);
    }
  }
  function zs(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? zs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function _s(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Gu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Gu(l.document);
    }
    return t;
  }
  function Mc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Py = Ct && "documentMode" in document && 11 >= document.documentMode, ea = null, Dc = null, Ja = null, Uc = false;
  function Ts(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Uc || ea == null || ea !== Gu(a) || (a = ea, "selectionStart" in a && Mc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ja && Ka(Ja, a) || (Ja = a, a = jn(Dc, "onSelect"), 0 < a.length && (t = new Vu("onSelect", "select", null, t, e), l.push({ event: t, listeners: a }), t.target = ea)));
  }
  function Ue(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var aa = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionrun: Ue("Transition", "TransitionRun"), transitionstart: Ue("Transition", "TransitionStart"), transitioncancel: Ue("Transition", "TransitionCancel"), transitionend: Ue("Transition", "TransitionEnd") }, Nc = {}, As = {};
  Ct && (As = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function Ne(l) {
    if (Nc[l]) return Nc[l];
    if (!aa[l]) return l;
    var t = aa[l], e;
    for (e in t) if (t.hasOwnProperty(e) && e in As) return Nc[l] = t[e];
    return l;
  }
  var ps = Ne("animationend"), Os = Ne("animationiteration"), Ms = Ne("animationstart"), lm = Ne("transitionrun"), tm = Ne("transitionstart"), em = Ne("transitioncancel"), Ds = Ne("transitionend"), Us = /* @__PURE__ */ new Map(), xc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  xc.push("scrollEnd");
  function _t(l, t) {
    Us.set(l, t), Me(t, [l]);
  }
  var wu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, dt = [], ua = 0, Rc = 0;
  function Wu() {
    for (var l = ua, t = Rc = ua = 0; t < l; ) {
      var e = dt[t];
      dt[t++] = null;
      var a = dt[t];
      dt[t++] = null;
      var u = dt[t];
      dt[t++] = null;
      var n = dt[t];
      if (dt[t++] = null, a !== null && u !== null) {
        var c = a.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
      }
      n !== 0 && Ns(e, u, n);
    }
  }
  function $u(l, t, e, a) {
    dt[ua++] = l, dt[ua++] = t, dt[ua++] = e, dt[ua++] = a, Rc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Bc(l, t, e, a) {
    return $u(l, t, e, a), Fu(l);
  }
  function xe(l, t) {
    return $u(l, null, null, t), Fu(l);
  }
  function Ns(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = false, n = l.return; n !== null; ) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - lt(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function Fu(l) {
    if (50 < vu) throw vu = 0, Lf = null, Error(s(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var na = {};
  function am(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, e, a) {
    return new am(l, t, e, a);
  }
  function Hc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var e = l.alternate;
    return e === null ? (e = et(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function xs(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function ku(l, t, e, a, u, n) {
    var c = 0;
    if (a = l, typeof l == "function") Hc(l) && (c = 1);
    else if (typeof l == "string") c = iv(l, e, B.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Ot:
        return l = et(31, e, t, u), l.elementType = Ot, l.lanes = n, l;
      case Dl:
        return Re(e.children, u, n, t);
      case Et:
        c = 8, u |= 24;
        break;
      case kl:
        return l = et(12, e, t, u | 2), l.elementType = kl, l.lanes = n, l;
      case pt:
        return l = et(13, e, t, u), l.elementType = pt, l.lanes = n, l;
      case Ql:
        return l = et(19, e, t, u), l.elementType = Ql, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Cl:
            c = 10;
            break l;
          case It:
            c = 9;
            break l;
          case it:
            c = 11;
            break l;
          case F:
            c = 14;
            break l;
          case Zl:
            c = 16, a = null;
            break l;
        }
        c = 29, e = Error(s(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = et(c, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Re(l, t, e, a) {
    return l = et(7, l, a, t), l.lanes = e, l;
  }
  function jc(l, t, e) {
    return l = et(6, l, null, t), l.lanes = e, l;
  }
  function Rs(l) {
    var t = et(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Cc(l, t, e) {
    return t = et(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var Bs = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Bs.get(l);
      return e !== void 0 ? e : (t = { value: l, source: t, stack: Ri(t) }, Bs.set(l, t), t);
    }
    return { value: l, source: t, stack: Ri(t) };
  }
  var ca = [], fa = 0, Iu = null, wa = 0, mt = [], vt = 0, ee = null, Dt = 1, Ut = "";
  function Yt(l, t) {
    ca[fa++] = wa, ca[fa++] = Iu, Iu = l, wa = t;
  }
  function Hs(l, t, e) {
    mt[vt++] = Dt, mt[vt++] = Ut, mt[vt++] = ee, ee = l;
    var a = Dt;
    l = Ut;
    var u = 32 - lt(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - lt(t) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Dt = 1 << 32 - lt(t) + u | e << u | a, Ut = n + l;
    } else Dt = 1 << n | e << u | a, Ut = l;
  }
  function qc(l) {
    l.return !== null && (Yt(l, 1), Hs(l, 1, 0));
  }
  function Yc(l) {
    for (; l === Iu; ) Iu = ca[--fa], ca[fa] = null, wa = ca[--fa], ca[fa] = null;
    for (; l === ee; ) ee = mt[--vt], mt[vt] = null, Ut = mt[--vt], mt[vt] = null, Dt = mt[--vt], mt[vt] = null;
  }
  function js(l, t) {
    mt[vt++] = Dt, mt[vt++] = Ut, mt[vt++] = ee, Dt = t.id, Ut = t.overflow, ee = l;
  }
  var Nl = null, yl = null, k = false, ae = null, rt = false, Gc = Error(s(519));
  function ue(l) {
    var t = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Wa(yt(t, l)), Gc;
  }
  function Cs(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Ul] = l, t[Vl] = a, e) {
      case "dialog":
        w("cancel", t), w("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < hu.length; e++) w(hu[e], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        w("error", t), w("load", t);
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        w("invalid", t), $i(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        w("invalid", t);
        break;
      case "textarea":
        w("invalid", t), ki(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === true || ld(t.textContent, e) ? (a.popover != null && (w("beforetoggle", t), w("toggle", t)), a.onScroll != null && w("scroll", t), a.onScrollEnd != null && w("scrollend", t), a.onClick != null && (t.onclick = jt), t = true) : t = false, t || ue(l, true);
  }
  function qs(l) {
    for (Nl = l.return; Nl; ) switch (Nl.tag) {
      case 5:
      case 31:
      case 13:
        rt = false;
        return;
      case 27:
      case 3:
        rt = true;
        return;
      default:
        Nl = Nl.return;
    }
  }
  function ia(l) {
    if (l !== Nl) return false;
    if (!k) return qs(l), k = true, false;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || ui(l.type, l.memoizedProps)), e = !e), e && yl && ue(l), qs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
      yl = sd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
      yl = sd(l);
    } else t === 27 ? (t = yl, Se(l.type) ? (l = si, si = null, yl = l) : yl = t) : yl = Nl ? gt(l.stateNode.nextSibling) : null;
    return true;
  }
  function Be() {
    yl = Nl = null, k = false;
  }
  function Xc() {
    var l = ae;
    return l !== null && ($l === null ? $l = l : $l.push.apply($l, l), ae = null), l;
  }
  function Wa(l) {
    ae === null ? ae = [l] : ae.push(l);
  }
  var Qc = y(null), He = null, Gt = null;
  function ne(l, t, e) {
    N(Qc, t._currentValue), t._currentValue = e;
  }
  function Xt(l) {
    l._currentValue = Qc.current, p(Qc);
  }
  function Zc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Lc(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = u;
          for (var i = 0; i < t.length; i++) if (f.context === t[i]) {
            n.lanes |= e, f = n.alternate, f !== null && (f.lanes |= e), Zc(n.return, e, l), a || (c = null);
            break l;
          }
          n = f.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(s(341));
        c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Zc(c, e, l), c = null;
      } else c = u.child;
      if (c !== null) c.return = u;
      else for (c = u; c !== null; ) {
        if (c === l) {
          c = null;
          break;
        }
        if (u = c.sibling, u !== null) {
          u.return = c.return, c = u;
          break;
        }
        c = c.return;
      }
      u = c;
    }
  }
  function sa(l, t, e, a) {
    l = null;
    for (var u = t, n = false; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = true;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(s(387));
        if (c = c.memoizedProps, c !== null) {
          var f = u.type;
          tt(u.pendingProps.value, c.value) || (l !== null ? l.push(f) : l = [f]);
        }
      } else if (u === el.current) {
        if (c = u.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(zu) : l = [zu]);
      }
      u = u.return;
    }
    l !== null && Lc(t, l, e, a), t.flags |= 262144;
  }
  function Pu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!tt(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function je(l) {
    He = l, Gt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function xl(l) {
    return Ys(He, l);
  }
  function ln(l, t) {
    return He === null && je(l), Ys(l, t);
  }
  function Ys(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Gt === null) {
      if (l === null) throw Error(s(308));
      Gt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Gt = Gt.next = t;
    return e;
  }
  var um = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(e, a) {
      l.push(a);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(e) {
        return e();
      });
    };
  }, nm = d.unstable_scheduleCallback, cm = d.unstable_NormalPriority, El = { $$typeof: Cl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Vc() {
    return { controller: new um(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function $a(l) {
    l.refCount--, l.refCount === 0 && nm(cm, function() {
      l.controller.abort();
    });
  }
  var Fa = null, Kc = 0, oa = 0, da = null;
  function fm(l, t) {
    if (Fa === null) {
      var e = Fa = [];
      Kc = 0, oa = $f(), da = { status: "pending", value: void 0, then: function(a) {
        e.push(a);
      } };
    }
    return Kc++, t.then(Gs, Gs), t;
  }
  function Gs() {
    if (--Kc === 0 && Fa !== null) {
      da !== null && (da.status = "fulfilled");
      var l = Fa;
      Fa = null, oa = 0, da = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function im(l, t) {
    var e = [], a = { status: "pending", value: null, reason: null, then: function(u) {
      e.push(u);
    } };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var u = 0; u < e.length; u++) (0, e[u])(t);
    }, function(u) {
      for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
    }), a;
  }
  var Xs = z.S;
  z.S = function(l, t) {
    A0 = Il(), typeof t == "object" && t !== null && typeof t.then == "function" && fm(l, t), Xs !== null && Xs(l, t);
  };
  var Ce = y(null);
  function Jc() {
    var l = Ce.current;
    return l !== null ? l : dl.pooledCache;
  }
  function tn(l, t) {
    t === null ? N(Ce, Ce.current) : N(Ce, t.pool);
  }
  function Qs() {
    var l = Jc();
    return l === null ? null : { parent: El._currentValue, pool: l };
  }
  var ya = Error(s(460)), wc = Error(s(474)), en = Error(s(542)), an = { then: function() {
  } };
  function Zs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ls(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(jt, jt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ks(l), l;
      default:
        if (typeof t.status == "string") t.then(jt, jt);
        else {
          if (l = dl, l !== null && 100 < l.shellSuspendCounter) throw Error(s(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var u = t;
              u.status = "fulfilled", u.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var u = t;
              u.status = "rejected", u.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ks(l), l;
        }
        throw Ye = t, ya;
    }
  }
  function qe(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ye = e, ya) : e;
    }
  }
  var Ye = null;
  function Vs() {
    if (Ye === null) throw Error(s(459));
    var l = Ye;
    return Ye = null, l;
  }
  function Ks(l) {
    if (l === ya || l === en) throw Error(s(483));
  }
  var ma = null, ka = 0;
  function un(l) {
    var t = ka;
    return ka += 1, ma === null && (ma = []), Ls(ma, l, t);
  }
  function Ia(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function nn(l, t) {
    throw t.$$typeof === nl ? Error(s(525)) : (l = Object.prototype.toString.call(t), Error(s(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Js(l) {
    function t(m, o) {
      if (l) {
        var r = m.deletions;
        r === null ? (m.deletions = [o], m.flags |= 16) : r.push(o);
      }
    }
    function e(m, o) {
      if (!l) return null;
      for (; o !== null; ) t(m, o), o = o.sibling;
      return null;
    }
    function a(m) {
      for (var o = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
      return o;
    }
    function u(m, o) {
      return m = qt(m, o), m.index = 0, m.sibling = null, m;
    }
    function n(m, o, r) {
      return m.index = r, l ? (r = m.alternate, r !== null ? (r = r.index, r < o ? (m.flags |= 67108866, o) : r) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function c(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function f(m, o, r, _) {
      return o === null || o.tag !== 6 ? (o = jc(r, m.mode, _), o.return = m, o) : (o = u(o, r), o.return = m, o);
    }
    function i(m, o, r, _) {
      var C = r.type;
      return C === Dl ? E(m, o, r.props.children, _, r.key) : o !== null && (o.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Zl && qe(C) === o.type) ? (o = u(o, r.props), Ia(o, r), o.return = m, o) : (o = ku(r.type, r.key, r.props, null, m.mode, _), Ia(o, r), o.return = m, o);
    }
    function h(m, o, r, _) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== r.containerInfo || o.stateNode.implementation !== r.implementation ? (o = Cc(r, m.mode, _), o.return = m, o) : (o = u(o, r.children || []), o.return = m, o);
    }
    function E(m, o, r, _, C) {
      return o === null || o.tag !== 7 ? (o = Re(r, m.mode, _, C), o.return = m, o) : (o = u(o, r), o.return = m, o);
    }
    function T(m, o, r) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = jc("" + o, m.mode, r), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ml:
            return r = ku(o.type, o.key, o.props, null, m.mode, r), Ia(r, o), r.return = m, r;
          case jl:
            return o = Cc(o, m.mode, r), o.return = m, o;
          case Zl:
            return o = qe(o), T(m, o, r);
        }
        if (zt(o) || Ll(o)) return o = Re(o, m.mode, r, null), o.return = m, o;
        if (typeof o.then == "function") return T(m, un(o), r);
        if (o.$$typeof === Cl) return T(m, ln(m, o), r);
        nn(m, o);
      }
      return null;
    }
    function g(m, o, r, _) {
      var C = o !== null ? o.key : null;
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return C !== null ? null : f(m, o, "" + r, _);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Ml:
            return r.key === C ? i(m, o, r, _) : null;
          case jl:
            return r.key === C ? h(m, o, r, _) : null;
          case Zl:
            return r = qe(r), g(m, o, r, _);
        }
        if (zt(r) || Ll(r)) return C !== null ? null : E(m, o, r, _, null);
        if (typeof r.then == "function") return g(m, o, un(r), _);
        if (r.$$typeof === Cl) return g(m, o, ln(m, r), _);
        nn(m, r);
      }
      return null;
    }
    function S(m, o, r, _, C) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return m = m.get(r) || null, f(o, m, "" + _, C);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Ml:
            return m = m.get(_.key === null ? r : _.key) || null, i(o, m, _, C);
          case jl:
            return m = m.get(_.key === null ? r : _.key) || null, h(o, m, _, C);
          case Zl:
            return _ = qe(_), S(m, o, r, _, C);
        }
        if (zt(_) || Ll(_)) return m = m.get(r) || null, E(o, m, _, C, null);
        if (typeof _.then == "function") return S(m, o, r, un(_), C);
        if (_.$$typeof === Cl) return S(m, o, r, ln(o, _), C);
        nn(o, _);
      }
      return null;
    }
    function R(m, o, r, _) {
      for (var C = null, P = null, H = o, L = o = 0, $ = null; H !== null && L < r.length; L++) {
        H.index > L ? ($ = H, H = null) : $ = H.sibling;
        var ll = g(m, H, r[L], _);
        if (ll === null) {
          H === null && (H = $);
          break;
        }
        l && H && ll.alternate === null && t(m, H), o = n(ll, o, L), P === null ? C = ll : P.sibling = ll, P = ll, H = $;
      }
      if (L === r.length) return e(m, H), k && Yt(m, L), C;
      if (H === null) {
        for (; L < r.length; L++) H = T(m, r[L], _), H !== null && (o = n(H, o, L), P === null ? C = H : P.sibling = H, P = H);
        return k && Yt(m, L), C;
      }
      for (H = a(H); L < r.length; L++) $ = S(H, m, L, r[L], _), $ !== null && (l && $.alternate !== null && H.delete($.key === null ? L : $.key), o = n($, o, L), P === null ? C = $ : P.sibling = $, P = $);
      return l && H.forEach(function(Te) {
        return t(m, Te);
      }), k && Yt(m, L), C;
    }
    function Y(m, o, r, _) {
      if (r == null) throw Error(s(151));
      for (var C = null, P = null, H = o, L = o = 0, $ = null, ll = r.next(); H !== null && !ll.done; L++, ll = r.next()) {
        H.index > L ? ($ = H, H = null) : $ = H.sibling;
        var Te = g(m, H, ll.value, _);
        if (Te === null) {
          H === null && (H = $);
          break;
        }
        l && H && Te.alternate === null && t(m, H), o = n(Te, o, L), P === null ? C = Te : P.sibling = Te, P = Te, H = $;
      }
      if (ll.done) return e(m, H), k && Yt(m, L), C;
      if (H === null) {
        for (; !ll.done; L++, ll = r.next()) ll = T(m, ll.value, _), ll !== null && (o = n(ll, o, L), P === null ? C = ll : P.sibling = ll, P = ll);
        return k && Yt(m, L), C;
      }
      for (H = a(H); !ll.done; L++, ll = r.next()) ll = S(H, m, L, ll.value, _), ll !== null && (l && ll.alternate !== null && H.delete(ll.key === null ? L : ll.key), o = n(ll, o, L), P === null ? C = ll : P.sibling = ll, P = ll);
      return l && H.forEach(function(bv) {
        return t(m, bv);
      }), k && Yt(m, L), C;
    }
    function sl(m, o, r, _) {
      if (typeof r == "object" && r !== null && r.type === Dl && r.key === null && (r = r.props.children), typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Ml:
            l: {
              for (var C = r.key; o !== null; ) {
                if (o.key === C) {
                  if (C = r.type, C === Dl) {
                    if (o.tag === 7) {
                      e(m, o.sibling), _ = u(o, r.props.children), _.return = m, m = _;
                      break l;
                    }
                  } else if (o.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Zl && qe(C) === o.type) {
                    e(m, o.sibling), _ = u(o, r.props), Ia(_, r), _.return = m, m = _;
                    break l;
                  }
                  e(m, o);
                  break;
                } else t(m, o);
                o = o.sibling;
              }
              r.type === Dl ? (_ = Re(r.props.children, m.mode, _, r.key), _.return = m, m = _) : (_ = ku(r.type, r.key, r.props, null, m.mode, _), Ia(_, r), _.return = m, m = _);
            }
            return c(m);
          case jl:
            l: {
              for (C = r.key; o !== null; ) {
                if (o.key === C) if (o.tag === 4 && o.stateNode.containerInfo === r.containerInfo && o.stateNode.implementation === r.implementation) {
                  e(m, o.sibling), _ = u(o, r.children || []), _.return = m, m = _;
                  break l;
                } else {
                  e(m, o);
                  break;
                }
                else t(m, o);
                o = o.sibling;
              }
              _ = Cc(r, m.mode, _), _.return = m, m = _;
            }
            return c(m);
          case Zl:
            return r = qe(r), sl(m, o, r, _);
        }
        if (zt(r)) return R(m, o, r, _);
        if (Ll(r)) {
          if (C = Ll(r), typeof C != "function") throw Error(s(150));
          return r = C.call(r), Y(m, o, r, _);
        }
        if (typeof r.then == "function") return sl(m, o, un(r), _);
        if (r.$$typeof === Cl) return sl(m, o, ln(m, r), _);
        nn(m, r);
      }
      return typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint" ? (r = "" + r, o !== null && o.tag === 6 ? (e(m, o.sibling), _ = u(o, r), _.return = m, m = _) : (e(m, o), _ = jc(r, m.mode, _), _.return = m, m = _), c(m)) : e(m, o);
    }
    return function(m, o, r, _) {
      try {
        ka = 0;
        var C = sl(m, o, r, _);
        return ma = null, C;
      } catch (H) {
        if (H === ya || H === en) throw H;
        var P = et(29, H, null, m.mode);
        return P.lanes = _, P.return = m, P;
      } finally {
      }
    };
  }
  var Ge = Js(true), ws = Js(false), ce = false;
  function Wc(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function $c(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function fe(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ie(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (tl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Fu(l), Ns(l, null, e), t;
    }
    return $u(l, a, t, e), Fu(l);
  }
  function Pa(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Yi(l, e);
    }
  }
  function Fc(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
          n === null ? u = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      e = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var kc = false;
  function lu() {
    if (kc) {
      var l = da;
      if (l !== null) throw l;
    }
  }
  function tu(l, t, e, a) {
    kc = false;
    var u = l.updateQueue;
    ce = false;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, f = u.shared.pending;
    if (f !== null) {
      u.shared.pending = null;
      var i = f, h = i.next;
      i.next = null, c === null ? n = h : c.next = h, c = i;
      var E = l.alternate;
      E !== null && (E = E.updateQueue, f = E.lastBaseUpdate, f !== c && (f === null ? E.firstBaseUpdate = h : f.next = h, E.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = u.baseState;
      c = 0, E = h = i = null, f = n;
      do {
        var g = f.lane & -536870913, S = g !== f.lane;
        if (S ? (W & g) === g : (a & g) === g) {
          g !== 0 && g === oa && (kc = true), E !== null && (E = E.next = { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null });
          l: {
            var R = l, Y = f;
            g = t;
            var sl = e;
            switch (Y.tag) {
              case 1:
                if (R = Y.payload, typeof R == "function") {
                  T = R.call(sl, T, g);
                  break l;
                }
                T = R;
                break l;
              case 3:
                R.flags = R.flags & -65537 | 128;
              case 0:
                if (R = Y.payload, g = typeof R == "function" ? R.call(sl, T, g) : R, g == null) break l;
                T = j({}, T, g);
                break l;
              case 2:
                ce = true;
            }
          }
          g = f.callback, g !== null && (l.flags |= 64, S && (l.flags |= 8192), S = u.callbacks, S === null ? u.callbacks = [g] : S.push(g));
        } else S = { lane: g, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, E === null ? (h = E = S, i = T) : E = E.next = S, c |= g;
        if (f = f.next, f === null) {
          if (f = u.shared.pending, f === null) break;
          S = f, f = S.next, S.next = null, u.lastBaseUpdate = S, u.shared.pending = null;
        }
      } while (true);
      E === null && (i = T), u.baseState = i, u.firstBaseUpdate = h, u.lastBaseUpdate = E, n === null && (u.shared.lanes = 0), me |= c, l.lanes = c, l.memoizedState = T;
    }
  }
  function Ws(l, t) {
    if (typeof l != "function") throw Error(s(191, l));
    l.call(t);
  }
  function $s(l, t) {
    var e = l.callbacks;
    if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) Ws(e[l], t);
  }
  var va = y(null), cn = y(0);
  function Fs(l, t) {
    l = $t, N(cn, l), N(va, t), $t = l | t.baseLanes;
  }
  function Ic() {
    N(cn, $t), N(va, va.current);
  }
  function Pc() {
    $t = cn.current, p(va), p(cn);
  }
  var at = y(null), ht = null;
  function se(l) {
    var t = l.alternate;
    N(Sl, Sl.current & 1), N(at, l), ht === null && (t === null || va.current !== null || t.memoizedState !== null) && (ht = l);
  }
  function lf(l) {
    N(Sl, Sl.current), N(at, l), ht === null && (ht = l);
  }
  function ks(l) {
    l.tag === 22 ? (N(Sl, Sl.current), N(at, l), ht === null && (ht = l)) : oe();
  }
  function oe() {
    N(Sl, Sl.current), N(at, at.current);
  }
  function ut(l) {
    p(at), ht === l && (ht = null), p(Sl);
  }
  var Sl = y(0);
  function fn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || fi(e) || ii(e))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Qt = 0, Z = null, fl = null, zl = null, sn = false, ra = false, Xe = false, on = 0, eu = 0, ha = null, sm = 0;
  function rl() {
    throw Error(s(321));
  }
  function tf(l, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < l.length; e++) if (!tt(l[e], t[e])) return false;
    return true;
  }
  function ef(l, t, e, a, u, n) {
    return Qt = n, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = l === null || l.memoizedState === null ? jo : Sf, Xe = false, n = e(a, u), Xe = false, ra && (n = Ps(t, e, a, u)), Is(l), n;
  }
  function Is(l) {
    z.H = nu;
    var t = fl !== null && fl.next !== null;
    if (Qt = 0, zl = fl = Z = null, sn = false, eu = 0, ha = null, t) throw Error(s(300));
    l === null || _l || (l = l.dependencies, l !== null && Pu(l) && (_l = true));
  }
  function Ps(l, t, e, a) {
    Z = l;
    var u = 0;
    do {
      if (ra && (ha = null), eu = 0, ra = false, 25 <= u) throw Error(s(301));
      if (u += 1, zl = fl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = Co, n = t(e, a);
    } while (ra);
    return n;
  }
  function om() {
    var l = z.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? au(t) : t, l = l.useState()[0], (fl !== null ? fl.memoizedState : null) !== l && (Z.flags |= 1024), t;
  }
  function af() {
    var l = on !== 0;
    return on = 0, l;
  }
  function uf(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function nf(l) {
    if (sn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      sn = false;
    }
    Qt = 0, zl = fl = Z = null, ra = false, eu = on = 0, ha = null;
  }
  function Gl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return zl === null ? Z.memoizedState = zl = l : zl = zl.next = l, zl;
  }
  function bl() {
    if (fl === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = fl.next;
    var t = zl === null ? Z.memoizedState : zl.next;
    if (t !== null) zl = t, fl = l;
    else {
      if (l === null) throw Z.alternate === null ? Error(s(467)) : Error(s(310));
      fl = l, l = { memoizedState: fl.memoizedState, baseState: fl.baseState, baseQueue: fl.baseQueue, queue: fl.queue, next: null }, zl === null ? Z.memoizedState = zl = l : zl = zl.next = l;
    }
    return zl;
  }
  function dn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function au(l) {
    var t = eu;
    return eu += 1, ha === null && (ha = []), l = Ls(ha, l, t), t = Z, (zl === null ? t.memoizedState : zl.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? jo : Sf), l;
  }
  function yn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return au(l);
      if (l.$$typeof === Cl) return xl(l);
    }
    throw Error(s(438, String(l)));
  }
  function cf(l) {
    var t = null, e = Z.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = Z.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(u) {
        return u.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = dn(), Z.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ke;
    return t.index++, e;
  }
  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function mn(l) {
    var t = bl();
    return ff(t, fl, l);
  }
  function ff(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      t.baseQueue = u = n, a.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var f = c = null, i = null, h = t, E = false;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (W & T) === T : (Qt & T) === T) {
          var g = h.revertLane;
          if (g === 0) i !== null && (i = i.next = { lane: 0, revertLane: 0, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), T === oa && (E = true);
          else if ((Qt & g) === g) {
            h = h.next, g === oa && (E = true);
            continue;
          } else T = { lane: 0, revertLane: h.revertLane, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, i === null ? (f = i = T, c = n) : i = i.next = T, Z.lanes |= g, me |= g;
          T = h.action, Xe && e(n, T), n = h.hasEagerState ? h.eagerState : e(n, T);
        } else g = { lane: T, revertLane: h.revertLane, gesture: h.gesture, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, i === null ? (f = i = g, c = n) : i = i.next = g, Z.lanes |= T, me |= T;
        h = h.next;
      } while (h !== null && h !== t);
      if (i === null ? c = n : i.next = f, !tt(n, l.memoizedState) && (_l = true, E && (e = da, e !== null))) throw e;
      l.memoizedState = n, l.baseState = c, l.baseQueue = i, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function sf(l) {
    var t = bl(), e = t.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = u = u.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== u);
      tt(n, t.memoizedState) || (_l = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function lo(l, t, e) {
    var a = Z, u = bl(), n = k;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = t();
    var c = !tt((fl || u).memoizedState, e);
    if (c && (u.memoizedState = e, _l = true), u = u.queue, yf(ao.bind(null, a, u, l), [l]), u.getSnapshot !== t || c || zl !== null && zl.memoizedState.tag & 1) {
      if (a.flags |= 2048, ga(9, { destroy: void 0 }, eo.bind(null, a, u, e, t), null), dl === null) throw Error(s(349));
      n || (Qt & 127) !== 0 || to(a, t, e);
    }
    return e;
  }
  function to(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = Z.updateQueue, t === null ? (t = dn(), Z.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function eo(l, t, e, a) {
    t.value = e, t.getSnapshot = a, uo(t) && no(l);
  }
  function ao(l, t, e) {
    return e(function() {
      uo(t) && no(l);
    });
  }
  function uo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !tt(l, e);
    } catch {
      return true;
    }
  }
  function no(l) {
    var t = xe(l, 2);
    t !== null && Fl(t, l, 2);
  }
  function of(l) {
    var t = Gl();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Xe) {
        Pt(true);
        try {
          e();
        } finally {
          Pt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: l }, t;
  }
  function co(l, t, e, a) {
    return l.baseState = e, ff(l, fl, typeof a == "function" ? a : Zt);
  }
  function dm(l, t, e, a, u) {
    if (hn(l)) throw Error(s(485));
    if (l = t.action, l !== null) {
      var n = { payload: u, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
        n.listeners.push(c);
      } };
      z.T !== null ? e(true) : n.isTransition = false, a(n), e = t.pending, e === null ? (n.next = t.pending = n, fo(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function fo(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = z.T, c = {};
      z.T = c;
      try {
        var f = e(u, a), i = z.S;
        i !== null && i(c, f), io(l, t, f);
      } catch (h) {
        df(l, t, h);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), z.T = n;
      }
    } else try {
      n = e(u, a), io(l, t, n);
    } catch (h) {
      df(l, t, h);
    }
  }
  function io(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
      so(l, t, a);
    }, function(a) {
      return df(l, t, a);
    }) : so(l, t, e);
  }
  function so(l, t, e) {
    t.status = "fulfilled", t.value = e, oo(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, fo(l, e)));
  }
  function df(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, oo(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function oo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function yo(l, t) {
    return t;
  }
  function mo(l, t) {
    if (k) {
      var e = dl.formState;
      if (e !== null) {
        l: {
          var a = Z;
          if (k) {
            if (yl) {
              t: {
                for (var u = yl, n = rt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = gt(u.nextSibling), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                yl = gt(u.nextSibling), a = u.data === "F!";
                break l;
              }
            }
            ue(a);
          }
          a = false;
        }
        a && (t = e[0]);
      }
    }
    return e = Gl(), e.memoizedState = e.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: yo, lastRenderedState: t }, e.queue = a, e = Ro.bind(null, Z, a), a.dispatch = e, a = of(false), n = gf.bind(null, Z, false, a.queue), a = Gl(), u = { state: t, dispatch: null, action: l, pending: null }, a.queue = u, e = dm.bind(null, Z, u, n, e), u.dispatch = e, a.memoizedState = l, [t, e, false];
  }
  function vo(l) {
    var t = bl();
    return ro(t, fl, l);
  }
  function ro(l, t, e) {
    if (t = ff(l, t, yo)[0], l = mn(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = au(t);
    } catch (c) {
      throw c === ya ? en : c;
    }
    else a = t;
    t = bl();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (Z.flags |= 2048, ga(9, { destroy: void 0 }, ym.bind(null, u, e), null)), [a, n, l];
  }
  function ym(l, t) {
    l.action = t;
  }
  function ho(l) {
    var t = bl(), e = fl;
    if (e !== null) return ro(t, e, l);
    bl(), t = t.memoizedState, e = bl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, false];
  }
  function ga(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = Z.updateQueue, t === null && (t = dn(), Z.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function go() {
    return bl().memoizedState;
  }
  function vn(l, t, e, a) {
    var u = Gl();
    Z.flags |= l, u.memoizedState = ga(1 | t, { destroy: void 0 }, e, a === void 0 ? null : a);
  }
  function rn(l, t, e, a) {
    var u = bl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    fl !== null && a !== null && tf(a, fl.memoizedState.deps) ? u.memoizedState = ga(t, n, e, a) : (Z.flags |= l, u.memoizedState = ga(1 | t, n, e, a));
  }
  function So(l, t) {
    vn(8390656, 8, l, t);
  }
  function yf(l, t) {
    rn(2048, 8, l, t);
  }
  function mm(l) {
    Z.flags |= 4;
    var t = Z.updateQueue;
    if (t === null) t = dn(), Z.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function bo(l) {
    var t = bl().memoizedState;
    return mm({ ref: t, nextImpl: l }), function() {
      if ((tl & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Eo(l, t) {
    return rn(4, 2, l, t);
  }
  function zo(l, t) {
    return rn(4, 4, l, t);
  }
  function _o(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function To(l, t, e) {
    e = e != null ? e.concat([l]) : null, rn(4, 4, _o.bind(null, t, l), e);
  }
  function mf() {
  }
  function Ao(l, t) {
    var e = bl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && tf(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function po(l, t) {
    var e = bl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && tf(t, a[1])) return a[0];
    if (a = l(), Xe) {
      Pt(true);
      try {
        l();
      } finally {
        Pt(false);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function vf(l, t, e) {
    return e === void 0 || (Qt & 1073741824) !== 0 && (W & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = O0(), Z.lanes |= l, me |= l, e);
  }
  function Oo(l, t, e, a) {
    return tt(e, t) ? e : va.current !== null ? (l = vf(l, e, a), tt(l, t) || (_l = true), l) : (Qt & 42) === 0 || (Qt & 1073741824) !== 0 && (W & 261930) === 0 ? (_l = true, l.memoizedState = e) : (l = O0(), Z.lanes |= l, me |= l, t);
  }
  function Mo(l, t, e, a, u) {
    var n = U.p;
    U.p = n !== 0 && 8 > n ? n : 8;
    var c = z.T, f = {};
    z.T = f, gf(l, false, t, e);
    try {
      var i = u(), h = z.S;
      if (h !== null && h(f, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var E = im(i, a);
        uu(l, t, E, ft(l));
      } else uu(l, t, a, ft(l));
    } catch (T) {
      uu(l, t, { then: function() {
      }, status: "rejected", reason: T }, ft());
    } finally {
      U.p = n, c !== null && f.types !== null && (c.types = f.types), z.T = c;
    }
  }
  function vm() {
  }
  function rf(l, t, e, a) {
    if (l.tag !== 5) throw Error(s(476));
    var u = Do(l).queue;
    Mo(l, u, t, G, e === null ? vm : function() {
      return Uo(l), e(a);
    });
  }
  function Do(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: G, baseState: G, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: G }, next: null };
    var e = {};
    return t.next = { memoizedState: e, baseState: e, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: e }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Uo(l) {
    var t = Do(l);
    t.next === null && (t = l.alternate.memoizedState), uu(l, t.next.queue, {}, ft());
  }
  function hf() {
    return xl(zu);
  }
  function No() {
    return bl().memoizedState;
  }
  function xo() {
    return bl().memoizedState;
  }
  function rm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ft();
          l = fe(e);
          var a = ie(t, l, e);
          a !== null && (Fl(a, t, e), Pa(a, t, e)), t = { cache: Vc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function hm(l, t, e) {
    var a = ft();
    e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null }, hn(l) ? Bo(t, e) : (e = Bc(l, t, e, a), e !== null && (Fl(e, l, a), Ho(e, t, a)));
  }
  function Ro(l, t, e) {
    var a = ft();
    uu(l, t, e, a);
  }
  function uu(l, t, e, a) {
    var u = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null };
    if (hn(l)) Bo(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var c = t.lastRenderedState, f = n(c, e);
        if (u.hasEagerState = true, u.eagerState = f, tt(f, c)) return $u(l, t, u, 0), dl === null && Wu(), false;
      } catch {
      } finally {
      }
      if (e = Bc(l, t, u, a), e !== null) return Fl(e, l, a), Ho(e, t, a), true;
    }
    return false;
  }
  function gf(l, t, e, a) {
    if (a = { lane: 2, revertLane: $f(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, hn(l)) {
      if (t) throw Error(s(479));
    } else t = Bc(l, e, a, 2), t !== null && Fl(t, l, 2);
  }
  function hn(l) {
    var t = l.alternate;
    return l === Z || t !== null && t === Z;
  }
  function Bo(l, t) {
    ra = sn = true;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Ho(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Yi(l, e);
    }
  }
  var nu = { readContext: xl, use: yn, useCallback: rl, useContext: rl, useEffect: rl, useImperativeHandle: rl, useLayoutEffect: rl, useInsertionEffect: rl, useMemo: rl, useReducer: rl, useRef: rl, useState: rl, useDebugValue: rl, useDeferredValue: rl, useTransition: rl, useSyncExternalStore: rl, useId: rl, useHostTransitionStatus: rl, useFormState: rl, useActionState: rl, useOptimistic: rl, useMemoCache: rl, useCacheRefresh: rl };
  nu.useEffectEvent = rl;
  var jo = { readContext: xl, use: yn, useCallback: function(l, t) {
    return Gl().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: xl, useEffect: So, useImperativeHandle: function(l, t, e) {
    e = e != null ? e.concat([l]) : null, vn(4194308, 4, _o.bind(null, t, l), e);
  }, useLayoutEffect: function(l, t) {
    return vn(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    vn(4, 2, l, t);
  }, useMemo: function(l, t) {
    var e = Gl();
    t = t === void 0 ? null : t;
    var a = l();
    if (Xe) {
      Pt(true);
      try {
        l();
      } finally {
        Pt(false);
      }
    }
    return e.memoizedState = [a, t], a;
  }, useReducer: function(l, t, e) {
    var a = Gl();
    if (e !== void 0) {
      var u = e(t);
      if (Xe) {
        Pt(true);
        try {
          e(t);
        } finally {
          Pt(false);
        }
      }
    } else u = t;
    return a.memoizedState = a.baseState = u, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }, a.queue = l, l = l.dispatch = hm.bind(null, Z, l), [a.memoizedState, l];
  }, useRef: function(l) {
    var t = Gl();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = of(l);
    var t = l.queue, e = Ro.bind(null, Z, t);
    return t.dispatch = e, [l.memoizedState, e];
  }, useDebugValue: mf, useDeferredValue: function(l, t) {
    var e = Gl();
    return vf(e, l, t);
  }, useTransition: function() {
    var l = of(false);
    return l = Mo.bind(null, Z, l.queue, true, false), Gl().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, e) {
    var a = Z, u = Gl();
    if (k) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else {
      if (e = t(), dl === null) throw Error(s(349));
      (W & 127) !== 0 || to(a, t, e);
    }
    u.memoizedState = e;
    var n = { value: e, getSnapshot: t };
    return u.queue = n, So(ao.bind(null, a, n, l), [l]), a.flags |= 2048, ga(9, { destroy: void 0 }, eo.bind(null, a, n, e, t), null), e;
  }, useId: function() {
    var l = Gl(), t = dl.identifierPrefix;
    if (k) {
      var e = Ut, a = Dt;
      e = (a & ~(1 << 32 - lt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = on++, 0 < e && (t += "H" + e.toString(32)), t += "_";
    } else e = sm++, t = "_" + t + "r_" + e.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: hf, useFormState: mo, useActionState: mo, useOptimistic: function(l) {
    var t = Gl();
    t.memoizedState = t.baseState = l;
    var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = e, t = gf.bind(null, Z, true, e), e.dispatch = t, [l, t];
  }, useMemoCache: cf, useCacheRefresh: function() {
    return Gl().memoizedState = rm.bind(null, Z);
  }, useEffectEvent: function(l) {
    var t = Gl(), e = { impl: l };
    return t.memoizedState = e, function() {
      if ((tl & 2) !== 0) throw Error(s(440));
      return e.impl.apply(void 0, arguments);
    };
  } }, Sf = { readContext: xl, use: yn, useCallback: Ao, useContext: xl, useEffect: yf, useImperativeHandle: To, useInsertionEffect: Eo, useLayoutEffect: zo, useMemo: po, useReducer: mn, useRef: go, useState: function() {
    return mn(Zt);
  }, useDebugValue: mf, useDeferredValue: function(l, t) {
    var e = bl();
    return Oo(e, fl.memoizedState, l, t);
  }, useTransition: function() {
    var l = mn(Zt)[0], t = bl().memoizedState;
    return [typeof l == "boolean" ? l : au(l), t];
  }, useSyncExternalStore: lo, useId: No, useHostTransitionStatus: hf, useFormState: vo, useActionState: vo, useOptimistic: function(l, t) {
    var e = bl();
    return co(e, fl, l, t);
  }, useMemoCache: cf, useCacheRefresh: xo };
  Sf.useEffectEvent = bo;
  var Co = { readContext: xl, use: yn, useCallback: Ao, useContext: xl, useEffect: yf, useImperativeHandle: To, useInsertionEffect: Eo, useLayoutEffect: zo, useMemo: po, useReducer: sf, useRef: go, useState: function() {
    return sf(Zt);
  }, useDebugValue: mf, useDeferredValue: function(l, t) {
    var e = bl();
    return fl === null ? vf(e, l, t) : Oo(e, fl.memoizedState, l, t);
  }, useTransition: function() {
    var l = sf(Zt)[0], t = bl().memoizedState;
    return [typeof l == "boolean" ? l : au(l), t];
  }, useSyncExternalStore: lo, useId: No, useHostTransitionStatus: hf, useFormState: ho, useActionState: ho, useOptimistic: function(l, t) {
    var e = bl();
    return fl !== null ? co(e, fl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
  }, useMemoCache: cf, useCacheRefresh: xo };
  Co.useEffectEvent = bo;
  function bf(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : j({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var Ef = { enqueueSetState: function(l, t, e) {
    l = l._reactInternals;
    var a = ft(), u = fe(a);
    u.payload = t, e != null && (u.callback = e), t = ie(l, u, a), t !== null && (Fl(t, l, a), Pa(t, l, a));
  }, enqueueReplaceState: function(l, t, e) {
    l = l._reactInternals;
    var a = ft(), u = fe(a);
    u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ie(l, u, a), t !== null && (Fl(t, l, a), Pa(t, l, a));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var e = ft(), a = fe(e);
    a.tag = 2, t != null && (a.callback = t), t = ie(l, a, e), t !== null && (Fl(t, l, e), Pa(t, l, e));
  } };
  function qo(l, t, e, a, u, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(u, n) : true;
  }
  function Yo(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && Ef.enqueueReplaceState(t, t.state, null);
  }
  function Qe(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = j({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Go(l) {
    wu(l);
  }
  function Xo(l) {
    console.error(l);
  }
  function Qo(l) {
    wu(l);
  }
  function gn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Zo(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, { componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function zf(l, t, e) {
    return e = fe(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      gn(l, t);
    }, e;
  }
  function Lo(l) {
    return l = fe(l), l.tag = 3, l;
  }
  function Vo(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Zo(t, e, a);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      Zo(t, e, a), typeof u != "function" && (ve === null ? ve = /* @__PURE__ */ new Set([this]) : ve.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, { componentStack: f !== null ? f : "" });
    });
  }
  function gm(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && sa(t, e, u, true), e = at.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return ht === null ? Un() : e.alternate === null && hl === 0 && (hl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === an ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Jf(l, a, u)), false;
          case 22:
            return e.flags |= 65536, a === an ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Jf(l, a, u)), false;
        }
        throw Error(s(435, e.tag));
      }
      return Jf(l, a, u), Un(), false;
    }
    if (k) return t = at.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Gc && (l = Error(s(422), { cause: a }), Wa(yt(l, e)))) : (a !== Gc && (t = Error(s(423), { cause: a }), Wa(yt(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = yt(a, e), u = zf(l.stateNode, a, u), Fc(l, u), hl !== 4 && (hl = 2)), false;
    var n = Error(s(520), { cause: a });
    if (n = yt(n, e), mu === null ? mu = [n] : mu.push(n), hl !== 4 && (hl = 2), t === null) return true;
    a = yt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = zf(e.stateNode, a, l), Fc(e, l), false;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ve === null || !ve.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Lo(u), Vo(u, l, e, a), Fc(e, u), false;
      }
      e = e.return;
    } while (e !== null);
    return false;
  }
  var _f = Error(s(461)), _l = false;
  function Rl(l, t, e, a) {
    t.child = l === null ? ws(t, null, e, a) : Ge(t, l.child, e, a);
  }
  function Ko(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a) f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return je(t), a = ef(l, t, e, c, n, u), f = af(), l !== null && !_l ? (uf(l, t, u), Lt(l, t, u)) : (k && f && qc(t), t.flags |= 1, Rl(l, t, a, u), t.child);
  }
  function Jo(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Hc(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, wo(l, t, n, a, u)) : (l = ku(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Nf(l, u)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ka, e(c, a) && l.ref === t.ref) return Lt(l, t, u);
    }
    return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function wo(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ka(n, a) && l.ref === t.ref) if (_l = false, t.pendingProps = a = n, Nf(l, u)) (l.flags & 131072) !== 0 && (_l = true);
      else return t.lanes = l.lanes, Lt(l, t, u);
    }
    return Tf(l, t, e, a, u);
  }
  function Wo(l, t, e, a) {
    var u = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, u = 0; a !== null; ) u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, t.child = null;
        return $o(l, t, n, e, a);
      }
      if ((e & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && tn(t, n !== null ? n.cachePool : null), n !== null ? Fs(t, n) : Ic(), ks(t);
      else return a = t.lanes = 536870912, $o(l, t, n !== null ? n.baseLanes | e : e, e, a);
    } else n !== null ? (tn(t, n.cachePool), Fs(t, n), oe(), t.memoizedState = null) : (l !== null && tn(t, null), Ic(), oe());
    return Rl(l, t, u, e), t.child;
  }
  function cu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function $o(l, t, e, a, u) {
    var n = Jc();
    return n = n === null ? null : { parent: El._currentValue, pool: n }, t.memoizedState = { baseLanes: e, cachePool: n }, l !== null && tn(t, null), Ic(), ks(t), l !== null && sa(l, t, a, true), t.childLanes = u, null;
  }
  function Sn(l, t) {
    return t = En({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Fo(l, t, e) {
    return Ge(t, l.child, null, e), l = Sn(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l;
  }
  function Sm(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (k) {
        if (a.mode === "hidden") return l = Sn(t, a), t.lanes = 536870912, cu(null, l);
        if (lf(t), (l = yl) ? (l = id(l, rt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: ee !== null ? { id: Dt, overflow: Ut } : null, retryLane: 536870912, hydrationErrors: null }, e = Rs(l), e.return = t, t.child = e, Nl = t, yl = null)) : l = null, l === null) throw ue(t);
        return t.lanes = 536870912, null;
      }
      return Sn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (lf(t), u) if (t.flags & 256) t.flags &= -257, t = Fo(l, t, e);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(s(558));
      else if (_l || sa(l, t, e, false), u = (e & l.childLanes) !== 0, _l || u) {
        if (a = dl, a !== null && (c = Gi(a, e), c !== 0 && c !== n.retryLane)) throw n.retryLane = c, xe(l, c), Fl(a, l, c), _f;
        Un(), t = Fo(l, t, e);
      } else l = n.treeContext, yl = gt(c.nextSibling), Nl = t, k = true, ae = null, rt = false, l !== null && js(t, l), t = Sn(t, a), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, { mode: a.mode, children: a.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function bn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Tf(l, t, e, a, u) {
    return je(t), e = ef(l, t, e, a, void 0, u), a = af(), l !== null && !_l ? (uf(l, t, u), Lt(l, t, u)) : (k && a && qc(t), t.flags |= 1, Rl(l, t, e, u), t.child);
  }
  function ko(l, t, e, a, u, n) {
    return je(t), t.updateQueue = null, e = Ps(t, a, e, u), Is(l), a = af(), l !== null && !_l ? (uf(l, t, n), Lt(l, t, n)) : (k && a && qc(t), t.flags |= 1, Rl(l, t, e, n), t.child);
  }
  function Io(l, t, e, a, u) {
    if (je(t), t.stateNode === null) {
      var n = na, c = e.contextType;
      typeof c == "object" && c !== null && (n = xl(c)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ef, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Wc(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? xl(c) : na, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (bf(t, e, c, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && Ef.enqueueReplaceState(n, n.state, null), tu(t, a, n, u), lu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps, i = Qe(e, f);
      n.props = i;
      var h = n.context, E = e.contextType;
      c = na, typeof E == "object" && E !== null && (c = xl(E));
      var T = e.getDerivedStateFromProps;
      E = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, E || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || h !== c) && Yo(t, n, a, c), ce = false;
      var g = t.memoizedState;
      n.state = g, tu(t, a, n, u), lu(), h = t.memoizedState, f || g !== h || ce ? (typeof T == "function" && (bf(t, e, T, a), h = t.memoizedState), (i = ce || qo(t, e, i, a, g, h, c)) ? (E || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = c, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      n = t.stateNode, $c(l, t), c = t.memoizedProps, E = Qe(e, c), n.props = E, T = t.pendingProps, g = n.context, h = e.contextType, i = na, typeof h == "object" && h !== null && (i = xl(h)), f = e.getDerivedStateFromProps, (h = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== T || g !== i) && Yo(t, n, a, i), ce = false, g = t.memoizedState, n.state = g, tu(t, a, n, u), lu();
      var S = t.memoizedState;
      c !== T || g !== S || ce || l !== null && l.dependencies !== null && Pu(l.dependencies) ? (typeof f == "function" && (bf(t, e, f, a), S = t.memoizedState), (E = ce || qo(t, e, E, a, g, S, i) || l !== null && l.dependencies !== null && Pu(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, S, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, S, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = S), n.props = a, n.state = S, n.context = i, a = E) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), a = false);
    }
    return n = a, bn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ge(t, l.child, null, u), t.child = Ge(t, null, e, u)) : Rl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Lt(l, t, u), l;
  }
  function Po(l, t, e, a) {
    return Be(), t.flags |= 256, Rl(l, t, e, a), t.child;
  }
  var Af = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function pf(l) {
    return { baseLanes: l, cachePool: Qs() };
  }
  function Of(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= ct), l;
  }
  function l0(l, t, e) {
    var a = t.pendingProps, u = false, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? false : (Sl.current & 2) !== 0), c && (u = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (k) {
        if (u ? se(t) : oe(), (l = yl) ? (l = id(l, rt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: ee !== null ? { id: Dt, overflow: Ut } : null, retryLane: 536870912, hydrationErrors: null }, e = Rs(l), e.return = t, t.child = e, Nl = t, yl = null)) : l = null, l === null) throw ue(t);
        return ii(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = a.children;
      return a = a.fallback, u ? (oe(), u = t.mode, f = En({ mode: "hidden", children: f }, u), a = Re(a, u, e, null), f.return = t, a.return = t, f.sibling = a, t.child = f, a = t.child, a.memoizedState = pf(e), a.childLanes = Of(l, c, e), t.memoizedState = Af, cu(null, a)) : (se(t), Mf(t, f));
    }
    var i = l.memoizedState;
    if (i !== null && (f = i.dehydrated, f !== null)) {
      if (n) t.flags & 256 ? (se(t), t.flags &= -257, t = Df(l, t, e)) : t.memoizedState !== null ? (oe(), t.child = l.child, t.flags |= 128, t = null) : (oe(), f = a.fallback, u = t.mode, a = En({ mode: "visible", children: a.children }, u), f = Re(f, u, e, null), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, Ge(t, l.child, null, e), a = t.child, a.memoizedState = pf(e), a.childLanes = Of(l, c, e), t.memoizedState = Af, t = cu(null, a));
      else if (se(t), ii(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var h = c.dgst;
        c = h, a = Error(s(419)), a.stack = "", a.digest = c, Wa({ value: a, source: null, stack: null }), t = Df(l, t, e);
      } else if (_l || sa(l, t, e, false), c = (e & l.childLanes) !== 0, _l || c) {
        if (c = dl, c !== null && (a = Gi(c, e), a !== 0 && a !== i.retryLane)) throw i.retryLane = a, xe(l, a), Fl(c, l, a), _f;
        fi(f) || Un(), t = Df(l, t, e);
      } else fi(f) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, yl = gt(f.nextSibling), Nl = t, k = true, ae = null, rt = false, l !== null && js(t, l), t = Mf(t, a.children), t.flags |= 4096);
      return t;
    }
    return u ? (oe(), f = a.fallback, u = t.mode, i = l.child, h = i.sibling, a = qt(i, { mode: "hidden", children: a.children }), a.subtreeFlags = i.subtreeFlags & 65011712, h !== null ? f = qt(h, f) : (f = Re(f, u, e, null), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, cu(null, a), a = t.child, f = l.child.memoizedState, f === null ? f = pf(e) : (u = f.cachePool, u !== null ? (i = El._currentValue, u = u.parent !== i ? { parent: i, pool: i } : u) : u = Qs(), f = { baseLanes: f.baseLanes | e, cachePool: u }), a.memoizedState = f, a.childLanes = Of(l, c, e), t.memoizedState = Af, cu(l.child, a)) : (se(t), e = l.child, l = e.sibling, e = qt(e, { mode: "visible", children: a.children }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Mf(l, t) {
    return t = En({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function En(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l;
  }
  function Df(l, t, e) {
    return Ge(t, l.child, null, e), l = Mf(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function t0(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Zc(l.return, t, e);
  }
  function Uf(l, t, e, a, u, n) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: u, treeForkCount: n } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = e, c.tailMode = u, c.treeForkCount = n);
  }
  function e0(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var c = Sl.current, f = (c & 2) !== 0;
    if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, N(Sl, c), Rl(l, t, a, e), a = k ? wa : 0, !f && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && t0(l, e, t);
      else if (l.tag === 19) t0(l, e, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; ) l = e.alternate, l !== null && fn(l) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Uf(t, false, u, e, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && fn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = e, e = u, u = l;
        }
        Uf(t, true, e, null, n, a);
        break;
      case "together":
        Uf(t, false, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Lt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), me |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
      if (sa(l, t, e, false), (e & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(s(153));
    if (t.child !== null) {
      for (l = t.child, e = qt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; ) l = l.sibling, e = e.sibling = qt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Nf(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Pu(l)));
  }
  function bm(l, t, e) {
    switch (t.tag) {
      case 3:
        Yl(t, t.stateNode.containerInfo), ne(t, El, l.memoizedState.cache), Be();
        break;
      case 27:
      case 5:
        Ra(t);
        break;
      case 4:
        Yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ne(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, lf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (se(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? l0(l, t, e) : (se(t), l = Lt(l, t, e), l !== null ? l.sibling : null);
        se(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (sa(l, t, e, false), a = (e & t.childLanes) !== 0), u) {
          if (a) return e0(l, t, e);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), N(Sl, Sl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Wo(l, t, e, t.pendingProps);
      case 24:
        ne(t, El, l.memoizedState.cache);
    }
    return Lt(l, t, e);
  }
  function a0(l, t, e) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) _l = true;
    else {
      if (!Nf(l, e) && (t.flags & 128) === 0) return _l = false, bm(l, t, e);
      _l = (l.flags & 131072) !== 0;
    }
    else _l = false, k && (t.flags & 1048576) !== 0 && Hs(t, wa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = qe(t.elementType), t.type = l, typeof l == "function") Hc(l) ? (a = Qe(l, a), t.tag = 1, t = Io(null, t, l, a, e)) : (t.tag = 0, t = Tf(null, t, l, a, e));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === it) {
                t.tag = 11, t = Ko(null, t, l, a, e);
                break l;
              } else if (u === F) {
                t.tag = 14, t = Jo(null, t, l, a, e);
                break l;
              }
            }
            throw t = Bt(l) || l, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Tf(l, t, t.type, t.pendingProps, e);
      case 1:
        return a = t.type, u = Qe(a, t.pendingProps), Io(l, t, a, u, e);
      case 3:
        l: {
          if (Yl(t, t.stateNode.containerInfo), l === null) throw Error(s(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, $c(l, t), tu(t, a, null, e);
          var c = t.memoizedState;
          if (a = c.cache, ne(t, El, a), a !== n.cache && Lc(t, [El], e, true), lu(), a = c.element, n.isDehydrated) if (n = { element: a, isDehydrated: false, cache: c.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = Po(l, t, a, e);
            break l;
          } else if (a !== u) {
            u = yt(Error(s(424)), t), Wa(u), t = Po(l, t, a, e);
            break l;
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (yl = gt(l.firstChild), Nl = t, k = true, ae = null, rt = true, e = ws(t, null, a, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          }
          else {
            if (Be(), a === u) {
              t = Lt(l, t, e);
              break l;
            }
            Rl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return bn(l, t), l === null ? (e = vd(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : k || (e = t.type, l = t.pendingProps, a = Cn(K.current).createElement(e), a[Ul] = t, a[Vl] = l, Bl(a, e, l), pl(a), t.stateNode = a) : t.memoizedState = vd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Ra(t), l === null && k && (a = t.stateNode = dd(t.type, t.pendingProps, K.current), Nl = t, rt = true, u = yl, Se(t.type) ? (si = u, yl = gt(a.firstChild)) : yl = u), Rl(l, t, t.pendingProps.children, e), bn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && k && ((u = a = yl) && (a = $m(a, t.type, t.pendingProps, rt), a !== null ? (t.stateNode = a, Nl = t, yl = gt(a.firstChild), rt = false, u = true) : u = false), u || ue(t)), Ra(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, ui(u, n) ? a = null : c !== null && ui(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = ef(l, t, om, null, null, e), zu._currentValue = u), bn(l, t), Rl(l, t, a, e), t.child;
      case 6:
        return l === null && k && ((l = e = yl) && (e = Fm(e, t.pendingProps, rt), e !== null ? (t.stateNode = e, Nl = t, yl = null, l = true) : l = false), l || ue(t)), null;
      case 13:
        return l0(l, t, e);
      case 4:
        return Yl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Ge(t, null, a, e) : Rl(l, t, a, e), t.child;
      case 11:
        return Ko(l, t, t.type, t.pendingProps, e);
      case 7:
        return Rl(l, t, t.pendingProps, e), t.child;
      case 8:
        return Rl(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Rl(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return a = t.pendingProps, ne(t, t.type, a.value), Rl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, je(t), u = xl(u), a = a(u), t.flags |= 1, Rl(l, t, a, e), t.child;
      case 14:
        return Jo(l, t, t.type, t.pendingProps, e);
      case 15:
        return wo(l, t, t.type, t.pendingProps, e);
      case 19:
        return e0(l, t, e);
      case 31:
        return Sm(l, t, e);
      case 22:
        return Wo(l, t, e, t.pendingProps);
      case 24:
        return je(t), a = xl(El), l === null ? (u = Jc(), u === null && (u = dl, n = Vc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Wc(t), ne(t, El, u)) : ((l.lanes & e) !== 0 && ($c(l, t), tu(t, null, null, e), lu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ne(t, El, a)) : (a = n.cache, ne(t, El, a), a !== u.cache && Lc(t, [El], e, true))), Rl(l, t, t.pendingProps.children, e), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Vt(l) {
    l.flags |= 4;
  }
  function xf(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = false), t) {
      if (l.flags |= 16777216, (u & 335544128) === u) if (l.stateNode.complete) l.flags |= 8192;
      else if (N0()) l.flags |= 8192;
      else throw Ye = an, wc;
    } else l.flags &= -16777217;
  }
  function u0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !bd(t)) if (N0()) l.flags |= 8192;
    else throw Ye = an, wc;
  }
  function zn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Ci() : 536870912, l.lanes |= t, za |= t);
  }
  function fu(l, t) {
    if (!k) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var e = null; t !== null; ) t.alternate !== null && (e = t), t = t.sibling;
        e === null ? l.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = l.tail;
        for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
    }
  }
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t) for (var u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else for (u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function Em(l, t, e) {
    var a = t.pendingProps;
    switch (Yc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ml(t), null;
      case 1:
        return ml(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Xt(El), gl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (ia(t) ? Vt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Xc())), ml(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Vt(t), n !== null ? (ml(t), u0(t, n)) : (ml(t), xf(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Vt(t), ml(t), u0(t, n)) : (ml(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Vt(t), ml(t), xf(t, u, l, a, e)), null;
      case 27:
        if (xu(t), e = K.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Vt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return ml(t), null;
          }
          l = B.current, ia(t) ? Cs(t) : (l = dd(u, a, e), t.stateNode = l, Vt(t));
        }
        return ml(t), null;
      case 5:
        if (xu(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Vt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return ml(t), null;
          }
          if (n = B.current, ia(t)) Cs(t);
          else {
            var c = Cn(K.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    n = c.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof a.is == "string" ? c.createElement("select", { is: a.is }) : c.createElement("select"), a.multiple ? n.multiple = true : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? c.createElement(u, { is: a.is }) : c.createElement(u);
                }
            }
            n[Ul] = t, n[Vl] = a;
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = n;
            l: switch (Bl(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = true;
                break l;
              default:
                a = false;
            }
            a && Vt(t);
          }
        }
        return ml(t), xf(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Vt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (l = K.current, ia(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Nl, u !== null) switch (u.tag) {
              case 27:
              case 5:
                a = u.memoizedProps;
            }
            l[Ul] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === true || ld(l.nodeValue, e)), l || ue(t, true);
          } else l = Cn(l).createTextNode(a), l[Ul] = t, t.stateNode = l;
        }
        return ml(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ia(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(s(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(557));
              l[Ul] = t;
            } else Be(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), l = false;
          } else e = Xc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = true;
          if (!l) return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return ml(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = ia(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(s(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[Ul] = t;
            } else Be(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), u = false;
          } else u = Xc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = true;
          if (!u) return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), zn(t, t.updateQueue), ml(t), null);
      case 4:
        return gl(), l === null && Pf(t.stateNode.containerInfo), ml(t), null;
      case 10:
        return Xt(t.type), ml(t), null;
      case 19:
        if (p(Sl), a = t.memoizedState, a === null) return ml(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null) if (u) fu(a, false);
        else {
          if (hl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = fn(l), n !== null) {
              for (t.flags |= 128, fu(a, false), l = n.updateQueue, t.updateQueue = l, zn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; ) xs(e, l), e = e.sibling;
              return N(Sl, Sl.current & 1 | 2), k && Yt(t, a.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          a.tail !== null && Il() > On && (t.flags |= 128, u = true, fu(a, false), t.lanes = 4194304);
        }
        else {
          if (!u) if (l = fn(n), l !== null) {
            if (t.flags |= 128, u = true, l = l.updateQueue, t.updateQueue = l, zn(t, l), fu(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !k) return ml(t), null;
          } else 2 * Il() - a.renderingStartTime > On && e !== 536870912 && (t.flags |= 128, u = true, fu(a, false), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Il(), l.sibling = null, e = Sl.current, N(Sl, u ? e & 1 | 2 : e & 1), k && Yt(t, a.treeForkCount), l) : (ml(t), null);
      case 22:
      case 23:
        return ut(t), Pc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t), e = t.updateQueue, e !== null && zn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && p(Ce), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Xt(El), ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function zm(l, t) {
    switch (Yc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Xt(El), gl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return xu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ut(t), t.alternate === null) throw Error(s(340));
          Be();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Be();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return p(Sl), null;
      case 4:
        return gl(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return ut(t), Pc(), l !== null && p(Ce), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Xt(El), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function n0(l, t) {
    switch (Yc(t), t.tag) {
      case 3:
        Xt(El), gl();
        break;
      case 26:
      case 27:
      case 5:
        xu(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        p(Sl);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        ut(t), Pc(), l !== null && p(Ce);
        break;
      case 24:
        Xt(El);
    }
  }
  function iu(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create, c = e.inst;
            a = n(), c.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (f) {
      ul(t, t.return, f);
    }
  }
  function de(l, t, e) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, u = t;
              var i = e, h = f;
              try {
                h();
              } catch (E) {
                ul(u, i, E);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (E) {
      ul(t, t.return, E);
    }
  }
  function c0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        $s(t, e);
      } catch (a) {
        ul(l, l.return, a);
      }
    }
  }
  function f0(l, t, e) {
    e.props = Qe(l.type, l.memoizedProps), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      ul(l, t, a);
    }
  }
  function su(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      ul(l, t, u);
    }
  }
  function Nt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null) if (typeof a == "function") try {
      a();
    } catch (u) {
      ul(l, t, u);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof e == "function") try {
      e(null);
    } catch (u) {
      ul(l, t, u);
    }
    else e.current = null;
  }
  function i0(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      ul(l, l.return, u);
    }
  }
  function Rf(l, t, e) {
    try {
      var a = l.stateNode;
      Lm(a, l.type, e, t), a[Vl] = t;
    } catch (u) {
      ul(l, l.return, u);
    }
  }
  function s0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Se(l.type) || l.tag === 4;
  }
  function Bf(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || s0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Se(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Hf(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = jt));
    else if (a !== 4 && (a === 27 && Se(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for (Hf(l, t, e), l = l.sibling; l !== null; ) Hf(l, t, e), l = l.sibling;
  }
  function _n(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Se(l.type) && (e = l.stateNode), l = l.child, l !== null)) for (_n(l, t, e), l = l.sibling; l !== null; ) _n(l, t, e), l = l.sibling;
  }
  function o0(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      Bl(t, a, e), t[Ul] = l, t[Vl] = e;
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  var Kt = false, Tl = false, jf = false, d0 = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function _m(l, t) {
    if (l = l.containerInfo, ei = Ln, l = _s(l), Mc(l)) {
      if ("selectionStart" in l) var e = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        e = (e = l.ownerDocument) && e.defaultView || window;
        var a = e.getSelection && e.getSelection();
        if (a && a.rangeCount !== 0) {
          e = a.anchorNode;
          var u = a.anchorOffset, n = a.focusNode;
          a = a.focusOffset;
          try {
            e.nodeType, n.nodeType;
          } catch {
            e = null;
            break l;
          }
          var c = 0, f = -1, i = -1, h = 0, E = 0, T = l, g = null;
          t: for (; ; ) {
            for (var S; T !== e || u !== 0 && T.nodeType !== 3 || (f = c + u), T !== n || a !== 0 && T.nodeType !== 3 || (i = c + a), T.nodeType === 3 && (c += T.nodeValue.length), (S = T.firstChild) !== null; ) g = T, T = S;
            for (; ; ) {
              if (T === l) break t;
              if (g === e && ++h === u && (f = c), g === n && ++E === a && (i = c), (S = T.nextSibling) !== null) break;
              T = g, g = T.parentNode;
            }
            T = S;
          }
          e = f === -1 || i === -1 ? null : { start: f, end: i };
        } else e = null;
      }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (ai = { focusedElem: l, selectionRange: e }, Ln = false, Ol = t; Ol !== null; ) if (t = Ol, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Ol = l;
    else for (; Ol !== null; ) {
      switch (t = Ol, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (e = 0; e < l.length; e++) u = l[e], u.ref.impl = u.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
            try {
              var R = Qe(e.type, u);
              l = a.getSnapshotBeforeUpdate(R, n), a.__reactInternalSnapshotBeforeUpdate = l;
            } catch (Y) {
              ul(e, e.return, Y);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) ci(l);
            else if (e === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                ci(l);
                break;
              default:
                l.textContent = "";
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
          if ((l & 1024) !== 0) throw Error(s(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Ol = l;
        break;
      }
      Ol = t.return;
    }
  }
  function y0(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        wt(l, e), a & 4 && iu(5, e);
        break;
      case 1:
        if (wt(l, e), a & 4) if (l = e.stateNode, t === null) try {
          l.componentDidMount();
        } catch (c) {
          ul(e, e.return, c);
        }
        else {
          var u = Qe(e.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            ul(e, e.return, c);
          }
        }
        a & 64 && c0(e), a & 512 && su(e, e.return);
        break;
      case 3:
        if (wt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null) switch (e.child.tag) {
            case 27:
            case 5:
              t = e.child.stateNode;
              break;
            case 1:
              t = e.child.stateNode;
          }
          try {
            $s(l, t);
          } catch (c) {
            ul(e, e.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && o0(e);
      case 26:
      case 5:
        wt(l, e), t === null && a & 4 && i0(e), a & 512 && su(e, e.return);
        break;
      case 12:
        wt(l, e);
        break;
      case 31:
        wt(l, e), a & 4 && r0(l, e);
        break;
      case 13:
        wt(l, e), a & 4 && h0(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = xm.bind(null, e), km(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Kt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, u = Kt;
          var n = Tl;
          Kt = a, (Tl = t) && !n ? Wt(l, e, (e.subtreeFlags & 8772) !== 0) : wt(l, e), Kt = u, Tl = n;
        }
        break;
      case 30:
        break;
      default:
        wt(l, e);
    }
  }
  function m0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, m0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && oc(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var vl = null, Jl = false;
  function Jt(l, t, e) {
    for (e = e.child; e !== null; ) v0(l, t, e), e = e.sibling;
  }
  function v0(l, t, e) {
    if (Pl && typeof Pl.onCommitFiberUnmount == "function") try {
      Pl.onCommitFiberUnmount(Ba, e);
    } catch {
    }
    switch (e.tag) {
      case 26:
        Tl || Nt(e, t), Jt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Tl || Nt(e, t);
        var a = vl, u = Jl;
        Se(e.type) && (vl = e.stateNode, Jl = false), Jt(l, t, e), Su(e.stateNode), vl = a, Jl = u;
        break;
      case 5:
        Tl || Nt(e, t);
      case 6:
        if (a = vl, u = Jl, vl = null, Jt(l, t, e), vl = a, Jl = u, vl !== null) if (Jl) try {
          (vl.nodeType === 9 ? vl.body : vl.nodeName === "HTML" ? vl.ownerDocument.body : vl).removeChild(e.stateNode);
        } catch (n) {
          ul(e, t, n);
        }
        else try {
          vl.removeChild(e.stateNode);
        } catch (n) {
          ul(e, t, n);
        }
        break;
      case 18:
        vl !== null && (Jl ? (l = vl, cd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Ua(l)) : cd(vl, e.stateNode));
        break;
      case 4:
        a = vl, u = Jl, vl = e.stateNode.containerInfo, Jl = true, Jt(l, t, e), vl = a, Jl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        de(2, e, t), Tl || de(4, e, t), Jt(l, t, e);
        break;
      case 1:
        Tl || (Nt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && f0(e, t, a)), Jt(l, t, e);
        break;
      case 21:
        Jt(l, t, e);
        break;
      case 22:
        Tl = (a = Tl) || e.memoizedState !== null, Jt(l, t, e), Tl = a;
        break;
      default:
        Jt(l, t, e);
    }
  }
  function r0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ua(l);
      } catch (e) {
        ul(t, t.return, e);
      }
    }
  }
  function h0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Ua(l);
    } catch (e) {
      ul(t, t.return, e);
    }
  }
  function Tm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new d0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new d0()), t;
      default:
        throw Error(s(435, l.tag));
    }
  }
  function Tn(l, t) {
    var e = Tm(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = Rm.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function wl(l, t) {
    var e = t.deletions;
    if (e !== null) for (var a = 0; a < e.length; a++) {
      var u = e[a], n = l, c = t, f = c;
      l: for (; f !== null; ) {
        switch (f.tag) {
          case 27:
            if (Se(f.type)) {
              vl = f.stateNode, Jl = false;
              break l;
            }
            break;
          case 5:
            vl = f.stateNode, Jl = false;
            break l;
          case 3:
          case 4:
            vl = f.stateNode.containerInfo, Jl = true;
            break l;
        }
        f = f.return;
      }
      if (vl === null) throw Error(s(160));
      v0(n, c, u), vl = null, Jl = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) g0(t, l), t = t.sibling;
  }
  var Tt = null;
  function g0(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wl(t, l), Wl(l), a & 4 && (de(3, l, l.return), iu(3, l), de(5, l, l.return));
        break;
      case 1:
        wl(t, l), Wl(l), a & 512 && (Tl || e === null || Nt(e, e.return)), a & 64 && Kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Tt;
        if (wl(t, l), Wl(l), a & 512 && (Tl || e === null || Nt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
            l: {
              a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
              t: switch (a) {
                case "title":
                  n = u.getElementsByTagName("title")[0], (!n || n[Ca] || n[Ul] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Bl(n, a, e), n[Ul] = l, pl(n), a = n;
                  break l;
                case "link":
                  var c = gd("link", "href", u).get(a + (e.href || ""));
                  if (c) {
                    for (var f = 0; f < c.length; f++) if (n = c[f], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                      c.splice(f, 1);
                      break t;
                    }
                  }
                  n = u.createElement(a), Bl(n, a, e), u.head.appendChild(n);
                  break;
                case "meta":
                  if (c = gd("meta", "content", u).get(a + (e.content || ""))) {
                    for (f = 0; f < c.length; f++) if (n = c[f], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                      c.splice(f, 1);
                      break t;
                    }
                  }
                  n = u.createElement(a), Bl(n, a, e), u.head.appendChild(n);
                  break;
                default:
                  throw Error(s(468, a));
              }
              n[Ul] = l, pl(n), a = n;
            }
            l.stateNode = a;
          } else Sd(u, l.type, l.stateNode);
          else l.stateNode = hd(u, a, l.memoizedProps);
          else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? Sd(u, l.type, l.stateNode) : hd(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Rf(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        wl(t, l), Wl(l), a & 512 && (Tl || e === null || Nt(e, e.return)), e !== null && a & 4 && Rf(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (wl(t, l), Wl(l), a & 512 && (Tl || e === null || Nt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Ie(u, "");
          } catch (R) {
            ul(l, l.return, R);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Rf(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (jf = true);
        break;
      case 6:
        if (wl(t, l), Wl(l), a & 4) {
          if (l.stateNode === null) throw Error(s(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (R) {
            ul(l, l.return, R);
          }
        }
        break;
      case 3:
        if (Gn = null, u = Tt, Tt = qn(t.containerInfo), wl(t, l), Tt = u, Wl(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
          Ua(t.containerInfo);
        } catch (R) {
          ul(l, l.return, R);
        }
        jf && (jf = false, S0(l));
        break;
      case 4:
        a = Tt, Tt = qn(l.stateNode.containerInfo), wl(t, l), Wl(l), Tt = a;
        break;
      case 12:
        wl(t, l), Wl(l);
        break;
      case 31:
        wl(t, l), Wl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Tn(l, a)));
        break;
      case 13:
        wl(t, l), Wl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (pn = Il()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Tn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var i = e !== null && e.memoizedState !== null, h = Kt, E = Tl;
        if (Kt = h || u, Tl = E || i, wl(t, l), Tl = E, Kt = h, Wl(l), a & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || i || Kt || Tl || Ze(l)), e = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (e === null) {
              i = e = t;
              try {
                if (n = i.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  f = i.stateNode;
                  var T = i.memoizedProps.style, g = T != null && T.hasOwnProperty("display") ? T.display : null;
                  f.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                }
              } catch (R) {
                ul(i, i.return, R);
              }
            }
          } else if (t.tag === 6) {
            if (e === null) {
              i = t;
              try {
                i.stateNode.nodeValue = u ? "" : i.memoizedProps;
              } catch (R) {
                ul(i, i.return, R);
              }
            }
          } else if (t.tag === 18) {
            if (e === null) {
              i = t;
              try {
                var S = i.stateNode;
                u ? fd(S, true) : fd(i.stateNode, false);
              } catch (R) {
                ul(i, i.return, R);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            e === t && (e = null), t = t.return;
          }
          e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
        }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Tn(l, e))));
        break;
      case 19:
        wl(t, l), Wl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Tn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wl(t, l), Wl(l);
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (s0(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Bf(l);
            _n(l, n, u);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (Ie(c, ""), e.flags &= -33);
            var f = Bf(l);
            _n(l, f, c);
            break;
          case 3:
          case 4:
            var i = e.stateNode.containerInfo, h = Bf(l);
            Hf(l, h, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (E) {
        ul(l, l.return, E);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function S0(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      S0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function wt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) y0(l, t.alternate, t), t = t.sibling;
  }
  function Ze(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          de(4, t, t.return), Ze(t);
          break;
        case 1:
          Nt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && f0(t, t.return, e), Ze(t);
          break;
        case 27:
          Su(t.stateNode);
        case 26:
        case 5:
          Nt(t, t.return), Ze(t);
          break;
        case 22:
          t.memoizedState === null && Ze(t);
          break;
        case 30:
          Ze(t);
          break;
        default:
          Ze(t);
      }
      l = l.sibling;
    }
  }
  function Wt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wt(u, n, e), iu(4, n);
          break;
        case 1:
          if (Wt(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (h) {
            ul(a, a.return, h);
          }
          if (a = n, u = a.updateQueue, u !== null) {
            var f = a.stateNode;
            try {
              var i = u.shared.hiddenCallbacks;
              if (i !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < i.length; u++) Ws(i[u], f);
            } catch (h) {
              ul(a, a.return, h);
            }
          }
          e && c & 64 && c0(n), su(n, n.return);
          break;
        case 27:
          o0(n);
        case 26:
        case 5:
          Wt(u, n, e), e && a === null && c & 4 && i0(n), su(n, n.return);
          break;
        case 12:
          Wt(u, n, e);
          break;
        case 31:
          Wt(u, n, e), e && c & 4 && r0(u, n);
          break;
        case 13:
          Wt(u, n, e), e && c & 4 && h0(u, n);
          break;
        case 22:
          n.memoizedState === null && Wt(u, n, e), su(n, n.return);
          break;
        case 30:
          break;
        default:
          Wt(u, n, e);
      }
      t = t.sibling;
    }
  }
  function Cf(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && $a(e));
  }
  function qf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l));
  }
  function At(l, t, e, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) b0(l, t, e, a), t = t.sibling;
  }
  function b0(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, e, a), u & 2048 && iu(9, t);
        break;
      case 1:
        At(l, t, e, a);
        break;
      case 3:
        At(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l)));
        break;
      case 12:
        if (u & 2048) {
          At(l, t, e, a), l = t.stateNode;
          try {
            var n = t.memoizedProps, c = n.id, f = n.onPostCommit;
            typeof f == "function" && f(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (i) {
            ul(t, t.return, i);
          }
        } else At(l, t, e, a);
        break;
      case 31:
        At(l, t, e, a);
        break;
      case 13:
        At(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? At(l, t, e, a) : ou(l, t) : n._visibility & 2 ? At(l, t, e, a) : (n._visibility |= 2, Sa(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Cf(c, t);
        break;
      case 24:
        At(l, t, e, a), u & 2048 && qf(t.alternate, t);
        break;
      default:
        At(l, t, e, a);
    }
  }
  function Sa(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, c = t, f = e, i = a, h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Sa(n, c, f, i, u), iu(8, c);
          break;
        case 23:
          break;
        case 22:
          var E = c.stateNode;
          c.memoizedState !== null ? E._visibility & 2 ? Sa(n, c, f, i, u) : ou(n, c) : (E._visibility |= 2, Sa(n, c, f, i, u)), u && h & 2048 && Cf(c.alternate, c);
          break;
        case 24:
          Sa(n, c, f, i, u), u && h & 2048 && qf(c.alternate, c);
          break;
        default:
          Sa(n, c, f, i, u);
      }
      t = t.sibling;
    }
  }
  function ou(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var e = l, a = t, u = a.flags;
      switch (a.tag) {
        case 22:
          ou(e, a), u & 2048 && Cf(a.alternate, a);
          break;
        case 24:
          ou(e, a), u & 2048 && qf(a.alternate, a);
          break;
        default:
          ou(e, a);
      }
      t = t.sibling;
    }
  }
  var du = 8192;
  function ba(l, t, e) {
    if (l.subtreeFlags & du) for (l = l.child; l !== null; ) E0(l, t, e), l = l.sibling;
  }
  function E0(l, t, e) {
    switch (l.tag) {
      case 26:
        ba(l, t, e), l.flags & du && l.memoizedState !== null && sv(e, Tt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ba(l, t, e);
        break;
      case 3:
      case 4:
        var a = Tt;
        Tt = qn(l.stateNode.containerInfo), ba(l, t, e), Tt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = du, du = 16777216, ba(l, t, e), du = a) : ba(l, t, e));
        break;
      default:
        ba(l, t, e);
    }
  }
  function z0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function yu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var e = 0; e < t.length; e++) {
        var a = t[e];
        Ol = a, T0(a, l);
      }
      z0(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) _0(l), l = l.sibling;
  }
  function _0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yu(l), l.flags & 2048 && de(9, l, l.return);
        break;
      case 3:
        yu(l);
        break;
      case 12:
        yu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, An(l)) : yu(l);
        break;
      default:
        yu(l);
    }
  }
  function An(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var e = 0; e < t.length; e++) {
        var a = t[e];
        Ol = a, T0(a, l);
      }
      z0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          de(8, t, t.return), An(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, An(t));
          break;
        default:
          An(t);
      }
      l = l.sibling;
    }
  }
  function T0(l, t) {
    for (; Ol !== null; ) {
      var e = Ol;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          de(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $a(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Ol = a;
      else l: for (e = l; Ol !== null; ) {
        a = Ol;
        var u = a.sibling, n = a.return;
        if (m0(a), a === e) {
          Ol = null;
          break l;
        }
        if (u !== null) {
          u.return = n, Ol = u;
          break l;
        }
        Ol = n;
      }
    }
  }
  var Am = { getCacheForType: function(l) {
    var t = xl(El), e = t.data.get(l);
    return e === void 0 && (e = l(), t.data.set(l, e)), e;
  }, cacheSignal: function() {
    return xl(El).controller.signal;
  } }, pm = typeof WeakMap == "function" ? WeakMap : Map, tl = 0, dl = null, J = null, W = 0, al = 0, nt = null, ye = false, Ea = false, Yf = false, $t = 0, hl = 0, me = 0, Le = 0, Gf = 0, ct = 0, za = 0, mu = null, $l = null, Xf = false, pn = 0, A0 = 0, On = 1 / 0, Mn = null, ve = null, Al = 0, re = null, _a = null, Ft = 0, Qf = 0, Zf = null, p0 = null, vu = 0, Lf = null;
  function ft() {
    return (tl & 2) !== 0 && W !== 0 ? W & -W : z.T !== null ? $f() : Xi();
  }
  function O0() {
    if (ct === 0) if ((W & 536870912) === 0 || k) {
      var l = Hu;
      Hu <<= 1, (Hu & 3932160) === 0 && (Hu = 262144), ct = l;
    } else ct = 536870912;
    return l = at.current, l !== null && (l.flags |= 32), ct;
  }
  function Fl(l, t, e) {
    (l === dl && (al === 2 || al === 9) || l.cancelPendingCommit !== null) && (Ta(l, 0), he(l, W, ct, false)), ja(l, e), ((tl & 2) === 0 || l !== dl) && (l === dl && ((tl & 2) === 0 && (Le |= e), hl === 4 && he(l, W, ct, false)), xt(l));
  }
  function M0(l, t, e) {
    if ((tl & 6) !== 0) throw Error(s(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ha(l, t), u = a ? Dm(l, t) : Kf(l, t, true), n = a;
    do {
      if (u === 0) {
        Ea && !a && he(l, t, 0, false);
        break;
      } else {
        if (e = l.current.alternate, n && !Om(e)) {
          u = Kf(l, t, false), n = false;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var c = 0;
          else c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              u = mu;
              var i = f.current.memoizedState.isDehydrated;
              if (i && (Ta(f, c).flags |= 256), c = Kf(f, c, false), c !== 2) {
                if (Yf && !i) {
                  f.errorRecoveryDisabledLanes |= n, Le |= n, u = 4;
                  break l;
                }
                n = $l, $l = u, n !== null && ($l === null ? $l = n : $l.push.apply($l, n));
              }
              u = c;
            }
            if (n = false, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ta(l, 0), he(l, t, 0, true);
          break;
        }
        l: {
          switch (a = l, n = u, n) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              he(a, t, ct, !ye);
              break l;
            case 2:
              $l = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (u = pn + 300 - Il(), 10 < u)) {
            if (he(a, t, ct, !ye), Cu(a, 0, true) !== 0) break l;
            Ft = t, a.timeoutHandle = ud(D0.bind(null, a, e, $l, Mn, Xf, t, ct, Le, za, ye, n, "Throttled", -0, 0), u);
            break l;
          }
          D0(a, e, $l, Mn, Xf, t, ct, Le, za, ye, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    xt(l);
  }
  function D0(l, t, e, a, u, n, c, f, i, h, E, T, g, S) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: jt }, E0(t, n, T);
      var R = (n & 62914560) === n ? pn - Il() : (n & 4194048) === n ? A0 - Il() : 0;
      if (R = ov(T, R), R !== null) {
        Ft = n, l.cancelPendingCommit = R(C0.bind(null, l, t, n, e, a, u, c, f, i, E, T, null, g, S)), he(l, n, c, !h);
        return;
      }
    }
    C0(l, t, n, e, a, u, c, f, i);
  }
  function Om(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
        var u = e[a], n = u.getSnapshot;
        u = u.value;
        try {
          if (!tt(n(), u)) return false;
        } catch {
          return false;
        }
      }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function he(l, t, e, a) {
    t &= ~Gf, t &= ~Le, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - lt(u), c = 1 << n;
      a[n] = -1, u &= ~c;
    }
    e !== 0 && qi(l, e, t);
  }
  function Dn() {
    return (tl & 6) === 0 ? (ru(0), false) : true;
  }
  function Vf() {
    if (J !== null) {
      if (al === 0) var l = J.return;
      else l = J, Gt = He = null, nf(l), ma = null, ka = 0, l = J;
      for (; l !== null; ) n0(l.alternate, l), l = l.return;
      J = null;
    }
  }
  function Ta(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Jm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Ft = 0, Vf(), dl = l, J = e = qt(l.current, null), W = t, al = 0, nt = null, ye = false, Ea = Ha(l, t), Yf = false, za = ct = Gf = Le = me = hl = 0, $l = mu = null, Xf = false, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
      var u = 31 - lt(a), n = 1 << u;
      t |= l[u], a &= ~n;
    }
    return $t = t, Wu(), e;
  }
  function U0(l, t) {
    Z = null, z.H = nu, t === ya || t === en ? (t = Vs(), al = 3) : t === wc ? (t = Vs(), al = 4) : al = t === _f ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, nt = t, J === null && (hl = 1, gn(l, yt(t, l.current)));
  }
  function N0() {
    var l = at.current;
    return l === null ? true : (W & 4194048) === W ? ht === null : (W & 62914560) === W || (W & 536870912) !== 0 ? l === ht : false;
  }
  function x0() {
    var l = z.H;
    return z.H = nu, l === null ? nu : l;
  }
  function R0() {
    var l = z.A;
    return z.A = Am, l;
  }
  function Un() {
    hl = 4, ye || (W & 4194048) !== W && at.current !== null || (Ea = true), (me & 134217727) === 0 && (Le & 134217727) === 0 || dl === null || he(dl, W, ct, false);
  }
  function Kf(l, t, e) {
    var a = tl;
    tl |= 2;
    var u = x0(), n = R0();
    (dl !== l || W !== t) && (Mn = null, Ta(l, t)), t = false;
    var c = hl;
    l: do
      try {
        if (al !== 0 && J !== null) {
          var f = J, i = nt;
          switch (al) {
            case 8:
              Vf(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              at.current === null && (t = true);
              var h = al;
              if (al = 0, nt = null, Aa(l, f, i, h), e && Ea) {
                c = 0;
                break l;
              }
              break;
            default:
              h = al, al = 0, nt = null, Aa(l, f, i, h);
          }
        }
        Mm(), c = hl;
        break;
      } catch (E) {
        U0(l, E);
      }
    while (true);
    return t && l.shellSuspendCounter++, Gt = He = null, tl = a, z.H = u, z.A = n, J === null && (dl = null, W = 0, Wu()), c;
  }
  function Mm() {
    for (; J !== null; ) B0(J);
  }
  function Dm(l, t) {
    var e = tl;
    tl |= 2;
    var a = x0(), u = R0();
    dl !== l || W !== t ? (Mn = null, On = Il() + 500, Ta(l, t)) : Ea = Ha(l, t);
    l: do
      try {
        if (al !== 0 && J !== null) {
          t = J;
          var n = nt;
          t: switch (al) {
            case 1:
              al = 0, nt = null, Aa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Zs(n)) {
                al = 0, nt = null, H0(t);
                break;
              }
              t = function() {
                al !== 2 && al !== 9 || dl !== l || (al = 7), xt(l);
              }, n.then(t, t);
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              Zs(n) ? (al = 0, nt = null, H0(t)) : (al = 0, nt = null, Aa(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (J.tag) {
                case 26:
                  c = J.memoizedState;
                case 5:
                case 27:
                  var f = J;
                  if (c ? bd(c) : f.stateNode.complete) {
                    al = 0, nt = null;
                    var i = f.sibling;
                    if (i !== null) J = i;
                    else {
                      var h = f.return;
                      h !== null ? (J = h, Nn(h)) : J = null;
                    }
                    break t;
                  }
              }
              al = 0, nt = null, Aa(l, t, n, 5);
              break;
            case 6:
              al = 0, nt = null, Aa(l, t, n, 6);
              break;
            case 8:
              Vf(), hl = 6;
              break l;
            default:
              throw Error(s(462));
          }
        }
        Um();
        break;
      } catch (E) {
        U0(l, E);
      }
    while (true);
    return Gt = He = null, z.H = a, z.A = u, tl = e, J !== null ? 0 : (dl = null, W = 0, Wu(), hl);
  }
  function Um() {
    for (; J !== null && !Id(); ) B0(J);
  }
  function B0(l) {
    var t = a0(l.alternate, l, $t);
    l.memoizedProps = l.pendingProps, t === null ? Nn(l) : J = t;
  }
  function H0(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ko(e, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = ko(e, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        nf(t);
      default:
        n0(e, t), t = J = xs(t, $t), t = a0(e, t, $t);
    }
    l.memoizedProps = l.pendingProps, t === null ? Nn(l) : J = t;
  }
  function Aa(l, t, e, a) {
    Gt = He = null, nf(t), ma = null, ka = 0;
    var u = t.return;
    try {
      if (gm(l, u, t, e, W)) {
        hl = 1, gn(l, yt(e, l.current)), J = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw J = u, n;
      hl = 1, gn(l, yt(e, l.current)), J = null;
      return;
    }
    t.flags & 32768 ? (k || a === 1 ? l = true : Ea || (W & 536870912) !== 0 ? l = false : (ye = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = at.current, a !== null && a.tag === 13 && (a.flags |= 16384))), j0(t, l)) : Nn(t);
  }
  function Nn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        j0(t, ye);
        return;
      }
      l = t.return;
      var e = Em(t.alternate, t, $t);
      if (e !== null) {
        J = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function j0(l, t) {
    do {
      var e = zm(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, J = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        J = l;
        return;
      }
      J = l = e;
    } while (l !== null);
    hl = 6, J = null;
  }
  function C0(l, t, e, a, u, n, c, f, i) {
    l.cancelPendingCommit = null;
    do
      xn();
    while (Al !== 0);
    if ((tl & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === l.current) throw Error(s(177));
      if (n = t.lanes | t.childLanes, n |= Rc, iy(l, e, n, c, f, i), l === dl && (J = dl = null, W = 0), _a = t, re = l, Ft = e, Qf = n, Zf = u, p0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Bm(Ru, function() {
        return Q0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, u = U.p, U.p = 2, c = tl, tl |= 4;
        try {
          _m(l, t, e);
        } finally {
          tl = c, U.p = u, z.T = a;
        }
      }
      Al = 1, q0(), Y0(), G0();
    }
  }
  function q0() {
    if (Al === 1) {
      Al = 0;
      var l = re, t = _a, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = z.T, z.T = null;
        var a = U.p;
        U.p = 2;
        var u = tl;
        tl |= 4;
        try {
          g0(t, l);
          var n = ai, c = _s(l.containerInfo), f = n.focusedElem, i = n.selectionRange;
          if (c !== f && f && f.ownerDocument && zs(f.ownerDocument.documentElement, f)) {
            if (i !== null && Mc(f)) {
              var h = i.start, E = i.end;
              if (E === void 0 && (E = h), "selectionStart" in f) f.selectionStart = h, f.selectionEnd = Math.min(E, f.value.length);
              else {
                var T = f.ownerDocument || document, g = T && T.defaultView || window;
                if (g.getSelection) {
                  var S = g.getSelection(), R = f.textContent.length, Y = Math.min(i.start, R), sl = i.end === void 0 ? Y : Math.min(i.end, R);
                  !S.extend && Y > sl && (c = sl, sl = Y, Y = c);
                  var m = Es(f, Y), o = Es(f, sl);
                  if (m && o && (S.rangeCount !== 1 || S.anchorNode !== m.node || S.anchorOffset !== m.offset || S.focusNode !== o.node || S.focusOffset !== o.offset)) {
                    var r = T.createRange();
                    r.setStart(m.node, m.offset), S.removeAllRanges(), Y > sl ? (S.addRange(r), S.extend(o.node, o.offset)) : (r.setEnd(o.node, o.offset), S.addRange(r));
                  }
                }
              }
            }
            for (T = [], S = f; S = S.parentNode; ) S.nodeType === 1 && T.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < T.length; f++) {
              var _ = T[f];
              _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
            }
          }
          Ln = !!ei, ai = ei = null;
        } finally {
          tl = u, U.p = a, z.T = e;
        }
      }
      l.current = t, Al = 2;
    }
  }
  function Y0() {
    if (Al === 2) {
      Al = 0;
      var l = re, t = _a, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = z.T, z.T = null;
        var a = U.p;
        U.p = 2;
        var u = tl;
        tl |= 4;
        try {
          y0(l, t.alternate, t);
        } finally {
          tl = u, U.p = a, z.T = e;
        }
      }
      Al = 3;
    }
  }
  function G0() {
    if (Al === 4 || Al === 3) {
      Al = 0, Pd();
      var l = re, t = _a, e = Ft, a = p0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Al = 5 : (Al = 0, _a = re = null, X0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (ve = null), ic(e), t = t.stateNode, Pl && typeof Pl.onCommitFiberRoot == "function") try {
        Pl.onCommitFiberRoot(Ba, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = z.T, u = U.p, U.p = 2, z.T = null;
        try {
          for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          z.T = t, U.p = u;
        }
      }
      (Ft & 3) !== 0 && xn(), xt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === Lf ? vu++ : (vu = 0, Lf = l) : vu = 0, ru(0);
    }
  }
  function X0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, $a(t)));
  }
  function xn() {
    return q0(), Y0(), G0(), Q0();
  }
  function Q0() {
    if (Al !== 5) return false;
    var l = re, t = Qf;
    Qf = 0;
    var e = ic(Ft), a = z.T, u = U.p;
    try {
      U.p = 32 > e ? 32 : e, z.T = null, e = Zf, Zf = null;
      var n = re, c = Ft;
      if (Al = 0, _a = re = null, Ft = 0, (tl & 6) !== 0) throw Error(s(331));
      var f = tl;
      if (tl |= 4, _0(n.current), b0(n, n.current, c, e), tl = f, ru(0, false), Pl && typeof Pl.onPostCommitFiberRoot == "function") try {
        Pl.onPostCommitFiberRoot(Ba, n);
      } catch {
      }
      return true;
    } finally {
      U.p = u, z.T = a, X0(l, t);
    }
  }
  function Z0(l, t, e) {
    t = yt(e, t), t = zf(l.stateNode, t, 2), l = ie(l, t, 2), l !== null && (ja(l, 2), xt(l));
  }
  function ul(l, t, e) {
    if (l.tag === 3) Z0(l, l, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Z0(t, l, e);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ve === null || !ve.has(a))) {
          l = yt(e, l), e = Lo(2), a = ie(t, e, 2), a !== null && (Vo(e, a, t, l), ja(a, 2), xt(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function Jf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new pm();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Yf = true, u.add(e), l = Nm.bind(null, l, t, e), t.then(l, l));
  }
  function Nm(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, dl === l && (W & e) === e && (hl === 4 || hl === 3 && (W & 62914560) === W && 300 > Il() - pn ? (tl & 2) === 0 && Ta(l, 0) : Gf |= e, za === W && (za = 0)), xt(l);
  }
  function L0(l, t) {
    t === 0 && (t = Ci()), l = xe(l, t), l !== null && (ja(l, t), xt(l));
  }
  function xm(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), L0(l, e);
  }
  function Rm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), L0(l, e);
  }
  function Bm(l, t) {
    return uc(l, t);
  }
  var Rn = null, pa = null, wf = false, Bn = false, Wf = false, ge = 0;
  function xt(l) {
    l !== pa && l.next === null && (pa === null ? Rn = pa = l : pa = pa.next = l), Bn = true, wf || (wf = true, jm());
  }
  function ru(l, t) {
    if (!Wf && Bn) {
      Wf = true;
      do
        for (var e = false, a = Rn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              n = (1 << 31 - lt(42 | l) + 1) - 1, n &= u & ~(c & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = true, w0(a, n));
          } else n = W, n = Cu(a, a === dl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ha(a, n) || (e = true, w0(a, n));
          a = a.next;
        }
      while (e);
      Wf = false;
    }
  }
  function Hm() {
    V0();
  }
  function V0() {
    Bn = wf = false;
    var l = 0;
    ge !== 0 && Km() && (l = ge);
    for (var t = Il(), e = null, a = Rn; a !== null; ) {
      var u = a.next, n = K0(a, t);
      n === 0 ? (a.next = null, e === null ? Rn = u : e.next = u, u === null && (pa = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Bn = true)), a = u;
    }
    Al !== 0 && Al !== 5 || ru(l), ge !== 0 && (ge = 0);
  }
  function K0(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - lt(n), f = 1 << c, i = u[c];
      i === -1 ? ((f & e) === 0 || (f & a) !== 0) && (u[c] = fy(f, t)) : i <= t && (l.expiredLanes |= f), n &= ~f;
    }
    if (t = dl, e = W, e = Cu(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (al === 2 || al === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && nc(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ha(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && nc(a), ic(e)) {
        case 2:
        case 8:
          e = Hi;
          break;
        case 32:
          e = Ru;
          break;
        case 268435456:
          e = ji;
          break;
        default:
          e = Ru;
      }
      return a = J0.bind(null, l), e = uc(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && nc(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function J0(l, t) {
    if (Al !== 0 && Al !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (xn() && l.callbackNode !== e) return null;
    var a = W;
    return a = Cu(l, l === dl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (M0(l, a, t), K0(l, Il()), l.callbackNode != null && l.callbackNode === e ? J0.bind(null, l) : null);
  }
  function w0(l, t) {
    if (xn()) return null;
    M0(l, t, true);
  }
  function jm() {
    wm(function() {
      (tl & 6) !== 0 ? uc(Bi, Hm) : V0();
    });
  }
  function $f() {
    if (ge === 0) {
      var l = oa;
      l === 0 && (l = Bu, Bu <<= 1, (Bu & 261888) === 0 && (Bu = 256)), ge = l;
    }
    return ge;
  }
  function W0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Xu("" + l);
  }
  function $0(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Cm(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = W0((u[Vl] || null).action), c = a.submitter;
      c && (t = (t = c[Vl] || null) ? W0(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var f = new Vu("action", "action", null, a, u);
      l.push({ event: f, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (ge !== 0) {
            var i = c ? $0(u, c) : new FormData(u);
            rf(e, { pending: true, data: i, method: u.method, action: n }, null, i);
          }
        } else typeof n == "function" && (f.preventDefault(), i = c ? $0(u, c) : new FormData(u), rf(e, { pending: true, data: i, method: u.method, action: n }, n, i));
      }, currentTarget: u }] });
    }
  }
  for (var Ff = 0; Ff < xc.length; Ff++) {
    var kf = xc[Ff], qm = kf.toLowerCase(), Ym = kf[0].toUpperCase() + kf.slice(1);
    _t(qm, "on" + Ym);
  }
  _t(ps, "onAnimationEnd"), _t(Os, "onAnimationIteration"), _t(Ms, "onAnimationStart"), _t("dblclick", "onDoubleClick"), _t("focusin", "onFocus"), _t("focusout", "onBlur"), _t(lm, "onTransitionRun"), _t(tm, "onTransitionStart"), _t(em, "onTransitionCancel"), _t(Ds, "onTransitionEnd"), Fe("onMouseEnter", ["mouseout", "mouseover"]), Fe("onMouseLeave", ["mouseout", "mouseover"]), Fe("onPointerEnter", ["pointerout", "pointerover"]), Fe("onPointerLeave", ["pointerout", "pointerover"]), Me("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Me("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Me("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Me("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var hu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));
  function F0(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t) for (var c = a.length - 1; 0 <= c; c--) {
          var f = a[c], i = f.instance, h = f.currentTarget;
          if (f = f.listener, i !== n && u.isPropagationStopped()) break l;
          n = f, u.currentTarget = h;
          try {
            n(u);
          } catch (E) {
            wu(E);
          }
          u.currentTarget = null, n = i;
        }
        else for (c = 0; c < a.length; c++) {
          if (f = a[c], i = f.instance, h = f.currentTarget, f = f.listener, i !== n && u.isPropagationStopped()) break l;
          n = f, u.currentTarget = h;
          try {
            n(u);
          } catch (E) {
            wu(E);
          }
          u.currentTarget = null, n = i;
        }
      }
    }
  }
  function w(l, t) {
    var e = t[sc];
    e === void 0 && (e = t[sc] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (k0(t, l, 2, false), e.add(a));
  }
  function If(l, t, e) {
    var a = 0;
    t && (a |= 4), k0(e, l, a, t);
  }
  var Hn = "_reactListening" + Math.random().toString(36).slice(2);
  function Pf(l) {
    if (!l[Hn]) {
      l[Hn] = true, Li.forEach(function(e) {
        e !== "selectionchange" && (Gm.has(e) || If(e, false, l), If(e, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Hn] || (t[Hn] = true, If("selectionchange", false, t));
    }
  }
  function k0(l, t, e, a) {
    switch (Od(t)) {
      case 2:
        var u = mv;
        break;
      case 8:
        u = vv;
        break;
      default:
        u = vi;
    }
    e = u.bind(null, t, e, l), u = void 0, !Sc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = true), a ? u !== void 0 ? l.addEventListener(t, e, { capture: true, passive: u }) : l.addEventListener(t, e, true) : u !== void 0 ? l.addEventListener(t, e, { passive: u }) : l.addEventListener(t, e, false);
  }
  function li(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var c = a.tag;
      if (c === 3 || c === 4) {
        var f = a.stateNode.containerInfo;
        if (f === u) break;
        if (c === 4) for (c = a.return; c !== null; ) {
          var i = c.tag;
          if ((i === 3 || i === 4) && c.stateNode.containerInfo === u) return;
          c = c.return;
        }
        for (; f !== null; ) {
          if (c = we(f), c === null) return;
          if (i = c.tag, i === 5 || i === 6 || i === 26 || i === 27) {
            a = n = c;
            continue l;
          }
          f = f.parentNode;
        }
      }
      a = a.return;
    }
    ts(function() {
      var h = n, E = hc(e), T = [];
      l: {
        var g = Us.get(l);
        if (g !== void 0) {
          var S = Vu, R = l;
          switch (l) {
            case "keypress":
              if (Zu(e) === 0) break l;
            case "keydown":
            case "keyup":
              S = Ry;
              break;
            case "focusin":
              R = "focus", S = _c;
              break;
            case "focusout":
              R = "blur", S = _c;
              break;
            case "beforeblur":
            case "afterblur":
              S = _c;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = Ey;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = jy;
              break;
            case ps:
            case Os:
            case Ms:
              S = Ty;
              break;
            case Ds:
              S = qy;
              break;
            case "scroll":
            case "scrollend":
              S = Sy;
              break;
            case "wheel":
              S = Gy;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = py;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = cs;
              break;
            case "toggle":
            case "beforetoggle":
              S = Qy;
          }
          var Y = (t & 4) !== 0, sl = !Y && (l === "scroll" || l === "scrollend"), m = Y ? g !== null ? g + "Capture" : null : g;
          Y = [];
          for (var o = h, r; o !== null; ) {
            var _ = o;
            if (r = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || r === null || m === null || (_ = Ya(o, m), _ != null && Y.push(gu(o, _, r))), sl) break;
            o = o.return;
          }
          0 < Y.length && (g = new S(g, R, null, e, E), T.push({ event: g, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", g && e !== rc && (R = e.relatedTarget || e.fromElement) && (we(R) || R[Je])) break l;
          if ((S || g) && (g = E.window === E ? E : (g = E.ownerDocument) ? g.defaultView || g.parentWindow : window, S ? (R = e.relatedTarget || e.toElement, S = h, R = R ? we(R) : null, R !== null && (sl = O(R), Y = R.tag, R !== sl || Y !== 5 && Y !== 27 && Y !== 6) && (R = null)) : (S = null, R = h), S !== R)) {
            if (Y = us, _ = "onMouseLeave", m = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (Y = cs, _ = "onPointerLeave", m = "onPointerEnter", o = "pointer"), sl = S == null ? g : qa(S), r = R == null ? g : qa(R), g = new Y(_, o + "leave", S, e, E), g.target = sl, g.relatedTarget = r, _ = null, we(E) === h && (Y = new Y(m, o + "enter", R, e, E), Y.target = r, Y.relatedTarget = sl, _ = Y), sl = _, S && R) t: {
              for (Y = Xm, m = S, o = R, r = 0, _ = m; _; _ = Y(_)) r++;
              _ = 0;
              for (var C = o; C; C = Y(C)) _++;
              for (; 0 < r - _; ) m = Y(m), r--;
              for (; 0 < _ - r; ) o = Y(o), _--;
              for (; r--; ) {
                if (m === o || o !== null && m === o.alternate) {
                  Y = m;
                  break t;
                }
                m = Y(m), o = Y(o);
              }
              Y = null;
            }
            else Y = null;
            S !== null && I0(T, g, S, Y, false), R !== null && sl !== null && I0(T, sl, R, Y, true);
          }
        }
        l: {
          if (g = h ? qa(h) : window, S = g.nodeName && g.nodeName.toLowerCase(), S === "select" || S === "input" && g.type === "file") var P = vs;
          else if (ys(g)) if (rs) P = ky;
          else {
            P = $y;
            var H = Wy;
          }
          else S = g.nodeName, !S || S.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? h && vc(h.elementType) && (P = vs) : P = Fy;
          if (P && (P = P(l, h))) {
            ms(T, P, e, E);
            break l;
          }
          H && H(l, g, h), l === "focusout" && h && g.type === "number" && h.memoizedProps.value != null && mc(g, "number", g.value);
        }
        switch (H = h ? qa(h) : window, l) {
          case "focusin":
            (ys(H) || H.contentEditable === "true") && (ea = H, Dc = h, Ja = null);
            break;
          case "focusout":
            Ja = Dc = ea = null;
            break;
          case "mousedown":
            Uc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Uc = false, Ts(T, e, E);
            break;
          case "selectionchange":
            if (Py) break;
          case "keydown":
          case "keyup":
            Ts(T, e, E);
        }
        var L;
        if (Ac) l: {
          switch (l) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break l;
            case "compositionend":
              $ = "onCompositionEnd";
              break l;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break l;
          }
          $ = void 0;
        }
        else ta ? os(l, e) && ($ = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && ($ = "onCompositionStart");
        $ && (fs && e.locale !== "ko" && (ta || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && ta && (L = es()) : (te = E, bc = "value" in te ? te.value : te.textContent, ta = true)), H = jn(h, $), 0 < H.length && ($ = new ns($, l, null, e, E), T.push({ event: $, listeners: H }), L ? $.data = L : (L = ds(e), L !== null && ($.data = L)))), (L = Ly ? Vy(l, e) : Ky(l, e)) && ($ = jn(h, "onBeforeInput"), 0 < $.length && (H = new ns("onBeforeInput", "beforeinput", null, e, E), T.push({ event: H, listeners: $ }), H.data = L)), Cm(T, l, h, e, E);
      }
      F0(T, t);
    });
  }
  function gu(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function jn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ya(l, e), u != null && a.unshift(gu(l, u, n)), u = Ya(l, t), u != null && a.push(gu(l, u, n))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Xm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function I0(l, t, e, a, u) {
    for (var n = t._reactName, c = []; e !== null && e !== a; ) {
      var f = e, i = f.alternate, h = f.stateNode;
      if (f = f.tag, i !== null && i === a) break;
      f !== 5 && f !== 26 && f !== 27 || h === null || (i = h, u ? (h = Ya(e, n), h != null && c.unshift(gu(e, h, i))) : u || (h = Ya(e, n), h != null && c.push(gu(e, h, i)))), e = e.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var Qm = /\r\n?/g, Zm = /\u0000|\uFFFD/g;
  function P0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Qm, `
`).replace(Zm, "");
  }
  function ld(l, t) {
    return t = P0(t), P0(l) === t;
  }
  function il(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ie(l, "" + a);
        break;
      case "className":
        Yu(l, "class", a);
        break;
      case "tabIndex":
        Yu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yu(l, e, a);
        break;
      case "style":
        Pi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Yu(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Xu("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (e === "formAction" ? (t !== "input" && il(l, t, "name", u.name, u, null), il(l, t, "formEncType", u.formEncType, u, null), il(l, t, "formMethod", u.formMethod, u, null), il(l, t, "formTarget", u.formTarget, u, null)) : (il(l, t, "encType", u.encType, u, null), il(l, t, "method", u.method, u, null), il(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Xu("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = jt);
        break;
      case "onScroll":
        a != null && w("scroll", l);
        break;
      case "onScrollEnd":
        a != null && w("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = Xu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === true ? l.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        w("beforetoggle", l), w("toggle", l), qu(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        qu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = hy.get(e) || e, qu(l, e, a));
    }
  }
  function ti(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Pi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && Ie(l, "" + a);
        break;
      case "onScroll":
        a != null && w("scroll", l);
        break;
      case "onScrollEnd":
        a != null && w("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = jt);
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
        if (!Vi.hasOwnProperty(e)) l: {
          if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Vl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
            typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
            break l;
          }
          e in l ? l[e] = a : a === true ? l.setAttribute(e, "") : qu(l, e, a);
        }
    }
  }
  function Bl(l, t, e) {
    switch (t) {
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
        w("error", l), w("load", l);
        var a = false, u = false, n;
        for (n in e) if (e.hasOwnProperty(n)) {
          var c = e[n];
          if (c != null) switch (n) {
            case "src":
              a = true;
              break;
            case "srcSet":
              u = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, t));
            default:
              il(l, t, n, c, e, null);
          }
        }
        u && il(l, t, "srcSet", e.srcSet, e, null), a && il(l, t, "src", e.src, e, null);
        return;
      case "input":
        w("invalid", l);
        var f = n = c = u = null, i = null, h = null;
        for (a in e) if (e.hasOwnProperty(a)) {
          var E = e[a];
          if (E != null) switch (a) {
            case "name":
              u = E;
              break;
            case "type":
              c = E;
              break;
            case "checked":
              i = E;
              break;
            case "defaultChecked":
              h = E;
              break;
            case "value":
              n = E;
              break;
            case "defaultValue":
              f = E;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (E != null) throw Error(s(137, t));
              break;
            default:
              il(l, t, a, E, e, null);
          }
        }
        $i(l, n, f, i, h, c, u, false);
        return;
      case "select":
        w("invalid", l), a = c = n = null;
        for (u in e) if (e.hasOwnProperty(u) && (f = e[u], f != null)) switch (u) {
          case "value":
            n = f;
            break;
          case "defaultValue":
            c = f;
            break;
          case "multiple":
            a = f;
          default:
            il(l, t, u, f, e, null);
        }
        t = n, e = c, l.multiple = !!a, t != null ? ke(l, !!a, t, false) : e != null && ke(l, !!a, e, true);
        return;
      case "textarea":
        w("invalid", l), n = u = a = null;
        for (c in e) if (e.hasOwnProperty(c) && (f = e[c], f != null)) switch (c) {
          case "value":
            a = f;
            break;
          case "defaultValue":
            u = f;
            break;
          case "children":
            n = f;
            break;
          case "dangerouslySetInnerHTML":
            if (f != null) throw Error(s(91));
            break;
          default:
            il(l, t, c, f, e, null);
        }
        ki(l, a, u, n);
        return;
      case "option":
        for (i in e) if (e.hasOwnProperty(i) && (a = e[i], a != null)) switch (i) {
          case "selected":
            l.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            il(l, t, i, a, e, null);
        }
        return;
      case "dialog":
        w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l);
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hu.length; a++) w(hu[a], l);
        break;
      case "image":
        w("error", l), w("load", l);
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        w("error", l), w("load", l);
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
        for (h in e) if (e.hasOwnProperty(h) && (a = e[h], a != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, t));
          default:
            il(l, t, h, a, e, null);
        }
        return;
      default:
        if (vc(t)) {
          for (E in e) e.hasOwnProperty(E) && (a = e[E], a !== void 0 && ti(l, t, E, a, e, void 0));
          return;
        }
    }
    for (f in e) e.hasOwnProperty(f) && (a = e[f], a != null && il(l, t, f, a, e, null));
  }
  function Lm(l, t, e, a) {
    switch (t) {
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
        var u = null, n = null, c = null, f = null, i = null, h = null, E = null;
        for (S in e) {
          var T = e[S];
          if (e.hasOwnProperty(S) && T != null) switch (S) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i = T;
            default:
              a.hasOwnProperty(S) || il(l, t, S, null, a, T);
          }
        }
        for (var g in a) {
          var S = a[g];
          if (T = e[g], a.hasOwnProperty(g) && (S != null || T != null)) switch (g) {
            case "type":
              n = S;
              break;
            case "name":
              u = S;
              break;
            case "checked":
              h = S;
              break;
            case "defaultChecked":
              E = S;
              break;
            case "value":
              c = S;
              break;
            case "defaultValue":
              f = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(s(137, t));
              break;
            default:
              S !== T && il(l, t, g, S, a, T);
          }
        }
        yc(l, c, f, i, h, E, n, u);
        return;
      case "select":
        S = c = f = g = null;
        for (n in e) if (i = e[n], e.hasOwnProperty(n) && i != null) switch (n) {
          case "value":
            break;
          case "multiple":
            S = i;
          default:
            a.hasOwnProperty(n) || il(l, t, n, null, a, i);
        }
        for (u in a) if (n = a[u], i = e[u], a.hasOwnProperty(u) && (n != null || i != null)) switch (u) {
          case "value":
            g = n;
            break;
          case "defaultValue":
            f = n;
            break;
          case "multiple":
            c = n;
          default:
            n !== i && il(l, t, u, n, a, i);
        }
        t = f, e = c, a = S, g != null ? ke(l, !!e, g, false) : !!a != !!e && (t != null ? ke(l, !!e, t, true) : ke(l, !!e, e ? [] : "", false));
        return;
      case "textarea":
        S = g = null;
        for (f in e) if (u = e[f], e.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f)) switch (f) {
          case "value":
            break;
          case "children":
            break;
          default:
            il(l, t, f, null, a, u);
        }
        for (c in a) if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null)) switch (c) {
          case "value":
            g = u;
            break;
          case "defaultValue":
            S = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(s(91));
            break;
          default:
            u !== n && il(l, t, c, u, a, n);
        }
        Fi(l, g, S);
        return;
      case "option":
        for (var R in e) if (g = e[R], e.hasOwnProperty(R) && g != null && !a.hasOwnProperty(R)) switch (R) {
          case "selected":
            l.selected = false;
            break;
          default:
            il(l, t, R, null, a, g);
        }
        for (i in a) if (g = a[i], S = e[i], a.hasOwnProperty(i) && g !== S && (g != null || S != null)) switch (i) {
          case "selected":
            l.selected = g && typeof g != "function" && typeof g != "symbol";
            break;
          default:
            il(l, t, i, g, a, S);
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
        for (var Y in e) g = e[Y], e.hasOwnProperty(Y) && g != null && !a.hasOwnProperty(Y) && il(l, t, Y, null, a, g);
        for (h in a) if (g = a[h], S = e[h], a.hasOwnProperty(h) && g !== S && (g != null || S != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (g != null) throw Error(s(137, t));
            break;
          default:
            il(l, t, h, g, a, S);
        }
        return;
      default:
        if (vc(t)) {
          for (var sl in e) g = e[sl], e.hasOwnProperty(sl) && g !== void 0 && !a.hasOwnProperty(sl) && ti(l, t, sl, void 0, a, g);
          for (E in a) g = a[E], S = e[E], !a.hasOwnProperty(E) || g === S || g === void 0 && S === void 0 || ti(l, t, E, g, a, S);
          return;
        }
    }
    for (var m in e) g = e[m], e.hasOwnProperty(m) && g != null && !a.hasOwnProperty(m) && il(l, t, m, null, a, g);
    for (T in a) g = a[T], S = e[T], !a.hasOwnProperty(T) || g === S || g == null && S == null || il(l, t, T, g, a, S);
  }
  function td(l) {
    switch (l) {
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
  function Vm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, c = u.initiatorType, f = u.duration;
        if (n && f && td(c)) {
          for (c = 0, f = u.responseEnd, a += 1; a < e.length; a++) {
            var i = e[a], h = i.startTime;
            if (h > f) break;
            var E = i.transferSize, T = i.initiatorType;
            E && td(T) && (i = i.responseEnd, c += E * (i < f ? 1 : (f - h) / (i - h)));
          }
          if (--a, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var ei = null, ai = null;
  function Cn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function ed(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ad(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function ui(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ni = null;
  function Km() {
    var l = window.event;
    return l && l.type === "popstate" ? l === ni ? false : (ni = l, true) : (ni = null, false);
  }
  var ud = typeof setTimeout == "function" ? setTimeout : void 0, Jm = typeof clearTimeout == "function" ? clearTimeout : void 0, nd = typeof Promise == "function" ? Promise : void 0, wm = typeof queueMicrotask == "function" ? queueMicrotask : typeof nd < "u" ? function(l) {
    return nd.resolve(null).then(l).catch(Wm);
  } : ud;
  function Wm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Se(l) {
    return l === "head";
  }
  function cd(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$" || e === "/&") {
        if (a === 0) {
          l.removeChild(u), Ua(t);
          return;
        }
        a--;
      } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
      else if (e === "html") Su(l.ownerDocument.documentElement);
      else if (e === "head") {
        e = l.ownerDocument.head, Su(e);
        for (var n = e.firstChild; n; ) {
          var c = n.nextSibling, f = n.nodeName;
          n[Ca] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = c;
        }
      } else e === "body" && Su(l.ownerDocument.body);
      e = u;
    } while (e);
    Ua(t);
  }
  function fd(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8) if (e = a.data, e === "/$") {
        if (l === 0) break;
        l--;
      } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function ci(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ci(e), oc(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function $m(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ca]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = gt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Fm(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function id(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = gt(l.nextSibling), l === null)) return null;
    return l;
  }
  function fi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ii(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function km(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function gt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var si = null;
  function sd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return gt(l.nextSibling);
          t--;
        } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function od(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function dd(l, t, e) {
    switch (t = Cn(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(s(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(s(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(s(454));
        return l;
      default:
        throw Error(s(451));
    }
  }
  function Su(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    oc(l);
  }
  var St = /* @__PURE__ */ new Map(), yd = /* @__PURE__ */ new Set();
  function qn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var kt = U.d;
  U.d = { f: Im, r: Pm, D: lv, C: tv, L: ev, m: av, X: nv, S: uv, M: cv };
  function Im() {
    var l = kt.f(), t = Dn();
    return l || t;
  }
  function Pm(l) {
    var t = We(l);
    t !== null && t.tag === 5 && t.type === "form" ? Uo(t) : kt.r(l);
  }
  var Oa = typeof document > "u" ? null : document;
  function md(l, t, e) {
    var a = Oa;
    if (a && typeof t == "string" && t) {
      var u = ot(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), yd.has(u) || (yd.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Bl(t, "link", l), pl(t), a.head.appendChild(t)));
    }
  }
  function lv(l) {
    kt.D(l), md("dns-prefetch", l, null);
  }
  function tv(l, t) {
    kt.C(l, t), md("preconnect", l, t);
  }
  function ev(l, t, e) {
    kt.L(l, t, e);
    var a = Oa;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + ot(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + ot(e.imageSizes) + '"]')) : u += '[href="' + ot(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ma(l);
          break;
        case "script":
          n = Da(l);
      }
      St.has(n) || (l = j({ rel: "preload", href: t === "image" && e && e.imageSrcSet ? void 0 : l, as: t }, e), St.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(bu(n)) || t === "script" && a.querySelector(Eu(n)) || (t = a.createElement("link"), Bl(t, "link", l), pl(t), a.head.appendChild(t)));
    }
  }
  function av(l, t) {
    kt.m(l, t);
    var e = Oa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + ot(a) + '"][href="' + ot(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Da(l);
      }
      if (!St.has(n) && (l = j({ rel: "modulepreload", href: l }, t), St.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Eu(n))) return;
        }
        a = e.createElement("link"), Bl(a, "link", l), pl(a), e.head.appendChild(a);
      }
    }
  }
  function uv(l, t, e) {
    kt.S(l, t, e);
    var a = Oa;
    if (a && l) {
      var u = $e(a).hoistableStyles, n = Ma(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(bu(n))) f.loading = 5;
        else {
          l = j({ rel: "stylesheet", href: l, "data-precedence": t }, e), (e = St.get(n)) && oi(l, e);
          var i = c = a.createElement("link");
          pl(i), Bl(i, "link", l), i._p = new Promise(function(h, E) {
            i.onload = h, i.onerror = E;
          }), i.addEventListener("load", function() {
            f.loading |= 1;
          }), i.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Yn(c, t, a);
        }
        c = { type: "stylesheet", instance: c, count: 1, state: f }, u.set(n, c);
      }
    }
  }
  function nv(l, t) {
    kt.X(l, t);
    var e = Oa;
    if (e && l) {
      var a = $e(e).hoistableScripts, u = Da(l), n = a.get(u);
      n || (n = e.querySelector(Eu(u)), n || (l = j({ src: l, async: true }, t), (t = St.get(u)) && di(l, t), n = e.createElement("script"), pl(n), Bl(n, "link", l), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    }
  }
  function cv(l, t) {
    kt.M(l, t);
    var e = Oa;
    if (e && l) {
      var a = $e(e).hoistableScripts, u = Da(l), n = a.get(u);
      n || (n = e.querySelector(Eu(u)), n || (l = j({ src: l, async: true, type: "module" }, t), (t = St.get(u)) && di(l, t), n = e.createElement("script"), pl(n), Bl(n, "link", l), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    }
  }
  function vd(l, t, e, a) {
    var u = (u = K.current) ? qn(u) : null;
    if (!u) throw Error(s(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ma(e.href), e = $e(u).hoistableStyles, a = e.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Ma(e.href);
          var n = $e(u).hoistableStyles, c = n.get(l);
          if (c || (u = u.ownerDocument || u, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, c), (n = u.querySelector(bu(l))) && !n._p && (c.instance = n, c.state.loading = 5), St.has(l) || (e = { rel: "preload", as: "style", href: e.href, crossOrigin: e.crossOrigin, integrity: e.integrity, media: e.media, hrefLang: e.hrefLang, referrerPolicy: e.referrerPolicy }, St.set(l, e), n || fv(u, l, e, c.state))), t && a === null) throw Error(s(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Da(e), e = $e(u).hoistableScripts, a = e.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, l));
    }
  }
  function Ma(l) {
    return 'href="' + ot(l) + '"';
  }
  function bu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function rd(l) {
    return j({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function fv(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Bl(t, "link", e), pl(t), l.head.appendChild(t));
  }
  function Da(l) {
    return '[src="' + ot(l) + '"]';
  }
  function Eu(l) {
    return "script[async]" + l;
  }
  function hd(l, t, e) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + ot(e.href) + '"]');
        if (a) return t.instance = a, pl(a), a;
        var u = j({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
        return a = (l.ownerDocument || l).createElement("style"), pl(a), Bl(a, "style", u), Yn(a, e.precedence, l), t.instance = a;
      case "stylesheet":
        u = Ma(e.href);
        var n = l.querySelector(bu(u));
        if (n) return t.state.loading |= 4, t.instance = n, pl(n), n;
        a = rd(e), (u = St.get(u)) && oi(a, u), n = (l.ownerDocument || l).createElement("link"), pl(n);
        var c = n;
        return c._p = new Promise(function(f, i) {
          c.onload = f, c.onerror = i;
        }), Bl(n, "link", a), t.state.loading |= 4, Yn(n, e.precedence, l), t.instance = n;
      case "script":
        return n = Da(e.src), (u = l.querySelector(Eu(n))) ? (t.instance = u, pl(u), u) : (a = e, (u = St.get(n)) && (a = j({}, e), di(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), pl(u), Bl(u, "link", a), l.head.appendChild(u), t.instance = u);
      case "void":
        return null;
      default:
        throw Error(s(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Yn(a, e.precedence, l));
    return t.instance;
  }
  function Yn(l, t, e) {
    for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function oi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function di(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Gn = null;
  function gd(l, t, e) {
    if (Gn === null) {
      var a = /* @__PURE__ */ new Map(), u = Gn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else u = Gn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Ca] || n[Ul] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = a.get(c);
        f ? f.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function Sd(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
  }
  function iv(l, t, e) {
    if (e === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function bd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function sv(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Ma(a.href), n = t.querySelector(bu(u));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Xn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, pl(n);
          return;
        }
        n = t.ownerDocument || t, a = rd(a), (u = St.get(u)) && oi(a, u), n = n.createElement("link"), pl(n);
        var c = n;
        c._p = new Promise(function(f, i) {
          c.onload = f, c.onerror = i;
        }), Bl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Xn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var yi = 0;
  function ov(l, t) {
    return l.stylesheets && l.count === 0 && Zn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Zn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && yi === 0 && (yi = 62500 * Vm());
      var u = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Zn(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > yi ? 50 : 800) + t);
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Xn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Qn = null;
  function Zn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Qn = /* @__PURE__ */ new Map(), t.forEach(dv, l), Qn = null, Xn.call(l));
  }
  function dv(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Qn.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Qn.set(l, e);
        for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
        }
        a && e.set(null, a);
      }
      u = t.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = Xn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var zu = { $$typeof: Cl, Provider: null, Consumer: null, _currentValue: G, _currentValue2: G, _threadCount: 0 };
  function yv(l, t, e, a, u, n, c, f, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = cc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cc(0), this.hiddenUpdates = cc(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ed(l, t, e, a, u, n, c, f, i, h, E, T) {
    return l = new yv(l, t, e, c, i, h, E, T, f), t = 1, n === true && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Vc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: a, isDehydrated: e, cache: t }, Wc(n), l;
  }
  function zd(l) {
    return l ? (l = na, l) : na;
  }
  function _d(l, t, e, a, u, n) {
    u = zd(u), a.context === null ? a.context = u : a.pendingContext = u, a = fe(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ie(l, a, t), e !== null && (Fl(e, l, t), Pa(e, l, t));
  }
  function Td(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function mi(l, t) {
    Td(l, t), (l = l.alternate) && Td(l, t);
  }
  function Ad(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = xe(l, 67108864);
      t !== null && Fl(t, l, 67108864), mi(l, 67108864);
    }
  }
  function pd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ft();
      t = fc(t);
      var e = xe(l, t);
      e !== null && Fl(e, l, t), mi(l, t);
    }
  }
  var Ln = true;
  function mv(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = U.p;
    try {
      U.p = 2, vi(l, t, e, a);
    } finally {
      U.p = n, z.T = u;
    }
  }
  function vv(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = U.p;
    try {
      U.p = 8, vi(l, t, e, a);
    } finally {
      U.p = n, z.T = u;
    }
  }
  function vi(l, t, e, a) {
    if (Ln) {
      var u = ri(a);
      if (u === null) li(l, t, a, Vn, e), Md(l, a);
      else if (hv(u, l, t, e, a)) a.stopPropagation();
      else if (Md(l, a), t & 4 && -1 < rv.indexOf(l)) {
        for (; u !== null; ) {
          var n = We(u);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var c = Oe(n.pendingLanes);
                if (c !== 0) {
                  var f = n;
                  for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                    var i = 1 << 31 - lt(c);
                    f.entanglements[1] |= i, c &= ~i;
                  }
                  xt(n), (tl & 6) === 0 && (On = Il() + 500, ru(0));
                }
              }
              break;
            case 31:
            case 13:
              f = xe(n, 2), f !== null && Fl(f, n, 2), Dn(), mi(n, 2);
          }
          if (n = ri(a), n === null && li(l, t, a, Vn, e), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else li(l, t, a, null, e);
    }
  }
  function ri(l) {
    return l = hc(l), hi(l);
  }
  var Vn = null;
  function hi(l) {
    if (Vn = null, l = we(l), l !== null) {
      var t = O(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = q(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = I(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Vn = l, null;
  }
  function Od(l) {
    switch (l) {
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
        switch (ly()) {
          case Bi:
            return 2;
          case Hi:
            return 8;
          case Ru:
          case ty:
            return 32;
          case ji:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gi = false, be = null, Ee = null, ze = null, _u = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), _e = [], rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Md(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        be = null;
        break;
      case "dragenter":
      case "dragleave":
        Ee = null;
        break;
      case "mouseover":
      case "mouseout":
        ze = null;
        break;
      case "pointerover":
      case "pointerout":
        _u.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(t.pointerId);
    }
  }
  function Au(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }, t !== null && (t = We(t), t !== null && Ad(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function hv(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return be = Au(be, l, t, e, a, u), true;
      case "dragenter":
        return Ee = Au(Ee, l, t, e, a, u), true;
      case "mouseover":
        return ze = Au(ze, l, t, e, a, u), true;
      case "pointerover":
        var n = u.pointerId;
        return _u.set(n, Au(_u.get(n) || null, l, t, e, a, u)), true;
      case "gotpointercapture":
        return n = u.pointerId, Tu.set(n, Au(Tu.get(n) || null, l, t, e, a, u)), true;
    }
    return false;
  }
  function Dd(l) {
    var t = we(l.target);
    if (t !== null) {
      var e = O(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = q(e), t !== null) {
            l.blockedOn = t, Qi(l.priority, function() {
              pd(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = I(e), t !== null) {
            l.blockedOn = t, Qi(l.priority, function() {
              pd(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Kn(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = ri(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        rc = a, e.target.dispatchEvent(a), rc = null;
      } else return t = We(e), t !== null && Ad(t), l.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function Ud(l, t, e) {
    Kn(l) && e.delete(t);
  }
  function gv() {
    gi = false, be !== null && Kn(be) && (be = null), Ee !== null && Kn(Ee) && (Ee = null), ze !== null && Kn(ze) && (ze = null), _u.forEach(Ud), Tu.forEach(Ud);
  }
  function Jn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, gi || (gi = true, d.unstable_scheduleCallback(d.unstable_NormalPriority, gv)));
  }
  var wn = null;
  function Nd(l) {
    wn !== l && (wn = l, d.unstable_scheduleCallback(d.unstable_NormalPriority, function() {
      wn === l && (wn = null);
      for (var t = 0; t < l.length; t += 3) {
        var e = l[t], a = l[t + 1], u = l[t + 2];
        if (typeof a != "function") {
          if (hi(a || e) === null) continue;
          break;
        }
        var n = We(e);
        n !== null && (l.splice(t, 3), t -= 3, rf(n, { pending: true, data: u, method: e.method, action: a }, a, u));
      }
    }));
  }
  function Ua(l) {
    function t(i) {
      return Jn(i, l);
    }
    be !== null && Jn(be, l), Ee !== null && Jn(Ee, l), ze !== null && Jn(ze, l), _u.forEach(t), Tu.forEach(t);
    for (var e = 0; e < _e.length; e++) {
      var a = _e[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < _e.length && (e = _e[0], e.blockedOn === null); ) Dd(e), e.blockedOn === null && _e.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
      var u = e[a], n = e[a + 1], c = u[Vl] || null;
      if (typeof n == "function") c || Nd(e);
      else if (c) {
        var f = null;
        if (n && n.hasAttribute("formAction")) {
          if (u = n, c = n[Vl] || null) f = c.formAction;
          else if (hi(u) !== null) continue;
        } else f = c.action;
        typeof f == "function" ? e[a + 1] = f : (e.splice(a, 3), a -= 3), Nd(e);
      }
    }
  }
  function xd() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(c) {
          return u = c;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Si(l) {
    this._internalRoot = l;
  }
  Wn.prototype.render = Si.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var e = t.current, a = ft();
    _d(e, a, l, t, null, null);
  }, Wn.prototype.unmount = Si.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      _d(l.current, 2, null, l, null, null), Dn(), t[Je] = null;
    }
  };
  function Wn(l) {
    this._internalRoot = l;
  }
  Wn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Xi();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < _e.length && t !== 0 && t < _e[e].priority; e++) ;
      _e.splice(e, 0, l), e === 0 && Dd(l);
    }
  };
  var Rd = v.version;
  if (Rd !== "19.2.4") throw Error(s(527, Rd, "19.2.4"));
  U.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(s(188)) : (l = Object.keys(l).join(","), Error(s(268, l)));
    return l = A(t), l = l !== null ? V(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Sv = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: z, reconcilerVersion: "19.2.4" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$n.isDisabled && $n.supportsFiber) try {
      Ba = $n.inject(Sv), Pl = $n;
    } catch {
    }
  }
  return Ou.createRoot = function(l, t) {
    if (!M(l)) throw Error(s(299));
    var e = false, a = "", u = Go, n = Xo, c = Qo;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Ed(l, 1, false, null, null, e, a, null, u, n, c, xd), l[Je] = t.current, Pf(l), new Si(t);
  }, Ou.hydrateRoot = function(l, t, e) {
    if (!M(l)) throw Error(s(299));
    var a = false, u = "", n = Go, c = Xo, f = Qo, i = null;
    return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.formState !== void 0 && (i = e.formState)), t = Ed(l, 1, true, t, e ?? null, a, u, i, n, c, f, xd), t.context = zd(null), e = t.current, a = ft(), a = fc(a), u = fe(a), u.callback = null, ie(e, u, a), e = a, t.current.lanes = e, ja(t, e), xt(t), l[Je] = t.current, Pf(l), new Wn(t);
  }, Ou.version = "19.2.4", Ou;
}
var Zd;
function Uv() {
  if (Zd) return zi.exports;
  Zd = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
    } catch (v) {
      console.error(v);
    }
  }
  return d(), zi.exports = Dv(), zi.exports;
}
var Nv = Uv();
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wd = (...d) => d.filter((v, b, s) => !!v && v.trim() !== "" && s.indexOf(v) === b).join(" ").trim();
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xv = (d) => d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Rv = (d) => d.replace(/^([A-Z])|[\s-_]+(\w)/g, (v, b, s) => s ? s.toUpperCase() : b.toLowerCase());
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ld = (d) => {
  const v = Rv(d);
  return v.charAt(0).toUpperCase() + v.slice(1);
};
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var pi = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bv = (d) => {
  for (const v in d) if (v.startsWith("aria-") || v === "role" || v === "title") return true;
  return false;
}, Hv = bt.createContext({}), jv = () => bt.useContext(Hv), Cv = bt.forwardRef(({ color: d, size: v, strokeWidth: b, absoluteStrokeWidth: s, className: M = "", children: O, iconNode: q, ...I }, x) => {
  const { size: A = 24, strokeWidth: V = 2, absoluteStrokeWidth: j = false, color: nl = "currentColor", className: Ml = "" } = jv() ?? {}, jl = s ?? j ? Number(b ?? V) * 24 / Number(v ?? A) : b ?? V;
  return bt.createElement("svg", { ref: x, ...pi, width: v ?? A ?? pi.width, height: v ?? A ?? pi.height, stroke: d ?? nl, strokeWidth: jl, className: Wd("lucide", Ml, M), ...!O && !Bv(I) && { "aria-hidden": "true" }, ...I }, [...q.map(([Dl, Et]) => bt.createElement(Dl, Et)), ...Array.isArray(O) ? O : [O]]);
});
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $d = (d, v) => {
  const b = bt.forwardRef(({ className: s, ...M }, O) => bt.createElement(Cv, { ref: O, iconNode: v, className: Wd(`lucide-${xv(Ld(d))}`, `lucide-${d}`, s), ...M }));
  return b.displayName = Ld(d), b;
};
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qv = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]], Yv = $d("file", qv);
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gv = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]], Xv = $d("upload", Gv), Vd = (d) => {
  let v;
  const b = /* @__PURE__ */ new Set(), s = (A, V) => {
    const j = typeof A == "function" ? A(v) : A;
    if (!Object.is(j, v)) {
      const nl = v;
      v = V ?? (typeof j != "object" || j === null) ? j : Object.assign({}, v, j), b.forEach((Ml) => Ml(v, nl));
    }
  }, M = () => v, I = { setState: s, getState: M, getInitialState: () => x, subscribe: (A) => (b.add(A), () => b.delete(A)) }, x = v = d(s, M, I);
  return I;
}, Qv = ((d) => d ? Vd(d) : Vd), Zv = (d) => d;
function Lv(d, v = Zv) {
  const b = Fn.useSyncExternalStore(d.subscribe, Fn.useCallback(() => v(d.getState()), [d, v]), Fn.useCallback(() => v(d.getInitialState()), [d, v]));
  return Fn.useDebugValue(b), b;
}
const Kd = (d) => {
  const v = Qv(d), b = (s) => Lv(v, s);
  return Object.assign(b, v), b;
}, Vv = ((d) => d ? Kd(d) : Kd);
let kn = null;
class Ni {
  constructor(v) {
    this.db = v;
  }
  static async new() {
    return new Promise((v) => {
      const b = indexedDB.open("B_VISUALIZER");
      b.onblocked = function(s) {
        v(new Error(`db connection blocked: ${s}`));
      }, b.onsuccess = function() {
        const s = b.result;
        v(new Ni(s));
      }, b.onerror = function(s) {
        v(new Error(`error opening db connection: ${s}`));
      }, b.onupgradeneeded = () => {
        b.result.createObjectStore("FILES", { keyPath: "id" });
      };
    });
  }
  getAll() {
    return new Promise((v) => {
      const M = this.db.transaction("FILES").objectStore("FILES").getAll();
      M.onsuccess = function() {
        M.result !== void 0 ? v(M.result.map((O) => ({ id: O.id, name: O.name, arrayBuffer: O.arrayBuffer }))) : v([]);
      }, M.onerror = function(O) {
        v(new Error(`Error getting files: ${O}`));
      };
    });
  }
  get(v) {
    return new Promise((b) => {
      const O = this.db.transaction("FILES").objectStore("FILES").get(v);
      O.onsuccess = function() {
        O.result !== void 0 ? b({ id: O.result.id, name: O.result.name, arrayBuffer: O.result.arrayBuffer }) : b(new Error("Error getting file"));
      }, O.onerror = function(q) {
        b(new Error(`Error getting file: ${q}`));
      };
    });
  }
  add(v) {
    return new Promise((b) => {
      const O = this.db.transaction("FILES", "readwrite").objectStore("FILES").put(v);
      O.onsuccess = function() {
        b();
      }, O.onerror = function() {
        b(new Error(`Error storing file: ${O.error}`));
      };
    });
  }
}
async function Oi() {
  if (kn) return Promise.resolve(kn);
  const d = await Ni.new();
  return d instanceof Error ? d : (kn = d, kn);
}
function Kv(d, v) {
  const b = Fd(d, Hl.__wbindgen_malloc), s = xa, M = Hl.details(b, s, v);
  if (M[2]) throw Pn(M[1]);
  return Pn(M[0]);
}
function Jd(d, v, b) {
  const s = Fd(d, Hl.__wbindgen_malloc), M = xa, O = Hl.read(s, M, v, b);
  if (O[2]) throw Pn(O[1]);
  return Pn(O[0]);
}
function Jv() {
  return { __proto__: null, "./wasm_engine_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(v, b) {
    return Error(Mi(v, b));
  }, __wbg_String_8564e559799eccda: function(v, b) {
    const s = String(b), M = wv(s, Hl.__wbindgen_malloc, Hl.__wbindgen_realloc), O = xa;
    wd().setInt32(v + 4, O, true), wd().setInt32(v + 0, M, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(v, b) {
    throw new Error(Mi(v, b));
  }, __wbg_new_02d162bc6cf02f60: function() {
    return new Object();
  }, __wbg_new_310879b66b6e95e1: function() {
    return new Array();
  }, __wbg_set_6be42768c690e380: function(v, b, s) {
    v[b] = s;
  }, __wbg_set_78ea6a19f4818587: function(v, b, s) {
    v[b >>> 0] = s;
  }, __wbindgen_cast_0000000000000001: function(v) {
    return v;
  }, __wbindgen_cast_0000000000000002: function(v, b) {
    return Mi(v, b);
  }, __wbindgen_init_externref_table: function() {
    const v = Hl.__wbindgen_externrefs, b = v.grow(4);
    v.set(0, void 0), v.set(b + 0, void 0), v.set(b + 1, null), v.set(b + 2, true), v.set(b + 3, false);
  } } };
}
let Ve = null;
function wd() {
  return (Ve === null || Ve.buffer.detached === true || Ve.buffer.detached === void 0 && Ve.buffer !== Hl.memory.buffer) && (Ve = new DataView(Hl.memory.buffer)), Ve;
}
function Mi(d, v) {
  return $v(d >>> 0, v);
}
let Du = null;
function Uu() {
  return (Du === null || Du.byteLength === 0) && (Du = new Uint8Array(Hl.memory.buffer)), Du;
}
function Fd(d, v) {
  const b = v(d.length * 1, 1) >>> 0;
  return Uu().set(d, b / 1), xa = d.length, b;
}
function wv(d, v, b) {
  if (b === void 0) {
    const I = Nu.encode(d), x = v(I.length, 1) >>> 0;
    return Uu().subarray(x, x + I.length).set(I), xa = I.length, x;
  }
  let s = d.length, M = v(s, 1) >>> 0;
  const O = Uu();
  let q = 0;
  for (; q < s; q++) {
    const I = d.charCodeAt(q);
    if (I > 127) break;
    O[M + q] = I;
  }
  if (q !== s) {
    q !== 0 && (d = d.slice(q)), M = b(M, s, s = q + d.length * 3, 1) >>> 0;
    const I = Uu().subarray(M + q, M + s), x = Nu.encodeInto(d, I);
    q += x.written, M = b(M, s, q, 1) >>> 0;
  }
  return xa = q, M;
}
function Pn(d) {
  const v = Hl.__wbindgen_externrefs.get(d);
  return Hl.__externref_table_dealloc(d), v;
}
let In = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
In.decode();
const Wv = 2146435072;
let Di = 0;
function $v(d, v) {
  return Di += v, Di >= Wv && (In = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), In.decode(), Di = v), In.decode(Uu().subarray(d, d + v));
}
const Nu = new TextEncoder();
"encodeInto" in Nu || (Nu.encodeInto = function(d, v) {
  const b = Nu.encode(d);
  return v.set(b), { read: d.length, written: b.length };
});
let xa = 0, Hl;
function Fv(d, v) {
  return Hl = d.exports, Ve = null, Du = null, Hl.__wbindgen_start(), Hl;
}
async function kv(d, v) {
  if (typeof Response == "function" && d instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(d, v);
    } catch (M) {
      if (d.ok && b(d.type) && d.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", M);
      else throw M;
    }
    const s = await d.arrayBuffer();
    return await WebAssembly.instantiate(s, v);
  } else {
    const s = await WebAssembly.instantiate(d, v);
    return s instanceof WebAssembly.Instance ? { instance: s, module: d } : s;
  }
  function b(s) {
    switch (s) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function Iv(d) {
  if (Hl !== void 0) return Hl;
  d !== void 0 && (Object.getPrototypeOf(d) === Object.prototype ? { module_or_path: d } = d : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), d === void 0 && (d = new URL("/b-visualiser/assets/wasm_engine_bg-B6mfhvfA.wasm", import.meta.url));
  const v = Jv();
  (typeof d == "string" || typeof Request == "function" && d instanceof Request || typeof URL == "function" && d instanceof URL) && (d = fetch(d));
  const { instance: b, module: s } = await kv(await d, v);
  return Fv(b);
}
const Xl = Vv((d, v) => ({ files: [], selectedFile: null, rawBytes: null, loading: true, bytesRange: { from: 0, to: 1e3 }, error: null, selectedByte: null, byteDetails: null, selectByte: (b) => {
  const { rawBytes: s, selectedByte: M } = v();
  if (!s) return;
  if (M === b) {
    d({ selectedByte: null, byteDetails: null });
    return;
  }
  const O = Kv(s, b);
  d({ selectedByte: b, byteDetails: O });
}, clearSelectedByte: () => d({ selectedByte: null, byteDetails: null }), setByteRange: (b, s) => {
  d({ bytesRange: { from: b, to: s } });
  const M = v().selectedFile;
  M && v().selectFile(M.id);
}, loadFiles: async () => {
  d({ loading: true, error: null });
  const b = await Oi();
  if (b instanceof Error) d({ error: b, loading: false });
  else {
    const s = await b.getAll();
    s instanceof Error ? d({ error: s, loading: false }) : (await Iv(), d({ files: s.map((M) => ({ id: M.id, name: M.name })), loading: false }));
  }
}, addFile: async (b) => {
  d({ loading: true, error: null });
  const s = await Oi();
  if (s instanceof Error) d({ error: s, loading: false });
  else {
    const M = await s.add(b);
    if (d({ loading: false }), M instanceof Error) d({ error: M, loading: false });
    else {
      const O = new Uint8Array(b.arrayBuffer);
      d({ rawBytes: O, selectedFile: { id: b.id, name: b.name, rows: Jd(O, v().bytesRange.from, v().bytesRange.to) } }), v().loadFiles();
    }
  }
}, selectFile: async (b) => {
  const s = await Oi();
  if (s instanceof Error) {
    d({ error: s });
    return;
  }
  const M = await s.get(b);
  if (M instanceof Error) {
    d({ error: M });
    return;
  }
  const O = new Uint8Array(M.arrayBuffer);
  d({ rawBytes: O, selectedByte: null, byteDetails: null, selectedFile: { id: M.id, name: M.name, rows: Jd(O, v().bytesRange.from, v().bytesRange.to) } });
} })), Pv = () => {
  const { addFile: d } = Xl(), v = bt.useRef(null), b = async (s) => {
    const M = s.target.files;
    if (M == null ? void 0 : M.length) {
      const O = await M[0].arrayBuffer();
      d({ arrayBuffer: O, id: M[0].name, name: M[0].name });
    }
  };
  return D.jsxs(D.Fragment, { children: [D.jsx("input", { ref: v, type: "file", onChange: b, className: "hidden" }), D.jsxs("button", { onClick: () => {
    var _a;
    return (_a = v.current) == null ? void 0 : _a.click();
  }, className: "w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded border border-dashed border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors", children: [D.jsx(Xv, { className: "w-3 h-3" }), "Upload file"] })] });
}, lr = () => {
  const { files: d, selectedFile: v, selectFile: b } = Xl();
  return D.jsxs("div", { className: "flex flex-col h-full", children: [D.jsxs("div", { className: "p-3 border-b shrink-0", children: [D.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Files" }), D.jsx(Pv, {})] }), D.jsxs("div", { className: "flex-1 overflow-y-auto p-2 space-y-0.5", children: [d.length === 0 && D.jsx("p", { className: "text-xs text-muted-foreground text-center py-6", children: "No files yet" }), d.map((s) => {
    const M = (v == null ? void 0 : v.id) === s.id;
    return D.jsxs("button", { onClick: () => b(s.id), className: `w-full flex items-center gap-2 px-2 py-1.5 rounded text-left text-xs transition-colors ${M ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"}`, children: [D.jsx(Yv, { className: "w-3 h-3 shrink-0" }), D.jsx("span", { className: "truncate", children: s.name })] }, s.id);
  })] })] });
}, tr = () => {
  const d = Xl((O) => O.selectedFile), v = Xl((O) => O.bytesRange), b = Xl((O) => O.selectedByte), s = Xl((O) => O.selectByte), M = Xl((O) => O.clearSelectedByte);
  return bt.useEffect(() => {
    const O = (q) => {
      q.key === "Escape" && M();
    };
    return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O);
  }, [M]), D.jsx("div", { className: "h-full overflow-y-auto p-6 font-mono", children: d == null ? void 0 : d.rows.map((O, q) => D.jsx("div", { className: "flex py-1 hover:bg-muted/20 rounded px-1", children: O.hexadecimal.map((I, x) => {
    const A = v.from + q * 16 + x, V = b === A;
    return D.jsx("span", { onClick: () => s(A), className: `w-[2.4ch] px-[0.2ch] text-center cursor-pointer select-none ${V ? "bg-blue-500/20 text-blue-700 dark:text-blue-300" : "rounded-sm hover:bg-accent"}`, children: I }, x);
  }) }, q)) });
}, er = () => {
  const d = Xl((O) => O.bytesRange), v = Xl((O) => O.setByteRange), b = Xl((O) => O.selectedByte), s = (O) => {
    const q = parseInt(O.target.value, 10);
    !isNaN(q) && q >= 0 ? v(q, d.to) : O.target.value = String(d.from);
  }, M = (O) => {
    const q = parseInt(O.target.value, 10);
    !isNaN(q) && q >= 0 ? v(d.from, q) : O.target.value = String(d.to);
  };
  return D.jsxs("div", { className: "flex items-center gap-2 px-6 py-3 border-b font-mono text-sm shrink-0", children: [D.jsx("span", { className: "text-xs text-muted-foreground select-none mr-1", children: "Bytes" }), D.jsx("input", { defaultValue: d.from, onBlur: s, className: "w-[8ch] bg-muted/40 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-ring" }, d.from), D.jsx("span", { className: "text-muted-foreground/50 select-none", children: "\u2013" }), D.jsx("input", { defaultValue: d.to, onBlur: M, className: "w-[8ch] bg-muted/40 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-ring" }, d.to), b !== null && D.jsxs("span", { className: "ml-auto text-xs text-blue-500/80 select-none", children: ["offset ", b, " \xB7 Esc to clear"] })] });
}, ar = () => {
  const d = Xl((b) => b.selectedByte), v = Xl((b) => b.byteDetails);
  return d === null || !v ? D.jsx("div", { className: "flex items-center justify-center h-full text-muted-foreground text-sm", children: "Select a byte to inspect" }) : D.jsxs("div", { className: "h-full overflow-y-auto p-5 font-mono text-sm space-y-5", children: [D.jsxs("div", { className: "space-y-1.5", children: [D.jsx(Na, { children: "u8" }), D.jsx(Rt, { label: "BE", value: v.be_decimal_8 }), D.jsx(Rt, { label: "LE", value: v.le_decimal_8 })] }), D.jsx(Mu, {}), D.jsxs("div", { className: "space-y-1.5", children: [D.jsx(Na, { children: "u16" }), D.jsx(Rt, { label: "BE", value: v.be_decimal_16 }), D.jsx(Rt, { label: "LE", value: v.le_decimal_16 })] }), D.jsx(Mu, {}), D.jsxs("div", { className: "space-y-1.5", children: [D.jsx(Na, { children: "u32" }), D.jsx(Rt, { label: "BE", value: v.be_decimal_32 }), D.jsx(Rt, { label: "LE", value: v.le_decimal_32 })] }), D.jsx(Mu, {}), D.jsxs("div", { className: "space-y-1.5", children: [D.jsx(Na, { children: "u64" }), D.jsx(Rt, { label: "BE", value: v.be_decimal_64 }), D.jsx(Rt, { label: "LE", value: v.le_decimal_64 })] }), D.jsx(Mu, {}), D.jsxs("div", { className: "space-y-1.5", children: [D.jsx(Na, { children: "u128" }), D.jsx(Rt, { label: "BE", value: v.be_decimal_128 }), D.jsx(Rt, { label: "LE", value: v.le_decimal_128 })] }), D.jsx(Mu, {}), D.jsxs("div", { className: "space-y-2", children: [D.jsx(Na, { children: "Binary" }), D.jsx("div", { className: "flex gap-1", children: v.binary.split("").map((b, s) => D.jsx("div", { className: `w-7 h-7 flex items-center justify-center rounded text-xs font-bold ${b === "1" ? "bg-blue-500/20 text-blue-700 dark:text-blue-300" : "bg-muted text-muted-foreground"}`, children: b }, s)) })] })] });
}, Na = ({ children: d }) => D.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: d }), Rt = ({ label: d, value: v }) => D.jsxs("div", { className: "flex items-center justify-between", children: [D.jsx("span", { className: "text-xs text-muted-foreground w-6", children: d }), D.jsx("span", { className: "text-foreground", children: v === null ? D.jsx("span", { className: "text-muted-foreground/40", children: "\u2014" }) : v })] }), Mu = () => D.jsx("div", { className: "border-t border-border/50" });
function ur() {
  const d = Xl((b) => b.error), v = Xl((b) => b.loading);
  return bt.useEffect(() => {
    Xl.getState().loadFiles();
  }, []), D.jsxs(D.Fragment, { children: [d && D.jsx("span", { className: "text-destructive text-sm p-4", children: d.message }), D.jsxs("div", { className: "grid grid-cols-12 h-dvh", children: [D.jsx("div", { className: "col-span-2 border-r bg-muted/40 h-dvh", children: D.jsx("div", { className: `h-full transition-opacity duration-300 ${v ? "opacity-0" : "opacity-100"}`, children: D.jsx(lr, {}) }) }), D.jsx("div", { className: "col-span-7 border-r h-dvh flex flex-col", children: D.jsxs("div", { className: `flex flex-col h-full transition-opacity duration-300 ${v ? "opacity-0" : "opacity-100"}`, children: [D.jsx(er, {}), D.jsx(tr, {})] }) }), D.jsx("div", { className: "col-span-3 border-l h-dvh", children: D.jsx("div", { className: `h-full transition-opacity duration-300 ${v ? "opacity-0" : "opacity-100"}`, children: D.jsx(ar, {}) }) })] })] });
}
Nv.createRoot(document.getElementById("root")).render(D.jsx(bt.StrictMode, { children: D.jsx(ur, {}) }));

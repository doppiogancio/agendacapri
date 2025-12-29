var ff = e => {
    throw TypeError(e)
}
;
var kl = (e, t, n) => t.has(e) || ff("Cannot " + n);
var T = (e, t, n) => (kl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , oe = (e, t, n) => t.has(e) ? ff("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , q = (e, t, n, r) => (kl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Fe = (e, t, n) => (kl(e, t, "access private method"),
n);
var sa = (e, t, n, r) => ({
    set _(o) {
        q(e, t, o, n)
    },
    get _() {
        return T(e, t, r)
    }
});
function $x(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const a of i.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Im(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Lm = {
    exports: {}
}
  , Os = {}
  , zm = {
    exports: {}
}
  , J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi = Symbol.for("react.element")
  , Wx = Symbol.for("react.portal")
  , Ux = Symbol.for("react.fragment")
  , Bx = Symbol.for("react.strict_mode")
  , Vx = Symbol.for("react.profiler")
  , Hx = Symbol.for("react.provider")
  , Yx = Symbol.for("react.context")
  , Qx = Symbol.for("react.forward_ref")
  , qx = Symbol.for("react.suspense")
  , Kx = Symbol.for("react.memo")
  , Gx = Symbol.for("react.lazy")
  , pf = Symbol.iterator;
function Xx(e) {
    return e === null || typeof e != "object" ? null : (e = pf && e[pf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Fm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , $m = Object.assign
  , Wm = {};
function Ho(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Wm,
    this.updater = n || Fm
}
Ho.prototype.isReactComponent = {};
Ho.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ho.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Um() {}
Um.prototype = Ho.prototype;
function _u(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Wm,
    this.updater = n || Fm
}
var Au = _u.prototype = new Um;
Au.constructor = _u;
$m(Au, Ho.prototype);
Au.isPureReactComponent = !0;
var mf = Array.isArray
  , Bm = Object.prototype.hasOwnProperty
  , Iu = {
    current: null
}
  , Vm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Hm(e, t, n) {
    var r, o = {}, i = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Bm.call(t, r) && !Vm.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        o.children = n;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Xi,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: Iu.current
    }
}
function Zx(e, t) {
    return {
        $$typeof: Xi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Lu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xi
}
function Jx(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var hf = /\/+/g;
function Nl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Jx("" + e.key) : t.toString(36)
}
function Aa(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xi:
            case Wx:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = r === "" ? "." + Nl(a, 0) : r,
        mf(o) ? (n = "",
        e != null && (n = e.replace(hf, "$&/") + "/"),
        Aa(o, t, n, "", function(u) {
            return u
        })) : o != null && (Lu(o) && (o = Zx(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(hf, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    mf(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var l = r + Nl(i, s);
            a += Aa(i, t, n, l, o)
        }
    else if (l = Xx(e),
    typeof l == "function")
        for (e = l.call(e),
        s = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + Nl(i, s++),
            a += Aa(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function la(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Aa(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function ew(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ke = {
    current: null
}
  , Ia = {
    transition: null
}
  , tw = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: Ia,
    ReactCurrentOwner: Iu
};
function Ym() {
    throw Error("act(...) is not supported in production builds of React.")
}
J.Children = {
    map: la,
    forEach: function(e, t, n) {
        la(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return la(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return la(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Lu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
J.Component = Ho;
J.Fragment = Ux;
J.Profiler = Vx;
J.PureComponent = _u;
J.StrictMode = Bx;
J.Suspense = qx;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tw;
J.act = Ym;
J.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = $m({}, e.props)
      , o = e.key
      , i = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        a = Iu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            Bm.call(t, l) && !Vm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: Xi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a
    }
}
;
J.createContext = function(e) {
    return e = {
        $$typeof: Yx,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Hx,
        _context: e
    },
    e.Consumer = e
}
;
J.createElement = Hm;
J.createFactory = function(e) {
    var t = Hm.bind(null, e);
    return t.type = e,
    t
}
;
J.createRef = function() {
    return {
        current: null
    }
}
;
J.forwardRef = function(e) {
    return {
        $$typeof: Qx,
        render: e
    }
}
;
J.isValidElement = Lu;
J.lazy = function(e) {
    return {
        $$typeof: Gx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ew
    }
}
;
J.memo = function(e, t) {
    return {
        $$typeof: Kx,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
J.startTransition = function(e) {
    var t = Ia.transition;
    Ia.transition = {};
    try {
        e()
    } finally {
        Ia.transition = t
    }
}
;
J.unstable_act = Ym;
J.useCallback = function(e, t) {
    return Ke.current.useCallback(e, t)
}
;
J.useContext = function(e) {
    return Ke.current.useContext(e)
}
;
J.useDebugValue = function() {}
;
J.useDeferredValue = function(e) {
    return Ke.current.useDeferredValue(e)
}
;
J.useEffect = function(e, t) {
    return Ke.current.useEffect(e, t)
}
;
J.useId = function() {
    return Ke.current.useId()
}
;
J.useImperativeHandle = function(e, t, n) {
    return Ke.current.useImperativeHandle(e, t, n)
}
;
J.useInsertionEffect = function(e, t) {
    return Ke.current.useInsertionEffect(e, t)
}
;
J.useLayoutEffect = function(e, t) {
    return Ke.current.useLayoutEffect(e, t)
}
;
J.useMemo = function(e, t) {
    return Ke.current.useMemo(e, t)
}
;
J.useReducer = function(e, t, n) {
    return Ke.current.useReducer(e, t, n)
}
;
J.useRef = function(e) {
    return Ke.current.useRef(e)
}
;
J.useState = function(e) {
    return Ke.current.useState(e)
}
;
J.useSyncExternalStore = function(e, t, n) {
    return Ke.current.useSyncExternalStore(e, t, n)
}
;
J.useTransition = function() {
    return Ke.current.useTransition()
}
;
J.version = "18.3.1";
zm.exports = J;
var p = zm.exports;
const O = Im(p)
  , zu = $x({
    __proto__: null,
    default: O
}, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nw = p
  , rw = Symbol.for("react.element")
  , ow = Symbol.for("react.fragment")
  , iw = Object.prototype.hasOwnProperty
  , aw = nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , sw = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Qm(e, t, n) {
    var r, o = {}, i = null, a = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        iw.call(t, r) && !sw.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: rw,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: aw.current
    }
}
Os.Fragment = ow;
Os.jsx = Qm;
Os.jsxs = Qm;
Lm.exports = Os;
var c = Lm.exports
  , qm = {
    exports: {}
}
  , ut = {}
  , Km = {
    exports: {}
}
  , Gm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, P) {
        var I = N.length;
        N.push(P);
        e: for (; 0 < I; ) {
            var V = I - 1 >>> 1
              , W = N[V];
            if (0 < o(W, P))
                N[V] = P,
                N[I] = W,
                I = V;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var P = N[0]
          , I = N.pop();
        if (I !== P) {
            N[0] = I;
            e: for (var V = 0, W = N.length, G = W >>> 1; V < G; ) {
                var Y = 2 * (V + 1) - 1
                  , pe = N[Y]
                  , Ee = Y + 1
                  , L = N[Ee];
                if (0 > o(pe, I))
                    Ee < W && 0 > o(L, pe) ? (N[V] = L,
                    N[Ee] = I,
                    V = Ee) : (N[V] = pe,
                    N[Y] = I,
                    V = Y);
                else if (Ee < W && 0 > o(L, I))
                    N[V] = L,
                    N[Ee] = I,
                    V = Ee;
                else
                    break e
            }
        }
        return P
    }
    function o(N, P) {
        var I = N.sortIndex - P.sortIndex;
        return I !== 0 ? I : N.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date
          , s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    var l = []
      , u = []
      , d = 1
      , f = null
      , y = 3
      , g = !1
      , b = !1
      , h = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(N) {
        for (var P = n(u); P !== null; ) {
            if (P.callback === null)
                r(u);
            else if (P.startTime <= N)
                r(u),
                P.sortIndex = P.expirationTime,
                t(l, P);
            else
                break;
            P = n(u)
        }
    }
    function S(N) {
        if (h = !1,
        x(N),
        !b)
            if (n(l) !== null)
                b = !0,
                F(C);
            else {
                var P = n(u);
                P !== null && U(S, P.startTime - N)
            }
    }
    function C(N, P) {
        b = !1,
        h && (h = !1,
        v(j),
        j = -1),
        g = !0;
        var I = y;
        try {
            for (x(P),
            f = n(l); f !== null && (!(f.expirationTime > P) || N && !$()); ) {
                var V = f.callback;
                if (typeof V == "function") {
                    f.callback = null,
                    y = f.priorityLevel;
                    var W = V(f.expirationTime <= P);
                    P = e.unstable_now(),
                    typeof W == "function" ? f.callback = W : f === n(l) && r(l),
                    x(P)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var G = !0;
            else {
                var Y = n(u);
                Y !== null && U(S, Y.startTime - P),
                G = !1
            }
            return G
        } finally {
            f = null,
            y = I,
            g = !1
        }
    }
    var k = !1
      , E = null
      , j = -1
      , M = 5
      , D = -1;
    function $() {
        return !(e.unstable_now() - D < M)
    }
    function A() {
        if (E !== null) {
            var N = e.unstable_now();
            D = N;
            var P = !0;
            try {
                P = E(!0, N)
            } finally {
                P ? B() : (k = !1,
                E = null)
            }
        } else
            k = !1
    }
    var B;
    if (typeof m == "function")
        B = function() {
            m(A)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel
          , H = _.port2;
        _.port1.onmessage = A,
        B = function() {
            H.postMessage(null)
        }
    } else
        B = function() {
            w(A, 0)
        }
        ;
    function F(N) {
        E = N,
        k || (k = !0,
        B())
    }
    function U(N, P) {
        j = w(function() {
            N(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        b || g || (b = !0,
        F(C))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return y
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (y) {
        case 1:
        case 2:
        case 3:
            var P = 3;
            break;
        default:
            P = y
        }
        var I = y;
        y = P;
        try {
            return N()
        } finally {
            y = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, P) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var I = y;
        y = N;
        try {
            return P()
        } finally {
            y = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, P, I) {
        var V = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? V + I : V) : I = V,
        N) {
        case 1:
            var W = -1;
            break;
        case 2:
            W = 250;
            break;
        case 5:
            W = 1073741823;
            break;
        case 4:
            W = 1e4;
            break;
        default:
            W = 5e3
        }
        return W = I + W,
        N = {
            id: d++,
            callback: P,
            priorityLevel: N,
            startTime: I,
            expirationTime: W,
            sortIndex: -1
        },
        I > V ? (N.sortIndex = I,
        t(u, N),
        n(l) === null && N === n(u) && (h ? (v(j),
        j = -1) : h = !0,
        U(S, I - V))) : (N.sortIndex = W,
        t(l, N),
        b || g || (b = !0,
        F(C))),
        N
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(N) {
        var P = y;
        return function() {
            var I = y;
            y = P;
            try {
                return N.apply(this, arguments)
            } finally {
                y = I
            }
        }
    }
}
)(Gm);
Km.exports = Gm;
var lw = Km.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cw = p
  , ct = lw;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Xm = new Set
  , Ni = {};
function $r(e, t) {
    _o(e, t),
    _o(e + "Capture", t)
}
function _o(e, t) {
    for (Ni[e] = t,
    e = 0; e < t.length; e++)
        Xm.add(t[e])
}
var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , mc = Object.prototype.hasOwnProperty
  , uw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , gf = {}
  , vf = {};
function dw(e) {
    return mc.call(vf, e) ? !0 : mc.call(gf, e) ? !1 : uw.test(e) ? vf[e] = !0 : (gf[e] = !0,
    !1)
}
function fw(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function pw(e, t, n, r) {
    if (t === null || typeof t > "u" || fw(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ge(e, t, n, r, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = a
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ie[e] = new Ge(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ie[t] = new Ge(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ie[e] = new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ie[e] = new Ge(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ie[e] = new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ie[e] = new Ge(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ie[e] = new Ge(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ie[e] = new Ge(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ie[e] = new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Fu = /[\-:]([a-z])/g;
function $u(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Fu, $u);
    Ie[t] = new Ge(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Fu, $u);
    Ie[t] = new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Fu, $u);
    Ie[t] = new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ie[e] = new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ie.xlinkHref = new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ie[e] = new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Wu(e, t, n, r) {
    var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pw(t, n, o, r) && (n = null),
    r || o === null ? dw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Sn = cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ca = Symbol.for("react.element")
  , eo = Symbol.for("react.portal")
  , to = Symbol.for("react.fragment")
  , Uu = Symbol.for("react.strict_mode")
  , hc = Symbol.for("react.profiler")
  , Zm = Symbol.for("react.provider")
  , Jm = Symbol.for("react.context")
  , Bu = Symbol.for("react.forward_ref")
  , gc = Symbol.for("react.suspense")
  , vc = Symbol.for("react.suspense_list")
  , Vu = Symbol.for("react.memo")
  , On = Symbol.for("react.lazy")
  , eh = Symbol.for("react.offscreen")
  , yf = Symbol.iterator;
function ei(e) {
    return e === null || typeof e != "object" ? null : (e = yf && e[yf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ce = Object.assign, Tl;
function di(e) {
    if (Tl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Tl = t && t[1] || ""
        }
    return `
` + Tl + e
}
var Pl = !1;
function jl(e, t) {
    if (!e || Pl)
        return "";
    Pl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
                s--;
            for (; 1 <= a && 0 <= s; a--,
            s--)
                if (o[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--,
                            s--,
                            0 > s || o[a] !== i[s]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        Pl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? di(e) : ""
}
function mw(e) {
    switch (e.tag) {
    case 5:
        return di(e.type);
    case 16:
        return di("Lazy");
    case 13:
        return di("Suspense");
    case 19:
        return di("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = jl(e.type, !1),
        e;
    case 11:
        return e = jl(e.type.render, !1),
        e;
    case 1:
        return e = jl(e.type, !0),
        e;
    default:
        return ""
    }
}
function yc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case to:
        return "Fragment";
    case eo:
        return "Portal";
    case hc:
        return "Profiler";
    case Uu:
        return "StrictMode";
    case gc:
        return "Suspense";
    case vc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Jm:
            return (e.displayName || "Context") + ".Consumer";
        case Zm:
            return (e._context.displayName || "Context") + ".Provider";
        case Bu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Vu:
            return t = e.displayName || null,
            t !== null ? t : yc(e.type) || "Memo";
        case On:
            t = e._payload,
            e = e._init;
            try {
                return yc(e(t))
            } catch {}
        }
    return null
}
function hw(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return yc(t);
    case 8:
        return t === Uu ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function rr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function th(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function gw(e) {
    var t = th(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a,
                i.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ua(e) {
    e._valueTracker || (e._valueTracker = gw(e))
}
function nh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = th(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Za(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function xc(e, t) {
    var n = t.checked;
    return Ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function xf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = rr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function rh(e, t) {
    t = t.checked,
    t != null && Wu(e, "checked", t, !1)
}
function wc(e, t) {
    rh(e, t);
    var n = rr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? bc(e, t.type, n) : t.hasOwnProperty("defaultValue") && bc(e, t.type, rr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function bc(e, t, n) {
    (t !== "number" || Za(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fi = Array.isArray;
function po(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + rr(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Sc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return Ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function bf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (fi(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: rr(n)
    }
}
function oh(e, t) {
    var n = rr(t.value)
      , r = rr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Sf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ih(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Cc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ih(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var da, ah = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (da = da || document.createElement("div"),
        da.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = da.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ti(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var gi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , vw = ["Webkit", "ms", "Moz", "O"];
Object.keys(gi).forEach(function(e) {
    vw.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        gi[t] = gi[e]
    })
});
function sh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gi.hasOwnProperty(e) && gi[e] ? ("" + t).trim() : t + "px"
}
function lh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = sh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var yw = Ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ec(e, t) {
    if (t) {
        if (yw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function kc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Nc = null;
function Hu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Tc = null
  , mo = null
  , ho = null;
function Cf(e) {
    if (e = ea(e)) {
        if (typeof Tc != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = zs(t),
        Tc(e.stateNode, e.type, t))
    }
}
function ch(e) {
    mo ? ho ? ho.push(e) : ho = [e] : mo = e
}
function uh() {
    if (mo) {
        var e = mo
          , t = ho;
        if (ho = mo = null,
        Cf(e),
        t)
            for (e = 0; e < t.length; e++)
                Cf(t[e])
    }
}
function dh(e, t) {
    return e(t)
}
function fh() {}
var Rl = !1;
function ph(e, t, n) {
    if (Rl)
        return e(t, n);
    Rl = !0;
    try {
        return dh(e, t, n)
    } finally {
        Rl = !1,
        (mo !== null || ho !== null) && (fh(),
        uh())
    }
}
function Pi(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = zs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var Pc = !1;
if (hn)
    try {
        var ti = {};
        Object.defineProperty(ti, "passive", {
            get: function() {
                Pc = !0
            }
        }),
        window.addEventListener("test", ti, ti),
        window.removeEventListener("test", ti, ti)
    } catch {
        Pc = !1
    }
function xw(e, t, n, r, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var vi = !1
  , Ja = null
  , es = !1
  , jc = null
  , ww = {
    onError: function(e) {
        vi = !0,
        Ja = e
    }
};
function bw(e, t, n, r, o, i, a, s, l) {
    vi = !1,
    Ja = null,
    xw.apply(ww, arguments)
}
function Sw(e, t, n, r, o, i, a, s, l) {
    if (bw.apply(this, arguments),
    vi) {
        if (vi) {
            var u = Ja;
            vi = !1,
            Ja = null
        } else
            throw Error(R(198));
        es || (es = !0,
        jc = u)
    }
}
function Wr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function mh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ef(e) {
    if (Wr(e) !== e)
        throw Error(R(188))
}
function Cw(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Wr(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Ef(o),
                    e;
                if (i === r)
                    return Ef(o),
                    t;
                i = i.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var a = !1, s = o.child; s; ) {
                if (s === n) {
                    a = !0,
                    n = o,
                    r = i;
                    break
                }
                if (s === r) {
                    a = !0,
                    r = o,
                    n = i;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = i.child; s; ) {
                    if (s === n) {
                        a = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (s === r) {
                        a = !0,
                        r = i,
                        n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!a)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== r)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function hh(e) {
    return e = Cw(e),
    e !== null ? gh(e) : null
}
function gh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = gh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var vh = ct.unstable_scheduleCallback
  , kf = ct.unstable_cancelCallback
  , Ew = ct.unstable_shouldYield
  , kw = ct.unstable_requestPaint
  , Pe = ct.unstable_now
  , Nw = ct.unstable_getCurrentPriorityLevel
  , Yu = ct.unstable_ImmediatePriority
  , yh = ct.unstable_UserBlockingPriority
  , ts = ct.unstable_NormalPriority
  , Tw = ct.unstable_LowPriority
  , xh = ct.unstable_IdlePriority
  , _s = null
  , en = null;
function Pw(e) {
    if (en && typeof en.onCommitFiberRoot == "function")
        try {
            en.onCommitFiberRoot(_s, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var At = Math.clz32 ? Math.clz32 : Mw
  , jw = Math.log
  , Rw = Math.LN2;
function Mw(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (jw(e) / Rw | 0) | 0
}
var fa = 64
  , pa = 4194304;
function pi(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ns(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var s = a & ~o;
        s !== 0 ? r = pi(s) : (i &= a,
        i !== 0 && (r = pi(i)))
    } else
        a = n & ~o,
        a !== 0 ? r = pi(a) : i !== 0 && (r = pi(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - At(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Dw(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Ow(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var a = 31 - At(i)
          , s = 1 << a
          , l = o[a];
        l === -1 ? (!(s & n) || s & r) && (o[a] = Dw(s, t)) : l <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function Rc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function wh() {
    var e = fa;
    return fa <<= 1,
    !(fa & 4194240) && (fa = 64),
    e
}
function Ml(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Zi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - At(t),
    e[t] = n
}
function _w(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - At(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Qu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - At(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var le = 0;
function bh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Sh, qu, Ch, Eh, kh, Mc = !1, ma = [], Yn = null, Qn = null, qn = null, ji = new Map, Ri = new Map, An = [], Aw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Nf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Yn = null;
        break;
    case "dragenter":
    case "dragleave":
        Qn = null;
        break;
    case "mouseover":
    case "mouseout":
        qn = null;
        break;
    case "pointerover":
    case "pointerout":
        ji.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ri.delete(t.pointerId)
    }
}
function ni(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = ea(t),
    t !== null && qu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Iw(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Yn = ni(Yn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Qn = ni(Qn, e, t, n, r, o),
        !0;
    case "mouseover":
        return qn = ni(qn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return ji.set(i, ni(ji.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Ri.set(i, ni(Ri.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Nh(e) {
    var t = xr(e.target);
    if (t !== null) {
        var n = Wr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = mh(n),
                t !== null) {
                    e.blockedOn = t,
                    kh(e.priority, function() {
                        Ch(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function La(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Dc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Nc = r,
            n.target.dispatchEvent(r),
            Nc = null
        } else
            return t = ea(n),
            t !== null && qu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Tf(e, t, n) {
    La(e) && n.delete(t)
}
function Lw() {
    Mc = !1,
    Yn !== null && La(Yn) && (Yn = null),
    Qn !== null && La(Qn) && (Qn = null),
    qn !== null && La(qn) && (qn = null),
    ji.forEach(Tf),
    Ri.forEach(Tf)
}
function ri(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Mc || (Mc = !0,
    ct.unstable_scheduleCallback(ct.unstable_NormalPriority, Lw)))
}
function Mi(e) {
    function t(o) {
        return ri(o, e)
    }
    if (0 < ma.length) {
        ri(ma[0], e);
        for (var n = 1; n < ma.length; n++) {
            var r = ma[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Yn !== null && ri(Yn, e),
    Qn !== null && ri(Qn, e),
    qn !== null && ri(qn, e),
    ji.forEach(t),
    Ri.forEach(t),
    n = 0; n < An.length; n++)
        r = An[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < An.length && (n = An[0],
    n.blockedOn === null); )
        Nh(n),
        n.blockedOn === null && An.shift()
}
var go = Sn.ReactCurrentBatchConfig
  , rs = !0;
function zw(e, t, n, r) {
    var o = le
      , i = go.transition;
    go.transition = null;
    try {
        le = 1,
        Ku(e, t, n, r)
    } finally {
        le = o,
        go.transition = i
    }
}
function Fw(e, t, n, r) {
    var o = le
      , i = go.transition;
    go.transition = null;
    try {
        le = 4,
        Ku(e, t, n, r)
    } finally {
        le = o,
        go.transition = i
    }
}
function Ku(e, t, n, r) {
    if (rs) {
        var o = Dc(e, t, n, r);
        if (o === null)
            Wl(e, t, r, os, n),
            Nf(e, r);
        else if (Iw(o, e, t, n, r))
            r.stopPropagation();
        else if (Nf(e, r),
        t & 4 && -1 < Aw.indexOf(e)) {
            for (; o !== null; ) {
                var i = ea(o);
                if (i !== null && Sh(i),
                i = Dc(e, t, n, r),
                i === null && Wl(e, t, r, os, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Wl(e, t, r, null, n)
    }
}
var os = null;
function Dc(e, t, n, r) {
    if (os = null,
    e = Hu(r),
    e = xr(e),
    e !== null)
        if (t = Wr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = mh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return os = e,
    null
}
function Th(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Nw()) {
        case Yu:
            return 1;
        case yh:
            return 4;
        case ts:
        case Tw:
            return 16;
        case xh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Bn = null
  , Gu = null
  , za = null;
function Ph() {
    if (za)
        return za;
    var e, t = Gu, n = t.length, r, o = "value"in Bn ? Bn.value : Bn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
        ;
    return za = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Fa(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ha() {
    return !0
}
function Pf() {
    return !1
}
function dt(e) {
    function t(n, r, o, i, a) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = a,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ha : Pf,
        this.isPropagationStopped = Pf,
        this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ha)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ha)
        },
        persist: function() {},
        isPersistent: ha
    }),
    t
}
var Yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Xu = dt(Yo), Ji = Ce({}, Yo, {
    view: 0,
    detail: 0
}), $w = dt(Ji), Dl, Ol, oi, As = Ce({}, Ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== oi && (oi && e.type === "mousemove" ? (Dl = e.screenX - oi.screenX,
        Ol = e.screenY - oi.screenY) : Ol = Dl = 0,
        oi = e),
        Dl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ol
    }
}), jf = dt(As), Ww = Ce({}, As, {
    dataTransfer: 0
}), Uw = dt(Ww), Bw = Ce({}, Ji, {
    relatedTarget: 0
}), _l = dt(Bw), Vw = Ce({}, Yo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Hw = dt(Vw), Yw = Ce({}, Yo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Qw = dt(Yw), qw = Ce({}, Yo, {
    data: 0
}), Rf = dt(qw), Kw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Gw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Xw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Zw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xw[e]) ? !!t[e] : !1
}
function Zu() {
    return Zw
}
var Jw = Ce({}, Ji, {
    key: function(e) {
        if (e.key) {
            var t = Kw[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Fa(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gw[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zu,
    charCode: function(e) {
        return e.type === "keypress" ? Fa(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Fa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , e1 = dt(Jw)
  , t1 = Ce({}, As, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Mf = dt(t1)
  , n1 = Ce({}, Ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zu
})
  , r1 = dt(n1)
  , o1 = Ce({}, Yo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , i1 = dt(o1)
  , a1 = Ce({}, As, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , s1 = dt(a1)
  , l1 = [9, 13, 27, 32]
  , Ju = hn && "CompositionEvent"in window
  , yi = null;
hn && "documentMode"in document && (yi = document.documentMode);
var c1 = hn && "TextEvent"in window && !yi
  , jh = hn && (!Ju || yi && 8 < yi && 11 >= yi)
  , Df = " "
  , Of = !1;
function Rh(e, t) {
    switch (e) {
    case "keyup":
        return l1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Mh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var no = !1;
function u1(e, t) {
    switch (e) {
    case "compositionend":
        return Mh(t);
    case "keypress":
        return t.which !== 32 ? null : (Of = !0,
        Df);
    case "textInput":
        return e = t.data,
        e === Df && Of ? null : e;
    default:
        return null
    }
}
function d1(e, t) {
    if (no)
        return e === "compositionend" || !Ju && Rh(e, t) ? (e = Ph(),
        za = Gu = Bn = null,
        no = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return jh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var f1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function _f(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!f1[e.type] : t === "textarea"
}
function Dh(e, t, n, r) {
    ch(r),
    t = is(t, "onChange"),
    0 < t.length && (n = new Xu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var xi = null
  , Di = null;
function p1(e) {
    Bh(e, 0)
}
function Is(e) {
    var t = io(e);
    if (nh(t))
        return e
}
function m1(e, t) {
    if (e === "change")
        return t
}
var Oh = !1;
if (hn) {
    var Al;
    if (hn) {
        var Il = "oninput"in document;
        if (!Il) {
            var Af = document.createElement("div");
            Af.setAttribute("oninput", "return;"),
            Il = typeof Af.oninput == "function"
        }
        Al = Il
    } else
        Al = !1;
    Oh = Al && (!document.documentMode || 9 < document.documentMode)
}
function If() {
    xi && (xi.detachEvent("onpropertychange", _h),
    Di = xi = null)
}
function _h(e) {
    if (e.propertyName === "value" && Is(Di)) {
        var t = [];
        Dh(t, Di, e, Hu(e)),
        ph(p1, t)
    }
}
function h1(e, t, n) {
    e === "focusin" ? (If(),
    xi = t,
    Di = n,
    xi.attachEvent("onpropertychange", _h)) : e === "focusout" && If()
}
function g1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Is(Di)
}
function v1(e, t) {
    if (e === "click")
        return Is(t)
}
function y1(e, t) {
    if (e === "input" || e === "change")
        return Is(t)
}
function x1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Lt = typeof Object.is == "function" ? Object.is : x1;
function Oi(e, t) {
    if (Lt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!mc.call(t, o) || !Lt(e[o], t[o]))
            return !1
    }
    return !0
}
function Lf(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function zf(e, t) {
    var n = Lf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Lf(n)
    }
}
function Ah(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ah(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Ih() {
    for (var e = window, t = Za(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Za(e.document)
    }
    return t
}
function ed(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function w1(e) {
    var t = Ih()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ah(n.ownerDocument.documentElement, n)) {
        if (r !== null && ed(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = zf(n, i);
                var a = zf(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var b1 = hn && "documentMode"in document && 11 >= document.documentMode
  , ro = null
  , Oc = null
  , wi = null
  , _c = !1;
function Ff(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _c || ro == null || ro !== Za(r) || (r = ro,
    "selectionStart"in r && ed(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    wi && Oi(wi, r) || (wi = r,
    r = is(Oc, "onSelect"),
    0 < r.length && (t = new Xu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ro)))
}
function ga(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var oo = {
    animationend: ga("Animation", "AnimationEnd"),
    animationiteration: ga("Animation", "AnimationIteration"),
    animationstart: ga("Animation", "AnimationStart"),
    transitionend: ga("Transition", "TransitionEnd")
}
  , Ll = {}
  , Lh = {};
hn && (Lh = document.createElement("div").style,
"AnimationEvent"in window || (delete oo.animationend.animation,
delete oo.animationiteration.animation,
delete oo.animationstart.animation),
"TransitionEvent"in window || delete oo.transitionend.transition);
function Ls(e) {
    if (Ll[e])
        return Ll[e];
    if (!oo[e])
        return e;
    var t = oo[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Lh)
            return Ll[e] = t[n];
    return e
}
var zh = Ls("animationend")
  , Fh = Ls("animationiteration")
  , $h = Ls("animationstart")
  , Wh = Ls("transitionend")
  , Uh = new Map
  , $f = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function sr(e, t) {
    Uh.set(e, t),
    $r(t, [e])
}
for (var zl = 0; zl < $f.length; zl++) {
    var Fl = $f[zl]
      , S1 = Fl.toLowerCase()
      , C1 = Fl[0].toUpperCase() + Fl.slice(1);
    sr(S1, "on" + C1)
}
sr(zh, "onAnimationEnd");
sr(Fh, "onAnimationIteration");
sr($h, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(Wh, "onTransitionEnd");
_o("onMouseEnter", ["mouseout", "mouseover"]);
_o("onMouseLeave", ["mouseout", "mouseover"]);
_o("onPointerEnter", ["pointerout", "pointerover"]);
_o("onPointerLeave", ["pointerout", "pointerover"]);
$r("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$r("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$r("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$r("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$r("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , E1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
function Wf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Sw(r, t, void 0, e),
    e.currentTarget = null
}
function Bh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var s = r[a]
                      , l = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Wf(o, s, u),
                    i = l
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (s = r[a],
                    l = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Wf(o, s, u),
                    i = l
                }
        }
    }
    if (es)
        throw e = jc,
        es = !1,
        jc = null,
        e
}
function he(e, t) {
    var n = t[Fc];
    n === void 0 && (n = t[Fc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Vh(t, e, 2, !1),
    n.add(r))
}
function $l(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Vh(n, e, r, t)
}
var va = "_reactListening" + Math.random().toString(36).slice(2);
function _i(e) {
    if (!e[va]) {
        e[va] = !0,
        Xm.forEach(function(n) {
            n !== "selectionchange" && (E1.has(n) || $l(n, !1, e),
            $l(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[va] || (t[va] = !0,
        $l("selectionchange", !1, t))
    }
}
function Vh(e, t, n, r) {
    switch (Th(t)) {
    case 1:
        var o = zw;
        break;
    case 4:
        o = Fw;
        break;
    default:
        o = Ku
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Pc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Wl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; s !== null; ) {
                    if (a = xr(s),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        r = i = a;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    ph(function() {
        var u = i
          , d = Hu(n)
          , f = [];
        e: {
            var y = Uh.get(e);
            if (y !== void 0) {
                var g = Xu
                  , b = e;
                switch (e) {
                case "keypress":
                    if (Fa(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = e1;
                    break;
                case "focusin":
                    b = "focus",
                    g = _l;
                    break;
                case "focusout":
                    b = "blur",
                    g = _l;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = _l;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = jf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = Uw;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = r1;
                    break;
                case zh:
                case Fh:
                case $h:
                    g = Hw;
                    break;
                case Wh:
                    g = i1;
                    break;
                case "scroll":
                    g = $w;
                    break;
                case "wheel":
                    g = s1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = Qw;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = Mf
                }
                var h = (t & 4) !== 0
                  , w = !h && e === "scroll"
                  , v = h ? y !== null ? y + "Capture" : null : y;
                h = [];
                for (var m = u, x; m !== null; ) {
                    x = m;
                    var S = x.stateNode;
                    if (x.tag === 5 && S !== null && (x = S,
                    v !== null && (S = Pi(m, v),
                    S != null && h.push(Ai(m, S, x)))),
                    w)
                        break;
                    m = m.return
                }
                0 < h.length && (y = new g(y,b,null,n,d),
                f.push({
                    event: y,
                    listeners: h
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (y = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                y && n !== Nc && (b = n.relatedTarget || n.fromElement) && (xr(b) || b[gn]))
                    break e;
                if ((g || y) && (y = d.window === d ? d : (y = d.ownerDocument) ? y.defaultView || y.parentWindow : window,
                g ? (b = n.relatedTarget || n.toElement,
                g = u,
                b = b ? xr(b) : null,
                b !== null && (w = Wr(b),
                b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (g = null,
                b = u),
                g !== b)) {
                    if (h = jf,
                    S = "onMouseLeave",
                    v = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (h = Mf,
                    S = "onPointerLeave",
                    v = "onPointerEnter",
                    m = "pointer"),
                    w = g == null ? y : io(g),
                    x = b == null ? y : io(b),
                    y = new h(S,m + "leave",g,n,d),
                    y.target = w,
                    y.relatedTarget = x,
                    S = null,
                    xr(d) === u && (h = new h(v,m + "enter",b,n,d),
                    h.target = x,
                    h.relatedTarget = w,
                    S = h),
                    w = S,
                    g && b)
                        t: {
                            for (h = g,
                            v = b,
                            m = 0,
                            x = h; x; x = Kr(x))
                                m++;
                            for (x = 0,
                            S = v; S; S = Kr(S))
                                x++;
                            for (; 0 < m - x; )
                                h = Kr(h),
                                m--;
                            for (; 0 < x - m; )
                                v = Kr(v),
                                x--;
                            for (; m--; ) {
                                if (h === v || v !== null && h === v.alternate)
                                    break t;
                                h = Kr(h),
                                v = Kr(v)
                            }
                            h = null
                        }
                    else
                        h = null;
                    g !== null && Uf(f, y, g, h, !1),
                    b !== null && w !== null && Uf(f, w, b, h, !0)
                }
            }
            e: {
                if (y = u ? io(u) : window,
                g = y.nodeName && y.nodeName.toLowerCase(),
                g === "select" || g === "input" && y.type === "file")
                    var C = m1;
                else if (_f(y))
                    if (Oh)
                        C = y1;
                    else {
                        C = g1;
                        var k = h1
                    }
                else
                    (g = y.nodeName) && g.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (C = v1);
                if (C && (C = C(e, u))) {
                    Dh(f, C, n, d);
                    break e
                }
                k && k(e, y, u),
                e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && bc(y, "number", y.value)
            }
            switch (k = u ? io(u) : window,
            e) {
            case "focusin":
                (_f(k) || k.contentEditable === "true") && (ro = k,
                Oc = u,
                wi = null);
                break;
            case "focusout":
                wi = Oc = ro = null;
                break;
            case "mousedown":
                _c = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                _c = !1,
                Ff(f, n, d);
                break;
            case "selectionchange":
                if (b1)
                    break;
            case "keydown":
            case "keyup":
                Ff(f, n, d)
            }
            var E;
            if (Ju)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                no ? Rh(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (jh && n.locale !== "ko" && (no || j !== "onCompositionStart" ? j === "onCompositionEnd" && no && (E = Ph()) : (Bn = d,
            Gu = "value"in Bn ? Bn.value : Bn.textContent,
            no = !0)),
            k = is(u, j),
            0 < k.length && (j = new Rf(j,e,null,n,d),
            f.push({
                event: j,
                listeners: k
            }),
            E ? j.data = E : (E = Mh(n),
            E !== null && (j.data = E)))),
            (E = c1 ? u1(e, n) : d1(e, n)) && (u = is(u, "onBeforeInput"),
            0 < u.length && (d = new Rf("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = E))
        }
        Bh(f, t)
    })
}
function Ai(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function is(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Pi(e, n),
        i != null && r.unshift(Ai(e, i, o)),
        i = Pi(e, t),
        i != null && r.push(Ai(e, i, o))),
        e = e.return
    }
    return r
}
function Kr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Uf(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
        var s = n
          , l = s.alternate
          , u = s.stateNode;
        if (l !== null && l === r)
            break;
        s.tag === 5 && u !== null && (s = u,
        o ? (l = Pi(n, i),
        l != null && a.unshift(Ai(n, l, s))) : o || (l = Pi(n, i),
        l != null && a.push(Ai(n, l, s)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var k1 = /\r\n?/g
  , N1 = /\u0000|\uFFFD/g;
function Bf(e) {
    return (typeof e == "string" ? e : "" + e).replace(k1, `
`).replace(N1, "")
}
function ya(e, t, n) {
    if (t = Bf(t),
    Bf(e) !== t && n)
        throw Error(R(425))
}
function as() {}
var Ac = null
  , Ic = null;
function Lc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var zc = typeof setTimeout == "function" ? setTimeout : void 0
  , T1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Vf = typeof Promise == "function" ? Promise : void 0
  , P1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vf < "u" ? function(e) {
    return Vf.resolve(null).then(e).catch(j1)
}
: zc;
function j1(e) {
    setTimeout(function() {
        throw e
    })
}
function Ul(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Mi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Mi(t)
}
function Kn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Hf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Qo = Math.random().toString(36).slice(2)
  , qt = "__reactFiber$" + Qo
  , Ii = "__reactProps$" + Qo
  , gn = "__reactContainer$" + Qo
  , Fc = "__reactEvents$" + Qo
  , R1 = "__reactListeners$" + Qo
  , M1 = "__reactHandles$" + Qo;
function xr(e) {
    var t = e[qt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[gn] || n[qt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Hf(e); e !== null; ) {
                    if (n = e[qt])
                        return n;
                    e = Hf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ea(e) {
    return e = e[qt] || e[gn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function io(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function zs(e) {
    return e[Ii] || null
}
var $c = []
  , ao = -1;
function lr(e) {
    return {
        current: e
    }
}
function ge(e) {
    0 > ao || (e.current = $c[ao],
    $c[ao] = null,
    ao--)
}
function fe(e, t) {
    ao++,
    $c[ao] = e.current,
    e.current = t
}
var or = {}
  , Ve = lr(or)
  , et = lr(!1)
  , Rr = or;
function Ao(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return or;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function tt(e) {
    return e = e.childContextTypes,
    e != null
}
function ss() {
    ge(et),
    ge(Ve)
}
function Yf(e, t, n) {
    if (Ve.current !== or)
        throw Error(R(168));
    fe(Ve, t),
    fe(et, n)
}
function Hh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(R(108, hw(e) || "Unknown", o));
    return Ce({}, n, r)
}
function ls(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || or,
    Rr = Ve.current,
    fe(Ve, e),
    fe(et, et.current),
    !0
}
function Qf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(R(169));
    n ? (e = Hh(e, t, Rr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ge(et),
    ge(Ve),
    fe(Ve, e)) : ge(et),
    fe(et, n)
}
var un = null
  , Fs = !1
  , Bl = !1;
function Yh(e) {
    un === null ? un = [e] : un.push(e)
}
function D1(e) {
    Fs = !0,
    Yh(e)
}
function cr() {
    if (!Bl && un !== null) {
        Bl = !0;
        var e = 0
          , t = le;
        try {
            var n = un;
            for (le = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            un = null,
            Fs = !1
        } catch (o) {
            throw un !== null && (un = un.slice(e + 1)),
            vh(Yu, cr),
            o
        } finally {
            le = t,
            Bl = !1
        }
    }
    return null
}
var so = []
  , lo = 0
  , cs = null
  , us = 0
  , vt = []
  , yt = 0
  , Mr = null
  , fn = 1
  , pn = "";
function gr(e, t) {
    so[lo++] = us,
    so[lo++] = cs,
    cs = e,
    us = t
}
function Qh(e, t, n) {
    vt[yt++] = fn,
    vt[yt++] = pn,
    vt[yt++] = Mr,
    Mr = e;
    var r = fn;
    e = pn;
    var o = 32 - At(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - At(t) + o;
    if (30 < i) {
        var a = o - o % 5;
        i = (r & (1 << a) - 1).toString(32),
        r >>= a,
        o -= a,
        fn = 1 << 32 - At(t) + o | n << o | r,
        pn = i + e
    } else
        fn = 1 << i | n << o | r,
        pn = e
}
function td(e) {
    e.return !== null && (gr(e, 1),
    Qh(e, 1, 0))
}
function nd(e) {
    for (; e === cs; )
        cs = so[--lo],
        so[lo] = null,
        us = so[--lo],
        so[lo] = null;
    for (; e === Mr; )
        Mr = vt[--yt],
        vt[yt] = null,
        pn = vt[--yt],
        vt[yt] = null,
        fn = vt[--yt],
        vt[yt] = null
}
var st = null
  , at = null
  , xe = !1
  , _t = null;
function qh(e, t) {
    var n = xt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function qf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        at = Kn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        at = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Mr !== null ? {
            id: fn,
            overflow: pn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = xt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        st = e,
        at = null,
        !0) : !1;
    default:
        return !1
    }
}
function Wc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Uc(e) {
    if (xe) {
        var t = at;
        if (t) {
            var n = t;
            if (!qf(e, t)) {
                if (Wc(e))
                    throw Error(R(418));
                t = Kn(n.nextSibling);
                var r = st;
                t && qf(e, t) ? qh(r, n) : (e.flags = e.flags & -4097 | 2,
                xe = !1,
                st = e)
            }
        } else {
            if (Wc(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            xe = !1,
            st = e
        }
    }
}
function Kf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    st = e
}
function xa(e) {
    if (e !== st)
        return !1;
    if (!xe)
        return Kf(e),
        xe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Lc(e.type, e.memoizedProps)),
    t && (t = at)) {
        if (Wc(e))
            throw Kh(),
            Error(R(418));
        for (; t; )
            qh(e, t),
            t = Kn(t.nextSibling)
    }
    if (Kf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            at = Kn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            at = null
        }
    } else
        at = st ? Kn(e.stateNode.nextSibling) : null;
    return !0
}
function Kh() {
    for (var e = at; e; )
        e = Kn(e.nextSibling)
}
function Io() {
    at = st = null,
    xe = !1
}
function rd(e) {
    _t === null ? _t = [e] : _t.push(e)
}
var O1 = Sn.ReactCurrentBatchConfig;
function ii(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(R(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var s = o.refs;
                a === null ? delete s[i] : s[i] = a
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function wa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Gf(e) {
    var t = e._init;
    return t(e._payload)
}
function Gh(e) {
    function t(v, m) {
        if (e) {
            var x = v.deletions;
            x === null ? (v.deletions = [m],
            v.flags |= 16) : x.push(m)
        }
    }
    function n(v, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(v, m),
            m = m.sibling;
        return null
    }
    function r(v, m) {
        for (v = new Map; m !== null; )
            m.key !== null ? v.set(m.key, m) : v.set(m.index, m),
            m = m.sibling;
        return v
    }
    function o(v, m) {
        return v = Jn(v, m),
        v.index = 0,
        v.sibling = null,
        v
    }
    function i(v, m, x) {
        return v.index = x,
        e ? (x = v.alternate,
        x !== null ? (x = x.index,
        x < m ? (v.flags |= 2,
        m) : x) : (v.flags |= 2,
        m)) : (v.flags |= 1048576,
        m)
    }
    function a(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function s(v, m, x, S) {
        return m === null || m.tag !== 6 ? (m = Gl(x, v.mode, S),
        m.return = v,
        m) : (m = o(m, x),
        m.return = v,
        m)
    }
    function l(v, m, x, S) {
        var C = x.type;
        return C === to ? d(v, m, x.props.children, S, x.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === On && Gf(C) === m.type) ? (S = o(m, x.props),
        S.ref = ii(v, m, x),
        S.return = v,
        S) : (S = Ya(x.type, x.key, x.props, null, v.mode, S),
        S.ref = ii(v, m, x),
        S.return = v,
        S)
    }
    function u(v, m, x, S) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== x.containerInfo || m.stateNode.implementation !== x.implementation ? (m = Xl(x, v.mode, S),
        m.return = v,
        m) : (m = o(m, x.children || []),
        m.return = v,
        m)
    }
    function d(v, m, x, S, C) {
        return m === null || m.tag !== 7 ? (m = jr(x, v.mode, S, C),
        m.return = v,
        m) : (m = o(m, x),
        m.return = v,
        m)
    }
    function f(v, m, x) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = Gl("" + m, v.mode, x),
            m.return = v,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ca:
                return x = Ya(m.type, m.key, m.props, null, v.mode, x),
                x.ref = ii(v, null, m),
                x.return = v,
                x;
            case eo:
                return m = Xl(m, v.mode, x),
                m.return = v,
                m;
            case On:
                var S = m._init;
                return f(v, S(m._payload), x)
            }
            if (fi(m) || ei(m))
                return m = jr(m, v.mode, x, null),
                m.return = v,
                m;
            wa(v, m)
        }
        return null
    }
    function y(v, m, x, S) {
        var C = m !== null ? m.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return C !== null ? null : s(v, m, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ca:
                return x.key === C ? l(v, m, x, S) : null;
            case eo:
                return x.key === C ? u(v, m, x, S) : null;
            case On:
                return C = x._init,
                y(v, m, C(x._payload), S)
            }
            if (fi(x) || ei(x))
                return C !== null ? null : d(v, m, x, S, null);
            wa(v, x)
        }
        return null
    }
    function g(v, m, x, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return v = v.get(x) || null,
            s(m, v, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case ca:
                return v = v.get(S.key === null ? x : S.key) || null,
                l(m, v, S, C);
            case eo:
                return v = v.get(S.key === null ? x : S.key) || null,
                u(m, v, S, C);
            case On:
                var k = S._init;
                return g(v, m, x, k(S._payload), C)
            }
            if (fi(S) || ei(S))
                return v = v.get(x) || null,
                d(m, v, S, C, null);
            wa(m, S)
        }
        return null
    }
    function b(v, m, x, S) {
        for (var C = null, k = null, E = m, j = m = 0, M = null; E !== null && j < x.length; j++) {
            E.index > j ? (M = E,
            E = null) : M = E.sibling;
            var D = y(v, E, x[j], S);
            if (D === null) {
                E === null && (E = M);
                break
            }
            e && E && D.alternate === null && t(v, E),
            m = i(D, m, j),
            k === null ? C = D : k.sibling = D,
            k = D,
            E = M
        }
        if (j === x.length)
            return n(v, E),
            xe && gr(v, j),
            C;
        if (E === null) {
            for (; j < x.length; j++)
                E = f(v, x[j], S),
                E !== null && (m = i(E, m, j),
                k === null ? C = E : k.sibling = E,
                k = E);
            return xe && gr(v, j),
            C
        }
        for (E = r(v, E); j < x.length; j++)
            M = g(E, v, j, x[j], S),
            M !== null && (e && M.alternate !== null && E.delete(M.key === null ? j : M.key),
            m = i(M, m, j),
            k === null ? C = M : k.sibling = M,
            k = M);
        return e && E.forEach(function($) {
            return t(v, $)
        }),
        xe && gr(v, j),
        C
    }
    function h(v, m, x, S) {
        var C = ei(x);
        if (typeof C != "function")
            throw Error(R(150));
        if (x = C.call(x),
        x == null)
            throw Error(R(151));
        for (var k = C = null, E = m, j = m = 0, M = null, D = x.next(); E !== null && !D.done; j++,
        D = x.next()) {
            E.index > j ? (M = E,
            E = null) : M = E.sibling;
            var $ = y(v, E, D.value, S);
            if ($ === null) {
                E === null && (E = M);
                break
            }
            e && E && $.alternate === null && t(v, E),
            m = i($, m, j),
            k === null ? C = $ : k.sibling = $,
            k = $,
            E = M
        }
        if (D.done)
            return n(v, E),
            xe && gr(v, j),
            C;
        if (E === null) {
            for (; !D.done; j++,
            D = x.next())
                D = f(v, D.value, S),
                D !== null && (m = i(D, m, j),
                k === null ? C = D : k.sibling = D,
                k = D);
            return xe && gr(v, j),
            C
        }
        for (E = r(v, E); !D.done; j++,
        D = x.next())
            D = g(E, v, j, D.value, S),
            D !== null && (e && D.alternate !== null && E.delete(D.key === null ? j : D.key),
            m = i(D, m, j),
            k === null ? C = D : k.sibling = D,
            k = D);
        return e && E.forEach(function(A) {
            return t(v, A)
        }),
        xe && gr(v, j),
        C
    }
    function w(v, m, x, S) {
        if (typeof x == "object" && x !== null && x.type === to && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case ca:
                e: {
                    for (var C = x.key, k = m; k !== null; ) {
                        if (k.key === C) {
                            if (C = x.type,
                            C === to) {
                                if (k.tag === 7) {
                                    n(v, k.sibling),
                                    m = o(k, x.props.children),
                                    m.return = v,
                                    v = m;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === On && Gf(C) === k.type) {
                                n(v, k.sibling),
                                m = o(k, x.props),
                                m.ref = ii(v, k, x),
                                m.return = v,
                                v = m;
                                break e
                            }
                            n(v, k);
                            break
                        } else
                            t(v, k);
                        k = k.sibling
                    }
                    x.type === to ? (m = jr(x.props.children, v.mode, S, x.key),
                    m.return = v,
                    v = m) : (S = Ya(x.type, x.key, x.props, null, v.mode, S),
                    S.ref = ii(v, m, x),
                    S.return = v,
                    v = S)
                }
                return a(v);
            case eo:
                e: {
                    for (k = x.key; m !== null; ) {
                        if (m.key === k)
                            if (m.tag === 4 && m.stateNode.containerInfo === x.containerInfo && m.stateNode.implementation === x.implementation) {
                                n(v, m.sibling),
                                m = o(m, x.children || []),
                                m.return = v,
                                v = m;
                                break e
                            } else {
                                n(v, m);
                                break
                            }
                        else
                            t(v, m);
                        m = m.sibling
                    }
                    m = Xl(x, v.mode, S),
                    m.return = v,
                    v = m
                }
                return a(v);
            case On:
                return k = x._init,
                w(v, m, k(x._payload), S)
            }
            if (fi(x))
                return b(v, m, x, S);
            if (ei(x))
                return h(v, m, x, S);
            wa(v, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        m !== null && m.tag === 6 ? (n(v, m.sibling),
        m = o(m, x),
        m.return = v,
        v = m) : (n(v, m),
        m = Gl(x, v.mode, S),
        m.return = v,
        v = m),
        a(v)) : n(v, m)
    }
    return w
}
var Lo = Gh(!0)
  , Xh = Gh(!1)
  , ds = lr(null)
  , fs = null
  , co = null
  , od = null;
function id() {
    od = co = fs = null
}
function ad(e) {
    var t = ds.current;
    ge(ds),
    e._currentValue = t
}
function Bc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function vo(e, t) {
    fs = e,
    od = co = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0),
    e.firstContext = null)
}
function bt(e) {
    var t = e._currentValue;
    if (od !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        co === null) {
            if (fs === null)
                throw Error(R(308));
            co = e,
            fs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            co = co.next = e;
    return t
}
var wr = null;
function sd(e) {
    wr === null ? wr = [e] : wr.push(e)
}
function Zh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    sd(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    vn(e, r)
}
function vn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var _n = !1;
function ld(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Jh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function mn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Gn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ne & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        vn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    sd(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    vn(e, n)
}
function $a(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Qu(e, n)
    }
}
function Xf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = a : i = i.next = a,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ps(e, t, n, r) {
    var o = e.updateQueue;
    _n = !1;
    var i = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var l = s
          , u = l.next;
        l.next = null,
        a === null ? i = u : a.next = u,
        a = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        s = d.lastBaseUpdate,
        s !== a && (s === null ? d.firstBaseUpdate = u : s.next = u,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var f = o.baseState;
        a = 0,
        d = u = l = null,
        s = i;
        do {
            var y = s.lane
              , g = s.eventTime;
            if ((r & y) === y) {
                d !== null && (d = d.next = {
                    eventTime: g,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var b = e
                      , h = s;
                    switch (y = t,
                    g = n,
                    h.tag) {
                    case 1:
                        if (b = h.payload,
                        typeof b == "function") {
                            f = b.call(g, f, y);
                            break e
                        }
                        f = b;
                        break e;
                    case 3:
                        b.flags = b.flags & -65537 | 128;
                    case 0:
                        if (b = h.payload,
                        y = typeof b == "function" ? b.call(g, f, y) : b,
                        y == null)
                            break e;
                        f = Ce({}, f, y);
                        break e;
                    case 2:
                        _n = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                y = o.effects,
                y === null ? o.effects = [s] : y.push(s))
            } else
                g = {
                    eventTime: g,
                    lane: y,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                d === null ? (u = d = g,
                l = f) : d = d.next = g,
                a |= y;
            if (s = s.next,
            s === null) {
                if (s = o.shared.pending,
                s === null)
                    break;
                y = s,
                s = y.next,
                y.next = null,
                o.lastBaseUpdate = y,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Or |= a,
        e.lanes = a,
        e.memoizedState = f
    }
}
function Zf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(R(191, o));
                o.call(r)
            }
        }
}
var ta = {}
  , tn = lr(ta)
  , Li = lr(ta)
  , zi = lr(ta);
function br(e) {
    if (e === ta)
        throw Error(R(174));
    return e
}
function cd(e, t) {
    switch (fe(zi, t),
    fe(Li, e),
    fe(tn, ta),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Cc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Cc(t, e)
    }
    ge(tn),
    fe(tn, t)
}
function zo() {
    ge(tn),
    ge(Li),
    ge(zi)
}
function eg(e) {
    br(zi.current);
    var t = br(tn.current)
      , n = Cc(t, e.type);
    t !== n && (fe(Li, e),
    fe(tn, n))
}
function ud(e) {
    Li.current === e && (ge(tn),
    ge(Li))
}
var be = lr(0);
function ms(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Vl = [];
function dd() {
    for (var e = 0; e < Vl.length; e++)
        Vl[e]._workInProgressVersionPrimary = null;
    Vl.length = 0
}
var Wa = Sn.ReactCurrentDispatcher
  , Hl = Sn.ReactCurrentBatchConfig
  , Dr = 0
  , Se = null
  , Re = null
  , De = null
  , hs = !1
  , bi = !1
  , Fi = 0
  , _1 = 0;
function $e() {
    throw Error(R(321))
}
function fd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Lt(e[n], t[n]))
            return !1;
    return !0
}
function pd(e, t, n, r, o, i) {
    if (Dr = i,
    Se = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Wa.current = e === null || e.memoizedState === null ? z1 : F1,
    e = n(r, o),
    bi) {
        i = 0;
        do {
            if (bi = !1,
            Fi = 0,
            25 <= i)
                throw Error(R(301));
            i += 1,
            De = Re = null,
            t.updateQueue = null,
            Wa.current = $1,
            e = n(r, o)
        } while (bi)
    }
    if (Wa.current = gs,
    t = Re !== null && Re.next !== null,
    Dr = 0,
    De = Re = Se = null,
    hs = !1,
    t)
        throw Error(R(300));
    return e
}
function md() {
    var e = Fi !== 0;
    return Fi = 0,
    e
}
function Vt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return De === null ? Se.memoizedState = De = e : De = De.next = e,
    De
}
function St() {
    if (Re === null) {
        var e = Se.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Re.next;
    var t = De === null ? Se.memoizedState : De.next;
    if (t !== null)
        De = t,
        Re = e;
    else {
        if (e === null)
            throw Error(R(310));
        Re = e,
        e = {
            memoizedState: Re.memoizedState,
            baseState: Re.baseState,
            baseQueue: Re.baseQueue,
            queue: Re.queue,
            next: null
        },
        De === null ? Se.memoizedState = De = e : De = De.next = e
    }
    return De
}
function $i(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Yl(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = Re
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = i.next,
            i.next = a
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var s = a = null
          , l = null
          , u = i;
        do {
            var d = u.lane;
            if ((Dr & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = f,
                a = r) : l = l.next = f,
                Se.lanes |= d,
                Or |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? a = r : l.next = s,
        Lt(r, t.memoizedState) || (Je = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            Se.lanes |= i,
            Or |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ql(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do
            i = e(i, a.action),
            a = a.next;
        while (a !== o);
        Lt(i, t.memoizedState) || (Je = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function tg() {}
function ng(e, t) {
    var n = Se
      , r = St()
      , o = t()
      , i = !Lt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Je = !0),
    r = r.queue,
    hd(ig.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || De !== null && De.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Wi(9, og.bind(null, n, r, o, t), void 0, null),
        Oe === null)
            throw Error(R(349));
        Dr & 30 || rg(n, t, o)
    }
    return o
}
function rg(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Se.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function og(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    ag(t) && sg(e)
}
function ig(e, t, n) {
    return n(function() {
        ag(t) && sg(e)
    })
}
function ag(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Lt(e, n)
    } catch {
        return !0
    }
}
function sg(e) {
    var t = vn(e, 1);
    t !== null && It(t, e, 1, -1)
}
function Jf(e) {
    var t = Vt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $i,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = L1.bind(null, Se, e),
    [t.memoizedState, e]
}
function Wi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Se.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function lg() {
    return St().memoizedState
}
function Ua(e, t, n, r) {
    var o = Vt();
    Se.flags |= e,
    o.memoizedState = Wi(1 | t, n, void 0, r === void 0 ? null : r)
}
function $s(e, t, n, r) {
    var o = St();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Re !== null) {
        var a = Re.memoizedState;
        if (i = a.destroy,
        r !== null && fd(r, a.deps)) {
            o.memoizedState = Wi(t, n, i, r);
            return
        }
    }
    Se.flags |= e,
    o.memoizedState = Wi(1 | t, n, i, r)
}
function ep(e, t) {
    return Ua(8390656, 8, e, t)
}
function hd(e, t) {
    return $s(2048, 8, e, t)
}
function cg(e, t) {
    return $s(4, 2, e, t)
}
function ug(e, t) {
    return $s(4, 4, e, t)
}
function dg(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function fg(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    $s(4, 4, dg.bind(null, t, e), n)
}
function gd() {}
function pg(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function mg(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function hg(e, t, n) {
    return Dr & 21 ? (Lt(n, t) || (n = wh(),
    Se.lanes |= n,
    Or |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Je = !0),
    e.memoizedState = n)
}
function A1(e, t) {
    var n = le;
    le = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Hl.transition;
    Hl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        le = n,
        Hl.transition = r
    }
}
function gg() {
    return St().memoizedState
}
function I1(e, t, n) {
    var r = Zn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    vg(e))
        yg(t, n);
    else if (n = Zh(e, t, n, r),
    n !== null) {
        var o = qe();
        It(n, e, r, o),
        xg(n, t, r)
    }
}
function L1(e, t, n) {
    var r = Zn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (vg(e))
        yg(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var a = t.lastRenderedState
                  , s = i(a, n);
                if (o.hasEagerState = !0,
                o.eagerState = s,
                Lt(s, a)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    sd(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Zh(e, t, o, r),
        n !== null && (o = qe(),
        It(n, e, r, o),
        xg(n, t, r))
    }
}
function vg(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se
}
function yg(e, t) {
    bi = hs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function xg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Qu(e, n)
    }
}
var gs = {
    readContext: bt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1
}
  , z1 = {
    readContext: bt,
    useCallback: function(e, t) {
        return Vt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: bt,
    useEffect: ep,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ua(4194308, 4, dg.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ua(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ua(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Vt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Vt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = I1.bind(null, Se, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Vt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Jf,
    useDebugValue: gd,
    useDeferredValue: function(e) {
        return Vt().memoizedState = e
    },
    useTransition: function() {
        var e = Jf(!1)
          , t = e[0];
        return e = A1.bind(null, e[1]),
        Vt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Se
          , o = Vt();
        if (xe) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            Oe === null)
                throw Error(R(349));
            Dr & 30 || rg(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        ep(ig.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Wi(9, og.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Vt()
          , t = Oe.identifierPrefix;
        if (xe) {
            var n = pn
              , r = fn;
            n = (r & ~(1 << 32 - At(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Fi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = _1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , F1 = {
    readContext: bt,
    useCallback: pg,
    useContext: bt,
    useEffect: hd,
    useImperativeHandle: fg,
    useInsertionEffect: cg,
    useLayoutEffect: ug,
    useMemo: mg,
    useReducer: Yl,
    useRef: lg,
    useState: function() {
        return Yl($i)
    },
    useDebugValue: gd,
    useDeferredValue: function(e) {
        var t = St();
        return hg(t, Re.memoizedState, e)
    },
    useTransition: function() {
        var e = Yl($i)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: tg,
    useSyncExternalStore: ng,
    useId: gg,
    unstable_isNewReconciler: !1
}
  , $1 = {
    readContext: bt,
    useCallback: pg,
    useContext: bt,
    useEffect: hd,
    useImperativeHandle: fg,
    useInsertionEffect: cg,
    useLayoutEffect: ug,
    useMemo: mg,
    useReducer: Ql,
    useRef: lg,
    useState: function() {
        return Ql($i)
    },
    useDebugValue: gd,
    useDeferredValue: function(e) {
        var t = St();
        return Re === null ? t.memoizedState = e : hg(t, Re.memoizedState, e)
    },
    useTransition: function() {
        var e = Ql($i)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: tg,
    useSyncExternalStore: ng,
    useId: gg,
    unstable_isNewReconciler: !1
};
function jt(e, t) {
    if (e && e.defaultProps) {
        t = Ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Vc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ws = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Wr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = qe()
          , o = Zn(e)
          , i = mn(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = Gn(e, i, o),
        t !== null && (It(t, e, o, r),
        $a(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = qe()
          , o = Zn(e)
          , i = mn(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Gn(e, i, o),
        t !== null && (It(t, e, o, r),
        $a(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = qe()
          , r = Zn(e)
          , o = mn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Gn(e, o, r),
        t !== null && (It(t, e, r, n),
        $a(t, e, r))
    }
};
function tp(e, t, n, r, o, i, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Oi(n, r) || !Oi(o, i) : !0
}
function wg(e, t, n) {
    var r = !1
      , o = or
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = bt(i) : (o = tt(t) ? Rr : Ve.current,
    r = t.contextTypes,
    i = (r = r != null) ? Ao(e, o) : or),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ws,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function np(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ws.enqueueReplaceState(t, t.state, null)
}
function Hc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    ld(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = bt(i) : (i = tt(t) ? Rr : Ve.current,
    o.context = Ao(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Vc(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ws.enqueueReplaceState(o, o.state, null),
    ps(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Fo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += mw(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function ql(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Yc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var W1 = typeof WeakMap == "function" ? WeakMap : Map;
function bg(e, t, n) {
    n = mn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ys || (ys = !0,
        nu = r),
        Yc(e, t)
    }
    ,
    n
}
function Sg(e, t, n) {
    n = mn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Yc(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Yc(e, t),
        typeof r != "function" && (Xn === null ? Xn = new Set([this]) : Xn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function rp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new W1;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = tb.bind(null, e, t, n),
    t.then(e, e))
}
function op(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ip(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mn(-1, 1),
    t.tag = 2,
    Gn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var U1 = Sn.ReactCurrentOwner
  , Je = !1;
function Ye(e, t, n, r) {
    t.child = e === null ? Xh(t, null, n, r) : Lo(t, e.child, n, r)
}
function ap(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return vo(t, o),
    r = pd(e, t, n, r, i, o),
    n = md(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    yn(e, t, o)) : (xe && n && td(t),
    t.flags |= 1,
    Ye(e, t, r, o),
    t.child)
}
function sp(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Ed(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Cg(e, t, i, r, o)) : (e = Ya(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var a = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Oi,
        n(a, r) && e.ref === t.ref)
            return yn(e, t, o)
    }
    return t.flags |= 1,
    e = Jn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Cg(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Oi(i, r) && e.ref === t.ref)
            if (Je = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Je = !0);
            else
                return t.lanes = e.lanes,
                yn(e, t, o)
    }
    return Qc(e, t, n, r, o)
}
function Eg(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            fe(fo, ot),
            ot |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                fe(fo, ot),
                ot |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            fe(fo, ot),
            ot |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        fe(fo, ot),
        ot |= r;
    return Ye(e, t, o, n),
    t.child
}
function kg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Qc(e, t, n, r, o) {
    var i = tt(n) ? Rr : Ve.current;
    return i = Ao(t, i),
    vo(t, o),
    n = pd(e, t, n, r, i, o),
    r = md(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    yn(e, t, o)) : (xe && r && td(t),
    t.flags |= 1,
    Ye(e, t, n, o),
    t.child)
}
function lp(e, t, n, r, o) {
    if (tt(n)) {
        var i = !0;
        ls(t)
    } else
        i = !1;
    if (vo(t, o),
    t.stateNode === null)
        Ba(e, t),
        wg(t, n, r),
        Hc(t, n, r, o),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , s = t.memoizedProps;
        a.props = s;
        var l = a.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = bt(u) : (u = tt(n) ? Rr : Ve.current,
        u = Ao(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && np(t, a, r, u),
        _n = !1;
        var y = t.memoizedState;
        a.state = y,
        ps(t, r, a, o),
        l = t.memoizedState,
        s !== r || y !== l || et.current || _n ? (typeof d == "function" && (Vc(t, n, d, r),
        l = t.memoizedState),
        (s = _n || tp(t, n, s, r, y, l, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        a.props = r,
        a.state = l,
        a.context = u,
        r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        Jh(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : jt(t.type, s),
        a.props = u,
        f = t.pendingProps,
        y = a.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = bt(l) : (l = tt(n) ? Rr : Ve.current,
        l = Ao(t, l));
        var g = n.getDerivedStateFromProps;
        (d = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== f || y !== l) && np(t, a, r, l),
        _n = !1,
        y = t.memoizedState,
        a.state = y,
        ps(t, r, a, o);
        var b = t.memoizedState;
        s !== f || y !== b || et.current || _n ? (typeof g == "function" && (Vc(t, n, g, r),
        b = t.memoizedState),
        (u = _n || tp(t, n, u, r, y, b, l) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = b),
        a.props = r,
        a.state = b,
        a.context = l,
        r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return qc(e, t, n, r, i, o)
}
function qc(e, t, n, r, o, i) {
    kg(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return o && Qf(t, n, !1),
        yn(e, t, i);
    r = t.stateNode,
    U1.current = t;
    var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = Lo(t, e.child, null, i),
    t.child = Lo(t, null, s, i)) : Ye(e, t, s, i),
    t.memoizedState = r.state,
    o && Qf(t, n, !0),
    t.child
}
function Ng(e) {
    var t = e.stateNode;
    t.pendingContext ? Yf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yf(e, t.context, !1),
    cd(e, t.containerInfo)
}
function cp(e, t, n, r, o) {
    return Io(),
    rd(o),
    t.flags |= 256,
    Ye(e, t, n, r),
    t.child
}
var Kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Gc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Tg(e, t, n) {
    var r = t.pendingProps, o = be.current, i = !1, a = (t.flags & 128) !== 0, s;
    if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(be, o & 1),
    e === null)
        return Uc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = a) : i = Vs(a, r, 0, null),
        e = jr(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Gc(n),
        t.memoizedState = Kc,
        e) : vd(t, a));
    if (o = e.memoizedState,
    o !== null && (s = o.dehydrated,
    s !== null))
        return B1(e, t, a, r, s, o, n);
    if (i) {
        i = r.fallback,
        a = t.mode,
        o = e.child,
        s = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Jn(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        s !== null ? i = Jn(s, i) : (i = jr(i, a, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        a = e.child.memoizedState,
        a = a === null ? Gc(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        i.memoizedState = a,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Kc,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Jn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function vd(e, t) {
    return t = Vs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ba(e, t, n, r) {
    return r !== null && rd(r),
    Lo(t, e.child, null, n),
    e = vd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function B1(e, t, n, r, o, i, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ql(Error(R(422))),
        ba(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Vs({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = jr(i, o, a, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Lo(t, e.child, null, a),
        t.child.memoizedState = Gc(a),
        t.memoizedState = Kc,
        i);
    if (!(t.mode & 1))
        return ba(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        i = Error(R(419)),
        r = ql(i, r, void 0),
        ba(e, t, a, r)
    }
    if (s = (a & e.childLanes) !== 0,
    Je || s) {
        if (r = Oe,
        r !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            vn(e, o),
            It(r, e, o, -1))
        }
        return Cd(),
        r = ql(Error(R(421))),
        ba(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = nb.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    at = Kn(o.nextSibling),
    st = t,
    xe = !0,
    _t = null,
    e !== null && (vt[yt++] = fn,
    vt[yt++] = pn,
    vt[yt++] = Mr,
    fn = e.id,
    pn = e.overflow,
    Mr = t),
    t = vd(t, r.children),
    t.flags |= 4096,
    t)
}
function up(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Bc(e.return, t, n)
}
function Kl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function Pg(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Ye(e, t, r.children, n),
    r = be.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && up(e, n, t);
                else if (e.tag === 19)
                    up(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (fe(be, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ms(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Kl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ms(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Kl(t, !0, n, null, i);
            break;
        case "together":
            Kl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ba(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function yn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Or |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Jn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Jn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function V1(e, t, n) {
    switch (t.tag) {
    case 3:
        Ng(t),
        Io();
        break;
    case 5:
        eg(t);
        break;
    case 1:
        tt(t.type) && ls(t);
        break;
    case 4:
        cd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        fe(ds, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (fe(be, be.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Tg(e, t, n) : (fe(be, be.current & 1),
            e = yn(e, t, n),
            e !== null ? e.sibling : null);
        fe(be, be.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Pg(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        fe(be, be.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Eg(e, t, n)
    }
    return yn(e, t, n)
}
var jg, Xc, Rg, Mg;
jg = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Xc = function() {}
;
Rg = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        br(tn.current);
        var i = null;
        switch (n) {
        case "input":
            o = xc(e, o),
            r = xc(e, r),
            i = [];
            break;
        case "select":
            o = Ce({}, o, {
                value: void 0
            }),
            r = Ce({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Sc(e, o),
            r = Sc(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = as)
        }
        Ec(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u];
                    for (a in s)
                        s.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ni.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (s = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}),
                            n[a] = l[a])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    s = s ? s.__html : void 0,
                    l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ni.hasOwnProperty(u) ? (l != null && u === "onScroll" && he("scroll", e),
                    i || s === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Mg = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ai(e, t) {
    if (!xe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function H1(e, t, n) {
    var r = t.pendingProps;
    switch (nd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return We(t),
        null;
    case 1:
        return tt(t.type) && ss(),
        We(t),
        null;
    case 3:
        return r = t.stateNode,
        zo(),
        ge(et),
        ge(Ve),
        dd(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (xa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        _t !== null && (iu(_t),
        _t = null))),
        Xc(e, t),
        We(t),
        null;
    case 5:
        ud(t);
        var o = br(zi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Rg(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return We(t),
                null
            }
            if (e = br(tn.current),
            xa(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[qt] = t,
                r[Ii] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    he("cancel", r),
                    he("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    he("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < mi.length; o++)
                        he(mi[o], r);
                    break;
                case "source":
                    he("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    he("error", r),
                    he("load", r);
                    break;
                case "details":
                    he("toggle", r);
                    break;
                case "input":
                    xf(r, i),
                    he("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    he("invalid", r);
                    break;
                case "textarea":
                    bf(r, i),
                    he("invalid", r)
                }
                Ec(n, i),
                o = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var s = i[a];
                        a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ya(r.textContent, s, e),
                        o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ya(r.textContent, s, e),
                        o = ["children", "" + s]) : Ni.hasOwnProperty(a) && s != null && a === "onScroll" && he("scroll", r)
                    }
                switch (n) {
                case "input":
                    ua(r),
                    wf(r, i, !0);
                    break;
                case "textarea":
                    ua(r),
                    Sf(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = as)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = ih(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[qt] = t,
                e[Ii] = r,
                jg(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = kc(n, r),
                    n) {
                    case "dialog":
                        he("cancel", e),
                        he("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        he("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < mi.length; o++)
                            he(mi[o], e);
                        o = r;
                        break;
                    case "source":
                        he("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        he("error", e),
                        he("load", e),
                        o = r;
                        break;
                    case "details":
                        he("toggle", e),
                        o = r;
                        break;
                    case "input":
                        xf(e, r),
                        o = xc(e, r),
                        he("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Ce({}, r, {
                            value: void 0
                        }),
                        he("invalid", e);
                        break;
                    case "textarea":
                        bf(e, r),
                        o = Sc(e, r),
                        he("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Ec(n, o),
                    s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "style" ? lh(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && ah(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ti(e, l) : typeof l == "number" && Ti(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ni.hasOwnProperty(i) ? l != null && i === "onScroll" && he("scroll", e) : l != null && Wu(e, i, l, a))
                        }
                    switch (n) {
                    case "input":
                        ua(e),
                        wf(e, r, !1);
                        break;
                    case "textarea":
                        ua(e),
                        Sf(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + rr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? po(e, !!r.multiple, i, !1) : r.defaultValue != null && po(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = as)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return We(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Mg(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = br(zi.current),
            br(tn.current),
            xa(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[qt] = t,
                (i = r.nodeValue !== n) && (e = st,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ya(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ya(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[qt] = t,
                t.stateNode = r
        }
        return We(t),
        null;
    case 13:
        if (ge(be),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (xe && at !== null && t.mode & 1 && !(t.flags & 128))
                Kh(),
                Io(),
                t.flags |= 98560,
                i = !1;
            else if (i = xa(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(R(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(R(317));
                    i[qt] = t
                } else
                    Io(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                We(t),
                i = !1
            } else
                _t !== null && (iu(_t),
                _t = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || be.current & 1 ? Me === 0 && (Me = 3) : Cd())),
        t.updateQueue !== null && (t.flags |= 4),
        We(t),
        null);
    case 4:
        return zo(),
        Xc(e, t),
        e === null && _i(t.stateNode.containerInfo),
        We(t),
        null;
    case 10:
        return ad(t.type._context),
        We(t),
        null;
    case 17:
        return tt(t.type) && ss(),
        We(t),
        null;
    case 19:
        if (ge(be),
        i = t.memoizedState,
        i === null)
            return We(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = i.rendering,
        a === null)
            if (r)
                ai(i, !1);
            else {
                if (Me !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = ms(e),
                        a !== null) {
                            for (t.flags |= 128,
                            ai(i, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                a = i.alternate,
                                a === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = a.childLanes,
                                i.lanes = a.lanes,
                                i.child = a.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = a.memoizedProps,
                                i.memoizedState = a.memoizedState,
                                i.updateQueue = a.updateQueue,
                                i.type = a.type,
                                e = a.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return fe(be, be.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Pe() > $o && (t.flags |= 128,
                r = !0,
                ai(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ms(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ai(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !a.alternate && !xe)
                        return We(t),
                        null
                } else
                    2 * Pe() - i.renderingStartTime > $o && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ai(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = i.last,
            n !== null ? n.sibling = a : t.child = a,
            i.last = a)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Pe(),
        t.sibling = null,
        n = be.current,
        fe(be, r ? n & 1 | 2 : n & 1),
        t) : (We(t),
        null);
    case 22:
    case 23:
        return Sd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ot & 1073741824 && (We(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function Y1(e, t) {
    switch (nd(t),
    t.tag) {
    case 1:
        return tt(t.type) && ss(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return zo(),
        ge(et),
        ge(Ve),
        dd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ud(t),
        null;
    case 13:
        if (ge(be),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Io()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ge(be),
        null;
    case 4:
        return zo(),
        null;
    case 10:
        return ad(t.type._context),
        null;
    case 22:
    case 23:
        return Sd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Sa = !1
  , Be = !1
  , Q1 = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function uo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Te(e, t, r)
            }
        else
            n.current = null
}
function Zc(e, t, n) {
    try {
        n()
    } catch (r) {
        Te(e, t, r)
    }
}
var dp = !1;
function q1(e, t) {
    if (Ac = rs,
    e = Ih(),
    ed(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , s = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , y = null;
                    t: for (; ; ) {
                        for (var g; f !== n || o !== 0 && f.nodeType !== 3 || (s = a + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (l = a + r),
                        f.nodeType === 3 && (a += f.nodeValue.length),
                        (g = f.firstChild) !== null; )
                            y = f,
                            f = g;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (y === n && ++u === o && (s = a),
                            y === i && ++d === r && (l = a),
                            (g = f.nextSibling) !== null)
                                break;
                            f = y,
                            y = f.parentNode
                        }
                        f = g
                    }
                    n = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ic = {
        focusedElem: e,
        selectionRange: n
    },
    rs = !1,
    z = t; z !== null; )
        if (t = z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            z = e;
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var h = b.memoizedProps
                                  , w = b.memoizedState
                                  , v = t.stateNode
                                  , m = v.getSnapshotBeforeUpdate(t.elementType === t.type ? h : jt(t.type, h), w);
                                v.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (S) {
                    Te(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    z = e;
                    break
                }
                z = t.return
            }
    return b = dp,
    dp = !1,
    b
}
function Si(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Zc(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Us(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Jc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Dg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Dg(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[qt],
    delete t[Ii],
    delete t[Fc],
    delete t[R1],
    delete t[M1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Og(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Og(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function eu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = as));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (eu(e, t, n),
        e = e.sibling; e !== null; )
            eu(e, t, n),
            e = e.sibling
}
function tu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (tu(e, t, n),
        e = e.sibling; e !== null; )
            tu(e, t, n),
            e = e.sibling
}
var _e = null
  , Ot = !1;
function Tn(e, t, n) {
    for (n = n.child; n !== null; )
        _g(e, t, n),
        n = n.sibling
}
function _g(e, t, n) {
    if (en && typeof en.onCommitFiberUnmount == "function")
        try {
            en.onCommitFiberUnmount(_s, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Be || uo(n, t);
    case 6:
        var r = _e
          , o = Ot;
        _e = null,
        Tn(e, t, n),
        _e = r,
        Ot = o,
        _e !== null && (Ot ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
    case 18:
        _e !== null && (Ot ? (e = _e,
        n = n.stateNode,
        e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n),
        Mi(e)) : Ul(_e, n.stateNode));
        break;
    case 4:
        r = _e,
        o = Ot,
        _e = n.stateNode.containerInfo,
        Ot = !0,
        Tn(e, t, n),
        _e = r,
        Ot = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Be && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , a = i.destroy;
                i = i.tag,
                a !== void 0 && (i & 2 || i & 4) && Zc(n, t, a),
                o = o.next
            } while (o !== r)
        }
        Tn(e, t, n);
        break;
    case 1:
        if (!Be && (uo(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                Te(n, t, s)
            }
        Tn(e, t, n);
        break;
    case 21:
        Tn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null,
        Tn(e, t, n),
        Be = r) : Tn(e, t, n);
        break;
    default:
        Tn(e, t, n)
    }
}
function pp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Q1),
        t.forEach(function(r) {
            var o = rb.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Nt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , a = t
                  , s = a;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        _e = s.stateNode,
                        Ot = !1;
                        break e;
                    case 3:
                        _e = s.stateNode.containerInfo,
                        Ot = !0;
                        break e;
                    case 4:
                        _e = s.stateNode.containerInfo,
                        Ot = !0;
                        break e
                    }
                    s = s.return
                }
                if (_e === null)
                    throw Error(R(160));
                _g(i, a, o),
                _e = null,
                Ot = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                Te(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ag(t, e),
            t = t.sibling
}
function Ag(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Nt(t, e),
        Bt(e),
        r & 4) {
            try {
                Si(3, e, e.return),
                Us(3, e)
            } catch (h) {
                Te(e, e.return, h)
            }
            try {
                Si(5, e, e.return)
            } catch (h) {
                Te(e, e.return, h)
            }
        }
        break;
    case 1:
        Nt(t, e),
        Bt(e),
        r & 512 && n !== null && uo(n, n.return);
        break;
    case 5:
        if (Nt(t, e),
        Bt(e),
        r & 512 && n !== null && uo(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ti(o, "")
            } catch (h) {
                Te(e, e.return, h)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , a = n !== null ? n.memoizedProps : i
              , s = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && rh(o, i),
                    kc(s, a);
                    var u = kc(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var d = l[a]
                          , f = l[a + 1];
                        d === "style" ? lh(o, f) : d === "dangerouslySetInnerHTML" ? ah(o, f) : d === "children" ? Ti(o, f) : Wu(o, d, f, u)
                    }
                    switch (s) {
                    case "input":
                        wc(o, i);
                        break;
                    case "textarea":
                        oh(o, i);
                        break;
                    case "select":
                        var y = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var g = i.value;
                        g != null ? po(o, !!i.multiple, g, !1) : y !== !!i.multiple && (i.defaultValue != null ? po(o, !!i.multiple, i.defaultValue, !0) : po(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ii] = i
                } catch (h) {
                    Te(e, e.return, h)
                }
        }
        break;
    case 6:
        if (Nt(t, e),
        Bt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (h) {
                Te(e, e.return, h)
            }
        }
        break;
    case 3:
        if (Nt(t, e),
        Bt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Mi(t.containerInfo)
            } catch (h) {
                Te(e, e.return, h)
            }
        break;
    case 4:
        Nt(t, e),
        Bt(e);
        break;
    case 13:
        Nt(t, e),
        Bt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (wd = Pe())),
        r & 4 && pp(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Be = (u = Be) || d,
        Nt(t, e),
        Be = u) : Nt(t, e),
        Bt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (z = e,
                d = e.child; d !== null; ) {
                    for (f = z = d; z !== null; ) {
                        switch (y = z,
                        g = y.child,
                        y.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Si(4, y, y.return);
                            break;
                        case 1:
                            uo(y, y.return);
                            var b = y.stateNode;
                            if (typeof b.componentWillUnmount == "function") {
                                r = y,
                                n = y.return;
                                try {
                                    t = r,
                                    b.props = t.memoizedProps,
                                    b.state = t.memoizedState,
                                    b.componentWillUnmount()
                                } catch (h) {
                                    Te(r, n, h)
                                }
                            }
                            break;
                        case 5:
                            uo(y, y.return);
                            break;
                        case 22:
                            if (y.memoizedState !== null) {
                                hp(f);
                                continue
                            }
                        }
                        g !== null ? (g.return = y,
                        z = g) : hp(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode,
                            l = f.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            s.style.display = sh("display", a))
                        } catch (h) {
                            Te(e, e.return, h)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (h) {
                            Te(e, e.return, h)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Nt(t, e),
        Bt(e),
        r & 4 && pp(e);
        break;
    case 21:
        break;
    default:
        Nt(t, e),
        Bt(e)
    }
}
function Bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Og(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Ti(o, ""),
                r.flags &= -33);
                var i = fp(e);
                tu(e, i, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , s = fp(e);
                eu(e, s, a);
                break;
            default:
                throw Error(R(161))
            }
        } catch (l) {
            Te(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function K1(e, t, n) {
    z = e,
    Ig(e)
}
function Ig(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var o = z
          , i = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || Sa;
            if (!a) {
                var s = o.alternate
                  , l = s !== null && s.memoizedState !== null || Be;
                s = Sa;
                var u = Be;
                if (Sa = a,
                (Be = l) && !u)
                    for (z = o; z !== null; )
                        a = z,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? gp(o) : l !== null ? (l.return = a,
                        z = l) : gp(o);
                for (; i !== null; )
                    z = i,
                    Ig(i),
                    i = i.sibling;
                z = o,
                Sa = s,
                Be = u
            }
            mp(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            z = i) : mp(e)
    }
}
function mp(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Be || Us(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Be)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : jt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Zf(t, i, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Zf(t, a, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Mi(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                Be || t.flags & 512 && Jc(t)
            } catch (y) {
                Te(t, t.return, y)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function hp(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function gp(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Us(4, t)
                } catch (l) {
                    Te(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Te(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    Jc(t)
                } catch (l) {
                    Te(t, i, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Jc(t)
                } catch (l) {
                    Te(t, a, l)
                }
            }
        } catch (l) {
            Te(t, t.return, l)
        }
        if (t === e) {
            z = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            z = s;
            break
        }
        z = t.return
    }
}
var G1 = Math.ceil
  , vs = Sn.ReactCurrentDispatcher
  , yd = Sn.ReactCurrentOwner
  , wt = Sn.ReactCurrentBatchConfig
  , ne = 0
  , Oe = null
  , je = null
  , Ae = 0
  , ot = 0
  , fo = lr(0)
  , Me = 0
  , Ui = null
  , Or = 0
  , Bs = 0
  , xd = 0
  , Ci = null
  , Ze = null
  , wd = 0
  , $o = 1 / 0
  , cn = null
  , ys = !1
  , nu = null
  , Xn = null
  , Ca = !1
  , Vn = null
  , xs = 0
  , Ei = 0
  , ru = null
  , Va = -1
  , Ha = 0;
function qe() {
    return ne & 6 ? Pe() : Va !== -1 ? Va : Va = Pe()
}
function Zn(e) {
    return e.mode & 1 ? ne & 2 && Ae !== 0 ? Ae & -Ae : O1.transition !== null ? (Ha === 0 && (Ha = wh()),
    Ha) : (e = le,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Th(e.type)),
    e) : 1
}
function It(e, t, n, r) {
    if (50 < Ei)
        throw Ei = 0,
        ru = null,
        Error(R(185));
    Zi(e, n, r),
    (!(ne & 2) || e !== Oe) && (e === Oe && (!(ne & 2) && (Bs |= n),
    Me === 4 && In(e, Ae)),
    nt(e, r),
    n === 1 && ne === 0 && !(t.mode & 1) && ($o = Pe() + 500,
    Fs && cr()))
}
function nt(e, t) {
    var n = e.callbackNode;
    Ow(e, t);
    var r = ns(e, e === Oe ? Ae : 0);
    if (r === 0)
        n !== null && kf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && kf(n),
        t === 1)
            e.tag === 0 ? D1(vp.bind(null, e)) : Yh(vp.bind(null, e)),
            P1(function() {
                !(ne & 6) && cr()
            }),
            n = null;
        else {
            switch (bh(r)) {
            case 1:
                n = Yu;
                break;
            case 4:
                n = yh;
                break;
            case 16:
                n = ts;
                break;
            case 536870912:
                n = xh;
                break;
            default:
                n = ts
            }
            n = Vg(n, Lg.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Lg(e, t) {
    if (Va = -1,
    Ha = 0,
    ne & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if (yo() && e.callbackNode !== n)
        return null;
    var r = ns(e, e === Oe ? Ae : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ws(e, r);
    else {
        t = r;
        var o = ne;
        ne |= 2;
        var i = Fg();
        (Oe !== e || Ae !== t) && (cn = null,
        $o = Pe() + 500,
        Pr(e, t));
        do
            try {
                J1();
                break
            } catch (s) {
                zg(e, s)
            }
        while (!0);
        id(),
        vs.current = i,
        ne = o,
        je !== null ? t = 0 : (Oe = null,
        Ae = 0,
        t = Me)
    }
    if (t !== 0) {
        if (t === 2 && (o = Rc(e),
        o !== 0 && (r = o,
        t = ou(e, o))),
        t === 1)
            throw n = Ui,
            Pr(e, 0),
            In(e, r),
            nt(e, Pe()),
            n;
        if (t === 6)
            In(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !X1(o) && (t = ws(e, r),
            t === 2 && (i = Rc(e),
            i !== 0 && (r = i,
            t = ou(e, i))),
            t === 1))
                throw n = Ui,
                Pr(e, 0),
                In(e, r),
                nt(e, Pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                vr(e, Ze, cn);
                break;
            case 3:
                if (In(e, r),
                (r & 130023424) === r && (t = wd + 500 - Pe(),
                10 < t)) {
                    if (ns(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        qe(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = zc(vr.bind(null, e, Ze, cn), t);
                    break
                }
                vr(e, Ze, cn);
                break;
            case 4:
                if (In(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var a = 31 - At(r);
                    i = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    r &= ~i
                }
                if (r = o,
                r = Pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * G1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = zc(vr.bind(null, e, Ze, cn), r);
                    break
                }
                vr(e, Ze, cn);
                break;
            case 5:
                vr(e, Ze, cn);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return nt(e, Pe()),
    e.callbackNode === n ? Lg.bind(null, e) : null
}
function ou(e, t) {
    var n = Ci;
    return e.current.memoizedState.isDehydrated && (Pr(e, t).flags |= 256),
    e = ws(e, t),
    e !== 2 && (t = Ze,
    Ze = n,
    t !== null && iu(t)),
    e
}
function iu(e) {
    Ze === null ? Ze = e : Ze.push.apply(Ze, e)
}
function X1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Lt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function In(e, t) {
    for (t &= ~xd,
    t &= ~Bs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - At(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function vp(e) {
    if (ne & 6)
        throw Error(R(327));
    yo();
    var t = ns(e, 0);
    if (!(t & 1))
        return nt(e, Pe()),
        null;
    var n = ws(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Rc(e);
        r !== 0 && (t = r,
        n = ou(e, r))
    }
    if (n === 1)
        throw n = Ui,
        Pr(e, 0),
        In(e, t),
        nt(e, Pe()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    vr(e, Ze, cn),
    nt(e, Pe()),
    null
}
function bd(e, t) {
    var n = ne;
    ne |= 1;
    try {
        return e(t)
    } finally {
        ne = n,
        ne === 0 && ($o = Pe() + 500,
        Fs && cr())
    }
}
function _r(e) {
    Vn !== null && Vn.tag === 0 && !(ne & 6) && yo();
    var t = ne;
    ne |= 1;
    var n = wt.transition
      , r = le;
    try {
        if (wt.transition = null,
        le = 1,
        e)
            return e()
    } finally {
        le = r,
        wt.transition = n,
        ne = t,
        !(ne & 6) && cr()
    }
}
function Sd() {
    ot = fo.current,
    ge(fo)
}
function Pr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    T1(n)),
    je !== null)
        for (n = je.return; n !== null; ) {
            var r = n;
            switch (nd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ss();
                break;
            case 3:
                zo(),
                ge(et),
                ge(Ve),
                dd();
                break;
            case 5:
                ud(r);
                break;
            case 4:
                zo();
                break;
            case 13:
                ge(be);
                break;
            case 19:
                ge(be);
                break;
            case 10:
                ad(r.type._context);
                break;
            case 22:
            case 23:
                Sd()
            }
            n = n.return
        }
    if (Oe = e,
    je = e = Jn(e.current, null),
    Ae = ot = t,
    Me = 0,
    Ui = null,
    xd = Bs = Or = 0,
    Ze = Ci = null,
    wr !== null) {
        for (t = 0; t < wr.length; t++)
            if (n = wr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = o,
                    r.next = a
                }
                n.pending = r
            }
        wr = null
    }
    return e
}
function zg(e, t) {
    do {
        var n = je;
        try {
            if (id(),
            Wa.current = gs,
            hs) {
                for (var r = Se.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                hs = !1
            }
            if (Dr = 0,
            De = Re = Se = null,
            bi = !1,
            Fi = 0,
            yd.current = null,
            n === null || n.return === null) {
                Me = 1,
                Ui = t,
                je = null;
                break
            }
            e: {
                var i = e
                  , a = n.return
                  , s = n
                  , l = t;
                if (t = Ae,
                s.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = s
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var y = d.alternate;
                        y ? (d.updateQueue = y.updateQueue,
                        d.memoizedState = y.memoizedState,
                        d.lanes = y.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var g = op(a);
                    if (g !== null) {
                        g.flags &= -257,
                        ip(g, a, s, i, t),
                        g.mode & 1 && rp(i, u, t),
                        t = g,
                        l = u;
                        var b = t.updateQueue;
                        if (b === null) {
                            var h = new Set;
                            h.add(l),
                            t.updateQueue = h
                        } else
                            b.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            rp(i, u, t),
                            Cd();
                            break e
                        }
                        l = Error(R(426))
                    }
                } else if (xe && s.mode & 1) {
                    var w = op(a);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        ip(w, a, s, i, t),
                        rd(Fo(l, s));
                        break e
                    }
                }
                i = l = Fo(l, s),
                Me !== 4 && (Me = 2),
                Ci === null ? Ci = [i] : Ci.push(i),
                i = a;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var v = bg(i, l, t);
                        Xf(i, v);
                        break e;
                    case 1:
                        s = l;
                        var m = i.type
                          , x = i.stateNode;
                        if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Xn === null || !Xn.has(x)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = Sg(i, s, t);
                            Xf(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Wg(n)
        } catch (C) {
            t = C,
            je === n && n !== null && (je = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Fg() {
    var e = vs.current;
    return vs.current = gs,
    e === null ? gs : e
}
function Cd() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    Oe === null || !(Or & 268435455) && !(Bs & 268435455) || In(Oe, Ae)
}
function ws(e, t) {
    var n = ne;
    ne |= 2;
    var r = Fg();
    (Oe !== e || Ae !== t) && (cn = null,
    Pr(e, t));
    do
        try {
            Z1();
            break
        } catch (o) {
            zg(e, o)
        }
    while (!0);
    if (id(),
    ne = n,
    vs.current = r,
    je !== null)
        throw Error(R(261));
    return Oe = null,
    Ae = 0,
    Me
}
function Z1() {
    for (; je !== null; )
        $g(je)
}
function J1() {
    for (; je !== null && !Ew(); )
        $g(je)
}
function $g(e) {
    var t = Bg(e.alternate, e, ot);
    e.memoizedProps = e.pendingProps,
    t === null ? Wg(e) : je = t,
    yd.current = null
}
function Wg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Y1(n, t),
            n !== null) {
                n.flags &= 32767,
                je = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Me = 6,
                je = null;
                return
            }
        } else if (n = H1(n, t, ot),
        n !== null) {
            je = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            je = t;
            return
        }
        je = t = e
    } while (t !== null);
    Me === 0 && (Me = 5)
}
function vr(e, t, n) {
    var r = le
      , o = wt.transition;
    try {
        wt.transition = null,
        le = 1,
        eb(e, t, n, r)
    } finally {
        wt.transition = o,
        le = r
    }
    return null
}
function eb(e, t, n, r) {
    do
        yo();
    while (Vn !== null);
    if (ne & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (_w(e, i),
    e === Oe && (je = Oe = null,
    Ae = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ca || (Ca = !0,
    Vg(ts, function() {
        return yo(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = wt.transition,
        wt.transition = null;
        var a = le;
        le = 1;
        var s = ne;
        ne |= 4,
        yd.current = null,
        q1(e, n),
        Ag(n, e),
        w1(Ic),
        rs = !!Ac,
        Ic = Ac = null,
        e.current = n,
        K1(n),
        kw(),
        ne = s,
        le = a,
        wt.transition = i
    } else
        e.current = n;
    if (Ca && (Ca = !1,
    Vn = e,
    xs = o),
    i = e.pendingLanes,
    i === 0 && (Xn = null),
    Pw(n.stateNode),
    nt(e, Pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ys)
        throw ys = !1,
        e = nu,
        nu = null,
        e;
    return xs & 1 && e.tag !== 0 && yo(),
    i = e.pendingLanes,
    i & 1 ? e === ru ? Ei++ : (Ei = 0,
    ru = e) : Ei = 0,
    cr(),
    null
}
function yo() {
    if (Vn !== null) {
        var e = bh(xs)
          , t = wt.transition
          , n = le;
        try {
            if (wt.transition = null,
            le = 16 > e ? 16 : e,
            Vn === null)
                var r = !1;
            else {
                if (e = Vn,
                Vn = null,
                xs = 0,
                ne & 6)
                    throw Error(R(331));
                var o = ne;
                for (ne |= 4,
                z = e.current; z !== null; ) {
                    var i = z
                      , a = i.child;
                    if (z.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (z = u; z !== null; ) {
                                    var d = z;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Si(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        z = f;
                                    else
                                        for (; z !== null; ) {
                                            d = z;
                                            var y = d.sibling
                                              , g = d.return;
                                            if (Dg(d),
                                            d === u) {
                                                z = null;
                                                break
                                            }
                                            if (y !== null) {
                                                y.return = g,
                                                z = y;
                                                break
                                            }
                                            z = g
                                        }
                                }
                            }
                            var b = i.alternate;
                            if (b !== null) {
                                var h = b.child;
                                if (h !== null) {
                                    b.child = null;
                                    do {
                                        var w = h.sibling;
                                        h.sibling = null,
                                        h = w
                                    } while (h !== null)
                                }
                            }
                            z = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null)
                        a.return = i,
                        z = a;
                    else
                        e: for (; z !== null; ) {
                            if (i = z,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Si(9, i, i.return)
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return,
                                z = v;
                                break e
                            }
                            z = i.return
                        }
                }
                var m = e.current;
                for (z = m; z !== null; ) {
                    a = z;
                    var x = a.child;
                    if (a.subtreeFlags & 2064 && x !== null)
                        x.return = a,
                        z = x;
                    else
                        e: for (a = m; z !== null; ) {
                            if (s = z,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Us(9, s)
                                    }
                                } catch (C) {
                                    Te(s, s.return, C)
                                }
                            if (s === a) {
                                z = null;
                                break e
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return,
                                z = S;
                                break e
                            }
                            z = s.return
                        }
                }
                if (ne = o,
                cr(),
                en && typeof en.onPostCommitFiberRoot == "function")
                    try {
                        en.onPostCommitFiberRoot(_s, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            le = n,
            wt.transition = t
        }
    }
    return !1
}
function yp(e, t, n) {
    t = Fo(n, t),
    t = bg(e, t, 1),
    e = Gn(e, t, 1),
    t = qe(),
    e !== null && (Zi(e, 1, t),
    nt(e, t))
}
function Te(e, t, n) {
    if (e.tag === 3)
        yp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                yp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xn === null || !Xn.has(r))) {
                    e = Fo(n, e),
                    e = Sg(t, e, 1),
                    t = Gn(t, e, 1),
                    e = qe(),
                    t !== null && (Zi(t, 1, e),
                    nt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function tb(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = qe(),
    e.pingedLanes |= e.suspendedLanes & n,
    Oe === e && (Ae & n) === n && (Me === 4 || Me === 3 && (Ae & 130023424) === Ae && 500 > Pe() - wd ? Pr(e, 0) : xd |= n),
    nt(e, t)
}
function Ug(e, t) {
    t === 0 && (e.mode & 1 ? (t = pa,
    pa <<= 1,
    !(pa & 130023424) && (pa = 4194304)) : t = 1);
    var n = qe();
    e = vn(e, t),
    e !== null && (Zi(e, t, n),
    nt(e, n))
}
function nb(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ug(e, n)
}
function rb(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    r !== null && r.delete(t),
    Ug(e, n)
}
var Bg;
Bg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || et.current)
            Je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Je = !1,
                V1(e, t, n);
            Je = !!(e.flags & 131072)
        }
    else
        Je = !1,
        xe && t.flags & 1048576 && Qh(t, us, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ba(e, t),
        e = t.pendingProps;
        var o = Ao(t, Ve.current);
        vo(t, n),
        o = pd(null, t, r, e, o, n);
        var i = md();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        tt(r) ? (i = !0,
        ls(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        ld(t),
        o.updater = Ws,
        t.stateNode = o,
        o._reactInternals = t,
        Hc(t, r, e, n),
        t = qc(null, t, r, !0, i, n)) : (t.tag = 0,
        xe && i && td(t),
        Ye(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ba(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = ib(r),
            e = jt(r, e),
            o) {
            case 0:
                t = Qc(null, t, r, e, n);
                break e;
            case 1:
                t = lp(null, t, r, e, n);
                break e;
            case 11:
                t = ap(null, t, r, e, n);
                break e;
            case 14:
                t = sp(null, t, r, jt(r.type, e), n);
                break e
            }
            throw Error(R(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : jt(r, o),
        Qc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : jt(r, o),
        lp(e, t, r, o, n);
    case 3:
        e: {
            if (Ng(t),
            e === null)
                throw Error(R(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Jh(e, t),
            ps(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Fo(Error(R(423)), t),
                    t = cp(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Fo(Error(R(424)), t),
                    t = cp(e, t, r, n, o);
                    break e
                } else
                    for (at = Kn(t.stateNode.containerInfo.firstChild),
                    st = t,
                    xe = !0,
                    _t = null,
                    n = Xh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Io(),
                r === o) {
                    t = yn(e, t, n);
                    break e
                }
                Ye(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return eg(t),
        e === null && Uc(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        a = o.children,
        Lc(r, o) ? a = null : i !== null && Lc(r, i) && (t.flags |= 32),
        kg(e, t),
        Ye(e, t, a, n),
        t.child;
    case 6:
        return e === null && Uc(t),
        null;
    case 13:
        return Tg(e, t, n);
    case 4:
        return cd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Lo(t, null, r, n) : Ye(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : jt(r, o),
        ap(e, t, r, o, n);
    case 7:
        return Ye(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ye(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ye(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            a = o.value,
            fe(ds, r._currentValue),
            r._currentValue = a,
            i !== null)
                if (Lt(i.value, a)) {
                    if (i.children === o.children && !et.current) {
                        t = yn(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var s = i.dependencies;
                        if (s !== null) {
                            a = i.child;
                            for (var l = s.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = mn(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    Bc(i.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return,
                            a === null)
                                throw Error(R(341));
                            a.lanes |= n,
                            s = a.alternate,
                            s !== null && (s.lanes |= n),
                            Bc(a, n, t),
                            a = i.sibling
                        } else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (i = a.sibling,
                                i !== null) {
                                    i.return = a.return,
                                    a = i;
                                    break
                                }
                                a = a.return
                            }
                        i = a
                    }
            Ye(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        vo(t, n),
        o = bt(o),
        r = r(o),
        t.flags |= 1,
        Ye(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = jt(r, t.pendingProps),
        o = jt(r.type, o),
        sp(e, t, r, o, n);
    case 15:
        return Cg(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : jt(r, o),
        Ba(e, t),
        t.tag = 1,
        tt(r) ? (e = !0,
        ls(t)) : e = !1,
        vo(t, n),
        wg(t, r, o),
        Hc(t, r, o, n),
        qc(null, t, r, !0, e, n);
    case 19:
        return Pg(e, t, n);
    case 22:
        return Eg(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function Vg(e, t) {
    return vh(e, t)
}
function ob(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function xt(e, t, n, r) {
    return new ob(e,t,n,r)
}
function Ed(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function ib(e) {
    if (typeof e == "function")
        return Ed(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Bu)
            return 11;
        if (e === Vu)
            return 14
    }
    return 2
}
function Jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = xt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ya(e, t, n, r, o, i) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        Ed(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case to:
            return jr(n.children, o, i, t);
        case Uu:
            a = 8,
            o |= 8;
            break;
        case hc:
            return e = xt(12, n, t, o | 2),
            e.elementType = hc,
            e.lanes = i,
            e;
        case gc:
            return e = xt(13, n, t, o),
            e.elementType = gc,
            e.lanes = i,
            e;
        case vc:
            return e = xt(19, n, t, o),
            e.elementType = vc,
            e.lanes = i,
            e;
        case eh:
            return Vs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Zm:
                    a = 10;
                    break e;
                case Jm:
                    a = 9;
                    break e;
                case Bu:
                    a = 11;
                    break e;
                case Vu:
                    a = 14;
                    break e;
                case On:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = xt(a, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function jr(e, t, n, r) {
    return e = xt(7, e, r, t),
    e.lanes = n,
    e
}
function Vs(e, t, n, r) {
    return e = xt(22, e, r, t),
    e.elementType = eh,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Gl(e, t, n) {
    return e = xt(6, e, null, t),
    e.lanes = n,
    e
}
function Xl(e, t, n) {
    return t = xt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function ab(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ml(0),
    this.expirationTimes = Ml(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ml(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function kd(e, t, n, r, o, i, a, s, l) {
    return e = new ab(e,t,n,s,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = xt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ld(i),
    e
}
function sb(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: eo,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Hg(e) {
    if (!e)
        return or;
    e = e._reactInternals;
    e: {
        if (Wr(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (tt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (tt(n))
            return Hh(e, n, t)
    }
    return t
}
function Yg(e, t, n, r, o, i, a, s, l) {
    return e = kd(n, r, !0, e, o, i, a, s, l),
    e.context = Hg(null),
    n = e.current,
    r = qe(),
    o = Zn(n),
    i = mn(r, o),
    i.callback = t ?? null,
    Gn(n, i, o),
    e.current.lanes = o,
    Zi(e, o, r),
    nt(e, r),
    e
}
function Hs(e, t, n, r) {
    var o = t.current
      , i = qe()
      , a = Zn(o);
    return n = Hg(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = mn(i, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Gn(o, t, a),
    e !== null && (It(e, o, a, i),
    $a(e, o, a)),
    a
}
function bs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function xp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Nd(e, t) {
    xp(e, t),
    (e = e.alternate) && xp(e, t)
}
function lb() {
    return null
}
var Qg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Td(e) {
    this._internalRoot = e
}
Ys.prototype.render = Td.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    Hs(e, t, null, null)
}
;
Ys.prototype.unmount = Td.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        _r(function() {
            Hs(null, e, null, null)
        }),
        t[gn] = null
    }
}
;
function Ys(e) {
    this._internalRoot = e
}
Ys.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Eh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < An.length && t !== 0 && t < An[n].priority; n++)
            ;
        An.splice(n, 0, e),
        n === 0 && Nh(e)
    }
}
;
function Pd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Qs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function wp() {}
function cb(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = bs(a);
                i.call(u)
            }
        }
        var a = Yg(t, r, e, 0, null, !1, !1, "", wp);
        return e._reactRootContainer = a,
        e[gn] = a.current,
        _i(e.nodeType === 8 ? e.parentNode : e),
        _r(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = bs(l);
            s.call(u)
        }
    }
    var l = kd(e, 0, !1, null, null, !1, !1, "", wp);
    return e._reactRootContainer = l,
    e[gn] = l.current,
    _i(e.nodeType === 8 ? e.parentNode : e),
    _r(function() {
        Hs(t, l, n, r)
    }),
    l
}
function qs(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var l = bs(a);
                s.call(l)
            }
        }
        Hs(t, a, e, o)
    } else
        a = cb(n, t, e, o, r);
    return bs(a)
}
Sh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = pi(t.pendingLanes);
            n !== 0 && (Qu(t, n | 1),
            nt(t, Pe()),
            !(ne & 6) && ($o = Pe() + 500,
            cr()))
        }
        break;
    case 13:
        _r(function() {
            var r = vn(e, 1);
            if (r !== null) {
                var o = qe();
                It(r, e, 1, o)
            }
        }),
        Nd(e, 1)
    }
}
;
qu = function(e) {
    if (e.tag === 13) {
        var t = vn(e, 134217728);
        if (t !== null) {
            var n = qe();
            It(t, e, 134217728, n)
        }
        Nd(e, 134217728)
    }
}
;
Ch = function(e) {
    if (e.tag === 13) {
        var t = Zn(e)
          , n = vn(e, t);
        if (n !== null) {
            var r = qe();
            It(n, e, t, r)
        }
        Nd(e, t)
    }
}
;
Eh = function() {
    return le
}
;
kh = function(e, t) {
    var n = le;
    try {
        return le = e,
        t()
    } finally {
        le = n
    }
}
;
Tc = function(e, t, n) {
    switch (t) {
    case "input":
        if (wc(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = zs(r);
                    if (!o)
                        throw Error(R(90));
                    nh(r),
                    wc(r, o)
                }
            }
        }
        break;
    case "textarea":
        oh(e, n);
        break;
    case "select":
        t = n.value,
        t != null && po(e, !!n.multiple, t, !1)
    }
}
;
dh = bd;
fh = _r;
var ub = {
    usingClientEntryPoint: !1,
    Events: [ea, io, zs, ch, uh, bd]
}
  , si = {
    findFiberByHostInstance: xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , db = {
    bundleType: si.bundleType,
    version: si.version,
    rendererPackageName: si.rendererPackageName,
    rendererConfig: si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = hh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: si.findFiberByHostInstance || lb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ea.isDisabled && Ea.supportsFiber)
        try {
            _s = Ea.inject(db),
            en = Ea
        } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ub;
ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pd(t))
        throw Error(R(200));
    return sb(e, t, null, n)
}
;
ut.createRoot = function(e, t) {
    if (!Pd(e))
        throw Error(R(299));
    var n = !1
      , r = ""
      , o = Qg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = kd(e, 1, !1, null, null, n, !1, r, o),
    e[gn] = t.current,
    _i(e.nodeType === 8 ? e.parentNode : e),
    new Td(t)
}
;
ut.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = hh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ut.flushSync = function(e) {
    return _r(e)
}
;
ut.hydrate = function(e, t, n) {
    if (!Qs(t))
        throw Error(R(200));
    return qs(null, e, t, !0, n)
}
;
ut.hydrateRoot = function(e, t, n) {
    if (!Pd(e))
        throw Error(R(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , a = Qg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = Yg(t, null, e, 1, n ?? null, o, !1, i, a),
    e[gn] = t.current,
    _i(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ys(t)
}
;
ut.render = function(e, t, n) {
    if (!Qs(t))
        throw Error(R(200));
    return qs(null, e, t, !1, n)
}
;
ut.unmountComponentAtNode = function(e) {
    if (!Qs(e))
        throw Error(R(40));
    return e._reactRootContainer ? (_r(function() {
        qs(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[gn] = null
        })
    }),
    !0) : !1
}
;
ut.unstable_batchedUpdates = bd;
ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Qs(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return qs(e, t, n, !1, r)
}
;
ut.version = "18.3.1-next-f1338f8080-20240426";
function qg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg)
        } catch (e) {
            console.error(e)
        }
}
qg(),
qm.exports = ut;
var Ur = qm.exports;
const Kg = Im(Ur);
var Gg, bp = Ur;
Gg = bp.createRoot,
bp.hydrateRoot;
const fb = 1
  , pb = 1e6;
let Zl = 0;
function mb() {
    return Zl = (Zl + 1) % Number.MAX_SAFE_INTEGER,
    Zl.toString()
}
const Jl = new Map
  , Sp = e => {
    if (Jl.has(e))
        return;
    const t = setTimeout( () => {
        Jl.delete(e),
        ki({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , pb);
    Jl.set(e, t)
}
  , hb = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, fb)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Sp(n) : e.toasts.forEach(r => {
                Sp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Qa = [];
let qa = {
    toasts: []
};
function ki(e) {
    qa = hb(qa, e),
    Qa.forEach(t => {
        t(qa)
    }
    )
}
function nn({...e}) {
    const t = mb()
      , n = o => ki({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => ki({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ki({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function gb() {
    const [e,t] = p.useState(qa);
    return p.useEffect( () => (Qa.push(t),
    () => {
        const n = Qa.indexOf(t);
        n > -1 && Qa.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: nn,
        dismiss: n => ki({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function K(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Cp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Xg(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Cp(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Cp(e[o], null)
                }
            }
    }
}
function ue(...e) {
    return p.useCallback(Xg(...e), e)
}
function vb(e, t) {
    const n = p.createContext(t)
      , r = i => {
        const {children: a, ...s} = i
          , l = p.useMemo( () => s, Object.values(s));
        return c.jsx(n.Provider, {
            value: l,
            children: a
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(i) {
        const a = p.useContext(n);
        if (a)
            return a;
        if (t !== void 0)
            return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function Br(e, t=[]) {
    let n = [];
    function r(i, a) {
        const s = p.createContext(a)
          , l = n.length;
        n = [...n, a];
        const u = f => {
            var v;
            const {scope: y, children: g, ...b} = f
              , h = ((v = y == null ? void 0 : y[e]) == null ? void 0 : v[l]) || s
              , w = p.useMemo( () => b, Object.values(b));
            return c.jsx(h.Provider, {
                value: w,
                children: g
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(f, y) {
            var h;
            const g = ((h = y == null ? void 0 : y[e]) == null ? void 0 : h[l]) || s
              , b = p.useContext(g);
            if (b)
                return b;
            if (a !== void 0)
                return a;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(a => p.createContext(a));
        return function(s) {
            const l = (s == null ? void 0 : s[e]) || i;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: l
                }
            }), [s, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, yb(o, ...t)]
}
function yb(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const a = r.reduce( (s, {useScope: l, scopeName: u}) => {
                const f = l(i)[`__scope${u}`];
                return {
                    ...s,
                    ...f
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Wo(e) {
    const t = wb(e)
      , n = p.forwardRef( (r, o) => {
        const {children: i, ...a} = r
          , s = p.Children.toArray(i)
          , l = s.find(Sb);
        if (l) {
            const u = l.props.children
              , d = s.map(f => f === l ? p.Children.count(u) > 1 ? p.Children.only(null) : p.isValidElement(u) ? u.props.children : null : f);
            return c.jsx(t, {
                ...a,
                ref: o,
                children: p.isValidElement(u) ? p.cloneElement(u, void 0, d) : null
            })
        }
        return c.jsx(t, {
            ...a,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var xb = Wo("Slot");
function wb(e) {
    const t = p.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (p.isValidElement(o)) {
            const a = Eb(o)
              , s = Cb(i, o.props);
            return o.type !== p.Fragment && (s.ref = r ? Xg(r, a) : a),
            p.cloneElement(o, s)
        }
        return p.Children.count(o) > 1 ? p.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Zg = Symbol("radix.slottable");
function bb(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Zg,
    t
}
function Sb(e) {
    return p.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Zg
}
function Cb(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
            const l = i(...s);
            return o(...s),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Eb(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Jg(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Br(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = h => {
        const {scope: w, children: v} = h
          , m = O.useRef(null)
          , x = O.useRef(new Map).current;
        return c.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: m,
            children: v
        })
    }
    ;
    a.displayName = t;
    const s = e + "CollectionSlot"
      , l = Wo(s)
      , u = O.forwardRef( (h, w) => {
        const {scope: v, children: m} = h
          , x = i(s, v)
          , S = ue(w, x.collectionRef);
        return c.jsx(l, {
            ref: S,
            children: m
        })
    }
    );
    u.displayName = s;
    const d = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , y = Wo(d)
      , g = O.forwardRef( (h, w) => {
        const {scope: v, children: m, ...x} = h
          , S = O.useRef(null)
          , C = ue(w, S)
          , k = i(d, v);
        return O.useEffect( () => (k.itemMap.set(S, {
            ref: S,
            ...x
        }),
        () => void k.itemMap.delete(S))),
        c.jsx(y, {
            [f]: "",
            ref: C,
            children: m
        })
    }
    );
    g.displayName = d;
    function b(h) {
        const w = i(e + "CollectionConsumer", h);
        return O.useCallback( () => {
            const m = w.collectionRef.current;
            if (!m)
                return [];
            const x = Array.from(m.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (k, E) => x.indexOf(k.ref.current) - x.indexOf(E.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: a,
        Slot: u,
        ItemSlot: g
    }, b, r]
}
var kb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Z = kb.reduce( (e, t) => {
    const n = Wo(`Primitive.${t}`)
      , r = p.forwardRef( (o, i) => {
        const {asChild: a, ...s} = o
          , l = a ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...s,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function ev(e, t) {
    e && Ur.flushSync( () => e.dispatchEvent(t))
}
function zt(e) {
    const t = p.useRef(e);
    return p.useEffect( () => {
        t.current = e
    }
    ),
    p.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Nb(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = zt(e);
    p.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Tb = "DismissableLayer", au = "dismissableLayer.update", Pb = "dismissableLayer.pointerDownOutside", jb = "dismissableLayer.focusOutside", Ep, tv = p.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), na = p.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l} = e
      , u = p.useContext(tv)
      , [d,f] = p.useState(null)
      , y = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,g] = p.useState({})
      , b = ue(t, E => f(E))
      , h = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , v = h.indexOf(w)
      , m = d ? h.indexOf(d) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = m >= v
      , C = Mb(E => {
        const j = E.target
          , M = [...u.branches].some(D => D.contains(j));
        !S || M || (o == null || o(E),
        a == null || a(E),
        E.defaultPrevented || s == null || s())
    }
    , y)
      , k = Db(E => {
        const j = E.target;
        [...u.branches].some(D => D.contains(j)) || (i == null || i(E),
        a == null || a(E),
        E.defaultPrevented || s == null || s())
    }
    , y);
    return Nb(E => {
        m === u.layers.size - 1 && (r == null || r(E),
        !E.defaultPrevented && s && (E.preventDefault(),
        s()))
    }
    , y),
    p.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ep = y.body.style.pointerEvents,
            y.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            kp(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = Ep)
            }
    }
    , [d, y, n, u]),
    p.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        kp())
    }
    , [d, u]),
    p.useEffect( () => {
        const E = () => g({});
        return document.addEventListener(au, E),
        () => document.removeEventListener(au, E)
    }
    , []),
    c.jsx(Z.div, {
        ...l,
        ref: b,
        style: {
            pointerEvents: x ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: K(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: K(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: K(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
na.displayName = Tb;
var Rb = "DismissableLayerBranch"
  , nv = p.forwardRef( (e, t) => {
    const n = p.useContext(tv)
      , r = p.useRef(null)
      , o = ue(t, r);
    return p.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    c.jsx(Z.div, {
        ...e,
        ref: o
    })
}
);
nv.displayName = Rb;
function Mb(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = zt(e)
      , r = p.useRef(!1)
      , o = p.useRef( () => {}
    );
    return p.useEffect( () => {
        const i = s => {
            if (s.target && !r.current) {
                let l = function() {
                    rv(Pb, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: s
                };
                s.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , a = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(a),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Db(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = zt(e)
      , r = p.useRef(!1);
    return p.useEffect( () => {
        const o = i => {
            i.target && !r.current && rv(jb, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function kp() {
    const e = new CustomEvent(au);
    document.dispatchEvent(e)
}
function rv(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? ev(o, i) : o.dispatchEvent(i)
}
var Ob = na
  , _b = nv
  , Le = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {}
  , Ab = "Portal"
  , Ks = p.forwardRef( (e, t) => {
    var s;
    const {container: n, ...r} = e
      , [o,i] = p.useState(!1);
    Le( () => i(!0), []);
    const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
    return a ? Kg.createPortal(c.jsx(Z.div, {
        ...r,
        ref: t
    }), a) : null
}
);
Ks.displayName = Ab;
function Ib(e, t) {
    return p.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Vr = e => {
    const {present: t, children: n} = e
      , r = Lb(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : p.Children.only(n)
      , i = ue(r.ref, zb(o));
    return typeof n == "function" || r.isPresent ? p.cloneElement(o, {
        ref: i
    }) : null
}
;
Vr.displayName = "Presence";
function Lb(e) {
    const [t,n] = p.useState()
      , r = p.useRef(null)
      , o = p.useRef(e)
      , i = p.useRef("none")
      , a = e ? "mounted" : "unmounted"
      , [s,l] = Ib(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return p.useEffect( () => {
        const u = ka(r.current);
        i.current = s === "mounted" ? u : "none"
    }
    , [s]),
    Le( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const y = i.current
              , g = ka(u);
            e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && y !== g ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    Le( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , f = g => {
                const h = ka(r.current).includes(g.animationName);
                if (g.target === t && h && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , y = g => {
                g.target === t && (i.current = ka(r.current))
            }
            ;
            return t.addEventListener("animationstart", y),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", y),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: p.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ka(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function zb(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Fb = zu[" useInsertionEffect ".trim().toString()] || Le;
function Bi({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,a] = $b({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , l = s ? e : o;
    {
        const d = p.useRef(e !== void 0);
        p.useEffect( () => {
            const f = d.current;
            f !== s && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = s
        }
        , [s, r])
    }
    const u = p.useCallback(d => {
        var f;
        if (s) {
            const y = Wb(d) ? d(e) : d;
            y !== e && ((f = a.current) == null || f.call(a, y))
        } else
            i(d)
    }
    , [s, e, i, a]);
    return [l, u]
}
function $b({defaultProp: e, onChange: t}) {
    const [n,r] = p.useState(e)
      , o = p.useRef(n)
      , i = p.useRef(t);
    return Fb( () => {
        i.current = t
    }
    , [t]),
    p.useEffect( () => {
        var a;
        o.current !== n && ((a = i.current) == null || a.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function Wb(e) {
    return typeof e == "function"
}
var ov = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Ub = "VisuallyHidden"
  , Gs = p.forwardRef( (e, t) => c.jsx(Z.span, {
    ...e,
    ref: t,
    style: {
        ...ov,
        ...e.style
    }
}));
Gs.displayName = Ub;
var Bb = Gs
  , jd = "ToastProvider"
  , [Rd,Vb,Hb] = Jg("Toast")
  , [iv,oR] = Br("Toast", [Hb])
  , [Yb,Xs] = iv(jd)
  , av = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: a} = e
      , [s,l] = p.useState(null)
      , [u,d] = p.useState(0)
      , f = p.useRef(!1)
      , y = p.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${jd}\`. Expected non-empty \`string\`.`),
    c.jsx(Rd.Provider, {
        scope: t,
        children: c.jsx(Yb, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: s,
            onViewportChange: l,
            onToastAdd: p.useCallback( () => d(g => g + 1), []),
            onToastRemove: p.useCallback( () => d(g => g - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: y,
            children: a
        })
    })
}
;
av.displayName = jd;
var sv = "ToastViewport"
  , Qb = ["F8"]
  , su = "toast.viewportPause"
  , lu = "toast.viewportResume"
  , lv = p.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Qb, label: o="Notifications ({hotkey})", ...i} = e
      , a = Xs(sv, n)
      , s = Vb(n)
      , l = p.useRef(null)
      , u = p.useRef(null)
      , d = p.useRef(null)
      , f = p.useRef(null)
      , y = ue(t, f, a.onViewportChange)
      , g = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = a.toastCount > 0;
    p.useEffect( () => {
        const w = v => {
            var x;
            r.length !== 0 && r.every(S => v[S] || v.code === S) && ((x = f.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    p.useEffect( () => {
        const w = l.current
          , v = f.current;
        if (b && w && v) {
            const m = () => {
                if (!a.isClosePausedRef.current) {
                    const k = new CustomEvent(su);
                    v.dispatchEvent(k),
                    a.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (a.isClosePausedRef.current) {
                    const k = new CustomEvent(lu);
                    v.dispatchEvent(k),
                    a.isClosePausedRef.current = !1
                }
            }
              , S = k => {
                !w.contains(k.relatedTarget) && x()
            }
              , C = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", m),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", m),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [b, a.isClosePausedRef]);
    const h = p.useCallback( ({tabbingDirection: w}) => {
        const m = s().map(x => {
            const S = x.ref.current
              , C = [S, ...aS(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? m.reverse() : m).flat()
    }
    , [s]);
    return p.useEffect( () => {
        const w = f.current;
        if (w) {
            const v = m => {
                var C, k, E;
                const x = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !x) {
                    const j = document.activeElement
                      , M = m.shiftKey;
                    if (m.target === w && M) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const A = h({
                        tabbingDirection: M ? "backwards" : "forwards"
                    })
                      , B = A.findIndex(_ => _ === j);
                    ec(A.slice(B + 1)) ? m.preventDefault() : M ? (k = u.current) == null || k.focus() : (E = d.current) == null || E.focus()
                }
            }
            ;
            return w.addEventListener("keydown", v),
            () => w.removeEventListener("keydown", v)
        }
    }
    , [s, h]),
    c.jsxs(_b, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && c.jsx(cu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = h({
                    tabbingDirection: "forwards"
                });
                ec(w)
            }
        }), c.jsx(Rd.Slot, {
            scope: n,
            children: c.jsx(Z.ol, {
                tabIndex: -1,
                ...i,
                ref: y
            })
        }), b && c.jsx(cu, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = h({
                    tabbingDirection: "backwards"
                });
                ec(w)
            }
        })]
    })
}
);
lv.displayName = sv;
var cv = "ToastFocusProxy"
  , cu = p.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = Xs(cv, n);
    return c.jsx(Gs, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: a => {
            var u;
            const s = a.relatedTarget;
            !((u = i.viewport) != null && u.contains(s)) && r()
        }
    })
}
);
cu.displayName = cv;
var ra = "Toast"
  , qb = "toast.swipeStart"
  , Kb = "toast.swipeMove"
  , Gb = "toast.swipeCancel"
  , Xb = "toast.swipeEnd"
  , uv = p.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...a} = e
      , [s,l] = Bi({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: ra
    });
    return c.jsx(Vr, {
        present: n || s,
        children: c.jsx(eS, {
            open: s,
            ...a,
            ref: t,
            onClose: () => l(!1),
            onPause: zt(e.onPause),
            onResume: zt(e.onResume),
            onSwipeStart: K(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: K(e.onSwipeMove, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: K(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: K(e.onSwipeEnd, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
uv.displayName = ra;
var [Zb,Jb] = iv(ra, {
    onClose() {}
})
  , eS = p.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: a, onEscapeKeyDown: s, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: y, onSwipeEnd: g, ...b} = e
      , h = Xs(ra, n)
      , [w,v] = p.useState(null)
      , m = ue(t, _ => v(_))
      , x = p.useRef(null)
      , S = p.useRef(null)
      , C = o || h.duration
      , k = p.useRef(0)
      , E = p.useRef(C)
      , j = p.useRef(0)
      , {onToastAdd: M, onToastRemove: D} = h
      , $ = zt( () => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((H = h.viewport) == null || H.focus()),
        a()
    }
    )
      , A = p.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(j.current),
        k.current = new Date().getTime(),
        j.current = window.setTimeout($, _))
    }
    , [$]);
    p.useEffect( () => {
        const _ = h.viewport;
        if (_) {
            const H = () => {
                A(E.current),
                u == null || u()
            }
              , F = () => {
                const U = new Date().getTime() - k.current;
                E.current = E.current - U,
                window.clearTimeout(j.current),
                l == null || l()
            }
            ;
            return _.addEventListener(su, F),
            _.addEventListener(lu, H),
            () => {
                _.removeEventListener(su, F),
                _.removeEventListener(lu, H)
            }
        }
    }
    , [h.viewport, C, l, u, A]),
    p.useEffect( () => {
        i && !h.isClosePausedRef.current && A(C)
    }
    , [i, C, h.isClosePausedRef, A]),
    p.useEffect( () => (M(),
    () => D()), [M, D]);
    const B = p.useMemo( () => w ? vv(w) : null, [w]);
    return h.viewport ? c.jsxs(c.Fragment, {
        children: [B && c.jsx(tS, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: B
        }), c.jsx(Zb, {
            scope: n,
            onClose: $,
            children: Ur.createPortal(c.jsx(Rd.ItemSlot, {
                scope: n,
                children: c.jsx(Ob, {
                    asChild: !0,
                    onEscapeKeyDown: K(s, () => {
                        h.isFocusedToastEscapeKeyDownRef.current || $(),
                        h.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(Z.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": h.swipeDirection,
                        ...b,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: K(e.onKeyDown, _ => {
                            _.key === "Escape" && (s == null || s(_.nativeEvent),
                            _.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: K(e.onPointerDown, _ => {
                            _.button === 0 && (x.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }
                        ),
                        onPointerMove: K(e.onPointerMove, _ => {
                            if (!x.current)
                                return;
                            const H = _.clientX - x.current.x
                              , F = _.clientY - x.current.y
                              , U = !!S.current
                              , N = ["left", "right"].includes(h.swipeDirection)
                              , P = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max
                              , I = N ? P(0, H) : 0
                              , V = N ? 0 : P(0, F)
                              , W = _.pointerType === "touch" ? 10 : 2
                              , G = {
                                x: I,
                                y: V
                            }
                              , Y = {
                                originalEvent: _,
                                delta: G
                            };
                            U ? (S.current = G,
                            Na(Kb, f, Y, {
                                discrete: !1
                            })) : Np(G, h.swipeDirection, W) ? (S.current = G,
                            Na(qb, d, Y, {
                                discrete: !1
                            }),
                            _.target.setPointerCapture(_.pointerId)) : (Math.abs(H) > W || Math.abs(F) > W) && (x.current = null)
                        }
                        ),
                        onPointerUp: K(e.onPointerUp, _ => {
                            const H = S.current
                              , F = _.target;
                            if (F.hasPointerCapture(_.pointerId) && F.releasePointerCapture(_.pointerId),
                            S.current = null,
                            x.current = null,
                            H) {
                                const U = _.currentTarget
                                  , N = {
                                    originalEvent: _,
                                    delta: H
                                };
                                Np(H, h.swipeDirection, h.swipeThreshold) ? Na(Xb, g, N, {
                                    discrete: !0
                                }) : Na(Gb, y, N, {
                                    discrete: !0
                                }),
                                U.addEventListener("click", P => P.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), h.viewport)
        })]
    }) : null
}
)
  , tS = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Xs(ra, t)
      , [i,a] = p.useState(!1)
      , [s,l] = p.useState(!1);
    return oS( () => a(!0)),
    p.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    s ? null : c.jsx(Ks, {
        asChild: !0,
        children: c.jsx(Gs, {
            ...r,
            children: i && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , nS = "ToastTitle"
  , dv = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(Z.div, {
        ...r,
        ref: t
    })
}
);
dv.displayName = nS;
var rS = "ToastDescription"
  , fv = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(Z.div, {
        ...r,
        ref: t
    })
}
);
fv.displayName = rS;
var pv = "ToastAction"
  , mv = p.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(gv, {
        altText: n,
        asChild: !0,
        children: c.jsx(Md, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${pv}\`. Expected non-empty \`string\`.`),
    null)
}
);
mv.displayName = pv;
var hv = "ToastClose"
  , Md = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = Jb(hv, n);
    return c.jsx(gv, {
        asChild: !0,
        children: c.jsx(Z.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: K(e.onClick, o.onClose)
        })
    })
}
);
Md.displayName = hv;
var gv = p.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return c.jsx(Z.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function vv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        iS(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const a = r.dataset.radixToastAnnounceAlt;
                    a && t.push(a)
                } else
                    t.push(...vv(r))
        }
    }
    ),
    t
}
function Na(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? ev(o, i) : o.dispatchEvent(i)
}
var Np = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function oS(e= () => {}
) {
    const t = zt(e);
    Le( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function iS(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function aS(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ec(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var sS = av
  , yv = lv
  , xv = uv
  , wv = dv
  , bv = fv
  , Sv = mv
  , Cv = Md;
function Ev(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Ev(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function kv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Ev(e)) && (r && (r += " "),
        r += t);
    return r
}
const Tp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Pp = kv
  , oa = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Pp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , a = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const y = Tp(d) || Tp(f);
        return o[u][y]
    }
    )
      , s = n && Object.entries(n).reduce( (u, d) => {
        let[f,y] = d;
        return y === void 0 || (u[f] = y),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: f, className: y, ...g} = d;
        return Object.entries(g).every(b => {
            let[h,w] = b;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...s
            }[h]) : {
                ...i,
                ...s
            }[h] === w
        }
        ) ? [...u, f, y] : u
    }
    , []);
    return Pp(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lS = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Nv = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cS = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = p.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: a, ...s}, l) => p.createElement("svg", {
    ref: l,
    ...cS,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Nv("lucide", o),
    ...s
}, [...a.map( ([u,d]) => p.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (e, t) => {
    const n = p.forwardRef( ({className: r, ...o}, i) => p.createElement(uS, {
        ref: i,
        iconNode: t,
        className: Nv(`lucide-${lS(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dS = de("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tv = de("CalendarPlus", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["path", {
    d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
    key: "3spt84"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}], ["path", {
    d: "M16 19h6",
    key: "xwg31i"
}], ["path", {
    d: "M19 16v6",
    key: "tddt3s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = de("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = de("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = de("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fS = de("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = de("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mS = de("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = de("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = de("Euro", [["path", {
    d: "M4 10h12",
    key: "1y6xl8"
}], ["path", {
    d: "M4 14h9",
    key: "1loblj"
}], ["path", {
    d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
    key: "1j6lzo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rv = de("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = de("Facebook", [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = de("Filter", [["polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    key: "1yg77f"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vS = de("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = de("Instagram", [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = de("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dv = de("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = de("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xS = de("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wS = de("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bS = de("SearchX", [["path", {
    d: "m13.5 8.5-5 5",
    key: "1cs55j"
}], ["path", {
    d: "m8.5 8.5 5 5",
    key: "a8mexj"
}], ["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SS = de("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = de("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = de("Share2", [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CS = de("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ES = de("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = de("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Dd = "-"
  , kS = e => {
    const t = TS(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: a => {
            const s = a.split(Dd);
            return s[0] === "" && s.length !== 1 && s.shift(),
            _v(s, t) || NS(a)
        }
        ,
        getConflictingClassGroupIds: (a, s) => {
            const l = n[a] || [];
            return s && r[a] ? [...l, ...r[a]] : l
        }
    }
}
  , _v = (e, t) => {
    var a;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? _v(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Dd);
    return (a = t.validators.find( ({validator: s}) => s(i))) == null ? void 0 : a.classGroupId
}
  , Rp = /^\[(.+)\]$/
  , NS = e => {
    if (Rp.test(e)) {
        const t = Rp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , TS = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return jS(Object.entries(e.classGroups), n).forEach( ([i,a]) => {
        uu(a, r, i, t)
    }
    ),
    r
}
  , uu = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Mp(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (PS(o)) {
                uu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,a]) => {
            uu(a, Mp(t, i), n, r)
        }
        )
    }
    )
}
  , Mp = (e, t) => {
    let n = e;
    return t.split(Dd).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , PS = e => e.isThemeGetter
  , jS = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([a,s]) => [t + a, s])) : i);
    return [n, o]
}
) : e
  , RS = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, a) => {
        n.set(i, a),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let a = n.get(i);
            if (a !== void 0)
                return a;
            if ((a = r.get(i)) !== void 0)
                return o(i, a),
                a
        },
        set(i, a) {
            n.has(i) ? n.set(i, a) : o(i, a)
        }
    }
}
  , Av = "!"
  , MS = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , a = s => {
        const l = [];
        let u = 0, d = 0, f;
        for (let w = 0; w < s.length; w++) {
            let v = s[w];
            if (u === 0) {
                if (v === o && (r || s.slice(w, w + i) === t)) {
                    l.push(s.slice(d, w)),
                    d = w + i;
                    continue
                }
                if (v === "/") {
                    f = w;
                    continue
                }
            }
            v === "[" ? u++ : v === "]" && u--
        }
        const y = l.length === 0 ? s : s.substring(d)
          , g = y.startsWith(Av)
          , b = g ? y.substring(1) : y
          , h = f && f > d ? f - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: g,
            baseClassName: b,
            maybePostfixModifierPosition: h
        }
    }
    ;
    return n ? s => n({
        className: s,
        parseClassName: a
    }) : a
}
  , DS = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , OS = e => ({
    cache: RS(e.cacheSize),
    parseClassName: MS(e),
    ...kS(e)
})
  , _S = /\s+/
  , AS = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , a = e.trim().split(_S);
    let s = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
        const u = a[l]
          , {modifiers: d, hasImportantModifier: f, baseClassName: y, maybePostfixModifierPosition: g} = n(u);
        let b = !!g
          , h = r(b ? y.substring(0, g) : y);
        if (!h) {
            if (!b) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            if (h = r(y),
            !h) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            b = !1
        }
        const w = DS(d).join(":")
          , v = f ? w + Av : w
          , m = v + h;
        if (i.includes(m))
            continue;
        i.push(m);
        const x = o(h, b);
        for (let S = 0; S < x.length; ++S) {
            const C = x[S];
            i.push(v + C)
        }
        s = u + (s.length > 0 ? " " + s : s)
    }
    return s
}
;
function IS() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Iv(t)) && (r && (r += " "),
        r += n);
    return r
}
const Iv = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Iv(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function LS(e, ...t) {
    let n, r, o, i = a;
    function a(l) {
        const u = t.reduce( (d, f) => f(d), e());
        return n = OS(u),
        r = n.cache.get,
        o = n.cache.set,
        i = s,
        s(l)
    }
    function s(l) {
        const u = r(l);
        if (u)
            return u;
        const d = AS(l, n);
        return o(l, d),
        d
    }
    return function() {
        return i(IS.apply(null, arguments))
    }
}
const me = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Lv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , zS = /^\d+\/\d+$/
  , FS = new Set(["px", "full", "screen"])
  , $S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , WS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , US = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , BS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , VS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , sn = e => xo(e) || FS.has(e) || zS.test(e)
  , Pn = e => qo(e, "length", ZS)
  , xo = e => !!e && !Number.isNaN(Number(e))
  , nc = e => qo(e, "number", xo)
  , li = e => !!e && Number.isInteger(Number(e))
  , HS = e => e.endsWith("%") && xo(e.slice(0, -1))
  , X = e => Lv.test(e)
  , jn = e => $S.test(e)
  , YS = new Set(["length", "size", "percentage"])
  , QS = e => qo(e, YS, zv)
  , qS = e => qo(e, "position", zv)
  , KS = new Set(["image", "url"])
  , GS = e => qo(e, KS, eC)
  , XS = e => qo(e, "", JS)
  , ci = () => !0
  , qo = (e, t, n) => {
    const r = Lv.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , ZS = e => WS.test(e) && !US.test(e)
  , zv = () => !1
  , JS = e => BS.test(e)
  , eC = e => VS.test(e)
  , tC = () => {
    const e = me("colors")
      , t = me("spacing")
      , n = me("blur")
      , r = me("brightness")
      , o = me("borderColor")
      , i = me("borderRadius")
      , a = me("borderSpacing")
      , s = me("borderWidth")
      , l = me("contrast")
      , u = me("grayscale")
      , d = me("hueRotate")
      , f = me("invert")
      , y = me("gap")
      , g = me("gradientColorStops")
      , b = me("gradientColorStopPositions")
      , h = me("inset")
      , w = me("margin")
      , v = me("opacity")
      , m = me("padding")
      , x = me("saturate")
      , S = me("scale")
      , C = me("sepia")
      , k = me("skew")
      , E = me("space")
      , j = me("translate")
      , M = () => ["auto", "contain", "none"]
      , D = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", X, t]
      , A = () => [X, t]
      , B = () => ["", sn, Pn]
      , _ = () => ["auto", xo, X]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , F = () => ["solid", "dashed", "dotted", "double", "none"]
      , U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , P = () => ["", "0", X]
      , I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , V = () => [xo, X];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ci],
            spacing: [sn, Pn],
            blur: ["none", "", jn, X],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", jn, X],
            borderSpacing: A(),
            borderWidth: B(),
            contrast: V(),
            grayscale: P(),
            hueRotate: V(),
            invert: P(),
            gap: A(),
            gradientColorStops: [e],
            gradientColorStopPositions: [HS, Pn],
            inset: $(),
            margin: $(),
            opacity: V(),
            padding: A(),
            saturate: V(),
            scale: V(),
            sepia: P(),
            skew: V(),
            space: A(),
            translate: A()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", X]
            }],
            container: ["container"],
            columns: [{
                columns: [jn]
            }],
            "break-after": [{
                "break-after": I()
            }],
            "break-before": [{
                "break-before": I()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), X]
            }],
            overflow: [{
                overflow: D()
            }],
            "overflow-x": [{
                "overflow-x": D()
            }],
            "overflow-y": [{
                "overflow-y": D()
            }],
            overscroll: [{
                overscroll: M()
            }],
            "overscroll-x": [{
                "overscroll-x": M()
            }],
            "overscroll-y": [{
                "overscroll-y": M()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [h]
            }],
            "inset-x": [{
                "inset-x": [h]
            }],
            "inset-y": [{
                "inset-y": [h]
            }],
            start: [{
                start: [h]
            }],
            end: [{
                end: [h]
            }],
            top: [{
                top: [h]
            }],
            right: [{
                right: [h]
            }],
            bottom: [{
                bottom: [h]
            }],
            left: [{
                left: [h]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", li, X]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", X]
            }],
            grow: [{
                grow: P()
            }],
            shrink: [{
                shrink: P()
            }],
            order: [{
                order: ["first", "last", "none", li, X]
            }],
            "grid-cols": [{
                "grid-cols": [ci]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", li, X]
                }, X]
            }],
            "col-start": [{
                "col-start": _()
            }],
            "col-end": [{
                "col-end": _()
            }],
            "grid-rows": [{
                "grid-rows": [ci]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [li, X]
                }, X]
            }],
            "row-start": [{
                "row-start": _()
            }],
            "row-end": [{
                "row-end": _()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", X]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", X]
            }],
            gap: [{
                gap: [y]
            }],
            "gap-x": [{
                "gap-x": [y]
            }],
            "gap-y": [{
                "gap-y": [y]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
            }],
            "min-w": [{
                "min-w": [X, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [jn]
                }, jn]
            }],
            h: [{
                h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [X, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", jn, Pn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", nc]
            }],
            "font-family": [{
                font: [ci]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
            }],
            "line-clamp": [{
                "line-clamp": ["none", xo, nc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", sn, X]
            }],
            "list-image": [{
                "list-image": ["none", X]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", X]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...F(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", sn, Pn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", sn, X]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: A()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", X]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), qS]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", QS]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, GS]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [...F(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: F()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...F()]
            }],
            "outline-offset": [{
                "outline-offset": [sn, X]
            }],
            "outline-w": [{
                outline: [sn, Pn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: B()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [sn, Pn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", jn, XS]
            }],
            "shadow-color": [{
                shadow: [ci]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": [...U(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": U()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", jn, X]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
            }],
            duration: [{
                duration: V()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", X]
            }],
            delay: [{
                delay: V()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", X]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [li, X]
            }],
            "translate-x": [{
                "translate-x": [j]
            }],
            "translate-y": [{
                "translate-y": [j]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": A()
            }],
            "scroll-mx": [{
                "scroll-mx": A()
            }],
            "scroll-my": [{
                "scroll-my": A()
            }],
            "scroll-ms": [{
                "scroll-ms": A()
            }],
            "scroll-me": [{
                "scroll-me": A()
            }],
            "scroll-mt": [{
                "scroll-mt": A()
            }],
            "scroll-mr": [{
                "scroll-mr": A()
            }],
            "scroll-mb": [{
                "scroll-mb": A()
            }],
            "scroll-ml": [{
                "scroll-ml": A()
            }],
            "scroll-p": [{
                "scroll-p": A()
            }],
            "scroll-px": [{
                "scroll-px": A()
            }],
            "scroll-py": [{
                "scroll-py": A()
            }],
            "scroll-ps": [{
                "scroll-ps": A()
            }],
            "scroll-pe": [{
                "scroll-pe": A()
            }],
            "scroll-pt": [{
                "scroll-pt": A()
            }],
            "scroll-pr": [{
                "scroll-pr": A()
            }],
            "scroll-pb": [{
                "scroll-pb": A()
            }],
            "scroll-pl": [{
                "scroll-pl": A()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", X]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [sn, Pn, nc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , nC = LS(tC);
function te(...e) {
    return nC(kv(e))
}
const rC = sS
  , Fv = p.forwardRef( ({className: e, ...t}, n) => c.jsx(yv, {
    ref: n,
    className: te("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Fv.displayName = yv.displayName;
const oC = oa("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , $v = p.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(xv, {
    ref: r,
    className: te(oC({
        variant: t
    }), e),
    ...n
}));
$v.displayName = xv.displayName;
const iC = p.forwardRef( ({className: e, ...t}, n) => c.jsx(Sv, {
    ref: n,
    className: te("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
iC.displayName = Sv.displayName;
const Wv = p.forwardRef( ({className: e, ...t}, n) => c.jsx(Cv, {
    ref: n,
    className: te("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(el, {
        className: "h-4 w-4"
    })
}));
Wv.displayName = Cv.displayName;
const Uv = p.forwardRef( ({className: e, ...t}, n) => c.jsx(wv, {
    ref: n,
    className: te("text-sm font-semibold", e),
    ...t
}));
Uv.displayName = wv.displayName;
const Bv = p.forwardRef( ({className: e, ...t}, n) => c.jsx(bv, {
    ref: n,
    className: te("text-sm opacity-90", e),
    ...t
}));
Bv.displayName = bv.displayName;
function aC() {
    const {toasts: e} = gb();
    return c.jsxs(rC, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return c.jsxs($v, {
                ...i,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(Uv, {
                        children: n
                    }), r && c.jsx(Bv, {
                        children: r
                    })]
                }), o, c.jsx(Wv, {})]
            }, t)
        }), c.jsx(Fv, {})]
    })
}
var Dp = ["light", "dark"]
  , sC = "(prefers-color-scheme: dark)"
  , lC = p.createContext(void 0)
  , cC = {
    setTheme: e => {}
    ,
    themes: []
}
  , uC = () => {
    var e;
    return (e = p.useContext(lC)) != null ? e : cC
}
;
p.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: a, attrs: s, nonce: l}) => {
    let u = i === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map(b => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? Dp.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , y = (b, h=!1, w=!0) => {
        let v = a ? a[b] : b
          , m = h ? b + "|| ''" : `'${v}'`
          , x = "";
        return o && w && !h && Dp.includes(b) && (x += `d.style.colorScheme = '${b}';`),
        n === "class" ? h || v ? x += `c.add(${m})` : x += "null" : v && (x += `d[s](n,${m})`),
        x
    }
      , g = e ? `!function(){${d}${y(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${sC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${y(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + y(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${y(a ? "x[e]" : "e", !0)}}else{${y(i, !1, !1)};}${f}}catch(t){}}();`;
    return p.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: g
        }
    })
}
);
var dC = e => {
    switch (e) {
    case "success":
        return mC;
    case "info":
        return gC;
    case "warning":
        return hC;
    case "error":
        return vC;
    default:
        return null
    }
}
  , fC = Array(12).fill(0)
  , pC = ({visible: e, className: t}) => O.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, fC.map( (n, r) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , mC = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , hC = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , gC = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , vC = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , yC = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , xC = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , du = 1
  , wC = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : du++
              , i = this.toasts.find(s => s.id === o)
              , a = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(s => s.id === o ? (this.publish({
                ...s,
                ...e,
                id: o,
                title: n
            }),
            {
                ...s,
                ...e,
                id: o,
                dismissible: a,
                title: n
            }) : s) : this.addToast({
                title: n,
                ...r,
                dismissible: a,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, a = r.then(async l => {
                if (i = ["resolve", l],
                O.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (SC(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), s = () => new Promise( (l, u) => a.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: s
            } : Object.assign(n, {
                unwrap: s
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || du++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Xe = new wC
  , bC = (e, t) => {
    let n = (t == null ? void 0 : t.id) || du++;
    return Xe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , SC = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , CC = bC
  , EC = () => Xe.toasts
  , kC = () => Xe.getActiveToasts();
Object.assign(CC, {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading
}, {
    getHistory: EC,
    getToasts: kC
});
function NC(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
NC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ta(e) {
    return e.label !== void 0
}
var TC = 3
  , PC = "32px"
  , jC = "16px"
  , Op = 4e3
  , RC = 356
  , MC = 14
  , DC = 20
  , OC = 200;
function Tt(...e) {
    return e.filter(Boolean).join(" ")
}
function _C(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var AC = e => {
    var t, n, r, o, i, a, s, l, u, d, f;
    let {invert: y, toast: g, unstyled: b, interacting: h, setHeights: w, visibleToasts: v, heights: m, index: x, toasts: S, expanded: C, removeToast: k, defaultRichColors: E, closeButton: j, style: M, cancelButtonStyle: D, actionButtonStyle: $, className: A="", descriptionClassName: B="", duration: _, position: H, gap: F, loadingIcon: U, expandByDefault: N, classNames: P, icons: I, closeButtonAriaLabel: V="Close toast", pauseWhenPageIsHidden: W} = e
      , [G,Y] = O.useState(null)
      , [pe,Ee] = O.useState(null)
      , [L,ae] = O.useState(!1)
      , [ke,ie] = O.useState(!1)
      , [ee,re] = O.useState(!1)
      , [ze,pt] = O.useState(!1)
      , [fr,Cn] = O.useState(!1)
      , [pr,Zo] = O.useState(0)
      , [Hr,af] = O.useState(0)
      , Jo = O.useRef(g.duration || _ || Op)
      , sf = O.useRef(null)
      , mr = O.useRef(null)
      , Mx = x === 0
      , Dx = x + 1 <= v
      , mt = g.type
      , Yr = g.dismissible !== !1
      , Ox = g.className || ""
      , _x = g.descriptionClassName || ""
      , aa = O.useMemo( () => m.findIndex(Q => Q.toastId === g.id) || 0, [m, g.id])
      , Ax = O.useMemo( () => {
        var Q;
        return (Q = g.closeButton) != null ? Q : j
    }
    , [g.closeButton, j])
      , lf = O.useMemo( () => g.duration || _ || Op, [g.duration, _])
      , Cl = O.useRef(0)
      , Qr = O.useRef(0)
      , cf = O.useRef(0)
      , qr = O.useRef(null)
      , [Ix,Lx] = H.split("-")
      , uf = O.useMemo( () => m.reduce( (Q, ce, ye) => ye >= aa ? Q : Q + ce.height, 0), [m, aa])
      , df = xC()
      , zx = g.invert || y
      , El = mt === "loading";
    Qr.current = O.useMemo( () => aa * F + uf, [aa, uf]),
    O.useEffect( () => {
        Jo.current = lf
    }
    , [lf]),
    O.useEffect( () => {
        ae(!0)
    }
    , []),
    O.useEffect( () => {
        let Q = mr.current;
        if (Q) {
            let ce = Q.getBoundingClientRect().height;
            return af(ce),
            w(ye => [{
                toastId: g.id,
                height: ce,
                position: g.position
            }, ...ye]),
            () => w(ye => ye.filter(Ct => Ct.toastId !== g.id))
        }
    }
    , [w, g.id]),
    O.useLayoutEffect( () => {
        if (!L)
            return;
        let Q = mr.current
          , ce = Q.style.height;
        Q.style.height = "auto";
        let ye = Q.getBoundingClientRect().height;
        Q.style.height = ce,
        af(ye),
        w(Ct => Ct.find(Et => Et.toastId === g.id) ? Ct.map(Et => Et.toastId === g.id ? {
            ...Et,
            height: ye
        } : Et) : [{
            toastId: g.id,
            height: ye,
            position: g.position
        }, ...Ct])
    }
    , [L, g.title, g.description, w, g.id]);
    let En = O.useCallback( () => {
        ie(!0),
        Zo(Qr.current),
        w(Q => Q.filter(ce => ce.toastId !== g.id)),
        setTimeout( () => {
            k(g)
        }
        , OC)
    }
    , [g, k, w, Qr]);
    O.useEffect( () => {
        if (g.promise && mt === "loading" || g.duration === 1 / 0 || g.type === "loading")
            return;
        let Q;
        return C || h || W && df ? ( () => {
            if (cf.current < Cl.current) {
                let ce = new Date().getTime() - Cl.current;
                Jo.current = Jo.current - ce
            }
            cf.current = new Date().getTime()
        }
        )() : Jo.current !== 1 / 0 && (Cl.current = new Date().getTime(),
        Q = setTimeout( () => {
            var ce;
            (ce = g.onAutoClose) == null || ce.call(g, g),
            En()
        }
        , Jo.current)),
        () => clearTimeout(Q)
    }
    , [C, h, g, mt, W, df, En]),
    O.useEffect( () => {
        g.delete && En()
    }
    , [En, g.delete]);
    function Fx() {
        var Q, ce, ye;
        return I != null && I.loading ? O.createElement("div", {
            className: Tt(P == null ? void 0 : P.loader, (Q = g == null ? void 0 : g.classNames) == null ? void 0 : Q.loader, "sonner-loader"),
            "data-visible": mt === "loading"
        }, I.loading) : U ? O.createElement("div", {
            className: Tt(P == null ? void 0 : P.loader, (ce = g == null ? void 0 : g.classNames) == null ? void 0 : ce.loader, "sonner-loader"),
            "data-visible": mt === "loading"
        }, U) : O.createElement(pC, {
            className: Tt(P == null ? void 0 : P.loader, (ye = g == null ? void 0 : g.classNames) == null ? void 0 : ye.loader),
            visible: mt === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: mr,
        className: Tt(A, Ox, P == null ? void 0 : P.toast, (t = g == null ? void 0 : g.classNames) == null ? void 0 : t.toast, P == null ? void 0 : P.default, P == null ? void 0 : P[mt], (n = g == null ? void 0 : g.classNames) == null ? void 0 : n[mt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = g.richColors) != null ? r : E,
        "data-styled": !(g.jsx || g.unstyled || b),
        "data-mounted": L,
        "data-promise": !!g.promise,
        "data-swiped": fr,
        "data-removed": ke,
        "data-visible": Dx,
        "data-y-position": Ix,
        "data-x-position": Lx,
        "data-index": x,
        "data-front": Mx,
        "data-swiping": ee,
        "data-dismissible": Yr,
        "data-type": mt,
        "data-invert": zx,
        "data-swipe-out": ze,
        "data-swipe-direction": pe,
        "data-expanded": !!(C || N && L),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": S.length - x,
            "--offset": `${ke ? pr : Qr.current}px`,
            "--initial-height": N ? "auto" : `${Hr}px`,
            ...M,
            ...g.style
        },
        onDragEnd: () => {
            re(!1),
            Y(null),
            qr.current = null
        }
        ,
        onPointerDown: Q => {
            El || !Yr || (sf.current = new Date,
            Zo(Qr.current),
            Q.target.setPointerCapture(Q.pointerId),
            Q.target.tagName !== "BUTTON" && (re(!0),
            qr.current = {
                x: Q.clientX,
                y: Q.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Q, ce, ye, Ct;
            if (ze || !Yr)
                return;
            qr.current = null;
            let Et = Number(((Q = mr.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , kn = Number(((ce = mr.current) == null ? void 0 : ce.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , hr = new Date().getTime() - ((ye = sf.current) == null ? void 0 : ye.getTime())
              , kt = G === "x" ? Et : kn
              , Nn = Math.abs(kt) / hr;
            if (Math.abs(kt) >= DC || Nn > .11) {
                Zo(Qr.current),
                (Ct = g.onDismiss) == null || Ct.call(g, g),
                Ee(G === "x" ? Et > 0 ? "right" : "left" : kn > 0 ? "down" : "up"),
                En(),
                pt(!0),
                Cn(!1);
                return
            }
            re(!1),
            Y(null)
        }
        ,
        onPointerMove: Q => {
            var ce, ye, Ct, Et;
            if (!qr.current || !Yr || ((ce = window.getSelection()) == null ? void 0 : ce.toString().length) > 0)
                return;
            let kn = Q.clientY - qr.current.y
              , hr = Q.clientX - qr.current.x
              , kt = (ye = e.swipeDirections) != null ? ye : _C(H);
            !G && (Math.abs(hr) > 1 || Math.abs(kn) > 1) && Y(Math.abs(hr) > Math.abs(kn) ? "x" : "y");
            let Nn = {
                x: 0,
                y: 0
            };
            G === "y" ? (kt.includes("top") || kt.includes("bottom")) && (kt.includes("top") && kn < 0 || kt.includes("bottom") && kn > 0) && (Nn.y = kn) : G === "x" && (kt.includes("left") || kt.includes("right")) && (kt.includes("left") && hr < 0 || kt.includes("right") && hr > 0) && (Nn.x = hr),
            (Math.abs(Nn.x) > 0 || Math.abs(Nn.y) > 0) && Cn(!0),
            (Ct = mr.current) == null || Ct.style.setProperty("--swipe-amount-x", `${Nn.x}px`),
            (Et = mr.current) == null || Et.style.setProperty("--swipe-amount-y", `${Nn.y}px`)
        }
    }, Ax && !g.jsx ? O.createElement("button", {
        "aria-label": V,
        "data-disabled": El,
        "data-close-button": !0,
        onClick: El || !Yr ? () => {}
        : () => {
            var Q;
            En(),
            (Q = g.onDismiss) == null || Q.call(g, g)
        }
        ,
        className: Tt(P == null ? void 0 : P.closeButton, (o = g == null ? void 0 : g.classNames) == null ? void 0 : o.closeButton)
    }, (i = I == null ? void 0 : I.close) != null ? i : yC) : null, g.jsx || p.isValidElement(g.title) ? g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title : O.createElement(O.Fragment, null, mt || g.icon || g.promise ? O.createElement("div", {
        "data-icon": "",
        className: Tt(P == null ? void 0 : P.icon, (a = g == null ? void 0 : g.classNames) == null ? void 0 : a.icon)
    }, g.promise || g.type === "loading" && !g.icon ? g.icon || Fx() : null, g.type !== "loading" ? g.icon || (I == null ? void 0 : I[mt]) || dC(mt) : null) : null, O.createElement("div", {
        "data-content": "",
        className: Tt(P == null ? void 0 : P.content, (s = g == null ? void 0 : g.classNames) == null ? void 0 : s.content)
    }, O.createElement("div", {
        "data-title": "",
        className: Tt(P == null ? void 0 : P.title, (l = g == null ? void 0 : g.classNames) == null ? void 0 : l.title)
    }, typeof g.title == "function" ? g.title() : g.title), g.description ? O.createElement("div", {
        "data-description": "",
        className: Tt(B, _x, P == null ? void 0 : P.description, (u = g == null ? void 0 : g.classNames) == null ? void 0 : u.description)
    }, typeof g.description == "function" ? g.description() : g.description) : null), p.isValidElement(g.cancel) ? g.cancel : g.cancel && Ta(g.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: g.cancelButtonStyle || D,
        onClick: Q => {
            var ce, ye;
            Ta(g.cancel) && Yr && ((ye = (ce = g.cancel).onClick) == null || ye.call(ce, Q),
            En())
        }
        ,
        className: Tt(P == null ? void 0 : P.cancelButton, (d = g == null ? void 0 : g.classNames) == null ? void 0 : d.cancelButton)
    }, g.cancel.label) : null, p.isValidElement(g.action) ? g.action : g.action && Ta(g.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: g.actionButtonStyle || $,
        onClick: Q => {
            var ce, ye;
            Ta(g.action) && ((ye = (ce = g.action).onClick) == null || ye.call(ce, Q),
            !Q.defaultPrevented && En())
        }
        ,
        className: Tt(P == null ? void 0 : P.actionButton, (f = g == null ? void 0 : g.classNames) == null ? void 0 : f.actionButton)
    }, g.action.label) : null))
}
;
function _p() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function IC(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , a = i ? "--mobile-offset" : "--offset"
          , s = i ? jC : PC;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${a}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${a}-${u}`] = s : n[`${a}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(s)
    }
    ),
    n
}
var LC = p.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: a, className: s, offset: l, mobileOffset: u, theme: d="light", richColors: f, duration: y, style: g, visibleToasts: b=TC, toastOptions: h, dir: w=_p(), gap: v=MC, loadingIcon: m, icons: x, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: C} = e
      , [k,E] = O.useState([])
      , j = O.useMemo( () => Array.from(new Set([r].concat(k.filter(W => W.position).map(W => W.position)))), [k, r])
      , [M,D] = O.useState([])
      , [$,A] = O.useState(!1)
      , [B,_] = O.useState(!1)
      , [H,F] = O.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , U = O.useRef(null)
      , N = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , P = O.useRef(null)
      , I = O.useRef(!1)
      , V = O.useCallback(W => {
        E(G => {
            var Y;
            return (Y = G.find(pe => pe.id === W.id)) != null && Y.delete || Xe.dismiss(W.id),
            G.filter( ({id: pe}) => pe !== W.id)
        }
        )
    }
    , []);
    return O.useEffect( () => Xe.subscribe(W => {
        if (W.dismiss) {
            E(G => G.map(Y => Y.id === W.id ? {
                ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout( () => {
            Kg.flushSync( () => {
                E(G => {
                    let Y = G.findIndex(pe => pe.id === W.id);
                    return Y !== -1 ? [...G.slice(0, Y), {
                        ...G[Y],
                        ...W
                    }, ...G.slice(Y + 1)] : [W, ...G]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (d !== "system") {
            F(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")),
        typeof window > "u")
            return;
        let W = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            W.addEventListener("change", ({matches: G}) => {
                F(G ? "dark" : "light")
            }
            )
        } catch {
            W.addListener( ({matches: Y}) => {
                try {
                    F(Y ? "dark" : "light")
                } catch (pe) {
                    console.error(pe)
                }
            }
            )
        }
    }
    , [d]),
    O.useEffect( () => {
        k.length <= 1 && A(!1)
    }
    , [k]),
    O.useEffect( () => {
        let W = G => {
            var Y, pe;
            o.every(Ee => G[Ee] || G.code === Ee) && (A(!0),
            (Y = U.current) == null || Y.focus()),
            G.code === "Escape" && (document.activeElement === U.current || (pe = U.current) != null && pe.contains(document.activeElement)) && A(!1)
        }
        ;
        return document.addEventListener("keydown", W),
        () => document.removeEventListener("keydown", W)
    }
    , [o]),
    O.useEffect( () => {
        if (U.current)
            return () => {
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null,
                I.current = !1)
            }
    }
    , [U.current]),
    O.createElement("section", {
        ref: t,
        "aria-label": `${S} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, j.map( (W, G) => {
        var Y;
        let[pe,Ee] = W.split("-");
        return k.length ? O.createElement("ol", {
            key: W,
            dir: w === "auto" ? _p() : w,
            tabIndex: -1,
            ref: U,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": pe,
            "data-lifted": $ && k.length > 1 && !i,
            "data-x-position": Ee,
            style: {
                "--front-toast-height": `${((Y = M[0]) == null ? void 0 : Y.height) || 0}px`,
                "--width": `${RC}px`,
                "--gap": `${v}px`,
                ...g,
                ...IC(l, u)
            },
            onBlur: L => {
                I.current && !L.currentTarget.contains(L.relatedTarget) && (I.current = !1,
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null))
            }
            ,
            onFocus: L => {
                L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || I.current || (I.current = !0,
                P.current = L.relatedTarget)
            }
            ,
            onMouseEnter: () => A(!0),
            onMouseMove: () => A(!0),
            onMouseLeave: () => {
                B || A(!1)
            }
            ,
            onDragEnd: () => A(!1),
            onPointerDown: L => {
                L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || _(!0)
            }
            ,
            onPointerUp: () => _(!1)
        }, k.filter(L => !L.position && G === 0 || L.position === W).map( (L, ae) => {
            var ke, ie;
            return O.createElement(AC, {
                key: L.id,
                icons: x,
                index: ae,
                toast: L,
                defaultRichColors: f,
                duration: (ke = h == null ? void 0 : h.duration) != null ? ke : y,
                className: h == null ? void 0 : h.className,
                descriptionClassName: h == null ? void 0 : h.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: (ie = h == null ? void 0 : h.closeButton) != null ? ie : a,
                interacting: B,
                position: W,
                style: h == null ? void 0 : h.style,
                unstyled: h == null ? void 0 : h.unstyled,
                classNames: h == null ? void 0 : h.classNames,
                cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle,
                actionButtonStyle: h == null ? void 0 : h.actionButtonStyle,
                removeToast: V,
                toasts: k.filter(ee => ee.position == L.position),
                heights: M.filter(ee => ee.position == L.position),
                setHeights: D,
                expandByDefault: i,
                gap: v,
                loadingIcon: m,
                expanded: $,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const zC = ({...e}) => {
    const {theme: t="system"} = uC();
    return c.jsx(LC, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var FC = zu[" useId ".trim().toString()] || ( () => {}
)
  , $C = 0;
function wo(e) {
    const [t,n] = p.useState(FC());
    return Le( () => {
        n(r => r ?? String($C++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const WC = ["top", "right", "bottom", "left"]
  , ir = Math.min
  , it = Math.max
  , Cs = Math.round
  , Pa = Math.floor
  , rn = e => ({
    x: e,
    y: e
})
  , UC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , BC = {
    start: "end",
    end: "start"
};
function fu(e, t, n) {
    return it(e, ir(t, n))
}
function xn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function wn(e) {
    return e.split("-")[0]
}
function Ko(e) {
    return e.split("-")[1]
}
function Od(e) {
    return e === "x" ? "y" : "x"
}
function _d(e) {
    return e === "y" ? "height" : "width"
}
const VC = new Set(["top", "bottom"]);
function Jt(e) {
    return VC.has(wn(e)) ? "y" : "x"
}
function Ad(e) {
    return Od(Jt(e))
}
function HC(e, t, n) {
    n === void 0 && (n = !1);
    const r = Ko(e)
      , o = Ad(e)
      , i = _d(o);
    let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (a = Es(a)),
    [a, Es(a)]
}
function YC(e) {
    const t = Es(e);
    return [pu(e), t, pu(t)]
}
function pu(e) {
    return e.replace(/start|end/g, t => BC[t])
}
const Ap = ["left", "right"]
  , Ip = ["right", "left"]
  , QC = ["top", "bottom"]
  , qC = ["bottom", "top"];
function KC(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Ip : Ap : t ? Ap : Ip;
    case "left":
    case "right":
        return t ? QC : qC;
    default:
        return []
    }
}
function GC(e, t, n, r) {
    const o = Ko(e);
    let i = KC(wn(e), n === "start", r);
    return o && (i = i.map(a => a + "-" + o),
    t && (i = i.concat(i.map(pu)))),
    i
}
function Es(e) {
    return e.replace(/left|right|bottom|top/g, t => UC[t])
}
function XC(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Vv(e) {
    return typeof e != "number" ? XC(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ks(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Lp(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Jt(t)
      , a = Ad(t)
      , s = _d(a)
      , l = wn(t)
      , u = i === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , y = r[s] / 2 - o[s] / 2;
    let g;
    switch (l) {
    case "top":
        g = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        g = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        g = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        g = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        g = {
            x: r.x,
            y: r.y
        }
    }
    switch (Ko(t)) {
    case "start":
        g[a] -= y * (n && u ? -1 : 1);
        break;
    case "end":
        g[a] += y * (n && u ? -1 : 1);
        break
    }
    return g
}
const ZC = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: a} = n
      , s = i.filter(Boolean)
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = Lp(u, r, l)
      , y = r
      , g = {}
      , b = 0;
    for (let h = 0; h < s.length; h++) {
        const {name: w, fn: v} = s[h]
          , {x: m, y: x, data: S, reset: C} = await v({
            x: d,
            y: f,
            initialPlacement: r,
            placement: y,
            strategy: o,
            middlewareData: g,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = m ?? d,
        f = x ?? f,
        g = {
            ...g,
            [w]: {
                ...g[w],
                ...S
            }
        },
        C && b <= 50 && (b++,
        typeof C == "object" && (C.placement && (y = C.placement),
        C.rects && (u = C.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: d, y: f} = Lp(u, y, l)),
        h = -1)
    }
    return {
        x: d,
        y: f,
        placement: y,
        strategy: o,
        middlewareData: g
    }
}
;
async function Vi(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: a, elements: s, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: y=!1, padding: g=0} = xn(t, e)
      , b = Vv(g)
      , w = s[y ? f === "floating" ? "reference" : "floating" : f]
      , v = ks(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , m = f === "floating" ? {
        x: r,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = ks(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: m,
        offsetParent: x,
        strategy: l
    }) : m);
    return {
        top: (v.top - C.top + b.top) / S.y,
        bottom: (C.bottom - v.bottom + b.bottom) / S.y,
        left: (v.left - C.left + b.left) / S.x,
        right: (C.right - v.right + b.right) / S.x
    }
}
const JC = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: a, elements: s, middlewareData: l} = t
          , {element: u, padding: d=0} = xn(e, t) || {};
        if (u == null)
            return {};
        const f = Vv(d)
          , y = {
            x: n,
            y: r
        }
          , g = Ad(o)
          , b = _d(g)
          , h = await a.getDimensions(u)
          , w = g === "y"
          , v = w ? "top" : "left"
          , m = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , S = i.reference[b] + i.reference[g] - y[g] - i.floating[b]
          , C = y[g] - i.reference[g]
          , k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let E = k ? k[x] : 0;
        (!E || !await (a.isElement == null ? void 0 : a.isElement(k))) && (E = s.floating[x] || i.floating[b]);
        const j = S / 2 - C / 2
          , M = E / 2 - h[b] / 2 - 1
          , D = ir(f[v], M)
          , $ = ir(f[m], M)
          , A = D
          , B = E - h[b] - $
          , _ = E / 2 - h[b] / 2 + j
          , H = fu(A, _, B)
          , F = !l.arrow && Ko(o) != null && _ !== H && i.reference[b] / 2 - (_ < A ? D : $) - h[b] / 2 < 0
          , U = F ? _ < A ? _ - A : _ - B : 0;
        return {
            [g]: y[g] + U,
            data: {
                [g]: H,
                centerOffset: _ - H - U,
                ...F && {
                    alignmentOffset: U
                }
            },
            reset: F
        }
    }
})
  , eE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: a, initialPlacement: s, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: y, fallbackStrategy: g="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: h=!0, ...w} = xn(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const v = wn(o)
              , m = Jt(s)
              , x = wn(s) === s
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = y || (x || !h ? [Es(s)] : YC(s))
              , k = b !== "none";
            !y && k && C.push(...GC(s, h, b, S));
            const E = [s, ...C]
              , j = await Vi(t, w)
              , M = [];
            let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (d && M.push(j[v]),
            f) {
                const _ = HC(o, a, S);
                M.push(j[_[0]], j[_[1]])
            }
            if (D = [...D, {
                placement: o,
                overflows: M
            }],
            !M.every(_ => _ <= 0)) {
                var $, A;
                const _ = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1
                  , H = E[_];
                if (H && (!(f === "alignment" ? m !== Jt(H) : !1) || D.every(N => N.overflows[0] > 0 && Jt(N.placement) === m)))
                    return {
                        data: {
                            index: _,
                            overflows: D
                        },
                        reset: {
                            placement: H
                        }
                    };
                let F = (A = D.filter(U => U.overflows[0] <= 0).sort( (U, N) => U.overflows[1] - N.overflows[1])[0]) == null ? void 0 : A.placement;
                if (!F)
                    switch (g) {
                    case "bestFit":
                        {
                            var B;
                            const U = (B = D.filter(N => {
                                if (k) {
                                    const P = Jt(N.placement);
                                    return P === m || P === "y"
                                }
                                return !0
                            }
                            ).map(N => [N.placement, N.overflows.filter(P => P > 0).reduce( (P, I) => P + I, 0)]).sort( (N, P) => N[1] - P[1])[0]) == null ? void 0 : B[0];
                            U && (F = U);
                            break
                        }
                    case "initialPlacement":
                        F = s;
                        break
                    }
                if (o !== F)
                    return {
                        reset: {
                            placement: F
                        }
                    }
            }
            return {}
        }
    }
};
function zp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Fp(e) {
    return WC.some(t => e[t] >= 0)
}
const tE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = xn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Vi(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , a = zp(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: Fp(a)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Vi(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , a = zp(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: Fp(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Hv = new Set(["left", "top"]);
async function nE(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , a = wn(n)
      , s = Ko(n)
      , l = Jt(n) === "y"
      , u = Hv.has(a) ? -1 : 1
      , d = i && l ? -1 : 1
      , f = xn(t, e);
    let {mainAxis: y, crossAxis: g, alignmentAxis: b} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return s && typeof b == "number" && (g = s === "end" ? b * -1 : b),
    l ? {
        x: g * d,
        y: y * u
    } : {
        x: y * u,
        y: g * d
    }
}
const rE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: a, middlewareData: s} = t
              , l = await nE(t, e);
            return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , oE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: a=!1, limiter: s={
                fn: w => {
                    let {x: v, y: m} = w;
                    return {
                        x: v,
                        y: m
                    }
                }
            }, ...l} = xn(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await Vi(t, l)
              , f = Jt(wn(o))
              , y = Od(f);
            let g = u[y]
              , b = u[f];
            if (i) {
                const w = y === "y" ? "top" : "left"
                  , v = y === "y" ? "bottom" : "right"
                  , m = g + d[w]
                  , x = g - d[v];
                g = fu(m, g, x)
            }
            if (a) {
                const w = f === "y" ? "top" : "left"
                  , v = f === "y" ? "bottom" : "right"
                  , m = b + d[w]
                  , x = b - d[v];
                b = fu(m, b, x)
            }
            const h = s.fn({
                ...t,
                [y]: g,
                [f]: b
            });
            return {
                ...h,
                data: {
                    x: h.x - n,
                    y: h.y - r,
                    enabled: {
                        [y]: i,
                        [f]: a
                    }
                }
            }
        }
    }
}
  , iE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: a} = t
              , {offset: s=0, mainAxis: l=!0, crossAxis: u=!0} = xn(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = Jt(o)
              , y = Od(f);
            let g = d[y]
              , b = d[f];
            const h = xn(s, t)
              , w = typeof h == "number" ? {
                mainAxis: h,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...h
            };
            if (l) {
                const x = y === "y" ? "height" : "width"
                  , S = i.reference[y] - i.floating[x] + w.mainAxis
                  , C = i.reference[y] + i.reference[x] - w.mainAxis;
                g < S ? g = S : g > C && (g = C)
            }
            if (u) {
                var v, m;
                const x = y === "y" ? "width" : "height"
                  , S = Hv.has(wn(o))
                  , C = i.reference[f] - i.floating[x] + (S && ((v = a.offset) == null ? void 0 : v[f]) || 0) + (S ? 0 : w.crossAxis)
                  , k = i.reference[f] + i.reference[x] + (S ? 0 : ((m = a.offset) == null ? void 0 : m[f]) || 0) - (S ? w.crossAxis : 0);
                b < C ? b = C : b > k && (b = k)
            }
            return {
                [y]: g,
                [f]: b
            }
        }
    }
}
  , aE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: a, elements: s} = t
              , {apply: l= () => {}
            , ...u} = xn(e, t)
              , d = await Vi(t, u)
              , f = wn(o)
              , y = Ko(o)
              , g = Jt(o) === "y"
              , {width: b, height: h} = i.floating;
            let w, v;
            f === "top" || f === "bottom" ? (w = f,
            v = y === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = f,
            w = y === "end" ? "top" : "bottom");
            const m = h - d.top - d.bottom
              , x = b - d.left - d.right
              , S = ir(h - d[w], m)
              , C = ir(b - d[v], x)
              , k = !t.middlewareData.shift;
            let E = S
              , j = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = m),
            k && !y) {
                const D = it(d.left, 0)
                  , $ = it(d.right, 0)
                  , A = it(d.top, 0)
                  , B = it(d.bottom, 0);
                g ? j = b - 2 * (D !== 0 || $ !== 0 ? D + $ : it(d.left, d.right)) : E = h - 2 * (A !== 0 || B !== 0 ? A + B : it(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: j,
                availableHeight: E
            });
            const M = await a.getDimensions(s.floating);
            return b !== M.width || h !== M.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function tl() {
    return typeof window < "u"
}
function Go(e) {
    return Yv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function lt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function an(e) {
    var t;
    return (t = (Yv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Yv(e) {
    return tl() ? e instanceof Node || e instanceof lt(e).Node : !1
}
function Ft(e) {
    return tl() ? e instanceof Element || e instanceof lt(e).Element : !1
}
function on(e) {
    return tl() ? e instanceof HTMLElement || e instanceof lt(e).HTMLElement : !1
}
function $p(e) {
    return !tl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot
}
const sE = new Set(["inline", "contents"]);
function ia(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = $t(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !sE.has(o)
}
const lE = new Set(["table", "td", "th"]);
function cE(e) {
    return lE.has(Go(e))
}
const uE = [":popover-open", ":modal"];
function nl(e) {
    return uE.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const dE = ["transform", "translate", "scale", "rotate", "perspective"]
  , fE = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , pE = ["paint", "layout", "strict", "content"];
function Id(e) {
    const t = Ld()
      , n = Ft(e) ? $t(e) : e;
    return dE.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || fE.some(r => (n.willChange || "").includes(r)) || pE.some(r => (n.contain || "").includes(r))
}
function mE(e) {
    let t = ar(e);
    for (; on(t) && !Uo(t); ) {
        if (Id(t))
            return t;
        if (nl(t))
            return null;
        t = ar(t)
    }
    return null
}
function Ld() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const hE = new Set(["html", "body", "#document"]);
function Uo(e) {
    return hE.has(Go(e))
}
function $t(e) {
    return lt(e).getComputedStyle(e)
}
function rl(e) {
    return Ft(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function ar(e) {
    if (Go(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || $p(e) && e.host || an(e);
    return $p(t) ? t.host : t
}
function Qv(e) {
    const t = ar(e);
    return Uo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : on(t) && ia(t) ? t : Qv(t)
}
function Hi(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Qv(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , a = lt(o);
    if (i) {
        const s = mu(a);
        return t.concat(a, a.visualViewport || [], ia(o) ? o : [], s && n ? Hi(s) : [])
    }
    return t.concat(o, Hi(o, [], n))
}
function mu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function qv(e) {
    const t = $t(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = on(e)
      , i = o ? e.offsetWidth : n
      , a = o ? e.offsetHeight : r
      , s = Cs(n) !== i || Cs(r) !== a;
    return s && (n = i,
    r = a),
    {
        width: n,
        height: r,
        $: s
    }
}
function zd(e) {
    return Ft(e) ? e : e.contextElement
}
function bo(e) {
    const t = zd(e);
    if (!on(t))
        return rn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = qv(t);
    let a = (i ? Cs(n.width) : n.width) / r
      , s = (i ? Cs(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: a,
        y: s
    }
}
const gE = rn(0);
function Kv(e) {
    const t = lt(e);
    return !Ld() || !t.visualViewport ? gE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function vE(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== lt(e) ? !1 : t
}
function Ar(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = zd(e);
    let a = rn(1);
    t && (r ? Ft(r) && (a = bo(r)) : a = bo(e));
    const s = vE(i, n, r) ? Kv(i) : rn(0);
    let l = (o.left + s.x) / a.x
      , u = (o.top + s.y) / a.y
      , d = o.width / a.x
      , f = o.height / a.y;
    if (i) {
        const y = lt(i)
          , g = r && Ft(r) ? lt(r) : r;
        let b = y
          , h = mu(b);
        for (; h && r && g !== b; ) {
            const w = bo(h)
              , v = h.getBoundingClientRect()
              , m = $t(h)
              , x = v.left + (h.clientLeft + parseFloat(m.paddingLeft)) * w.x
              , S = v.top + (h.clientTop + parseFloat(m.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            d *= w.x,
            f *= w.y,
            l += x,
            u += S,
            b = lt(h),
            h = mu(b)
        }
    }
    return ks({
        width: d,
        height: f,
        x: l,
        y: u
    })
}
function Fd(e, t) {
    const n = rl(e).scrollLeft;
    return t ? t.left + n : Ar(an(e)).left + n
}
function Gv(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Fd(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function yE(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , a = an(r)
      , s = t ? nl(t.floating) : !1;
    if (r === a || s && i)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = rn(1);
    const d = rn(0)
      , f = on(r);
    if ((f || !f && !i) && ((Go(r) !== "body" || ia(a)) && (l = rl(r)),
    on(r))) {
        const g = Ar(r);
        u = bo(r),
        d.x = g.x + r.clientLeft,
        d.y = g.y + r.clientTop
    }
    const y = a && !f && !i ? Gv(a, l, !0) : rn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + y.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + y.y
    }
}
function xE(e) {
    return Array.from(e.getClientRects())
}
function wE(e) {
    const t = an(e)
      , n = rl(e)
      , r = e.ownerDocument.body
      , o = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + Fd(e);
    const s = -n.scrollTop;
    return $t(r).direction === "rtl" && (a += it(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: a,
        y: s
    }
}
function bE(e, t) {
    const n = lt(e)
      , r = an(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , a = r.clientHeight
      , s = 0
      , l = 0;
    if (o) {
        i = o.width,
        a = o.height;
        const u = Ld();
        (!u || u && t === "fixed") && (s = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: s,
        y: l
    }
}
const SE = new Set(["absolute", "fixed"]);
function CE(e, t) {
    const n = Ar(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = on(e) ? bo(e) : rn(1)
      , a = e.clientWidth * i.x
      , s = e.clientHeight * i.y
      , l = o * i.x
      , u = r * i.y;
    return {
        width: a,
        height: s,
        x: l,
        y: u
    }
}
function Wp(e, t, n) {
    let r;
    if (t === "viewport")
        r = bE(e, n);
    else if (t === "document")
        r = wE(an(e));
    else if (Ft(t))
        r = CE(t, n);
    else {
        const o = Kv(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return ks(r)
}
function Xv(e, t) {
    const n = ar(e);
    return n === t || !Ft(n) || Uo(n) ? !1 : $t(n).position === "fixed" || Xv(n, t)
}
function EE(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Hi(e, [], !1).filter(s => Ft(s) && Go(s) !== "body")
      , o = null;
    const i = $t(e).position === "fixed";
    let a = i ? ar(e) : e;
    for (; Ft(a) && !Uo(a); ) {
        const s = $t(a)
          , l = Id(a);
        !l && s.position === "fixed" && (o = null),
        (i ? !l && !o : !l && s.position === "static" && !!o && SE.has(o.position) || ia(a) && !l && Xv(e, a)) ? r = r.filter(d => d !== a) : o = s,
        a = ar(a)
    }
    return t.set(e, r),
    r
}
function kE(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const a = [...n === "clippingAncestors" ? nl(t) ? [] : EE(t, this._c) : [].concat(n), r]
      , s = a[0]
      , l = a.reduce( (u, d) => {
        const f = Wp(t, d, o);
        return u.top = it(f.top, u.top),
        u.right = ir(f.right, u.right),
        u.bottom = ir(f.bottom, u.bottom),
        u.left = it(f.left, u.left),
        u
    }
    , Wp(t, s, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function NE(e) {
    const {width: t, height: n} = qv(e);
    return {
        width: t,
        height: n
    }
}
function TE(e, t, n) {
    const r = on(t)
      , o = an(t)
      , i = n === "fixed"
      , a = Ar(e, !0, i, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = rn(0);
    function u() {
        l.x = Fd(o)
    }
    if (r || !r && !i)
        if ((Go(t) !== "body" || ia(o)) && (s = rl(t)),
        r) {
            const g = Ar(t, !0, i, t);
            l.x = g.x + t.clientLeft,
            l.y = g.y + t.clientTop
        } else
            o && u();
    i && !r && o && u();
    const d = o && !r && !i ? Gv(o, s) : rn(0)
      , f = a.left + s.scrollLeft - l.x - d.x
      , y = a.top + s.scrollTop - l.y - d.y;
    return {
        x: f,
        y,
        width: a.width,
        height: a.height
    }
}
function rc(e) {
    return $t(e).position === "static"
}
function Up(e, t) {
    if (!on(e) || $t(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return an(e) === n && (n = n.ownerDocument.body),
    n
}
function Zv(e, t) {
    const n = lt(e);
    if (nl(e))
        return n;
    if (!on(e)) {
        let o = ar(e);
        for (; o && !Uo(o); ) {
            if (Ft(o) && !rc(o))
                return o;
            o = ar(o)
        }
        return n
    }
    let r = Up(e, t);
    for (; r && cE(r) && rc(r); )
        r = Up(r, t);
    return r && Uo(r) && rc(r) && !Id(r) ? n : r || mE(e) || n
}
const PE = async function(e) {
    const t = this.getOffsetParent || Zv
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: TE(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function jE(e) {
    return $t(e).direction === "rtl"
}
const RE = {
    convertOffsetParentRelativeRectToViewportRelativeRect: yE,
    getDocumentElement: an,
    getClippingRect: kE,
    getOffsetParent: Zv,
    getElementRects: PE,
    getClientRects: xE,
    getDimensions: NE,
    getScale: bo,
    isElement: Ft,
    isRTL: jE
};
function Jv(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function ME(e, t) {
    let n = null, r;
    const o = an(e);
    function i() {
        var s;
        clearTimeout(r),
        (s = n) == null || s.disconnect(),
        n = null
    }
    function a(s, l) {
        s === void 0 && (s = !1),
        l === void 0 && (l = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: d, top: f, width: y, height: g} = u;
        if (s || t(),
        !y || !g)
            return;
        const b = Pa(f)
          , h = Pa(o.clientWidth - (d + y))
          , w = Pa(o.clientHeight - (f + g))
          , v = Pa(d)
          , x = {
            rootMargin: -b + "px " + -h + "px " + -w + "px " + -v + "px",
            threshold: it(0, ir(1, l)) || 1
        };
        let S = !0;
        function C(k) {
            const E = k[0].intersectionRatio;
            if (E !== l) {
                if (!S)
                    return a();
                E ? a(!1, E) : r = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            E === 1 && !Jv(u, e.getBoundingClientRect()) && a(),
            S = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,x)
        }
        n.observe(e)
    }
    return a(!0),
    i
}
function DE(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = zd(e)
      , d = o || i ? [...u ? Hi(u) : [], ...Hi(t)] : [];
    d.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }),
        i && v.addEventListener("resize", n)
    }
    );
    const f = u && s ? ME(u, n) : null;
    let y = -1
      , g = null;
    a && (g = new ResizeObserver(v => {
        let[m] = v;
        m && m.target === u && g && (g.unobserve(t),
        cancelAnimationFrame(y),
        y = requestAnimationFrame( () => {
            var x;
            (x = g) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && g.observe(u),
    g.observe(t));
    let b, h = l ? Ar(e) : null;
    l && w();
    function w() {
        const v = Ar(e);
        h && !Jv(h, v) && n(),
        h = v,
        b = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var v;
        d.forEach(m => {
            o && m.removeEventListener("scroll", n),
            i && m.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (v = g) == null || v.disconnect(),
        g = null,
        l && cancelAnimationFrame(b)
    }
}
const OE = rE
  , _E = oE
  , AE = eE
  , IE = aE
  , LE = tE
  , Bp = JC
  , zE = iE
  , FE = (e, t, n) => {
    const r = new Map
      , o = {
        platform: RE,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return ZC(e, t, {
        ...o,
        platform: i
    })
}
;
var $E = typeof document < "u"
  , WE = function() {}
  , Ka = $E ? p.useLayoutEffect : WE;
function Ns(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ns(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ns(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function ey(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Vp(e, t) {
    const n = ey(e);
    return Math.round(t * n) / n
}
function oc(e) {
    const t = p.useRef(e);
    return Ka( () => {
        t.current = e
    }
    ),
    t
}
function UE(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: a}={}, transform: s=!0, whileElementsMounted: l, open: u} = e
      , [d,f] = p.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [y,g] = p.useState(r);
    Ns(y, r) || g(r);
    const [b,h] = p.useState(null)
      , [w,v] = p.useState(null)
      , m = p.useCallback(N => {
        N !== k.current && (k.current = N,
        h(N))
    }
    , [])
      , x = p.useCallback(N => {
        N !== E.current && (E.current = N,
        v(N))
    }
    , [])
      , S = i || b
      , C = a || w
      , k = p.useRef(null)
      , E = p.useRef(null)
      , j = p.useRef(d)
      , M = l != null
      , D = oc(l)
      , $ = oc(o)
      , A = oc(u)
      , B = p.useCallback( () => {
        if (!k.current || !E.current)
            return;
        const N = {
            placement: t,
            strategy: n,
            middleware: y
        };
        $.current && (N.platform = $.current),
        FE(k.current, E.current, N).then(P => {
            const I = {
                ...P,
                isPositioned: A.current !== !1
            };
            _.current && !Ns(j.current, I) && (j.current = I,
            Ur.flushSync( () => {
                f(I)
            }
            ))
        }
        )
    }
    , [y, t, n, $, A]);
    Ka( () => {
        u === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
        f(N => ({
            ...N,
            isPositioned: !1
        })))
    }
    , [u]);
    const _ = p.useRef(!1);
    Ka( () => (_.current = !0,
    () => {
        _.current = !1
    }
    ), []),
    Ka( () => {
        if (S && (k.current = S),
        C && (E.current = C),
        S && C) {
            if (D.current)
                return D.current(S, C, B);
            B()
        }
    }
    , [S, C, B, D, M]);
    const H = p.useMemo( () => ({
        reference: k,
        floating: E,
        setReference: m,
        setFloating: x
    }), [m, x])
      , F = p.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , U = p.useMemo( () => {
        const N = {
            position: n,
            left: 0,
            top: 0
        };
        if (!F.floating)
            return N;
        const P = Vp(F.floating, d.x)
          , I = Vp(F.floating, d.y);
        return s ? {
            ...N,
            transform: "translate(" + P + "px, " + I + "px)",
            ...ey(F.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: P,
            top: I
        }
    }
    , [n, s, F.floating, d.x, d.y]);
    return p.useMemo( () => ({
        ...d,
        update: B,
        refs: H,
        elements: F,
        floatingStyles: U
    }), [d, B, H, F, U])
}
const BE = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Bp({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Bp({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , VE = (e, t) => ({
    ...OE(e),
    options: [e, t]
})
  , HE = (e, t) => ({
    ..._E(e),
    options: [e, t]
})
  , YE = (e, t) => ({
    ...zE(e),
    options: [e, t]
})
  , QE = (e, t) => ({
    ...AE(e),
    options: [e, t]
})
  , qE = (e, t) => ({
    ...IE(e),
    options: [e, t]
})
  , KE = (e, t) => ({
    ...LE(e),
    options: [e, t]
})
  , GE = (e, t) => ({
    ...BE(e),
    options: [e, t]
});
var XE = "Arrow"
  , ty = p.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return c.jsx(Z.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
ty.displayName = XE;
var ZE = ty;
function ny(e) {
    const [t,n] = p.useState(void 0);
    return Le( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let a, s;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    a = u.inlineSize,
                    s = u.blockSize
                } else
                    a = e.offsetWidth,
                    s = e.offsetHeight;
                n({
                    width: a,
                    height: s
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var $d = "Popper"
  , [ry,ol] = Br($d)
  , [JE,oy] = ry($d)
  , iy = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = p.useState(null);
    return c.jsx(JE, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
iy.displayName = $d;
var ay = "PopperAnchor"
  , sy = p.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = oy(ay, n)
      , a = p.useRef(null)
      , s = ue(t, a);
    return p.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || a.current)
    }
    ),
    r ? null : c.jsx(Z.div, {
        ...o,
        ref: s
    })
}
);
sy.displayName = ay;
var Wd = "PopperContent"
  , [ek,tk] = ry(Wd)
  , ly = p.forwardRef( (e, t) => {
    var L, ae, ke, ie, ee, re;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: a=0, arrowPadding: s=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: y=!1, updatePositionStrategy: g="optimized", onPlaced: b, ...h} = e
      , w = oy(Wd, n)
      , [v,m] = p.useState(null)
      , x = ue(t, ze => m(ze))
      , [S,C] = p.useState(null)
      , k = ny(S)
      , E = (k == null ? void 0 : k.width) ?? 0
      , j = (k == null ? void 0 : k.height) ?? 0
      , M = r + (i !== "center" ? "-" + i : "")
      , D = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , $ = Array.isArray(u) ? u : [u]
      , A = $.length > 0
      , B = {
        padding: D,
        boundary: $.filter(rk),
        altBoundary: A
    }
      , {refs: _, floatingStyles: H, placement: F, isPositioned: U, middlewareData: N} = UE({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...ze) => DE(...ze, {
            animationFrame: g === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [VE({
            mainAxis: o + j,
            alignmentAxis: a
        }), l && HE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? YE() : void 0,
            ...B
        }), l && QE({
            ...B
        }), qE({
            ...B,
            apply: ({elements: ze, rects: pt, availableWidth: fr, availableHeight: Cn}) => {
                const {width: pr, height: Zo} = pt.reference
                  , Hr = ze.floating.style;
                Hr.setProperty("--radix-popper-available-width", `${fr}px`),
                Hr.setProperty("--radix-popper-available-height", `${Cn}px`),
                Hr.setProperty("--radix-popper-anchor-width", `${pr}px`),
                Hr.setProperty("--radix-popper-anchor-height", `${Zo}px`)
            }
        }), S && GE({
            element: S,
            padding: s
        }), ok({
            arrowWidth: E,
            arrowHeight: j
        }), y && KE({
            strategy: "referenceHidden",
            ...B
        })]
    })
      , [P,I] = dy(F)
      , V = zt(b);
    Le( () => {
        U && (V == null || V())
    }
    , [U, V]);
    const W = (L = N.arrow) == null ? void 0 : L.x
      , G = (ae = N.arrow) == null ? void 0 : ae.y
      , Y = ((ke = N.arrow) == null ? void 0 : ke.centerOffset) !== 0
      , [pe,Ee] = p.useState();
    return Le( () => {
        v && Ee(window.getComputedStyle(v).zIndex)
    }
    , [v]),
    c.jsx("div", {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: U ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: pe,
            "--radix-popper-transform-origin": [(ie = N.transformOrigin) == null ? void 0 : ie.x, (ee = N.transformOrigin) == null ? void 0 : ee.y].join(" "),
            ...((re = N.hide) == null ? void 0 : re.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(ek, {
            scope: n,
            placedSide: P,
            onArrowChange: C,
            arrowX: W,
            arrowY: G,
            shouldHideArrow: Y,
            children: c.jsx(Z.div, {
                "data-side": P,
                "data-align": I,
                ...h,
                ref: x,
                style: {
                    ...h.style,
                    animation: U ? void 0 : "none"
                }
            })
        })
    })
}
);
ly.displayName = Wd;
var cy = "PopperArrow"
  , nk = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , uy = p.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = tk(cy, r)
      , a = nk[i.placedSide];
    return c.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [a]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(ZE, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
uy.displayName = cy;
function rk(e) {
    return e !== null
}
var ok = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, v, m;
        const {placement: n, rects: r, middlewareData: o} = t
          , a = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , s = a ? 0 : e.arrowWidth
          , l = a ? 0 : e.arrowHeight
          , [u,d] = dy(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , y = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + s / 2
          , g = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let b = ""
          , h = "";
        return u === "bottom" ? (b = a ? f : `${y}px`,
        h = `${-l}px`) : u === "top" ? (b = a ? f : `${y}px`,
        h = `${r.floating.height + l}px`) : u === "right" ? (b = `${-l}px`,
        h = a ? f : `${g}px`) : u === "left" && (b = `${r.floating.width + l}px`,
        h = a ? f : `${g}px`),
        {
            data: {
                x: b,
                y: h
            }
        }
    }
});
function dy(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var ik = iy
  , fy = sy
  , py = ly
  , my = uy
  , [il,iR] = Br("Tooltip", [ol])
  , Ud = ol()
  , hy = "TooltipProvider"
  , ak = 700
  , Hp = "tooltip.open"
  , [sk,gy] = il(hy)
  , vy = e => {
    const {__scopeTooltip: t, delayDuration: n=ak, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , a = p.useRef(!0)
      , s = p.useRef(!1)
      , l = p.useRef(0);
    return p.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(sk, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: n,
        onOpen: p.useCallback( () => {
            window.clearTimeout(l.current),
            a.current = !1
        }
        , []),
        onClose: p.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => a.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: p.useCallback(u => {
            s.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
vy.displayName = hy;
var yy = "Tooltip"
  , [aR,al] = il(yy)
  , hu = "TooltipTrigger"
  , lk = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = al(hu, n)
      , i = gy(hu, n)
      , a = Ud(n)
      , s = p.useRef(null)
      , l = ue(t, s, o.onTriggerChange)
      , u = p.useRef(!1)
      , d = p.useRef(!1)
      , f = p.useCallback( () => u.current = !1, []);
    return p.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    c.jsx(fy, {
        asChild: !0,
        ...a,
        children: c.jsx(Z.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: K(e.onPointerMove, y => {
                y.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: K(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: K(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: K(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: K(e.onBlur, o.onClose),
            onClick: K(e.onClick, o.onClose)
        })
    })
}
);
lk.displayName = hu;
var ck = "TooltipPortal"
  , [sR,uk] = il(ck, {
    forceMount: void 0
})
  , Bo = "TooltipContent"
  , xy = p.forwardRef( (e, t) => {
    const n = uk(Bo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , a = al(Bo, e.__scopeTooltip);
    return c.jsx(Vr, {
        present: r || a.open,
        children: a.disableHoverableContent ? c.jsx(wy, {
            side: o,
            ...i,
            ref: t
        }) : c.jsx(dk, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , dk = p.forwardRef( (e, t) => {
    const n = al(Bo, e.__scopeTooltip)
      , r = gy(Bo, e.__scopeTooltip)
      , o = p.useRef(null)
      , i = ue(t, o)
      , [a,s] = p.useState(null)
      , {trigger: l, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , y = p.useCallback( () => {
        s(null),
        f(!1)
    }
    , [f])
      , g = p.useCallback( (b, h) => {
        const w = b.currentTarget
          , v = {
            x: b.clientX,
            y: b.clientY
        }
          , m = gk(v, w.getBoundingClientRect())
          , x = vk(v, m)
          , S = yk(h.getBoundingClientRect())
          , C = wk([...x, ...S]);
        s(C),
        f(!0)
    }
    , [f]);
    return p.useEffect( () => () => y(), [y]),
    p.useEffect( () => {
        if (l && d) {
            const b = w => g(w, d)
              , h = w => g(w, l);
            return l.addEventListener("pointerleave", b),
            d.addEventListener("pointerleave", h),
            () => {
                l.removeEventListener("pointerleave", b),
                d.removeEventListener("pointerleave", h)
            }
        }
    }
    , [l, d, g, y]),
    p.useEffect( () => {
        if (a) {
            const b = h => {
                const w = h.target
                  , v = {
                    x: h.clientX,
                    y: h.clientY
                }
                  , m = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , x = !xk(v, a);
                m ? y() : x && (y(),
                u())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [l, d, a, u, y]),
    c.jsx(wy, {
        ...e,
        ref: i
    })
}
)
  , [fk,pk] = il(yy, {
    isInside: !1
})
  , mk = bb("TooltipContent")
  , wy = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: a, ...s} = e
      , l = al(Bo, n)
      , u = Ud(n)
      , {onClose: d} = l;
    return p.useEffect( () => (document.addEventListener(Hp, d),
    () => document.removeEventListener(Hp, d)), [d]),
    p.useEffect( () => {
        if (l.trigger) {
            const f = y => {
                const g = y.target;
                g != null && g.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    c.jsx(na, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: c.jsxs(py, {
            "data-state": l.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(mk, {
                children: r
            }), c.jsx(fk, {
                scope: n,
                isInside: !0,
                children: c.jsx(Bb, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
xy.displayName = Bo;
var by = "TooltipArrow"
  , hk = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Ud(n);
    return pk(by, n).isInside ? null : c.jsx(my, {
        ...o,
        ...r,
        ref: t
    })
}
);
hk.displayName = by;
function gk(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function vk(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function yk(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function xk(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
        const s = t[i]
          , l = t[a]
          , u = s.x
          , d = s.y
          , f = l.x
          , y = l.y;
        d > r != y > r && n < (f - u) * (r - d) / (y - d) + u && (o = !o)
    }
    return o
}
function wk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    bk(t)
}
function bk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , a = t[t.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , a = n[n.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Sk = vy
  , Sy = xy;
const Ck = Sk
  , Ek = p.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(Sy, {
    ref: r,
    sideOffset: t,
    className: te("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Ek.displayName = Sy.displayName;
var sl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , ll = typeof window > "u" || "Deno"in globalThis;
function Rt() {}
function kk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Nk(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Tk(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function gu(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Pk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Yp(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: a, stale: s} = e;
    if (a) {
        if (r) {
            if (t.queryHash !== Bd(a, t.options))
                return !1
        } else if (!Qi(t.queryKey, a))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof s == "boolean" && t.isStale() !== s || o && o !== t.state.fetchStatus || i && !i(t))
}
function Qp(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Yi(t.options.mutationKey) !== Yi(i))
                return !1
        } else if (!Qi(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Bd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Yi)(e)
}
function Yi(e) {
    return JSON.stringify(e, (t, n) => vu(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Qi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Qi(e[n], t[n])) : !1
}
function Cy(e, t) {
    if (e === t)
        return e;
    const n = qp(e) && qp(t);
    if (n || vu(e) && vu(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , a = i.length
          , s = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let d = 0; d < a; d++) {
            const f = n ? d : i[d];
            (!n && l.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (s[f] = void 0,
            u++) : (s[f] = Cy(e[f], t[f]),
            s[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === a && u === o ? e : s
    }
    return t
}
function qp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function vu(e) {
    if (!Kp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Kp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Kp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function jk(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Rk(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Cy(e, t) : t
}
function Mk(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Dk(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Vd = Symbol();
function Ey(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Vd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Sr, zn, No, Pm, Ok = (Pm = class extends sl {
    constructor() {
        super();
        oe(this, Sr);
        oe(this, zn);
        oe(this, No);
        q(this, No, t => {
            if (!ll && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, zn) || this.setEventListener(T(this, No))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, zn)) == null || t.call(this),
        q(this, zn, void 0))
    }
    setEventListener(t) {
        var n;
        q(this, No, t),
        (n = T(this, zn)) == null || n.call(this),
        q(this, zn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        T(this, Sr) !== t && (q(this, Sr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof T(this, Sr) == "boolean" ? T(this, Sr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Sr = new WeakMap,
zn = new WeakMap,
No = new WeakMap,
Pm), ky = new Ok, To, Fn, Po, jm, _k = (jm = class extends sl {
    constructor() {
        super();
        oe(this, To, !0);
        oe(this, Fn);
        oe(this, Po);
        q(this, Po, t => {
            if (!ll && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, Fn) || this.setEventListener(T(this, Po))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, Fn)) == null || t.call(this),
        q(this, Fn, void 0))
    }
    setEventListener(t) {
        var n;
        q(this, Po, t),
        (n = T(this, Fn)) == null || n.call(this),
        q(this, Fn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        T(this, To) !== t && (q(this, To, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return T(this, To)
    }
}
,
To = new WeakMap,
Fn = new WeakMap,
Po = new WeakMap,
jm), Ts = new _k;
function Ak() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Ik(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Ny(e) {
    return (e ?? "online") === "online" ? Ts.isOnline() : !0
}
var Ty = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function ic(e) {
    return e instanceof Ty
}
function Py(e) {
    let t = !1, n = 0, r = !1, o;
    const i = Ak()
      , a = h => {
        var w;
        r || (y(new Ty(h)),
        (w = e.abort) == null || w.call(e))
    }
      , s = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => ky.isFocused() && (e.networkMode === "always" || Ts.isOnline()) && e.canRun()
      , d = () => Ny(e.networkMode) && e.canRun()
      , f = h => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, h),
        o == null || o(),
        i.resolve(h))
    }
      , y = h => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, h),
        o == null || o(),
        i.reject(h))
    }
      , g = () => new Promise(h => {
        var w;
        o = v => {
            (r || u()) && h(v)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var h;
        o = void 0,
        r || (h = e.onContinue) == null || h.call(e)
    }
    )
      , b = () => {
        if (r)
            return;
        let h;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            h = w ?? e.fn()
        } catch (v) {
            h = Promise.reject(v)
        }
        Promise.resolve(h).then(f).catch(v => {
            var k;
            if (r)
                return;
            const m = e.retry ?? (ll ? 0 : 3)
              , x = e.retryDelay ?? Ik
              , S = typeof x == "function" ? x(n, v) : x
              , C = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, v);
            if (t || !C) {
                y(v);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, v),
            jk(S).then( () => u() ? void 0 : g()).then( () => {
                t ? y(v) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: a,
        continue: () => (o == null || o(),
        i),
        cancelRetry: s,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? b() : g().then(b),
        i)
    }
}
var Lk = e => setTimeout(e, 0);
function zk() {
    let e = []
      , t = 0
      , n = s => {
        s()
    }
      , r = s => {
        s()
    }
      , o = Lk;
    const i = s => {
        t ? e.push(s) : o( () => {
            n(s)
        }
        )
    }
      , a = () => {
        const s = e;
        e = [],
        s.length && o( () => {
            r( () => {
                s.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: s => {
            let l;
            t++;
            try {
                l = s()
            } finally {
                t--,
                t || a()
            }
            return l
        }
        ,
        batchCalls: s => (...l) => {
            i( () => {
                s(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: s => {
            n = s
        }
        ,
        setBatchNotifyFunction: s => {
            r = s
        }
        ,
        setScheduler: s => {
            o = s
        }
    }
}
var Qe = zk(), Cr, Rm, jy = (Rm = class {
    constructor() {
        oe(this, Cr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Nk(this.gcTime) && q(this, Cr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ll ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        T(this, Cr) && (clearTimeout(T(this, Cr)),
        q(this, Cr, void 0))
    }
}
,
Cr = new WeakMap,
Rm), jo, Er, gt, kr, Ue, Ki, Nr, Mt, ln, Mm, Fk = (Mm = class extends jy {
    constructor(t) {
        super();
        oe(this, Mt);
        oe(this, jo);
        oe(this, Er);
        oe(this, gt);
        oe(this, kr);
        oe(this, Ue);
        oe(this, Ki);
        oe(this, Nr);
        q(this, Nr, !1),
        q(this, Ki, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        q(this, kr, t.client),
        q(this, gt, T(this, kr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        q(this, jo, Wk(this.options)),
        this.state = t.state ?? T(this, jo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = T(this, Ue)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...T(this, Ki),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && T(this, gt).remove(this)
    }
    setData(t, n) {
        const r = Rk(this.state.data, t, this.options);
        return Fe(this, Mt, ln).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Fe(this, Mt, ln).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = T(this, Ue)) == null ? void 0 : r.promise;
        return (o = T(this, Ue)) == null || o.cancel(t),
        n ? n.then(Rt).catch(Rt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(T(this, jo))
    }
    isActive() {
        return this.observers.some(t => Pk(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Vd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => gu(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Tk(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = T(this, Ue)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = T(this, Ue)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        T(this, gt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (T(this, Ue) && (T(this, Nr) ? T(this, Ue).cancel({
            revert: !0
        }) : T(this, Ue).cancelRetry()),
        this.scheduleGc()),
        T(this, gt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Fe(this, Mt, ln).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (T(this, Ue))
                return T(this, Ue).continueRetry(),
                T(this, Ue).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const y = this.observers.find(g => g.options.queryFn);
            y && this.setOptions(y.options)
        }
        const r = new AbortController
          , o = y => {
            Object.defineProperty(y, "signal", {
                enumerable: !0,
                get: () => (q(this, Nr, !0),
                r.signal)
            })
        }
          , i = () => {
            const y = Ey(this.options, n)
              , b = ( () => {
                const h = {
                    client: T(this, kr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(h),
                h
            }
            )();
            return q(this, Nr, !1),
            this.options.persister ? this.options.persister(y, b, this) : y(b)
        }
          , s = ( () => {
            const y = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: T(this, kr),
                state: this.state,
                fetchFn: i
            };
            return o(y),
            y
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(s, this),
        q(this, Er, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = s.fetchOptions) == null ? void 0 : d.meta)) && Fe(this, Mt, ln).call(this, {
            type: "fetch",
            meta: (f = s.fetchOptions) == null ? void 0 : f.meta
        });
        const l = y => {
            var g, b, h, w;
            ic(y) && y.silent || Fe(this, Mt, ln).call(this, {
                type: "error",
                error: y
            }),
            ic(y) || ((b = (g = T(this, gt).config).onError) == null || b.call(g, y, this),
            (w = (h = T(this, gt).config).onSettled) == null || w.call(h, this.state.data, y, this)),
            this.scheduleGc()
        }
        ;
        return q(this, Ue, Py({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: s.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: y => {
                var g, b, h, w;
                if (y === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(y)
                } catch (v) {
                    l(v);
                    return
                }
                (b = (g = T(this, gt).config).onSuccess) == null || b.call(g, y, this),
                (w = (h = T(this, gt).config).onSettled) == null || w.call(h, y, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (y, g) => {
                Fe(this, Mt, ln).call(this, {
                    type: "failed",
                    failureCount: y,
                    error: g
                })
            }
            ,
            onPause: () => {
                Fe(this, Mt, ln).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Fe(this, Mt, ln).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: s.options.retry,
            retryDelay: s.options.retryDelay,
            networkMode: s.options.networkMode,
            canRun: () => !0
        })),
        T(this, Ue).start()
    }
}
,
jo = new WeakMap,
Er = new WeakMap,
gt = new WeakMap,
kr = new WeakMap,
Ue = new WeakMap,
Ki = new WeakMap,
Nr = new WeakMap,
Mt = new WeakSet,
ln = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...$k(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return q(this, Er, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return ic(o) && o.revert && T(this, Er) ? {
                ...T(this, Er),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Qe.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        T(this, gt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Mm);
function $k(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Ny(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Wk(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ht, Dm, Uk = (Dm = class extends sl {
    constructor(t={}) {
        super();
        oe(this, Ht);
        this.config = t,
        q(this, Ht, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? Bd(o, n);
        let a = this.get(i);
        return a || (a = new Fk({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(a)),
        a
    }
    add(t) {
        T(this, Ht).has(t.queryHash) || (T(this, Ht).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = T(this, Ht).get(t.queryHash);
        n && (t.destroy(),
        n === t && T(this, Ht).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Qe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return T(this, Ht).get(t)
    }
    getAll() {
        return [...T(this, Ht).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Yp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Yp(t, r)) : n
    }
    notify(t) {
        Qe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Qe.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Qe.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Ht = new WeakMap,
Dm), Yt, He, Tr, Qt, Mn, Om, Bk = (Om = class extends jy {
    constructor(t) {
        super();
        oe(this, Qt);
        oe(this, Yt);
        oe(this, He);
        oe(this, Tr);
        this.mutationId = t.mutationId,
        q(this, He, t.mutationCache),
        q(this, Yt, []),
        this.state = t.state || Vk(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        T(this, Yt).includes(t) || (T(this, Yt).push(t),
        this.clearGcTimeout(),
        T(this, He).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        q(this, Yt, T(this, Yt).filter(n => n !== t)),
        this.scheduleGc(),
        T(this, He).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        T(this, Yt).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, He).remove(this))
    }
    continue() {
        var t;
        return ((t = T(this, Tr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, a, s, l, u, d, f, y, g, b, h, w, v, m, x, S, C, k, E, j;
        const n = () => {
            Fe(this, Qt, Mn).call(this, {
                type: "continue"
            })
        }
        ;
        q(this, Tr, Py({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, D) => {
                Fe(this, Qt, Mn).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: D
                })
            }
            ,
            onPause: () => {
                Fe(this, Qt, Mn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, He).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !T(this, Tr).canStart();
        try {
            if (r)
                n();
            else {
                Fe(this, Qt, Mn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((a = (i = T(this, He).config).onMutate) == null ? void 0 : a.call(i, t, this));
                const D = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                D !== this.state.context && Fe(this, Qt, Mn).call(this, {
                    type: "pending",
                    context: D,
                    variables: t,
                    isPaused: o
                })
            }
            const M = await T(this, Tr).start();
            return await ((d = (u = T(this, He).config).onSuccess) == null ? void 0 : d.call(u, M, t, this.state.context, this)),
            await ((y = (f = this.options).onSuccess) == null ? void 0 : y.call(f, M, t, this.state.context)),
            await ((b = (g = T(this, He).config).onSettled) == null ? void 0 : b.call(g, M, null, this.state.variables, this.state.context, this)),
            await ((w = (h = this.options).onSettled) == null ? void 0 : w.call(h, M, null, t, this.state.context)),
            Fe(this, Qt, Mn).call(this, {
                type: "success",
                data: M
            }),
            M
        } catch (M) {
            try {
                throw await ((m = (v = T(this, He).config).onError) == null ? void 0 : m.call(v, M, t, this.state.context, this)),
                await ((S = (x = this.options).onError) == null ? void 0 : S.call(x, M, t, this.state.context)),
                await ((k = (C = T(this, He).config).onSettled) == null ? void 0 : k.call(C, void 0, M, this.state.variables, this.state.context, this)),
                await ((j = (E = this.options).onSettled) == null ? void 0 : j.call(E, void 0, M, t, this.state.context)),
                M
            } finally {
                Fe(this, Qt, Mn).call(this, {
                    type: "error",
                    error: M
                })
            }
        } finally {
            T(this, He).runNext(this)
        }
    }
}
,
Yt = new WeakMap,
He = new WeakMap,
Tr = new WeakMap,
Qt = new WeakSet,
Mn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Qe.batch( () => {
        T(this, Yt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        T(this, He).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Om);
function Vk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var dn, Dt, Gi, _m, Hk = (_m = class extends sl {
    constructor(t={}) {
        super();
        oe(this, dn);
        oe(this, Dt);
        oe(this, Gi);
        this.config = t,
        q(this, dn, new Set),
        q(this, Dt, new Map),
        q(this, Gi, 0)
    }
    build(t, n, r) {
        const o = new Bk({
            mutationCache: this,
            mutationId: ++sa(this, Gi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        T(this, dn).add(t);
        const n = ja(t);
        if (typeof n == "string") {
            const r = T(this, Dt).get(n);
            r ? r.push(t) : T(this, Dt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (T(this, dn).delete(t)) {
            const n = ja(t);
            if (typeof n == "string") {
                const r = T(this, Dt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && T(this, Dt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ja(t);
        if (typeof n == "string") {
            const r = T(this, Dt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ja(t);
        if (typeof n == "string") {
            const o = (r = T(this, Dt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Qe.batch( () => {
            T(this, dn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            T(this, dn).clear(),
            T(this, Dt).clear()
        }
        )
    }
    getAll() {
        return Array.from(T(this, dn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Qp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Qp(t, n))
    }
    notify(t) {
        Qe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Qe.batch( () => Promise.all(t.map(n => n.continue().catch(Rt))))
    }
}
,
dn = new WeakMap,
Dt = new WeakMap,
Gi = new WeakMap,
_m);
function ja(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Gp(e) {
    return {
        onFetch: (t, n) => {
            var d, f, y, g, b;
            const r = t.options
              , o = (y = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : y.direction
              , i = ((g = t.state.data) == null ? void 0 : g.pages) || []
              , a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let s = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let h = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? h = !0 : t.signal.addEventListener("abort", () => {
                            h = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , v = Ey(t.options, t.fetchOptions)
                  , m = async (x, S, C) => {
                    if (h)
                        return Promise.reject();
                    if (S == null && x.pages.length)
                        return Promise.resolve(x);
                    const E = ( () => {
                        const $ = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w($),
                        $
                    }
                    )()
                      , j = await v(E)
                      , {maxPages: M} = t.options
                      , D = C ? Dk : Mk;
                    return {
                        pages: D(x.pages, j, M),
                        pageParams: D(x.pageParams, S, M)
                    }
                }
                ;
                if (o && i.length) {
                    const x = o === "backward"
                      , S = x ? Yk : Xp
                      , C = {
                        pages: i,
                        pageParams: a
                    }
                      , k = S(r, C);
                    s = await m(C, k, x)
                } else {
                    const x = e ?? i.length;
                    do {
                        const S = l === 0 ? a[0] ?? r.initialPageParam : Xp(r, s);
                        if (l > 0 && S == null)
                            break;
                        s = await m(s, S),
                        l++
                    } while (l < x)
                }
                return s
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var h, w;
                return (w = (h = t.options).persister) == null ? void 0 : w.call(h, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Xp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Yk(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ne, $n, Wn, Ro, Mo, Un, Do, Oo, Am, Qk = (Am = class {
    constructor(e={}) {
        oe(this, Ne);
        oe(this, $n);
        oe(this, Wn);
        oe(this, Ro);
        oe(this, Mo);
        oe(this, Un);
        oe(this, Do);
        oe(this, Oo);
        q(this, Ne, e.queryCache || new Uk),
        q(this, $n, e.mutationCache || new Hk),
        q(this, Wn, e.defaultOptions || {}),
        q(this, Ro, new Map),
        q(this, Mo, new Map),
        q(this, Un, 0)
    }
    mount() {
        sa(this, Un)._++,
        T(this, Un) === 1 && (q(this, Do, ky.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, Ne).onFocus())
        }
        )),
        q(this, Oo, Ts.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, Ne).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        sa(this, Un)._--,
        T(this, Un) === 0 && ((e = T(this, Do)) == null || e.call(this),
        q(this, Do, void 0),
        (t = T(this, Oo)) == null || t.call(this),
        q(this, Oo, void 0))
    }
    isFetching(e) {
        return T(this, Ne).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return T(this, $n).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = T(this, Ne).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = T(this, Ne).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(gu(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return T(this, Ne).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = T(this, Ne).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , a = kk(t, i);
        if (a !== void 0)
            return T(this, Ne).build(this, r).setData(a, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Qe.batch( () => T(this, Ne).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = T(this, Ne).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = T(this, Ne);
        Qe.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = T(this, Ne);
        return Qe.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Qe.batch( () => T(this, Ne).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Rt).catch(Rt)
    }
    invalidateQueries(e, t={}) {
        return Qe.batch( () => (T(this, Ne).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Qe.batch( () => T(this, Ne).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(Rt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(Rt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, Ne).build(this, t);
        return n.isStaleByTime(gu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Rt).catch(Rt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Gp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Rt).catch(Rt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Gp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Ts.isOnline() ? T(this, $n).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return T(this, Ne)
    }
    getMutationCache() {
        return T(this, $n)
    }
    getDefaultOptions() {
        return T(this, Wn)
    }
    setDefaultOptions(e) {
        q(this, Wn, e)
    }
    setQueryDefaults(e, t) {
        T(this, Ro).set(Yi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...T(this, Ro).values()]
          , n = {};
        return t.forEach(r => {
            Qi(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        T(this, Mo).set(Yi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...T(this, Mo).values()]
          , n = {};
        return t.forEach(r => {
            Qi(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...T(this, Wn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Bd(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Vd && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...T(this, Wn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        T(this, Ne).clear(),
        T(this, $n).clear()
    }
}
,
Ne = new WeakMap,
$n = new WeakMap,
Wn = new WeakMap,
Ro = new WeakMap,
Mo = new WeakMap,
Un = new WeakMap,
Do = new WeakMap,
Oo = new WeakMap,
Am), qk = p.createContext(void 0), Kk = ({client: e, children: t}) => (p.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(qk.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ps() {
    return Ps = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ps.apply(this, arguments)
}
var Hn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Hn || (Hn = {}));
const Zp = "popstate";
function Gk(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: a, hash: s} = r.location;
        return yu("", {
            pathname: i,
            search: a,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : My(o)
    }
    return Zk(t, n, null, e)
}
function rt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Ry(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Xk() {
    return Math.random().toString(36).substr(2, 8)
}
function Jp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function yu(e, t, n, r) {
    return n === void 0 && (n = null),
    Ps({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? cl(t) : t, {
        state: n,
        key: t && t.key || r || Xk()
    })
}
function My(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function cl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Zk(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , a = o.history
      , s = Hn.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    a.replaceState(Ps({}, a.state, {
        idx: u
    }), ""));
    function d() {
        return (a.state || {
            idx: null
        }).idx
    }
    function f() {
        s = Hn.Pop;
        let w = d()
          , v = w == null ? null : w - u;
        u = w,
        l && l({
            action: s,
            location: h.location,
            delta: v
        })
    }
    function y(w, v) {
        s = Hn.Push;
        let m = yu(h.location, w, v);
        u = d() + 1;
        let x = Jp(m, u)
          , S = h.createHref(m);
        try {
            a.pushState(x, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        i && l && l({
            action: s,
            location: h.location,
            delta: 1
        })
    }
    function g(w, v) {
        s = Hn.Replace;
        let m = yu(h.location, w, v);
        u = d();
        let x = Jp(m, u)
          , S = h.createHref(m);
        a.replaceState(x, "", S),
        i && l && l({
            action: s,
            location: h.location,
            delta: 0
        })
    }
    function b(w) {
        let v = o.location.origin !== "null" ? o.location.origin : o.location.href
          , m = typeof w == "string" ? w : My(w);
        return m = m.replace(/ $/, "%20"),
        rt(v, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,v)
    }
    let h = {
        get action() {
            return s
        },
        get location() {
            return e(o, a)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Zp, f),
            l = w,
            () => {
                o.removeEventListener(Zp, f),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: b,
        encodeLocation(w) {
            let v = b(w);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: y,
        replace: g,
        go(w) {
            return a.go(w)
        }
    };
    return h
}
var em;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(em || (em = {}));
function Jk(e, t, n) {
    return n === void 0 && (n = "/"),
    e2(e, t, n, !1)
}
function e2(e, t, n, r) {
    let o = typeof t == "string" ? cl(t) : t
      , i = _y(o.pathname || "/", n);
    if (i == null)
        return null;
    let a = Dy(e);
    t2(a);
    let s = null;
    for (let l = 0; s == null && l < a.length; ++l) {
        let u = f2(i);
        s = u2(a[l], u, r)
    }
    return s
}
function Dy(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, a, s) => {
        let l = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: a,
            route: i
        };
        l.relativePath.startsWith("/") && (rt(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = So([r, l.relativePath])
          , d = n.concat(l);
        i.children && i.children.length > 0 && (rt(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Dy(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: l2(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, a) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
            o(i, a);
        else
            for (let l of Oy(i.path))
                o(i, a, l)
    }
    ),
    t
}
function Oy(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let a = Oy(r.join("/"))
      , s = [];
    return s.push(...a.map(l => l === "" ? i : [i, l].join("/"))),
    o && s.push(...a),
    s.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function t2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : c2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const n2 = /^:[\w-]+$/
  , r2 = 3
  , o2 = 2
  , i2 = 1
  , a2 = 10
  , s2 = -2
  , tm = e => e === "*";
function l2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(tm) && (r += s2),
    t && (r += o2),
    n.filter(o => !tm(o)).reduce( (o, i) => o + (n2.test(i) ? r2 : i === "" ? i2 : a2), r)
}
function c2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function u2(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , a = [];
    for (let s = 0; s < r.length; ++s) {
        let l = r[s]
          , u = s === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , f = nm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , y = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = nm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(o, f.params),
        a.push({
            params: o,
            pathname: So([i, f.pathname]),
            pathnameBase: p2(So([i, f.pathnameBase])),
            route: y
        }),
        f.pathnameBase !== "/" && (i = So([i, f.pathnameBase]))
    }
    return a
}
function nm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = d2(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , a = i.replace(/(.)\/+$/, "$1")
      , s = o.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: y, isOptional: g} = d;
            if (y === "*") {
                let h = s[f] || "";
                a = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1")
            }
            const b = s[f];
            return g && !b ? u[y] = void 0 : u[y] = (b || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: a,
        pattern: e
    }
}
function d2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ry(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, s, l) => (r.push({
        paramName: s,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function f2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Ry(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function _y(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const So = e => e.join("/").replace(/\/\/+/g, "/")
  , p2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function m2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Ay = ["post", "put", "patch", "delete"];
new Set(Ay);
const h2 = ["get", ...Ay];
new Set(h2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function js() {
    return js = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    js.apply(this, arguments)
}
const g2 = p.createContext(null)
  , v2 = p.createContext(null)
  , Iy = p.createContext(null)
  , ul = p.createContext(null)
  , dl = p.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Ly = p.createContext(null);
function Hd() {
    return p.useContext(ul) != null
}
function zy() {
    return Hd() || rt(!1),
    p.useContext(ul).location
}
function y2(e, t) {
    return x2(e, t)
}
function x2(e, t, n, r) {
    Hd() || rt(!1);
    let {navigator: o} = p.useContext(Iy)
      , {matches: i} = p.useContext(dl)
      , a = i[i.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = zy(), d;
    if (t) {
        var f;
        let w = typeof t == "string" ? cl(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || rt(!1),
        d = w
    } else
        d = u;
    let y = d.pathname || "/"
      , g = y;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        g = "/" + y.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let b = Jk(e, {
        pathname: g
    })
      , h = E2(b && b.map(w => Object.assign({}, w, {
        params: Object.assign({}, s, w.params),
        pathname: So([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : So([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && h ? p.createElement(ul.Provider, {
        value: {
            location: js({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Hn.Pop
        }
    }, h) : h
}
function w2() {
    let e = P2()
      , t = m2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return p.createElement(p.Fragment, null, p.createElement("h2", null, "Unexpected Application Error!"), p.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? p.createElement("pre", {
        style: o
    }, n) : null, null)
}
const b2 = p.createElement(w2, null);
class S2 extends p.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? p.createElement(dl.Provider, {
            value: this.props.routeContext
        }, p.createElement(Ly.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function C2(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = p.useContext(g2);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(dl.Provider, {
        value: t
    }, r)
}
function E2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let a = e
      , s = (o = n) == null ? void 0 : o.errors;
    if (s != null) {
        let d = a.findIndex(f => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0);
        d >= 0 || rt(!1),
        a = a.slice(0, Math.min(a.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < a.length; d++) {
            let f = a[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: y, errors: g} = n
                  , b = f.route.loader && y[f.route.id] === void 0 && (!g || g[f.route.id] === void 0);
                if (f.route.lazy || b) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (d, f, y) => {
        let g, b = !1, h = null, w = null;
        n && (g = s && f.route.id ? s[f.route.id] : void 0,
        h = f.route.errorElement || b2,
        l && (u < 0 && y === 0 ? (b = !0,
        w = null) : u === y && (b = !0,
        w = f.route.hydrateFallbackElement || null)));
        let v = t.concat(a.slice(0, y + 1))
          , m = () => {
            let x;
            return g ? x = h : b ? x = w : f.route.Component ? x = p.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = d,
            p.createElement(C2, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: v,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || y === 0) ? p.createElement(S2, {
            location: n.location,
            revalidation: n.revalidation,
            component: h,
            error: g,
            children: m(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var xu = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(xu || {});
function k2(e) {
    let t = p.useContext(v2);
    return t || rt(!1),
    t
}
function N2(e) {
    let t = p.useContext(dl);
    return t || rt(!1),
    t
}
function T2(e) {
    let t = N2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || rt(!1),
    n.route.id
}
function P2() {
    var e;
    let t = p.useContext(Ly)
      , n = k2(xu.UseRouteError)
      , r = T2(xu.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function j2(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function wu(e) {
    rt(!1)
}
function R2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Hn.Pop, navigator: i, static: a=!1, future: s} = e;
    Hd() && rt(!1);
    let l = t.replace(/^\/*/, "/")
      , u = p.useMemo( () => ({
        basename: l,
        navigator: i,
        static: a,
        future: js({
            v7_relativeSplatPath: !1
        }, s)
    }), [l, s, i, a]);
    typeof r == "string" && (r = cl(r));
    let {pathname: d="/", search: f="", hash: y="", state: g=null, key: b="default"} = r
      , h = p.useMemo( () => {
        let w = _y(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: y,
                state: g,
                key: b
            },
            navigationType: o
        }
    }
    , [l, d, f, y, g, b, o]);
    return h == null ? null : p.createElement(Iy.Provider, {
        value: u
    }, p.createElement(ul.Provider, {
        children: n,
        value: h
    }))
}
function M2(e) {
    let {children: t, location: n} = e;
    return y2(bu(t), n)
}
new Promise( () => {}
);
function bu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return p.Children.forEach(e, (r, o) => {
        if (!p.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === p.Fragment) {
            n.push.apply(n, bu(r.props.children, i));
            return
        }
        r.type !== wu && rt(!1),
        !r.props.index || !r.props.children || rt(!1);
        let a = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (a.children = bu(r.props.children, i)),
        n.push(a)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const D2 = "6";
try {
    window.__reactRouterVersion = D2
} catch {}
const O2 = "startTransition"
  , rm = zu[O2];
function _2(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = p.useRef();
    i.current == null && (i.current = Gk({
        window: o,
        v5Compat: !0
    }));
    let a = i.current
      , [s,l] = p.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = r || {}
      , d = p.useCallback(f => {
        u && rm ? rm( () => l(f)) : l(f)
    }
    , [l, u]);
    return p.useLayoutEffect( () => a.listen(d), [a, d]),
    p.useEffect( () => j2(r), [r]),
    p.createElement(R2, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: a,
        future: r
    })
}
var om;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(om || (om = {}));
var im;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(im || (im = {}));
const A2 = oa("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-medium",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-medium hover:shadow-large",
            heroSecondary: "border-2 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/30",
            accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft",
            filter: "border border-border bg-card text-foreground hover:bg-secondary hover:border-primary/20",
            filterActive: "border border-primary bg-primary/10 text-primary"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-lg px-6 text-base",
            xl: "h-14 rounded-xl px-8 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , ve = p.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const a = r ? xb : "button";
    return c.jsx(a, {
        className: te(A2({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
ve.displayName = "Button";
const I2 = "/assets/logo-tkI8u3DY.png"
  , am = [{
    label: "Settimana",
    href: "#settimana"
}, {
    label: "Calendario",
    href: "#calendario"
}, {
    label: "Segnala evento",
    href: "#segnala"
}, {
    label: "Iscriviti",
    href: "#newsletter"
}];
function L2() {
    const [e,t] = p.useState(!1)
      , [n,r] = p.useState(!1);
    p.useEffect( () => {
        const i = () => {
            t(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
    }
    , []);
    const o = i => {
        const a = document.querySelector(i);
        a && a.scrollIntoView({
            behavior: "smooth"
        }),
        r(!1)
    }
    ;
    return c.jsxs("header", {
        className: te("fixed top-0 left-0 right-0 z-50 transition-all duration-300", e ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"),
        children: [c.jsx("div", {
            className: "container",
            children: c.jsxs("div", {
                className: "flex h-16 items-center justify-between",
                children: [c.jsx("a", {
                    href: "#",
                    className: "flex items-center gap-2",
                    onClick: i => {
                        i.preventDefault(),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                    ,
                    children: c.jsx("img", {
                        src: I2,
                        alt: "AgendaCapri.it",
                        className: "h-10 w-auto"
                    })
                }), c.jsx("nav", {
                    className: "hidden md:flex items-center gap-1",
                    children: am.map(i => c.jsx("button", {
                        onClick: () => o(i.href),
                        className: "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary",
                        children: i.label
                    }, i.href))
                }), c.jsx("div", {
                    className: "hidden md:block",
                    children: c.jsx(ve, {
                        size: "sm",
                        onClick: () => o("#segnala"),
                        children: "Segnala evento"
                    })
                }), c.jsx("button", {
                    className: "md:hidden p-2 text-foreground",
                    onClick: () => r(!n),
                    "aria-label": "Toggle menu",
                    children: n ? c.jsx(el, {
                        size: 24
                    }) : c.jsx(xS, {
                        size: 24
                    })
                })]
            })
        }), n && c.jsx("div", {
            className: "md:hidden bg-card border-b border-border animate-fade-in",
            children: c.jsxs("nav", {
                className: "container py-4 flex flex-col gap-2",
                children: [am.map(i => c.jsx("button", {
                    onClick: () => o(i.href),
                    className: "px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors",
                    children: i.label
                }, i.href)), c.jsx(ve, {
                    className: "mt-2",
                    onClick: () => o("#segnala"),
                    children: "Segnala evento"
                })]
            })
        })]
    })
}
const ht = p.forwardRef( ({className: e, type: t, ...n}, r) => c.jsx("input", {
    type: t,
    className: te("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
ht.displayName = "Input";
const z2 = [{
    label: "Oggi",
    value: "today"
}, {
    label: "Domani",
    value: "tomorrow"
}, {
    label: "Weekend",
    value: "weekend"
}, {
    label: "Settimana",
    value: "week"
}];
function F2({searchQuery: e, onSearchChange: t, onDateFilter: n, activeDateFilter: r}) {
    const o = () => {
        const a = document.querySelector("#calendario");
        a && a.scrollIntoView({
            behavior: "smooth"
        })
    }
      , i = () => {
        const a = document.querySelector("#newsletter");
        a && a.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return c.jsxs("section", {
        className: "relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden",
        children: [c.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-sea-light via-background to-background"
        }), c.jsx("div", {
            className: "absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        }), c.jsx("div", {
            className: "absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        }), c.jsx("div", {
            className: "container relative",
            children: c.jsxs("div", {
                className: "max-w-3xl mx-auto text-center",
                children: [c.jsxs("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance",
                    children: ["Tutti gli eventi a Capri,", " ", c.jsx("span", {
                        className: "text-primary",
                        children: "in un unico posto."
                    })]
                }), c.jsxs("p", {
                    className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance",
                    children: ["Sport, cultura, musica, mostre, sagre e rassegne.", " ", c.jsx("span", {
                        className: "text-foreground font-medium",
                        children: "Aggiornato continuamente."
                    })]
                }), c.jsxs("div", {
                    className: "relative max-w-xl mx-auto mb-6",
                    children: [c.jsx(SS, {
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground",
                        size: 20
                    }), c.jsx(ht, {
                        type: "text",
                        placeholder: "Cerca evento (es. concerto, mostra, Anacapri…)",
                        value: e,
                        onChange: a => t(a.target.value),
                        className: "pl-12 h-14 text-base bg-card border-border shadow-soft focus:shadow-medium transition-shadow"
                    })]
                }), c.jsx("div", {
                    className: "flex flex-wrap justify-center gap-2 mb-8",
                    children: z2.map(a => c.jsx(ve, {
                        variant: r === a.value ? "filterActive" : "filter",
                        size: "sm",
                        onClick: () => n(a.value === r ? "" : a.value),
                        children: a.label
                    }, a.value))
                }), c.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [c.jsx(ve, {
                        size: "xl",
                        variant: "hero",
                        onClick: o,
                        children: "Vedi eventi"
                    }), c.jsx(ve, {
                        size: "xl",
                        variant: "heroSecondary",
                        onClick: i,
                        children: "Iscriviti agli aggiornamenti"
                    })]
                })]
            })
        })]
    })
}
const $2 = oa("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground",
            outline: "text-foreground",
            musica: "border-transparent bg-category-musica/15 text-category-musica",
            cultura: "border-transparent bg-category-cultura/15 text-category-cultura",
            mostre: "border-transparent bg-category-mostre/15 text-category-mostre",
            cinema: "border-transparent bg-category-cinema/15 text-category-cinema",
            sport: "border-transparent bg-category-sport/15 text-category-sport",
            sagre: "border-transparent bg-category-sagre/15 text-category-sagre",
            kids: "border-transparent bg-category-kids/15 text-category-kids",
            nightlife: "border-transparent bg-category-nightlife/15 text-category-nightlife",
            free: "border-transparent bg-category-sport/10 text-category-sport",
            paid: "border-transparent bg-muted text-muted-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Kt({className: e, variant: t, ...n}) {
    return c.jsx("div", {
        className: te($2({
            variant: t
        }), e),
        ...n
    })
}
const W2 = {
    Musica: "musica",
    Cultura: "cultura",
    Mostre: "mostre",
    Cinema: "cinema",
    Sport: "sport",
    "Sagre & Tradizioni": "sagre",
    "Kids/Famiglia": "kids",
    Nightlife: "nightlife"
};
function Yd({category: e, className: t}) {
    const n = W2[e];
    return c.jsx(Kt, {
        variant: n,
        className: t,
        children: e
    })
}
function ft(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function bn(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t)
}
function Su(e, t) {
    const n = ft(e);
    return isNaN(t) ? bn(e, NaN) : (t && n.setDate(n.getDate() + t),
    n)
}
const Fy = 6048e5
  , U2 = 864e5
  , $y = 6e4
  , Wy = 36e5;
let B2 = {};
function fl() {
    return B2
}
function Ir(e, t) {
    var s, l, u, d;
    const n = fl()
      , r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0
      , o = ft(e)
      , i = o.getDay()
      , a = (i < r ? 7 : 0) + i - r;
    return o.setDate(o.getDate() - a),
    o.setHours(0, 0, 0, 0),
    o
}
function Rs(e) {
    return Ir(e, {
        weekStartsOn: 1
    })
}
function Uy(e) {
    const t = ft(e)
      , n = t.getFullYear()
      , r = bn(e, 0);
    r.setFullYear(n + 1, 0, 4),
    r.setHours(0, 0, 0, 0);
    const o = Rs(r)
      , i = bn(e, 0);
    i.setFullYear(n, 0, 4),
    i.setHours(0, 0, 0, 0);
    const a = Rs(i);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1
}
function Vo(e) {
    const t = ft(e);
    return t.setHours(0, 0, 0, 0),
    t
}
function sm(e) {
    const t = ft(e)
      , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()),
    +e - +n
}
function V2(e, t) {
    const n = Vo(e)
      , r = Vo(t)
      , o = +n - sm(n)
      , i = +r - sm(r);
    return Math.round((o - i) / U2)
}
function H2(e) {
    const t = Uy(e)
      , n = bn(e, 0);
    return n.setFullYear(t, 0, 4),
    n.setHours(0, 0, 0, 0),
    Rs(n)
}
function Qd(e) {
    return bn(e, Date.now())
}
function qi(e, t) {
    const n = Vo(e)
      , r = Vo(t);
    return +n == +r
}
function Y2(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function Q2(e) {
    if (!Y2(e) && typeof e != "number")
        return !1;
    const t = ft(e);
    return !isNaN(Number(t))
}
function q2(e) {
    const t = ft(e);
    return t.setHours(23, 59, 59, 999),
    t
}
function K2(e) {
    const t = ft(e)
      , n = bn(e, 0);
    return n.setFullYear(t.getFullYear(), 0, 1),
    n.setHours(0, 0, 0, 0),
    n
}
const G2 = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , X2 = (e, t, n) => {
    let r;
    const o = G2[e];
    return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function Co(e) {
    return (t={}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth]
    }
}
const Z2 = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , J2 = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , eN = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , tN = {
    date: Co({
        formats: Z2,
        defaultWidth: "full"
    }),
    time: Co({
        formats: J2,
        defaultWidth: "full"
    }),
    dateTime: Co({
        formats: eN,
        defaultWidth: "full"
    })
}
  , nN = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , rN = (e, t, n, r) => nN[e];
function Gt(e) {
    return (t, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let o;
        if (r === "formatting" && e.formattingValues) {
            const a = e.defaultFormattingWidth || e.defaultWidth
              , s = n != null && n.width ? String(n.width) : a;
            o = e.formattingValues[s] || e.formattingValues[a]
        } else {
            const a = e.defaultWidth
              , s = n != null && n.width ? String(n.width) : e.defaultWidth;
            o = e.values[s] || e.values[a]
        }
        const i = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[i]
    }
}
const oN = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , iN = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , aN = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , sN = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , lN = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , cN = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , uN = (e, t) => {
    const n = Number(e)
      , r = n % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , dN = {
    ordinalNumber: uN,
    era: Gt({
        values: oN,
        defaultWidth: "wide"
    }),
    quarter: Gt({
        values: iN,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: Gt({
        values: aN,
        defaultWidth: "wide"
    }),
    day: Gt({
        values: sN,
        defaultWidth: "wide"
    }),
    dayPeriod: Gt({
        values: lN,
        defaultWidth: "wide",
        formattingValues: cN,
        defaultFormattingWidth: "wide"
    })
};
function Xt(e) {
    return (t, n={}) => {
        const r = n.width
          , o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
          , i = t.match(o);
        if (!i)
            return null;
        const a = i[0]
          , s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
          , l = Array.isArray(s) ? pN(s, f => f.test(a)) : fN(s, f => f.test(a));
        let u;
        u = e.valueCallback ? e.valueCallback(l) : l,
        u = n.valueCallback ? n.valueCallback(u) : u;
        const d = t.slice(a.length);
        return {
            value: u,
            rest: d
        }
    }
}
function fN(e, t) {
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
            return n
}
function pN(e, t) {
    for (let n = 0; n < e.length; n++)
        if (t(e[n]))
            return n
}
function By(e) {
    return (t, n={}) => {
        const r = t.match(e.matchPattern);
        if (!r)
            return null;
        const o = r[0]
          , i = t.match(e.parsePattern);
        if (!i)
            return null;
        let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
        a = n.valueCallback ? n.valueCallback(a) : a;
        const s = t.slice(o.length);
        return {
            value: a,
            rest: s
        }
    }
}
const mN = /^(\d+)(th|st|nd|rd)?/i
  , hN = /\d+/i
  , gN = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , vN = {
    any: [/^b/i, /^(a|c)/i]
}
  , yN = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , xN = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , wN = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , bN = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , SN = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , CN = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , EN = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , kN = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , NN = {
    ordinalNumber: By({
        matchPattern: mN,
        parsePattern: hN,
        valueCallback: e => parseInt(e, 10)
    }),
    era: Xt({
        matchPatterns: gN,
        defaultMatchWidth: "wide",
        parsePatterns: vN,
        defaultParseWidth: "any"
    }),
    quarter: Xt({
        matchPatterns: yN,
        defaultMatchWidth: "wide",
        parsePatterns: xN,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: Xt({
        matchPatterns: wN,
        defaultMatchWidth: "wide",
        parsePatterns: bN,
        defaultParseWidth: "any"
    }),
    day: Xt({
        matchPatterns: SN,
        defaultMatchWidth: "wide",
        parsePatterns: CN,
        defaultParseWidth: "any"
    }),
    dayPeriod: Xt({
        matchPatterns: EN,
        defaultMatchWidth: "any",
        parsePatterns: kN,
        defaultParseWidth: "any"
    })
}
  , TN = {
    code: "en-US",
    formatDistance: X2,
    formatLong: tN,
    formatRelative: rN,
    localize: dN,
    match: NN,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function PN(e) {
    const t = ft(e);
    return V2(t, K2(t)) + 1
}
function jN(e) {
    const t = ft(e)
      , n = +Rs(t) - +H2(t);
    return Math.round(n / Fy) + 1
}
function Vy(e, t) {
    var d, f, y, g;
    const n = ft(e)
      , r = n.getFullYear()
      , o = fl()
      , i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((g = (y = o.locale) == null ? void 0 : y.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1
      , a = bn(e, 0);
    a.setFullYear(r + 1, 0, i),
    a.setHours(0, 0, 0, 0);
    const s = Ir(a, t)
      , l = bn(e, 0);
    l.setFullYear(r, 0, i),
    l.setHours(0, 0, 0, 0);
    const u = Ir(l, t);
    return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1
}
function RN(e, t) {
    var s, l, u, d;
    const n = fl()
      , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
      , o = Vy(e, t)
      , i = bn(e, 0);
    return i.setFullYear(o, 0, r),
    i.setHours(0, 0, 0, 0),
    Ir(i, t)
}
function MN(e, t) {
    const n = ft(e)
      , r = +Ir(n, t) - +RN(n, t);
    return Math.round(r / Fy) + 1
}
function se(e, t) {
    const n = e < 0 ? "-" : ""
      , r = Math.abs(e).toString().padStart(t, "0");
    return n + r
}
const Rn = {
    y(e, t) {
        const n = e.getFullYear()
          , r = n > 0 ? n : 1 - n;
        return se(t === "yy" ? r % 100 : r, t.length)
    },
    M(e, t) {
        const n = e.getMonth();
        return t === "M" ? String(n + 1) : se(n + 1, 2)
    },
    d(e, t) {
        return se(e.getDate(), t.length)
    },
    a(e, t) {
        const n = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.toUpperCase();
        case "aaa":
            return n;
        case "aaaaa":
            return n[0];
        case "aaaa":
        default:
            return n === "am" ? "a.m." : "p.m."
        }
    },
    h(e, t) {
        return se(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
        return se(e.getHours(), t.length)
    },
    m(e, t) {
        return se(e.getMinutes(), t.length)
    },
    s(e, t) {
        return se(e.getSeconds(), t.length)
    },
    S(e, t) {
        const n = t.length
          , r = e.getMilliseconds()
          , o = Math.trunc(r * Math.pow(10, n - 3));
        return se(o, t.length)
    }
}
  , Gr = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , lm = {
    G: function(e, t, n) {
        const r = e.getFullYear() > 0 ? 1 : 0;
        switch (t) {
        case "G":
        case "GG":
        case "GGG":
            return n.era(r, {
                width: "abbreviated"
            });
        case "GGGGG":
            return n.era(r, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return n.era(r, {
                width: "wide"
            })
        }
    },
    y: function(e, t, n) {
        if (t === "yo") {
            const r = e.getFullYear()
              , o = r > 0 ? r : 1 - r;
            return n.ordinalNumber(o, {
                unit: "year"
            })
        }
        return Rn.y(e, t)
    },
    Y: function(e, t, n, r) {
        const o = Vy(e, r)
          , i = o > 0 ? o : 1 - o;
        if (t === "YY") {
            const a = i % 100;
            return se(a, 2)
        }
        return t === "Yo" ? n.ordinalNumber(i, {
            unit: "year"
        }) : se(i, t.length)
    },
    R: function(e, t) {
        const n = Uy(e);
        return se(n, t.length)
    },
    u: function(e, t) {
        const n = e.getFullYear();
        return se(n, t.length)
    },
    Q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "Q":
            return String(r);
        case "QQ":
            return se(r, 2);
        case "Qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "QQQ":
            return n.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return n.quarter(r, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "q":
            return String(r);
        case "qq":
            return se(r, 2);
        case "qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "qqq":
            return n.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return n.quarter(r, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "M":
        case "MM":
            return Rn.M(e, t);
        case "Mo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "MMM":
            return n.month(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return n.month(r, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return n.month(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "L":
            return String(r + 1);
        case "LL":
            return se(r + 1, 2);
        case "Lo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "LLL":
            return n.month(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return n.month(r, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return n.month(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(e, t, n, r) {
        const o = MN(e, r);
        return t === "wo" ? n.ordinalNumber(o, {
            unit: "week"
        }) : se(o, t.length)
    },
    I: function(e, t, n) {
        const r = jN(e);
        return t === "Io" ? n.ordinalNumber(r, {
            unit: "week"
        }) : se(r, t.length)
    },
    d: function(e, t, n) {
        return t === "do" ? n.ordinalNumber(e.getDate(), {
            unit: "date"
        }) : Rn.d(e, t)
    },
    D: function(e, t, n) {
        const r = PN(e);
        return t === "Do" ? n.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : se(r, t.length)
    },
    E: function(e, t, n) {
        const r = e.getDay();
        switch (t) {
        case "E":
        case "EE":
        case "EEE":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(e, t, n, r) {
        const o = e.getDay()
          , i = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "e":
            return String(i);
        case "ee":
            return se(i, 2);
        case "eo":
            return n.ordinalNumber(i, {
                unit: "day"
            });
        case "eee":
            return n.day(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return n.day(o, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return n.day(o, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return n.day(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(e, t, n, r) {
        const o = e.getDay()
          , i = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "c":
            return String(i);
        case "cc":
            return se(i, t.length);
        case "co":
            return n.ordinalNumber(i, {
                unit: "day"
            });
        case "ccc":
            return n.day(o, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return n.day(o, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return n.day(o, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return n.day(o, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(e, t, n) {
        const r = e.getDay()
          , o = r === 0 ? 7 : r;
        switch (t) {
        case "i":
            return String(o);
        case "ii":
            return se(o, t.length);
        case "io":
            return n.ordinalNumber(o, {
                unit: "day"
            });
        case "iii":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(e, t, n) {
        const o = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r === 12 ? o = Gr.noon : r === 0 ? o = Gr.midnight : o = r / 12 >= 1 ? "pm" : "am",
        t) {
        case "b":
        case "bb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r >= 17 ? o = Gr.evening : r >= 12 ? o = Gr.afternoon : r >= 4 ? o = Gr.morning : o = Gr.night,
        t) {
        case "B":
        case "BB":
        case "BBB":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(e, t, n) {
        if (t === "ho") {
            let r = e.getHours() % 12;
            return r === 0 && (r = 12),
            n.ordinalNumber(r, {
                unit: "hour"
            })
        }
        return Rn.h(e, t)
    },
    H: function(e, t, n) {
        return t === "Ho" ? n.ordinalNumber(e.getHours(), {
            unit: "hour"
        }) : Rn.H(e, t)
    },
    K: function(e, t, n) {
        const r = e.getHours() % 12;
        return t === "Ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : se(r, t.length)
    },
    k: function(e, t, n) {
        let r = e.getHours();
        return r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : se(r, t.length)
    },
    m: function(e, t, n) {
        return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
            unit: "minute"
        }) : Rn.m(e, t)
    },
    s: function(e, t, n) {
        return t === "so" ? n.ordinalNumber(e.getSeconds(), {
            unit: "second"
        }) : Rn.s(e, t)
    },
    S: function(e, t) {
        return Rn.S(e, t)
    },
    X: function(e, t, n) {
        const r = e.getTimezoneOffset();
        if (r === 0)
            return "Z";
        switch (t) {
        case "X":
            return um(r);
        case "XXXX":
        case "XX":
            return yr(r);
        case "XXXXX":
        case "XXX":
        default:
            return yr(r, ":")
        }
    },
    x: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "x":
            return um(r);
        case "xxxx":
        case "xx":
            return yr(r);
        case "xxxxx":
        case "xxx":
        default:
            return yr(r, ":")
        }
    },
    O: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + cm(r, ":");
        case "OOOO":
        default:
            return "GMT" + yr(r, ":")
        }
    },
    z: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + cm(r, ":");
        case "zzzz":
        default:
            return "GMT" + yr(r, ":")
        }
    },
    t: function(e, t, n) {
        const r = Math.trunc(e.getTime() / 1e3);
        return se(r, t.length)
    },
    T: function(e, t, n) {
        const r = e.getTime();
        return se(r, t.length)
    }
};
function cm(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = Math.trunc(r / 60)
      , i = r % 60;
    return i === 0 ? n + String(o) : n + String(o) + t + se(i, 2)
}
function um(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + se(Math.abs(e) / 60, 2) : yr(e, t)
}
function yr(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = se(Math.trunc(r / 60), 2)
      , i = se(r % 60, 2);
    return n + o + t + i
}
const dm = (e, t) => {
    switch (e) {
    case "P":
        return t.date({
            width: "short"
        });
    case "PP":
        return t.date({
            width: "medium"
        });
    case "PPP":
        return t.date({
            width: "long"
        });
    case "PPPP":
    default:
        return t.date({
            width: "full"
        })
    }
}
  , Hy = (e, t) => {
    switch (e) {
    case "p":
        return t.time({
            width: "short"
        });
    case "pp":
        return t.time({
            width: "medium"
        });
    case "ppp":
        return t.time({
            width: "long"
        });
    case "pppp":
    default:
        return t.time({
            width: "full"
        })
    }
}
  , DN = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || []
      , r = n[1]
      , o = n[2];
    if (!o)
        return dm(e, t);
    let i;
    switch (r) {
    case "P":
        i = t.dateTime({
            width: "short"
        });
        break;
    case "PP":
        i = t.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        i = t.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        i = t.dateTime({
            width: "full"
        });
        break
    }
    return i.replace("{{date}}", dm(r, t)).replace("{{time}}", Hy(o, t))
}
  , ON = {
    p: Hy,
    P: DN
}
  , _N = /^D+$/
  , AN = /^Y+$/
  , IN = ["D", "DD", "YY", "YYYY"];
function LN(e) {
    return _N.test(e)
}
function zN(e) {
    return AN.test(e)
}
function FN(e, t, n) {
    const r = $N(e, t, n);
    if (console.warn(r),
    IN.includes(e))
        throw new RangeError(r)
}
function $N(e, t, n) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const WN = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , UN = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , BN = /^'([^]*?)'?$/
  , VN = /''/g
  , HN = /[a-zA-Z]/;
function er(e, t, n) {
    var d, f, y, g, b, h, w, v;
    const r = fl()
      , o = (n == null ? void 0 : n.locale) ?? r.locale ?? TN
      , i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1
      , a = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((v = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : v.weekStartsOn) ?? 0
      , s = ft(e);
    if (!Q2(s))
        throw new RangeError("Invalid time value");
    let l = t.match(UN).map(m => {
        const x = m[0];
        if (x === "p" || x === "P") {
            const S = ON[x];
            return S(m, o.formatLong)
        }
        return m
    }
    ).join("").match(WN).map(m => {
        if (m === "''")
            return {
                isToken: !1,
                value: "'"
            };
        const x = m[0];
        if (x === "'")
            return {
                isToken: !1,
                value: YN(m)
            };
        if (lm[x])
            return {
                isToken: !0,
                value: m
            };
        if (x.match(HN))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + x + "`");
        return {
            isToken: !1,
            value: m
        }
    }
    );
    o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
    const u = {
        firstWeekContainsDate: i,
        weekStartsOn: a,
        locale: o
    };
    return l.map(m => {
        if (!m.isToken)
            return m.value;
        const x = m.value;
        (!(n != null && n.useAdditionalWeekYearTokens) && zN(x) || !(n != null && n.useAdditionalDayOfYearTokens) && LN(x)) && FN(x, t, String(e));
        const S = lm[x[0]];
        return S(s, x, o.localize, u)
    }
    ).join("")
}
function YN(e) {
    const t = e.match(BN);
    return t ? t[1].replace(VN, "'") : e
}
function Cu(e, t, n) {
    const r = Ir(e, n)
      , o = Ir(t, n);
    return +r == +o
}
function QN(e, t) {
    return Cu(e, Qd(e), t)
}
function qd(e) {
    return qi(e, Qd(e))
}
function Kd(e) {
    return qi(e, Su(Qd(e), 1))
}
function Wt(e, t) {
    const r = XN(e);
    let o;
    if (r.date) {
        const l = ZN(r.date, 2);
        o = JN(l.restDateString, l.year)
    }
    if (!o || isNaN(o.getTime()))
        return new Date(NaN);
    const i = o.getTime();
    let a = 0, s;
    if (r.time && (a = eT(r.time),
    isNaN(a)))
        return new Date(NaN);
    if (r.timezone) {
        if (s = tT(r.timezone),
        isNaN(s))
            return new Date(NaN)
    } else {
        const l = new Date(i + a)
          , u = new Date(0);
        return u.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()),
        u.setHours(l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), l.getUTCMilliseconds()),
        u
    }
    return new Date(i + a + s)
}
const Ra = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
}
  , qN = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/
  , KN = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/
  , GN = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function XN(e) {
    const t = {}
      , n = e.split(Ra.dateTimeDelimiter);
    let r;
    if (n.length > 2)
        return t;
    if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0],
    r = n[1],
    Ra.timeZoneDelimiter.test(t.date) && (t.date = e.split(Ra.timeZoneDelimiter)[0],
    r = e.substr(t.date.length, e.length))),
    r) {
        const o = Ra.timezone.exec(r);
        o ? (t.time = r.replace(o[1], ""),
        t.timezone = o[1]) : t.time = r
    }
    return t
}
function ZN(e, t) {
    const n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)")
      , r = e.match(n);
    if (!r)
        return {
            year: NaN,
            restDateString: ""
        };
    const o = r[1] ? parseInt(r[1]) : null
      , i = r[2] ? parseInt(r[2]) : null;
    return {
        year: i === null ? o : i * 100,
        restDateString: e.slice((r[1] || r[2]).length)
    }
}
function JN(e, t) {
    if (t === null)
        return new Date(NaN);
    const n = e.match(qN);
    if (!n)
        return new Date(NaN);
    const r = !!n[4]
      , o = ui(n[1])
      , i = ui(n[2]) - 1
      , a = ui(n[3])
      , s = ui(n[4])
      , l = ui(n[5]) - 1;
    if (r)
        return aT(t, s, l) ? nT(t, s, l) : new Date(NaN);
    {
        const u = new Date(0);
        return !oT(t, i, a) || !iT(t, o) ? new Date(NaN) : (u.setUTCFullYear(t, i, Math.max(o, a)),
        u)
    }
}
function ui(e) {
    return e ? parseInt(e) : 1
}
function eT(e) {
    const t = e.match(KN);
    if (!t)
        return NaN;
    const n = ac(t[1])
      , r = ac(t[2])
      , o = ac(t[3]);
    return sT(n, r, o) ? n * Wy + r * $y + o * 1e3 : NaN
}
function ac(e) {
    return e && parseFloat(e.replace(",", ".")) || 0
}
function tT(e) {
    if (e === "Z")
        return 0;
    const t = e.match(GN);
    if (!t)
        return 0;
    const n = t[1] === "+" ? -1 : 1
      , r = parseInt(t[2])
      , o = t[3] && parseInt(t[3]) || 0;
    return lT(r, o) ? n * (r * Wy + o * $y) : NaN
}
function nT(e, t, n) {
    const r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    const o = r.getUTCDay() || 7
      , i = (t - 1) * 7 + n + 1 - o;
    return r.setUTCDate(r.getUTCDate() + i),
    r
}
const rT = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Yy(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}
function oT(e, t, n) {
    return t >= 0 && t <= 11 && n >= 1 && n <= (rT[t] || (Yy(e) ? 29 : 28))
}
function iT(e, t) {
    return t >= 1 && t <= (Yy(e) ? 366 : 365)
}
function aT(e, t, n) {
    return t >= 1 && t <= 53 && n >= 0 && n <= 6
}
function sT(e, t, n) {
    return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25
}
function lT(e, t) {
    return t >= 0 && t <= 59
}
const cT = {
    lessThanXSeconds: {
        one: "meno di un secondo",
        other: "meno di {{count}} secondi"
    },
    xSeconds: {
        one: "un secondo",
        other: "{{count}} secondi"
    },
    halfAMinute: "alcuni secondi",
    lessThanXMinutes: {
        one: "meno di un minuto",
        other: "meno di {{count}} minuti"
    },
    xMinutes: {
        one: "un minuto",
        other: "{{count}} minuti"
    },
    aboutXHours: {
        one: "circa un'ora",
        other: "circa {{count}} ore"
    },
    xHours: {
        one: "un'ora",
        other: "{{count}} ore"
    },
    xDays: {
        one: "un giorno",
        other: "{{count}} giorni"
    },
    aboutXWeeks: {
        one: "circa una settimana",
        other: "circa {{count}} settimane"
    },
    xWeeks: {
        one: "una settimana",
        other: "{{count}} settimane"
    },
    aboutXMonths: {
        one: "circa un mese",
        other: "circa {{count}} mesi"
    },
    xMonths: {
        one: "un mese",
        other: "{{count}} mesi"
    },
    aboutXYears: {
        one: "circa un anno",
        other: "circa {{count}} anni"
    },
    xYears: {
        one: "un anno",
        other: "{{count}} anni"
    },
    overXYears: {
        one: "più di un anno",
        other: "più di {{count}} anni"
    },
    almostXYears: {
        one: "quasi un anno",
        other: "quasi {{count}} anni"
    }
}
  , uT = (e, t, n) => {
    let r;
    const o = cT[e];
    return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r
}
  , dT = {
    full: "EEEE d MMMM y",
    long: "d MMMM y",
    medium: "d MMM y",
    short: "dd/MM/y"
}
  , fT = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
}
  , pT = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
}
  , mT = {
    date: Co({
        formats: dT,
        defaultWidth: "full"
    }),
    time: Co({
        formats: fT,
        defaultWidth: "full"
    }),
    dateTime: Co({
        formats: pT,
        defaultWidth: "full"
    })
}
  , Gd = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
function hT(e) {
    switch (e) {
    case 0:
        return "'domenica scorsa alle' p";
    default:
        return "'" + Gd[e] + " scorso alle' p"
    }
}
function fm(e) {
    return "'" + Gd[e] + " alle' p"
}
function gT(e) {
    switch (e) {
    case 0:
        return "'domenica prossima alle' p";
    default:
        return "'" + Gd[e] + " prossimo alle' p"
    }
}
const vT = {
    lastWeek: (e, t, n) => {
        const r = e.getDay();
        return Cu(e, t, n) ? fm(r) : hT(r)
    }
    ,
    yesterday: "'ieri alle' p",
    today: "'oggi alle' p",
    tomorrow: "'domani alle' p",
    nextWeek: (e, t, n) => {
        const r = e.getDay();
        return Cu(e, t, n) ? fm(r) : gT(r)
    }
    ,
    other: "P"
}
  , yT = (e, t, n, r) => {
    const o = vT[e];
    return typeof o == "function" ? o(t, n, r) : o
}
  , xT = {
    narrow: ["aC", "dC"],
    abbreviated: ["a.C.", "d.C."],
    wide: ["avanti Cristo", "dopo Cristo"]
}
  , wT = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}
  , bT = {
    narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
    abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
    wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
}
  , ST = {
    narrow: ["D", "L", "M", "M", "G", "V", "S"],
    short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    wide: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
}
  , CT = {
    narrow: {
        am: "m.",
        pm: "p.",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte"
    }
}
  , ET = {
    narrow: {
        am: "m.",
        pm: "p.",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte"
    }
}
  , kT = (e, t) => {
    const n = Number(e);
    return String(n)
}
  , NT = {
    ordinalNumber: kT,
    era: Gt({
        values: xT,
        defaultWidth: "wide"
    }),
    quarter: Gt({
        values: wT,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: Gt({
        values: bT,
        defaultWidth: "wide"
    }),
    day: Gt({
        values: ST,
        defaultWidth: "wide"
    }),
    dayPeriod: Gt({
        values: CT,
        defaultWidth: "wide",
        formattingValues: ET,
        defaultFormattingWidth: "wide"
    })
}
  , TT = /^(\d+)(º)?/i
  , PT = /\d+/i
  , jT = {
    narrow: /^(aC|dC)/i,
    abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
    wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}
  , RT = {
    any: [/^a/i, /^(d|e)/i]
}
  , MT = {
    narrow: /^[1234]/i,
    abbreviated: /^t[1234]/i,
    wide: /^[1234](º)? trimestre/i
}
  , DT = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , OT = {
    narrow: /^[gfmalsond]/i,
    abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
    wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}
  , _T = {
    narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , AT = {
    narrow: /^[dlmgvs]/i,
    short: /^(do|lu|ma|me|gi|ve|sa)/i,
    abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
    wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}
  , IT = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
    any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}
  , LT = {
    narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
    any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}
  , zT = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mezza/i,
        noon: /^mezzo/i,
        morning: /mattina/i,
        afternoon: /pomeriggio/i,
        evening: /sera/i,
        night: /notte/i
    }
}
  , FT = {
    ordinalNumber: By({
        matchPattern: TT,
        parsePattern: PT,
        valueCallback: e => parseInt(e, 10)
    }),
    era: Xt({
        matchPatterns: jT,
        defaultMatchWidth: "wide",
        parsePatterns: RT,
        defaultParseWidth: "any"
    }),
    quarter: Xt({
        matchPatterns: MT,
        defaultMatchWidth: "wide",
        parsePatterns: DT,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: Xt({
        matchPatterns: OT,
        defaultMatchWidth: "wide",
        parsePatterns: _T,
        defaultParseWidth: "any"
    }),
    day: Xt({
        matchPatterns: AT,
        defaultMatchWidth: "wide",
        parsePatterns: IT,
        defaultParseWidth: "any"
    }),
    dayPeriod: Xt({
        matchPatterns: LT,
        defaultMatchWidth: "any",
        parsePatterns: zT,
        defaultParseWidth: "any"
    })
}
  , tr = {
    code: "it",
    formatDistance: uT,
    formatLong: mT,
    formatRelative: yT,
    localize: NT,
    match: FT,
    options: {
        weekStartsOn: 1,
        firstWeekContainsDate: 4
    }
}
  , Eu = e => {
    const t = Wt(e);
    return qd(t) ? `Oggi, ${er(t, "HH:mm", {
        locale: tr
    })}` : Kd(t) ? `Domani, ${er(t, "HH:mm", {
        locale: tr
    })}` : er(t, "EEEE d MMMM, HH:mm", {
        locale: tr
    })
}
  , $T = e => {
    const t = Wt(e);
    return qd(t) ? "Oggi" : Kd(t) ? "Domani" : er(t, "d MMM", {
        locale: tr
    })
}
  , WT = e => {
    const t = Wt(e);
    return er(t, "HH:mm", {
        locale: tr
    })
}
  , UT = (e, t) => {
    const n = Wt(e)
      , r = Eu(e);
    if (!t)
        return r;
    const o = Wt(t);
    return qi(n, o) ? `${r} - ${er(o, "HH:mm", {
        locale: tr
    })}` : `${r} — ${Eu(t)}`
}
  , BT = e => qd(Wt(e))
  , VT = e => Kd(Wt(e))
  , HT = e => {
    const t = Wt(e)
      , n = new Date
      , r = Su(Vo(n), (6 - n.getDay()) % 7)
      , o = Su(r, 1);
    return qi(t, r) || qi(t, o) || t >= Vo(r) && t <= q2(o)
}
  , Qy = e => QN(Wt(e), {
    locale: tr,
    weekStartsOn: 1
})
  , YT = e => {
    const t = i => {
        const a = Wt(i);
        return er(a, "yyyyMMdd'T'HHmmss")
    }
      , n = t(e.startDateTime)
      , r = e.endDateTime ? t(e.endDateTime) : t(e.startDateTime);
    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Capri Eventi//IT
BEGIN:VEVENT
DTSTART:${n}
DTEND:${r}
SUMMARY:${e.title}
DESCRIPTION:${e.description.replace(/\n/g, "\\n")}
LOCATION:${e.venue}, ${e.area}
END:VEVENT
END:VCALENDAR`
}
  , qy = e => {
    const t = YT(e)
      , n = new Blob([t],{
        type: "text/calendar;charset=utf-8"
    })
      , r = URL.createObjectURL(n)
      , o = document.createElement("a");
    o.href = r,
    o.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`,
    document.body.appendChild(o),
    o.click(),
    document.body.removeChild(o),
    URL.revokeObjectURL(r)
}
;
function QT({event: e, onDetailsClick: t}) {
    return c.jsxs("article", {
        className: "group relative flex-shrink-0 w-[300px] md:w-[340px] bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-large hover:border-primary/30 cursor-pointer",
        onClick: () => t(e),
        children: [c.jsx("div", {
            className: "h-1.5 bg-gradient-to-r from-primary to-accent"
        }), c.jsxs("div", {
            className: "p-5",
            children: [c.jsxs("div", {
                className: "flex items-start justify-between gap-3 mb-3",
                children: [c.jsx(Yd, {
                    category: e.category
                }), c.jsx(Kt, {
                    variant: e.priceType === "Free" ? "free" : "paid",
                    className: "text-xs",
                    children: e.priceType === "Free" ? "Gratis" : "A pagamento"
                })]
            }), c.jsx("h3", {
                className: "text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors",
                children: e.title
            }), c.jsxs("div", {
                className: "flex flex-col gap-2 mb-4 text-sm",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-2 text-foreground font-medium",
                    children: [c.jsx(Zs, {
                        size: 14,
                        className: "text-primary"
                    }), c.jsx("span", {
                        children: $T(e.startDateTime)
                    }), c.jsx("span", {
                        className: "text-muted-foreground",
                        children: "•"
                    }), c.jsx("span", {
                        children: WT(e.startDateTime)
                    })]
                }), c.jsxs("div", {
                    className: "flex items-center gap-2 text-muted-foreground",
                    children: [c.jsx(Ss, {
                        size: 14
                    }), c.jsxs("span", {
                        className: "truncate",
                        children: [e.venue, ", ", e.area]
                    })]
                })]
            }), c.jsx("p", {
                className: "text-sm text-muted-foreground mb-4 line-clamp-2",
                children: e.description
            }), c.jsxs(ve, {
                variant: "ghost",
                size: "sm",
                className: "w-full justify-between group-hover:bg-primary/5",
                children: [c.jsx("span", {
                    children: "Dettagli"
                }), c.jsx(dS, {
                    size: 16,
                    className: "transition-transform group-hover:translate-x-1"
                })]
            })]
        })]
    })
}
function qT({events: e, onEventClick: t}) {
    const n = p.useRef(null)
      , r = o => {
        n.current && n.current.scrollBy({
            left: o === "left" ? -360 : 360,
            behavior: "smooth"
        })
    }
    ;
    return e.length === 0 ? null : c.jsx("section", {
        id: "settimana",
        className: "py-16 bg-sand-light",
        children: c.jsxs("div", {
            className: "container",
            children: [c.jsxs("div", {
                className: "flex items-center justify-between mb-8",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [c.jsx("div", {
                        className: "p-2 bg-accent/10 rounded-lg",
                        children: c.jsx(CS, {
                            className: "text-accent",
                            size: 24
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("h2", {
                            className: "text-2xl md:text-3xl font-bold text-foreground",
                            children: "In evidenza questa settimana"
                        }), c.jsx("p", {
                            className: "text-muted-foreground mt-1",
                            children: "Gli eventi da non perdere"
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "hidden md:flex gap-2",
                    children: [c.jsx(ve, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => r("left"),
                        "aria-label": "Scorri a sinistra",
                        children: c.jsx(fS, {
                            size: 20
                        })
                    }), c.jsx(ve, {
                        variant: "outline",
                        size: "icon",
                        onClick: () => r("right"),
                        "aria-label": "Scorri a destra",
                        children: c.jsx(pS, {
                            size: 20
                        })
                    })]
                })]
            }), c.jsx("div", {
                ref: n,
                className: "flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0",
                style: {
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                },
                children: e.map(o => c.jsx("div", {
                    className: "snap-start",
                    children: c.jsx(QT, {
                        event: o,
                        onDetailsClick: t
                    })
                }, o.id))
            })]
        })
    })
}
function KT({event: e, onDetailsClick: t, featured: n=!1}) {
    const r = async () => {
        const i = `${window.location.origin}#event-${e.id}`;
        if (navigator.share)
            try {
                await navigator.share({
                    title: e.title,
                    text: e.description,
                    url: i
                })
            } catch {}
        else
            await navigator.clipboard.writeText(i),
            nn({
                title: "Link copiato!",
                description: "Il link all'evento è stato copiato negli appunti."
            })
    }
      , o = () => {
        qy({
            title: e.title,
            description: e.description,
            startDateTime: e.startDateTime,
            endDateTime: e.endDateTime,
            venue: e.venue,
            area: e.area
        }),
        nn({
            title: "File calendario scaricato",
            description: "Apri il file .ics per aggiungere l'evento al tuo calendario."
        })
    }
    ;
    return c.jsxs("article", {
        className: `
        group bg-card rounded-xl border border-border p-5 transition-all duration-300
        hover:shadow-medium hover:border-primary/20
        ${n ? "ring-1 ring-primary/10" : ""}
      `,
        children: [c.jsxs("div", {
            className: "flex items-start justify-between gap-4 mb-3",
            children: [c.jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [c.jsx(Yd, {
                    category: e.category
                }), e.featured && c.jsx(Kt, {
                    variant: "outline",
                    className: "text-xs",
                    children: "In evidenza"
                }), e.status === "Tentative" && c.jsx(Kt, {
                    variant: "outline",
                    className: "text-xs text-muted-foreground",
                    children: "Da confermare"
                })]
            }), c.jsx(Kt, {
                variant: e.priceType === "Free" ? "free" : "paid",
                children: e.priceType === "Free" ? "Gratis" : c.jsx(hS, {
                    size: 12
                })
            })]
        }), c.jsx("h3", {
            className: "text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors",
            children: e.title
        }), c.jsxs("div", {
            className: "flex flex-col gap-1.5 mb-3 text-sm text-muted-foreground",
            children: [c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [c.jsx(Zs, {
                    size: 14,
                    className: "text-primary/70"
                }), c.jsx("span", {
                    className: "capitalize",
                    children: Eu(e.startDateTime)
                })]
            }), c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [c.jsx(Ss, {
                    size: 14,
                    className: "text-primary/70"
                }), c.jsxs("span", {
                    children: [e.venue, ", ", e.area]
                })]
            }), e.bookingRequired && c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [c.jsx(jv, {
                    size: 14,
                    className: "text-accent/70"
                }), c.jsx("span", {
                    className: "text-accent",
                    children: "Prenotazione richiesta"
                })]
            })]
        }), c.jsx("p", {
            className: "text-sm text-muted-foreground mb-4 line-clamp-2",
            children: e.description
        }), e.sourceName && c.jsxs("p", {
            className: "text-xs text-muted-foreground/70 mb-4",
            children: ["Fonte: ", e.sourceName]
        }), c.jsxs("div", {
            className: "flex flex-wrap items-center gap-2",
            children: [c.jsx(ve, {
                size: "sm",
                onClick: () => t(e),
                children: "Dettagli"
            }), c.jsxs(ve, {
                size: "sm",
                variant: "ghost",
                onClick: o,
                title: "Aggiungi al calendario",
                children: [c.jsx(Tv, {
                    size: 16
                }), c.jsx("span", {
                    className: "sr-only sm:not-sr-only",
                    children: "Calendario"
                })]
            }), c.jsxs(ve, {
                size: "sm",
                variant: "ghost",
                onClick: r,
                title: "Condividi",
                children: [c.jsx(Ov, {
                    size: 16
                }), c.jsx("span", {
                    className: "sr-only sm:not-sr-only",
                    children: "Condividi"
                })]
            }), e.officialUrl && c.jsx(ve, {
                size: "sm",
                variant: "ghost",
                asChild: !0,
                title: "Link ufficiale",
                children: c.jsxs("a", {
                    href: e.officialUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [c.jsx(Rv, {
                        size: 16
                    }), c.jsx("span", {
                        className: "sr-only sm:not-sr-only",
                        children: "Sito"
                    })]
                })
            })]
        })]
    })
}
function Ky(e) {
    const t = p.useRef({
        value: e,
        previous: e
    });
    return p.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var pl = "Checkbox"
  , [GT,lR] = Br(pl)
  , [XT,Xd] = GT(pl);
function ZT(e) {
    const {__scopeCheckbox: t, checked: n, children: r, defaultChecked: o, disabled: i, form: a, name: s, onCheckedChange: l, required: u, value: d="on", internal_do_not_use_render: f} = e
      , [y,g] = Bi({
        prop: n,
        defaultProp: o ?? !1,
        onChange: l,
        caller: pl
    })
      , [b,h] = p.useState(null)
      , [w,v] = p.useState(null)
      , m = p.useRef(!1)
      , x = b ? !!a || !!b.closest("form") : !0
      , S = {
        checked: y,
        disabled: i,
        setChecked: g,
        control: b,
        setControl: h,
        name: s,
        form: a,
        value: d,
        hasConsumerStoppedPropagationRef: m,
        required: u,
        defaultChecked: nr(o) ? !1 : o,
        isFormControl: x,
        bubbleInput: w,
        setBubbleInput: v
    };
    return c.jsx(XT, {
        scope: t,
        ...S,
        children: JT(f) ? f(S) : r
    })
}
var Gy = "CheckboxTrigger"
  , Xy = p.forwardRef( ({__scopeCheckbox: e, onKeyDown: t, onClick: n, ...r}, o) => {
    const {control: i, value: a, disabled: s, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: y, isFormControl: g, bubbleInput: b} = Xd(Gy, e)
      , h = ue(o, d)
      , w = p.useRef(l);
    return p.useEffect( () => {
        const v = i == null ? void 0 : i.form;
        if (v) {
            const m = () => f(w.current);
            return v.addEventListener("reset", m),
            () => v.removeEventListener("reset", m)
        }
    }
    , [i, f]),
    c.jsx(Z.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": nr(l) ? "mixed" : l,
        "aria-required": u,
        "data-state": n0(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: a,
        ...r,
        ref: h,
        onKeyDown: K(t, v => {
            v.key === "Enter" && v.preventDefault()
        }
        ),
        onClick: K(n, v => {
            f(m => nr(m) ? !0 : !m),
            b && g && (y.current = v.isPropagationStopped(),
            y.current || v.stopPropagation())
        }
        )
    })
}
);
Xy.displayName = Gy;
var Zd = p.forwardRef( (e, t) => {
    const {__scopeCheckbox: n, name: r, checked: o, defaultChecked: i, required: a, disabled: s, value: l, onCheckedChange: u, form: d, ...f} = e;
    return c.jsx(ZT, {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: i,
        disabled: s,
        required: a,
        onCheckedChange: u,
        name: r,
        form: d,
        value: l,
        internal_do_not_use_render: ({isFormControl: y}) => c.jsxs(c.Fragment, {
            children: [c.jsx(Xy, {
                ...f,
                ref: t,
                __scopeCheckbox: n
            }), y && c.jsx(t0, {
                __scopeCheckbox: n
            })]
        })
    })
}
);
Zd.displayName = pl;
var Zy = "CheckboxIndicator"
  , Jy = p.forwardRef( (e, t) => {
    const {__scopeCheckbox: n, forceMount: r, ...o} = e
      , i = Xd(Zy, n);
    return c.jsx(Vr, {
        present: r || nr(i.checked) || i.checked === !0,
        children: c.jsx(Z.span, {
            "data-state": n0(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: {
                pointerEvents: "none",
                ...e.style
            }
        })
    })
}
);
Jy.displayName = Zy;
var e0 = "CheckboxBubbleInput"
  , t0 = p.forwardRef( ({__scopeCheckbox: e, ...t}, n) => {
    const {control: r, hasConsumerStoppedPropagationRef: o, checked: i, defaultChecked: a, required: s, disabled: l, name: u, value: d, form: f, bubbleInput: y, setBubbleInput: g} = Xd(e0, e)
      , b = ue(n, g)
      , h = Ky(i)
      , w = ny(r);
    p.useEffect( () => {
        const m = y;
        if (!m)
            return;
        const x = window.HTMLInputElement.prototype
          , C = Object.getOwnPropertyDescriptor(x, "checked").set
          , k = !o.current;
        if (h !== i && C) {
            const E = new Event("click",{
                bubbles: k
            });
            m.indeterminate = nr(i),
            C.call(m, nr(i) ? !1 : i),
            m.dispatchEvent(E)
        }
    }
    , [y, h, i, o]);
    const v = p.useRef(nr(i) ? !1 : i);
    return c.jsx(Z.input, {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? v.current,
        required: s,
        disabled: l,
        name: u,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
            ...t.style,
            ...w,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
            transform: "translateX(-100%)"
        }
    })
}
);
t0.displayName = e0;
function JT(e) {
    return typeof e == "function"
}
function nr(e) {
    return e === "indeterminate"
}
function n0(e) {
    return nr(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
const Ln = p.forwardRef( ({className: e, ...t}, n) => c.jsx(Zd, {
    ref: n,
    className: te("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ...t,
    children: c.jsx(Jy, {
        className: te("flex items-center justify-center text-current"),
        children: c.jsx(Js, {
            className: "h-4 w-4"
        })
    })
}));
Ln.displayName = Zd.displayName;
var eP = "Label"
  , r0 = p.forwardRef( (e, t) => c.jsx(Z.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var o;
        n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
r0.displayName = eP;
var o0 = r0;
const tP = oa("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , we = p.forwardRef( ({className: e, ...t}, n) => c.jsx(o0, {
    ref: n,
    className: te(tP(), e),
    ...t
}));
we.displayName = o0.displayName;
var nP = "Separator"
  , pm = "horizontal"
  , rP = ["horizontal", "vertical"]
  , i0 = p.forwardRef( (e, t) => {
    const {decorative: n, orientation: r=pm, ...o} = e
      , i = oP(r) ? r : pm
      , s = n ? {
        role: "none"
    } : {
        "aria-orientation": i === "vertical" ? i : void 0,
        role: "separator"
    };
    return c.jsx(Z.div, {
        "data-orientation": i,
        ...s,
        ...o,
        ref: t
    })
}
);
i0.displayName = nP;
function oP(e) {
    return rP.includes(e)
}
var a0 = i0;
const Eo = p.forwardRef( ({className: e, orientation: t="horizontal", decorative: n=!0, ...r}, o) => c.jsx(a0, {
    ref: o,
    decorative: n,
    orientation: t,
    className: te("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...r
}));
Eo.displayName = a0.displayName;
var sc = "focusScope.autoFocusOnMount"
  , lc = "focusScope.autoFocusOnUnmount"
  , mm = {
    bubbles: !1,
    cancelable: !0
}
  , iP = "FocusScope"
  , Jd = p.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...a} = e
      , [s,l] = p.useState(null)
      , u = zt(o)
      , d = zt(i)
      , f = p.useRef(null)
      , y = ue(t, h => l(h))
      , g = p.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    p.useEffect( () => {
        if (r) {
            let h = function(x) {
                if (g.paused || !s)
                    return;
                const S = x.target;
                s.contains(S) ? f.current = S : Dn(f.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (g.paused || !s)
                    return;
                const S = x.relatedTarget;
                S !== null && (s.contains(S) || Dn(f.current, {
                    select: !0
                }))
            }
              , v = function(x) {
                if (document.activeElement === document.body)
                    for (const C of x)
                        C.removedNodes.length > 0 && Dn(s)
            };
            document.addEventListener("focusin", h),
            document.addEventListener("focusout", w);
            const m = new MutationObserver(v);
            return s && m.observe(s, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", h),
                document.removeEventListener("focusout", w),
                m.disconnect()
            }
        }
    }
    , [r, s, g.paused]),
    p.useEffect( () => {
        if (s) {
            gm.add(g);
            const h = document.activeElement;
            if (!s.contains(h)) {
                const v = new CustomEvent(sc,mm);
                s.addEventListener(sc, u),
                s.dispatchEvent(v),
                v.defaultPrevented || (aP(dP(s0(s)), {
                    select: !0
                }),
                document.activeElement === h && Dn(s))
            }
            return () => {
                s.removeEventListener(sc, u),
                setTimeout( () => {
                    const v = new CustomEvent(lc,mm);
                    s.addEventListener(lc, d),
                    s.dispatchEvent(v),
                    v.defaultPrevented || Dn(h ?? document.body, {
                        select: !0
                    }),
                    s.removeEventListener(lc, d),
                    gm.remove(g)
                }
                , 0)
            }
        }
    }
    , [s, u, d, g]);
    const b = p.useCallback(h => {
        if (!n && !r || g.paused)
            return;
        const w = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey
          , v = document.activeElement;
        if (w && v) {
            const m = h.currentTarget
              , [x,S] = sP(m);
            x && S ? !h.shiftKey && v === S ? (h.preventDefault(),
            n && Dn(x, {
                select: !0
            })) : h.shiftKey && v === x && (h.preventDefault(),
            n && Dn(S, {
                select: !0
            })) : v === m && h.preventDefault()
        }
    }
    , [n, r, g.paused]);
    return c.jsx(Z.div, {
        tabIndex: -1,
        ...a,
        ref: y,
        onKeyDown: b
    })
}
);
Jd.displayName = iP;
function aP(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Dn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function sP(e) {
    const t = s0(e)
      , n = hm(t, e)
      , r = hm(t.reverse(), e);
    return [n, r]
}
function s0(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function hm(e, t) {
    for (const n of e)
        if (!lP(n, {
            upTo: t
        }))
            return n
}
function lP(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function cP(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Dn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && cP(e) && t && e.select()
    }
}
var gm = uP();
function uP() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = vm(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = vm(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function vm(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function dP(e) {
    return e.filter(t => t.tagName !== "A")
}
var cc = 0;
function l0() {
    p.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? ym()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? ym()),
        cc++,
        () => {
            cc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            cc--
        }
    }
    , [])
}
function ym() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Zt = function() {
    return Zt = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Zt.apply(this, arguments)
};
function c0(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function fP(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
            i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var Ga = "right-scroll-bar-position"
  , Xa = "width-before-scroll-bar"
  , pP = "with-scroll-bars-hidden"
  , mP = "--removed-body-scroll-bar-size";
function uc(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function hP(e, t) {
    var n = p.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var gP = typeof window < "u" ? p.useLayoutEffect : p.useEffect
  , xm = new WeakMap;
function vP(e, t) {
    var n = hP(null, function(r) {
        return e.forEach(function(o) {
            return uc(o, r)
        })
    });
    return gP(function() {
        var r = xm.get(n);
        if (r) {
            var o = new Set(r)
              , i = new Set(e)
              , a = n.current;
            o.forEach(function(s) {
                i.has(s) || uc(s, null)
            }),
            i.forEach(function(s) {
                o.has(s) || uc(s, a)
            })
        }
        xm.set(n, e)
    }, [e]),
    n
}
function yP(e) {
    return e
}
function xP(e, t) {
    t === void 0 && (t = yP);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(i) {
            var a = t(i, r);
            return n.push(a),
            function() {
                n = n.filter(function(s) {
                    return s !== a
                })
            }
        },
        assignSyncMedium: function(i) {
            for (r = !0; n.length; ) {
                var a = n;
                n = [],
                a.forEach(i)
            }
            n = {
                push: function(s) {
                    return i(s)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(i) {
            r = !0;
            var a = [];
            if (n.length) {
                var s = n;
                n = [],
                s.forEach(i),
                a = n
            }
            var l = function() {
                var d = a;
                a = [],
                d.forEach(i)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(d) {
                    a.push(d),
                    u()
                },
                filter: function(d) {
                    return a = a.filter(d),
                    n
                }
            }
        }
    };
    return o
}
function wP(e) {
    e === void 0 && (e = {});
    var t = xP(null);
    return t.options = Zt({
        async: !0,
        ssr: !1
    }, e),
    t
}
var u0 = function(e) {
    var t = e.sideCar
      , n = c0(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return p.createElement(r, Zt({}, n))
};
u0.isSideCarExport = !0;
function bP(e, t) {
    return e.useMedium(t),
    u0
}
var d0 = wP()
  , dc = function() {}
  , ml = p.forwardRef(function(e, t) {
    var n = p.useRef(null)
      , r = p.useState({
        onScrollCapture: dc,
        onWheelCapture: dc,
        onTouchMoveCapture: dc
    })
      , o = r[0]
      , i = r[1]
      , a = e.forwardProps
      , s = e.children
      , l = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , f = e.shards
      , y = e.sideCar
      , g = e.noRelative
      , b = e.noIsolation
      , h = e.inert
      , w = e.allowPinchZoom
      , v = e.as
      , m = v === void 0 ? "div" : v
      , x = e.gapMode
      , S = c0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , C = y
      , k = vP([n, t])
      , E = Zt(Zt({}, S), o);
    return p.createElement(p.Fragment, null, d && p.createElement(C, {
        sideCar: d0,
        removeScrollBar: u,
        shards: f,
        noRelative: g,
        noIsolation: b,
        inert: h,
        setCallbacks: i,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), a ? p.cloneElement(p.Children.only(s), Zt(Zt({}, E), {
        ref: k
    })) : p.createElement(m, Zt({}, E, {
        className: l,
        ref: k
    }), s))
});
ml.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ml.classNames = {
    fullWidth: Xa,
    zeroRight: Ga
};
var SP = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function CP() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = SP();
    return t && e.setAttribute("nonce", t),
    e
}
function EP(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function kP(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var NP = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = CP()) && (EP(t, n),
            kP(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , TP = function() {
    var e = NP();
    return function(t, n) {
        p.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , f0 = function() {
    var e = TP()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , PP = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , fc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , jP = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [fc(n), fc(r), fc(o)]
}
  , RP = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return PP;
    var t = jP(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , MP = f0()
  , ko = "data-scroll-locked"
  , DP = function(e, t, n, r) {
    var o = e.left
      , i = e.top
      , a = e.right
      , s = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(pP, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(ko, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ga, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Xa, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ga, " .").concat(Ga, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xa, " .").concat(Xa, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ko, `] {
    `).concat(mP, ": ").concat(s, `px;
  }
`)
}
  , wm = function() {
    var e = parseInt(document.body.getAttribute(ko) || "0", 10);
    return isFinite(e) ? e : 0
}
  , OP = function() {
    p.useEffect(function() {
        return document.body.setAttribute(ko, (wm() + 1).toString()),
        function() {
            var e = wm() - 1;
            e <= 0 ? document.body.removeAttribute(ko) : document.body.setAttribute(ko, e.toString())
        }
    }, [])
}
  , _P = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    OP();
    var i = p.useMemo(function() {
        return RP(o)
    }, [o]);
    return p.createElement(MP, {
        styles: DP(i, !t, o, n ? "" : "!important")
    })
}
  , ku = !1;
if (typeof window < "u")
    try {
        var Ma = Object.defineProperty({}, "passive", {
            get: function() {
                return ku = !0,
                !0
            }
        });
        window.addEventListener("test", Ma, Ma),
        window.removeEventListener("test", Ma, Ma)
    } catch {
        ku = !1
    }
var Xr = ku ? {
    passive: !1
} : !1
  , AP = function(e) {
    return e.tagName === "TEXTAREA"
}
  , p0 = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !AP(e) && n[t] === "visible")
}
  , IP = function(e) {
    return p0(e, "overflowY")
}
  , LP = function(e) {
    return p0(e, "overflowX")
}
  , bm = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = m0(e, r);
        if (o) {
            var i = h0(e, r)
              , a = i[1]
              , s = i[2];
            if (a > s)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , zP = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , FP = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , m0 = function(e, t) {
    return e === "v" ? IP(t) : LP(t)
}
  , h0 = function(e, t) {
    return e === "v" ? zP(t) : FP(t)
}
  , $P = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , WP = function(e, t, n, r, o) {
    var i = $P(e, window.getComputedStyle(t).direction)
      , a = i * r
      , s = n.target
      , l = t.contains(s)
      , u = !1
      , d = a > 0
      , f = 0
      , y = 0;
    do {
        if (!s)
            break;
        var g = h0(e, s)
          , b = g[0]
          , h = g[1]
          , w = g[2]
          , v = h - w - i * b;
        (b || v) && m0(e, s) && (f += v,
        y += b);
        var m = s.parentNode;
        s = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m
    } while (!l && s !== document.body || l && (t.contains(s) || t === s));
    return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(y) < 1 || !o)) && (u = !0),
    u
}
  , Da = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Sm = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Cm = function(e) {
    return e && "current"in e ? e.current : e
}
  , UP = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , BP = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , VP = 0
  , Zr = [];
function HP(e) {
    var t = p.useRef([])
      , n = p.useRef([0, 0])
      , r = p.useRef()
      , o = p.useState(VP++)[0]
      , i = p.useState(f0)[0]
      , a = p.useRef(e);
    p.useEffect(function() {
        a.current = e
    }, [e]),
    p.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var h = fP([e.lockRef.current], (e.shards || []).map(Cm), !0).filter(Boolean);
            return h.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                h.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = p.useCallback(function(h, w) {
        if ("touches"in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
            return !a.current.allowPinchZoom;
        var v = Da(h), m = n.current, x = "deltaX"in h ? h.deltaX : m[0] - v[0], S = "deltaY"in h ? h.deltaY : m[1] - v[1], C, k = h.target, E = Math.abs(x) > Math.abs(S) ? "h" : "v";
        if ("touches"in h && E === "h" && k.type === "range")
            return !1;
        var j = bm(E, k);
        if (!j)
            return !0;
        if (j ? C = E : (C = E === "v" ? "h" : "v",
        j = bm(E, k)),
        !j)
            return !1;
        if (!r.current && "changedTouches"in h && (x || S) && (r.current = C),
        !C)
            return !0;
        var M = r.current || C;
        return WP(M, w, h, M === "h" ? x : S, !0)
    }, [])
      , l = p.useCallback(function(h) {
        var w = h;
        if (!(!Zr.length || Zr[Zr.length - 1] !== i)) {
            var v = "deltaY"in w ? Sm(w) : Da(w)
              , m = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && UP(C.delta, v)
            })[0];
            if (m && m.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!m) {
                var x = (a.current.shards || []).map(Cm).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , S = x.length > 0 ? s(w, x[0]) : !a.current.noIsolation;
                S && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = p.useCallback(function(h, w, v, m) {
        var x = {
            name: h,
            delta: w,
            target: v,
            should: m,
            shadowParent: YP(v)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== x
            })
        }, 1)
    }, [])
      , d = p.useCallback(function(h) {
        n.current = Da(h),
        r.current = void 0
    }, [])
      , f = p.useCallback(function(h) {
        u(h.type, Sm(h), h.target, s(h, e.lockRef.current))
    }, [])
      , y = p.useCallback(function(h) {
        u(h.type, Da(h), h.target, s(h, e.lockRef.current))
    }, []);
    p.useEffect(function() {
        return Zr.push(i),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: y
        }),
        document.addEventListener("wheel", l, Xr),
        document.addEventListener("touchmove", l, Xr),
        document.addEventListener("touchstart", d, Xr),
        function() {
            Zr = Zr.filter(function(h) {
                return h !== i
            }),
            document.removeEventListener("wheel", l, Xr),
            document.removeEventListener("touchmove", l, Xr),
            document.removeEventListener("touchstart", d, Xr)
        }
    }, []);
    var g = e.removeScrollBar
      , b = e.inert;
    return p.createElement(p.Fragment, null, b ? p.createElement(i, {
        styles: BP(o)
    }) : null, g ? p.createElement(_P, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function YP(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const QP = bP(d0, HP);
var ef = p.forwardRef(function(e, t) {
    return p.createElement(ml, Zt({}, e, {
        ref: t,
        sideCar: QP
    }))
});
ef.classNames = ml.classNames;
var qP = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Jr = new WeakMap
  , Oa = new WeakMap
  , _a = {}
  , pc = 0
  , g0 = function(e) {
    return e && (e.host || g0(e.parentNode))
}
  , KP = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = g0(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , GP = function(e, t, n, r) {
    var o = KP(t, Array.isArray(e) ? e : [e]);
    _a[n] || (_a[n] = new WeakMap);
    var i = _a[n]
      , a = []
      , s = new Set
      , l = new Set(o)
      , u = function(f) {
        !f || s.has(f) || (s.add(f),
        u(f.parentNode))
    };
    o.forEach(u);
    var d = function(f) {
        !f || l.has(f) || Array.prototype.forEach.call(f.children, function(y) {
            if (s.has(y))
                d(y);
            else
                try {
                    var g = y.getAttribute(r)
                      , b = g !== null && g !== "false"
                      , h = (Jr.get(y) || 0) + 1
                      , w = (i.get(y) || 0) + 1;
                    Jr.set(y, h),
                    i.set(y, w),
                    a.push(y),
                    h === 1 && b && Oa.set(y, !0),
                    w === 1 && y.setAttribute(n, "true"),
                    b || y.setAttribute(r, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", y, v)
                }
        })
    };
    return d(t),
    s.clear(),
    pc++,
    function() {
        a.forEach(function(f) {
            var y = Jr.get(f) - 1
              , g = i.get(f) - 1;
            Jr.set(f, y),
            i.set(f, g),
            y || (Oa.has(f) || f.removeAttribute(r),
            Oa.delete(f)),
            g || f.removeAttribute(n)
        }),
        pc--,
        pc || (Jr = new WeakMap,
        Jr = new WeakMap,
        Oa = new WeakMap,
        _a = {})
    }
}
  , v0 = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = qP(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    GP(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , hl = "Dialog"
  , [y0,cR] = Br(hl)
  , [XP,Ut] = y0(hl)
  , x0 = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: a=!0} = e
      , s = p.useRef(null)
      , l = p.useRef(null)
      , [u,d] = Bi({
        prop: r,
        defaultProp: o ?? !1,
        onChange: i,
        caller: hl
    });
    return c.jsx(XP, {
        scope: t,
        triggerRef: s,
        contentRef: l,
        contentId: wo(),
        titleId: wo(),
        descriptionId: wo(),
        open: u,
        onOpenChange: d,
        onOpenToggle: p.useCallback( () => d(f => !f), [d]),
        modal: a,
        children: n
    })
}
;
x0.displayName = hl;
var w0 = "DialogTrigger"
  , b0 = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Ut(w0, n)
      , i = ue(t, o.triggerRef);
    return c.jsx(Z.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": rf(o.open),
        ...r,
        ref: i,
        onClick: K(e.onClick, o.onOpenToggle)
    })
}
);
b0.displayName = w0;
var tf = "DialogPortal"
  , [ZP,S0] = y0(tf, {
    forceMount: void 0
})
  , C0 = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , i = Ut(tf, t);
    return c.jsx(ZP, {
        scope: t,
        forceMount: n,
        children: p.Children.map(r, a => c.jsx(Vr, {
            present: n || i.open,
            children: c.jsx(Ks, {
                asChild: !0,
                container: o,
                children: a
            })
        }))
    })
}
;
C0.displayName = tf;
var Ms = "DialogOverlay"
  , E0 = p.forwardRef( (e, t) => {
    const n = S0(Ms, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Ut(Ms, e.__scopeDialog);
    return i.modal ? c.jsx(Vr, {
        present: r || i.open,
        children: c.jsx(ej, {
            ...o,
            ref: t
        })
    }) : null
}
);
E0.displayName = Ms;
var JP = Wo("DialogOverlay.RemoveScroll")
  , ej = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Ut(Ms, n);
    return c.jsx(ef, {
        as: JP,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: c.jsx(Z.div, {
            "data-state": rf(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , Lr = "DialogContent"
  , k0 = p.forwardRef( (e, t) => {
    const n = S0(Lr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Ut(Lr, e.__scopeDialog);
    return c.jsx(Vr, {
        present: r || i.open,
        children: i.modal ? c.jsx(tj, {
            ...o,
            ref: t
        }) : c.jsx(nj, {
            ...o,
            ref: t
        })
    })
}
);
k0.displayName = Lr;
var tj = p.forwardRef( (e, t) => {
    const n = Ut(Lr, e.__scopeDialog)
      , r = p.useRef(null)
      , o = ue(t, n.contentRef, r);
    return p.useEffect( () => {
        const i = r.current;
        if (i)
            return v0(i)
    }
    , []),
    c.jsx(N0, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: K(e.onCloseAutoFocus, i => {
            var a;
            i.preventDefault(),
            (a = n.triggerRef.current) == null || a.focus()
        }
        ),
        onPointerDownOutside: K(e.onPointerDownOutside, i => {
            const a = i.detail.originalEvent
              , s = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || s) && i.preventDefault()
        }
        ),
        onFocusOutside: K(e.onFocusOutside, i => i.preventDefault())
    })
}
)
  , nj = p.forwardRef( (e, t) => {
    const n = Ut(Lr, e.__scopeDialog)
      , r = p.useRef(!1)
      , o = p.useRef(!1);
    return c.jsx(N0, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: i => {
            var a, s;
            (a = e.onCloseAutoFocus) == null || a.call(e, i),
            i.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(),
            i.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: i => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, i),
            i.defaultPrevented || (r.current = !0,
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const a = i.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && i.preventDefault(),
            i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
        }
    })
}
)
  , N0 = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a} = e
      , s = Ut(Lr, n)
      , l = p.useRef(null)
      , u = ue(t, l);
    return l0(),
    c.jsxs(c.Fragment, {
        children: [c.jsx(Jd, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: c.jsx(na, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": rf(s.open),
                ...a,
                ref: u,
                onDismiss: () => s.onOpenChange(!1)
            })
        }), c.jsxs(c.Fragment, {
            children: [c.jsx(rj, {
                titleId: s.titleId
            }), c.jsx(ij, {
                contentRef: l,
                descriptionId: s.descriptionId
            })]
        })]
    })
}
)
  , nf = "DialogTitle"
  , T0 = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Ut(nf, n);
    return c.jsx(Z.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
T0.displayName = nf;
var P0 = "DialogDescription"
  , j0 = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Ut(P0, n);
    return c.jsx(Z.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
j0.displayName = P0;
var R0 = "DialogClose"
  , M0 = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Ut(R0, n);
    return c.jsx(Z.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: K(e.onClick, () => o.onOpenChange(!1))
    })
}
);
M0.displayName = R0;
function rf(e) {
    return e ? "open" : "closed"
}
var D0 = "DialogTitleWarning"
  , [uR,O0] = vb(D0, {
    contentName: Lr,
    titleName: nf,
    docsSlug: "dialog"
})
  , rj = ({titleId: e}) => {
    const t = O0(D0)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return p.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , oj = "DialogDescriptionWarning"
  , ij = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${O0(oj).contentName}}.`;
    return p.useEffect( () => {
        var i;
        const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , _0 = x0
  , aj = b0
  , A0 = C0
  , gl = E0
  , vl = k0
  , yl = T0
  , xl = j0
  , I0 = M0;
const sj = _0
  , lj = aj
  , cj = A0
  , L0 = p.forwardRef( ({className: e, ...t}, n) => c.jsx(gl, {
    className: te("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t,
    ref: n
}));
L0.displayName = gl.displayName;
const uj = oa("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
})
  , z0 = p.forwardRef( ({side: e="right", className: t, children: n, ...r}, o) => c.jsxs(cj, {
    children: [c.jsx(L0, {}), c.jsxs(vl, {
        ref: o,
        className: te(uj({
            side: e
        }), t),
        ...r,
        children: [n, c.jsxs(I0, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [c.jsx(el, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
z0.displayName = vl.displayName;
const F0 = ({className: e, ...t}) => c.jsx("div", {
    className: te("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
});
F0.displayName = "SheetHeader";
const $0 = p.forwardRef( ({className: e, ...t}, n) => c.jsx(yl, {
    ref: n,
    className: te("text-lg font-semibold text-foreground", e),
    ...t
}));
$0.displayName = yl.displayName;
const dj = p.forwardRef( ({className: e, ...t}, n) => c.jsx(xl, {
    ref: n,
    className: te("text-sm text-muted-foreground", e),
    ...t
}));
dj.displayName = xl.displayName;
const Em = [{
    id: "1",
    title: "Concerto Jazz al Tramonto",
    category: "Musica",
    description: "Una serata di musica jazz dal vivo con vista sui Faraglioni. Il quartetto Capri Jazz Ensemble presenta brani originali e classici riarrangiati.",
    startDateTime: "2025-12-27T19:00:00",
    endDateTime: "2025-12-27T22:00:00",
    area: "Capri",
    venue: "Giardini di Augusto",
    priceType: "Paid",
    bookingRequired: !0,
    officialUrl: "https://example.com/jazz",
    sourceName: "Comune di Capri",
    featured: !0,
    lastUpdated: "2025-12-20T10:00:00",
    status: "Confirmed"
}, {
    id: "2",
    title: "Mostra Fotografica: Capri negli Anni '50",
    category: "Mostre",
    description: "Una raccolta di fotografie storiche che documentano la vita quotidiana e i personaggi illustri che hanno visitato l'isola nel dopoguerra.",
    startDateTime: "2025-12-23T10:00:00",
    endDateTime: "2026-01-15T18:00:00",
    area: "Capri",
    venue: "Certosa di San Giacomo",
    priceType: "Free",
    bookingRequired: !1,
    sourceName: "Centro Culturale Caprese",
    featured: !0,
    lastUpdated: "2025-12-18T14:00:00",
    status: "Confirmed"
}, {
    id: "3",
    title: "Torneo di Calcetto Under 16",
    category: "Sport",
    description: "Torneo annuale di calcetto giovanile con squadre provenienti da tutta la Campania. Finale con premiazione e rinfresco.",
    startDateTime: "2025-12-28T09:00:00",
    endDateTime: "2025-12-28T17:00:00",
    area: "Anacapri",
    venue: "Campo Sportivo Anacapri",
    priceType: "Free",
    bookingRequired: !1,
    sourceName: "ASD Anacapri",
    featured: !1,
    lastUpdated: "2025-12-19T11:00:00",
    status: "Confirmed"
}, {
    id: "4",
    title: "Cinema all'Aperto: Nuovo Cinema Paradiso",
    category: "Cinema",
    description: "Proiezione del capolavoro di Giuseppe Tornatore in versione restaurata. Coperte disponibili, si consiglia abbigliamento caldo.",
    startDateTime: "2025-12-26T20:30:00",
    area: "Capri",
    venue: "Piazzetta",
    priceType: "Free",
    bookingRequired: !0,
    officialUrl: "https://example.com/cinema",
    sourceName: "Pro Loco Capri",
    featured: !0,
    lastUpdated: "2025-12-20T16:00:00",
    status: "Confirmed"
}, {
    id: "5",
    title: "Festa di San Costanzo",
    category: "Sagre & Tradizioni",
    description: "Celebrazione del santo patrono con processione, messa solenne e fuochi d'artificio serali. Bancarelle con prodotti tipici.",
    startDateTime: "2025-12-29T11:00:00",
    endDateTime: "2025-12-29T23:00:00",
    area: "Capri",
    venue: "Chiesa di Santo Stefano e Centro Storico",
    priceType: "Free",
    bookingRequired: !1,
    sourceName: "Parrocchia Santo Stefano",
    featured: !0,
    lastUpdated: "2025-12-21T09:00:00",
    status: "Confirmed"
}, {
    id: "6",
    title: "Laboratorio di Ceramica per Bambini",
    category: "Kids/Famiglia",
    description: "Attività creativa per bambini dai 5 ai 12 anni. I piccoli artisti creeranno le proprie opere ispirate ai colori dell'isola.",
    startDateTime: "2025-12-24T15:00:00",
    endDateTime: "2025-12-24T17:00:00",
    area: "Anacapri",
    venue: "Biblioteca Comunale",
    priceType: "Paid",
    bookingRequired: !0,
    sourceName: "Comune di Anacapri",
    featured: !1,
    lastUpdated: "2025-12-17T12:00:00",
    status: "Confirmed"
}, {
    id: "7",
    title: "DJ Set Vista Mare",
    category: "Nightlife",
    description: "Serata house e deep house con DJ residenti e ospiti speciali. Aperitivo incluso nel biglietto d'ingresso.",
    startDateTime: "2025-12-27T22:00:00",
    endDateTime: "2025-12-28T02:00:00",
    area: "Capri",
    venue: "Lido del Faro",
    priceType: "Paid",
    bookingRequired: !0,
    officialUrl: "https://example.com/djset",
    sourceName: "Lido del Faro",
    featured: !1,
    lastUpdated: "2025-12-19T18:00:00",
    status: "Confirmed"
}, {
    id: "8",
    title: "Conferenza: Il Futuro del Turismo Sostenibile",
    category: "Cultura",
    description: "Incontro con esperti del settore per discutere strategie di turismo responsabile per le piccole isole del Mediterraneo.",
    startDateTime: "2025-12-30T17:00:00",
    endDateTime: "2025-12-30T19:30:00",
    area: "Capri",
    venue: "Grand Hotel Quisisana",
    priceType: "Free",
    bookingRequired: !0,
    sourceName: "Associazione Capri Sostenibile",
    featured: !1,
    lastUpdated: "2025-12-20T08:00:00",
    status: "Confirmed"
}, {
    id: "9",
    title: "Escursione Guidata: Sentiero dei Fortini",
    category: "Sport",
    description: "Trekking panoramico lungo l'antico percorso militare. Difficoltà media, durata circa 3 ore. Portare acqua e scarpe adatte.",
    startDateTime: "2025-12-25T09:30:00",
    endDateTime: "2025-12-25T12:30:00",
    area: "Anacapri",
    venue: "Partenza da Faro di Punta Carena",
    priceType: "Paid",
    bookingRequired: !0,
    officialUrl: "https://example.com/trekking",
    sourceName: "Guide Capri",
    featured: !0,
    lastUpdated: "2025-12-18T15:00:00",
    status: "Confirmed"
}, {
    id: "10",
    title: "Mercatino di Natale",
    category: "Sagre & Tradizioni",
    description: "Artigianato locale, prodotti tipici e decorazioni natalizie. Stand gastronomici con dolci della tradizione.",
    startDateTime: "2025-12-23T10:00:00",
    endDateTime: "2025-12-26T20:00:00",
    area: "Anacapri",
    venue: "Piazza Vittoria",
    priceType: "Free",
    bookingRequired: !1,
    sourceName: "Pro Loco Anacapri",
    featured: !0,
    lastUpdated: "2025-12-15T10:00:00",
    status: "Confirmed"
}, {
    id: "11",
    title: "Presentazione Libro: Storie di Mare",
    category: "Cultura",
    description: "L'autore caprese Marco Ferrara presenta il suo nuovo romanzo ambientato sull'isola. Seguirà firma copie e aperitivo.",
    startDateTime: "2025-12-28T18:00:00",
    area: "Capri",
    venue: "Libreria La Conchiglia",
    priceType: "Free",
    bookingRequired: !1,
    sourceName: "Libreria La Conchiglia",
    featured: !1,
    lastUpdated: "2025-12-21T11:00:00",
    status: "Confirmed"
}, {
    id: "12",
    title: "Yoga all'Alba",
    category: "Sport",
    description: "Sessione di yoga hatha con vista sul Golfo di Napoli. Tappetini forniti. Adatto a tutti i livelli.",
    startDateTime: "2025-12-26T06:30:00",
    endDateTime: "2025-12-26T08:00:00",
    area: "Anacapri",
    venue: "Monte Solaro",
    priceType: "Paid",
    bookingRequired: !0,
    sourceName: "Capri Wellness",
    featured: !1,
    lastUpdated: "2025-12-19T09:00:00",
    status: "Tentative"
}, {
    id: "13",
    title: "Spettacolo di Magia per Famiglie",
    category: "Kids/Famiglia",
    description: 'Il Mago Teodoro presenta "Incantesimi Mediterranei". Uno show interattivo che coinvolgerà grandi e piccini.',
    startDateTime: "2025-12-27T16:00:00",
    endDateTime: "2025-12-27T17:30:00",
    area: "Capri",
    venue: "Teatro Comunale",
    priceType: "Paid",
    bookingRequired: !0,
    sourceName: "Teatro Comunale Capri",
    featured: !1,
    lastUpdated: "2025-12-20T14:00:00",
    status: "Confirmed"
}, {
    id: "14",
    title: "Degustazione Vini Campani",
    category: "Cultura",
    description: "Serata enogastronomica con selezione di vini DOC della regione accompagnati da formaggi e salumi locali.",
    startDateTime: "2025-12-29T19:00:00",
    endDateTime: "2025-12-29T22:00:00",
    area: "Capri",
    venue: "Enoteca Caprese",
    priceType: "Paid",
    bookingRequired: !0,
    officialUrl: "https://example.com/vini",
    sourceName: "Enoteca Caprese",
    featured: !1,
    lastUpdated: "2025-12-21T16:00:00",
    status: "Confirmed"
}, {
    id: "15",
    title: "Concerto di Capodanno",
    category: "Musica",
    description: "Orchestra Sinfonica di Napoli esegue i classici del repertorio viennese. Brindisi di mezzanotte incluso.",
    startDateTime: "2025-12-31T22:00:00",
    endDateTime: "2026-01-01T01:00:00",
    area: "Capri",
    venue: "Piazzetta",
    priceType: "Free",
    bookingRequired: !1,
    sourceName: "Comune di Capri",
    featured: !0,
    lastUpdated: "2025-12-22T10:00:00",
    status: "Confirmed"
}]
  , W0 = ["Musica", "Cultura", "Mostre", "Cinema", "Sport", "Sagre & Tradizioni", "Kids/Famiglia", "Nightlife"]
  , U0 = ["Capri", "Anacapri"];
function fj({selectedCategories: e, selectedAreas: t, priceFilter: n, onCategoryChange: r, onAreaChange: o, onPriceChange: i, onReset: a, activeFiltersCount: s}) {
    const l = f => {
        e.includes(f) ? r(e.filter(y => y !== f)) : r([...e, f])
    }
      , u = f => {
        t.includes(f) ? o(t.filter(y => y !== f)) : o([...t, f])
    }
      , d = () => c.jsxs("div", {
        className: "space-y-6",
        children: [c.jsxs("div", {
            children: [c.jsx("h4", {
                className: "text-sm font-semibold text-foreground mb-3",
                children: "Categoria"
            }), c.jsx("div", {
                className: "space-y-2",
                children: W0.map(f => c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [c.jsx(Ln, {
                        id: `cat-${f}`,
                        checked: e.includes(f),
                        onCheckedChange: () => l(f)
                    }), c.jsx(we, {
                        htmlFor: `cat-${f}`,
                        className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors",
                        children: f
                    })]
                }, f))
            })]
        }), c.jsx(Eo, {}), c.jsxs("div", {
            children: [c.jsx("h4", {
                className: "text-sm font-semibold text-foreground mb-3",
                children: "Località"
            }), c.jsx("div", {
                className: "space-y-2",
                children: U0.map(f => c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [c.jsx(Ln, {
                        id: `area-${f}`,
                        checked: t.includes(f),
                        onCheckedChange: () => u(f)
                    }), c.jsx(we, {
                        htmlFor: `area-${f}`,
                        className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors",
                        children: f
                    })]
                }, f))
            })]
        }), c.jsx(Eo, {}), c.jsxs("div", {
            children: [c.jsx("h4", {
                className: "text-sm font-semibold text-foreground mb-3",
                children: "Prezzo"
            }), c.jsxs("div", {
                className: "space-y-2",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [c.jsx(Ln, {
                        id: "price-all",
                        checked: n === "all",
                        onCheckedChange: () => i("all")
                    }), c.jsx(we, {
                        htmlFor: "price-all",
                        className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors",
                        children: "Tutti"
                    })]
                }), c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [c.jsx(Ln, {
                        id: "price-free",
                        checked: n === "free",
                        onCheckedChange: () => i("free")
                    }), c.jsx(we, {
                        htmlFor: "price-free",
                        className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors",
                        children: "Solo gratuiti"
                    })]
                }), c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [c.jsx(Ln, {
                        id: "price-paid",
                        checked: n === "paid",
                        onCheckedChange: () => i("paid")
                    }), c.jsx(we, {
                        htmlFor: "price-paid",
                        className: "text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors",
                        children: "A pagamento"
                    })]
                })]
            })]
        }), s > 0 && c.jsxs(c.Fragment, {
            children: [c.jsx(Eo, {}), c.jsxs(ve, {
                variant: "ghost",
                className: "w-full justify-center gap-2",
                onClick: a,
                children: [c.jsx(wS, {
                    size: 16
                }), "Reimposta filtri"]
            })]
        })]
    });
    return c.jsxs(c.Fragment, {
        children: [c.jsx("aside", {
            className: "hidden lg:block w-64 flex-shrink-0",
            children: c.jsxs("div", {
                className: "sticky top-24 bg-card rounded-xl border border-border p-5",
                children: [c.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [c.jsxs("h3", {
                        className: "font-semibold text-foreground flex items-center gap-2",
                        children: [c.jsx(tc, {
                            size: 18
                        }), "Filtri"]
                    }), s > 0 && c.jsx("span", {
                        className: "text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full",
                        children: s
                    })]
                }), c.jsx(d, {})]
            })
        }), c.jsxs(sj, {
            children: [c.jsx(lj, {
                asChild: !0,
                children: c.jsxs(ve, {
                    variant: "outline",
                    className: "lg:hidden gap-2",
                    children: [c.jsx(tc, {
                        size: 16
                    }), "Filtri", s > 0 && c.jsx("span", {
                        className: "bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full",
                        children: s
                    })]
                })
            }), c.jsxs(z0, {
                side: "left",
                className: "w-80",
                children: [c.jsx(F0, {
                    children: c.jsxs($0, {
                        className: "flex items-center gap-2",
                        children: [c.jsx(tc, {
                            size: 18
                        }), "Filtri"]
                    })
                }), c.jsx("div", {
                    className: "mt-6",
                    children: c.jsx(d, {})
                })]
            })]
        })]
    })
}
function pj({events: e, searchQuery: t, dateFilter: n, onEventClick: r}) {
    const [o,i] = p.useState([])
      , [a,s] = p.useState([])
      , [l,u] = p.useState("all")
      , [d,f] = p.useState("date")
      , y = p.useMemo( () => {
        let h = [...e];
        if (t) {
            const w = t.toLowerCase();
            h = h.filter(v => v.title.toLowerCase().includes(w) || v.description.toLowerCase().includes(w) || v.venue.toLowerCase().includes(w) || v.area.toLowerCase().includes(w) || v.category.toLowerCase().includes(w))
        }
        return n && (h = h.filter(w => {
            switch (n) {
            case "today":
                return BT(w.startDateTime);
            case "tomorrow":
                return VT(w.startDateTime);
            case "weekend":
                return HT(w.startDateTime);
            case "week":
                return Qy(w.startDateTime);
            default:
                return !0
            }
        }
        )),
        o.length > 0 && (h = h.filter(w => o.includes(w.category))),
        a.length > 0 && (h = h.filter(w => a.includes(w.area))),
        l !== "all" && (h = h.filter(w => l === "free" ? w.priceType === "Free" : w.priceType === "Paid")),
        h.sort( (w, v) => {
            switch (d) {
            case "date":
                return new Date(w.startDateTime).getTime() - new Date(v.startDateTime).getTime();
            case "recent":
                return new Date(v.lastUpdated).getTime() - new Date(w.lastUpdated).getTime();
            case "featured":
                return w.featured && !v.featured ? -1 : !w.featured && v.featured ? 1 : new Date(w.startDateTime).getTime() - new Date(v.startDateTime).getTime();
            default:
                return 0
            }
        }
        ),
        h
    }
    , [e, t, n, o, a, l, d])
      , g = p.useMemo( () => {
        let h = 0;
        return o.length > 0 && (h += o.length),
        a.length > 0 && (h += a.length),
        l !== "all" && (h += 1),
        h
    }
    , [o, a, l])
      , b = () => {
        i([]),
        s([]),
        u("all")
    }
    ;
    return c.jsx("section", {
        id: "calendario",
        className: "py-16",
        children: c.jsxs("div", {
            className: "container",
            children: [c.jsxs("div", {
                className: "flex items-center gap-3 mb-8",
                children: [c.jsx("div", {
                    className: "p-2 bg-primary/10 rounded-lg",
                    children: c.jsx(Zs, {
                        className: "text-primary",
                        size: 24
                    })
                }), c.jsxs("div", {
                    children: [c.jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold text-foreground",
                        children: "Tutti gli eventi"
                    }), c.jsxs("p", {
                        className: "text-muted-foreground mt-1",
                        children: [y.length, " eventi trovati"]
                    })]
                })]
            }), c.jsxs("div", {
                className: "flex gap-8",
                children: [c.jsx(fj, {
                    selectedCategories: o,
                    selectedAreas: a,
                    priceFilter: l,
                    onCategoryChange: i,
                    onAreaChange: s,
                    onPriceChange: u,
                    onReset: b,
                    activeFiltersCount: g
                }), c.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [c.jsx("div", {
                        className: "flex items-center justify-end mb-6 gap-4",
                        children: c.jsxs("div", {
                            className: "flex items-center gap-2 ml-auto",
                            children: [c.jsx("span", {
                                className: "text-sm text-muted-foreground hidden sm:block",
                                children: "Ordina per:"
                            }), c.jsxs("div", {
                                className: "flex gap-1",
                                children: [c.jsx(ve, {
                                    variant: d === "date" ? "filterActive" : "filter",
                                    size: "sm",
                                    onClick: () => f("date"),
                                    children: "Più imminenti"
                                }), c.jsx(ve, {
                                    variant: d === "featured" ? "filterActive" : "filter",
                                    size: "sm",
                                    onClick: () => f("featured"),
                                    children: "In evidenza"
                                }), c.jsx(ve, {
                                    variant: d === "recent" ? "filterActive" : "filter",
                                    size: "sm",
                                    onClick: () => f("recent"),
                                    className: "hidden sm:inline-flex",
                                    children: "Più recenti"
                                })]
                            })]
                        })
                    }), y.length > 0 ? c.jsx("div", {
                        className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                        children: y.map( (h, w) => c.jsx("div", {
                            className: "animate-fade-in",
                            style: {
                                animationDelay: `${w * 50}ms`
                            },
                            children: c.jsx(KT, {
                                event: h,
                                onDetailsClick: r
                            })
                        }, h.id))
                    }) : c.jsxs("div", {
                        className: "text-center py-16 px-4",
                        children: [c.jsx("div", {
                            className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4",
                            children: c.jsx(bS, {
                                className: "text-muted-foreground",
                                size: 32
                            })
                        }), c.jsx("h3", {
                            className: "text-lg font-semibold text-foreground mb-2",
                            children: "Nessun evento trovato"
                        }), c.jsx("p", {
                            className: "text-muted-foreground mb-6 max-w-md mx-auto",
                            children: "Prova a cambiare data o categoria, oppure amplia la ricerca."
                        }), c.jsx(ve, {
                            variant: "outline",
                            onClick: b,
                            children: "Reimposta filtri"
                        })]
                    })]
                })]
            })]
        })
    })
}
function mj() {
    const [e,t] = p.useState("")
      , [n,r] = p.useState(!1)
      , [o,i] = p.useState(!1)
      , [a,s] = p.useState(!1)
      , l = async u => {
        if (u.preventDefault(),
        !e.trim()) {
            nn({
                title: "Email richiesta",
                description: "Inserisci un indirizzo email valido.",
                variant: "destructive"
            });
            return
        }
        i(!0),
        await new Promise(d => setTimeout(d, 1e3)),
        i(!1),
        s(!0),
        nn({
            title: "Iscrizione completata!",
            description: "Riceverai gli eventi più interessanti ogni settimana."
        })
    }
    ;
    return c.jsx("section", {
        id: "newsletter",
        className: "py-16 bg-gradient-to-b from-background to-sea-light",
        children: c.jsx("div", {
            className: "container",
            children: c.jsxs("div", {
                className: "max-w-2xl mx-auto text-center",
                children: [c.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6",
                    children: c.jsx(Dv, {
                        className: "text-primary",
                        size: 28
                    })
                }), c.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-foreground mb-4",
                    children: "Ricevi gli eventi più interessanti ogni settimana"
                }), c.jsx("p", {
                    className: "text-muted-foreground mb-8",
                    children: "Una email a settimana. Niente spam."
                }), a ? c.jsxs("div", {
                    className: "max-w-md mx-auto bg-category-sport/10 rounded-xl p-6 text-center animate-fade-in",
                    children: [c.jsx("div", {
                        className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-category-sport/20 mb-4",
                        children: c.jsx(Js, {
                            className: "text-category-sport",
                            size: 24
                        })
                    }), c.jsx("h3", {
                        className: "font-semibold text-foreground mb-2",
                        children: "Grazie per l'iscrizione!"
                    }), c.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Controlla la tua casella email per confermare l'iscrizione."
                    })]
                }) : c.jsxs("form", {
                    onSubmit: l,
                    className: "max-w-md mx-auto space-y-4",
                    children: [c.jsxs("div", {
                        className: "flex gap-3",
                        children: [c.jsx(ht, {
                            type: "email",
                            placeholder: "La tua email",
                            value: e,
                            onChange: u => t(u.target.value),
                            className: "h-12",
                            disabled: o
                        }), c.jsx(ve, {
                            type: "submit",
                            size: "lg",
                            disabled: o,
                            children: o ? c.jsx(Mv, {
                                className: "animate-spin",
                                size: 18
                            }) : "Iscriviti"
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [c.jsx(Ln, {
                            id: "lastminute",
                            checked: n,
                            onCheckedChange: u => r(u === !0)
                        }), c.jsx(we, {
                            htmlFor: "lastminute",
                            className: "text-sm text-muted-foreground cursor-pointer",
                            children: "Anche aggiornamenti last-minute (Telegram/WhatsApp)"
                        })]
                    })]
                })]
            })
        })
    })
}
const B0 = p.forwardRef( ({className: e, ...t}, n) => c.jsx("textarea", {
    className: te("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
B0.displayName = "Textarea";
function km(e, [t,n]) {
    return Math.min(n, Math.max(t, e))
}
var hj = p.createContext(void 0);
function gj(e) {
    const t = p.useContext(hj);
    return e || t || "ltr"
}
var vj = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , yj = [" ", "Enter"]
  , zr = "Select"
  , [wl,bl,xj] = Jg(zr)
  , [Xo,dR] = Br(zr, [xj, ol])
  , Sl = ol()
  , [wj,ur] = Xo(zr)
  , [bj,Sj] = Xo(zr)
  , V0 = e => {
    const {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: a, defaultValue: s, onValueChange: l, dir: u, name: d, autoComplete: f, disabled: y, required: g, form: b} = e
      , h = Sl(t)
      , [w,v] = p.useState(null)
      , [m,x] = p.useState(null)
      , [S,C] = p.useState(!1)
      , k = gj(u)
      , [E,j] = Bi({
        prop: r,
        defaultProp: o ?? !1,
        onChange: i,
        caller: zr
    })
      , [M,D] = Bi({
        prop: a,
        defaultProp: s,
        onChange: l,
        caller: zr
    })
      , $ = p.useRef(null)
      , A = w ? b || !!w.closest("form") : !0
      , [B,_] = p.useState(new Set)
      , H = Array.from(B).map(F => F.props.value).join(";");
    return c.jsx(ik, {
        ...h,
        children: c.jsxs(wj, {
            required: g,
            scope: t,
            trigger: w,
            onTriggerChange: v,
            valueNode: m,
            onValueNodeChange: x,
            valueNodeHasChildren: S,
            onValueNodeHasChildrenChange: C,
            contentId: wo(),
            value: M,
            onValueChange: D,
            open: E,
            onOpenChange: j,
            dir: k,
            triggerPointerDownPosRef: $,
            disabled: y,
            children: [c.jsx(wl.Provider, {
                scope: t,
                children: c.jsx(bj, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: p.useCallback(F => {
                        _(U => new Set(U).add(F))
                    }
                    , []),
                    onNativeOptionRemove: p.useCallback(F => {
                        _(U => {
                            const N = new Set(U);
                            return N.delete(F),
                            N
                        }
                        )
                    }
                    , []),
                    children: n
                })
            }), A ? c.jsxs(mx, {
                "aria-hidden": !0,
                required: g,
                tabIndex: -1,
                name: d,
                autoComplete: f,
                value: M,
                onChange: F => D(F.target.value),
                disabled: y,
                form: b,
                children: [M === void 0 ? c.jsx("option", {
                    value: ""
                }) : null, Array.from(B)]
            }, H) : null]
        })
    })
}
;
V0.displayName = zr;
var H0 = "SelectTrigger"
  , Y0 = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, disabled: r=!1, ...o} = e
      , i = Sl(n)
      , a = ur(H0, n)
      , s = a.disabled || r
      , l = ue(t, a.onTriggerChange)
      , u = bl(n)
      , d = p.useRef("touch")
      , [f,y,g] = gx(h => {
        const w = u().filter(x => !x.disabled)
          , v = w.find(x => x.value === a.value)
          , m = vx(w, h, v);
        m !== void 0 && a.onValueChange(m.value)
    }
    )
      , b = h => {
        s || (a.onOpenChange(!0),
        g()),
        h && (a.triggerPointerDownPosRef.current = {
            x: Math.round(h.pageX),
            y: Math.round(h.pageY)
        })
    }
    ;
    return c.jsx(fy, {
        asChild: !0,
        ...i,
        children: c.jsx(Z.button, {
            type: "button",
            role: "combobox",
            "aria-controls": a.contentId,
            "aria-expanded": a.open,
            "aria-required": a.required,
            "aria-autocomplete": "none",
            dir: a.dir,
            "data-state": a.open ? "open" : "closed",
            disabled: s,
            "data-disabled": s ? "" : void 0,
            "data-placeholder": hx(a.value) ? "" : void 0,
            ...o,
            ref: l,
            onClick: K(o.onClick, h => {
                h.currentTarget.focus(),
                d.current !== "mouse" && b(h)
            }
            ),
            onPointerDown: K(o.onPointerDown, h => {
                d.current = h.pointerType;
                const w = h.target;
                w.hasPointerCapture(h.pointerId) && w.releasePointerCapture(h.pointerId),
                h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (b(h),
                h.preventDefault())
            }
            ),
            onKeyDown: K(o.onKeyDown, h => {
                const w = f.current !== "";
                !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && y(h.key),
                !(w && h.key === " ") && vj.includes(h.key) && (b(),
                h.preventDefault())
            }
            )
        })
    })
}
);
Y0.displayName = H0;
var Q0 = "SelectValue"
  , q0 = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, children: i, placeholder: a="", ...s} = e
      , l = ur(Q0, n)
      , {onValueNodeHasChildrenChange: u} = l
      , d = i !== void 0
      , f = ue(t, l.onValueNodeChange);
    return Le( () => {
        u(d)
    }
    , [u, d]),
    c.jsx(Z.span, {
        ...s,
        ref: f,
        style: {
            pointerEvents: "none"
        },
        children: hx(l.value) ? c.jsx(c.Fragment, {
            children: a
        }) : i
    })
}
);
q0.displayName = Q0;
var Cj = "SelectIcon"
  , K0 = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, children: r, ...o} = e;
    return c.jsx(Z.span, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        children: r || "▼"
    })
}
);
K0.displayName = Cj;
var Ej = "SelectPortal"
  , G0 = e => c.jsx(Ks, {
    asChild: !0,
    ...e
});
G0.displayName = Ej;
var Fr = "SelectContent"
  , X0 = p.forwardRef( (e, t) => {
    const n = ur(Fr, e.__scopeSelect)
      , [r,o] = p.useState();
    if (Le( () => {
        o(new DocumentFragment)
    }
    , []),
    !n.open) {
        const i = r;
        return i ? Ur.createPortal(c.jsx(Z0, {
            scope: e.__scopeSelect,
            children: c.jsx(wl.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", {
                    children: e.children
                })
            })
        }), i) : null
    }
    return c.jsx(J0, {
        ...e,
        ref: t
    })
}
);
X0.displayName = Fr;
var Pt = 10
  , [Z0,dr] = Xo(Fr)
  , kj = "SelectContentImpl"
  , Nj = Wo("SelectContent.RemoveScroll")
  , J0 = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: i, onPointerDownOutside: a, side: s, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: y, collisionPadding: g, sticky: b, hideWhenDetached: h, avoidCollisions: w, ...v} = e
      , m = ur(Fr, n)
      , [x,S] = p.useState(null)
      , [C,k] = p.useState(null)
      , E = ue(t, L => S(L))
      , [j,M] = p.useState(null)
      , [D,$] = p.useState(null)
      , A = bl(n)
      , [B,_] = p.useState(!1)
      , H = p.useRef(!1);
    p.useEffect( () => {
        if (x)
            return v0(x)
    }
    , [x]),
    l0();
    const F = p.useCallback(L => {
        const [ae,...ke] = A().map(re => re.ref.current)
          , [ie] = ke.slice(-1)
          , ee = document.activeElement;
        for (const re of L)
            if (re === ee || (re == null || re.scrollIntoView({
                block: "nearest"
            }),
            re === ae && C && (C.scrollTop = 0),
            re === ie && C && (C.scrollTop = C.scrollHeight),
            re == null || re.focus(),
            document.activeElement !== ee))
                return
    }
    , [A, C])
      , U = p.useCallback( () => F([j, x]), [F, j, x]);
    p.useEffect( () => {
        B && U()
    }
    , [B, U]);
    const {onOpenChange: N, triggerPointerDownPosRef: P} = m;
    p.useEffect( () => {
        if (x) {
            let L = {
                x: 0,
                y: 0
            };
            const ae = ie => {
                var ee, re;
                L = {
                    x: Math.abs(Math.round(ie.pageX) - (((ee = P.current) == null ? void 0 : ee.x) ?? 0)),
                    y: Math.abs(Math.round(ie.pageY) - (((re = P.current) == null ? void 0 : re.y) ?? 0))
                }
            }
              , ke = ie => {
                L.x <= 10 && L.y <= 10 ? ie.preventDefault() : x.contains(ie.target) || N(!1),
                document.removeEventListener("pointermove", ae),
                P.current = null
            }
            ;
            return P.current !== null && (document.addEventListener("pointermove", ae),
            document.addEventListener("pointerup", ke, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", ae),
                document.removeEventListener("pointerup", ke, {
                    capture: !0
                })
            }
        }
    }
    , [x, N, P]),
    p.useEffect( () => {
        const L = () => N(!1);
        return window.addEventListener("blur", L),
        window.addEventListener("resize", L),
        () => {
            window.removeEventListener("blur", L),
            window.removeEventListener("resize", L)
        }
    }
    , [N]);
    const [I,V] = gx(L => {
        const ae = A().filter(ee => !ee.disabled)
          , ke = ae.find(ee => ee.ref.current === document.activeElement)
          , ie = vx(ae, L, ke);
        ie && setTimeout( () => ie.ref.current.focus())
    }
    )
      , W = p.useCallback( (L, ae, ke) => {
        const ie = !H.current && !ke;
        (m.value !== void 0 && m.value === ae || ie) && (M(L),
        ie && (H.current = !0))
    }
    , [m.value])
      , G = p.useCallback( () => x == null ? void 0 : x.focus(), [x])
      , Y = p.useCallback( (L, ae, ke) => {
        const ie = !H.current && !ke;
        (m.value !== void 0 && m.value === ae || ie) && $(L)
    }
    , [m.value])
      , pe = r === "popper" ? Nu : ex
      , Ee = pe === Nu ? {
        side: s,
        sideOffset: l,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: y,
        collisionPadding: g,
        sticky: b,
        hideWhenDetached: h,
        avoidCollisions: w
    } : {};
    return c.jsx(Z0, {
        scope: n,
        content: x,
        viewport: C,
        onViewportChange: k,
        itemRefCallback: W,
        selectedItem: j,
        onItemLeave: G,
        itemTextRefCallback: Y,
        focusSelectedItem: U,
        selectedItemText: D,
        position: r,
        isPositioned: B,
        searchRef: I,
        children: c.jsx(ef, {
            as: Nj,
            allowPinchZoom: !0,
            children: c.jsx(Jd, {
                asChild: !0,
                trapped: m.open,
                onMountAutoFocus: L => {
                    L.preventDefault()
                }
                ,
                onUnmountAutoFocus: K(o, L => {
                    var ae;
                    (ae = m.trigger) == null || ae.focus({
                        preventScroll: !0
                    }),
                    L.preventDefault()
                }
                ),
                children: c.jsx(na, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    onFocusOutside: L => L.preventDefault(),
                    onDismiss: () => m.onOpenChange(!1),
                    children: c.jsx(pe, {
                        role: "listbox",
                        id: m.contentId,
                        "data-state": m.open ? "open" : "closed",
                        dir: m.dir,
                        onContextMenu: L => L.preventDefault(),
                        ...v,
                        ...Ee,
                        onPlaced: () => _(!0),
                        ref: E,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...v.style
                        },
                        onKeyDown: K(v.onKeyDown, L => {
                            const ae = L.ctrlKey || L.altKey || L.metaKey;
                            if (L.key === "Tab" && L.preventDefault(),
                            !ae && L.key.length === 1 && V(L.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
                                let ie = A().filter(ee => !ee.disabled).map(ee => ee.ref.current);
                                if (["ArrowUp", "End"].includes(L.key) && (ie = ie.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(L.key)) {
                                    const ee = L.target
                                      , re = ie.indexOf(ee);
                                    ie = ie.slice(re + 1)
                                }
                                setTimeout( () => F(ie)),
                                L.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
J0.displayName = kj;
var Tj = "SelectItemAlignedPosition"
  , ex = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, onPlaced: r, ...o} = e
      , i = ur(Fr, n)
      , a = dr(Fr, n)
      , [s,l] = p.useState(null)
      , [u,d] = p.useState(null)
      , f = ue(t, E => d(E))
      , y = bl(n)
      , g = p.useRef(!1)
      , b = p.useRef(!0)
      , {viewport: h, selectedItem: w, selectedItemText: v, focusSelectedItem: m} = a
      , x = p.useCallback( () => {
        if (i.trigger && i.valueNode && s && u && h && w && v) {
            const E = i.trigger.getBoundingClientRect()
              , j = u.getBoundingClientRect()
              , M = i.valueNode.getBoundingClientRect()
              , D = v.getBoundingClientRect();
            if (i.dir !== "rtl") {
                const ee = D.left - j.left
                  , re = M.left - ee
                  , ze = E.left - re
                  , pt = E.width + ze
                  , fr = Math.max(pt, j.width)
                  , Cn = window.innerWidth - Pt
                  , pr = km(re, [Pt, Math.max(Pt, Cn - fr)]);
                s.style.minWidth = pt + "px",
                s.style.left = pr + "px"
            } else {
                const ee = j.right - D.right
                  , re = window.innerWidth - M.right - ee
                  , ze = window.innerWidth - E.right - re
                  , pt = E.width + ze
                  , fr = Math.max(pt, j.width)
                  , Cn = window.innerWidth - Pt
                  , pr = km(re, [Pt, Math.max(Pt, Cn - fr)]);
                s.style.minWidth = pt + "px",
                s.style.right = pr + "px"
            }
            const $ = y()
              , A = window.innerHeight - Pt * 2
              , B = h.scrollHeight
              , _ = window.getComputedStyle(u)
              , H = parseInt(_.borderTopWidth, 10)
              , F = parseInt(_.paddingTop, 10)
              , U = parseInt(_.borderBottomWidth, 10)
              , N = parseInt(_.paddingBottom, 10)
              , P = H + F + B + N + U
              , I = Math.min(w.offsetHeight * 5, P)
              , V = window.getComputedStyle(h)
              , W = parseInt(V.paddingTop, 10)
              , G = parseInt(V.paddingBottom, 10)
              , Y = E.top + E.height / 2 - Pt
              , pe = A - Y
              , Ee = w.offsetHeight / 2
              , L = w.offsetTop + Ee
              , ae = H + F + L
              , ke = P - ae;
            if (ae <= Y) {
                const ee = $.length > 0 && w === $[$.length - 1].ref.current;
                s.style.bottom = "0px";
                const re = u.clientHeight - h.offsetTop - h.offsetHeight
                  , ze = Math.max(pe, Ee + (ee ? G : 0) + re + U)
                  , pt = ae + ze;
                s.style.height = pt + "px"
            } else {
                const ee = $.length > 0 && w === $[0].ref.current;
                s.style.top = "0px";
                const ze = Math.max(Y, H + h.offsetTop + (ee ? W : 0) + Ee) + ke;
                s.style.height = ze + "px",
                h.scrollTop = ae - Y + h.offsetTop
            }
            s.style.margin = `${Pt}px 0`,
            s.style.minHeight = I + "px",
            s.style.maxHeight = A + "px",
            r == null || r(),
            requestAnimationFrame( () => g.current = !0)
        }
    }
    , [y, i.trigger, i.valueNode, s, u, h, w, v, i.dir, r]);
    Le( () => x(), [x]);
    const [S,C] = p.useState();
    Le( () => {
        u && C(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const k = p.useCallback(E => {
        E && b.current === !0 && (x(),
        m == null || m(),
        b.current = !1)
    }
    , [x, m]);
    return c.jsx(jj, {
        scope: n,
        contentWrapper: s,
        shouldExpandOnScrollRef: g,
        onScrollButtonChange: k,
        children: c.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: S
            },
            children: c.jsx(Z.div, {
                ...o,
                ref: f,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style
                }
            })
        })
    })
}
);
ex.displayName = Tj;
var Pj = "SelectPopperPosition"
  , Nu = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, align: r="start", collisionPadding: o=Pt, ...i} = e
      , a = Sl(n);
    return c.jsx(py, {
        ...a,
        ...i,
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Nu.displayName = Pj;
var [jj,of] = Xo(Fr, {})
  , Tu = "SelectViewport"
  , tx = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, nonce: r, ...o} = e
      , i = dr(Tu, n)
      , a = of(Tu, n)
      , s = ue(t, i.onViewportChange)
      , l = p.useRef(0);
    return c.jsxs(c.Fragment, {
        children: [c.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), c.jsx(wl.Slot, {
            scope: n,
            children: c.jsx(Z.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: s,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: K(o.onScroll, u => {
                    const d = u.currentTarget
                      , {contentWrapper: f, shouldExpandOnScrollRef: y} = a;
                    if (y != null && y.current && f) {
                        const g = Math.abs(l.current - d.scrollTop);
                        if (g > 0) {
                            const b = window.innerHeight - Pt * 2
                              , h = parseFloat(f.style.minHeight)
                              , w = parseFloat(f.style.height)
                              , v = Math.max(h, w);
                            if (v < b) {
                                const m = v + g
                                  , x = Math.min(b, m)
                                  , S = m - x;
                                f.style.height = x + "px",
                                f.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0,
                                f.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = d.scrollTop
                }
                )
            })
        })]
    })
}
);
tx.displayName = Tu;
var nx = "SelectGroup"
  , [Rj,Mj] = Xo(nx)
  , Dj = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = wo();
    return c.jsx(Rj, {
        scope: n,
        id: o,
        children: c.jsx(Z.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
        })
    })
}
);
Dj.displayName = nx;
var rx = "SelectLabel"
  , ox = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Mj(rx, n);
    return c.jsx(Z.div, {
        id: o.id,
        ...r,
        ref: t
    })
}
);
ox.displayName = rx;
var Ds = "SelectItem"
  , [Oj,ix] = Xo(Ds)
  , ax = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, value: r, disabled: o=!1, textValue: i, ...a} = e
      , s = ur(Ds, n)
      , l = dr(Ds, n)
      , u = s.value === r
      , [d,f] = p.useState(i ?? "")
      , [y,g] = p.useState(!1)
      , b = ue(t, m => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, m, r, o)
    }
    )
      , h = wo()
      , w = p.useRef("touch")
      , v = () => {
        o || (s.onValueChange(r),
        s.onOpenChange(!1))
    }
    ;
    if (r === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return c.jsx(Oj, {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: u,
        onItemTextChange: p.useCallback(m => {
            f(x => x || ((m == null ? void 0 : m.textContent) ?? "").trim())
        }
        , []),
        children: c.jsx(wl.ItemSlot, {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: c.jsx(Z.div, {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": y ? "" : void 0,
                "aria-selected": u && y,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: b,
                onFocus: K(a.onFocus, () => g(!0)),
                onBlur: K(a.onBlur, () => g(!1)),
                onClick: K(a.onClick, () => {
                    w.current !== "mouse" && v()
                }
                ),
                onPointerUp: K(a.onPointerUp, () => {
                    w.current === "mouse" && v()
                }
                ),
                onPointerDown: K(a.onPointerDown, m => {
                    w.current = m.pointerType
                }
                ),
                onPointerMove: K(a.onPointerMove, m => {
                    var x;
                    w.current = m.pointerType,
                    o ? (x = l.onItemLeave) == null || x.call(l) : w.current === "mouse" && m.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: K(a.onPointerLeave, m => {
                    var x;
                    m.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l))
                }
                ),
                onKeyDown: K(a.onKeyDown, m => {
                    var S;
                    ((S = l.searchRef) == null ? void 0 : S.current) !== "" && m.key === " " || (yj.includes(m.key) && v(),
                    m.key === " " && m.preventDefault())
                }
                )
            })
        })
    })
}
);
ax.displayName = Ds;
var hi = "SelectItemText"
  , sx = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, className: r, style: o, ...i} = e
      , a = ur(hi, n)
      , s = dr(hi, n)
      , l = ix(hi, n)
      , u = Sj(hi, n)
      , [d,f] = p.useState(null)
      , y = ue(t, v => f(v), l.onItemTextChange, v => {
        var m;
        return (m = s.itemTextRefCallback) == null ? void 0 : m.call(s, v, l.value, l.disabled)
    }
    )
      , g = d == null ? void 0 : d.textContent
      , b = p.useMemo( () => c.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: g
    }, l.value), [l.disabled, l.value, g])
      , {onNativeOptionAdd: h, onNativeOptionRemove: w} = u;
    return Le( () => (h(b),
    () => w(b)), [h, w, b]),
    c.jsxs(c.Fragment, {
        children: [c.jsx(Z.span, {
            id: l.textId,
            ...i,
            ref: y
        }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ur.createPortal(i.children, a.valueNode) : null]
    })
}
);
sx.displayName = hi;
var lx = "SelectItemIndicator"
  , cx = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return ix(lx, n).isSelected ? c.jsx(Z.span, {
        "aria-hidden": !0,
        ...r,
        ref: t
    }) : null
}
);
cx.displayName = lx;
var Pu = "SelectScrollUpButton"
  , ux = p.forwardRef( (e, t) => {
    const n = dr(Pu, e.__scopeSelect)
      , r = of(Pu, e.__scopeSelect)
      , [o,i] = p.useState(!1)
      , a = ue(t, r.onScrollButtonChange);
    return Le( () => {
        if (n.viewport && n.isPositioned) {
            let s = function() {
                const u = l.scrollTop > 0;
                i(u)
            };
            const l = n.viewport;
            return s(),
            l.addEventListener("scroll", s),
            () => l.removeEventListener("scroll", s)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? c.jsx(fx, {
        ...e,
        ref: a,
        onAutoScroll: () => {
            const {viewport: s, selectedItem: l} = n;
            s && l && (s.scrollTop = s.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
ux.displayName = Pu;
var ju = "SelectScrollDownButton"
  , dx = p.forwardRef( (e, t) => {
    const n = dr(ju, e.__scopeSelect)
      , r = of(ju, e.__scopeSelect)
      , [o,i] = p.useState(!1)
      , a = ue(t, r.onScrollButtonChange);
    return Le( () => {
        if (n.viewport && n.isPositioned) {
            let s = function() {
                const u = l.scrollHeight - l.clientHeight
                  , d = Math.ceil(l.scrollTop) < u;
                i(d)
            };
            const l = n.viewport;
            return s(),
            l.addEventListener("scroll", s),
            () => l.removeEventListener("scroll", s)
        }
    }
    , [n.viewport, n.isPositioned]),
    o ? c.jsx(fx, {
        ...e,
        ref: a,
        onAutoScroll: () => {
            const {viewport: s, selectedItem: l} = n;
            s && l && (s.scrollTop = s.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
dx.displayName = ju;
var fx = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, onAutoScroll: r, ...o} = e
      , i = dr("SelectScrollButton", n)
      , a = p.useRef(null)
      , s = bl(n)
      , l = p.useCallback( () => {
        a.current !== null && (window.clearInterval(a.current),
        a.current = null)
    }
    , []);
    return p.useEffect( () => () => l(), [l]),
    Le( () => {
        var d;
        const u = s().find(f => f.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({
            block: "nearest"
        })
    }
    , [s]),
    c.jsx(Z.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: {
            flexShrink: 0,
            ...o.style
        },
        onPointerDown: K(o.onPointerDown, () => {
            a.current === null && (a.current = window.setInterval(r, 50))
        }
        ),
        onPointerMove: K(o.onPointerMove, () => {
            var u;
            (u = i.onItemLeave) == null || u.call(i),
            a.current === null && (a.current = window.setInterval(r, 50))
        }
        ),
        onPointerLeave: K(o.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , _j = "SelectSeparator"
  , px = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e;
    return c.jsx(Z.div, {
        "aria-hidden": !0,
        ...r,
        ref: t
    })
}
);
px.displayName = _j;
var Ru = "SelectArrow"
  , Aj = p.forwardRef( (e, t) => {
    const {__scopeSelect: n, ...r} = e
      , o = Sl(n)
      , i = ur(Ru, n)
      , a = dr(Ru, n);
    return i.open && a.position === "popper" ? c.jsx(my, {
        ...o,
        ...r,
        ref: t
    }) : null
}
);
Aj.displayName = Ru;
var Ij = "SelectBubbleInput"
  , mx = p.forwardRef( ({__scopeSelect: e, value: t, ...n}, r) => {
    const o = p.useRef(null)
      , i = ue(r, o)
      , a = Ky(t);
    return p.useEffect( () => {
        const s = o.current;
        if (!s)
            return;
        const l = window.HTMLSelectElement.prototype
          , d = Object.getOwnPropertyDescriptor(l, "value").set;
        if (a !== t && d) {
            const f = new Event("change",{
                bubbles: !0
            });
            d.call(s, t),
            s.dispatchEvent(f)
        }
    }
    , [a, t]),
    c.jsx(Z.select, {
        ...n,
        style: {
            ...ov,
            ...n.style
        },
        ref: i,
        defaultValue: t
    })
}
);
mx.displayName = Ij;
function hx(e) {
    return e === "" || e === void 0
}
function gx(e) {
    const t = zt(e)
      , n = p.useRef("")
      , r = p.useRef(0)
      , o = p.useCallback(a => {
        const s = n.current + a;
        t(s),
        function l(u) {
            n.current = u,
            window.clearTimeout(r.current),
            u !== "" && (r.current = window.setTimeout( () => l(""), 1e3))
        }(s)
    }
    , [t])
      , i = p.useCallback( () => {
        n.current = "",
        window.clearTimeout(r.current)
    }
    , []);
    return p.useEffect( () => () => window.clearTimeout(r.current), []),
    [n, o, i]
}
function vx(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , i = n ? e.indexOf(n) : -1;
    let a = Lj(e, Math.max(i, 0));
    o.length === 1 && (a = a.filter(u => u !== n));
    const l = a.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0
}
function Lj(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var zj = V0
  , yx = Y0
  , Fj = q0
  , $j = K0
  , Wj = G0
  , xx = X0
  , Uj = tx
  , wx = ox
  , bx = ax
  , Bj = sx
  , Vj = cx
  , Sx = ux
  , Cx = dx
  , Ex = px;
const Nm = zj
  , Tm = Fj
  , Mu = p.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(yx, {
    ref: r,
    className: te("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, c.jsx($j, {
        asChild: !0,
        children: c.jsx(Pv, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
Mu.displayName = yx.displayName;
const kx = p.forwardRef( ({className: e, ...t}, n) => c.jsx(Sx, {
    ref: n,
    className: te("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(mS, {
        className: "h-4 w-4"
    })
}));
kx.displayName = Sx.displayName;
const Nx = p.forwardRef( ({className: e, ...t}, n) => c.jsx(Cx, {
    ref: n,
    className: te("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Pv, {
        className: "h-4 w-4"
    })
}));
Nx.displayName = Cx.displayName;
const Du = p.forwardRef( ({className: e, children: t, position: n="popper", ...r}, o) => c.jsx(Wj, {
    children: c.jsxs(xx, {
        ref: o,
        className: te("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: n,
        ...r,
        children: [c.jsx(kx, {}), c.jsx(Uj, {
            className: te("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), c.jsx(Nx, {})]
    })
}));
Du.displayName = xx.displayName;
const Hj = p.forwardRef( ({className: e, ...t}, n) => c.jsx(wx, {
    ref: n,
    className: te("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
Hj.displayName = wx.displayName;
const Ou = p.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(bx, {
    ref: r,
    className: te("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", e),
    ...n,
    children: [c.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(Vj, {
            children: c.jsx(Js, {
                className: "h-4 w-4"
            })
        })
    }), c.jsx(Bj, {
        children: t
    })]
}));
Ou.displayName = bx.displayName;
const Yj = p.forwardRef( ({className: e, ...t}, n) => c.jsx(Ex, {
    ref: n,
    className: te("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
Yj.displayName = Ex.displayName;
function Qj() {
    const [e,t] = p.useState(!1)
      , [n,r] = p.useState(!1)
      , [o,i] = p.useState(!1)
      , [a,s] = p.useState({
        title: "",
        category: "",
        date: "",
        startTime: "",
        endTime: "",
        area: "",
        venue: "",
        description: "",
        priceType: "free",
        bookingUrl: "",
        organizer: "",
        contactEmail: "",
        sourceUrl: ""
    })
      , l = async d => {
        if (d.preventDefault(),
        !a.title || !a.category || !a.date || !a.area || !a.venue || !a.description) {
            nn({
                title: "Campi obbligatori mancanti",
                description: "Compila tutti i campi contrassegnati con *",
                variant: "destructive"
            });
            return
        }
        if (!o) {
            nn({
                title: "Conferma richiesta",
                description: "Conferma che le informazioni sono corrette.",
                variant: "destructive"
            });
            return
        }
        t(!0),
        await new Promise(f => setTimeout(f, 1500)),
        t(!1),
        r(!0),
        nn({
            title: "Evento inviato!",
            description: "L'evento sarà revisionato prima della pubblicazione."
        })
    }
      , u = (d, f) => {
        s(y => ({
            ...y,
            [d]: f
        }))
    }
    ;
    return n ? c.jsx("section", {
        id: "segnala",
        className: "py-16",
        children: c.jsx("div", {
            className: "container",
            children: c.jsxs("div", {
                className: "max-w-2xl mx-auto bg-category-sport/10 rounded-xl p-8 text-center animate-fade-in",
                children: [c.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-category-sport/20 mb-6",
                    children: c.jsx(Js, {
                        className: "text-category-sport",
                        size: 32
                    })
                }), c.jsx("h3", {
                    className: "text-xl font-semibold text-foreground mb-3",
                    children: "Grazie per la segnalazione!"
                }), c.jsx("p", {
                    className: "text-muted-foreground mb-6",
                    children: "L'evento sarà revisionato prima della pubblicazione. Ti contatteremo se servissero ulteriori informazioni."
                }), c.jsx(ve, {
                    variant: "outline",
                    onClick: () => r(!1),
                    children: "Segnala un altro evento"
                })]
            })
        })
    }) : c.jsx("section", {
        id: "segnala",
        className: "py-16 bg-sand-light",
        children: c.jsx("div", {
            className: "container",
            children: c.jsxs("div", {
                className: "max-w-2xl mx-auto",
                children: [c.jsxs("div", {
                    className: "text-center mb-10",
                    children: [c.jsx("div", {
                        className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6",
                        children: c.jsx(jp, {
                            className: "text-accent",
                            size: 28
                        })
                    }), c.jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold text-foreground mb-4",
                        children: "Segnala un evento"
                    }), c.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Aiutaci a tenere aggiornato il calendario. Ogni evento viene revisionato prima della pubblicazione."
                    })]
                }), c.jsxs("form", {
                    onSubmit: l,
                    className: "bg-card rounded-xl border border-border p-6 md:p-8 space-y-6",
                    children: [c.jsxs("div", {
                        children: [c.jsx(we, {
                            htmlFor: "title",
                            className: "text-foreground",
                            children: "Titolo evento *"
                        }), c.jsx(ht, {
                            id: "title",
                            placeholder: "Es: Concerto Jazz al Tramonto",
                            value: a.title,
                            onChange: d => u("title", d.target.value),
                            className: "mt-2"
                        })]
                    }), c.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "category",
                                className: "text-foreground",
                                children: "Categoria *"
                            }), c.jsxs(Nm, {
                                value: a.category,
                                onValueChange: d => u("category", d),
                                children: [c.jsx(Mu, {
                                    className: "mt-2",
                                    children: c.jsx(Tm, {
                                        placeholder: "Seleziona categoria"
                                    })
                                }), c.jsx(Du, {
                                    children: W0.map(d => c.jsx(Ou, {
                                        value: d,
                                        children: d
                                    }, d))
                                })]
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "area",
                                className: "text-foreground",
                                children: "Località *"
                            }), c.jsxs(Nm, {
                                value: a.area,
                                onValueChange: d => u("area", d),
                                children: [c.jsx(Mu, {
                                    className: "mt-2",
                                    children: c.jsx(Tm, {
                                        placeholder: "Seleziona località"
                                    })
                                }), c.jsx(Du, {
                                    children: U0.map(d => c.jsx(Ou, {
                                        value: d,
                                        children: d
                                    }, d))
                                })]
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                        children: [c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "date",
                                className: "text-foreground",
                                children: "Data *"
                            }), c.jsx(ht, {
                                id: "date",
                                type: "date",
                                value: a.date,
                                onChange: d => u("date", d.target.value),
                                className: "mt-2"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "startTime",
                                className: "text-foreground",
                                children: "Ora inizio"
                            }), c.jsx(ht, {
                                id: "startTime",
                                type: "time",
                                value: a.startTime,
                                onChange: d => u("startTime", d.target.value),
                                className: "mt-2"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "endTime",
                                className: "text-foreground",
                                children: "Ora fine"
                            }), c.jsx(ht, {
                                id: "endTime",
                                type: "time",
                                value: a.endTime,
                                onChange: d => u("endTime", d.target.value),
                                className: "mt-2"
                            })]
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx(we, {
                            htmlFor: "venue",
                            className: "text-foreground",
                            children: "Luogo / Venue *"
                        }), c.jsx(ht, {
                            id: "venue",
                            placeholder: "Es: Giardini di Augusto",
                            value: a.venue,
                            onChange: d => u("venue", d.target.value),
                            className: "mt-2"
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx(we, {
                            htmlFor: "description",
                            className: "text-foreground",
                            children: "Descrizione *"
                        }), c.jsx(B0, {
                            id: "description",
                            placeholder: "Descrivi l'evento in dettaglio...",
                            value: a.description,
                            onChange: d => u("description", d.target.value),
                            className: "mt-2 min-h-[120px]"
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx(we, {
                            className: "text-foreground",
                            children: "Ingresso"
                        }), c.jsxs("div", {
                            className: "flex gap-4 mt-2",
                            children: [c.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [c.jsx("input", {
                                    type: "radio",
                                    id: "free",
                                    name: "priceType",
                                    value: "free",
                                    checked: a.priceType === "free",
                                    onChange: () => u("priceType", "free"),
                                    className: "accent-primary"
                                }), c.jsx(we, {
                                    htmlFor: "free",
                                    className: "text-muted-foreground cursor-pointer",
                                    children: "Gratuito"
                                })]
                            }), c.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [c.jsx("input", {
                                    type: "radio",
                                    id: "paid",
                                    name: "priceType",
                                    value: "paid",
                                    checked: a.priceType === "paid",
                                    onChange: () => u("priceType", "paid"),
                                    className: "accent-primary"
                                }), c.jsx(we, {
                                    htmlFor: "paid",
                                    className: "text-muted-foreground cursor-pointer",
                                    children: "A pagamento"
                                })]
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "bookingUrl",
                                className: "text-foreground",
                                children: "Link prenotazione"
                            }), c.jsx(ht, {
                                id: "bookingUrl",
                                type: "url",
                                placeholder: "https://...",
                                value: a.bookingUrl,
                                onChange: d => u("bookingUrl", d.target.value),
                                className: "mt-2"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "sourceUrl",
                                className: "text-foreground",
                                children: "Link fonte"
                            }), c.jsx(ht, {
                                id: "sourceUrl",
                                type: "url",
                                placeholder: "Link Instagram, sito, PDF...",
                                value: a.sourceUrl,
                                onChange: d => u("sourceUrl", d.target.value),
                                className: "mt-2"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "organizer",
                                className: "text-foreground",
                                children: "Organizzatore"
                            }), c.jsx(ht, {
                                id: "organizer",
                                placeholder: "Nome organizzatore",
                                value: a.organizer,
                                onChange: d => u("organizer", d.target.value),
                                className: "mt-2"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx(we, {
                                htmlFor: "contactEmail",
                                className: "text-foreground",
                                children: "Email di contatto"
                            }), c.jsx(ht, {
                                id: "contactEmail",
                                type: "email",
                                placeholder: "email@example.com",
                                value: a.contactEmail,
                                onChange: d => u("contactEmail", d.target.value),
                                className: "mt-2"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-start gap-3 p-4 bg-secondary rounded-lg",
                        children: [c.jsx(Ln, {
                            id: "confirmed",
                            checked: o,
                            onCheckedChange: d => i(d === !0)
                        }), c.jsx(we, {
                            htmlFor: "confirmed",
                            className: "text-sm text-muted-foreground cursor-pointer leading-relaxed",
                            children: "Confermo che le informazioni fornite sono corrette e che ho il diritto di segnalare questo evento."
                        })]
                    }), c.jsx(ve, {
                        type: "submit",
                        size: "lg",
                        className: "w-full",
                        disabled: e,
                        children: e ? c.jsxs(c.Fragment, {
                            children: [c.jsx(Mv, {
                                className: "animate-spin",
                                size: 18
                            }), "Invio in corso..."]
                        }) : c.jsxs(c.Fragment, {
                            children: [c.jsx(jp, {
                                size: 18
                            }), "Invia segnalazione"]
                        })
                    })]
                })]
            })
        })
    })
}
function qj() {
    return c.jsx("footer", {
        className: "bg-foreground text-background py-12",
        children: c.jsxs("div", {
            className: "container",
            children: [c.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 items-start",
                children: [c.jsxs("div", {
                    children: [c.jsxs("h3", {
                        className: "font-semibold text-lg mb-3",
                        children: [c.jsx("span", {
                            className: "text-primary-foreground opacity-80",
                            children: "Agenda"
                        }), "Capri", c.jsx("span", {
                            className: "text-primary-foreground/50",
                            children: ".it"
                        })]
                    }), c.jsx("p", {
                        className: "text-sm text-primary-foreground/70 leading-relaxed",
                        children: "Un progetto indipendente nato per rendere più semplice scoprire cosa succede sull'isola."
                    })]
                }), c.jsxs("div", {
                    className: "md:text-center",
                    children: [c.jsx("h4", {
                        className: "font-medium text-sm text-primary-foreground/50 uppercase tracking-wider mb-3",
                        children: "Link utili"
                    }), c.jsxs("ul", {
                        className: "space-y-2",
                        children: [c.jsx("li", {
                            children: c.jsx("a", {
                                href: "#newsletter",
                                className: "text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors",
                                children: "Iscriviti alla newsletter"
                            })
                        }), c.jsx("li", {
                            children: c.jsx("a", {
                                href: "#segnala",
                                className: "text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors",
                                children: "Segnala un evento"
                            })
                        }), c.jsx("li", {
                            children: c.jsx("a", {
                                href: "mailto:info@agendacapri.it",
                                className: "text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors",
                                children: "Contatti"
                            })
                        }), c.jsx("li", {
                            children: c.jsx("a", {
                                href: "#",
                                className: "text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors",
                                children: "Privacy"
                            })
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "md:text-right",
                    children: [c.jsx("h4", {
                        className: "font-medium text-sm text-primary-foreground/50 uppercase tracking-wider mb-3",
                        children: "Seguici"
                    }), c.jsxs("div", {
                        className: "flex gap-4 md:justify-end",
                        children: [c.jsx("a", {
                            href: "https://instagram.com/agenda.capri",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors",
                            "aria-label": "Instagram",
                            children: c.jsx(yS, {
                                size: 20,
                                className: "text-primary-foreground/80"
                            })
                        }), c.jsx("a", {
                            href: "#",
                            className: "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors",
                            "aria-label": "Facebook",
                            children: c.jsx(gS, {
                                size: 20,
                                className: "text-primary-foreground/80"
                            })
                        }), c.jsx("a", {
                            href: "mailto:info@agendacapri.it",
                            className: "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors",
                            "aria-label": "Email",
                            children: c.jsx(Dv, {
                                size: 20,
                                className: "text-primary-foreground/80"
                            })
                        })]
                    })]
                })]
            }), c.jsx("div", {
                className: "mt-10 pt-6 border-t border-primary-foreground/10 text-center",
                children: c.jsxs("p", {
                    className: "text-xs text-primary-foreground/50",
                    children: ["© ", new Date().getFullYear(), " AgendaCapri.it. Tutti i diritti riservati."]
                })
            })]
        })
    })
}
const Kj = _0
  , Gj = A0
  , Tx = p.forwardRef( ({className: e, ...t}, n) => c.jsx(gl, {
    ref: n,
    className: te("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Tx.displayName = gl.displayName;
const Px = p.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(Gj, {
    children: [c.jsx(Tx, {}), c.jsxs(vl, {
        ref: r,
        className: te("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, c.jsxs(I0, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [c.jsx(el, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Px.displayName = vl.displayName;
const jx = ({className: e, ...t}) => c.jsx("div", {
    className: te("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
jx.displayName = "DialogHeader";
const Rx = p.forwardRef( ({className: e, ...t}, n) => c.jsx(yl, {
    ref: n,
    className: te("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
Rx.displayName = yl.displayName;
const Xj = p.forwardRef( ({className: e, ...t}, n) => c.jsx(xl, {
    ref: n,
    className: te("text-sm text-muted-foreground", e),
    ...t
}));
Xj.displayName = xl.displayName;
function Zj({event: e, isOpen: t, onClose: n}) {
    if (!e)
        return null;
    const r = async () => {
        const a = `${window.location.origin}#event-${e.id}`;
        if (navigator.share)
            try {
                await navigator.share({
                    title: e.title,
                    text: e.description,
                    url: a
                })
            } catch {}
        else
            await navigator.clipboard.writeText(a),
            nn({
                title: "Link copiato!",
                description: "Il link all'evento è stato copiato negli appunti."
            })
    }
      , o = () => {
        qy({
            title: e.title,
            description: e.description,
            startDateTime: e.startDateTime,
            endDateTime: e.endDateTime,
            venue: e.venue,
            area: e.area
        }),
        nn({
            title: "File calendario scaricato",
            description: "Apri il file .ics per aggiungere l'evento al tuo calendario."
        })
    }
      , i = () => {
        n(),
        setTimeout( () => {
            const a = document.querySelector("#segnala");
            a && a.scrollIntoView({
                behavior: "smooth"
            })
        }
        , 300)
    }
    ;
    return c.jsx(Kj, {
        open: t,
        onOpenChange: n,
        children: c.jsxs(Px, {
            className: "max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [c.jsxs(jx, {
                children: [c.jsxs("div", {
                    className: "flex items-start gap-3 mb-2",
                    children: [c.jsx(Yd, {
                        category: e.category
                    }), e.featured && c.jsx(Kt, {
                        variant: "outline",
                        children: "In evidenza"
                    }), e.status === "Tentative" && c.jsxs(Kt, {
                        variant: "outline",
                        className: "text-accent",
                        children: [c.jsx(ES, {
                            size: 12,
                            className: "mr-1"
                        }), "Da confermare"]
                    })]
                }), c.jsx(Rx, {
                    className: "text-2xl font-bold text-foreground pr-8",
                    children: e.title
                })]
            }), c.jsxs("div", {
                className: "space-y-6 mt-4",
                children: [c.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [c.jsxs("div", {
                        className: "flex items-start gap-3 p-4 bg-secondary rounded-lg",
                        children: [c.jsx(Zs, {
                            className: "text-primary mt-0.5",
                            size: 20
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Data e ora"
                            }), c.jsx("p", {
                                className: "font-medium text-foreground capitalize",
                                children: UT(e.startDateTime, e.endDateTime)
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-start gap-3 p-4 bg-secondary rounded-lg",
                        children: [c.jsx(Ss, {
                            className: "text-primary mt-0.5",
                            size: 20
                        }), c.jsxs("div", {
                            children: [c.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Luogo"
                            }), c.jsx("p", {
                                className: "font-medium text-foreground",
                                children: e.venue
                            }), c.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: e.area
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [c.jsx(Kt, {
                        variant: e.priceType === "Free" ? "free" : "paid",
                        children: e.priceType === "Free" ? "Ingresso gratuito" : "A pagamento"
                    }), e.bookingRequired && c.jsxs(Kt, {
                        variant: "outline",
                        children: [c.jsx(jv, {
                            size: 12,
                            className: "mr-1"
                        }), "Prenotazione richiesta"]
                    }), c.jsx(Kt, {
                        variant: "secondary",
                        children: e.area
                    })]
                }), c.jsx(Eo, {}), c.jsxs("div", {
                    children: [c.jsx("h4", {
                        className: "font-semibold text-foreground mb-3",
                        children: "Descrizione"
                    }), c.jsx("p", {
                        className: "text-muted-foreground leading-relaxed whitespace-pre-wrap",
                        children: e.description
                    })]
                }), c.jsx("div", {
                    className: "rounded-lg overflow-hidden border border-border",
                    children: c.jsx("div", {
                        className: "h-40 bg-muted flex items-center justify-center",
                        children: c.jsxs("div", {
                            className: "text-center text-muted-foreground",
                            children: [c.jsx(Ss, {
                                size: 32,
                                className: "mx-auto mb-2 opacity-50"
                            }), c.jsxs("p", {
                                className: "text-sm",
                                children: [e.venue, ", ", e.area]
                            })]
                        })
                    })
                }), (e.sourceName || e.lastUpdated) && c.jsxs("div", {
                    className: "flex items-start gap-3 p-4 bg-muted/50 rounded-lg text-sm",
                    children: [c.jsx(vS, {
                        size: 16,
                        className: "text-muted-foreground mt-0.5"
                    }), c.jsxs("div", {
                        className: "space-y-1",
                        children: [e.sourceName && c.jsxs("p", {
                            className: "text-muted-foreground",
                            children: ["Fonte: ", c.jsx("span", {
                                className: "text-foreground",
                                children: e.sourceName
                            })]
                        }), c.jsxs("p", {
                            className: "text-muted-foreground",
                            children: ["Ultimo aggiornamento: ", er(Wt(e.lastUpdated), "d MMMM yyyy 'alle' HH:mm", {
                                locale: tr
                            })]
                        })]
                    })]
                }), c.jsx(Eo, {}), c.jsxs("div", {
                    className: "flex flex-wrap gap-3",
                    children: [e.officialUrl && c.jsx(ve, {
                        asChild: !0,
                        children: c.jsxs("a", {
                            href: e.officialUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [c.jsx(Rv, {
                                size: 16
                            }), "Sito ufficiale"]
                        })
                    }), c.jsxs(ve, {
                        variant: "outline",
                        onClick: o,
                        children: [c.jsx(Tv, {
                            size: 16
                        }), "Aggiungi al calendario"]
                    }), c.jsxs(ve, {
                        variant: "outline",
                        onClick: r,
                        children: [c.jsx(Ov, {
                            size: 16
                        }), "Condividi"]
                    })]
                }), c.jsx("button", {
                    onClick: i,
                    className: "text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2",
                    children: "Segnala una modifica a questo evento"
                })]
            })]
        })
    })
}
const Jj = () => {
    const [e,t] = p.useState("")
      , [n,r] = p.useState("")
      , [o,i] = p.useState(null)
      , [a,s] = p.useState(!1)
      , l = p.useMemo( () => Em.filter(f => f.featured && f.status !== "Cancelled" && Qy(f.startDateTime)).sort( (f, y) => new Date(f.startDateTime).getTime() - new Date(y.startDateTime).getTime()).slice(0, 6), [])
      , u = f => {
        i(f),
        s(!0)
    }
      , d = () => {
        s(!1),
        i(null)
    }
    ;
    return c.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [c.jsx(L2, {}), c.jsxs("main", {
            children: [c.jsx(F2, {
                searchQuery: e,
                onSearchChange: t,
                onDateFilter: r,
                activeDateFilter: n
            }), c.jsx(qT, {
                events: l,
                onEventClick: u
            }), c.jsx(pj, {
                events: Em.filter(f => f.status !== "Cancelled"),
                searchQuery: e,
                dateFilter: n,
                onEventClick: u
            }), c.jsx(mj, {}), c.jsx(Qj, {})]
        }), c.jsx(qj, {}), c.jsx(Zj, {
            event: o,
            isOpen: a,
            onClose: d
        })]
    })
}
  , eR = () => {
    const e = zy();
    return p.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), c.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), c.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , tR = new Qk
  , nR = () => c.jsx(Kk, {
    client: tR,
    children: c.jsxs(Ck, {
        children: [c.jsx(aC, {}), c.jsx(zC, {}), c.jsx(_2, {
            children: c.jsxs(M2, {
                children: [c.jsx(wu, {
                    path: "/",
                    element: c.jsx(Jj, {})
                }), c.jsx(wu, {
                    path: "*",
                    element: c.jsx(eR, {})
                })]
            })
        })]
    })
});
Gg(document.getElementById("root")).render(c.jsx(nR, {}));

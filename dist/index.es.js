import './style.css';
import Ue, { useState as _e, useEffect as Ve, useRef as X, useMemo as br } from "react";
import { createPortal as mr } from "react-dom";
var Ee = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function yr() {
  if (Ie) return Z;
  Ie = 1;
  var v = Ue, m = Symbol.for("react.element"), P = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, x = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(O, f, R) {
    var h, _ = {}, T = null, D = null;
    R !== void 0 && (T = "" + R), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (D = f.ref);
    for (h in f) y.call(f, h) && !I.hasOwnProperty(h) && (_[h] = f[h]);
    if (O && O.defaultProps) for (h in f = O.defaultProps, f) _[h] === void 0 && (_[h] = f[h]);
    return { $$typeof: m, type: O, key: T, ref: D, props: _, _owner: x.current };
  }
  return Z.Fragment = P, Z.jsx = k, Z.jsxs = k, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function _r() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Ue, m = Symbol.for("react.element"), P = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), O = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), B = Symbol.iterator, re = "@@iterator";
    function te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[re];
      return typeof r == "function" ? r : null;
    }
    var w = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ne("error", e, t);
      }
    }
    function ne(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var M = !1, F = !1, S = !1, J = !1, ae = !1, L;
    L = Symbol.for("react.module.reference");
    function q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === I || ae || e === x || e === R || e === h || J || e === D || M || F || S || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === k || e.$$typeof === O || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function K(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function j(e) {
      return e.displayName || "Context";
    }
    function p(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case P:
          return "Portal";
        case I:
          return "Profiler";
        case x:
          return "StrictMode";
        case R:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return j(r) + ".Consumer";
          case k:
            var t = e;
            return j(t._context) + ".Provider";
          case f:
            return K(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : p(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return p(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, N, oe, s, $, U, ie, Re;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function ze() {
      {
        if (A === 0) {
          N = console.log, oe = console.info, s = console.warn, $ = console.error, U = console.group, ie = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Be() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: N
            }),
            info: C({}, e, {
              value: oe
            }),
            warn: C({}, e, {
              value: s
            }),
            error: C({}, e, {
              value: $
            }),
            group: C({}, e, {
              value: U
            }),
            groupCollapsed: C({}, e, {
              value: ie
            }),
            groupEnd: C({}, e, {
              value: Re
            })
          });
        }
        A < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = w.ReactCurrentDispatcher, de;
    function ue(e, r, t) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            de = n && n[1] || "";
          }
        return `
` + de + e;
      }
    }
    var ve = !1, se;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Je();
    }
    function we(e, r) {
      if (!e || ve)
        return "";
      {
        var t = se.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ve = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = fe.current, fe.current = null, ze();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), g = n.stack.split(`
`), c = a.length - 1, l = g.length - 1; c >= 1 && l >= 0 && a[c] !== g[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (a[c] !== g[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || a[c] !== g[l]) {
                    var E = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, E), E;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        ve = !1, fe.current = u, Be(), Error.prepareStackTrace = i;
      }
      var z = e ? e.displayName || e.name : "", Y = z ? ue(z) : "";
      return typeof e == "function" && se.set(e, Y), Y;
    }
    function qe(e, r, t) {
      return we(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ce(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, Ke(e));
      if (typeof e == "string")
        return ue(e);
      switch (e) {
        case R:
          return ue("Suspense");
        case h:
          return ue("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return qe(e.render);
          case _:
            return ce(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return ce(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, Ce = {}, Oe = w.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, t = ce(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, i) {
      {
        var u = Function.call.bind(G);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (le(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), le(null)), a instanceof Error && !(a.message in Ce) && (Ce[a.message] = !0, le(i), d("Failed %s type: %s", t, a.message), le(null));
          }
      }
    }
    var He = Array.isArray;
    function he(e) {
      return He(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function Se(e) {
      if (Ze(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Pe(e);
    }
    var H = w.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, xe, pe;
    pe = {};
    function er(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && H.current && r && H.current.stateNode !== r) {
        var t = p(H.current.type);
        pe[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(H.current.type), e.ref), pe[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          je || (je = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          xe || (xe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ir(e, r, t, n, i) {
      {
        var u, o = {}, a = null, g = null;
        t !== void 0 && (Se(t), a = "" + t), rr(r) && (Se(r.key), a = "" + r.key), er(r) && (g = r.ref, tr(r, i));
        for (u in r)
          G.call(r, u) && !Qe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || g) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && nr(o, l), g && ar(o, l);
        }
        return or(e, a, g, i, n, H.current, o);
      }
    }
    var ge = w.ReactCurrentOwner, ke = w.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = ce(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function De() {
      {
        if (ge.current) {
          var e = p(ge.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var Fe = {};
    function sr(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ge.current && (n = " It was passed a child from " + p(e._owner.type) + "."), V(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), V(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (he(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            me(n) && Ae(n, r);
          }
        else if (me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = te(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              me(o.value) && Ae(o.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = p(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !be) {
          be = !0;
          var i = p(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            V(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var Ye = {};
    function We(e, r, t, n, i, u) {
      {
        var o = q(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = ur();
          g ? a += g : a += De();
          var c;
          e === null ? c = "null" : he(e) ? c = "array" : e !== void 0 && e.$$typeof === m ? (c = "<" + (p(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var l = ir(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (he(E)) {
                for (var z = 0; z < E.length; z++)
                  $e(E[z], e);
                Object.freeze && Object.freeze(E);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(E, e);
        }
        if (G.call(r, "key")) {
          var Y = p(e), b = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), ye = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[Y + ye]) {
            var pr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ye, Y, pr, Y), Ye[Y + ye] = !0;
          }
        }
        return e === y ? lr(l) : cr(l), l;
      }
    }
    function fr(e, r, t) {
      return We(e, r, t, !0);
    }
    function dr(e, r, t) {
      return We(e, r, t, !1);
    }
    var vr = dr, hr = fr;
    Q.Fragment = y, Q.jsx = vr, Q.jsxs = hr;
  }()), Q;
}
process.env.NODE_ENV === "production" ? Ee.exports = yr() : Ee.exports = _r();
var W = Ee.exports;
const Le = (v) => "touches" in v;
function Ne() {
  const { innerWidth: v, innerHeight: m } = window;
  return {
    width: v,
    height: m
  };
}
function Er() {
  const [v, m] = _e(
    Ne()
  );
  Ve(() => {
    function y() {
      m(Ne());
    }
    return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []);
  const P = v.width <= 640;
  return { ...v, isMobile: P };
}
const Rr = "_back_chgu6_1", Tr = "_modalContainer_chgu6_12", wr = "_bar_chgu6_29", Cr = "_barContainer_chgu6_36", Or = "_children_chgu6_46", ee = {
  back: Rr,
  modalContainer: Tr,
  bar: wr,
  barContainer: Cr,
  children: Or
}, jr = ({
  visible: v,
  children: m,
  transition: P = 200,
  minHeight: y,
  maxHeight: x,
  classNameBar: I,
  classNameBarContainer: k,
  classNameModalContainer: O,
  customBar: f,
  propagateSwipe: R,
  onModalHide: h,
  onModalShow: _,
  onMoveStart: T,
  onMoveEnd: D,
  onSwipeComplete: B,
  onSwipeCancel: re,
  onBackdropClick: te
}) => {
  const { height: w } = Er(), [d, ne] = _e(v), [M, F] = _e(0), S = X(!1), J = X(0), ae = X(null), L = X(null), q = X(!1), K = y || w * 0.3, j = x || w * 0.8, p = (s) => {
    const $ = Le(s) ? s.touches[0].clientY : s.clientY;
    S.current = !0, J.current = $, T && T(s);
  };
  Ve(() => (v && (ne(!0), setTimeout(() => {
    if (L.current) {
      const { height: s } = L.current.getBoundingClientRect();
      s >= K && s <= j ? F(s) : s < K ? F(K) : s > j && F(j);
    }
  }), document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [v]);
  const C = (s) => {
    const $ = Le(s) ? s.touches[0].clientY : s.clientY;
    if (S.current && ae.current) {
      const U = $ - J.current;
      w * 0.2 >= M ? (S.current = !1, re && re(s)) : j >= M - U ? (F((ie) => ie - U), q.current = !1, J.current = $) : j <= M - U && !q.current && (B && B(s), q.current = !0);
    }
  }, A = () => {
    v ? _ && _() : (ne(!1), F(0), h && h());
  }, N = (s) => {
    S.current && D && D(s), S.current = !1;
  }, oe = br(() => m, [m]);
  return !d || !m ? null : /* @__PURE__ */ W.jsx(W.Fragment, { children: mr(
    /* @__PURE__ */ W.jsx(
      "div",
      {
        className: ee.back,
        onMouseDown: (s) => {
          s.target === s.currentTarget && te && te();
        },
        style: {
          backgroundColor: v ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)"
        },
        onMouseMove: C,
        onMouseUp: N,
        onMouseLeave: N,
        onTouchMove: C,
        onTouchEnd: N,
        children: /* @__PURE__ */ W.jsxs(
          "div",
          {
            className: `${ee.modalContainer} ${O}`,
            style: {
              height: v ? M : 0,
              transition: S.current ? void 0 : P ? `height ${P}ms ease-in-out` : "height 1ms ease-in-out"
            },
            onClick: (s) => s.stopPropagation(),
            ref: ae,
            onTransitionEnd: A,
            onMouseDown: R ? p : void 0,
            onTouchStart: R ? p : void 0,
            children: [
              /* @__PURE__ */ W.jsx(
                "div",
                {
                  className: `${ee.barContainer} ${k}`,
                  onMouseDown: R ? void 0 : p,
                  onTouchStart: R ? void 0 : p,
                  children: f || /* @__PURE__ */ W.jsx(
                    "div",
                    {
                      className: `${ee.bar} ${I}`
                    }
                  )
                }
              ),
              /* @__PURE__ */ W.jsx("div", { ref: L, className: ee.children, children: oe })
            ]
          }
        )
      }
    ),
    document.body
  ) });
};
export {
  jr as default
};
//# sourceMappingURL=index.es.js.map

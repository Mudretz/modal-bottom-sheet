import './style.css';
import Ue, { useState as me, useEffect as Ve, useRef as ce, useMemo as br } from "react";
import { createPortal as yr } from "react-dom";
var _e = { exports: {} }, H = {};
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
function mr() {
  if (Ie) return H;
  Ie = 1;
  var v = Ue, b = Symbol.for("react.element"), w = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, k = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(O, f, R) {
    var h, _ = {}, T = null, F = null;
    R !== void 0 && (T = "" + R), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (F = f.ref);
    for (h in f) m.call(f, h) && !U.hasOwnProperty(h) && (_[h] = f[h]);
    if (O && O.defaultProps) for (h in f = O.defaultProps, f) _[h] === void 0 && (_[h] = f[h]);
    return { $$typeof: b, type: O, key: T, ref: F, props: _, _owner: k.current };
  }
  return H.Fragment = w, H.jsx = D, H.jsxs = D, H;
}
var Z = {};
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
    var v = Ue, b = Symbol.for("react.element"), w = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), O = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), J = Symbol.iterator, ee = "@@iterator";
    function re(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = J && e[J] || e[ee];
      return typeof r == "function" ? r : null;
    }
    var C = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        te("error", e, t);
      }
    }
    function te(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var V = !1, A = !1, P = !1, q = !1, $ = !1, S;
    S = Symbol.for("react.module.reference");
    function K(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === U || $ || e === k || e === R || e === h || q || e === F || V || A || P || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === D || e.$$typeof === O || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === S || e.getModuleId !== void 0));
    }
    function Y(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function W(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case w:
          return "Portal";
        case U:
          return "Profiler";
        case k:
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
            return W(r) + ".Consumer";
          case D:
            var t = e;
            return W(t._context) + ".Provider";
          case f:
            return Y(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case T: {
            var i = e, s = i._payload, o = i._init;
            try {
              return y(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, x = 0, ne, u, I, M, ae, Ee, Re;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function ze() {
      {
        if (x === 0) {
          ne = console.log, u = console.info, I = console.warn, M = console.error, ae = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
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
        x++;
      }
    }
    function Be() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ne
            }),
            info: j({}, e, {
              value: u
            }),
            warn: j({}, e, {
              value: I
            }),
            error: j({}, e, {
              value: M
            }),
            group: j({}, e, {
              value: ae
            }),
            groupCollapsed: j({}, e, {
              value: Ee
            }),
            groupEnd: j({}, e, {
              value: Re
            })
          });
        }
        x < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = C.ReactCurrentDispatcher, fe;
    function oe(e, r, t) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            fe = n && n[1] || "";
          }
        return `
` + fe + e;
      }
    }
    var de = !1, ie;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new Je();
    }
    function Te(e, r) {
      if (!e || de)
        return "";
      {
        var t = ie.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      de = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = le.current, le.current = null, ze();
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
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), p = n.stack.split(`
`), c = a.length - 1, l = p.length - 1; c >= 1 && l >= 0 && a[c] !== p[l]; )
            l--;
          for (; c >= 1 && l >= 0; c--, l--)
            if (a[c] !== p[l]) {
              if (c !== 1 || l !== 1)
                do
                  if (c--, l--, l < 0 || a[c] !== p[l]) {
                    var E = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, E), E;
                  }
                while (c >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        de = !1, le.current = s, Be(), Error.prepareStackTrace = i;
      }
      var B = e ? e.displayName || e.name : "", L = B ? oe(B) : "";
      return typeof e == "function" && ie.set(e, L), L;
    }
    function qe(e, r, t) {
      return Te(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function se(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, Ke(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case R:
          return oe("Suspense");
        case h:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return qe(e.render);
          case _:
            return se(e.type, r, t);
          case T: {
            var n = e, i = n._payload, s = n._init;
            try {
              return se(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Ce = {}, Oe = C.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var r = e._owner, t = se(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    function Xe(e, r, t, n, i) {
      {
        var s = Function.call.bind(X);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (ue(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), ue(null)), a instanceof Error && !(a.message in Ce) && (Ce[a.message] = !0, ue(i), d("Failed %s type: %s", t, a.message), ue(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ve(e) {
      return Ge(e);
    }
    function He(e) {
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
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), Pe(e);
    }
    var G = C.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, xe, he;
    he = {};
    function er(e) {
      if (X.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (X.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && G.current && r && G.current.stateNode !== r) {
        var t = y(G.current.type);
        he[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(G.current.type), e.ref), he[t] = !0);
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
    var or = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
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
        var s, o = {}, a = null, p = null;
        t !== void 0 && (Se(t), a = "" + t), rr(r) && (Se(r.key), a = "" + r.key), er(r) && (p = r.ref, tr(r, i));
        for (s in r)
          X.call(r, s) && !Qe.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && nr(o, l), p && ar(o, l);
        }
        return or(e, a, p, i, n, G.current, o);
      }
    }
    var pe = C.ReactCurrentOwner, ke = C.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = se(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ge;
    ge = !1;
    function be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function De() {
      {
        if (pe.current) {
          var e = y(pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var Fe = {};
    function ur(e) {
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
        var t = ur(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== pe.current && (n = " It was passed a child from " + y(e._owner.type) + "."), z(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), z(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ve(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            be(n) && Ae(n, r);
          }
        else if (be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = re(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              be(o.value) && Ae(o.value, r);
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
          var n = y(r);
          Xe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ge) {
          ge = !0;
          var i = y(r);
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
            z(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    var Ye = {};
    function We(e, r, t, n, i, s) {
      {
        var o = K(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = sr();
          p ? a += p : a += De();
          var c;
          e === null ? c = "null" : ve(e) ? c = "array" : e !== void 0 && e.$$typeof === b ? (c = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var l = ir(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (ve(E)) {
                for (var B = 0; B < E.length; B++)
                  $e(E[B], e);
                Object.freeze && Object.freeze(E);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(E, e);
        }
        if (X.call(r, "key")) {
          var L = y(e), g = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), ye = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[L + ye]) {
            var pr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ye, L, pr, L), Ye[L + ye] = !0;
          }
        }
        return e === m ? lr(l) : cr(l), l;
      }
    }
    function fr(e, r, t) {
      return We(e, r, t, !0);
    }
    function dr(e, r, t) {
      return We(e, r, t, !1);
    }
    var vr = dr, hr = fr;
    Z.Fragment = m, Z.jsx = vr, Z.jsxs = hr;
  }()), Z;
}
process.env.NODE_ENV === "production" ? _e.exports = mr() : _e.exports = _r();
var N = _e.exports;
const Le = (v) => "touches" in v;
function Ne() {
  const { innerWidth: v, innerHeight: b } = window;
  return {
    width: v,
    height: b
  };
}
function Er() {
  const [v, b] = me(
    Ne()
  );
  Ve(() => {
    function m() {
      b(Ne());
    }
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, []);
  const w = v.width <= 640;
  return { ...v, isMobile: w };
}
const Rr = "_back_wzodf_1", wr = "_modalContainer_wzodf_11", Tr = "_bar_wzodf_28", Cr = "_barContainer_wzodf_35", Or = "_children_wzodf_45", Q = {
  back: Rr,
  modalContainer: wr,
  bar: Tr,
  barContainer: Cr,
  children: Or
}, jr = ({
  visible: v,
  children: b,
  transition: w = 200,
  minHeight: m,
  maxHeight: k,
  classNameBar: U,
  classNameBarContainer: D,
  classNameModalContainer: O,
  customBar: f,
  propagateSwipe: R,
  onModalHide: h,
  onModalShow: _,
  onMoveStart: T,
  onMoveEnd: F,
  onSwipeComplete: J,
  onSwipeCancel: ee,
  onBackdropClick: re
}) => {
  const { height: C } = Er(), [d, te] = me(v), [V, A] = me(0), P = ce(!1), q = ce(0), $ = ce(null), S = ce(null), K = m || C * 0.3, Y = k || C * 0.8, W = (u) => {
    const I = Le(u) ? u.touches[0].clientY : u.clientY;
    P.current = !0, q.current = I, T && T(u);
  };
  Ve(() => (v && (te(!0), setTimeout(() => {
    if (S.current) {
      const { height: u } = S.current.getBoundingClientRect();
      u >= K && u <= Y ? A(u) : u < K ? A(K) : u > Y && A(Y), S.current.style.overflowX = "auto";
    }
  }), document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "", S.current && (S.current.style.overflowX = "");
  }), [v]);
  const y = (u) => {
    const I = Le(u) ? u.touches[0].clientY : u.clientY;
    if (P.current && $.current) {
      $.current.style.overflow = "hidden";
      const M = I - q.current;
      C * 0.2 >= V - M ? (P.current = !1, ee && ee(u)) : Y >= V - M ? A((ae) => ae - M) : Y <= V - M && (J && J(u), P.current = !1), q.current = I;
    }
  }, j = () => {
    v ? _ && _() : (te(!1), A(0), h && h());
  }, x = (u) => {
    P.current && F && F(u), P.current = !1, $.current && ($.current.style.overflow = "");
  }, ne = br(() => b, [b]);
  return !d || !b ? null : /* @__PURE__ */ N.jsx(N.Fragment, { children: yr(
    /* @__PURE__ */ N.jsx(
      "div",
      {
        className: Q.back,
        onMouseDown: (u) => {
          u.target === u.currentTarget && re && re();
        },
        style: {
          backgroundColor: v ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)",
          transition: w ? `background-color ${w}ms` : "background-color 1ms"
        },
        onMouseMove: y,
        onMouseUp: x,
        onMouseLeave: x,
        onTouchMove: y,
        onTouchEnd: x,
        children: /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: `${Q.modalContainer} ${O}`,
            style: {
              height: v ? V : 0,
              transition: P.current ? void 0 : w ? `height ${w}ms ease-in-out` : "height 1ms ease-in-out"
            },
            onClick: (u) => u.stopPropagation(),
            ref: $,
            onTransitionEnd: j,
            onMouseDown: R ? W : void 0,
            onTouchStart: R ? W : void 0,
            children: [
              /* @__PURE__ */ N.jsx(
                "div",
                {
                  className: `${Q.barContainer} ${D}`,
                  onMouseDown: R ? void 0 : W,
                  onTouchStart: R ? void 0 : W,
                  children: f || /* @__PURE__ */ N.jsx(
                    "div",
                    {
                      className: `${Q.bar} ${U}`
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("div", { ref: S, className: Q.children, children: ne })
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

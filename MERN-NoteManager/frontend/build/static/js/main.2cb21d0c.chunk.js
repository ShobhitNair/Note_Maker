(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    136: function(e, t, r) {
      e.exports = r(186);
    },
    143: function(e, t, r) {},
    145: function(e, t, r) {},
    168: function(e, t, r) {},
    175: function(e, t, r) {},
    180: function(e, t, r) {},
    182: function(e, t, r) {},
    184: function(e, t, r) {},
    186: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(1),
        a = r.n(n),
        o = r(124),
        i = r.n(o),
        c = (r(143), r(6)),
        l = (r(145), r(208)),
        u = r(199),
        s = r(212),
        f = r(209),
        h = r(210),
        p = r(16),
        d = r(5),
        m = r(22),
        v = r(24),
        y = {
          loading: !1,
          userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : null,
          error: null,
        },
        g = Object(v.b)({
          name: "user",
          initialState: y,
          reducers: {
            userLoginReq: function(e, t) {
              e.loading = !0;
            },
            userLoginSuccess: function(e, t) {
              (e.loading = !1), (e.userInfo = t.payload);
            },
            userLoginFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload);
            },
            userLogout: function(e, t) {
              (e.userInfo = null), (e.error = null);
            },
          },
        }),
        b = g.reducer,
        E = g.actions,
        w = E.userLoginReq,
        x = E.userLoginSuccess,
        L = E.userLoginFail,
        j = E.userLogout,
        O = function(e) {
          var t = e.setSearch,
            r = e.setUserSearch,
            o = e.setAdmin,
            i = e.admin,
            c = Object(d.l)(),
            v = Object(p.b)(),
            y = Object(p.c)(function(e) {
              return e.userLogin;
            }).userInfo;
          y && y.isAdmin && o(!0);
          Object(n.useEffect)(function() {}, [y]);
          var g = function() {
            o(!1), v(j()), localStorage.removeItem("userInfo"), c("/");
          };
          return a.a.createElement(
            l.a,
            { bg: "primary", expand: "lg", variant: "dark" },
            a.a.createElement(
              u.a,
              null,
              a.a.createElement(
                l.a.Brand,
                null,
                i
                  ? a.a.createElement(
                      m.b,
                      {
                        to: "/admin",
                        style: { color: "white", textDecoration: "none" },
                      },
                      "Note Maker | Admin"
                    )
                  : a.a.createElement(
                      m.b,
                      {
                        to: "/",
                        style: { color: "white", textDecoration: "none" },
                      },
                      "Note Maker"
                    )
              ),
              a.a.createElement(l.a.Toggle, {
                "aria-controls": "navbarScroll",
              }),
              y
                ? a.a.createElement(
                    l.a.Collapse,
                    { id: "navbarScroll" },
                    y && !i
                      ? a.a.createElement(
                          a.a.Fragment,
                          null,
                          a.a.createElement(
                            s.a,
                            {
                              className: "m-auto my-2 my-lg-0",
                              style: { maxHeight: "100px" },
                              navbarScroll: !0,
                            },
                            a.a.createElement(
                              s.a.Link,
                              null,
                              a.a.createElement(
                                m.b,
                                {
                                  to: "mynotes",
                                  style: {
                                    color: "white",
                                    textDecoration: "none",
                                  },
                                },
                                "My Notes"
                              )
                            ),
                            a.a.createElement(
                              f.a,
                              { title: y.name, id: "navbarScrollingDropdown" },
                              a.a.createElement(
                                f.a.Item,
                                null,
                                a.a.createElement(
                                  m.b,
                                  {
                                    className: "text-black",
                                    to: "profile",
                                    style: { textDecoration: "none" },
                                  },
                                  "My Profile"
                                )
                              ),
                              a.a.createElement(
                                f.a.Item,
                                {
                                  onClick: function() {
                                    g();
                                  },
                                },
                                "Logout"
                              )
                            )
                          ),
                          a.a.createElement(
                            h.a,
                            { className: "d-flex" },
                            a.a.createElement(h.a.Control, {
                              type: "search",
                              placeholder: "Search",
                              className: "me-2",
                              "aria-label": "Search",
                              onChange: function(e) {
                                return t(e.target.value);
                              },
                            })
                          )
                        )
                      : a.a.createElement(
                          a.a.Fragment,
                          null,
                          a.a.createElement(
                            s.a,
                            {
                              className: "m-auto my-2 my-lg-0",
                              style: { maxHeight: "100px" },
                              navbarScroll: !0,
                            },
                            a.a.createElement(
                              s.a.Link,
                              null,
                              a.a.createElement(
                                m.b,
                                {
                                  to: "mynotes",
                                  style: {
                                    color: "white",
                                    textDecoration: "none",
                                  },
                                },
                                "My Notes"
                              )
                            ),
                            a.a.createElement(
                              s.a.Link,
                              null,
                              a.a.createElement(
                                m.b,
                                {
                                  to: "admin",
                                  style: {
                                    color: "white",
                                    textDecoration: "none",
                                  },
                                },
                                "Dashboard"
                              )
                            ),
                            a.a.createElement(
                              f.a,
                              { title: y.name, id: "navbarScrollingDropdown" },
                              a.a.createElement(
                                f.a.Item,
                                null,
                                a.a.createElement(
                                  m.b,
                                  {
                                    className: "text-black",
                                    to: "profile",
                                    style: { textDecoration: "none" },
                                  },
                                  "My Profile"
                                )
                              ),
                              a.a.createElement(
                                f.a.Item,
                                {
                                  onClick: function() {
                                    g();
                                  },
                                },
                                "Logout"
                              )
                            )
                          ),
                          a.a.createElement(
                            h.a,
                            { className: "d-flex" },
                            a.a.createElement(h.a.Control, {
                              type: "search",
                              placeholder: "Search",
                              className: "me-2",
                              "aria-label": "Search",
                              onChange: function(e) {
                                return r(e.target.value);
                              },
                            })
                          )
                        )
                  )
                : null
            )
          );
        },
        S = r(200),
        k = r(158),
        N = function() {
          return a.a.createElement(
            "footer",
            {
              style: {
                width: "100%",
                position: "relative",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#5396ed",
              },
            },
            a.a.createElement(
              u.a,
              null,
              a.a.createElement(
                S.a,
                null,
                a.a.createElement(
                  k.a,
                  { className: "text-center py-3 text-light" },
                  "Copyright \xa9 Note Maker"
                )
              )
            )
          );
        },
        _ = r(15),
        C = r(19),
        P =
          (r(168),
          function(e) {
            var t = e.title,
              r = e.children;
            return a.a.createElement(
              "div",
              { className: "mainback" },
              a.a.createElement(
                u.a,
                null,
                a.a.createElement(
                  S.a,
                  null,
                  a.a.createElement(
                    "div",
                    { className: "page" },
                    t &&
                      a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement("h1", { className: "heading" }, t),
                        a.a.createElement("hr", null)
                      ),
                    r
                  )
                )
              )
            );
          }),
        I = r(157),
        F = r(201),
        G = function(e) {
          e.size;
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                },
              },
              a.a.createElement(
                I.a,
                { variant: "primary", disabled: !0 },
                a.a.createElement(F.a, {
                  as: "span",
                  animation: "grow",
                  size: "sm",
                  role: "status",
                  "aria-hidden": "true",
                }),
                "Loading..."
              )
            )
          );
        },
        T = r(202),
        U = function(e) {
          var t = e.variant,
            r = void 0 === t ? "info" : t,
            n = e.children;
          return a.a.createElement(
            T.a,
            { variant: r, style: { fontSize: 20 } },
            a.a.createElement("strong", null, n)
          );
        },
        A = r(207),
        D = Object(v.b)({
          name: "user",
          initialState: {},
          reducers: {
            userRegisterReq: function(e, t) {
              e.loading = !0;
            },
            userRegisterSuccess: function(e, t) {
              (e.loading = !1), (e.userInfo = t.payload);
            },
            userRegisterFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload);
            },
          },
        }),
        R = D.reducer,
        B = D.actions,
        q = B.userRegisterReq,
        Y = B.userRegisterSuccess,
        z = B.userRegisterFail,
        M = Object(v.b)({
          name: "user",
          initialState: {},
          reducers: {
            userUpdateReq: function(e, t) {
              e.loading = !0;
            },
            userUpdateSuccess: function(e, t) {
              (e.loading = !1), (e.userInfo = t.payload), (e.success = !0);
            },
            userUpdateFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload), (e.success = !1);
            },
          },
        }),
        H = M.reducer,
        J = M.actions,
        W = J.userUpdateReq,
        K = J.userUpdateSuccess,
        Q = J.userUpdateFail;
      function V() {
        V = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var X = function(e, t) {
          return (function() {
            var r = Object(_.a)(
              V().mark(function r(n) {
                var a, o, i, c;
                return V().wrap(
                  function(r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (a = {
                              headers: { "Content-type": "application/json" },
                            }),
                            n(w()),
                            (r.next = 5),
                            A.a.post(
                              "/api/users/login",
                              { email: e, password: t },
                              a
                            )
                          );
                        case 5:
                          (o = r.sent),
                            (i = o.data),
                            n(x(i)),
                            localStorage.setItem("userInfo", JSON.stringify(i)),
                            (r.next = 15);
                          break;
                        case 11:
                          (r.prev = 11),
                            (r.t0 = r.catch(0)),
                            (c =
                              r.t0.response && r.t0.response.data.message
                                ? r.t0.response.data.message
                                : r.t0.message),
                            n(L(c));
                        case 15:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function(e) {
              return r.apply(this, arguments);
            };
          })();
        },
        Z = function(e, t, r, n) {
          return (function() {
            var a = Object(_.a)(
              V().mark(function a(o) {
                var i, c, l, u;
                return V().wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (i = {
                              headers: { "Content-type": "application/json" },
                            }),
                            o(q()),
                            (a.next = 5),
                            A.a.post(
                              "/api/users/",
                              { name: e, email: t, password: r, pic: n },
                              i
                            )
                          );
                        case 5:
                          (c = a.sent),
                            (l = c.data),
                            o(Y(l)),
                            o(x(l)),
                            localStorage.setItem("userInfo", JSON.stringify(l)),
                            (a.next = 16);
                          break;
                        case 12:
                          (a.prev = 12),
                            (a.t0 = a.catch(0)),
                            (u =
                              a.t0.response && a.t0.response.data.message
                                ? a.t0.response.data.message
                                : a.t0.message),
                            o(z(u));
                        case 16:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 12]]
                );
              })
            );
            return function(e) {
              return a.apply(this, arguments);
            };
          })();
        };
      function $() {
        $ = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var ee = function() {
        var e = Object(n.useState)(""),
          t = Object(c.a)(e, 2),
          r = t[0],
          o = t[1],
          i = Object(n.useState)(""),
          l = Object(c.a)(i, 2),
          u = l[0],
          s = l[1],
          f = Object(p.b)(),
          h = Object(p.c)(function(e) {
            return e.userLogin;
          }),
          v = h.loading,
          y = h.error,
          g = h.userInfo,
          b = Object(d.l)();
        Object(n.useEffect)(
          function() {
            g && b("/mynotes");
          },
          [g]
        );
        var E = (function() {
          var e = Object(_.a)(
            $().mark(function e(t) {
              return $().wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.preventDefault(), f(X(r, u));
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
        return a.a.createElement(
          P,
          { title: "Login" },
          a.a.createElement(
            C.a,
            { className: "p-3 my-5 d-flex flex-column w-50" },
            a.a.createElement(
              C.c,
              null,
              y && a.a.createElement(U, { variant: "danger" }, y),
              v && a.a.createElement(G, null),
              a.a.createElement(
                C.d,
                { show: !0 },
                a.a.createElement("span", { class: "text-primary" }, "Email"),
                a.a.createElement(C.b, {
                  wrapperClass: "mb-4",
                  placeholder: "Enter Email",
                  id: "form1",
                  type: "email",
                  value: r,
                  onChange: function(e) {
                    return o(e.target.value);
                  },
                }),
                a.a.createElement(
                  "span",
                  { class: "text-primary" },
                  "Password"
                ),
                a.a.createElement(C.b, {
                  wrapperClass: "mb-4",
                  placeholder: "Enter Password",
                  id: "form2",
                  type: "password",
                  value: u,
                  onChange: function(e) {
                    return s(e.target.value);
                  },
                }),
                a.a.createElement("div", {
                  className: "d-flex justify-content-between mx-4 mb-4",
                }),
                a.a.createElement(
                  I.a,
                  { className: "mb-4 w-100", onClick: E },
                  "Sign in"
                ),
                a.a.createElement(
                  "span",
                  { className: "text-center" },
                  "Not a member?",
                  " ",
                  a.a.createElement(
                    m.b,
                    { to: "/Register", style: { textDecoration: "none" } },
                    "Register"
                  )
                )
              )
            )
          )
        );
      };
      function te() {
        te = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var re = function() {
          var e = Object(n.useState)(""),
            t = Object(c.a)(e, 2),
            r = t[0],
            o = t[1],
            i = Object(n.useState)(""),
            l = Object(c.a)(i, 2),
            u = l[0],
            s = l[1],
            f = Object(n.useState)(""),
            h = Object(c.a)(f, 2),
            v = h[0],
            y = h[1],
            g = Object(n.useState)(""),
            b = Object(c.a)(g, 2),
            E = b[0],
            w = b[1],
            x = Object(n.useState)(
              "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
            ),
            L = Object(c.a)(x, 2),
            j = L[0],
            O = L[1],
            S = Object(n.useState)(null),
            k = Object(c.a)(S, 2),
            N = k[0],
            F = k[1],
            T = Object(n.useState)(null),
            A = Object(c.a)(T, 2),
            D = A[0],
            R = A[1],
            B = Object(p.b)(),
            q = Object(p.c)(function(e) {
              return e.userRegister;
            }),
            Y = q.loading,
            z = q.error,
            M = q.userInfo,
            H = Object(d.l)();
          Object(n.useEffect)(
            function() {
              M && H("/mynotes");
            },
            [M]
          );
          var J = (function() {
            var e = Object(_.a)(
              te().mark(function e(t) {
                return te().wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((t.preventDefault(), r && u && v && E)) {
                          e.next = 4;
                          break;
                        }
                        return (
                          F("All fields are mandatory"), e.abrupt("return")
                        );
                      case 4:
                        if (
                          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" !==
                          j
                        ) {
                          e.next = 7;
                          break;
                        }
                        return R("Please Select an Image"), e.abrupt("return");
                      case 7:
                        R(null),
                          v !== E
                            ? F("Passwords do not match")
                            : (F(null), B(Z(r, u, v, j)));
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })();
          return a.a.createElement(
            P,
            { title: "Register" },
            a.a.createElement(
              C.a,
              { className: "p-3 my-5 d-flex flex-column w-50" },
              a.a.createElement(
                C.c,
                null,
                z && a.a.createElement(U, { variant: "danger" }, z),
                N && a.a.createElement(U, { variant: "danger" }, N),
                Y && a.a.createElement(G, null),
                a.a.createElement(
                  C.d,
                  { show: !0 },
                  a.a.createElement(
                    "span",
                    { class: "text-primary" },
                    "Username"
                  ),
                  a.a.createElement(C.b, {
                    wrapperClass: "mb-4",
                    placeholder: "Enter Username",
                    id: "username",
                    type: "text",
                    value: r,
                    onChange: function(e) {
                      return o(e.target.value);
                    },
                  }),
                  a.a.createElement("span", { class: "text-primary" }, "Email"),
                  a.a.createElement(C.b, {
                    wrapperClass: "mb-4",
                    placeholder: "Enter Email",
                    id: "email",
                    type: "email",
                    value: u,
                    onChange: function(e) {
                      return s(e.target.value);
                    },
                  }),
                  a.a.createElement(
                    "span",
                    { class: "text-primary" },
                    "Password"
                  ),
                  a.a.createElement(C.b, {
                    wrapperClass: "mb-4",
                    placeholder: "Enter Password",
                    id: "password",
                    type: "password",
                    value: v,
                    onChange: function(e) {
                      return y(e.target.value);
                    },
                  }),
                  a.a.createElement(
                    "span",
                    { class: "text-primary" },
                    "Confirm Password"
                  ),
                  a.a.createElement(C.b, {
                    wrapperClass: "mb-4",
                    placeholder: "Confirm Password",
                    id: "confirmPassword",
                    type: "password",
                    value: E,
                    onChange: function(e) {
                      return w(e.target.value);
                    },
                  }),
                  a.a.createElement(
                    "span",
                    { class: "text-primary" },
                    "Upload Profile Picture"
                  ),
                  a.a.createElement(C.b, {
                    wrapperClass: "mb-4",
                    id: "profile",
                    type: "file",
                    onChange: function(e) {
                      return (function(e) {
                        if ("image/jpeg" !== e.type && "image/png" !== e.type)
                          return R("Please Select an Image");
                        var t = new FormData();
                        t.append("file", e),
                          t.append("upload_preset", "notemaker"),
                          t.append("cloud_name", "dh7awu1h4"),
                          fetch(
                            "https://api.cloudinary.com/v1_1/dh7awu1h4/image/upload",
                            { method: "post", body: t }
                          )
                            .then(function(e) {
                              return e.json();
                            })
                            .then(function(e) {
                              console.log(e), O(e.url.toString());
                            })
                            .catch(function(e) {
                              console.log(e);
                            });
                      })(e.target.files[0]);
                    },
                  }),
                  D && a.a.createElement(U, { variant: "danger" }, D),
                  a.a.createElement(
                    I.a,
                    { className: "mb-4 w-100", onClick: J },
                    "Sign up"
                  ),
                  a.a.createElement(
                    "span",
                    { className: "text-center" },
                    "Already a member?",
                    " ",
                    a.a.createElement(
                      m.b,
                      { to: "/login", style: { textDecoration: "none" } },
                      "Login"
                    )
                  )
                )
              )
            )
          );
        },
        ne =
          (r(175),
          function() {
            var e = Object(d.l)();
            return (
              Object(n.useEffect)(function() {
                localStorage.getItem("userInfo") && e("/mynotes");
              }, []),
              a.a.createElement(
                "div",
                { className: "main" },
                a.a.createElement(
                  u.a,
                  null,
                  a.a.createElement(
                    S.a,
                    null,
                    a.a.createElement(
                      "div",
                      { className: "intro-text" },
                      a.a.createElement(
                        "div",
                        null,
                        a.a.createElement(
                          "h1",
                          { className: "title" },
                          "Welcome to Note Maker"
                        ),
                        a.a.createElement(
                          "p",
                          { className: "subtitle" },
                          "One Safe place for all your notes."
                        )
                      ),
                      a.a.createElement(
                        "div",
                        { className: "buttonContainer" },
                        a.a.createElement(
                          m.b,
                          { to: "/login" },
                          a.a.createElement(
                            I.a,
                            { size: "lg", className: "landingbutton" },
                            "Login"
                          )
                        ),
                        a.a.createElement(
                          m.b,
                          { to: "/register" },
                          a.a.createElement(
                            I.a,
                            {
                              variant: "outline-primary",
                              size: "lg",
                              className: "landingbutton",
                            },
                            "Signup"
                          )
                        )
                      )
                    )
                  )
                )
              )
            );
          }),
        ae = r(211),
        oe = r(203),
        ie = Object(v.b)({
          name: "notes",
          initialState: { loading: !1, notes: [], error: null },
          reducers: {
            notesListReq: function(e, t) {
              e.loading = !0;
            },
            notesListSuccess: function(e, t) {
              (e.loading = !1), (e.notes = t.payload);
            },
            notesListFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload);
            },
          },
        }),
        ce = ie.reducer,
        le = ie.actions,
        ue = le.notesListReq,
        se = le.notesListSuccess,
        fe = le.notesListFail,
        he = Object(v.b)({
          name: "notes",
          initialState: { loading: !1, error: null },
          reducers: {
            notesCreateReq: function(e, t) {
              e.loading = !0;
            },
            notesCreateSuccess: function(e, t) {
              (e.loading = !1), (e.note = t.payload), (e.success = !0);
            },
            notesCreateFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload), (e.success = !1);
            },
          },
        }),
        pe = he.reducer,
        de = he.actions,
        me = de.notesCreateReq,
        ve = de.notesCreateSuccess,
        ye = de.notesCreateFail,
        ge = Object(v.b)({
          name: "notes",
          initialState: { loading: !1, error: null },
          reducers: {
            notesUpdateReq: function(e, t) {
              e.loading = !0;
            },
            notesUpdateSuccess: function(e, t) {
              (e.loading = !1), (e.note = t.payload), (e.success = !0);
            },
            notesUpdateFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload), (e.success = !1);
            },
          },
        }),
        be = ge.reducer,
        Ee = ge.actions,
        we = Ee.notesUpdateReq,
        xe = Ee.notesUpdateSuccess,
        Le = Ee.notesUpdateFail,
        je = Object(v.b)({
          name: "notes",
          initialState: { loading: !1, error: null },
          reducers: {
            notesDeleteReq: function(e, t) {
              e.loading = !0;
            },
            notesDeleteSuccess: function(e, t) {
              (e.loading = !1), (e.success = !0);
            },
            notesDeleteFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload), (e.success = !1);
            },
          },
        }),
        Oe = je.reducer,
        Se = je.actions,
        ke = Se.notesDeleteReq,
        Ne = Se.notesDeleteSuccess,
        _e = Se.notesDeleteFail;
      function Ce() {
        Ce = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var Pe = function(e, t, r) {
          return (function() {
            var n = Object(_.a)(
              Ce().mark(function n(a, o) {
                var i, c, l, u, s, f;
                return Ce().wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a(me()),
                            (i = o()),
                            (c = i.userLogin.userInfo),
                            (l = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(c.token),
                              },
                            }),
                            (n.next = 6),
                            A.a.post(
                              "/api/notes/create",
                              { title: e, content: t, category: r },
                              l
                            )
                          );
                        case 6:
                          (u = n.sent), (s = u.data), a(ve(s)), (n.next = 15);
                          break;
                        case 11:
                          (n.prev = 11),
                            (n.t0 = n.catch(0)),
                            (f =
                              n.t0.response && n.t0.response.data.message
                                ? n.t0.response.data.message
                                : n.t0.message),
                            a(ye(f));
                        case 15:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function(e, t) {
              return n.apply(this, arguments);
            };
          })();
        },
        Ie = function(e) {
          return (function() {
            var t = Object(_.a)(
              Ce().mark(function t(r, n) {
                var a, o, i, c, l, u;
                return Ce().wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            r(ke()),
                            (a = n()),
                            (o = a.userLogin.userInfo),
                            (i = {
                              headers: {
                                Authorization: "Bearer ".concat(o.token),
                              },
                            }),
                            (t.next = 6),
                            A.a.delete("/api/notes/".concat(e), i)
                          );
                        case 6:
                          (c = t.sent), (l = c.data), r(Ne(l)), (t.next = 15);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            (u =
                              t.t0.response && t.t0.response.data.message
                                ? t.t0.response.data.message
                                : t.t0.message),
                            r(_e(u));
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function(e, r) {
              return t.apply(this, arguments);
            };
          })();
        },
        Fe = function(e, t, r, n) {
          return (function() {
            var a = Object(_.a)(
              Ce().mark(function a(o, i) {
                var c, l, u, s, f, h;
                return Ce().wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            o(we()),
                            (c = i()),
                            (l = c.userLogin.userInfo),
                            (u = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(l.token),
                              },
                            }),
                            (a.next = 6),
                            A.a.put(
                              "/api/notes/".concat(e),
                              { title: t, content: r, category: n },
                              u
                            )
                          );
                        case 6:
                          (s = a.sent), (f = s.data), o(xe(f)), (a.next = 15);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(0)),
                            (h =
                              a.t0.response && a.t0.response.data.message
                                ? a.t0.response.data.message
                                : a.t0.message),
                            o(Le(h));
                        case 15:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function(e, t) {
              return a.apply(this, arguments);
            };
          })();
        },
        Ge = r(62),
        Te =
          (r(123),
          function(e) {
            var t = e.search,
              r = Object(p.b)(),
              o = Object(d.l)(),
              i = Object(p.c)(function(e) {
                return e.noteList;
              }),
              c = i.loading,
              l = i.notes,
              u = i.error,
              s = Object(p.c)(function(e) {
                return e.userLogin;
              }).userInfo.name,
              f = Object(p.c)(function(e) {
                return e.noteCreate;
              }).success,
              h = Object(p.c)(function(e) {
                return e.noteUpdate;
              }).success,
              v = Object(p.c)(function(e) {
                return e.noteDelete;
              }),
              y = v.loading,
              g = v.error,
              b = v.success;
            return (
              Object(n.useEffect)(
                function() {
                  r(
                    (function() {
                      var e = Object(_.a)(
                        Ce().mark(function e(t, r) {
                          var n, a, o, i, c, l;
                          return Ce().wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t(ue()),
                                      (n = r()),
                                      (a = n.userLogin.userInfo),
                                      console.log(a),
                                      (o = {
                                        headers: {
                                          Authorization: "Bearer ".concat(
                                            a.token
                                          ),
                                        },
                                      }),
                                      (e.next = 7),
                                      A.a.get("/api/notes", o)
                                    );
                                  case 7:
                                    (i = e.sent),
                                      (c = i.data),
                                      console.log(c),
                                      t(se(c)),
                                      (e.next = 17);
                                    break;
                                  case 13:
                                    (e.prev = 13),
                                      (e.t0 = e.catch(0)),
                                      (l =
                                        e.t0.response &&
                                        e.t0.response.data.message
                                          ? e.t0.response.data.message
                                          : e.t0.message),
                                      t(fe(l));
                                  case 17:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 13]]
                          );
                        })
                      );
                      return function(t, r) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
                },
                [r, f, h, b]
              ),
              a.a.createElement(
                P,
                { title: "Welcome Back ".concat(s, "..") },
                a.a.createElement(
                  m.b,
                  { to: "/createnote" },
                  a.a.createElement(
                    I.a,
                    { style: { marginLeft: 10, marginBottom: 6 }, size: "lg" },
                    "Create new Note"
                  )
                ),
                g && a.a.createElement(U, { variant: "danger" }, g),
                u && a.a.createElement(U, { variant: "danger" }, u),
                c && a.a.createElement(G, null),
                y && a.a.createElement(G, null),
                l
                  .filter(function(e) {
                    return e.title.toLowerCase().includes(t.toLowerCase());
                  })
                  .map(function(e) {
                    return a.a.createElement(
                      a.a.Fragment,
                      null,
                      a.a.createElement(
                        ae.a,
                        { key: e._id },
                        a.a.createElement(
                          ae.a.Item,
                          { eventKey: "0" },
                          a.a.createElement(
                            ae.a.Header,
                            null,
                            a.a.createElement(
                              m.b,
                              { to: "/note/".concat(e._id) },
                              a.a.createElement(I.a, null, "Edit")
                            ),
                            a.a.createElement(
                              I.a,
                              {
                                variant: "danger",
                                className: "mx-2",
                                onClick: function() {
                                  return (
                                    (t = e._id),
                                    void Object(Ge.confirmAlert)({
                                      title: "Confirm",
                                      message:
                                        "Are you sure you need to delete ?",
                                      buttons: [
                                        {
                                          label: "Yes",
                                          onClick: function() {
                                            r(Ie(t)), o("/mynotes");
                                          },
                                        },
                                        {
                                          label: "No",
                                          onClick: function() {
                                            return o("/mynotes");
                                          },
                                        },
                                      ],
                                    })
                                  );
                                  var t;
                                },
                              },
                              "Delete"
                            ),
                            a.a.createElement(
                              "span",
                              {
                                className: "lead",
                                style: { marginLeft: "30%" },
                              },
                              e.title
                            )
                          ),
                          a.a.createElement(
                            ae.a.Body,
                            null,
                            a.a.createElement(
                              oe.a,
                              { bg: "success" },
                              "Category - ",
                              e.category
                            ),
                            a.a.createElement(
                              "blockquote",
                              { className: "blockquote mb-0" },
                              a.a.createElement(
                                "p",
                                { className: "fs-6 mt-2" },
                                e.content
                              ),
                              a.a.createElement(
                                "footer",
                                { style: { fontSize: 14, opacity: 0.5 } },
                                "Created on - ",
                                e.createdAt.substring(0, 10)
                              )
                            )
                          )
                        )
                      )
                    );
                  })
              )
            );
          }),
        Ue = r(213),
        Ae = r(206);
      var De = function(e) {
        e.history;
        var t = Object(n.useState)(""),
          r = Object(c.a)(t, 2),
          o = r[0],
          i = r[1],
          l = Object(n.useState)(""),
          u = Object(c.a)(l, 2),
          s = u[0],
          f = u[1],
          m = Object(n.useState)(""),
          v = Object(c.a)(m, 2),
          y = v[0],
          g = v[1],
          b = Object(p.b)(),
          E = Object(d.l)(),
          w = Object(p.c)(function(e) {
            return e.noteCreate;
          }),
          x = w.loading,
          L = w.error,
          j = w.note;
        console.log(j);
        var O = function() {
          i(""), g(""), f("");
        };
        return (
          Object(n.useEffect)(function() {}, []),
          a.a.createElement(
            P,
            { title: "Create a Note" },
            a.a.createElement(
              Ue.a,
              null,
              a.a.createElement(Ue.a.Header, null, "Create a new Note"),
              a.a.createElement(
                Ue.a.Body,
                null,
                a.a.createElement(
                  h.a,
                  {
                    onSubmit: function(e) {
                      e.preventDefault(),
                        o && s && y && (b(Pe(o, s, y)), O(), E("/mynotes"));
                    },
                  },
                  L && a.a.createElement(U, { variant: "danger" }, L),
                  a.a.createElement(
                    h.a.Group,
                    { controlId: "title" },
                    a.a.createElement(h.a.Label, null, "Title"),
                    a.a.createElement(h.a.Control, {
                      type: "title",
                      value: o,
                      placeholder: "Enter the title",
                      onChange: function(e) {
                        return i(e.target.value);
                      },
                    })
                  ),
                  a.a.createElement(
                    h.a.Group,
                    { controlId: "content" },
                    a.a.createElement(h.a.Label, null, "Content"),
                    a.a.createElement(h.a.Control, {
                      as: "textarea",
                      value: s,
                      placeholder: "Enter the content",
                      rows: 4,
                      onChange: function(e) {
                        return f(e.target.value);
                      },
                    })
                  ),
                  s &&
                    a.a.createElement(
                      Ue.a,
                      null,
                      a.a.createElement(Ue.a.Header, null, "Note Preview"),
                      a.a.createElement(
                        Ue.a.Body,
                        null,
                        a.a.createElement(Ae.a, null, s)
                      )
                    ),
                  a.a.createElement(
                    h.a.Group,
                    { controlId: "content" },
                    a.a.createElement(h.a.Label, null, "Category"),
                    a.a.createElement(h.a.Control, {
                      type: "content",
                      value: y,
                      placeholder: "Enter the Category",
                      onChange: function(e) {
                        return g(e.target.value);
                      },
                    })
                  ),
                  x && a.a.createElement(G, { size: 50 }),
                  a.a.createElement(
                    I.a,
                    {
                      type: "submit",
                      variant: "primary",
                      style: { marginTop: "10px" },
                    },
                    "Create Note"
                  ),
                  a.a.createElement(
                    I.a,
                    {
                      className: "mx-2",
                      onClick: O,
                      variant: "danger",
                      style: { marginTop: "10px" },
                    },
                    "Reset Feilds"
                  )
                )
              ),
              a.a.createElement(
                Ue.a.Footer,
                { className: "text-muted" },
                "Creating on - ",
                new Date().toLocaleDateString()
              )
            )
          )
        );
      };
      function Re() {
        Re = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var Be = function() {
          var e = Object(d.n)().id;
          console.log(e);
          var t = Object(n.useState)(),
            r = Object(c.a)(t, 2),
            o = r[0],
            i = r[1],
            l = Object(n.useState)(),
            u = Object(c.a)(l, 2),
            s = u[0],
            f = u[1],
            m = Object(n.useState)(),
            v = Object(c.a)(m, 2),
            y = v[0],
            g = v[1],
            b = Object(n.useState)(""),
            E = Object(c.a)(b, 2),
            w = E[0],
            x = E[1],
            L = Object(p.b)(),
            j = Object(d.l)(),
            O = Object(p.c)(function(e) {
              return e.noteUpdate;
            }),
            S = O.loading,
            k = O.error,
            N = Object(p.c)(function(e) {
              return e.noteDelete;
            }),
            C = N.loading,
            F = N.error;
          return (
            N.success,
            Object(n.useEffect)(
              function() {
                !(function() {
                  var t = Object(_.a)(
                    Re().mark(function t() {
                      var r, n;
                      return Re().wrap(function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), A.a.get("/api/notes/".concat(e))
                              );
                            case 2:
                              (r = t.sent),
                                (n = r.data),
                                i(n.title),
                                f(n.content),
                                g(n.category),
                                x(n.updatedAt);
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()();
              },
              [e, w, j]
            ),
            a.a.createElement(
              P,
              { title: "Edit Note" },
              a.a.createElement(
                Ue.a,
                null,
                a.a.createElement(Ue.a.Header, null, "Edit your Note"),
                a.a.createElement(
                  Ue.a.Body,
                  null,
                  a.a.createElement(
                    h.a,
                    {
                      onSubmit: function(t) {
                        t.preventDefault(),
                          o &&
                            s &&
                            y &&
                            (x(new Date()),
                            L(Fe(e, o, s, y, w)),
                            i(""),
                            g(""),
                            f(""),
                            j("mynotes"));
                      },
                    },
                    F && a.a.createElement(U, { variant: "danger" }, F),
                    C && a.a.createElement(G, null),
                    k && a.a.createElement(U, { variant: "danger" }, k),
                    a.a.createElement(
                      h.a.Group,
                      { controlId: "title" },
                      a.a.createElement(h.a.Label, null, "Title"),
                      a.a.createElement(h.a.Control, {
                        type: "title",
                        value: o,
                        placeholder: "Enter the title",
                        onChange: function(e) {
                          return i(e.target.value);
                        },
                      })
                    ),
                    a.a.createElement(
                      h.a.Group,
                      { controlId: "content" },
                      a.a.createElement(h.a.Label, null, "Content"),
                      a.a.createElement(h.a.Control, {
                        as: "textarea",
                        value: s,
                        placeholder: "Enter the content",
                        rows: 4,
                        onChange: function(e) {
                          return f(e.target.value);
                        },
                      })
                    ),
                    s &&
                      a.a.createElement(
                        Ue.a,
                        null,
                        a.a.createElement(Ue.a.Header, null, "Note Preview"),
                        a.a.createElement(
                          Ue.a.Body,
                          null,
                          a.a.createElement(Ae.a, null, s)
                        )
                      ),
                    a.a.createElement(
                      h.a.Group,
                      { controlId: "content" },
                      a.a.createElement(h.a.Label, null, "Category"),
                      a.a.createElement(h.a.Control, {
                        type: "content",
                        value: y,
                        placeholder: "Enter the Category",
                        onChange: function(e) {
                          return g(e.target.value);
                        },
                      })
                    ),
                    S && a.a.createElement(G, { size: 50 }),
                    a.a.createElement(
                      I.a,
                      {
                        type: "submit",
                        variant: "primary",
                        style: { marginTop: "10px" },
                      },
                      "Update Note"
                    ),
                    a.a.createElement(
                      I.a,
                      {
                        className: "mx-2",
                        variant: "danger",
                        style: { marginTop: "10px" },
                        onClick: function() {
                          return (function(e) {
                            Object(Ge.confirmAlert)({
                              title: "Confirm",
                              message: "Are you sure you need to delete ?",
                              buttons: [
                                {
                                  label: "Yes",
                                  onClick: function() {
                                    L(Ie(e)), j("/mynotes");
                                  },
                                },
                                {
                                  label: "No",
                                  onClick: function() {
                                    return j("/mynotes");
                                  },
                                },
                              ],
                            });
                          })(e);
                        },
                      },
                      "Delete Note"
                    )
                  )
                ),
                a.a.createElement(
                  Ue.a.Footer,
                  { className: "text-muted" },
                  "Updating on - ",
                  new Date().toLocaleDateString()
                )
              )
            )
          );
        },
        qe =
          (r(180),
          function() {
            var e = Object(n.useState)(""),
              t = Object(c.a)(e, 2),
              r = t[0],
              o = t[1],
              i = Object(n.useState)(""),
              l = Object(c.a)(i, 2),
              u = l[0],
              s = l[1],
              f = Object(n.useState)(),
              h = Object(c.a)(f, 2),
              m = h[0],
              v = h[1],
              y = Object(n.useState)(""),
              g = Object(c.a)(y, 2),
              b = g[0],
              E = g[1],
              w = Object(n.useState)(""),
              L = Object(c.a)(w, 2),
              j = L[0],
              O = L[1],
              N = Object(n.useState)(),
              F = Object(c.a)(N, 2),
              T = F[0],
              D = F[1],
              R = Object(p.b)(),
              B = Object(d.l)(),
              q = Object(p.c)(function(e) {
                return e.userLogin;
              }).userInfo,
              Y = Object(p.c)(function(e) {
                return e.userUpdate;
              }),
              z = Y.loading,
              M = Y.error,
              H = Y.success;
            Object(n.useEffect)(
              function() {
                q ? (o(q.name), s(q.email), v(q.pic)) : B("/");
              },
              [B, q]
            );
            return a.a.createElement(
              P,
              { title: "Edit Profile" },
              a.a.createElement(
                "div",
                null,
                a.a.createElement(
                  S.a,
                  { className: "profileContainer" },
                  a.a.createElement(
                    k.a,
                    { md: 6 },
                    a.a.createElement(
                      C.a,
                      { className: "p-3 my-5 d-flex flex-column w-50" },
                      a.a.createElement(
                        C.c,
                        null,
                        H &&
                          a.a.createElement(
                            U,
                            { variant: "success" },
                            "Updated Successfully"
                          ),
                        M && a.a.createElement(U, { variant: "danger" }, M),
                        z && a.a.createElement(G, null),
                        a.a.createElement(
                          C.d,
                          { show: !0 },
                          a.a.createElement(
                            "span",
                            { class: "text-primary" },
                            "Username"
                          ),
                          a.a.createElement(C.b, {
                            wrapperClass: "mb-4",
                            placeholder: "Enter Username",
                            id: "username",
                            type: "text",
                            value: r,
                            onChange: function(e) {
                              return o(e.target.value);
                            },
                          }),
                          a.a.createElement(
                            "span",
                            { class: "text-primary" },
                            "Email"
                          ),
                          a.a.createElement(C.b, {
                            wrapperClass: "mb-4",
                            placeholder: "Enter Email",
                            id: "email",
                            type: "email",
                            value: u,
                            onChange: function(e) {
                              return s(e.target.value);
                            },
                          }),
                          a.a.createElement(
                            "span",
                            { class: "text-primary" },
                            "Password"
                          ),
                          a.a.createElement(C.b, {
                            wrapperClass: "mb-4",
                            placeholder: "Enter Password",
                            id: "password",
                            type: "password",
                            value: b,
                            onChange: function(e) {
                              return E(e.target.value);
                            },
                          }),
                          a.a.createElement(
                            "span",
                            { class: "text-primary" },
                            "Confirm Password"
                          ),
                          a.a.createElement(C.b, {
                            wrapperClass: "mb-4",
                            placeholder: "Confirm Password",
                            id: "confirmPassword",
                            type: "password",
                            value: j,
                            onChange: function(e) {
                              return O(e.target.value);
                            },
                          }),
                          a.a.createElement(
                            "span",
                            { class: "text-primary" },
                            "Upload Profile Picture"
                          ),
                          a.a.createElement(C.b, {
                            wrapperClass: "mb-4",
                            id: "profile",
                            type: "file",
                            onChange: function(e) {
                              return (function(e) {
                                if (
                                  (D(null),
                                  "image/jpeg" !== e.type &&
                                    "image/png" !== e.type)
                                )
                                  return D("Please Select an Image");
                                var t = new FormData();
                                t.append("file", e),
                                  t.append("upload_preset", "notemaker"),
                                  t.append("cloud_name", "dh7awu1h4"),
                                  fetch(
                                    "https://api.cloudinary.com/v1_1/dh7awu1h4/image/upload",
                                    { method: "post", body: t }
                                  )
                                    .then(function(e) {
                                      return e.json();
                                    })
                                    .then(function(e) {
                                      v(e.url.toString()), console.log(m);
                                    })
                                    .catch(function(e) {
                                      console.log(e);
                                    });
                              })(e.target.files[0]);
                            },
                          }),
                          T && a.a.createElement(U, { variant: "danger" }, T),
                          a.a.createElement(
                            I.a,
                            {
                              className: "mb-4 w-100",
                              onClick: function(e) {
                                var t;
                                e.preventDefault(),
                                  R(
                                    ((t = {
                                      name: r,
                                      email: u,
                                      password: b,
                                      pic: m,
                                    }),
                                    (function() {
                                      var e = Object(_.a)(
                                        V().mark(function e(r, n) {
                                          var a, o, i, c, l, u;
                                          return V().wrap(
                                            function(e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.prev = 0),
                                                      r(W()),
                                                      (a = n()),
                                                      (o =
                                                        a.userLogin.userInfo),
                                                      (i = {
                                                        headers: {
                                                          "Content-Type":
                                                            "application/json",
                                                          Authorization: "Bearer ".concat(
                                                            o.token
                                                          ),
                                                        },
                                                      }),
                                                      (e.next = 6),
                                                      A.a.post(
                                                        "/api/users/profile",
                                                        t,
                                                        i
                                                      )
                                                    );
                                                  case 6:
                                                    (c = e.sent),
                                                      (l = c.data),
                                                      r(K(l)),
                                                      r(x(l)),
                                                      localStorage.setItem(
                                                        "userInfo",
                                                        JSON.stringify(l)
                                                      ),
                                                      (e.next = 17);
                                                    break;
                                                  case 13:
                                                    (e.prev = 13),
                                                      (e.t0 = e.catch(0)),
                                                      (u =
                                                        e.t0.response &&
                                                        e.t0.response.data
                                                          .message
                                                          ? e.t0.response.data
                                                              .message
                                                          : e.t0.message),
                                                      r(Q(u));
                                                  case 17:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e,
                                            null,
                                            [[0, 13]]
                                          );
                                        })
                                      );
                                      return function(t, r) {
                                        return e.apply(this, arguments);
                                      };
                                    })())
                                  );
                              },
                            },
                            "Update"
                          )
                        )
                      )
                    )
                  ),
                  a.a.createElement(
                    k.a,
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    },
                    a.a.createElement("img", {
                      src: m,
                      alt: r,
                      className: "profilePic",
                    })
                  )
                )
              )
            );
          }),
        Ye = r(204),
        ze = r(165),
        Me = r(166),
        He = Object(v.b)({
          name: "admin",
          initialState: { loading: !1, users: [], error: null },
          reducers: {
            usersListReq: function(e, t) {
              e.loading = !0;
            },
            usersListSuccess: function(e, t) {
              (e.loading = !1), (e.users = t.payload);
            },
            usersListFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload);
            },
          },
        }),
        Je = He.reducer,
        We = He.actions,
        Ke = We.usersListReq,
        Qe = We.usersListSuccess,
        Ve = We.usersListFail,
        Xe = Object(v.b)({
          name: "admin",
          initialState: { loading: !1, error: null },
          reducers: {
            userDeleteReq: function(e, t) {
              e.loading = !0;
            },
            userDeleteSuccess: function(e, t) {
              (e.loading = !1), (e.success = !0);
            },
            userDeleteFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload), (e.success = !1);
            },
          },
        }),
        Ze = Xe.reducer,
        $e = Xe.actions,
        et = $e.userDeleteReq,
        tt = $e.userDeleteSuccess,
        rt = $e.userDeleteFail,
        nt = Object(v.b)({
          name: "admin",
          initialState: { loading: !1, error: null },
          reducers: {
            usersUpdateReq: function(e, t) {
              console.log(!0), (e.loading = !0);
            },
            usersUpdateSuccess: function(e, t) {
              console.log(!1),
                (e.loading = !1),
                (e.user = t.payload),
                (e.success = !0);
            },
            usersUpdateFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload), (e.success = !1);
            },
          },
        }),
        at = nt.reducer,
        ot = nt.actions,
        it = ot.usersUpdateReq,
        ct = ot.usersUpdateSuccess,
        lt = ot.usersUpdateFail,
        ut = Object(v.b)({
          name: "admin",
          initialState: { loading: !1, error: null },
          reducers: {
            userBlockReq: function(e, t) {
              (e.loading = !0), (e.success = !1);
            },
            userBlockSuccess: function(e, t) {
              (e.loading = !1), (e.user = t.payload), (e.success = !0);
            },
            userBlockFail: function(e, t) {
              (e.loading = !1), (e.error = t.payload), (e.success = !1);
            },
          },
        }),
        st = ut.reducer,
        ft = ut.actions,
        ht = ft.userBlockReq,
        pt = ft.userBlockSuccess,
        dt = ft.userBlockFail;
      function mt() {
        mt = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function vt() {
        vt = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var yt = function(e) {
        var t = e.userSearch;
        (0, e.setAdmin)(!0);
        var r = Object(p.b)(),
          o = Object(d.l)(),
          i = Object(n.useState)(),
          l = Object(c.a)(i, 2),
          u = l[0],
          s = l[1],
          f = Object(p.c)(function(e) {
            return e.userLogin;
          }).userInfo.isAdmin,
          h = Object(p.c)(function(e) {
            return e.adminUserList;
          }),
          v = h.loading,
          y = h.users,
          g = h.error,
          b = Object(p.c)(function(e) {
            return e.adminUserBlock;
          }),
          E = (b.loading, b.error),
          w = b.success,
          x = Object(p.c)(function(e) {
            return e.adminUserDelete;
          }),
          L = (x.loading, x.error),
          j = x.success,
          O = function(e) {
            Object(Ge.confirmAlert)({
              title: "Confirm",
              message: "Are you sure you need to delete ".concat(u, " ?"),
              buttons: [
                {
                  label: "Yes",
                  onClick: function() {
                    r(
                      (function(e) {
                        return (function() {
                          var t = Object(_.a)(
                            mt().mark(function t(r, n) {
                              var a, o, i, c, l, u;
                              return mt().wrap(
                                function(t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          r(et()),
                                          (a = n()),
                                          (o = a.userLogin.userInfo),
                                          (i = {
                                            headers: {
                                              Authorization: "Bearer ".concat(
                                                o.token
                                              ),
                                            },
                                          }),
                                          (t.next = 6),
                                          A.a.delete("/api/admin/".concat(e), i)
                                        );
                                      case 6:
                                        (c = t.sent),
                                          (l = c.data),
                                          r(tt(l)),
                                          (t.next = 15);
                                        break;
                                      case 11:
                                        (t.prev = 11),
                                          (t.t0 = t.catch(0)),
                                          (u =
                                            t.t0.response &&
                                            t.t0.response.data.message
                                              ? t.t0.response.data.message
                                              : t.t0.message),
                                          r(rt(u));
                                      case 15:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 11]]
                              );
                            })
                          );
                          return function(e, r) {
                            return t.apply(this, arguments);
                          };
                        })();
                      })(e)
                    ),
                      o("/admin");
                  },
                },
                {
                  label: "No",
                  onClick: function() {
                    return o("/admin");
                  },
                },
              ],
            });
          },
          S = function(e, t) {
            Object(Ge.confirmAlert)({
              title: "Confirm",
              message: "Are you sure you need to block ".concat(u, " ?"),
              buttons: [
                {
                  label: "Yes",
                  onClick: function() {
                    r(
                      (function(e, t) {
                        return (function() {
                          var r = Object(_.a)(
                            mt().mark(function r(n, a) {
                              var o, i, c, l, u, s, f;
                              return mt().wrap(
                                function(r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (r.prev = 0),
                                          n(ht()),
                                          (o = a()),
                                          (i = o.userLogin.userInfo),
                                          (c = {
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                              Authorization: "Bearer ".concat(
                                                i.token
                                              ),
                                            },
                                          }),
                                          (l = { blocked: t }),
                                          (r.next = 7),
                                          A.a.patch(
                                            "/api/admin/".concat(e),
                                            l,
                                            c
                                          )
                                        );
                                      case 7:
                                        (u = r.sent),
                                          (s = u.data),
                                          n(pt(s)),
                                          (r.next = 16);
                                        break;
                                      case 12:
                                        (r.prev = 12),
                                          (r.t0 = r.catch(0)),
                                          (f =
                                            r.t0.response &&
                                            r.t0.response.data.message
                                              ? r.t0.response.data.message
                                              : r.t0.message),
                                          n(dt(f));
                                      case 16:
                                      case "end":
                                        return r.stop();
                                    }
                                },
                                r,
                                null,
                                [[0, 12]]
                              );
                            })
                          );
                          return function(e, t) {
                            return r.apply(this, arguments);
                          };
                        })();
                      })(e, t)
                    );
                  },
                },
                {
                  label: "No",
                  onClick: function() {
                    return o("/admin");
                  },
                },
              ],
            });
          };
        return (
          Object(n.useEffect)(
            function() {
              f || o("/mynotes"),
                r(
                  (function() {
                    var e = Object(_.a)(
                      mt().mark(function e(t, r) {
                        var n, a, o, i, c, l;
                        return mt().wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t(Ke()),
                                    (n = r()),
                                    (a = n.userLogin.userInfo),
                                    console.log(a),
                                    (o = {
                                      headers: {
                                        Authorization: "Bearer ".concat(
                                          a.token
                                        ),
                                      },
                                    }),
                                    (e.next = 7),
                                    A.a.get("/api/admin", o)
                                  );
                                case 7:
                                  (i = e.sent),
                                    (c = i.data),
                                    console.log(c),
                                    t(Qe(c)),
                                    (e.next = 17);
                                  break;
                                case 13:
                                  (e.prev = 13),
                                    (e.t0 = e.catch(0)),
                                    (l =
                                      e.t0.response &&
                                      e.t0.response.data.message
                                        ? e.t0.response.data.message
                                        : e.t0.message),
                                    t(Ve(l));
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 13]]
                        );
                      })
                    );
                    return function(t, r) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
            },
            [r, w]
          ),
          a.a.createElement(
            P,
            { title: "Dashboard" },
            v && a.a.createElement(G, null),
            j &&
              a.a.createElement(
                U,
                { variant: "success" },
                "Deleted Successfully"
              ),
            g && a.a.createElement(U, { variant: "danger" }, g),
            L && a.a.createElement(U, { variant: "danger" }, L),
            E && a.a.createElement(U, { variant: "danger" }, E),
            !v &&
              !g &&
              a.a.createElement(
                Ye.a,
                {
                  responsive: !0,
                  striped: !0,
                  bordered: !0,
                  hover: !0,
                  className: "text-center",
                },
                a.a.createElement(
                  "thead",
                  null,
                  a.a.createElement(
                    "tr",
                    null,
                    a.a.createElement("th", null, "SiNo"),
                    a.a.createElement("th", null, "Profile Pic"),
                    a.a.createElement("th", null, "Name"),
                    a.a.createElement("th", null, "Email"),
                    a.a.createElement("th", null, "Edit/Delete"),
                    a.a.createElement("th", null, "Block")
                  )
                ),
                y
                  .filter(function(e) {
                    return e.name.toLowerCase().includes(t.toLowerCase());
                  })
                  .map(function(e, t) {
                    return a.a.createElement(
                      "tbody",
                      { key: t },
                      a.a.createElement(
                        "tr",
                        null,
                        a.a.createElement("td", null, t + 1),
                        a.a.createElement(
                          "td",
                          { style: { width: "160px" } },
                          a.a.createElement("img", {
                            style: { width: "80px", height: "auto" },
                            src: e.pic,
                            alt: e.name,
                          })
                        ),
                        a.a.createElement("td", null, e.name),
                        a.a.createElement("td", null, e.email),
                        a.a.createElement(
                          "td",
                          null,
                          a.a.createElement(
                            m.b,
                            { to: "/admin/user/".concat(e._id) },
                            a.a.createElement(
                              I.a,
                              null,
                              a.a.createElement(ze.a, null)
                            )
                          ),
                          a.a.createElement(
                            I.a,
                            {
                              variant: "danger",
                              className: "mx-2",
                              onClick: function() {
                                s(e.name), O(e._id);
                              },
                            },
                            a.a.createElement(Me.a, null)
                          )
                        ),
                        a.a.createElement(
                          "td",
                          null,
                          a.a.createElement(
                            I.a,
                            {
                              variant: e.blocked ? "success" : "danger",
                              onClick: Object(_.a)(
                                vt().mark(function t() {
                                  return vt().wrap(function(t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          s(e.name), S(e._id, !e.blocked);
                                        case 2:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              ),
                            },
                            e.blocked ? "Unblock" : "Block"
                          )
                        )
                      )
                    );
                  })
              )
          )
        );
      };
      r(182);
      function gt() {
        gt = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function(e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function(e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var m = {};
        l(m, o, function() {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(S([])));
        y && y !== t && r.call(y, o) && (m = y);
        var g = (d.prototype = h.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            l(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          n(this, "_invoke", {
            value: function(n, o) {
              function i() {
                return new t(function(a, i) {
                  !(function n(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && r.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function(e) {
                              n("next", e, i, c);
                            },
                            function(e) {
                              n("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function(e) {
                              (u.value = e), i(u);
                            },
                            function(e) {
                              return n("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function(a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return k();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = s(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var a = s(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          n(g, "constructor", { value: d, configurable: !0 }),
          n(d, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(E.prototype),
          l(E.prototype, i, function() {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function(t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function(e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(g),
          l(g, c, "Generator"),
          l(g, o, function() {
            return this;
          }),
          l(g, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = S),
          (O.prototype = {
            constructor: O,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), j(r), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    j(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var bt = function(e) {
          (0, e.setAdmin)(!0);
          var t = Object(d.n)().id,
            r = Object(n.useState)(""),
            o = Object(c.a)(r, 2),
            i = o[0],
            l = o[1],
            u = Object(n.useState)(""),
            s = Object(c.a)(u, 2),
            f = s[0],
            m = s[1],
            v = Object(n.useState)(),
            y = Object(c.a)(v, 2),
            g = y[0],
            b = y[1],
            E = Object(n.useState)(""),
            w = Object(c.a)(E, 2),
            x = w[0],
            L = w[1],
            j = Object(n.useState)(""),
            O = Object(c.a)(j, 2),
            N = O[0],
            F = O[1],
            T = Object(n.useState)(""),
            D = Object(c.a)(T, 2),
            R = D[0],
            B = D[1],
            q = Object(n.useState)(),
            Y = Object(c.a)(q, 2),
            z = Y[0],
            M = Y[1],
            H = Object(n.useState)(""),
            J = Object(c.a)(H, 2),
            W = J[0],
            K = J[1],
            Q = Object(p.b)(),
            V = Object(d.l)(),
            X = Object(p.c)(function(e) {
              return e.adminUserUpdate;
            }),
            Z = X.loading,
            $ = X.error,
            ee = X.success;
          Object(n.useEffect)(
            function() {
              !(function() {
                var e = Object(_.a)(
                  gt().mark(function e() {
                    var r, n;
                    return gt().wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), A.a.get("/api/admin/".concat(t))
                            );
                          case 2:
                            (r = e.sent),
                              (n = r.data),
                              l(n.name),
                              m(n.email),
                              b(n.pic),
                              F(n.isAdmin),
                              K(n.updatedAt);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [W, t, V, Z, $, ee]
          );
          return a.a.createElement(
            P,
            { title: "Update ".concat(i) },
            a.a.createElement(
              "div",
              null,
              a.a.createElement(
                S.a,
                { className: "profileContainer" },
                a.a.createElement(
                  k.a,
                  { md: 6 },
                  a.a.createElement(
                    C.a,
                    { className: "p-3 my-5 d-flex flex-column w-50" },
                    a.a.createElement(
                      C.c,
                      null,
                      ee &&
                        a.a.createElement(
                          U,
                          { variant: "success" },
                          "Updated Successfully"
                        ),
                      $ && a.a.createElement(U, { variant: "danger" }, $),
                      Z && a.a.createElement(G, null),
                      a.a.createElement(
                        C.d,
                        { show: !0 },
                        a.a.createElement(
                          "span",
                          { class: "text-primary" },
                          "Username"
                        ),
                        a.a.createElement(C.b, {
                          wrapperClass: "mb-4",
                          placeholder: "Enter Username",
                          id: "username",
                          type: "text",
                          value: i,
                          onChange: function(e) {
                            return l(e.target.value);
                          },
                        }),
                        a.a.createElement(
                          "span",
                          { class: "text-primary" },
                          "Email"
                        ),
                        a.a.createElement(C.b, {
                          wrapperClass: "mb-4",
                          placeholder: "Enter Email",
                          id: "email",
                          type: "email",
                          value: f,
                          onChange: function(e) {
                            return m(e.target.value);
                          },
                        }),
                        a.a.createElement(
                          "span",
                          { class: "text-primary" },
                          "Password"
                        ),
                        a.a.createElement(C.b, {
                          wrapperClass: "mb-4",
                          placeholder: "Enter Password",
                          id: "password",
                          type: "password",
                          value: x,
                          onChange: function(e) {
                            return L(e.target.value);
                          },
                        }),
                        a.a.createElement(
                          "span",
                          { class: "text-primary" },
                          "Confirm Password"
                        ),
                        a.a.createElement(C.b, {
                          wrapperClass: "mb-4",
                          placeholder: "Confirm Password",
                          id: "confirmPassword",
                          type: "password",
                          value: R,
                          onChange: function(e) {
                            return B(e.target.value);
                          },
                        }),
                        a.a.createElement(
                          "span",
                          { class: "text-primary" },
                          "Upload Profile Picture"
                        ),
                        a.a.createElement(C.b, {
                          wrapperClass: "mb-4",
                          id: "profile",
                          type: "file",
                          onChange: function(e) {
                            return (function(e) {
                              if (
                                (M(null),
                                "image/jpeg" !== e.type &&
                                  "image/png" !== e.type)
                              )
                                return M("Please Select an Image");
                              var t = new FormData();
                              t.append("file", e),
                                t.append("upload_preset", "notemaker"),
                                t.append("cloud_name", "dh7awu1h4"),
                                fetch(
                                  "https://api.cloudinary.com/v1_1/dh7awu1h4/image/upload",
                                  { method: "post", body: t }
                                )
                                  .then(function(e) {
                                    return e.json();
                                  })
                                  .then(function(e) {
                                    b(e.url.toString()), console.log(g);
                                  })
                                  .catch(function(e) {
                                    console.log(e);
                                  });
                            })(e.target.files[0]);
                          },
                        }),
                        a.a.createElement(
                          "span",
                          { class: "text-primary" },
                          "Role"
                        ),
                        a.a.createElement(
                          h.a.Select,
                          {
                            className: "mb-4",
                            label: "Default select example",
                            onChange: function(e) {
                              F(e.target.value), console.log(e.target.value);
                            },
                          },
                          a.a.createElement(
                            "option",
                            { hidden: !0 },
                            N ? "Admin" : "User"
                          ),
                          a.a.createElement("option", { value: !0 }, "Admin"),
                          a.a.createElement("option", { value: !1 }, "User")
                        ),
                        z && a.a.createElement(U, { variant: "danger" }, z),
                        a.a.createElement(
                          I.a,
                          {
                            className: "mb-4 w-100",
                            onClick: function(e) {
                              var r;
                              e.preventDefault(),
                                Q(
                                  ((r = {
                                    id: t,
                                    name: i,
                                    email: f,
                                    password: x,
                                    pic: g,
                                    isAdmin: N,
                                  }),
                                  (function() {
                                    var e = Object(_.a)(
                                      mt().mark(function e(t, n) {
                                        var a, o, i, c, l, u;
                                        return mt().wrap(
                                          function(e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.prev = 0),
                                                    t(it()),
                                                    (a = n()),
                                                    (o = a.userLogin.userInfo),
                                                    (i = {
                                                      headers: {
                                                        "Content-Type":
                                                          "application/json",
                                                        Authorization: "Bearer ".concat(
                                                          o.token
                                                        ),
                                                      },
                                                    }),
                                                    (e.next = 6),
                                                    A.a.put(
                                                      "/api/admin/".concat(
                                                        r.id
                                                      ),
                                                      r,
                                                      i
                                                    )
                                                  );
                                                case 6:
                                                  (c = e.sent),
                                                    (l = c.data),
                                                    t(ct(l)),
                                                    (e.next = 15);
                                                  break;
                                                case 11:
                                                  (e.prev = 11),
                                                    (e.t0 = e.catch(0)),
                                                    (u =
                                                      e.t0.response &&
                                                      e.t0.response.data.message
                                                        ? e.t0.response.data
                                                            .message
                                                        : e.t0.message),
                                                    t(lt(u));
                                                case 15:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e,
                                          null,
                                          [[0, 11]]
                                        );
                                      })
                                    );
                                    return function(t, r) {
                                      return e.apply(this, arguments);
                                    };
                                  })())
                                );
                            },
                          },
                          "Update"
                        )
                      )
                    )
                  )
                ),
                a.a.createElement(
                  k.a,
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  },
                  a.a.createElement("img", {
                    src: g,
                    alt: i,
                    className: "profilePic",
                  })
                )
              )
            )
          );
        },
        Et = function() {
          var e = Object(n.useState)(""),
            t = Object(c.a)(e, 2),
            r = t[0],
            o = t[1],
            i = Object(n.useState)(""),
            l = Object(c.a)(i, 2),
            u = l[0],
            s = l[1],
            f = Object(n.useState)(!1),
            h = Object(c.a)(f, 2),
            p = h[0],
            v = h[1];
          return a.a.createElement(
            m.a,
            null,
            a.a.createElement(O, {
              setSearch: o,
              setUserSearch: s,
              setAdmin: v,
              admin: p,
            }),
            a.a.createElement(
              "main",
              null,
              a.a.createElement(
                d.c,
                null,
                a.a.createElement(d.a, {
                  path: "/",
                  element: a.a.createElement(ne, null),
                }),
                a.a.createElement(d.a, {
                  path: "login",
                  element: a.a.createElement(ee, null),
                }),
                a.a.createElement(d.a, {
                  path: "register",
                  element: a.a.createElement(re, null),
                }),
                a.a.createElement(d.a, {
                  path: "mynotes",
                  element: a.a.createElement(Te, { search: r }),
                }),
                a.a.createElement(d.a, {
                  path: "createnote",
                  element: a.a.createElement(De, null),
                }),
                a.a.createElement(d.a, {
                  path: "note/:id",
                  element: a.a.createElement(Be, null),
                }),
                a.a.createElement(d.a, {
                  path: "profile",
                  element: a.a.createElement(qe, null),
                }),
                a.a.createElement(d.a, {
                  path: "admin",
                  element: a.a.createElement(yt, {
                    userSearch: u,
                    setAdmin: v,
                  }),
                }),
                a.a.createElement(d.a, {
                  path: "admin/user/:id",
                  element: a.a.createElement(bt, { setAdmin: v }),
                })
              )
            ),
            a.a.createElement(N, null)
          );
        },
        wt =
          (r(184),
          function(e) {
            e &&
              e instanceof Function &&
              r
                .e(1)
                .then(r.bind(null, 205))
                .then(function(t) {
                  var r = t.getCLS,
                    n = t.getFID,
                    a = t.getFCP,
                    o = t.getLCP,
                    i = t.getTTFB;
                  r(e), n(e), a(e), o(e), i(e);
                });
          }),
        xt = r(86),
        Lt = Object(v.a)({
          reducer: {
            userLogin: b,
            userRegister: R,
            userUpdate: H,
            noteList: ce,
            noteCreate: pe,
            noteUpdate: be,
            noteDelete: Oe,
            adminUserList: Je,
            adminUserDelete: Ze,
            adminUserUpdate: at,
            adminUserBlock: st,
          },
          middleware: function(e) {
            return e().concat(xt.a);
          },
        });
      i.a
        .createRoot(document.getElementById("root"))
        .render(
          a.a.createElement(
            a.a.StrictMode,
            null,
            a.a.createElement(p.a, { store: Lt }, a.a.createElement(Et, null))
          )
        ),
        wt();
    },
  },
  [[136, 3, 2]],
]);
//# sourceMappingURL=main.2cb21d0c.chunk.js.map

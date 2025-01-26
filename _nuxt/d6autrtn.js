import {
  _ as W,
  g as F,
  h as k,
  m as ee,
  N as ce,
  o as h,
  c as b,
  a as d,
  q as G,
  s as i,
  r as f,
  n as Ae,
  i as A,
  S as B,
  b as C,
  y as T,
  a2 as oe,
  a3 as We,
  Y as tt,
  z as nt,
  O as Se,
  j as x,
  x as N,
  w as I,
  T as Q,
  e as ue,
  C as ot,
  L as st,
  t as se,
  F as xe,
  G as Oe,
  P as O,
  d as Y,
  W as at,
  J as lt,
  a4 as ae,
  a5 as rt,
  a6 as Z,
  V as De,
  a0 as fe,
  X as it,
  a7 as ct,
  a8 as pe,
  v as ut,
  p as Ne,
  f as Be,
  a9 as dt,
  aa as Te,
  k as R,
  ab as ft,
  D as be,
  ac as He,
  E as V,
  ad as L,
  H as pt,
  ae as _t,
  A as vt,
  R as mt,
  af as ht
} from "./hg3sa2hx.js";
const gt = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 29"
  },
  wt = {
    __name: "MenuHamburger",
    setup(t, {
      expose: o
    }) {
      let l;
      const n = F({
          line1: 0,
          line2: 0
        }),
        a = F({
          array: 0,
          offset: 0
        }),
        r = F({
          array: 0,
          offset: 0
        });
      let s, c, e = k.timeline({
        paused: !0
      });

      function u(m = 0) {
        return c == null || c.kill(), s = k.timeline(), s.fromTo(e, {
          progress: 0
        }, {
          progress: .5,
          duration: 1,
          ease: "power3.out"
        }, m), s
      }

      function v() {
        return s == null || s.kill(), c = k.timeline(), c.to(e, {
          progress: 1,
          duration: .5,
          ease: "power3.inOut"
        }), c
      }
      return ee(() => {
        l = document.querySelectorAll(".menu-hamburger-line"), n.line1 = Math.ceil(l[0].getTotalLength()), n.line2 = Math.ceil(l[1].getTotalLength()), e.fromTo(a, {
          array: n.line1,
          offset: n.line1 * 3
        }, {
          array: n.line1,
          offset: n.line1 * 2,
          duration: .5,
          ease: "power4.out"
        }, "start"), e.fromTo(r, {
          array: n.line2,
          offset: n.line2 * 3
        }, {
          array: n.line2,
          offset: n.line2 * 2,
          duration: .5,
          ease: "power4.out"
        }, "start+=0.2"), e.to(a, {
          array: n.line1,
          offset: n.line1,
          duration: .5,
          ease: "power4.out"
        }, "end"), e.to(r, {
          array: n.line2,
          offset: n.line2,
          duration: .5,
          ease: "power4.out"
        }, "end+=.2")
      }), ce(() => {
        s == null || s.kill(), c == null || c.kill(), e == null || e.kill()
      }), o({
        transitionIn: u,
        transitionOut: v
      }), (m, w) => (h(), b("svg", gt, [d("path", {
        class: "menu-hamburger-line path-line",
        d: "M0 17.2h28",
        style: G({
          "stroke-dasharray": i(a).array,
          "stroke-dashoffset": i(a).offset
        })
      }, null, 4), d("path", {
        class: "menu-hamburger-line path-line",
        d: "M0 11.2h28",
        style: G({
          "stroke-dasharray": i(r).array,
          "stroke-dashoffset": i(r).offset
        })
      }, null, 4)]))
    }
  },
  kt = W(wt, [
    ["__scopeId", "data-v-29280820"]
  ]),
  yt = {
    class: "w-full h-full"
  },
  xt = {
    __name: "MenuOpen",
    props: {
      altColor: {
        type: Boolean,
        default: !1
      }
    },
    setup(t) {
      const o = f(),
        l = f(!0);

      function n() {
        var r;
        (r = o.value) == null || r.transitionIn(.65)
      }

      function a() {
        var r;
        (r = o.value) == null || r.transitionOut()
      }
      return ee(async () => {
        await Ae(), n()
      }), A(B, r => {
        l.value = !r, r ? a() : n()
      }), (r, s) => {
        const c = kt;
        return h(), b("button", {
          class: T(["btn-menu", [t.altColor && "alt-color", i(l) ? "pointer-auto" : "pointer-none"]]),
          "aria-label": "Open menu",
          onClick: s[0] || (s[0] = e => B.value = !0)
        }, [d("span", yt, [C(c, {
          ref_key: "elIcon",
          ref: o
        }, null, 512)])], 2)
      }
    }
  },
  bt = W(xt, [
    ["__scopeId", "data-v-d012c227"]
  ]),
  Mt = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 29"
  },
  St = {
    __name: "MenuCross",
    setup(t, {
      expose: o
    }) {
      let l;
      const n = F({
          line1: 0,
          line2: 0
        }),
        a = F({
          array: 0,
          offset: 0
        }),
        r = F({
          array: 0,
          offset: 0
        });
      let s, c, e = k.timeline({
        paused: !0
      });

      function u(m = 0) {
        return c == null || c.kill(), s = k.timeline(), s.fromTo(e, {
          progress: 0
        }, {
          progress: .5,
          duration: 1,
          ease: "power3.out"
        }, m), s
      }

      function v() {
        return s == null || s.kill(), c = k.timeline(), c.to(e, {
          progress: 1,
          duration: .5,
          ease: "power3.inOut"
        }), c
      }
      return ee(() => {
        l = document.querySelectorAll(".menu-cross-line"), n.line1 = Math.ceil(l[0].getTotalLength()), n.line2 = Math.ceil(l[1].getTotalLength()), e.fromTo(a, {
          array: n.line1,
          offset: n.line1 * 3
        }, {
          array: n.line1,
          offset: n.line1 * 2,
          duration: .5,
          ease: "power4.out"
        }, "start"), e.fromTo(r, {
          array: n.line2,
          offset: n.line2 * 3
        }, {
          array: n.line2,
          offset: n.line2 * 2,
          duration: .5,
          ease: "power4.out"
        }, "start+=0.2"), e.to(a, {
          array: n.line1,
          offset: n.line1,
          duration: .5,
          ease: "power4.out"
        }, "end"), e.to(r, {
          array: n.line2,
          offset: n.line2,
          duration: .5,
          ease: "power4.out"
        }, "end+=.2")
      }), ce(() => {
        s == null || s.kill(), c == null || c.kill(), e == null || e.kill()
      }), o({
        transitionIn: u,
        transitionOut: v
      }), (m, w) => (h(), b("svg", Mt, [d("path", {
        class: "menu-cross-line path-line",
        d: "m4.1 4.1 19.8 19.8",
        style: G({
          "stroke-dasharray": i(a).array,
          "stroke-dashoffset": i(a).offset
        })
      }, null, 4), d("path", {
        class: "menu-cross-line path-line",
        d: "M23.9 4.1 4.1 23.9",
        style: G({
          "stroke-dasharray": i(r).array,
          "stroke-dashoffset": i(r).offset
        })
      }, null, 4)]))
    }
  },
  Tt = W(St, [
    ["__scopeId", "data-v-652f9def"]
  ]),
  $t = {
    class: "w-full h-full"
  },
  Ct = {
    __name: "MenuClose",
    props: {
      altColor: {
        type: Boolean,
        default: !1
      }
    },
    setup(t) {
      const o = f(),
        l = f(!1);

      function n() {
        var s;
        (s = o.value) == null || s.transitionIn(.65)
      }

      function a() {
        var s;
        (s = o.value) == null || s.transitionOut()
      }

      function r() {
        oe.value || (B.value = !1)
      }
      return A(B, s => {
        l.value = s, s ? n() : a()
      }), (s, c) => {
        const e = Tt;
        return h(), b("button", {
          class: T(["btn-menu", [t.altColor && "alt-color", i(l) ? "pointer-auto" : "pointer-none"]]),
          "aria-label": "Close menu",
          onClick: r
        }, [d("span", $t, [C(e, {
          ref_key: "elIcon",
          ref: o
        }, null, 512)])], 2)
      }
    }
  },
  Lt = W(Ct, [
    ["__scopeId", "data-v-6471b683"]
  ]),
  Et = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29">\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="m14 16.0828-5.75595-4.7703-.5961.7193L14 17.2961l6.3521-5.2643-.5961-.7193L14 16.0828Z" fill="currentColor"/>\r
</svg>`,
  $e = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">\r
  <path d="M10.4995 9.02498V6.5625h2.5011v2.46248h-2.5011ZM8.13783 3.40343c0 1.69065-1.56784 2.73813-3.73295 2.73813-.67193 0-1.28787-.09189-1.81048-.29403-.20531.12864-.33597.33078-.33597.58806 0 .36753.24265.60643.85858.60643h3.285c1.82914 0 2.76238.97396 2.76238 2.27871 0 2.02147-2.38909 2.86677-4.94616 2.86677C1.94113 12.1875 0 11.6178 0 10.1109c0-.82692.671931-1.41498 1.6425-1.54361C.895908 8.32839.503948 7.74033.503948 7.07877c0-.73507.522612-1.28637 1.325202-1.59877C1.11988 5.0022.690596 4.28551.690596 3.40343c0-1.72742 1.549174-2.774888 3.714284-2.774888 1.0079 0 1.94113.257274 2.61307.716688C7.48456.702048 8.30581.1875 9.20172.1875v1.76417c-.44795 0-.98923.0735-1.41852.22052.22398.34915.35463.77182.35463 1.23124ZM2.03446 9.78015c0 .73505.85858 1.06585 2.18377 1.06585 1.6425 0 2.83705-.3675 2.83705-1.15773 0-.53293-.44796-.73507-1.19455-.73507H3.11701c-.59727 0-1.08255.2389-1.08255.82695Zm3.82627-6.37672c0-.93722-.57861-1.43339-1.43718-1.43339-.83992 0-1.41853.49617-1.41853 1.43339 0 .93721.57861 1.43338 1.41853 1.43338.85857 0 1.43718-.49617 1.43718-1.43338Z" fill="currentColor"/>\r
</svg>`,
  Pt = {
    class: "header__container w-full h-full"
  },
  It = {
    class: "side-60"
  },
  At = {
    class: "header__content w-full h-full"
  },
  Wt = {
    class: "header__logo"
  },
  Ot = {
    class: "logo-link h-full"
  },
  Dt = ["innerHTML"],
  Nt = {
    key: 0,
    class: "header__border w-full"
  },
  Bt = {
    class: "header-photos__content h-full"
  },
  Ht = {
    class: "header-photos__btn-wrapper"
  },
  zt = {
    class: "header-photos__logo"
  },
  Rt = ["innerHTML"],
  Xt = {
    class: "header-photos__chapters"
  },
  Yt = ["innerHTML"],
  Ft = {
    __name: "SiteHeader",
    props: {
      light: {
        type: Boolean,
        default: !1
      }
    },
    setup(t) {
      const o = f(),
        {
          width: l,
          height: n
        } = We(o);

      function a() {
        Q.value = !Q.value
      }

      function r() {
        B.value = !1, Q.value = !1
      }
      return A([l, n], ([s, c]) => {
        tt.value = s || 0, nt.value = c || 0
      }, {
        immediate: !0
      }), (s, c) => {
        const e = bt,
          u = Lt,
          v = ue,
          m = ot;
        return t.light ? (h(), b("header", {
          key: 1,
          ref_key: "elWrapper",
          ref: o,
          class: "header-photos"
        }, [d("div", Bt, [d("div", Ht, [C(e, {
          class: "header-photos__btn-menu",
          "alt-color": !0
        }), C(u, {
          class: "header-photos__btn-menu-close",
          "alt-color": !0
        })]), d("div", zt, [C(v, {
          class: "logo-link w-full",
          to: "/",
          onClick: r,
          "aria-label": "homepage"
        }, {
          default: I(() => [d("span", {
            class: "logo",
            innerHTML: i($e)
          }, null, 8, Rt)]),
          _: 1
        })]), d("div", Xt, [C(m, {
          class: "btn-chapters c-black",
          underline: !1,
          split: !1,
          text: "All Chapters",
          onClick: a
        }, {
          default: I(() => [d("span", {
            class: T(["chevron", {
              active: i(Q)
            }]),
            innerHTML: i(Et)
          }, null, 10, Yt)]),
          _: 1
        })])])], 512)) : (h(), b("header", {
          key: 0,
          ref_key: "elWrapper",
          ref: o,
          class: T(["header w-full pointer-none", i(Se) && "alt-color"])
        }, [d("div", Pt, [d("div", It, [d("div", At, [d("div", Wt, [d("div", Ot, [d("div", {
          class: "logo",
          innerHTML: i($e)
        }, null, 8, Dt)])]), C(e, {
          "alt-color": i(Se)
        }, null, 8, ["alt-color"])])]), C(u, {
          class: "header__btn-close",
          close: ""
        }), i(x) ? (h(), b("div", Nt)) : N("", !0)])], 2))
      }
    }
  },
  Vn = W(Ft, [
    ["__scopeId", "data-v-3d9b291f"]
  ]),
  Ut = {
    class: "menu-list__title label-s"
  },
  Vt = {
    class: "menu-list"
  },
  Gt = ["onClick"],
  qt = {
    __name: "List",
    props: {
      title: {
        type: String,
        default: ""
      },
      array: {
        type: Array,
        default: []
      },
      isWork: {
        type: Boolean,
        default: !0
      },
      lightMode: {
        type: Boolean,
        default: !1
      }
    },
    setup(t, {
      expose: o
    }) {
      const l = f(),
        n = st();
      let a;

      function r(u = 0) {
        return a == null || a.kill(), a = k.timeline(), a.fromTo(l.value, {
          y: "110%"
        }, {
          y: "0%",
          duration: .85,
          ease: "power2.out"
        }, u), a.fromTo(n.value, {
          y: "110%"
        }, {
          y: "0%",
          stagger: .05,
          duration: .85,
          ease: "power2.out"
        }, u + .05), a
      }

      function s() {
        const u = k.timeline();
        return u.to(l.value, {
          y: "-110%",
          duration: .75,
          ease: "power2.out"
        }, 0), u.to(n.value, {
          y: "-110%",
          duration: .75,
          ease: "power3.out"
        }, 0), u
      }

      function c(u) {
        lt.value = u
      }

      function e() {
        k.delayedCall(.1, () => B.value = !1)
      }
      return o({
        transitionIn: r,
        transitionOut: s
      }), (u, v) => {
        const m = ue;
        return h(), b("div", {
          class: T(["menu-list__wrapper", {
            light: t.lightMode
          }])
        }, [d("p", Ut, [d("span", {
          ref_key: "elTitle",
          ref: l,
          class: "menu-list__title-line"
        }, se(t.title), 513)]), d("ul", Vt, [(h(!0), b(xe, null, Oe(t.array, (w, y) => (h(), b("li", {
          class: "menu-list__item p-s",
          key: y
        }, [d("div", {
          ref_for: !0,
          ref: i(n).set,
          class: "menu-list__item-container"
        }, [t.isWork ? (h(), b("button", {
          key: 0,
          class: "menu-list__item-link",
          onClick: p => c(y)
        }, se(w.title), 9, Gt)) : (h(), O(m, {
          key: 1,
          class: "menu-list__item-link",
          to: `/through-this-lens#${i(at)[y+1]}`,
          onClick: e
        }, {
          default: I(() => [Y(se(w.title), 1)]),
          _: 2
        }, 1032, ["to"]))], 512)]))), 128))])], 2)
      }
    }
  },
  Zt = W(qt, [
    ["__scopeId", "data-v-593996f7"]
  ]),
  jt = {
    __name: "WordSplitWrapper",
    props: {
      tag: {
        type: String,
        default: "span"
      },
      classes: {
        type: String,
        default: ""
      }
    },
    setup(t) {
      return (o, l) => (h(), O(rt(t.tag), {
        class: "split-wrapper"
      }, {
        default: I(() => [d("span", {
          class: T([t.classes, "split-element"])
        }, [ae(o.$slots, "default", {}, void 0, !0)], 2)]),
        _: 3
      }))
    }
  },
  ze = W(jt, [
    ["__scopeId", "data-v-32569075"]
  ]),
  Jt = {
    class: "nav-link__content"
  },
  Kt = {
    class: "nav-block"
  },
  Qt = {
    class: "nav-numbered nav-inline h2"
  },
  en = {
    class: "nav-inline h2"
  },
  tn = {
    __name: "LinkHome",
    props: {
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    setup(t, {
      expose: o
    }) {
      const l = f(),
        n = f(),
        a = f(),
        r = f();
      let s;

      function c(u = 0) {
        return s == null || s.kill(), s = k.timeline(), s.fromTo(".nav-text-line-home", {
          y: "110%"
        }, {
          y: "0%",
          stagger: .045,
          duration: .85,
          ease: "power2.out"
        }, u), x.value || (s.fromTo(r.value.$el, {
          "--offset": "1"
        }, {
          "--offset": "0",
          duration: 1.5,
          ease: "expo.out"
        }, u + 1), s.fromTo(a.value, {
          clipPath: "inset(0 100% 0 0)"
        }, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          ease: "expo.out"
        }, u + 1)), s.fromTo(n.value, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1.25,
          ease: "sine.inOut"
        }, u + 1), s
      }

      function e() {
        var u;
        (u = l.value) == null || u.transitionIn()
      }
      return o({
        transitionIn: c
      }), (u, v) => {
        const m = ze,
          w = De,
          y = ue;
        return h(), O(y, {
          class: T(["nav-link", {
            disabled: t.disabled
          }]),
          to: "/",
          onMouseenter: e
        }, {
          default: I(() => [d("div", Jt, [d("span", Kt, [d("span", Qt, [i(x) ? N("", !0) : (h(), O(m, {
            key: 0,
            classes: "nav-text-line-home"
          }, {
            default: I(() => [Y("Crafting Narrative")]),
            _: 1
          })), i(x) ? (h(), O(m, {
            key: 1,
            classes: "nav-text-line-home"
          }, {
            default: I(() => [Y("Crafting ")]),
            _: 1
          })) : N("", !0), i(x) ? (h(), O(m, {
            key: 2,
            classes: "nav-text-line-home"
          }, {
            default: I(() => [Y("Narrative")]),
            _: 1
          })) : N("", !0), d("span", {
            ref_key: "elNumber",
            ref: n,
            class: T(["nav-number p-s", i(Z) ? "c-grey" : "c-white-50"])
          }, "{01}", 2)]), d("span", en, [C(m, {
            classes: "nav-text-line-home"
          }, {
            default: I(() => [Y("Through")]),
            _: 1
          }), d("span", {
            ref_key: "elPhoto",
            ref: a,
            class: "nav-photo"
          }, null, 512), C(m, {
            ref_key: "elAlone",
            ref: r,
            class: "alone-word",
            classes: "nav-text-line-home"
          }, {
            default: I(() => [Y("Design")]),
            _: 1
          }, 512)])]), C(w, {
            ref_key: "elArrow",
            ref: l,
            class: "nav-arrow"
          }, null, 512)]), d("span", {
            class: T(["nav-border w-full", {
              "is-alt": i(Z)
            }])
          }, null, 2)]),
          _: 1
        }, 8, ["class"])
      }
    }
  },
  nn = W(tn, [
    ["__scopeId", "data-v-d7b7ed66"]
  ]),
  on = {
    class: "nav-link__content"
  },
  sn = {
    class: "nav-block"
  },
  an = {
    class: "nav-numbered nav-inline h2"
  },
  ln = {
    __name: "LinkPhoto",
    props: {
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    setup(t, {
      expose: o
    }) {
      const l = f(),
        n = f(),
        a = f(),
        r = f();
      let s;

      function c(u = 0) {
        return s == null || s.kill(), s = k.timeline(), s.fromTo(".nav-text-line-photo", {
          y: "110%"
        }, {
          y: "0%",
          stagger: .045,
          duration: .85,
          ease: "power2.out"
        }, u), x.value || (s.fromTo(r.value.$el, {
          "--offset": "1"
        }, {
          "--offset": "0",
          duration: 1.5,
          ease: "expo.out"
        }, u + 1), s.fromTo(a.value, {
          clipPath: "inset(0 100% 0 0)"
        }, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          ease: "expo.out"
        }, u + 1)), s.fromTo(n.value, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1.25,
          ease: "sine.inOut"
        }, u + 1), s
      }

      function e() {
        var u;
        (u = l.value) == null || u.transitionIn()
      }
      return o({
        transitionIn: c
      }), (u, v) => {
        const m = ze,
          w = De,
          y = ue;
        return h(), O(y, {
          class: T(["nav-link", {
            disabled: t.disabled
          }]),
          to: "/through-this-lens",
          onMouseenter: e
        }, {
          default: I(() => [d("div", on, [d("span", sn, [d("span", an, [C(m, {
            classes: "nav-text-line-photo"
          }, {
            default: I(() => [Y("The World")]),
            _: 1
          }), d("span", {
            ref_key: "elPhoto",
            ref: a,
            class: "nav-photo"
          }, null, 512), C(m, {
            ref_key: "elAlone",
            ref: r,
            class: "alone-word",
            classes: "nav-text-line-photo"
          }, {
            default: I(() => [Y("Unfold")]),
            _: 1
          }, 512), d("span", {
            ref_key: "elNumber",
            ref: n,
            class: T(["nav-number p-s", i(Z) ? "c-grey" : "c-white-50"])
          }, "{02}", 2)])]), C(w, {
            ref_key: "elArrow",
            ref: l,
            class: "nav-arrow"
          }, null, 512)]), d("span", {
            class: T(["nav-border w-full", {
              "is-alt": i(Z)
            }])
          }, null, 2)]),
          _: 1
        }, 8, ["class"])
      }
    }
  },
  rn = W(ln, [
    ["__scopeId", "data-v-3b68e149"]
  ]),
  cn = t => (Ne("data-v-0ee5a469"), t = t(), Be(), t),
  un = cn(() => d("div", {
    class: "menu__bg w-full h-full"
  }, null, -1)),
  dn = {
    key: 0,
    class: "menu__border w-full"
  },
  fn = {
    class: "nav-list"
  },
  pn = {
    class: "nav-list__item"
  },
  _n = {
    class: "nav-list__item"
  },
  vn = {
    class: "menu-secondary"
  },
  mn = {
    class: "socials"
  },
  hn = ["href"],
  gn = {
    __name: "Modal",
    props: {
      light: {
        type: Boolean,
        default: !1
      }
    },
    setup(t) {
      var K, q;
      const o = ut.menu.social,
        l = (K = pe) == null ? void 0 : K.length,
        n = (q = fe) == null ? void 0 : q.length,
        a = f(!1),
        r = f(),
        s = f(),
        c = f(),
        e = f(),
        u = f(),
        v = f(),
        m = f(),
        w = f(),
        y = it();
      let p, g;

      function M() {
        var $, S, H, E;
        g == null || g.kill(), p == null || p.kill(), p = k.timeline({
          onStart: () => oe.value = !0
        }), !x.value && p.to("#scroll-wrapper", {
          y: "-30svh",
          duration: 1.6,
          overwrite: !0,
          ease: "power1.in"
        }, 0), p.fromTo(s.value, {
          clipPath: "inset(100% 0 0)"
        }, {
          clipPath: "inset(0% 0 0)",
          duration: 1.2,
          overwrite: !0,
          ease: "expo.inOut"
        }, 0), p.to({}, {
          duration: .01,
          onComplete: () => oe.value = !1
        }, 1.2), p.add(($ = e.value) == null ? void 0 : $.transitionIn(.6), 0), p.add((S = u.value) == null ? void 0 : S.transitionIn(.6), 0), p.add((H = v.value) == null ? void 0 : H.transitionIn(.6), 0), p.add((E = m.value) == null ? void 0 : E.transitionIn(.8), 0), p.fromTo(".socials__item", {
          opacity: 0
        }, {
          opacity: 1,
          stagger: .04,
          duration: .85,
          ease: "power2.out"
        }, 1)
      }

      function X($) {
        w.value = $
      }

      function j() {
        w.value = null
      }

      function te() {
        var $, S;
        g == null || g.kill(), g = k.timeline({
          onStart: () => oe.value = !1,
          onComplete: () => r.value = !1
        }), !x.value && g.to("#scroll-wrapper", {
          y: 0,
          overwrite: !0,
          duration: .01,
          onComplete: () => {
            k.set("#scroll-wrapper", {
              clearProps: "all"
            })
          }
        }, 0), g.to(s.value, {
          clipPath: "inset(0% 0 105%)",
          duration: 1.2,
          ease: "expo.inOut"
        }, 0), g.add(($ = v.value) == null ? void 0 : $.transitionOut, 0), g.add((S = m.value) == null ? void 0 : S.transitionOut, 0), p.to(".socials__item", {
          opacity: 0,
          duration: 1,
          overwrite: !0,
          ease: "sine.inOut"
        }, 0)
      }

      function J($) {
        $ === y.name && (B.value = !1)
      }
      return A(B, $ => {
        a.value && ($ ? (x.value && k.to(c.value, {
          duration: .01,
          scrollTo: {
            y: 0
          }
        }), r.value = !0, M()) : te())
      }), A(Q, $ => $ && (B.value = !1)), ct(() => {
        B.value = !1
      }), ee(() => {
        k.delayedCall(.1, () => a.value = !0)
      }), ($, S) => {
        const H = Zt;
        return h(), b("div", {
          ref_key: "elContent",
          ref: s,
          class: T(["menu w-full h-full", {
            visible: i(r),
            light: t.light
          }])
        }, [un, t.light ? N("", !0) : (h(), b("div", dn)), d("div", {
          ref_key: "elWrapper",
          ref: c,
          class: "menu__wrapper w-full"
        }, [d("nav", null, [d("ul", fn, [d("li", pn, [C(nn, {
          ref_key: "elLinkHome",
          ref: e,
          disabled: i(w) && i(w) === "photo",
          onMouseenter: S[0] || (S[0] = E => X("home")),
          onMouseleave: j,
          onClick: S[1] || (S[1] = E => J("index"))
        }, null, 8, ["disabled"]), i(x) ? (h(), O(H, {
          key: 0,
          ref_key: "elListOne",
          ref: v,
          array: i(pe),
          title: `PROJECTS (${i(l).toString().padStart(2,"0")})`,
          isWork: !0,
          lightMode: t.light
        }, null, 8, ["array", "title", "lightMode"])) : N("", !0)]), d("li", _n, [C(rn, {
          ref_key: "elLinkPhoto",
          ref: u,
          disabled: i(w) && i(w) === "home",
          onMouseenter: S[2] || (S[2] = E => X("photo")),
          onMouseleave: j,
          onClick: S[3] || (S[3] = E => J("through-this-lens"))
        }, null, 8, ["disabled"]), i(x) ? (h(), O(H, {
          key: 0,
          ref_key: "elListTwo",
          ref: m,
          array: i(fe),
          title: `CHAPTERS (${i(n).toString().padStart(2,"0")})`,
          isWork: !1,
          lightMode: t.light
        }, null, 8, ["array", "title", "lightMode"])) : N("", !0)])])]), d("div", vn, [i(x) ? N("", !0) : (h(), O(H, {
          key: 0,
          ref_key: "elListOne",
          ref: v,
          array: i(pe),
          title: `PROJECTS (${i(l).toString().padStart(2,"0")})`,
          isWork: !0,
          lightMode: t.light
        }, null, 8, ["array", "title", "lightMode"])), i(x) ? N("", !0) : (h(), O(H, {
          key: 1,
          ref_key: "elListTwo",
          ref: m,
          array: i(fe),
          title: `CHAPTERS (${i(n).toString().padStart(2,"0")})`,
          isWork: !1,
          lightMode: t.light
        }, null, 8, ["array", "title", "lightMode"])), d("ul", mn, [(h(!0), b(xe, null, Oe(i(o), E => (h(), b("li", {
          class: "socials__item p-s",
          key: E.label
        }, [d("a", {
          class: "socials__item-link",
          href: E.url,
          target: "_blank"
        }, se(E.label), 9, hn)]))), 128))])])], 512)], 2)
      }
    }
  },
  Gn = W(gn, [
    ["__scopeId", "data-v-0ee5a469"]
  ]);

function wn(t, o = {}) {
  const {
    reset: l = !0,
    windowResize: n = !0,
    windowScroll: a = !1,
    immediate: r = !0
  } = o, s = f(0), c = f(0), e = f(0), u = f(0), v = f(0), m = f(0), w = f(0), y = f(0);

  function p() {
    const g = Te(t);
    if (!g) {
      l && (s.value = 0, c.value = 0, e.value = 0, u.value = 0, v.value = 0, m.value = 0, w.value = 0, y.value = 0);
      return
    }
    const M = g.getBoundingClientRect();
    s.value = M.height, c.value = M.bottom, e.value = M.left, u.value = M.right, v.value = M.top, m.value = M.width, w.value = M.x, y.value = M.y
  }
  return dt(t, p), A(() => Te(t), g => !g && p()), a && R("scroll", p, {
    capture: !0,
    passive: !0
  }), n && R("resize", p, {
    passive: !0
  }), ft(() => {
    r && p()
  }), {
    height: s,
    bottom: c,
    left: e,
    right: u,
    top: v,
    width: m,
    x: w,
    y,
    update: p
  }
}

function qn(t) {
  const o = be("scroller"),
    l = f(0),
    n = f(0),
    a = f(0),
    r = f(!1),
    {
      width: s,
      height: c
    } = He(),
    {
      width: e,
      height: u,
      top: v,
      left: m
    } = wn(t, {
      windowResize: !1
    }),
    w = V(() => L.value ? c.value : s.value),
    y = V(() => L.value ? u.value : e.value),
    p = V(() => L.value ? v.value : m.value);
  return A(p, g => {
    l.value = g + o.state.scroll.target
  }, {
    immediate: !0
  }), A([() => o.state.scroll.current, () => o.state.sizes.w, () => o.state.sizes.h], ([g, M, X]) => {
    a.value = -g + l.value, r.value = a.value < w.value && a.value >= -y.value, r.value && (n.value = (.5 - k.utils.normalize(-y.value, w.value, a.value)) * 2)
  }), {
    visible: r,
    startPos: l,
    scrollValue: a,
    windowSize: w,
    wrappperSize: y,
    progress: n
  }
}
const kn = ["src"],
  yn = {
    __name: "TextHighlightPhoto",
    props: {
      text: String,
      tag: String || "p",
      classes: String,
      noBreaks: Boolean,
      imageSrc: String
    },
    setup(t) {
      const o = t,
        l = be("scroller"),
        n = f(),
        a = f(!1),
        r = F({
          x: 0,
          y: 0
        }),
        s = V(() => o.text.includes("hint-underline") && o.imageSrc),
        c = V(() => {
          var p;
          return (p = pt(o.imageSrc)) == null ? void 0 : p.src
        }),
        e = k.quickTo(r, "x", {
          duration: 1,
          ease: "power2"
        }),
        u = k.quickTo(r, "y", {
          duration: 1,
          ease: "power2"
        });
      let v;

      function m(p) {
        const {
          clientX: g,
          clientY: M
        } = p;
        r.x = g, r.y = M, a.value = !0
      }

      function w(p) {
        const {
          clientX: g,
          clientY: M
        } = p;
        e(g, r.x), u(M, r.y)
      }

      function y() {
        a.value = !1
      }
      return A(() => l.state.scroll.target, (p, g) => {
        p !== g && y()
      }), ee(async () => {
        await Ae(), v = n.value.querySelector(".hint-underline"), v.addEventListener("mouseenter", m), n.value.addEventListener("mousemove", w), v.addEventListener("mouseleave", y)
      }), ce(() => {
        var p;
        v == null || v.removeEventListener("mouseenter", m), (p = n.value) == null || p.removeEventListener("mousemove", w), v == null || v.removeEventListener("mouseleave", y)
      }), (p, g) => {
        const M = vt;
        return h(), b("div", {
          ref_key: "elWrapper",
          ref: n,
          class: "text-highlight"
        }, [C(M, {
          class: T(t.classes),
          text: t.text,
          tag: t.tag,
          "no-breaks": t.noBreaks
        }, null, 8, ["class", "text", "tag", "no-breaks"]), (h(), O(_t, {
          to: "#highlight-container"
        }, [i(s) && !i(x) ? (h(), b("div", {
          key: 0,
          class: "text-image__wrapper",
          style: G({
            transform: `translate3d(${i(r).x}px, ${i(r).y}px, 0)`
          })
        }, [d("div", {
          class: T(["text-image__container", {
            visible: i(a)
          }])
        }, [d("img", {
          class: "text-image",
          src: i(c),
          role: "presentation",
          alt: "",
          draggable: "false"
        }, null, 8, kn)], 2)], 4)) : N("", !0)]))], 512)
      }
    }
  },
  Zn = W(yn, [
    ["__scopeId", "data-v-a84c1dea"]
  ]),
  xn = t => (Ne("data-v-570c41ee"), t = t(), Be(), t),
  bn = xn(() => d("p", {
    class: "scroll-hint hint-up p-s c-white-50"
  }, "Scroll Up", -1)),
  Mn = {
    class: "progress-wrapper progress-right"
  },
  Sn = {
    key: 1,
    class: "photos-progress h-full"
  },
  Tn = {
    class: "progress-single__wrapper"
  },
  $n = {
    __name: "ProgressBars",
    setup(t) {
      const o = be("scroller"),
        l = f(!1),
        n = A(() => o.state.scroll.progress, a => {
          a > .005 && (l.value = !0, n())
        });
      return (a, r) => (h(), b("div", {
        class: T(["progresses w-fulls h-fulls", i(Z) ? "is-photo" : "is-home"])
      }, [i(Z) ? (h(), b("div", Sn, [d("div", Tn, [d("div", {
        class: "progress-single",
        style: G({
          transform: `scaleX(${i(o).state.scroll.progress})`
        })
      }, null, 4)])])) : (h(), b("div", {
        key: 0,
        class: T(["home-progress h-full", {
          scrolled: i(l)
        }])
      }, [bn, d("p", {
        class: T(["scroll-hint hint-down p-s c-white-50", {
          scrolled: i(l)
        }])
      }, "Scroll Down", 2), d("div", Mn, [d("div", {
        class: "progress",
        style: G({
          transform: `scaleY(${i(o).state.scroll.progress})`
        })
      }, null, 4)])], 2))], 2))
    }
  },
  jn = W($n, [
    ["__scopeId", "data-v-570c41ee"]
  ]);

function Cn(t, {
  immediate: o = !0,
  prioritize: l = !1,
  fps: n = 60
} = {}) {
  if (typeof t != "function") throw new Error("[useTicker] Tick function must be passed as a parameter");
  const a = f(!!o),
    r = u => a.value = u !== void 0 ? u : !a.value;

  function s(u, v) {
    a.value && t({
      time: u,
      deltaTime: v,
      rafDamp: k.ticker.deltaRatio(n)
    })
  }

  function c() {
    k.ticker.add(s, !1, l)
  }

  function e() {
    k.ticker.remove(s)
  }
  return A(a, u => u ? c() : e(), {
    immediate: !0
  }), ce(e), {
    active: a,
    activate: () => r(!0),
    dispose: e,
    toggle: r
  }
}

function Ln(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Ce = !1,
  U, _e, ve, le, re, Re, ie, me, he, ge, Xe, we, ke, Ye, Fe;

function P() {
  if (!Ce) {
    Ce = !0;
    var t = navigator.userAgent,
      o = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),
      l = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
    if (we = /\b(iPhone|iP[ao]d)/.exec(t), ke = /\b(iP[ao]d)/.exec(t), ge = /Android/i.exec(t), Ye = /FBAN\/\w+;/i.exec(t), Fe = /Mobile/i.exec(t), Xe = !!/Win64/.exec(t), o) {
      U = o[1] ? parseFloat(o[1]) : o[5] ? parseFloat(o[5]) : NaN, U && document && document.documentMode && (U = document.documentMode);
      var n = /(?:Trident\/(\d+.\d+))/.exec(t);
      Re = n ? parseFloat(n[1]) + 4 : U, _e = o[2] ? parseFloat(o[2]) : NaN, ve = o[3] ? parseFloat(o[3]) : NaN, le = o[4] ? parseFloat(o[4]) : NaN, le ? (o = /(?:Chrome\/(\d+\.\d+))/.exec(t), re = o && o[1] ? parseFloat(o[1]) : NaN) : re = NaN
    } else U = _e = ve = re = le = NaN;
    if (l) {
      if (l[1]) {
        var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
        ie = a ? parseFloat(a[1].replace("_", ".")) : !0
      } else ie = !1;
      me = !!l[2], he = !!l[3]
    } else ie = me = he = !1
  }
}
var ye = {
    ie: function () {
      return P() || U
    },
    ieCompatibilityMode: function () {
      return P() || Re > U
    },
    ie64: function () {
      return ye.ie() && Xe
    },
    firefox: function () {
      return P() || _e
    },
    opera: function () {
      return P() || ve
    },
    webkit: function () {
      return P() || le
    },
    safari: function () {
      return ye.webkit()
    },
    chrome: function () {
      return P() || re
    },
    windows: function () {
      return P() || me
    },
    osx: function () {
      return P() || ie
    },
    linux: function () {
      return P() || he
    },
    iphone: function () {
      return P() || we
    },
    mobile: function () {
      return P() || we || ke || ge || Fe
    },
    nativeApp: function () {
      return P() || Ye
    },
    android: function () {
      return P() || ge
    },
    ipad: function () {
      return P() || ke
    }
  },
  En = ye,
  ne = !!(typeof window < "u" && window.document && window.document.createElement),
  Pn = {
    canUseDOM: ne,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: ne && !!(window.addEventListener || window.attachEvent),
    canUseViewport: ne && !!window.screen,
    isInWorker: !ne
  },
  In = Pn,
  Ue = In,
  Ve;
Ue.canUseDOM && (Ve = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function An(t, o) {
  if (!Ue.canUseDOM || o && !("addEventListener" in document)) return !1;
  var l = "on" + t,
    n = l in document;
  if (!n) {
    var a = document.createElement("div");
    a.setAttribute(l, "return;"), n = typeof a[l] == "function"
  }
  return !n && Ve && t === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
}
var Wn = An,
  On = En,
  Dn = Wn,
  Le = 10,
  Ee = 40,
  Pe = 800;

function Ge(t) {
  var o = 0,
    l = 0,
    n = 0,
    a = 0;
  return "detail" in t && (l = t.detail), "wheelDelta" in t && (l = -t.wheelDelta / 120), "wheelDeltaY" in t && (l = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (o = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (o = l, l = 0), n = o * Le, a = l * Le, "deltaY" in t && (a = t.deltaY), "deltaX" in t && (n = t.deltaX), (n || a) && t.deltaMode && (t.deltaMode == 1 ? (n *= Ee, a *= Ee) : (n *= Pe, a *= Pe)), n && !o && (o = n < 1 ? -1 : 1), a && !l && (l = a < 1 ? -1 : 1), {
    spinX: o,
    spinY: l,
    pixelX: n,
    pixelY: a
  }
}
Ge.getEventType = function () {
  return On.firefox() ? "DOMMouseScroll" : Dn("wheel") ? "wheel" : "mousewheel"
};
var Nn = Ge,
  Bn = Nn;
const Hn = Ln(Bn);

function Ie(t, o, l) {
  const n = t > 0 ? 1 : -1,
    a = k.utils.clamp(0, 1, Math.abs(t / 100)),
    r = Math.abs(t) >= 100 ? o : l;
  return {
    delta: n * a * r,
    direction: n
  }
}

function zn(t, o = .02, l = .04) {
  const {
    pixelX: n,
    pixelY: a
  } = Hn(t), {
    delta: r,
    direction: s
  } = Ie(n, o, l), {
    delta: c,
    direction: e
  } = Ie(a, o, l);
  return {
    deltaX: r,
    deltaY: c,
    directionX: s,
    directionY: e,
    event: t
  }
}
const Rn = (t, o, l) => (1 - l) * t + l * o,
  Xn = (t, o, l, n = 1) => Rn(t, o, 1 - Math.exp(Math.log(1 - l) * n)),
  Yn = t => Math.round(t * 100) / 100,
  Fn = {
    __name: "ScrollerWrapper",
    props: {
      active: {
        type: Boolean,
        default: !0
      }
    },
    setup(t, {
      expose: o
    }) {
      const l = t,
        n = f(),
        a = f(),
        r = f(),
        s = f(!1),
        c = f(!1),
        e = F({
          scroll: {
            position: 0,
            target: 0,
            current: 0,
            currentR: 0,
            ease: .09,
            progress: 0,
            direction: "",
            deltaInertial: !1
          },
          mouse: {
            start: 0,
            target: 0,
            strength: 2
          },
          bounds: {
            min: 0,
            max: 0
          },
          sizes: {
            w: 0,
            h: 0
          },
          isScrolling: !1,
          isScrollingTo: !1,
          isPointerDown: !1
        }),
        {
          width: u,
          height: v
        } = We(n),
        {
          width: m,
          height: w
        } = He(),
        {
          toggle: y
        } = Cn(et, {
          immediate: !1
        }),
        p = V(() => L.value ? v.value : u.value),
        g = V(() => L.value ? w.value : m.value);
      let M;
      const X = k.timeline({
        pause: !0,
        onStart: () => {
          e.isScrollingTo = !0
        },
        onComplete: () => {
          e.isScrollingTo = !1
        }
      });

      function j() {
        c.value = !0
      }

      function te() {
        c.value = !1
      }

      function J(_ = 0) {
        e.scroll.position = _, e.scroll.target = _, e.scroll.current = _, e.scroll.progress = _ % e.bounds.max / e.bounds.max
      }

      function K() {
        clearTimeout(M), M = setTimeout(() => {
          e.isScrolling = !1, s.value = !1
        }, 250), e.isScrolling = !0
      }

      function q() {
        e.isScrollingTo && (X.kill(), e.isScrollingTo = !1)
      }

      function $(_ = 0, D = !1) {
        if (D) {
          J(_);
          return
        }
        const z = k.utils.clamp(0, 1.3, k.utils.mapRange(0, 5e3, .1, .9, Math.abs(e.scroll.current - _)));
        X.clear(), X.to(e.scroll, {
          target: _,
          duration: z,
          ease: "sine.inOut"
        }, 0), X.play(0), !L.value && S()
      }

      function S() {
        e.scroll.target = k.utils.clamp(0, e.bounds.max, e.scroll.target)
      }

      function H() {
        const _ = e.scroll.current < 0;
        if (_ || e.scroll.current > e.bounds.max) {
          const D = _ ? 1 : -1,
            z = e.bounds.max * D;
          e.scroll.position += z, e.scroll.current += z, e.scroll.target += z
        }
      }

      function E(_ = 1) {
        L.value && H(), x.value || (e.scroll.current = Xn(e.scroll.current, e.scroll.target, e.scroll.ease, _)), e.scroll.currentR = Math.round(e.scroll.current * 100) / 100, e.scroll.direction = e.scroll.target < e.scroll.current ? "backward" : "forward", e.scroll.progress = e.scroll.current > e.bounds.max ? 0 : e.scroll.current % e.bounds.max / e.bounds.max, e.isScrolling && (s.value = !0), !(!n.value || x.value) && (n.value.style.transform = L.value ? de(0, -e.scroll.current) : de(-e.scroll.current, 0))
      }

      function de(_ = 0, D = 0) {
        return `translate3d(${_}px, ${D}px, 0)`
      }

      function qe() {
        x.value && (e.scroll.target = e.scroll.current = window.scrollY)
      }

      function Ze(_) {
        if (x.value || c.value) return;
        q(), K();
        const {
          deltaY: D
        } = zn(_, .1, .06);
        e.scroll.deltaInertial = Math.abs(D) < .045, e.scroll.target += D * 800, !L.value && S()
      }

      function je(_) {
        if (!(x.value || c.value)) {
          switch (q(), _.key) {
            case "ArrowDown":
            case "ArrowRight":
              e.scroll.target += 200;
              break;
            case "ArrowUp":
            case "ArrowLeft":
              e.scroll.target -= 200;
              break;
            case " ":
              e.scroll.target += 300;
              break;
            default:
              return
          }!L.value && S()
        }
      }

      function Je(_) {
        x.value || c.value || (_.preventDefault(), q(), e.isPointerDown = !0, e.scroll.position = e.scroll.current, e.mouse.start = L.value ? _.pageY : _.pageX, e.scroll.deltaInertial = !1)
      }

      function Ke(_) {
        if (x.value || c.value || !e.isPointerDown) return;
        K();
        const z = (L.value ? _.pageY : _.pageX) - e.mouse.start;
        e.mouse.target = z, e.scroll.target = e.scroll.position - e.mouse.target * e.mouse.strength, !L.value && S()
      }

      function Me() {
        x.value || c.value || (e.isPointerDown = !1)
      }

      function Qe() {
        const _ = n.value && p.value || g.value;
        e.bounds.max = _ - g.value, e.sizes.w = u.value, e.sizes.h = v.value, E(), !L.value && S()
      }

      function et({
        time: _,
        deltaTime: D,
        rafDamp: z
      }) {
        c.value || e.scroll.currentR === Yn(e.scroll.target) || E(z)
      }
      return mt([u, v], Qe, {
        debounce: 200,
        immediate: !0
      }), A(x, _ => {
        _ && (J(), n.value.style.transform = de())
      }), A(() => l.active, _ => {
        y(_), c.value = !_
      }, {
        immediate: !0
      }), R(document, "wheel", Ze), R(document, "scroll", qe), R(document, "pointerdown", Je), R(document, "pointermove", Ke), R(document, "pointerup", Me), R(document, "pointerleave", Me), R(document, "keydown", je), ht("scroller", {
        state: e,
        calculateScroll: E,
        play: te,
        pause: j,
        scrollTo: $
      }), o({
        elMain: a,
        play: te,
        pause: j,
        scrollTo: $
      }), (_, D) => (h(), b(xe, null, [ae(_.$slots, "external-pre", {}, void 0, !0), d("div", {
        ref_key: "elMain",
        ref: a,
        id: "scroll-wrapper"
      }, [d("div", {
        ref_key: "elWrapper",
        ref: n,
        class: T(["wrapper", {
          horizontal: !i(L)
        }])
      }, [ae(_.$slots, "default", {}, void 0, !0)], 2)], 512), ae(_.$slots, "external", {}, void 0, !0), d("div", {
        ref_key: "elPointer",
        ref: r,
        class: T(["pointer-blocker", {
          blocking: i(s)
        }])
      }, null, 2)], 64))
    }
  },
  Jn = W(Fn, [
    ["__scopeId", "data-v-de2baff1"]
  ]);
export {
  Zn as _, qn as a, Jn as b, Vn as c, Gn as d, jn as e, wn as u
};
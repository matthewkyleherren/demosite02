import {
  u as U,
  a as j,
  _ as $t,
  b as St,
  c as It,
  d as Rt,
  e as Mt
} from "./d6autrtn.js";
import {
  r,
  g as Pt,
  h as M,
  i as C,
  j as H,
  k as Tt,
  _ as O,
  l as R,
  m as Bt,
  n as Ct,
  o,
  c as a,
  a as t,
  q as z,
  s as e,
  t as I,
  v as m,
  b as _,
  x as Q,
  y as X,
  z as dt,
  A as ht,
  B as Ht,
  C as Lt,
  p as mt,
  f as ft,
  D as Vt,
  E,
  F as N,
  G as D,
  H as Y,
  I as tt,
  J as gt,
  K as et,
  L as Wt,
  M as At,
  N as Ft,
  O as pt,
  P as q,
  Q as Nt,
  R as Dt,
  w as Z,
  S as zt,
  T as Ot
} from "./hg3sa2hx.js";

function vt(u, {
  strengthX: i = 1,
  strengthY: g = 1
} = {}) {
  const p = r(!0),
    n = Pt({
      x: 0,
      y: 0
    }),
    {
      left: l,
      width: s,
      height: f
    } = U(u),
    v = M.quickTo(n, "x", {
      duration: 1,
      ease: "power2"
    }),
    c = M.quickTo(n, "y", {
      duration: 1,
      ease: "power2"
    });

  function y(k) {
    if (H.value || !p.value) return;
    const {
      clientX: T,
      clientY: x
    } = k, B = M.utils.clamp(-1, 1, M.utils.mapRange(l.value, l.value + s.value, -1, 1, T)) * i, L = M.utils.mapRange(0, f.value, -1, 1, x) * g;
    v(B), c(L)
  }

  function b() {
    v(0), c(0)
  }
  return C(() => H, k => {
    k && b()
  }), C(p, k => {
    !k && b()
  }), Tt(window, "mousemove", y), {
    active: p,
    coords: n
  }
}
const Gt = "" + new URL("home-portrait.j9fpcm8e.webp",
    import.meta.url).href,
  Et = "" + new URL("paper-texture.pb017xqv.webp",
    import.meta.url).href,
  yt = "" + new URL("home-photo-portrait.ldrh2r75.webp",
    import.meta.url).href,
  Ut = "" + new URL("home-bali.i3on8xff.webp",
    import.meta.url).href,
  ot = u => (mt("data-v-c3caac25"), u = u(), ft(), u),
  jt = ot(() => t("div", {
    class: "paper-decor"
  }, [t("img", {
    class: "img-full",
    src: Et,
    alt: "paper texture"
  })], -1)),
  qt = ot(() => t("div", {
    class: "intro-left__content-info"
  }, [t("p", {
    class: "p-s c-black-50"
  }, "Gianluca Gradogna"), t("p", {
    class: "p-s c-black-50"
  }, "Based in Italy")], -1)),
  Xt = {
    class: "intro-left__content-pretitle p-s c-black-50"
  },
  Yt = {
    class: "intro-left__content-title"
  },
  Jt = ot(() => t("p", {
    class: "intro-left__content-title-num label-s c-black"
  }, "{ 1* }", -1)),
  Kt = {
    class: "intro-left__footer contained"
  },
  Zt = {
    key: 0,
    class: "intro-right h-fulls side-40"
  },
  Qt = ["src"],
  te = {
    class: "intro-right__header"
  },
  ee = {
    class: "intro-right__content"
  },
  oe = {
    class: "intro-right__content-center"
  },
  se = ["src"],
  ne = {
    class: "intro-right__footer"
  },
  le = {
    __name: "Intro",
    props: {
      introVisible: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["visible"],
    setup(u, {
      emit: i
    }) {
      const g = u,
        p = i,
        n = R("elPortrait"),
        l = R("elIntroLeftContent"),
        s = R("elFooterNumber"),
        f = R("elFooterCopy"),
        v = R("elFooterScroll"),
        c = R("elMagnet"),
        y = R("elBg"),
        b = R("elImgPre"),
        k = R("elImgTitle"),
        T = R("elPicture"),
        x = R("elRightNumberTop"),
        B = R("elRightNumberBottom"),
        L = R("elRightTitleTop"),
        w = R("elRightTitleLeft"),
        W = R("elRightTitleRight"),
        d = R("elRightFooter"),
        P = R("elBtnExplore"),
        A = r(),
        V = r(0),
        $ = r(0),
        {
          visible: S,
          progress: G
        } = j(A),
        {
          active: J,
          coords: st
        } = vt(c, {
          strengthX: -10,
          strengthY: -10
        });

      function kt() {
        const h = M.timeline();
        h.from(n.value, {
          scale: 1.3,
          duration: 3.6,
          ease: "expo.inOut"
        }, -.5), y.value && h.from(y.value, {
          scale: 1.3,
          duration: 3.6,
          ease: "expo.inOut"
        }, -.5), h.from(l.value, {
          y: "100vh",
          duration: 2.7,
          ease: "expo.inOut"
        }, .5);
        const K = H.value ? 1.75 : 1.3;
        h.add(s.value.transitionIn(K), 0), h.add(f.value.transitionIn(K), 0), v.value && h.from(v.value, {
          opacity: 0,
          duration: 1,
          ease: "sine.inOut"
        }, 2.5), b.value && (h.add(b.value.transitionIn(.9), 0), h.add(k.value.transitionIn(.9), 0), h.add(x.value.transitionIn(.9), 0), h.add(L.value.transitionIn(.9), 0), h.add(w.value.transitionIn(.9), 0), h.add(W.value.transitionIn(.9), 0), h.fromTo(T.value, {
          clipPath: "inset(100% 0 0)"
        }, {
          clipPath: "inset(0% 0 0)",
          duration: 2,
          ease: "expo.inOut"
        }, 1.2), h.add(B.value.transitionIn(1.25), 0), h.add(d.value.transitionIn(1.25), 0), h.add(P.value.transitionIn(.9), 0))
      }
      return Bt(async () => {
        await Ct(), kt()
      }), C(S, h => p("visible", h), {
        immediate: !0
      }), C(() => g.introVisible, h => {
        J.value = h
      }, {
        immediate: !0
      }), C(G, h => {
        H.value || !S.value || ($.value = M.utils.clamp(-1, 1, h) * 50, V.value = M.utils.clamp(-1, 0, h) * -100)
      }), C(H, h => {
        h && ($.value = 0, V.value = 0)
      }), (h, K) => {
        var nt, lt, at, it, ct, rt, _t, ut;
        const wt = ht,
          F = Ht,
          xt = Lt;
        return o(), a("section", {
          ref_key: "elWrapper",
          ref: A,
          class: X(["intro", {
            mobile: e(H)
          }]),
          style: z({
            "--head-h": `${e(dt)}px`
          })
        }, [t("div", {
          class: "intro-wrapper w-full",
          style: z({
            transform: `translate3d(0px, ${e($)}%, 0)`,
            "clip-path": `inset(${e(V)}% 0 0)`
          })
        }, [t("div", {
          ref_key: "elMagnet",
          ref: c,
          class: "intro-left h-fulls side-60"
        }, [t("img", {
          ref_key: "elPortrait",
          ref: n,
          class: "img-full",
          src: Gt,
          alt: "Gianluca's portrait"
        }, null, 512), jt, t("div", {
          ref_key: "elIntroLeftContent",
          ref: l,
          class: "intro-left__content"
        }, [t("div", {
          class: "intro-left__card",
          style: z({
            transform: `translate3d(${e(st).x}px, ${e(st).y}px, 0)`
          })
        }, [qt, t("p", Xt, I((nt = e(m)) == null ? void 0 : nt.home.intro.left.content.pretitle), 1), t("div", Yt, [_(wt, {
          class: "h5 c-black",
          text: (lt = e(m)) == null ? void 0 : lt.home.intro.left.content.title,
          tag: "h1"
        }, null, 8, ["text"]), Jt])], 4)], 512), t("div", Kt, [_(F, {
          ref_key: "elFooterNumber",
          ref: s,
          class: "p-s c-white",
          tag: "p",
          text: "{ 1* }"
        }, null, 512), _(F, {
          ref_key: "elFooterCopy",
          ref: f,
          class: "footer-copy label-s c-white",
          tag: "p",
          text: (at = e(m)) == null ? void 0 : at.home.intro.left.footer
        }, null, 8, ["text"]), t("p", {
          ref_key: "elFooterScroll",
          ref: v,
          class: "footer-scroll decoration c-grey"
        }, "Scroll down", 512)])], 512), e(H) ? Q("", !0) : (o(), a("div", Zt, [t("img", {
          ref_key: "elBg",
          ref: y,
          class: "intro-right__bg",
          src: e(Ut),
          alt: "Bali, Jatiluwih Rice Fields"
        }, null, 8, Qt), t("div", te, [_(F, {
          ref_key: "elImgPre",
          ref: b,
          class: "img-pretitle decoration c-white-50",
          tag: "p",
          text: "Image"
        }, null, 512), _(F, {
          ref_key: "elImgTitle",
          ref: k,
          class: "img-title decoration-i c-white",
          tag: "p",
          text: "‘Bali, Jatiluwih Rice Fields’"
        }, null, 512)]), t("div", ee, [_(F, {
          ref_key: "elRightNumberTop",
          ref: x,
          class: "p-s c-white",
          tag: "p",
          text: "{ 2* }"
        }, null, 512), _(F, {
          ref_key: "elRightTitleTop",
          ref: L,
          class: "intro-right__center-top h4 c-white",
          tag: "p",
          padded: "",
          text: (it = e(m)) == null ? void 0 : it.home.intro.right.content.title.top
        }, null, 8, ["text"]), t("div", oe, [_(F, {
          ref_key: "elRightTitleLeft",
          ref: w,
          class: "h4 c-white",
          tag: "p",
          padded: "",
          text: (ct = e(m)) == null ? void 0 : ct.home.intro.right.content.title.sideLeft
        }, null, 8, ["text"]), t("img", {
          ref_key: "elPicture",
          ref: T,
          class: "intro-right__picture",
          src: e(yt),
          alt: "profile picture"
        }, null, 8, se), _(F, {
          ref_key: "elRightTitleRight",
          ref: W,
          class: "h4 c-white",
          tag: "p",
          padded: "",
          text: (rt = e(m)) == null ? void 0 : rt.home.intro.right.content.title.sideRight
        }, null, 8, ["text"])])]), t("div", ne, [_(F, {
          ref_key: "elRightNumberBottom",
          ref: B,
          class: "p-s c-white",
          tag: "p",
          text: "{ 2* }"
        }, null, 512), _(F, {
          ref_key: "elRightFooter",
          ref: d,
          class: "footer-right-copy p-l c-white",
          tag: "p",
          text: (_t = e(m)) == null ? void 0 : _t.home.intro.right.footer.label
        }, null, 8, ["text"]), _(xt, {
          ref_key: "elBtnExplore",
          ref: P,
          class: "c-white",
          to: "/through-this-lens",
          text: (ut = e(m)) == null ? void 0 : ut.home.intro.right.footer.btn.label
        }, null, 8, ["text"])])]))], 4)], 6)
      }
    }
  },
  ae = O(le, [
    ["__scopeId", "data-v-c3caac25"]
  ]),
  ie = {
    class: "works-display side-60"
  },
  ce = ["src", "alt"],
  re = {
    class: "item-thumbnail"
  },
  _e = ["src", "alt"],
  ue = {
    class: "sticky-block__header"
  },
  pe = {
    class: "works-list"
  },
  de = ["onClick"],
  he = {
    class: "item-number"
  },
  me = {
    class: "item-title uppercase"
  },
  fe = {
    class: "decorative-number display c-light-grey"
  },
  ge = {
    class: "sticky-block__footer"
  },
  ve = {
    class: "h2 c-light-grey"
  },
  ye = {
    __name: "Works",
    setup(u) {
      const i = Vt("scroller"),
        g = r(),
        p = r(),
        n = r(0),
        l = r(0),
        s = r(0),
        f = E(() => {
          var d;
          return (d = m) == null ? void 0 : d.home.works.list
        }),
        v = E(() => {
          var d;
          return (d = m) == null ? void 0 : d.home.works.list[n.value]
        }),
        {
          visible: c,
          startPos: y,
          windowSize: b,
          wrappperSize: k,
          scrollValue: T
        } = j(g),
        {
          height: x
        } = U(p);

      function B(d) {
        i.scrollTo(y.value + b.value * d)
      }

      function L(d = 0) {
        const P = k.value - x.value || 0;
        return -1 * M.utils.clamp(-P, 0, d)
      }

      function w(d = 0) {
        const P = M.utils.clamp(0, f.value.length - 1, Math.floor((-1 * d + b.value / 2) / b.value));
        n.value = P
      }

      function W() {
        tt.value = !0, gt.value = n.value
      }
      return C(T, d => {
        if (!c.value) return;
        l.value = L(d), w(d);
        const P = M.utils.normalize(y.value + k.value - b.value * 2, y.value + k.value - b.value, d * -1);
        s.value = M.utils.clamp(0, 1, P) * 100
      }), (d, P) => {
        var V;
        const A = et;
        return o(), a("section", {
          ref_key: "elWrapper",
          ref: g,
          class: "works"
        }, [t("div", {
          class: "works-wrapper w-full",
          style: z({
            transform: `translate3d(0, ${e(s)}vh, 0)`
          })
        }, [t("div", ie, [t("div", {
          class: "works-display__bg",
          style: z({
            transform: `translate3d(0, ${e(l)}px, 0)`
          })
        }, [(o(!0), a(N, null, D(e(f), ($, S) => (o(), a("img", {
          key: S,
          src: e(Y)($.bg).src,
          class: X(["item-bg img-full", {
            active: S === e(n)
          }]),
          alt: $.title
        }, null, 10, ce))), 128))], 4), (o(!0), a(N, null, D(e(f), ($, S) => (o(), a("div", {
          key: S,
          class: "works-display__item contained"
        }, [t("div", re, [t("img", {
          src: e(Y)($.overlay).src,
          alt: $.title,
          class: "item-thumbnail-img img-full"
        }, null, 8, _e)])]))), 128))]), t("div", {
          ref_key: "elSticky",
          ref: p,
          class: "sticky-block side-40 h-fulls",
          style: z({
            transform: `translate3d(0, ${e(l)}px, 0)`
          })
        }, [t("div", ue, [t("ul", pe, [(o(!0), a(N, null, D(e(f), ($, S) => (o(), a("li", {
          key: S,
          class: X(["works-list__item", {
            active: S === e(n)
          }])
        }, [t("button", {
          class: "item-btn label-s c-light-grey",
          type: "button",
          onClick: G => B(S)
        }, [t("p", he, I(`N.${(S+1).toString().padStart(2,"0")}`), 1), t("p", me, I($.title), 1)], 8, de)], 2))), 128))]), t("p", fe, I((e(n) + 1).toString().padStart(2, "0")), 1)]), t("div", ge, [_(A, {
          class: "btn-modal c-light-grey",
          onClick: W
        }), t("h2", ve, [(o(!0), a(N, null, D((V = e(v)) == null ? void 0 : V.titleModal, $ => (o(), a("span", {
          class: "block",
          key: $
        }, I($), 1))), 128))])])], 4)], 4)], 512)
      }
    }
  },
  be = O(ye, [
    ["__scopeId", "data-v-3d19a07d"]
  ]),
  ke = {
    class: "works-wrapper w-full"
  },
  we = {
    class: "item-picture contained w-full"
  },
  xe = {
    class: "item-picture__bg w-full h-full"
  },
  $e = ["src", "alt"],
  Se = {
    class: "item-picture__thumbnail"
  },
  Ie = ["src", "alt"],
  Re = {
    class: "item-title__wrapper w-full"
  },
  Me = {
    class: "item-title__container"
  },
  Pe = {
    class: "item-title h3 c-light-grey"
  },
  Te = {
    class: "decorative-number label-s c-light-grey"
  },
  Be = {
    __name: "WorksMobile",
    setup(u) {
      const i = r(),
        g = r(0),
        p = Wt(),
        n = E(() => {
          var s;
          return (s = m) == null ? void 0 : s.home.works.list
        });

      function l(s) {
        tt.value = !0, gt.value = g.value = s
      }
      return (s, f) => {
        const v = et;
        return o(), a("section", {
          ref_key: "elWrapper",
          ref: i,
          class: "works"
        }, [t("div", ke, [(o(!0), a(N, null, D(e(n), (c, y) => (o(), a("div", {
          key: y,
          ref_for: !0,
          ref: e(p).set,
          class: "works-display__item"
        }, [t("div", we, [t("div", xe, [t("img", {
          src: e(Y)(c.bg).src,
          class: "bg-img img-full",
          alt: c.title
        }, null, 8, $e)]), t("div", Se, [t("img", {
          src: e(Y)(c.overlay).src,
          alt: c.title,
          class: "item-thumbnail-img img-full"
        }, null, 8, Ie)])]), t("div", Re, [t("div", Me, [t("h2", Pe, I(c == null ? void 0 : c.title), 1), t("p", Te, " N." + I((y + 1).toString().padStart(2, "0")), 1)]), _(v, {
          class: "btn-modal c-light-grey w-full",
          onClick: b => l(y)
        }, null, 8, ["onClick"])])]))), 128))])], 512)
      }
    }
  },
  Ce = O(Be, [
    ["__scopeId", "data-v-18d4d83f"]
  ]),
  He = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29">\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4643 7.75h-.9285v5.7857H7.75v.9286h5.7858V20.25h.9285v-5.7857H20.25v-.9286h-5.7857V7.75Z" fill="currentColor"/>\r
</svg>`,
  Le = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 29">\r
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 13.5352H7.75v.9285h12.5v-.9285Z" fill="currentColor"/>\r
</svg>`,
  Ve = {
    class: "btn-accordion p-l c-light-grey"
  },
  We = ["innerHTML"],
  Ae = ["innerHTML"],
  Fe = {
    __name: "Accordion",
    props: {
      copy: {
        type: String,
        default: "Open"
      },
      open: {
        type: Boolean,
        default: !1
      }
    },
    setup(u) {
      const i = u;
      return (g, p) => (o(), a("button", Ve, [t("span", null, I(i.copy), 1), u.open ? (o(), a("span", {
        key: 0,
        class: "btn-accordion__svg",
        innerHTML: e(Le)
      }, null, 8, We)) : (o(), a("span", {
        key: 1,
        class: "btn-accordion__svg",
        innerHTML: e(He)
      }, null, 8, Ae))]))
    }
  },
  Ne = O(Fe, [
    ["__scopeId", "data-v-77930d5b"]
  ]),
  De = {
    class: "accordion-content__item-title decoration c-white uppercase"
  },
  ze = {
    class: "p-l c-white-50"
  },
  Oe = {
    __name: "Content",
    props: {
      data: {
        type: Array,
        default: []
      },
      visible: {
        type: Boolean,
        default: !1
      }
    },
    setup(u) {
      At(n => ({
        "1c17a821": e(p)
      }));
      const i = r(),
        {
          height: g
        } = U(i),
        p = E(() => `${g.value}px`);
      return (n, l) => (o(), a("div", {
        class: X(["accordion-wrapper", {
          visible: u.visible
        }])
      }, [t("div", {
        ref_key: "elContent",
        ref: i,
        class: "accordion-content"
      }, [(o(!0), a(N, null, D(u.data, (s, f) => (o(), a("div", {
        class: "accordion-content__item",
        key: f
      }, [t("p", De, I(s.title), 1), t("ul", null, [(o(!0), a(N, null, D(s.list, (v, c) => (o(), a("li", {
        class: "accordion-content__item-label",
        key: c
      }, [t("p", ze, I(v), 1)]))), 128))])]))), 128))], 512)], 2))
    }
  },
  Ge = O(Oe, [
    ["__scopeId", "data-v-469e3c1d"]
  ]),
  Ee = {
    class: "accordion-item"
  },
  Ue = {
    __name: "Item",
    props: {
      copy: {
        type: String,
        default: ""
      },
      content: {
        type: Array,
        default: []
      }
    },
    setup(u) {
      const i = r(!1);
      return (g, p) => {
        const n = Ne,
          l = Ge;
        return o(), a("div", Ee, [_(n, {
          class: "w-full",
          copy: u.copy,
          onClick: p[0] || (p[0] = s => i.value = !e(i)),
          open: e(i)
        }, null, 8, ["copy", "open"]), _(l, {
          visible: e(i),
          data: u.content
        }, null, 8, ["visible", "data"])])
      }
    }
  },
  je = Ue,
  qe = "" + new URL("home-design-portrait.pa2hp4bw.webp",
    import.meta.url).href,
  Xe = {
    class: "about-designer-left side-60"
  },
  Ye = {
    class: "p-l c-grey"
  },
  Je = {
    class: "about-designer__interest-list"
  },
  Ke = {
    class: "about-designer-right__container w-full h-full"
  },
  Ze = ["src"],
  Qe = {
    class: "about-designer__card-list"
  },
  to = {
    class: "card-item__title p-s"
  },
  eo = {
    class: "p-s c-black-50"
  },
  oo = {
    class: "about-designer__accordion"
  },
  so = {
    __name: "AboutDesigner",
    setup(u) {
      const i = r(),
        g = r(),
        p = r(),
        n = r(0),
        l = r(0),
        {
          visible: s,
          windowSize: f,
          wrappperSize: v,
          scrollValue: c
        } = j(i),
        {
          height: y
        } = U(g),
        {
          active: b,
          coords: k
        } = vt(p, {
          strengthX: -20,
          strengthY: -20
        });

      function T(x = 0) {
        const B = v.value - y.value || 0;
        return -1 * M.utils.clamp(-B, 0, x)
      }
      return C(s, x => b.value = x, {
        immediate: !0
      }), C(c, x => {
        if (!s.value || H.value) return;
        n.value = T(x);
        const B = M.utils.normalize(-f.value, 0, x);
        l.value = M.utils.clamp(0, 1, B) * 100
      }), C(H, x => {
        x && (n.value = 0, l.value = 0)
      }), (x, B) => {
        var W, d, P, A, V, $, S;
        const L = ht,
          w = je;
        return o(), a("section", {
          ref_key: "elWrapper",
          ref: i,
          class: "about-designer"
        }, [t("div", {
          ref_key: "elSticky",
          ref: g,
          class: "about-designer-wrapper w-full",
          style: z({
            transform: `translate3d(0, ${e(n)}px, 0)`,
            "clip-path": `inset(${e(l)}% 0 0)`
          })
        }, [t("div", Xe, [t("p", Ye, I((W = e(m)) == null ? void 0 : W.home.aboutDesigner.pretitle), 1), _(L, {
          tag: "h2",
          class: "about-designer__title h3 c-light-grey",
          text: (d = e(m)) == null ? void 0 : d.home.aboutDesigner.title
        }, null, 8, ["text"]), t("div", Je, [(o(!0), a(N, null, D((P = e(m)) == null ? void 0 : P.home.aboutDesigner.interestList, G => (o(), a("p", {
          key: G,
          class: "p-s c-grey"
        }, I(`{ ${G} }`), 1))), 128))])]), t("div", {
          ref_key: "elMagnet",
          ref: p,
          class: "about-designer-right side-40"
        }, [t("div", Ke, [t("img", {
          class: "about-designer-right__bg",
          src: e(qe),
          alt: "Gianluca Gradogna portrait"
        }, null, 8, Ze), t("div", {
          class: "about-designer__card",
          style: z({
            transform: `translate3d(${e(k).x}px, ${e(k).y}px, 0)`
          })
        }, [t("ul", Qe, [(o(!0), a(N, null, D(e(m).home.aboutDesigner.positionsHistory, (G, J) => (o(), a("li", {
          key: J,
          class: "card-item"
        }, [t("p", to, I(G.title), 1), t("p", eo, I(`{ ${G.date} }`), 1)]))), 128))])], 4)]), t("div", oo, [_(w, {
          class: "about-designer__accordion-item",
          copy: `Awards { ${(A=e(m))==null?void 0:A.home.aboutDesigner.awards.count} }`,
          content: (V = e(m)) == null ? void 0 : V.home.aboutDesigner.awards.list
        }, null, 8, ["copy", "content"]), _(w, {
          class: "about-designer__accordion-item",
          copy: `Expertises and Skills { ${($=e(m))==null?void 0:$.home.aboutDesigner.skills.count} }`,
          content: (S = e(m)) == null ? void 0 : S.home.aboutDesigner.skills.list
        }, null, 8, ["copy", "content"])])], 512)], 4)], 512)
      }
    }
  },
  no = O(so, [
    ["__scopeId", "data-v-13961e0c"]
  ]),
  lo = {
    class: "about-photo-left side-60"
  },
  ao = {
    class: "about-photo__pre p-l c-grey"
  },
  io = {
    class: "about-photo-copy__center"
  },
  co = {
    class: "label-serif"
  },
  ro = {
    class: "about-photo__info p-l"
  },
  _o = {
    class: "about-photo-right side-40"
  },
  uo = {
    class: "about-photo-right__wrapper"
  },
  po = ["src"],
  ho = {
    __name: "AboutPhoto",
    setup(u) {
      const i = r(),
        {
          visible: g,
          windowSize: p,
          scrollValue: n
        } = j(i),
        l = E(() => dt.value * .5),
        s = E(() => g.value && n.value < l.value && n.value > -p.value + l.value);
      return Ft(() => pt.value = !1), C(s, f => {
        H.value || (pt.value = f)
      }), (f, v) => {
        var y, b, k, T;
        const c = $t;
        return o(), a("section", {
          ref_key: "elWrapper",
          ref: i,
          class: "about-photo"
        }, [t("div", lo, [t("p", ao, I((y = e(m)) == null ? void 0 : y.home.aboutPhoto.incipit), 1), t("div", io, [t("p", co, I((b = e(m)) == null ? void 0 : b.home.aboutPhoto.pretitle), 1), _(c, {
          tag: "h2",
          classes: "h4",
          class: "about-photo__title",
          text: (k = e(m)) == null ? void 0 : k.home.aboutPhoto.title,
          "image-src": "home-portrait-hover"
        }, null, 8, ["text"])]), t("p", ro, I((T = e(m)) == null ? void 0 : T.home.aboutPhoto.info), 1)]), t("div", _o, [t("div", uo, [t("img", {
          class: "about-photo-right__bg",
          src: e(yt),
          alt: "Gianluca Gradogna portrait taking photos"
        }, null, 8, po)])])], 512)
      }
    }
  },
  mo = O(ho, [
    ["__scopeId", "data-v-ce600bd4"]
  ]),
  fo = "" + new URL("bali-full.kn60vm8r.webp",
    import.meta.url).href,
  bt = u => (mt("data-v-86279922"), u = u(), ft(), u),
  go = {
    class: "photos-bg__wrapper"
  },
  vo = bt(() => t("div", {
    class: "photos-bg-description"
  }, [t("p", {
    class: "decoration c-white-50"
  }, "BACKGROUND"), t("p", {
    class: "photos-bg-description__name decoration-i c-white"
  }, "‘Bali, Rice Fields’")], -1)),
  yo = {
    class: "photos-list__wrapper side-60"
  },
  bo = {
    class: "photos-list"
  },
  ko = {
    class: "photos-description__container"
  },
  wo = {
    class: "photos-description__copy h7"
  },
  xo = bt(() => t("div", {
    class: "photos-filler w-full"
  }, null, -1)),
  $o = {
    __name: "Photos",
    setup(u) {
      const i = r(),
        g = r(),
        p = r(),
        n = r(),
        l = r(0),
        s = r(0),
        f = E(() => {
          var w;
          return (w = m) == null ? void 0 : w.home.photos.list
        }),
        v = E(() => f.value.length),
        {
          visible: c,
          wrappperSize: y,
          scrollValue: b
        } = j(i),
        {
          wrappperSize: k,
          scrollValue: T
        } = j(g),
        {
          height: x
        } = U(n),
        {
          height: B
        } = U(p);

      function L(w = 0, W, d) {
        const P = W - d || 0;
        return -1 * M.utils.clamp(-P, 0, w)
      }
      return C(b, w => {
        !c.value || H.value || (l.value = L(w, y.value, x.value), s.value = L(T.value, k.value, B.value))
      }), C(H, w => {
        w && (l.value = 0, s.value = 0)
      }), (w, W) => {
        var A, V;
        const d = Nt,
          P = et;
        return o(), a("section", {
          ref_key: "elWrapper",
          ref: i,
          class: "photos"
        }, [t("div", go, [t("img", {
          ref_key: "elSticky",
          ref: n,
          class: "photos-bg",
          src: fo,
          alt: "Bali, Rice Fields",
          style: z({
            transform: `translate3d(0, ${e(l)}px, 0)`
          })
        }, null, 4)]), vo, t("div", {
          ref_key: "elMain",
          ref: g,
          class: "photos-wrapper w-full"
        }, [t("div", yo, [t("ul", bo, [(o(!0), a(N, null, D(e(f), ($, S) => (o(), q(d, {
          key: S,
          data: $,
          index: S
        }, null, 8, ["data", "index"]))), 128))])]), t("div", {
          ref_key: "elStickyMain",
          ref: p,
          class: "photos-description side-40",
          style: z({
            transform: `translate3d(0, ${e(s)}px, 0)`
          })
        }, [t("div", ko, [t("h2", wo, I((A = e(m)) == null ? void 0 : A.home.photos.description.copy), 1), _(P, {
          class: "btn-description",
          to: "/through-this-lens",
          copy: `${(V=e(m))==null?void 0:V.home.photos.description.btn.label} (${e(v)})`
        }, null, 8, ["copy"])])], 4)], 512), xo], 512)
      }
    }
  },
  So = O($o, [
    ["__scopeId", "data-v-86279922"]
  ]),
  Io = {
    key: 0,
    class: "page"
  },
  Ro = {
    class: "page-content"
  },
  Mo = {
    __name: "index",
    props: {
      loaded: {
        type: Boolean,
        default: !1
      }
    },
    setup(u) {
      const i = r(),
        g = r(!1),
        p = r(!1),
        n = r(!1);
      return Dt([g, p], ([l, s]) => {
        n.value = l || s
      }, {
        debounce: 100,
        maxWait: 200
      }), C([zt, Ot, tt], ([l, s, f]) => {
        var v, c;
        l || s || f ? (v = i.value) == null || v.pause() : (c = i.value) == null || c.play()
      }), C(() => i.value, l => {
        l && M.delayedCall(.05, () => l.scrollTo(.1, !0))
      }), (l, s) => {
        const f = It,
          v = Rt,
          c = ae,
          y = be,
          b = Ce,
          k = no,
          T = mo,
          x = So,
          B = Mt,
          L = St;
        return u.loaded ? (o(), a("div", Io, [t("div", Ro, [_(L, {
          ref_key: "elScroller",
          ref: i
        }, {
          "external-pre": Z(() => [_(f), _(v)]),
          external: Z(() => [_(B)]),
          default: Z(() => [(o(), q(c, {
            onVisible: s[0] || (s[0] = w => g.value = w),
            "intro-visible": e(n),
            key: "intro-default"
          }, null, 8, ["intro-visible"])), e(H) ? (o(), q(b, {
            key: 1
          })) : (o(), q(y, {
            key: 0
          })), _(k), _(T), _(x), e(H) ? Q("", !0) : (o(), q(c, {
            onVisible: s[1] || (s[1] = w => p.value = w),
            "intro-visible": e(n),
            class: "clone",
            key: "intro-clone"
          }, null, 8, ["intro-visible"]))]),
          _: 1
        }, 512)])])) : Q("", !0)
      }
    }
  },
  Bo = O(Mo, [
    ["__scopeId", "data-v-6d3592ac"]
  ]);
export {
  Bo as
  default
};
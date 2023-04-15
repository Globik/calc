!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                n.d(i, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = "./js/main.js")
}({
    "./js/main.js": /*!********************!*\
  !*** ./js/main.js ***!
  \********************/
    /*! no exports provided */
    function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(/*! ./utils/ios-vh-fix */
        "./js/utils/ios-vh-fix.js")
          , a = n(/*! ./modules/modals/init-modals */
        "./js/modules/modals/init-modals.js")
          , o = n(/*! ./modules/form/init-custom-select */
        "./js/modules/form/init-custom-select.js")
          , c = n(/*! ./modules/form/init-form-validate */
        "./js/modules/form/init-form-validate.js")
          , r = n(/*! ./modules/init-range-value */
        "./js/modules/init-range-value.js")
          , s = n(/*! ./modules/init-check */
        "./js/modules/init-check.js")
          , l = n(/*! ./modules/init-check-all */
        "./js/modules/init-check-all.js")
          , u = n(/*! ./modules/init-sliders */
        "./js/modules/init-sliders.js")
          , d = n(/*! ./modules/init-block-show */
        "./js/modules/init-block-show.js")
          , p = n(/*! ./modules/init-toggle-change */
        "./js/modules/init-toggle-change.js")
          , h = n(/*! ./modules/init-active-main-card */
        "./js/modules/init-active-main-card.js")
          , f = n(/*! ./modules/init-calculator */
        "./js/modules/init-calculator.js")
          , v = n(/*! ./modules/init-toggle-check */
        "./js/modules/init-toggle-check.js")
          , m = n(/*! ./modules/init-delete */
        "./js/modules/init-delete.js")
          , _ = n(/*! ./modules/init-content-modal */
        "./js/modules/init-content-modal.js")
          , y = n(/*! ./modules/init-radio-toggle */
        "./js/modules/init-radio-toggle.js")
          , g = n(/*! ./modules/init-results */
        "./js/modules/init-results.js")
          , k = n(/*! ./modules/init-promocode */
        "./js/modules/init-promocode.js");
        window.addEventListener("DOMContentLoaded", (function() {
            Object(i.iosVhFix)(),
            window.addEventListener("load", (function() {
                Object(a.initModals)(),
                Object(o.initCustomSelect)(),
                Object(c.initFormValidate)(),
                Object(r.initRangeValue)(),
                Object(s.initCheck)(),
                Object(l.initCheckAll)(),
                Object(u.initSliders)(),
                Object(d.initBlockShow)(),
                Object(h.initActiveMainCard)(),
                Object(v.initToggleChecked)(),
                Object(m.initDelete)(),
                Object(_.initContentModal)(),
                Object(y.initRadioToggle)(),
                Object(p.initToggleChangeEvent)(),
                Object(f.initCalculator)(),
                Object(g.initResults)(),
                Object(k.initPromocode)()
            }
            ))
        }
        ))
    },
    "./js/modules/form/custom-select.js": /*!******************************************!*\
  !*** ./js/modules/form/custom-select.js ***!
  \******************************************/
    /*! exports provided: default */
    function(e, t, n) {
        "use strict";
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        n.r(t),
        n.d(t, "default", (function() {
            return f
        }
        ));
        var a = function(e) {
            var t = "";
            return e.length && (1 === e.length ? t = e[0].innerHTML : e.forEach((function(n, i) {
                i === e.length - 1 ? t += n.innerHTML : t += "".concat(n.innerHTML, ", ")
            }
            ))),
            t
        }
          , o = function(e) {
            var t, n, i = {
                items: []
            }, o = e.dataset.multiple, c = e.dataset.id, r = e.dataset.name, s = e.dataset.required, l = e.dataset.insert, u = e.querySelectorAll(".custom-select__item"), d = function(e, t) {
                var n = !0
                  , i = [];
                return t.forEach((function(t, a) {
                    e ? "true" === t.getAttribute("aria-selected") && i.push(a) : "true" === t.getAttribute("aria-selected") && n ? (i.push(a),
                    n = !1) : t.setAttribute("aria-selected", "false")
                }
                )),
                i
            }(o, u);
            return d.length && (i.activeIndex = d,
            function(e, t, n) {
                var i = n.querySelector(".custom-select__text")
                  , o = n.querySelectorAll('.custom-select__item[aria-selected="true"]')
                  , c = n.querySelector(".custom-select__label")
                  , r = a(o);
                if (i.style.transition = "0s",
                c && (c.style.transition = "0s"),
                setTimeout((function() {
                    c && (c.style.transition = null),
                    i.style.transition = null
                }
                ), 300),
                e && t)
                    n.classList.add("not-empty"),
                    i.innerHTML = r;
                else {
                    if (e)
                        return;
                    n.classList.add("not-empty"),
                    i.innerHTML = o[0].innerHTML
                }
            }(o, l, e)),
            i.name = r || !1,
            i.id = c || !1,
            i.required = Boolean(s),
            i.multiple = Boolean(o),
            u.forEach((function(e) {
                var t = e.dataset.selectValue
                  , n = {};
                n.text = e.innerText,
                n.value = t,
                i.items.push(n)
            }
            )),
            function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "beforeend";
                switch (n) {
                case "prepend":
                    e.prepend(t);
                    break;
                case "afterend":
                    e.after(t);
                    break;
                case "beforeend":
                    e.append(t)
                }
            }(e, (t = function(e) {
                var t = e.id
                  , n = e.items
                  , i = e.multiple
                  , a = e.name
                  , o = e.required
                  , c = e.activeIndex
                  , r = void 0 === c ? [] : c;
                return "<select ".concat(t ? "id='".concat(t, "'") : "", " ").concat(a ? "name='".concat(a, "'") : "", " ").concat(i ? "multiple" : "", " ").concat(o ? "required" : "", ' tabindex="-1" aria-hidden="true">\n            <option value=""></option>\n            ').concat(function(e, t) {
                    return e.map((function(e, n) {
                        return t.length && t.find((function(e) {
                            return e === n
                        }
                        )) === n ? "<option ".concat(e.value ? "value=".concat(e.value) : "", " selected>").concat(e.text ? "".concat(e.text) : "", "</option>") : "<option ".concat(e.value ? "value=".concat(e.value) : "", ">").concat(e.text ? "".concat(e.text) : "", "</option>")
                    }
                    )).join("\n")
                }(n, r), "\n          </select>")
            }(i),
            (n = document.createElement("div")).innerHTML = t,
            n.firstChild)),
            e
        }
          , c = function() {
            var e = document.querySelector("[data-select].is-open");
            document.removeEventListener("click", s),
            document.removeEventListener("keydown", l),
            e && e.classList.remove("is-open")
        }
          , r = function(e, t) {
            var n = e.closest(".custom-select")
              , i = n.dataset.multiple
              , o = n.dataset.insert
              , r = n.querySelector(".custom-select__text")
              , s = e.innerText
              , l = n.querySelectorAll("option")
              , u = n.querySelector("select")
              , d = new CustomEvent("change")
              , p = new CustomEvent("input");
            u.dispatchEvent(d),
            u.dispatchEvent(p);
            var h = u.closest("form");
            if (h) {
                var f = new CustomEvent("change")
                  , v = new CustomEvent("input");
                h.dispatchEvent(f),
                h.dispatchEvent(v)
            }
            if (i)
                if ("true" === o)
                    if ("true" === e.getAttribute("aria-selected")) {
                        e.setAttribute("aria-selected", "false");
                        var m = n.querySelectorAll('.custom-select__item[aria-selected="true"]')
                          , _ = a(m);
                        l[t + 1].selected = !1,
                        r.innerText = _,
                        _ || (n.classList.remove("not-empty"),
                        n.classList.remove("is-valid"))
                    } else {
                        e.setAttribute("aria-selected", "true");
                        var y = n.querySelectorAll('.custom-select__item[aria-selected="true"]')
                          , g = a(y);
                        r.innerText = g,
                        n.classList.add("not-empty"),
                        n.classList.add("is-valid"),
                        l[t + 1].selected = !0
                    }
                else
                    "true" === e.getAttribute("aria-selected") ? (e.setAttribute("aria-selected", "false"),
                    l[t + 1].selected = !1) : (e.setAttribute("aria-selected", "true"),
                    l[t + 1].selected = !0);
            else {
                var k = n.querySelector('.custom-select__item[aria-selected="true"]');
                "true" === e.getAttribute("aria-selected") || (k && (k.setAttribute("aria-selected", "false"),
                n.classList.remove("not-empty"),
                n.classList.remove("is-valid")),
                r.innerText = s,
                e.setAttribute("aria-selected", "true"),
                n.classList.add("not-empty"),
                n.classList.add("is-valid"),
                l[t + 1].selected = !0),
                c()
            }
        }
          , s = function(e) {
            e.target.closest(".custom-select") || c()
        }
          , l = function(e) {
            "Escape" === e.key && c()
        }
          , u = function(e) {
            "Tab" === e.key && c()
        }
          , d = function(e) {
            var t = e.target.closest("[data-select]")
              , n = document.querySelector("[data-select].is-open");
            t.classList.remove("is-invalid"),
            n && n === t ? n.classList.remove("is-open") : (n && c(),
            document.addEventListener("click", s),
            document.addEventListener("keydown", l),
            t.classList.contains("is-open") ? t.classList.remove("is-open") : t.classList.add("is-open"))
        }
          , p = function(e) {
            var t = e.target.closest("[data-select]");
            t.classList.remove("is-invalid"),
            e.shiftKey && "Tab" === e.key && t.closest(".is-open") && c()
        }
          , h = function(e) {
            var t = e
              , n = t.querySelector(".custom-select__button")
              , i = t.querySelectorAll(".custom-select__item");
            n.addEventListener("click", d),
            n.addEventListener("keydown", p),
            i.forEach((function(e, t) {
                e.addEventListener("click", (function() {
                    !function(e, t) {
                        r(e, t)
                    }(e, t)
                }
                )),
                e.addEventListener("keydown", (function(n) {
                    !function(e, t, n) {
                        "Enter" === e.key && r(t, n)
                    }(n, e, t)
                }
                )),
                t === i.length - 1 && e.addEventListener("keydown", u)
            }
            ))
        }
          , f = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                window.selectInit = this.init.bind(this)
            }
            var t, n, a;
            return t = e,
            (n = [{
                key: "setAction",
                value: function(e) {
                    h(e)
                }
            }, {
                key: "createSelect",
                value: function(e) {
                    return o(e),
                    e
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    document.querySelectorAll("[data-select]").forEach((function(t) {
                        if (!t.classList.contains("is-initialized")) {
                            var n = e.createSelect(t);
                            e.setAction(n),
                            t.classList.add("is-initialized")
                        }
                    }
                    ))
                }
            }]) && i(t.prototype, n),
            a && i(t, a),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    },
    "./js/modules/form/form-send-callbacks.js": /*!************************************************!*\
  !*** ./js/modules/form/form-send-callbacks.js ***!
  \************************************************/
    /*! exports provided: baseSendSuccess, baseSendError */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "baseSendSuccess", (function() {
            return i
        }
        )),
        n.d(t, "baseSendError", (function() {
            return a
        }
        ));
        var i = function(e) {
            console.log("Ваша форма успешна отправлена"),
            window.modals.open("ready")
        }
          , a = function() {
            console.error("Произошла ошибка отправки")
        }
    },
    "./js/modules/form/form-validate.js": /*!******************************************!*\
  !*** ./js/modules/form/form-validate.js ***!
  \******************************************/
    /*! exports provided: default */
    function(e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        n.r(t),
        n.d(t, "default", (function() {
            return g
        }
        ));
        var o = "+7".length + "(___) ___ __ __".length
          , c = function(e, t) {
            var n = function(e) {
                switch (e) {
                case "digit":
                    return /[^\d]/g;
                case "name":
                    return /[^a-zA-Zа-яёА-ЯЁ\-\s]/g;
                case "letters":
                    return /[^a-zA-Zа-яёА-ЯЁ\s]/g;
                case "letters-and-digit":
                    return /[^a-zA-Zа-яёА-ЯЁ\s\d]/g;
                case "cyrillic":
                    return /[^а-яёА-ЯЁ\s]/g;
                case "latin":
                    return /[^a-zA-Z\s]/g;
                default:
                    return !1
                }
            }(t);
            n ? e.addEventListener("input", (function() {
                e.value = e.value.replace(n, "")
            }
            )) : console.error("Переданный формат ограничения: ".concat(t, ", не поддерживается. Проверьте корректность введённых значений в соответствии со спецификацией."))
        }
          , r = function(e, t, n) {
            if (null !== n) {
                var i = function(e) {
                    switch (e) {
                    case "digit":
                        return /[^\d]/g;
                    case "name":
                        return /[^\а-яё\А-ЯЁ\a-z\A-Z\-]]/g;
                    case "letters":
                        return /[^\а-яё\А-ЯЁ\a-z\A-Z]/g;
                    case "letters-and-digit":
                        return /[^\а-яё\А-ЯЁ\a-z\A-Z\d]/g;
                    case "cyrillic":
                        return /[^\а-яё\А-ЯЁ]/g;
                    case "latin":
                        return /[^\a-z\A-Z]/g;
                    default:
                        return !1
                    }
                }(n);
                i ? e.addEventListener("input", (function() {
                    !function(e, t, n) {
                        var i = t.replace(n, "")
                          , a = e.value.replace(n, "")
                          , o = 0;
                        i.length >= a.length && (a = i),
                        e.value = t.replace(/./g, (function(e) {
                            return /[_\^]/.test(e) && o < a.length ? a.charAt(o++) : o >= a.length ? "" : e
                        }
                        ))
                    }(e, t, i)
                }
                )) : console.error("Переданный формат ограничения: ".concat(n, ", не поддерживается. Проверьте корректность введённых значений в соответствии со спецификацией."))
            } else
                console.error('При валидации по матрице обязательно указывать формат ограничений: data-matrix-limitations=""')
        }
          , s = function(e) {
            var t = e.target
              , n = "".concat("+7").concat("(___) ___ __ __")
              , i = n.replace(/\D/g, "")
              , a = 0
              , o = t.value.replace(/\D/g, "");
            i.length >= o.length && (o = i),
            t.value = n.replace(/./g, (function(e) {
                return /[_\d]/.test(e) && a < o.length ? o.charAt(a++) : a >= o.length ? "" : e
            }
            ))
        }
          , l = function(e) {
            var t = e.target;
            t.value || (t.value = "+7"),
            t.addEventListener("input", s),
            t.addEventListener("blur", d),
            t.addEventListener("keydown", u)
        }
          , u = function(e) {
            (1 === e.target.selectionStart && 8 === e.keyCode || 46 === e.keyCode) && e.preventDefault(),
            e.target.selectionStart <= o && 8 !== e.keyCode && 46 !== e.keyCode && 37 !== e.keyCode && 39 !== e.keyCode && e.target.setSelectionRange(o, o)
        }
          , d = function e(t) {
            var n = t.target;
            if ("+7" === n.value) {
                var i = n.closest('[data-validate-type="phone"]');
                n.value = "",
                i.classList.remove("not-empty"),
                n.removeEventListener("input", s),
                n.removeEventListener("blur", e)
            }
        }
          , p = function(e) {
            if (e.classList.contains("toggle-group"))
                m(e),
                e.setAttribute("aria-invalid", "true"),
                e.classList.remove("is-invalid"),
                e.classList.add("is-valid");
            else {
                var t = e.closest("[data-validate-type]");
                e.setAttribute("aria-invalid", "false"),
                t.classList.remove("is-invalid"),
                t.classList.add("is-valid")
            }
        }
          , h = function(e) {
            if (e.classList.contains("toggle-group"))
                m(e),
                e.setAttribute("aria-invalid", "false"),
                e.classList.add("is-invalid"),
                e.classList.remove("is-valid");
            else {
                var t = e.closest("[data-validate-type]");
                e.setAttribute("aria-invalid", "true"),
                t.classList.add("is-invalid"),
                t.classList.remove("is-valid")
            }
        }
          , f = function(e, t) {
            var n = !0
              , i = function(e) {
                var t = !0
                  , n = !0;
                return e.forEach((function(e) {
                    var i = e.closest("[data-validate-type]").dataset.validateType;
                    "toggle-group" !== i && ((t = v(i, e)) ? p(e) : (n = t,
                    h(e)))
                }
                )),
                n
            }(e)
              , a = function(e) {
                var t = !0
                  , n = !0;
                return e.length ? (e.forEach((function(e) {
                    (t = m(e)) ? p(e) : (n = t,
                    h(e))
                }
                )),
                n) : n
            }(t);
            return i && a || (n = !1),
            n
        }
          , v = function(e, t) {
            switch (e) {
            case "text":
                return function(e) {
                    var t = e.closest("[data-validate-type]")
                      , n = !0
                      , i = +e.getAttribute("minlength");
                    return i || (i = 1),
                    e.value.length >= i ? (t.classList.add("is-valid"),
                    t.classList.remove("is-invalid"),
                    e.setAttribute("aria-invalid", "false")) : (t.classList.remove("is-valid"),
                    e.setAttribute("aria-invalid", "true"),
                    n = !1),
                    n
                }(t);
            case "phone":
                return function(e) {
                    var t = e.closest("[data-validate-type]")
                      , n = !0;
                    return e.value.length >= o ? (t.classList.remove("is-invalid"),
                    t.classList.add("is-valid"),
                    e.setAttribute("aria-invalid", "false")) : (t.classList.remove("is-valid"),
                    e.setAttribute("aria-invalid", "true"),
                    n = !1),
                    n
                }(t);
            case "email":
                return function(e) {
                    var t = e.closest("[data-validate-type]")
                      , n = !0;
                    return new RegExp(/[a-zA-Zа-яёА-ЯЁ0-9]{1}([a-zA-Zа-яёА-ЯЁ0-9\-_\.]{1,})?@[a-zA-Zа-яёА-ЯЁ0-9\-]{1}([a-zA-Zа-яёА-ЯЁ0-9.\-]{1,})?[a-zA-Zа-яёА-ЯЁ0-9\-]{1}\.[a-zA-Zа-яёА-ЯЁ]{2,6}/,"").test(e.value) ? (t.classList.remove("is-invalid"),
                    t.classList.add("is-valid"),
                    e.setAttribute("aria-invalid", "false")) : (t.classList.remove("is-valid"),
                    e.setAttribute("aria-invalid", "true"),
                    n = !1),
                    n
                }(t);
            case "matrix":
                return function(e) {
                    var t = e.closest("[data-validate-type]")
                      , n = !0
                      , i = e.closest("[data-matrix]").dataset.matrix;
                    return e.value.length === i.length ? (t.classList.remove("is-invalid"),
                    t.classList.add("is-valid"),
                    e.setAttribute("aria-invalid", "false")) : (t.classList.remove("is-valid"),
                    e.setAttribute("aria-invalid", "true"),
                    n = !1),
                    n
                }(t);
            case "select":
                return function(e) {
                    var t = e.closest("[data-validate-type]")
                      , n = e.querySelectorAll("option")
                      , i = t.querySelector(".custom-select__text");
                    e.setAttribute("aria-invalid", "false");
                    var a = !0;
                    return !function(e) {
                        var t = !1;
                        return e.forEach((function(e) {
                            e.value && e.selected && (t = !0)
                        }
                        )),
                        t
                    }(n) ? (t.classList.remove("is-valid"),
                    e.setAttribute("aria-invalid", "true"),
                    i.innerHTML = "",
                    t.classList.remove("not-empty"),
                    a = !1) : (t.classList.remove("is-invalid"),
                    t.classList.add("is-valid"),
                    e.setAttribute("aria-invalid", "false")),
                    a
                }(t);
            case "checkbox":
                return function(e) {
                    var t = e.closest("[data-validate-type]")
                      , n = !0;
                    return e.checked ? (t.classList.remove("is-invalid"),
                    t.classList.add("is-valid")) : (t.classList.remove("is-valid"),
                    n = !1),
                    n
                }(t);
            default:
                return !1
            }
        }
          , m = function(e) {
            var t = e.querySelectorAll("input")
              , n = !0;
            return !function(e) {
                var t = !1;
                return e.forEach((function(e) {
                    e.checked && (t = !0)
                }
                )),
                t
            }(t) ? (!function(e) {
                e.forEach((function(e) {
                    e.setAttribute("aria-required", !0),
                    e.setAttribute("aria-invalid", !0)
                }
                ))
            }(t),
            e.classList.remove("is-valid"),
            n = !1) : (t.forEach((function(e) {
                e.checked ? (e.setAttribute("aria-required", !0),
                e.setAttribute("aria-invalid", !1)) : (e.removeAttribute("aria-required"),
                e.removeAttribute("aria-invalid"))
            }
            )),
            e.classList.remove("is-invalid"),
            e.classList.add("is-valid")),
            n
        }
          , _ = function(e, t) {
            v(e, t)
        }
          , y = function(e) {
            e.reset();
            var t = e.querySelectorAll("[data-validate-type]")
              , n = e.querySelectorAll(".not-empty")
              , i = e.querySelectorAll(".is-invalid");
            n.forEach((function(e) {
                e.classList.remove("not-empty")
            }
            )),
            i.forEach((function(e) {
                e.classList.remove("is-invalid")
            }
            )),
            t.forEach((function(e) {
                var t = e.dataset.validateType;
                if ("toggle-group" !== t) {
                    var n = e.querySelector("input");
                    if (n || (n = e.querySelector("textarea")),
                    n || (n = e.querySelector("select")),
                    !n)
                        return void console.error("В валидируемом блоке отсутствует поле формы");
                    n.value = "",
                    _(t, n)
                } else
                    m(e)
            }
            ))
        };
        window.clearForm = y;
        var g = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, e),
                this.wrappers = t,
                this.callback = n
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "init",
                value: function(e) {
                    var t = this;
                    e || (e = this.wrappers);
                    var n = Object.prototype.toString.call(e);
                    if ("[object HTMLCollection]" === n || "[object NodeList]" === n || "[object Array]" === n)
                        e.forEach((function(e) {
                            e.classList.contains("is-initialized") ? console.error("На данной форме валидация уже инициализированна") : t.initItem(e)
                        }
                        ));
                    else {
                        if ("[object HTMLDivElement]" !== n && "[object HTMLElement]" !== n)
                            return void console.error("Переданный обьект не соответствует формату");
                        e.classList.contains("is-initialized") || this.initItem(e)
                    }
                }
            }, {
                key: "initItem",
                value: function(e) {
                    var t = this;
                    e.classList.add("is-initialized");
                    var n = e.querySelector("form")
                      , i = n.querySelectorAll('button[type="reset"], [data-reset]');
                    n.noValidate = !0,
                    n.addEventListener("submit", (function(e) {
                        !function(e, t) {
                            var n = e.target.querySelectorAll('[aria-required="true"]')
                              , i = e.target.querySelectorAll('[data-validate-type="toggle-group"]');
                            f(n, i) && t && t.validationSuccessCallback ? t.validationSuccessCallback(e) : t && t.validationErrorCallback ? t.validationErrorCallback(e) : e.preventDefault()
                        }(e, t.callback)
                    }
                    )),
                    i.length && i.forEach((function(e) {
                        e.addEventListener("click", (function(e) {
                            e.preventDefault(),
                            y(n)
                        }
                        ))
                    }
                    ));
                    var a = n.querySelectorAll("[data-validate-type]")
                      , o = n.querySelectorAll("[data-limitations]:not([data-validate-type])")
                      , s = n.querySelectorAll("[data-matrix]:not([data-validate-type])");
                    a.length && a.forEach((function(e) {
                        !function(e) {
                            var t = e.dataset.validateType
                              , n = e.dataset.limitations ? e.dataset.limitations : null
                              , i = e.dataset.matrix ? e.dataset.matrix : null
                              , a = e.dataset.matrixLimitations ? e.dataset.matrixLimitations : null;
                            if ("toggle-group" !== t) {
                                var o = e.querySelector("input");
                                if (o || (o = e.querySelector("textarea")),
                                o || (o = e.querySelector("select")),
                                !o)
                                    return void console.error("В валидируемом блоке отсутствует поле формы");
                                o.setAttribute("aria-required", !0),
                                o.setAttribute("aria-invalid", !0),
                                n && c(o, n),
                                i && r(o, i, a),
                                "phone" === t && (o.value && function(e) {
                                    e.value.startsWith("+7") || (e.value.startsWith("8") ? e.value = e.value.replace("8", "+7") : e.value = "".concat("+7").concat(e.value));
                                    var t = "".concat("+7").concat("(___) ___ __ __")
                                      , n = t.replace(/\D/g, "")
                                      , i = 0
                                      , a = e.value.replace(/\D/g, "");
                                    n.length >= a.length && (a = n),
                                    e.value = t.replace(/./g, (function(e) {
                                        return /[_\d]/.test(e) && i < a.length ? a.charAt(i++) : i >= a.length ? "" : e
                                    }
                                    ))
                                }(o),
                                o.addEventListener("focus", l)),
                                o.addEventListener("input", (function() {
                                    _(t, o)
                                }
                                )),
                                _(t, o)
                            } else {
                                var s = e.querySelectorAll("input");
                                if (!s.length)
                                    return void console.error("В валидируемом блоке отсутствуют поля формы");
                                s.forEach((function(t) {
                                    t.setAttribute("aria-required", !0),
                                    t.setAttribute("aria-invalid", !0),
                                    t.addEventListener("input", (function() {
                                        m(e)
                                    }
                                    ))
                                }
                                )),
                                m(e)
                            }
                        }(e)
                    }
                    )),
                    o.length && o.forEach((function(e) {
                        var t, n, i;
                        n = (t = e).dataset.limitations ? t.dataset.limitations : null,
                        (i = t.querySelector("input")) || (i = t.querySelector("textarea")),
                        i ? n && c(i, n) : console.error("В валидируемом блоке отсутствует поле формы")
                    }
                    )),
                    s.length && s.forEach((function(e) {
                        var t, n, i, a;
                        n = (t = e).dataset.matrix ? t.dataset.matrix : null,
                        i = t.dataset.matrixLimitations ? t.dataset.matrixLimitations : null,
                        (a = t.querySelector("input")) || (a = t.querySelector("textarea")),
                        a ? n && r(a, n, i) : console.error("В валидируемом блоке отсутствует поле формы")
                    }
                    ))
                }
            }]) && a(t.prototype, n),
            o && a(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        window.FormsValidate = g
    },
    "./js/modules/form/init-custom-select.js": /*!***********************************************!*\
  !*** ./js/modules/form/init-custom-select.js ***!
  \***********************************************/
    /*! exports provided: initCustomSelect */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initCustomSelect", (function() {
            return a
        }
        ));
        var i = n(/*! ./custom-select */
        "./js/modules/form/custom-select.js")
          , a = function() {
            (new i.default).init()
        }
    },
    "./js/modules/form/init-form-validate.js": /*!***********************************************!*\
  !*** ./js/modules/form/init-form-validate.js ***!
  \***********************************************/
    /*! exports provided: initFormValidate */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initFormValidate", (function() {
            return l
        }
        ));
        var i = n(/*! ./form-validate */
        "./js/modules/form/form-validate.js")
          , a = n(/*! ./send-mail */
        "./js/modules/form/send-mail.js")
          , o = n(/*! ./form-send-callbacks */
        "./js/modules/form/form-send-callbacks.js")
          , c = document.querySelectorAll("[data-validate]")
          , r = function(e) {
            e.preventDefault()
        }
          , s = {
            base: {
                validationSuccessCallback: function(e) {
                    var t;
                    e.preventDefault(),
                    t = e.target,
                    setTimeout((function() {
                        window.clearForm(t)
                    }
                    ), 1e3)
                },
                validationErrorCallback: r
            },
            order: {
                validationSuccessCallback: function(e) {
                    e.preventDefault();
                    Object(a.sendMail)("/send.php", o.baseSendSuccess, o.baseSendError, new FormData(e.target), e.target)
                },
                validationErrorCallback: r
            }
        }
          , l = function() {
            c.length && (document.querySelectorAll('[data-validate-type="phone"] input').length && document.querySelector("html").addEventListener("input", (function(e) {
                var t = e.target;
                t.closest('[data-validate-type="phone"]') && t.closest('[data-validate-type="phone"]').querySelector("input").dispatchEvent(new Event("input"))
            }
            )),
            c.forEach((function(e) {
                var t = e.dataset.callback;
                return t || (t = "base"),
                new i.default(e,s[t]).init()
            }
            )))
        }
    },
    "./js/modules/form/send-mail.js": /*!**************************************!*\
  !*** ./js/modules/form/send-mail.js ***!
  \**************************************/
    /*! exports provided: sendMail */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "sendMail", (function() {
            return i
        }
        ));
        var i = function(e, t, n, i, a) {
            fetch(e, {
                method: "POST",
                body: i
            }).then((function(e) {
                if (!e.ok)
                    throw new Error;
                t(a)
            }
            )).catch((function(e) {
                n(e, a)
            }
            ))
        }
    },
    "./js/modules/init-active-main-card.js": /*!*********************************************!*\
  !*** ./js/modules/init-active-main-card.js ***!
  \*********************************************/
    /*! exports provided: initActiveMainCard */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initActiveMainCard", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelectorAll("[data-main-checkbook-wrapper]");
            e && e.forEach((function(e) {
                var t = e.querySelectorAll("[data-input]")
                  , n = e.querySelector("[data-all]")
                  , i = e.querySelectorAll("[data-wrapper-checkbox]");
                n.addEventListener("input", (function() {
                    for (var e = 0; e < t.length; e++)
                        t[e].checked = this.checked,
                        t[e].checked ? i.forEach((function(e) {
                            e.querySelector(".main-card").classList.add("is-active")
                        }
                        )) : i.forEach((function(e) {
                            e.querySelector(".main-card").classList.remove("is-active")
                        }
                        ))
                }
                ))
            }
            ))
        }
    },
    "./js/modules/init-block-show.js": /*!***************************************!*\
  !*** ./js/modules/init-block-show.js ***!
  \***************************************/
    /*! exports provided: initBlockShow */
    function(e, t, n) {
        "use strict";
        function i(e) {
            return function(e) {
                if (Array.isArray(e))
                    return a(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return a(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        n.r(t),
        n.d(t, "initBlockShow", (function() {
            return s
        }
        ));
        var c = document.querySelectorAll("[data-open-popup]")
          , r = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._card = t,
                this._cardId = this._card ? this._card.dataset.openPopup : null,
                this._popup = this._cardId ? document.querySelector("[data-popup=".concat(this._cardId, "]")) : null,
                this._popupContent = this._popup ? this._popup.querySelector("[data-popup-content]") : null,
                this._overlay = this._popup ? this._popup.querySelector("[data-overlay]") : null,
                this._dragButton = this._popup ? this._popup.querySelector("[data-drag-button]") : null,
                this._popupPrice = this._popup.querySelector("[data-popup-price]"),
                this._popupConfirmButton = this._popup.querySelector("[data-popup-confirm]"),
                this._finalPrice = document.querySelector("[data-final-price]"),
                this._topPos = null,
                this._blockHeight = null,
                this._offset = 0,
                this._size = document.querySelector(".input-range input") ? document.querySelector(".input-range input").value : 0,
                this._onCardClick = this._onCardClick.bind(this),
                this._onOverlayClick = this._onOverlayClick.bind(this),
                this._onPopupDragBtnTouchstart = this._onPopupDragBtnTouchstart.bind(this),
                this._onPopupDragBtnTouchmove = this._onPopupDragBtnTouchmove.bind(this),
                this._onPopupDragBtnTouchend = this._onPopupDragBtnTouchend.bind(this),
                this._onConfirmButtonClick = this._onConfirmButtonClick.bind(this)
            }
            var t, n, a;
            return t = e,
            (n = [{
                key: "_onOverlayClick",
                value: function() {
                    this._closePopup()
                }
            }, {
                key: "_closePopup",
                value: function() {
                    var e = this;
                    if (this._popup.classList.add("hide"),
                    this._popupContent.style = null,
                    setTimeout((function() {
                        e._overlay.style = null
                    }
                    ), 600),
                    this._overlay.removeEventListener("click", this._onOverlayClick),
                    this._dragButton.removeEventListener("touchstart", this._onPopupDragBtnTouchstart, {
                        passive: !1
                    }),
                    this._dragButton.removeEventListener("touchmove", this._onPopupDragBtnTouchmove, {
                        passive: !1
                    }),
                    this._dragButton.removeEventListener("touchend", this._onPopupDragBtnTouchend),
                    window.scrollLock.enableScrolling(),
                    "promo-code" === this._popup.dataset.popup) {
                        var t = this._popup.querySelector(".custom-input__error")
                          , n = document.getElementById("promo-code-input");
                        t.classList.remove("is-show"),
                        n.value = ""
                    }
                    if ("order" === this._popup.dataset.popup) {
                        var i = document.querySelector('input[name="promocode-name"]')
                          , a = document.querySelector('input[name="promocode-discount"]');
                        i.value = 0,
                        a.value = 0,
                        this._popup.classList.remove("is-active-discount")
                    }
                }
            }, {
                key: "_openPopup",
                value: function() {
                    this._popup.classList.remove("hide"),
                    this._blockHeight = this._popupContent.offsetHeight,
                    this._overlay.addEventListener("click", this._onOverlayClick),
                    this._dragButton.addEventListener("touchstart", this._onPopupDragBtnTouchstart, {
                        passive: !1
                    }),
                    this._dragButton.addEventListener("touchmove", this._onPopupDragBtnTouchmove, {
                        passive: !1
                    }),
                    this._dragButton.addEventListener("touchend", this._onPopupDragBtnTouchend),
                    window.scrollLock.disableScrolling()
                }
            }, {
                key: "_onPopupDragBtnTouchstart",
                value: function(e) {
                    var t = e.targetTouches[0];
                    this._topPos = t.pageY
                }
            }, {
                key: "_onPopupDragBtnTouchmove",
                value: function(e) {
                    var t = e.targetTouches[0].pageY;
                    this._offset = t - this._topPos;
                    var n = 1 - this._offset / this._blockHeight;
                    this._popupContent.style.overflow = "hidden",
                    this._offset > 0 && (this._overlay.style.opacity = "".concat(n),
                    this._popupContent.style.transition = "none",
                    this._popupContent.style.transform = "translateY(".concat(this._offset, "px)"))
                }
            }, {
                key: "_onPopupDragBtnTouchend",
                value: function() {
                    this._offset > this._blockHeight / 3 ? this._closePopup() : (this._popupContent.style = null,
                    this._overlay.style = null)
                }
            }, {
                key: "_setPrice",
                value: function() {
                    this._popupPrice && (this._popupPrice.textContent = "",
                    this._popupPrice.textContent = this._popup.dataset.popupFinalPrice.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "));
                    var e = this._popup.querySelector("[data-toggle-block]");
                    if ("acceptance" === this._popup.dataset.popup && 0 == +this._popup.dataset.popupFinalPrice) {
                        var t = 0;
                        t += +i(e.querySelectorAll("[data-cost]")).find((function(e) {
                            return e.classList.contains("is-active")
                        }
                        )).dataset.cost * this._size,
                        this._popup.dataset.popupFinalPrice = t,
                        this._popupPrice.textContent = "",
                        this._popupPrice.textContent = this._popup.dataset.popupFinalPrice.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                        e.dataset.costValue = t
                    }
                }
            }, {
                key: "_checkCard",
                value: function() {
                    if ("plan" !== this._card.dataset.openPopup) {
                        var e = this._card.querySelector("input")
                          , t = !1;
                        if (0 == +this._finalPrice.dataset.finalPrice)
                            return e.checked = !1,
                            void this._card.classList.remove("is-active");
                        t = i(this._popup.querySelectorAll("input")).find((function(e) {
                            return e.checked
                        }
                        ));
                        var n = this._popup.querySelector("[data-toggle-block]");
                        n && !t && (t = i(n.querySelectorAll("[data-cost]")).find((function(e) {
                            return e.classList.contains("is-active")
                        }
                        ))),
                        t ? (e.checked = !0,
                        this._card.classList.add("is-active")) : (e.checked = !1,
                        this._card.classList.remove("is-active"))
                    }
                }
            }, {
                key: "_onConfirmButtonClick",
                value: function() {
                    var e = document.querySelector("[data-price-bank]")
                      , t = e.querySelector("input");
                    this._popup.dataset.confirmPrice = +this._popup.dataset.popupFinalPrice;
                    var n = 0;
                    document.querySelectorAll("[data-confirm-price]").forEach((function(i) {
                        n += +i.dataset.confirmPrice,
                        "acceptance" === i.dataset.popup && (t.dataset.finalBankPrice = +t.dataset.acceptanceCost,
                        e.dataset.finalBankPrice = t.dataset.acceptanceCost,
                        n += t.checked ? +t.dataset.finalBankPrice : 0)
                    }
                    )),
                    this._finalPrice.textContent = n.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                    this._finalPrice.dataset.finalPrice = n,
                    this._closePopup(),
                    this._checkCard()
                }
            }, {
                key: "_setHideInputs",
                value: function() {
                    var e = this._popup.querySelector("[data-toggle-block]")
                      , t = this._popup.querySelector(".finish-option__blocks-card");
                    if (e) {
                        var n = i(e.querySelectorAll("[data-cost]")).find((function(e) {
                            return e.classList.contains("is-active")
                        }
                        ));
                        if (n) {
                            var a = e.dataset.toggleBlock
                              , o = document.querySelector('input[name="'.concat(a, '"]'))
                              , c = n.querySelector(".card-block__info");
                            o.value = (c.textContent.replace(/^ +| +$|( ) +/g, "$1") + " " + n.dataset.cost * this._size).trim()
                        }
                    }
                    if (t) {
                        var r = i(t.querySelectorAll("input")).find((function(e) {
                            return e.checked
                        }
                        ));
                        if (!r)
                            return;
                        var s = r.closest("[data-radio-buttons]").dataset.radioButtons
                          , l = document.querySelector('input[name="'.concat(s, '"]'))
                          , u = r.closest(".custom-toggle").querySelector(".custom-toggle__label");
                        l.value = u.textContent
                    }
                }
            }, {
                key: "_onCardClick",
                value: function(e) {
                    if (!e.target.closest(".btn--question") && !e.target.closest(".custom-toggle")) {
                        if ((e.target.closest(".custom-toggle") || "plan" === this._cardId) && !document.querySelector('[data-open-popup="plan"] input').checked)
                            return;
                        this._openPopup(),
                        this._setPrice(),
                        this._setHideInputs(),
                        this._popupConfirmButton && this._popupConfirmButton.addEventListener("click", this._onConfirmButtonClick)
                    }
                }
            }, {
                key: "init",
                value: function() {
                    this._card && this._card.addEventListener("click", this._onCardClick)
                }
            }]) && o(t.prototype, n),
            a && o(t, a),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
          , s = function() {
            c.length && c.forEach((function(e) {
                new r(e).init()
            }
            ))
        }
    },
    "./js/modules/init-calculator.js": /*!***************************************!*\
  !*** ./js/modules/init-calculator.js ***!
  \***************************************/
    /*! exports provided: initCalculator */
    function(e, t, n) {
        "use strict";
        function i(e) {
            return function(e) {
                if (Array.isArray(e))
                    return a(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return a(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        n.r(t),
        n.d(t, "initCalculator", (function() {
            return r
        }
        ));
        var c = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._form = document.querySelector("[data-main-form] form"),
                this._finalPrice = document.querySelector("[data-final-price]"),
                this._inputs = document.querySelectorAll("[data-input]"),
                this._popups = document.querySelectorAll("[data-popup]"),
                this._activePopup = null,
                this._activePopupButton = null,
                this._popupFinalPrice = 0,
                this._checkedRadioValue = 0,
                this._isPriceChange = !1,
                this._size = document.querySelector(".input-range input") ? document.querySelector(".input-range input").value : 0,
                this._onFormChange = this._onFormChange.bind(this)
            }
            var t, n, a;
            return t = e,
            (n = [{
                key: "_changePriceInToggleBlock",
                value: function(e) {
                    var t = e.closest("[data-toggle-block]")
                      , n = e.querySelector("[data-cost]");
                    if (n) {
                        var i = "" === n.dataset.notSizeDepend ? +n.dataset.cost : +n.dataset.cost * this._size
                          , a = t.dataset.toggleBlock
                          , o = document.querySelector('input[name="'.concat(a, '"]'));
                        if (e.closest('[data-popup="thermal-imager"]')) {
                            var c = this._activePopup.querySelector('input[name="checkbox-thermal-imaging-report"]')
                              , r = +n.dataset.cost
                              , s = 0;
                            if (c.checked && (s = +c.dataset.cost),
                            this._popupFinalPrice = r + s,
                            o) {
                                var l = e.querySelector(".card-block__info").textContent.replace(/^ +| +$|( ) +/g, "$1") + " " + i;
                                o.value = l.trim()
                            }
                        } else if (n.classList.contains("is-active") || (i = 0),
                        this._popupFinalPrice += this._isPriceChange ? i : i - +t.dataset.costValue,
                        t.dataset.costValue = i,
                        o) {
                            var u = e.querySelector(".card-block__info");
                            o.value = u.textContent.replace(/^ +| +$|( ) +/g, "$1") + " " + i
                        }
                    }
                }
            }, {
                key: "_radioChanged",
                value: function(e) {
                    var t = this;
                    if (e.dataset.connectedInput) {
                        var n = e.closest("[data-radio-buttons]")
                          , i = document.querySelector("#".concat(e.dataset.connectedInput))
                          , a = +e.dataset.cost;
                        if (i.dataset.cost = a,
                        i.checked) {
                            this._popupFinalPrice = this._popupFinalPrice - n.dataset.checkedCost + a;
                            var o = i.closest("[data-checkbox-input]").dataset.checkboxInput
                              , c = document.querySelector('input[name="'.concat(o, '"]'))
                              , r = i.closest(".custom-toggle").querySelector(".custom-toggle__label");
                            c.value = i.checked ? r.textContent + " " + a : r.textContent + " 0"
                        }
                        i.dataset.cost = a,
                        n.dataset.checkedCost = a;
                        var s = n.dataset.radioButtons
                          , l = document.querySelector('input[name="'.concat(s, '"]'))
                          , u = e.closest(".custom-toggle").querySelector(".custom-toggle__label");
                        l.value = u.textContent
                    } else if (e.dataset.cost) {
                        var d = e.name
                          , p = document.querySelectorAll('input[name="'.concat(d, '"]'))
                          , h = "" === e.dataset.notSizeDepend ? +e.dataset.cost : +e.dataset.cost * this._size;
                        this._checkedRadioValue = e.dataset.checkedValue ? e.dataset.checkedValue : 0,
                        e.checked || (h = 0),
                        this._popupFinalPrice += this._isPriceChange ? h : h - this._checkedRadioValue,
                        this._checkedRadioValue = h,
                        p.forEach((function(e) {
                            e.dataset.checkedValue = t._checkedRadioValue
                        }
                        ));
                        var f = e.closest("[data-toggle-check-wrapper]");
                        if (f) {
                            var v = f.dataset.toggleCheckWrapper
                              , m = document.querySelector('input[name="'.concat(v, '"]'))
                              , _ = e.closest(".main-card").querySelector(".main-card__title");
                            m.value = _.textContent + " " + h
                        }
                    }
                }
            }, {
                key: "_checkboxChanged",
                value: function(e) {
                    var t = this;
                    if ((!e.closest('[data-popup="thermal-imager"]') || i(this._activePopup.querySelector("[data-toggle-block]").querySelectorAll("[data-cost]")).find((function(e) {
                        return e.classList.contains("is-active")
                    }
                    ))) && e.dataset.cost) {
                        var n = "" === e.dataset.notSizeDepend ? +e.dataset.cost : +e.dataset.cost * this._size
                          , a = e.closest("[data-checkbox-input]");
                        if (a) {
                            var o = a.dataset.checkboxInput
                              , c = document.querySelector('input[name="'.concat(o, '"]'));
                            c && (c.value = e.checked ? n : " 0")
                        }
                        if ("" === e.dataset.all) {
                            if (this._popupFinalPrice = e.checked ? this._popupFinalPrice + n - +e.dataset.checkedCost : this._popupFinalPrice - n,
                            this._activePopup.querySelector("[data-checkbox-choose-al-wrapper]").querySelectorAll("input").forEach((function(n) {
                                var i = n.closest("[data-checkbox-input]").dataset.checkboxInput
                                  , a = document.querySelector('input[name="'.concat(i, '"]'))
                                  , o = "" === n.dataset.notSizeDepend ? +n.dataset.cost : +n.dataset.cost * t._size;
                                a.value = e.checked ? o : " 0"
                            }
                            )),
                            e.closest('[data-popup="acceptance"]')) {
                                var r = document.querySelectorAll('[data-connected-input="checkbox-specialist"]')
                                  , s = document.querySelector('input[name="checkbox-specialist"]');
                                r && r.forEach((function(e) {
                                    e.checked && (e.closest("[data-radio-buttons]").dataset.checkedCost = s.dataset.cost)
                                }
                                ))
                            }
                        } else {
                            this._popupFinalPrice = e.checked ? this._popupFinalPrice + n : this._popupFinalPrice - n;
                            var l = document.querySelectorAll('[data-connected-input="'.concat(e.name, '"]'));
                            l && l.forEach((function(e) {
                                e.checked && (e.closest("[data-radio-buttons]").dataset.checkedCost = n)
                            }
                            ))
                        }
                    }
                }
            }, {
                key: "_changeFinalPrice",
                value: function(e) {
                    var t = e.dataset.popup;
                    document.querySelector("[data-open-popup=".concat(t, "]")).querySelector("input").checked && (e.dataset.confirmPrice = +e.dataset.popupFinalPrice,
                    this._changedFinalPrice += +e.dataset.confirmPrice)
                }
            }, {
                key: "_updateCost",
                value: function() {
                    var e = this;
                    this._isPriceChange = !0,
                    this._changedFinalPrice = 0,
                    this._popups.forEach((function(t) {
                        var n = t.querySelector("[data-popup-price]");
                        if (n && 0 != +t.dataset.popupFinalPrice) {
                            e._popupFinalPrice = 0;
                            var i = t.querySelectorAll("[data-input]")
                              , a = t.querySelector("[data-toggle-block]");
                            if (a) {
                                var o = a.querySelector(".card-block.is-active");
                                if (o) {
                                    var c = o.closest(".cswiper-slide");
                                    e._changePriceInToggleBlock(c)
                                }
                            }
                            if (i.forEach((function(t) {
                                t.checked && ("checkbox" === t.type && "" !== t.dataset.all && e._checkboxChanged(t),
                                "radio" !== t.type || t.dataset.connectedInput || e._radioChanged(t))
                            }
                            )),
                            "plan" === t.dataset.popup) {
                                var r = document.querySelector('[data-open-popup="plan"] input');
                                r.checked && (e._popupFinalPrice = e._popupFinalPrice + r.dataset.cost * e._size)
                            }
                            t.dataset.popupFinalPrice = e._popupFinalPrice,
                            n.textContent = e._popupFinalPrice,
                            e._changeFinalPrice(t)
                        }
                    }
                    )),
                    this._changedFinalPrice > 0 && (this._finalPrice.textContent = this._changedFinalPrice,
                    this._finalPrice.dataset.finalPrice = this._changedFinalPrice)
                }
            }, {
                key: "_onFormChange",
                value: function(e) {
                    var t = e.target;
                    "range" === t.type && (this._size = t.value,
                    this._updateCost()),
                    this._isPriceChange = !1,
                    this._activePopup = t.closest("[data-popup]"),
                    this._activePopup && (this._popupFinalPrice = +this._activePopup.dataset.popupFinalPrice,
                    this._activePopupButton = this._activePopup.querySelector("[data-popup-price]"),
                    "radio" === t.type && this._radioChanged(t),
                    "checkbox" === t.type && this._checkboxChanged(t),
                    t.closest("[data-toggle-block]") && this._changePriceInToggleBlock(t),
                    this._activePopup.dataset.popupFinalPrice = this._popupFinalPrice,
                    this._activePopupButton && (this._activePopupButton.textContent = this._popupFinalPrice.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")));
                    var n = t.closest("[data-price-bank]");
                    if (n) {
                        var i = +this._finalPrice.dataset.finalPrice
                          , a = document.querySelector('[data-open-popup="acceptance"] input').checked ? +t.dataset.acceptanceCost : +t.dataset.cost;
                        t.dataset.finalBankPrice = a,
                        n.dataset.finalBankPrice = a,
                        this._finalPrice.dataset.finalPrice = t.checked ? i + a : i - a,
                        this._finalPrice.textContent = "",
                        this._finalPrice.textContent = this._finalPrice.dataset.finalPrice;
                        var o = t.checked ? a : "0";
                        document.querySelector('input[name="bank-estimate"]').value = o
                    }
                    t.closest("[data-price-plan]") && this._changePlanPrice()
                }
            }, {
                key: "_changePlanPrice",
                value: function() {
                    var e = +this._finalPrice.dataset.finalPrice
                      , t = document.querySelector('[data-open-popup="plan"] input')
                      , n = document.querySelector('input[name="plan-general"]')
                      , i = t.dataset.cost * this._size
                      , a = document.querySelector('[data-popup="plan"]');
                    this._finalPrice.dataset.finalPrice = t.checked ? e + i : e - +a.dataset.popupFinalPrice,
                    a.dataset.popupPlanPrice = t.checked ? i : 0,
                    a.dataset.popupFinalPrice = +a.dataset.popupPlanPrice,
                    a.dataset.confirmPrice = +a.dataset.popupPlanPrice,
                    this._finalPrice.textContent = "",
                    this._finalPrice.textContent = this._finalPrice.dataset.finalPrice,
                    n.value = i,
                    t.checked || a.querySelectorAll("input").forEach((function(e) {
                        e.checked = !1,
                        e.classList.contains("visually-hidden") && (e.value = 0)
                    }
                    ))
                }
            }, {
                key: "init",
                value: function() {
                    this._form && this._form.addEventListener("change", this._onFormChange)
                }
            }]) && o(t.prototype, n),
            a && o(t, a),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
          , r = function() {
            var e = new c;
            e.init(),
            window.calculator = e
        }
    },
    "./js/modules/init-check-all.js": /*!**************************************!*\
  !*** ./js/modules/init-check-all.js ***!
  \**************************************/
    /*! exports provided: initCheckAll */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initCheckAll", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelectorAll("[data-checkbooks-wrapper]");
            e.length && e.forEach((function(e) {
                var t = e.querySelector("[data-checkbox-choose-al-wrapper]")
                  , n = t.querySelectorAll("[data-input]")
                  , i = e.querySelector("[data-all]")
                  , a = 0;
                t.addEventListener("input", (function(e) {
                    var t = e.target;
                    if (t.dataset.cost)
                        if (a += t.checked ? 1 : -1,
                        n.length === a) {
                            i.checked = !0;
                            var o = new CustomEvent("input");
                            i.dispatchEvent(o)
                        } else
                            i.checked = !1
                }
                )),
                i.addEventListener("input", (function(e) {
                    var t = e.target;
                    a = t.checked ? n.length : 0;
                    for (var o = document.querySelector(".input-range input").value, c = 0, r = 0, s = 0; s < n.length; s++) {
                        if (!n[s].dataset.cost)
                            return void (i.checked = !1);
                        n[s].checked && (r += "" === n[s].dataset.notSizeDepend ? +n[s].dataset.cost : +n[s].dataset.cost * o),
                        n[s].checked = t.checked,
                        c += "" === n[s].dataset.notSizeDepend ? +n[s].dataset.cost : +n[s].dataset.cost * o
                    }
                    i.dataset.cost = c,
                    i.dataset.checkedCost = r
                }
                ))
            }
            ))
        }
    },
    "./js/modules/init-check.js": /*!**********************************!*\
  !*** ./js/modules/init-check.js ***!
  \**********************************/
    /*! exports provided: initCheck */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initCheck", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelectorAll("[data-wrapper-checkbox]");
            if (e) {
                e.forEach((function(e) {
                    e.querySelectorAll("[data-input]").forEach((function(t) {
                        t.addEventListener("click", (function() {
                            !function(e, t) {
                                var n = t.querySelector(".main-card");
                                e.checked ? n.classList.add("is-active") : n.classList.remove("is-active")
                            }(t, e)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
    },
    "./js/modules/init-content-modal.js": /*!******************************************!*\
  !*** ./js/modules/init-content-modal.js ***!
  \******************************************/
    /*! exports provided: initContentModal */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initContentModal", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelectorAll(".btn--question")
              , t = document.querySelector('[data-modal="info"]');
            if (t) {
                var n = t.querySelector(".modal-info__text h2")
                  , i = t.querySelector(".modal-info__text p")
                  , a = t.querySelector("img");
                e.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var t = e.querySelector("[data-modal-title]")
                          , o = e.querySelector("[data-modal-text]")
                          , c = e.dataset.modalImage;
                        n.textContent = t.textContent,
                        i.textContent = o.textContent,
                        a.src = "/wp-content/themes/uni/img/content/modal/".concat(c, "@2x.png")
                    }
                    ))
                }
                ))
            }
        }
    },
    "./js/modules/init-delete.js": /*!***********************************!*\
  !*** ./js/modules/init-delete.js ***!
  \***********************************/
    /*! exports provided: initDelete */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initDelete", (function() {
            return a
        }
        ));
        var i = n(/*! ./reset-card */
        "./js/modules/reset-card.js")
          , a = function() {
            var e = document.querySelectorAll("[data-delete]");
            if (e) {
                var t = document.querySelector("[data-order-price]")
                  , n = document.querySelector("[data-final-price]")
                  , a = document.querySelector('[data-popup="order"]')
                  , o = document.querySelector('input[name="promocode-name"]')
                  , c = document.querySelector('input[name="promocode-discount"]');
                e.forEach((function(e) {
                    e.onclick = function(r) {
                        var s = r.target.closest(".btn--delete");
                        if (s) {
                            var l = s.closest(".delete-item").dataset.deleteCard;
                            Object(i.resetCard)(l),
                            s.closest(".delete-item").remove();
                            var u = e.querySelectorAll(".order-card")
                              , d = 0;
                            if (u.forEach((function(e) {
                                d += +e.dataset.cardPrice
                            }
                            )),
                            a.classList.contains("js-bonus-10") && d / .9 < 2500)
                                a.classList.remove("is-active-discount"),
                                a.querySelectorAll(".order-card").forEach((function(e) {
                                    var t = e.querySelector(".order-card__price")
                                      , n = +e.dataset.cardPrice;
                                    t.innerHTML = "".concat((n / .9).toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "), " <span>₽</span>"),
                                    e.dataset.cardPrice = n / .9
                                }
                                )),
                                o.value = 0,
                                c.value = 0,
                                d = 0,
                                u.forEach((function(e) {
                                    d += +e.dataset.cardPrice
                                }
                                ));
                            if (a.classList.contains("is-active-discount") && 0 === d && (a.classList.remove("is-active-discount"),
                            o.value = 0,
                            c.value = 0),
                            t.innerHTML = "",
                            n.innerHTML = "",
                            t.innerHTML = d.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                            n.innerHTML = d.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                            n.dataset.finalPrice = d,
                            document.querySelector('input[name="final-price"]').value = d,
                            a.classList.contains("js-bonus-10") && d >= 2500)
                                a.querySelector("[data-promocode-discount]").innerHTML = "".concat(.1 * d),
                                c.value = .1 * d
                        }
                    }
                }
                ))
            }
        }
    },
    "./js/modules/init-promocode.js": /*!**************************************!*\
  !*** ./js/modules/init-promocode.js ***!
  \**************************************/
    /*! exports provided: initPromocode */
    function(e, t, n) {
        "use strict";
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        n.r(t),
        n.d(t, "initPromocode", (function() {
            return o
        }
        ));
        var a = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._promocodeBtn = document.querySelector("[data-check-promocode]"),
                this._promocodeInput = document.getElementById("promo-code-input"),
                this._orderPopup = document.querySelector('[data-popup="order"]'),
                this._promocodeValue = document.querySelector("[data-promocode-value]"),
                this._promocodeDiscount = document.querySelector("[data-promocode-discount]"),
                this._finalPriceElement = document.querySelector("[data-order-price]"),
                this._promocodePopup = document.querySelector('[data-popup="promo-code"]'),
                this._hiddenPromocodeName = document.querySelector('input[name="promocode-name"]'),
                this._hiddenPromocodeDiscount = document.querySelector('input[name="promocode-discount"]'),
                this._promocodeError = null,
                this._onPromocodeBtnClick = this._onPromocodeBtnClick.bind(this)
            }
            var t, n, a;
            return t = e,
            (n = [{
                key: "_setBonus10Promocode",
                value: function() {
                    var e = +this._finalPriceElement.textContent.replace(" ", "");
                    if (e >= 2500) {
                        this._promocodeError.classList.remove("is-show");
                        var t = this._orderPopup.querySelectorAll(".order-card");
                        this._orderPopup.classList.add("is-active-discount"),
                        this._orderPopup.classList.add("js-bonus-10"),
                        this._promocodeValue.innerHTML = "10%";
                        var n = .1 * e;
                        this._promocodeDiscount.innerHTML = "".concat(String(n).replace(/^ +| +$|( ) +/g, "$1")),
                        this._finalPriceElement.innerHTML = "".concat(String(e - n).replace(/^ +| +$|( ) +/g, "$1")),
                        t.forEach((function(e) {
                            var t = e.querySelector(".order-card__price")
                              , n = +e.dataset.cardPrice;
                            t.innerHTML = "<s>".concat(e.dataset.cardPrice, "<span>₽</span></s>").concat(String(.9 * n).replace(/^ +| +$|( ) +/g, "$1"), "<span>₽</span>"),
                            e.dataset.cardPrice = .9 * n
                        }
                        )),
                        this._hiddenPromocodeName.value = "bonus10",
                        this._hiddenPromocodeDiscount.value = n
                    } else
                        this._hiddenPromocodeName.value = "",
                        this._hiddenPromocodeDiscount.value = 0,
                        this._promocodeError.innerHTML = "Для применения промокода сумма заказа должна быть больше 2 500₽",
                        this._promocodeError.classList.add("is-show")
                }
            }, {
                key: "_onPromocodeBtnClick",
                value: function() {
                    this._promocodeError = this._promocodePopup.querySelector(".custom-input__error"),
                    "bonus10" === this._promocodeInput.value.toLowerCase() ? this._setBonus10Promocode() : (this._promocodeError.innerHTML = "Промокод не подходит",
                    this._promocodeError.classList.add("is-show"),
                    this._hiddenPromocodeName.value = "",
                    this._hiddenPromocodeDiscount.value = 0)
                }
            }, {
                key: "init",
                value: function() {
                    this._promocodeBtn.addEventListener("click", this._onPromocodeBtnClick)
                }
            }]) && i(t.prototype, n),
            a && i(t, a),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
          , o = function() {
            (new a).init()
        }
    },
    "./js/modules/init-radio-toggle.js": /*!*****************************************!*\
  !*** ./js/modules/init-radio-toggle.js ***!
  \*****************************************/
    /*! exports provided: initRadioToggle */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initRadioToggle", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelector("[data-toggle-check-wrapper]");
            if (e) {
                var t = e.querySelectorAll('input[type="radio"]');
                t.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        !function(e) {
                            for (var n = 0; n < t.length; n++)
                                t[n] !== e && (t[n].oldChecked = !1);
                            if (e.oldChecked && (e.checked = !1),
                            e.oldChecked = e.checked,
                            !e.oldChecked) {
                                var i = new CustomEvent("change",{
                                    bubbles: !0
                                });
                                e.dispatchEvent(i)
                            }
                        }(e)
                    }
                    ))
                }
                ))
            }
        }
    },
    "./js/modules/init-range-value.js": /*!****************************************!*\
  !*** ./js/modules/init-range-value.js ***!
  \****************************************/
    /*! exports provided: initRangeValue */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initRangeValue", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelector("[data-size-range]");
            if (e) {
                var t = document.querySelector("[data-input]");
                t.addEventListener("input", (function() {
                    e.innerHTML = t.value
                }
                ))
            }
        }
    },
    "./js/modules/init-results.js": /*!************************************!*\
  !*** ./js/modules/init-results.js ***!
  \************************************/
    /*! exports provided: initResults */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initResults", (function() {
            return c
        }
        ));
        var i = n(/*! ./init-delete */
        "./js/modules/init-delete.js");
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var o = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._resultBtn = document.querySelector("[data-final-btn]"),
                this._orderBlock = document.querySelector(".orders-blocks__block"),
                this._orderPrice = document.querySelector("[data-order-price]"),
                this._hiddenInput = document.querySelector('input[name="final-price"]'),
                this._resultArr = [],
                this._icons = {
                    bank: "icon-ruble",
                    acceptance: "icon-home",
                    inventory: "icon-area-check",
                    "thermal-imager": "icon-thermal",
                    plan: "icon-img"
                },
                this._onResultBtnClick = this._onResultBtnClick.bind(this)
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "_renderCards",
                value: function() {
                    this._orderBlock.innerHTML = this._resultArr.map((function(e) {
                        return '\n        <div class="order-card delete-item" data-delete-card="'.concat(e.id, '" data-card-price="').concat(e.price, '">\n          <div class="order-card__icon">\n            <svg width="40" height="40" aria-hidden="true">\n              <use xlink:href="#').concat(e.icon, '"></use>\n            </svg>\n          </div>\n          <div class="order-card__info">\n            <button class="btn btn--transparent btn--delete" type="button" aria-label="Кнопка удаление заказа">\n              <svg width="24" height="24" aria-hidden="true">\n                <use xlink:href="#icon-delete"></use>\n              </svg>\n            </button>\n            <p class="order-card__info-text">').concat(e.title, '</p>\n            <div class="order-card__info-footer">\n              <p class="order-card__price">').concat(e.price.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "), "<span>₽</span>\n              </p>\n            </div>\n          </div>\n        </div>\n    ")
                    }
                    )).join("")
                }
            }, {
                key: "_onResultBtnClick",
                value: function() {
                    var e = this;
                    this._resultArr = [],
                    this._cards = document.querySelectorAll("[data-main-card]"),
                    this._cards.forEach((function(t) {
                        if (t.querySelector("input").checked) {
                            var n = t.dataset.mainCard
                              , i = document.querySelector("[data-popup=".concat(n, "]"))
                              , a = {}
                              , o = t.querySelector(".main-card__title");
                            a.title = o.textContent,
                            a.icon = e._icons[n],
                            a.id = n,
                            a.price = i ? i.dataset.confirmPrice : t.dataset.finalBankPrice,
                            e._resultArr.push(a)
                        }
                    }
                    )),
                    this._orderBlock.innerHTML = "",
                    this._orderPrice.innerHTML = "0",
                    this._resultArr.length > 0 && (this._renderCards(),
                    Object(i.initDelete)(),
                    this._orderPrice.innerHTML = this._resultBtn.querySelector("span").dataset.finalPrice.toString().replace(/[^0-9.]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                    this._hiddenInput.value = this._resultBtn.querySelector("span").dataset.finalPrice)
                }
            }, {
                key: "init",
                value: function() {
                    this._resultBtn && this._resultBtn.addEventListener("click", this._onResultBtnClick)
                }
            }]) && a(t.prototype, n),
            o && a(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
          , c = function() {
            (new o).init()
        }
    },
    "./js/modules/init-sliders.js": /*!************************************!*\
  !*** ./js/modules/init-sliders.js ***!
  \************************************/
    /*! exports provided: initSliders */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initSliders", (function() {
            return a
        }
        ));
        var i = document.querySelectorAll(".cswiper-sliders")
          , a = function() {
            i.length && i.forEach((function(e) {
                return function(e) {
                    var t = "" === e.dataset.sliderLoop
                      , n = new cswiper(e,{
                        slidesPerView: "auto",
                        spaceBetween: 15,
                        loop: t
                    })
                      , i = e.querySelectorAll(".cswiper-slide");
                    e.closest('[data-popup="acceptance"]') && i.forEach((function(e) {
                        var t = e.querySelector(".card-block");
                        e.classList.contains("cswiper-slide-active") ? t.classList.add("is-active") : t.classList.remove("is-active")
                    }
                    )),
                    n.on("click", (function() {
                        var a = 0;
                        (i.forEach((function(e, t) {
                            e === n.clickedSlide && (a = t)
                        }
                        )),
                        n.slideTo(a),
                        i.forEach((function(e) {
                            e.querySelector(".card-block").classList.remove("is-active")
                        }
                        )),
                        i.forEach((function(e) {
                            e.querySelector(".card-block").classList.remove("is-active")
                        }
                        )),
                        n.clickedSlide.querySelector(".card-block").classList.add("is-active"),
                        t) && e.querySelectorAll('[data-slide="'.concat(n.clickedSlide.dataset.slide, '"]')).forEach((function(e) {
                            e.querySelector(".card-block").classList.add("is-active")
                        }
                        ))
                    }
                    ))
                }(e)
            }
            ))
        }
    },
    "./js/modules/init-toggle-change.js": /*!******************************************!*\
  !*** ./js/modules/init-toggle-change.js ***!
  \******************************************/
    /*! exports provided: initToggleChangeEvent */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initToggleChangeEvent", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelectorAll("[data-toggle-block]");
            e.length && e.forEach((function(e) {
                e.querySelectorAll("[data-toggle]").forEach((function(e) {
                    e.addEventListener("click", (function() {
                        var t = new CustomEvent("change",{
                            bubbles: !0
                        });
                        e.dispatchEvent(t)
                    }
                    ))
                }
                ))
            }
            ))
        }
    },
    "./js/modules/init-toggle-check.js": /*!*****************************************!*\
  !*** ./js/modules/init-toggle-check.js ***!
  \*****************************************/
    /*! exports provided: initToggleChecked */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "initToggleChecked", (function() {
            return i
        }
        ));
        var i = function() {
            var e = document.querySelectorAll("[data-toggle-check-wrapper]");
            e && e.forEach((function(e) {
                for (var t = e.querySelectorAll("[data-input]"), n = e.querySelectorAll("[data-block-toggle]"), i = function(e) {
                    t[e].checked && n[e].classList.add("is-active"),
                    t[e].addEventListener("change", (function(t) {
                        var i = t.target;
                        n.forEach((function(e) {
                            return e.classList.remove("is-active")
                        }
                        )),
                        n[e].classList.add("is-active"),
                        i.checked || n[e].classList.remove("is-active")
                    }
                    ))
                }, a = 0; a < t.length; a++)
                    i(a);
                t.forEach((function(e) {
                    e.addEventListener("click", (function() {
                        n.forEach((function(e) {
                            return e.classList.remove("is-active")
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ))
        }
    },
    "./js/modules/modals/init-modals.js": /*!******************************************!*\
  !*** ./js/modules/modals/init-modals.js ***!
  \******************************************/
    /*! exports provided: modals, initModals */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "modals", (function() {
            return i
        }
        )),
        n.d(t, "initModals", (function() {
            return c
        }
        ));
        var i, a = n(/*! ./modals */
        "./js/modules/modals/modals.js"), o = {
            default: {
                preventDefault: !0,
                stopPlay: !0,
                lockFocus: !0,
                startFocus: !0,
                focusBack: !0,
                eventTimeout: 400,
                openCallback: !1,
                closeCallback: !1
            },
            ready: {
                closeCallback: function() {
                    document.location.reload()
                }
            }
        }, c = function() {
            var e = document.querySelectorAll(".modal");
            e.length && e.forEach((function(e) {
                setTimeout((function() {
                    e.classList.remove("modal--preload")
                }
                ), 100)
            }
            )),
            i = new a.Modals(o),
            window.modals = i
        }
    },
    "./js/modules/modals/modals.js": /*!*************************************!*\
  !*** ./js/modules/modals/modals.js ***!
  \*************************************/
    /*! exports provided: Modals */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "Modals", (function() {
            return r
        }
        ));
        var i = n(/*! ../../utils/scroll-lock */
        "./js/utils/scroll-lock.js")
          , a = n(/*! ../../utils/focus-lock */
        "./js/utils/focus-lock.js");
        function o(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var r = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, e),
                this._scrollLock = new i.ScrollLock,
                this._focusLock = new a.FocusLock,
                this._modalOpenElements = document.querySelectorAll("[data-open-modal]"),
                this._openedModalElement = null,
                this._modalName = null,
                this._enableScrolling = !0,
                this._settingKey = "default",
                this._settings = t,
                this._preventDefault = this._settings[this._settingKey].preventDefault,
                this._stopPlay = this._settings[this._settingKey].stopPlay,
                this._lockFocus = this._settings[this._settingKey].lockFocus,
                this._startFocus = this._settings[this._settingKey].startFocus,
                this._focusBack = this._settings[this._settingKey].focusBack,
                this._eventTimeout = this._settings[this._settingKey].eventTimeout,
                this._openCallback = this._settings[this._settingKey].openCallback,
                this._closeCallback = this._settings[this._settingKey].closeCallback,
                this._documentKeydownHandler = this._documentKeydownHandler.bind(this),
                this._documentClickHandler = this._documentClickHandler.bind(this),
                this._modalClickHandler = this._modalClickHandler.bind(this),
                this._init()
            }
            var t, n, r;
            return t = e,
            (n = [{
                key: "_init",
                value: function() {
                    this._modalOpenElements.length && document.addEventListener("click", this._documentClickHandler)
                }
            }, {
                key: "_setSettings",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._settingKey;
                    this._settings[e] && (this._preventDefault = "boolean" == typeof this._settings[e].preventDefault ? this._settings[e].preventDefault : this._settings[this._settingKey].preventDefault,
                    this._stopPlay = "boolean" == typeof this._settings[e].stopPlay ? this._settings[e].stopPlay : this._settings[this._settingKey].stopPlay,
                    this._lockFocus = "boolean" == typeof this._settings[e].lockFocus ? this._settings[e].lockFocus : this._settings[this._settingKey].lockFocus,
                    this._startFocus = "boolean" == typeof this._settings[e].startFocus ? this._settings[e].startFocus : this._settings[this._settingKey].startFocus,
                    this._focusBack = "boolean" == typeof this._settings[e].lockFocus ? this._settings[e].focusBack : this._settings[this._settingKey].focusBack,
                    this._eventTimeout = "number" == typeof this._settings[e].eventTimeout ? this._settings[e].eventTimeout : this._settings[this._settingKey].eventTimeout,
                    this._openCallback = this._settings[e].openCallback || this._settings[this._settingKey].openCallback,
                    this._closeCallback = this._settings[e].closeCallback || this._settings[this._settingKey].closeCallback)
                }
            }, {
                key: "_documentClickHandler",
                value: function(e) {
                    var t = e.target;
                    t.closest("[data-open-modal]") && (e.preventDefault(),
                    this._modalName = t.closest("[data-open-modal]").dataset.openModal,
                    this._modalName && this.open())
                }
            }, {
                key: "_documentKeydownHandler",
                value: function(e) {
                    ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(),
                    this.close(document.querySelector(".modal.is-active").dataset.modal))
                }
            }, {
                key: "_modalClickHandler",
                value: function(e) {
                    var t = e.target;
                    t.closest("[data-close-modal]") && this.close(t.closest("[data-modal]").dataset.modal)
                }
            }, {
                key: "_addListeners",
                value: function(e) {
                    e.addEventListener("click", this._modalClickHandler),
                    document.addEventListener("keydown", this._documentKeydownHandler)
                }
            }, {
                key: "_removeListeners",
                value: function(e) {
                    e.removeEventListener("click", this._modalClickHandler),
                    document.removeEventListener("keydown", this._documentKeydownHandler)
                }
            }, {
                key: "_stopInteractive",
                value: function(e) {
                    this._stopPlay && (e.querySelectorAll("video, audio").forEach((function(e) {
                        return e.pause()
                    }
                    )),
                    e.querySelectorAll("[data-iframe]").forEach((function(e) {
                        e.querySelector("iframe").contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*")
                    }
                    )))
                }
            }, {
                key: "_autoPlay",
                value: function(e) {
                    e.querySelectorAll("[data-iframe]").forEach((function(e) {
                        e.closest("[data-auto-play]") && e.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                    }
                    ))
                }
            }, {
                key: "open",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._modalName
                      , n = document.querySelector('[data-modal="'.concat(t, '"]'));
                    n && !n.classList.contains("is-active") && (document.removeEventListener("click", this._documentClickHandler),
                    this._openedModalElement = document.querySelector(".modal.is-active"),
                    this._openedModalElement && (this._enableScrolling = !1,
                    this.close(this._openedModalElement.dataset.modal)),
                    this._setSettings(t),
                    n.classList.add("is-active"),
                    n.scrollTop = 0,
                    this._openedModalElement || this._scrollLock.disableScrolling(),
                    this._openCallback && this._openCallback(),
                    this._lockFocus && this._focusLock.lock(".modal.is-active", this._startFocus),
                    setTimeout((function() {
                        e._addListeners(n),
                        e._autoPlay(n),
                        document.addEventListener("click", e._documentClickHandler)
                    }
                    ), this._eventTimeout))
                }
            }, {
                key: "close",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._modalName
                      , n = document.querySelector('[data-modal="'.concat(t, '"]'));
                    document.removeEventListener("click", this._documentClickHandler),
                    n && n.classList.contains("is-active") && (this._lockFocus && this._focusLock.unlock(this._focusBack),
                    n.classList.remove("is-active"),
                    this._removeListeners(n),
                    this._stopInteractive(n),
                    this._closeCallback && this._closeCallback(),
                    this._enableScrolling && setTimeout((function() {
                        e._scrollLock.enableScrolling()
                    }
                    ), this._eventTimeout),
                    setTimeout((function() {
                        document.addEventListener("click", e._documentClickHandler)
                    }
                    ), this._eventTimeout),
                    this._setSettings("default"),
                    this._enableScrolling = !0)
                }
            }]) && c(t.prototype, n),
            r && c(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    },
    "./js/modules/reset-card.js": /*!**********************************!*\
  !*** ./js/modules/reset-card.js ***!
  \**********************************/
    /*! exports provided: resetCard */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "resetCard", (function() {
            return i
        }
        ));
        var i = function(e) {
            var t = document.querySelector('[data-main-card="'.concat(e, '"]')).closest(".main-card")
              , n = t.querySelector("input");
            if (t.classList.remove("is-active"),
            n.checked = !1,
            "bank" !== e) {
                var i = document.querySelector('[data-popup="'.concat(e, '"]'));
                if (i.dataset.confirmPrice = "0",
                i.dataset.popupFinalPrice = "0",
                i.querySelectorAll('input[type="checkbox"]').forEach((function(e) {
                    e.checked = !1
                }
                )),
                i.querySelectorAll('input[type="hidden"]').forEach((function(e) {
                    e.value = ""
                }
                )),
                "thermal-imager" === e)
                    i.querySelectorAll(".card-block").forEach((function(e) {
                        e.classList.contains("is-active") && e.classList.remove("is-active")
                    }
                    ));
                if ("inventory" === e) {
                    var a = i.querySelectorAll(".main-card")
                      , o = i.querySelectorAll("input");
                    a.forEach((function(e) {
                        e.classList.contains("is-active") && e.classList.remove("is-active")
                    }
                    )),
                    o.forEach((function(e) {
                        e.checked = !1,
                        e.dataset.checkedValue = "0"
                    }
                    ))
                }
            } else {
                document.querySelector('input[name="bank-estimate"]').value = 0
            }
        }
    },
    "./js/utils/focus-lock.js": /*!********************************!*\
  !*** ./js/utils/focus-lock.js ***!
  \********************************/
    /*! exports provided: FocusLock */
    function(e, t, n) {
        "use strict";
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        n.r(t),
        n.d(t, "FocusLock", (function() {
            return o
        }
        ));
        var a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])']
          , o = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._lockedSelector = null,
                this._focusableElements = null,
                this._endElement = null,
                this._selectors = a,
                this._documentKeydownHandler = this._documentKeydownHandler.bind(this)
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "_documentKeydownHandler",
                value: function(e) {
                    var t = document.activeElement;
                    if ("Tab" === e.key) {
                        if (!this._focusableElements.length)
                            return e.preventDefault(),
                            void t.blur();
                        if (1 === this._focusableElements.length)
                            return e.preventDefault(),
                            void this._focusableElements[0].focus();
                        if (this._focusableElements.length > 1 && !t.closest(this._lockedSelector))
                            return e.preventDefault(),
                            void this._focusableElements[0].focus()
                    }
                    "Tab" !== e.key || e.shiftKey || t !== this._focusableElements[this._focusableElements.length - 1] || (e.preventDefault(),
                    this._focusableElements[0].focus()),
                    "Tab" === e.key && e.shiftKey && t === this._focusableElements[0] && (e.preventDefault(),
                    this._focusableElements[this._focusableElements.length - 1].focus())
                }
            }, {
                key: "lock",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.unlock(),
                    this._lockedSelector = e;
                    var n = document.querySelector(this._lockedSelector);
                    if (n) {
                        this._focusableElements = n.querySelectorAll(this._selectors),
                        this._endElement = document.activeElement;
                        var i = n.querySelector("[data-focus]") || this._focusableElements[0];
                        this._endElement && this._endElement.blur(),
                        i && t && i.focus(),
                        document.addEventListener("keydown", this._documentKeydownHandler)
                    }
                }
            }, {
                key: "unlock",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this._endElement && e && this._endElement.focus(),
                    this._lockedSelector = null,
                    this._focusableElements = null,
                    this._endElement = null,
                    document.removeEventListener("keydown", this._documentKeydownHandler)
                }
            }]) && i(t.prototype, n),
            o && i(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        window.focusLock = new o
    },
    "./js/utils/ios-checker.js": /*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
    /*! exports provided: iosChecker */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "iosChecker", (function() {
            return i
        }
        ));
        var i = function() {
            return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document
        }
    },
    "./js/utils/ios-vh-fix.js": /*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
    /*! exports provided: iosVhFix */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "iosVhFix", (function() {
            return a
        }
        ));
        var i = n(/*! ./ios-checker */
        "./js/utils/ios-checker.js")
          , a = function() {
            if ((!window.MSInputMethodContext || !document.documentMode) && Object(i.iosChecker)()) {
                var e = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", "".concat(e, "px")),
                window.addEventListener("resize", (function() {
                    e = .01 * window.innerHeight,
                    document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                }
                ))
            }
        }
    },
    "./js/utils/scroll-lock.js": /*!*********************************!*\
  !*** ./js/utils/scroll-lock.js ***!
  \*********************************/
    /*! exports provided: ScrollLock */
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "ScrollLock", (function() {
            return o
        }
        ));
        var i = n(/*! ./ios-checker */
        "./js/utils/ios-checker.js");
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var o = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._iosChecker = i.iosChecker,
                this._lockClass = this._iosChecker() ? "scroll-lock-ios" : "scroll-lock",
                this._scrollTop = null,
                this._fixedBlockElements = document.querySelectorAll("[data-fix-block]")
            }
            var t, n, o;
            return t = e,
            (n = [{
                key: "_getScrollbarWidth",
                value: function() {
                    return window.innerWidth - document.documentElement.clientWidth
                }
            }, {
                key: "_getBodyScrollTop",
                value: function() {
                    return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || document.body && document.body.scrollTop
                }
            }, {
                key: "disableScrolling",
                value: function() {
                    var e = this;
                    this._scrollTop = document.body.dataset.scroll = document.body.dataset.scroll ? document.body.dataset.scroll : this._getBodyScrollTop(),
                    this._getScrollbarWidth() && (document.body.style.paddingRight = "".concat(this._getScrollbarWidth(), "px"),
                    this._fixedBlockElements.forEach((function(t) {
                        t.style.paddingRight = "".concat(e._getScrollbarWidth(), "px")
                    }
                    ))),
                    document.body.style.top = "-".concat(this._scrollTop, "px"),
                    document.body.classList.add(this._lockClass)
                }
            }, {
                key: "enableScrolling",
                value: function() {
                    document.body.classList.remove(this._lockClass),
                    document.body.style.paddingRight = null,
                    document.body.style.top = null,
                    this._fixedBlockElements.forEach((function(e) {
                        e.style.paddingRight = null
                    }
                    )),
                    document.body.removeAttribute("data-scroll"),
                    this._scrollTop = null
                }
            }]) && a(t.prototype, n),
            o && a(t, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }();
        window.scrollLock = new o
    }
});

document.querySelector('[data-open-popup="plan"]').onclick = function(ev) {

    document.querySelector('[data-popup="plan"]').classList.remove("hide");
    document.body.classList.add("scroll-lock");
}

function openOkno() {

    document.querySelector('[data-popup="plan"]').classList.add("hide");
    document.body.classList.remove("scroll-lock");
}















	document.querySelector('[data-open-popup="plan"]').onclick=function(ev){
	
		document.querySelector('[data-popup="plan"]').classList.remove("hide");
		document.body.classList.add("scroll-lock");
	}

function openOkno(){

	document.querySelector('[data-popup="plan"]').classList.add("hide");
		document.body.classList.remove("scroll-lock");
}
  
  var suka = document.getElementById("checkbox-mortgage-apartment");
  
 suka.onchange=function(e){
	 //alert(1);
	//fuckerPrice.setAttribute("data-popup-price", "SUKAFUCKER");
	
	document.querySelector("p span#fuckerPrice").innerHTML=2500;
	//document.querySelector('[data-popup="max"]').setAttribute("data-popup-final-price", fuckerPrice.textContent);
 }
  
 function doWiper(el){
	// alert(el.getAttribute("data-cost-value"));
	let fa=Number(el.getAttribute("data-cost-value"));
	 if(suka.checked){
		 let a=fa+500;
		fuckerPrice.textContent=a;
		document.querySelector('[data-popup="max"]').setAttribute("data-popup-final-price", a);
	 }
 }
// document.querySelector('[data-popup="max"]').onclick=function(e){}
 
 

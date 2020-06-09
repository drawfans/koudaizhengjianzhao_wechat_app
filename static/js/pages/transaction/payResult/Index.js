(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/transaction/payResult/Index" ], {
    1: function(t, e, n) {
        n.r(e);
        var r = n(2), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    10: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "index",
            props: {
                color: {
                    type: String,
                    default: function() {
                        return "rgba(0, 0, 0, 0.6)";
                    }
                }
            },
            created: function() {}
        };
    },
    104: function(t, e, n) {
        n.r(e);
        var r = n(63), a = n(39);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(106);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/coupon/coupon.vue", e.default = u.exports;
    },
    105: function(t, e, n) {
        var r = n(43);
        n.n(r).a;
    },
    106: function(t, e, n) {
        var r = n(44);
        n.n(r).a;
    },
    107: function(t, e, n) {
        n.r(e);
        var r = n(62), a = n(45);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(108);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/coupon/coupon-list.vue", e.default = u.exports;
    },
    108: function(t, e, n) {
        var r = n(47);
        n.n(r).a;
    },
    11: function(t, e, n) {},
    112: function(t, e, n) {
        n.r(e);
        var r = n(113), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    113: function(t, e, n) {
        function r(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(a, o) {
                        try {
                            var i = e[a](o), u = i.value;
                        } catch (a) {
                            return void n(a);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(t) {
                            r("next", t);
                        }, function(t) {
                            r("throw", t);
                        });
                        t(u);
                    }("next");
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, o = (a = n(19)) && a.__esModule ? a : {
            default: a
        }, i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
        }, u = n(23);
        e.default = {
            computed: i({}, (0, u.mapState)({
                config: function(t) {
                    return t.common.configDialog;
                }
            }), {
                elements: function() {
                    return this.config && this.config.data && this.config.data.elements && this.config.data.elements, 
                    {};
                },
                popupStyle: function() {
                    return "background: " + (this.config.data && "DEFAULT" === this.config.data.type ? "#fff" : "transparent") + ";overflow: visible";
                }
            }),
            created: function() {},
            methods: {
                handleElementClick: function(t) {
                    var e = this;
                    return r(o.default.mark(function n() {
                        var r;
                        return o.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (!t.triggerAct) {
                                    n.next = 15;
                                    break;
                                }
                                n.t0 = t.triggerAct, n.next = "GOTO" === n.t0 ? 4 : "CLOSE" === n.t0 || "CANCEL" === n.t0 ? 6 : "GET_COUPON" === n.t0 ? 8 : 14;
                                break;

                              case 4:
                                return e.$router.push(t.triggerOpt.url), n.abrupt("break", 15);

                              case 6:
                                return e.$store.commit("common/hideConfigDialog"), n.abrupt("break", 15);

                              case 8:
                                return n.next = 10, e.$apis.commonApis.voucher();

                              case 10:
                                return (r = n.sent).data && (e.$toast.success("领取成功"), e.$store.commit("common/hideConfigDialog"), 
                                e.$store.dispatch("common/triggerConfigDialog", {
                                    type: "POPUP_COUPON"
                                })), n.abrupt("break", 15);

                              case 14:
                                return n.abrupt("break", 15);

                              case 15:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                }
            }
        };
    },
    114: function(t, e, n) {},
    12: function(t, e, n) {},
    15: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.currentOptions.show,
                    expression: "currentOptions.show"
                } ],
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!(!t.currentOptions.mask && !t.currentOptions.forbidClick), 1) ? n("par-overlay", {
                attrs: {
                    color: t.currentOptions.forbidClick ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)",
                    h_: 1,
                    c_: 0
                }
            }, [ n("div", {
                attrs: {
                    h_: "s3"
                }
            }) ]) : t._e(), n("div", {
                class: t.b([ t.style, t.currentOptions.position ]),
                attrs: {
                    h_: 5
                }
            }, [ t._ri(!("text" !== t.style), 6) ? n("div", {
                attrs: {
                    h_: 6
                },
                domProps: {
                    textContent: t._s(t.currentOptions.message)
                }
            }) : t._e(), t._ri(!("html" !== t.style), 8) ? n("div", {
                attrs: {
                    h_: 8
                },
                domProps: {
                    innerHTML: t._s(t.currentOptions.message)
                }
            }) : t._e(), t._ri(!("default" !== t.style), 10) ? [ t._ri(!("loading" !== t.currentOptions.type), 11) ? n("van-loading", {
                attrs: {
                    color: "white",
                    type: t.currentOptions.loadingType,
                    h_: 11,
                    c_: 1
                }
            }) : n("van-icon", {
                class: t.b("icon"),
                attrs: {
                    name: t.currentOptions.type,
                    h_: 13,
                    c_: 2
                }
            }), t._ri(!!t.isDef(t.currentOptions.message), 16) ? n("div", {
                class: t.b("text"),
                attrs: {
                    h_: 16
                },
                domProps: {
                    textContent: t._s(t.currentOptions.message)
                }
            }) : t._e() ] : t._e() ], 1) ], 1);
        }, a = [];
        r._withStripped = !0;
    },
    154: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("van-popup", {
                attrs: {
                    "close-on-click-overlay": !1,
                    show: t.config.show,
                    "custom-style": t.popupStyle,
                    h_: 0
                },
                on: {
                    "click-overlay": function(e) {
                        t.handleElementClick(t.config.data.elements.eleBlank);
                    }
                }
            }, [ n("image", {
                attrs: {
                    h_: 1
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleClose);
                    }
                }
            }), t._ri(!!t.config.data, 3) ? [ t._ri(!("DEFAULT" !== t.config.data.type), 4) ? [ n("div", {
                attrs: {
                    h_: 5
                }
            }, [ t._ri(!!t.config.data.elements.eleTitle, 6) ? n("div", {
                attrs: {
                    h_: 6
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleTitle);
                    }
                }
            }, [ t._v("\n          " + t._s(t.config.data.elements.eleTitle.text) + "\n        ", 7) ]) : t._e(), t._ri(!!t.config.data.elements.eleImage, 9) ? n("div", {
                attrs: {
                    h_: 9
                }
            }, [ n("image", {
                attrs: {
                    src: t.config.data.elements.eleImage.imgUrl,
                    h_: 10
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleImage);
                    }
                }
            }) ], 1) : t._e(), t._ri(!!t.config.data.elements.eleContents, 12) ? n("div", {
                attrs: {
                    h_: 12
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleContents);
                    }
                }
            }, [ t._v("\n          " + t._s(t.config.data.elements.eleContents.text) + "\n        ", 13) ]) : t._e(), n("div", {
                attrs: {
                    h_: 15
                }
            }, [ n("view", {
                attrs: {
                    h_: 16
                }
            }, [ t._ri(!!t.config.data.elements.eleButton1, 17) ? n("van-button", {
                attrs: {
                    h_: 17
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleButton1);
                    }
                }
            }, [ t._v(t._s(t.config.data.elements.eleButton1.buttonText), 18) ]) : t._e() ], 1), n("view", {
                attrs: {
                    h_: 20
                }
            }, [ t._ri(!!t.config.data.elements.eleButton2, 21) ? n("van-button", {
                attrs: {
                    h_: 21
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleButton2);
                    }
                }
            }, [ t._v(t._s(t.config.data.elements.eleButton2.buttonText), 22) ]) : t._e() ], 1) ], 1) ]) ] : [ n("div", {
                attrs: {
                    h_: 24
                }
            }, [ t._ri(!!t.config.data.elements.eleImage, 25) ? n("image", {
                attrs: {
                    src: t.config.data.elements.eleImage.imgUrl,
                    h_: 25
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleImage);
                    }
                }
            }) : t._e() ], 1) ] ] : t._e() ], 1);
        }, a = [];
        r._withStripped = !0;
    },
    16: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("i", {
                class: t.classs,
                style: t.style,
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!!t.isSrc, 1) ? n("img", {
                attrs: {
                    src: t.name,
                    h_: 1
                }
            }) : t._e() ]);
        }, a = [];
        r._withStripped = !0;
    },
    17: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: t.b([ t.type, t.colorType ]),
                style: t.style,
                attrs: {
                    h_: 0
                }
            }, [ n("span", {
                class: t.b("spinner", t.type),
                attrs: {
                    h_: 1
                }
            }, [ t._l("spinner" === t.type ? 12 : 0, function(t, e, r) {
                return n("i", {
                    key: e,
                    attrs: {
                        h_: 2,
                        f_: void 0 !== r ? r : e,
                        k_: "index"
                    }
                });
            }, [ 2 ], t._self), t._ri(!("circular" !== t.type), 4) ? n("view", {
                class: t.b("circular"),
                attrs: {
                    h_: 4
                }
            }) : t._e() ], 1) ]);
        }, a = [];
        r._withStripped = !0;
    },
    18: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {
                style: {
                    backgroundColor: t.color
                },
                attrs: {
                    h_: 0
                },
                on: {
                    scroll: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "prevent", void 0, e.key, void 0)) return null;
                    }
                }
            }, [ t._t("default", null, {
                h_: 1
            }) ], 1);
        }, a = [];
        r._withStripped = !0;
    },
    180: function(t, e, n) {
        n.r(e);
        var r = n(181), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    181: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(a, o) {
                        try {
                            var i = e[a](o), u = i.value;
                        } catch (a) {
                            return void n(a);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(t) {
                            r("next", t);
                        }, function(t) {
                            r("throw", t);
                        });
                        t(u);
                    }("next");
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(n(19)), i = n(20), u = r(n(27)), s = r(n(104)), c = r(n(81)), l = r(n(107)), f = r(n(291));
        e.default = {
            name: "PayResult",
            components: {
                toast: u.default,
                CouponList: l.default,
                CouponButton: c.default,
                Coupon: s.default,
                configDialog: f.default
            },
            data: function() {
                return {
                    OrderState: i.OrderState,
                    data: {},
                    timer: null,
                    shareMask: {
                        show: !1,
                        type: ""
                    },
                    shareDialog: {
                        show: !1
                    }
                };
            },
            onLoad: function() {
                this.init();
            },
            computed: {
                themeClass: function() {
                    return this.$store.state.common.theme ? "theme-711" : "base";
                }
            },
            methods: {
                init: function() {
                    var t = this;
                    return a(o.default.mark(function e() {
                        var n, r;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.$apis.commonApis.getPaySuccessView({
                                    photoOrderId: t.$route.query.photoOrderId,
                                    source: "wxapp"
                                });

                              case 2:
                                n = e.sent, r = n.data, (t.data = r).orderStatus === i.OrderState.WAITING_PAY ? t.timer = setTimeout(t.init, 1500) : (t.showShareDialog(), 
                                t.$store.dispatch("common/triggerConfigDialog", {
                                    type: "POPUP_PAY_SUCCESS"
                                }));

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                goHome: function() {
                    this.$router.reLaunch("/pages/home/Home");
                },
                goOrder: function() {
                    this.$router.push({
                        path: "/pages/transaction/orderDetail/Index",
                        query: this.$route.query
                    });
                },
                showShareDialog: function() {
                    this.shareDialog.show = !0;
                },
                resloveShareDialog: function() {
                    this.shareDialog.show = !1;
                },
                rejectShareDialog: function() {
                    this.shareDialog.show = !1;
                },
                showUseNowButton: function(t) {
                    return t.validStartTime < Date.now();
                },
                handleUseButtonClick: function(t) {
                    this.$router.push({
                        path: t.jumpUrl || "/pages/more/Index"
                    });
                }
            },
            beforeDestroy: function() {
                clearTimeout(this.timer);
            }
        };
    },
    182: function(t, e, n) {},
    2: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(n(29)), o = r(n(31)), i = r(n(33)), u = r(n(21)), s = [ "success", "fail", "loading" ];
        e.default = {
            name: "toast",
            components: {
                "par-overlay": i.default,
                "van-icon": a.default,
                "van-loading": o.default
            },
            props: {
                options: Object
            },
            data: function() {
                return {
                    timer: null,
                    currentOptions: {
                        show: !1,
                        message: "",
                        duration: 0,
                        position: "bottom",
                        type: "text",
                        mask: !1,
                        forbidClick: !1
                    }
                };
            },
            computed: {
                style: function() {
                    return -1 !== s.indexOf(this.currentOptions.type) ? "default" : this.currentOptions.type;
                }
            },
            methods: {
                b: (0, u.default)("van-toast"),
                setOptions: function(t) {
                    var e = this;
                    clearTimeout(this.timer), this.currentOptions = t, 0 < this.currentOptions.duration && (this.timer = setTimeout(function() {
                        e.currentOptions.show = !1;
                    }, this.currentOptions.duration));
                },
                isDef: function(t) {
                    return null != t;
                },
                handleClick: function() {}
            },
            watch: {
                options: function(t) {
                    this.$set(this, "options", t);
                }
            }
        };
    },
    20: function(t, e, n) {
        var r, a, o, i, u, s, c, l, f;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LOGIN_TYPE = e.LOGISTIC_STATUS = e.CouponStatus = e.CouponPreferential = e.COLOR = e.OrderType = e.OrderState = e.PhotoState = e.MEGALO_ENV = void 0, 
        (r = e.MEGALO_ENV || (e.MEGALO_ENV = {})).WECHAT = "wechat", r.SWAN = "swan", r.ALIPAY = "alipay", 
        r.TT = "tt", r.WEB = "web", (a = e.PhotoState || (e.PhotoState = {})).NEW = "NEW", 
        a.CHECKING = "CHECKING", a.CHECK_OK = "CHECK_OK", a.CHECK_FAIL = "CHECK_FAIL", a.CHECK_ABNORMAL = "CHECK_ABNORMAL", 
        a.DEALING = "DEALING", a.DEAL_OK = "DEAL_OK", a.DEAL_FAIL = "DEAL_FAIL", a.COMFIRM_FT_PAY_FAIL = "COMFIRM_FT_PAY_FAIL", 
        a.DEAL_RECEIPT_ING = "DEAL_RECEIPT_ING", a.DEAL_RECEIPT_OK = "DEAL_RECEIPT_OK", 
        a.DEAL_RECEIPT_FAIL = "DEAL_RECEIPT_FAIL", a.REFINEMENT_FAIL = "REFINEMENT_FAIL", 
        (o = e.OrderState || (e.OrderState = {})).WAITING_PAY = "WAITING_PAY", o.CANCEL = "CANCEL", 
        o.IS_PAY = "IS_PAY", o.REFUND = "REFUND", o.REFUNDING = "REFUNDING", o.PAY_FAILED = "PAY_FAILED", 
        o.WAITING_RECEIPT = "WAITING_RECEIPT", o.PARTIAL_REFUNDING = "PARTIAL_REFUNDING", 
        o.PARTIAL_REFUND = "PARTIAL_REFUND", (i = e.OrderType || (e.OrderType = {})).ELECTRON = "ELECTRON", 
        i.PAPER = "PAPER", i.FAST_PAPER = "FAST_PAPER", i.SHOP_PAPER = "SHOP_PAPER", (u = e.COLOR || (e.COLOR = {})).RED = "#970013", 
        u.BLUE = "#81cfff", u.WHITE = "#fff", (s = e.CouponPreferential || (e.CouponPreferential = {})).DISCOUNT = "DISCOUNT", 
        s.EXCHANGE = "EXCHANGE", s.REDUCTION = "REDUCTION", (c = e.CouponStatus || (e.CouponStatus = {})).NEW = "NEW", 
        c.GOT = "GOT", c.USED = "USED", c.EXPIRED = "EXPIRED", (l = e.LOGISTIC_STATUS || (e.LOGISTIC_STATUS = {})).WAIT_DELIVERY = "WAIT_DELIVERY", 
        l.IS_DELIVERY = "IS_DELIVERY", l.IS_RECEIVED = "IS_RECEIVED", (f = e.LOGIN_TYPE || (e.LOGIN_TYPE = {})).WINXIN_H5 = "WINXIN_H5", 
        f.WINXIN_APP = "WINXIN_APP", f.ALI_H5 = "ALI_H5", f.ALI_APP = "ALI_APP", f.H5 = "H5", 
        f.THIRD_API = "THIRD_API";
    },
    21: function(t, e, n) {
        function r(t, e, n) {
            return e ? t + n + e : t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t) {
            return function(e, n) {
                return e && "string" != typeof e && (n = e, e = ""), e = r(t, e, "__"), n ? [ e, function t(e, n) {
                    if ("string" == typeof n) return r(e, n, "--");
                    if (Array.isArray(n)) return n.map(function(n) {
                        return t(e, n);
                    });
                    var a = {};
                    return n && Object.keys(n).forEach(function(t) {
                        a[e + "--" + t] = n[t];
                    }), a;
                }(e, n) ] : e;
            };
        };
    },
    27: function(t, e, n) {
        n.r(e);
        var r = n(15), a = n(1);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(35);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/toast/index.vue", e.default = u.exports;
    },
    29: function(t, e, n) {
        n.r(e);
        var r = n(16), a = n(3);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(30);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/icon/index.vue", e.default = u.exports;
    },
    291: function(t, e, n) {
        n.r(e);
        var r = n(154), a = n(112);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(292);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/config-dialog.vue", e.default = u.exports;
    },
    292: function(t, e, n) {
        var r = n(114);
        n.n(r).a;
    },
    3: function(t, e, n) {
        n.r(e);
        var r = n(4), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    30: function(t, e, n) {
        var r = n(5);
        n.n(r).a;
    },
    31: function(t, e, n) {
        n.r(e);
        var r = n(17), a = n(6);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(32);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/loading/index.vue", e.default = u.exports;
    },
    32: function(t, e, n) {
        var r = n(8);
        n.n(r).a;
    },
    329: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: t.themeClass,
                attrs: {
                    h_: 0
                }
            }, [ n("div", {
                attrs: {
                    h_: 1
                }
            }, [ t._ri(!(t.data.orderStatus !== t.OrderState.IS_PAY), 2) ? [ n("div", {
                attrs: {
                    h_: 3
                }
            }, [ n("div", {
                attrs: {
                    h_: 4
                }
            }, [ n("image", {
                attrs: {
                    h_: 5
                }
            }), n("span", {
                attrs: {
                    h_: 7
                }
            }, []) ], 1), n("div", {
                attrs: {
                    h_: 10
                }
            }, [ t._v("\n          " + t._s(t.data.aiDeal ? "在订单页面可查看或下载电子版相片" : "在订单页面可查看相片处理结果，或留意短信通知~") + "\n        ", 11) ]), n("div", {
                attrs: {
                    h_: 13
                }
            }, [ n("van-button", {
                attrs: {
                    h_: 14
                },
                on: {
                    click: t.goHome
                }
            }, []), n("van-button", {
                attrs: {
                    h_: 17
                },
                on: {
                    click: t.goOrder
                }
            }, []) ], 1) ]), t._ri(!(!t.data.couponResps || !t.data.couponResps.length), 20) ? n("div", {
                attrs: {
                    h_: 20
                }
            }, [ n("div", {
                attrs: {
                    h_: 21
                }
            }, []), n("div", {
                attrs: {
                    h_: 24
                }
            }, [ n("coupon-list", {
                attrs: {
                    h_: 25,
                    c_: 0
                }
            }, t._l(t.data.couponResps, function(e, r, a) {
                return n("coupon", {
                    key: r,
                    attrs: {
                        data: e,
                        h_: "s27",
                        f_: void 0 !== a ? a : r,
                        k_: "index",
                        c_: 1
                    }
                }, [ n("coupon-button", {
                    attrs: {
                        slot: "bodySelect",
                        "show-button": t.showUseNowButton(e),
                        "button-text": "立即使用",
                        h_: "s29",
                        c_: 2
                    },
                    on: {
                        click: function(n) {
                            t.handleUseButtonClick(e);
                        }
                    },
                    slot: "bodySelect"
                }) ], 1);
            }, [ "s27" ], t._self), 1) ], 1) ]) : t._e() ] : [ n("div", {
                attrs: {
                    h_: 32
                }
            }, [ n("image", {
                attrs: {
                    h_: 33
                }
            }), n("span", {
                attrs: {
                    h_: 35
                }
            }, []) ], 1) ] ], 1), n("van-popup", {
                attrs: {
                    show: t.shareDialog.show,
                    h_: 38
                }
            }, [ n("image", {
                attrs: {
                    h_: 39
                }
            }), n("view", {
                attrs: {
                    h_: 41
                }
            }, [ n("text", {
                attrs: {
                    h_: 42
                }
            }, []), n("view", {
                attrs: {
                    h_: 45
                }
            }, []), n("view", {
                attrs: {
                    h_: 48
                }
            }, [ n("van-button", {
                attrs: {
                    h_: 49
                },
                on: {
                    click: t.rejectShareDialog
                }
            }, []), n("van-button", {
                attrs: {
                    h_: 52
                },
                on: {
                    click: t.resloveShareDialog
                }
            }, []) ], 1) ], 1) ], 1) ], 1);
        }, a = [];
        r._withStripped = !0;
    },
    33: function(t, e, n) {
        n.r(e);
        var r = n(18), a = n(9);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(34);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/overlay/index.vue", e.default = u.exports;
    },
    34: function(t, e, n) {
        var r = n(11);
        n.n(r).a;
    },
    35: function(t, e, n) {
        var r = n(12);
        n.n(r).a;
    },
    39: function(t, e, n) {
        n.r(e);
        var r = n(40), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    4: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "index",
            props: {
                name: String,
                size: String,
                color: String,
                info: [ String, Number ],
                classPrefix: {
                    type: String,
                    default: "van-icon"
                }
            },
            computed: {
                classs: function() {
                    return [ this.classPrefix, this.isSrc ? "van-icon--image" : this.classPrefix + "-" + this.name ];
                },
                style: function() {
                    return {
                        color: this.color,
                        fontSize: this.size
                    };
                },
                isSrc: function() {
                    return this.src(this.name);
                }
            },
            methods: {
                src: function(t) {
                    return /^(https?:)?\/\/|data:image/.test(t);
                }
            }
        };
    },
    40: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = r(n(66)), o = r(n(81)), i = n(20);
        e.default = {
            name: "coupon",
            components: {
                CouponButton: o.default
            },
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            data: function() {
                return {
                    CouponPreferential: i.CouponPreferential,
                    CouponStatus: i.CouponStatus
                };
            },
            computed: {
                styles: function() {
                    return t = {}, e = "c-coupon-status-" + this.data.status.toLowerCase(), n = this.data.status, 
                    e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                    var t, e, n;
                },
                preferentialTypeValueTips: function() {
                    if (0 < this.data.couponMininum) return "满" + this.data.couponMininum + "可用";
                },
                expireTimeText: function() {
                    return Date.now() < this.data.validStartTime ? (0, a.default)(this.data.validStartTime).format("YYYY-MM-DD HH:mm起可用") : (0, 
                    a.default)(this.data.validEndTime).format("有效期至YYYY-MM-DD HH:mm");
                },
                preferentialValue: function() {
                    switch (this.data.preferentialType) {
                      case i.CouponPreferential.EXCHANGE:
                      case i.CouponPreferential.REDUCTION:
                        return {
                            unit: "￥",
                            value: this.data.couponValue
                        };

                      case i.CouponPreferential.DISCOUNT:
                        return {
                            unit: "折",
                            value: this.data.discount
                        };
                    }
                },
                stamp: function() {
                    switch (this.data.status) {
                      case i.CouponStatus.EXPIRED:
                        return "https://c01.parameters.cn/image/expired-stamp.png";

                      case i.CouponStatus.USED:
                        return "https://c01.parameters.cn/image/used-stamp.png";
                    }
                },
                stampStyles: function() {
                    return {
                        backgroundImage: "url(" + this.stamp + ")"
                    };
                }
            },
            methods: {
                selectCoupon: function() {
                    this.$emit("on-select", this.data.id);
                }
            }
        };
    },
    41: function(t, e, n) {
        n.r(e);
        var r = n(42), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    42: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "coupon-button",
            props: {
                buttonText: {
                    type: String,
                    default: "立即使用"
                },
                showButton: {
                    type: Boolean,
                    default: !0
                }
            },
            methods: {
                handleClick: function(t) {
                    this.$emit("click", t);
                }
            }
        };
    },
    43: function(t, e, n) {},
    439: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var a = r(n(440)), o = r(n(22));
        a.default.mpType = "page", new o.default(a.default).$mount();
    },
    44: function(t, e, n) {},
    440: function(t, e, n) {
        n.r(e);
        var r = n(329), a = n(180);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(441);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/pages/transaction/payResult/Index.vue", e.default = u.exports;
    },
    441: function(t, e, n) {
        var r = n(182);
        n.n(r).a;
    },
    45: function(t, e, n) {
        n.r(e);
        var r = n(46), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    46: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "coupon-list"
        };
    },
    47: function(t, e, n) {},
    5: function(t, e, n) {},
    6: function(t, e, n) {
        n.r(e);
        var r = n(7), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    62: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                attrs: {
                    h_: 0
                }
            }, [ this._t("default", null, {
                h_: 1
            }) ], 1);
        }, a = [];
        r._withStripped = !0;
    },
    63: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: t.styles,
                attrs: {
                    h_: 0
                },
                on: {
                    click: t.selectCoupon
                }
            }, [ n("div", {
                attrs: {
                    h_: 1
                }
            }, [ t._ri(!!t.stamp, 2) ? n("div", {
                style: t.stampStyles,
                attrs: {
                    h_: 2
                }
            }) : t._e(), n("div", {
                attrs: {
                    h_: 4
                }
            }, [ n("div", {
                class: {
                    reversa: t.data.preferentialType === t.CouponPreferential.DISCOUNT
                },
                attrs: {
                    h_: 5
                }
            }, [ n("span", {
                attrs: {
                    h_: 6
                }
            }, [ t._v(t._s(t.preferentialValue.unit), 7) ]), n("var", {
                attrs: {
                    h_: 9
                }
            }, [ t._v(t._s(t.preferentialValue.value), 10) ]) ]), n("div", {
                attrs: {
                    h_: 12
                }
            }, [ t._v("\n                " + t._s(t.preferentialTypeValueTips) + "\n            ", 13) ]) ]), n("div", {
                attrs: {
                    h_: 15
                }
            }, [ n("div", {
                attrs: {
                    h_: 16
                }
            }, [ n("span", {
                attrs: {
                    h_: 17
                }
            }, [ t._v(t._s(t.data.preferentialTypeStr), 18) ]), n("b", {
                attrs: {
                    h_: 20
                }
            }, [ t._v(t._s(t.data.title), 21) ]), n("span", {
                attrs: {
                    h_: 23
                }
            }, [ t._v(t._s(t.expireTimeText), 24) ]) ]), t._t("bodySelect", null, {
                h_: 26
            }) ], 1) ]), t._ri(!!t.$slots.footer, 28) ? n("div", {
                attrs: {
                    h_: 28
                }
            }, [ t._t("footer", null, {
                h_: 29
            }) ], 1) : t._e() ]);
        }, a = [];
        r._withStripped = !0;
    },
    64: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t._ri(!!t.showButton, 0) ? n("button", {
                attrs: {
                    h_: 0
                },
                on: {
                    click: t.handleClick
                }
            }, [ t._v("\n    " + t._s(t.buttonText) + "\n", 1) ]) : t._e();
        }, a = [];
        r._withStripped = !0;
    },
    7: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, a = (r = n(21)) && r.__esModule ? r : {
            default: r
        }, o = "#c9c9c9";
        e.default = {
            name: "index",
            props: {
                size: String,
                type: {
                    type: String,
                    default: "circular"
                },
                color: {
                    type: String,
                    default: o
                }
            },
            computed: {
                colorType: function() {
                    var t = this.color;
                    return "white" === t || "black" === t ? t : "";
                },
                style: function() {
                    return {
                        color: "black" === this.color ? o : this.color,
                        width: this.size,
                        height: this.size
                    };
                }
            },
            methods: {
                b: (0, a.default)("van-loading")
            }
        };
    },
    8: function(t, e, n) {},
    81: function(t, e, n) {
        n.r(e);
        var r = n(64), a = n(41);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n(105);
        var i = n(0), u = Object(i.a)(a.default, r.a, r.b, !1, null, null, null);
        u.options.__file = "src/components/coupon/coupon-button.vue", e.default = u.exports;
    },
    9: function(t, e, n) {
        n.r(e);
        var r = n(10), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    }
}, [ [ 439, "runtime", "vendor" ] ] ]);
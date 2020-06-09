(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/photoRecord/Index" ], {
    1: function(t, e, n) {
        n.r(e);
        var o = n(2), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
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
    109: function(t, e, n) {
        n.r(e);
        var o = n(110), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    11: function(t, e, n) {},
    110: function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, n) {
                        return function o(r, a) {
                            try {
                                var i = e[r](a), u = i.value;
                            } catch (r) {
                                return void n(r);
                            }
                            if (!i.done) return Promise.resolve(u).then(function(t) {
                                o("next", t);
                            }, function(t) {
                                o("throw", t);
                            });
                            t(u);
                        }("next");
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = o(n(19)), i = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                }
                return t;
            }, u = n(20), s = o(n(286)), c = (n(23), o(n(85))), f = o(n(27));
            e.default = {
                config: {},
                props: {
                    data: Object,
                    classes: ""
                },
                components: {
                    toast: f.default
                },
                data: function() {
                    return {
                        layoutObject: {
                            body: {
                                click: function() {}
                            }
                        }
                    };
                },
                computed: {
                    themeClass: function() {
                        return this.$store.state.common.theme ? "theme-711" : "base";
                    },
                    statusText: function() {
                        return this.data.photoStatus === u.PhotoState.DEALING || this.data.photoStatus === u.PhotoState.DEAL_RECEIPT_ING || this.data.photoStatus === u.PhotoState.CHECK_OK && this.data.paymentStatus === u.OrderState.IS_PAY ? "相片处理中" : [ u.PhotoState.REFINEMENT_FAIL, u.PhotoState.DEAL_RECEIPT_FAIL ].includes(this.data.photoStatus) ? "相片处理失败" : this.data.photoStatusValue;
                    },
                    StatusClasses: function() {
                        return [ "photo-record-status-text", {
                            success: this.isSuccess
                        }, {
                            abnormal: this.isAbnormal
                        }, {
                            fail: this.isFail
                        }, {
                            checking: this.isChecking
                        } ];
                    },
                    isStatus: function() {
                        try {
                            var t = this.StatusClasses.find(function(t) {
                                return JSON.stringify(t).includes("true") && "photo-record-status-text" !== t;
                            });
                            return Object.keys(t).length ? Object.keys(t)[0] : "";
                        } catch (t) {
                            return "";
                        }
                    },
                    isSuccess: function() {
                        var t = this.data.photoStatus;
                        return t === u.PhotoState.DEAL_OK || t === u.PhotoState.DEAL_RECEIPT_OK || t === u.PhotoState.DEAL_RECEIPT_ING || t === u.PhotoState.CHECK_OK;
                    },
                    isAbnormal: function() {
                        return this.data.photoStatus === u.PhotoState.CHECK_ABNORMAL;
                    },
                    isFail: function() {
                        var t = this.data.photoStatus;
                        return t === u.PhotoState.CHECK_FAIL || t === u.PhotoState.DEAL_FAIL || t === u.PhotoState.COMFIRM_FT_PAY_FAIL || t === u.PhotoState.DEAL_RECEIPT_FAIL || t === u.PhotoState.REFINEMENT_FAIL;
                    },
                    isChecking: function() {
                        return this.data.photoStatus === u.PhotoState.CHECKING || this.data.photoStatus === u.PhotoState.NEW;
                    }
                },
                methods: {
                    bindThis: function(t, e) {
                        this.$buriedPoint.recordLog(i({
                            operateCode: "button" === e ? "button_photorecord_click" : "photorecord_click"
                        }, this.data, {
                            mobile: this.$store.state.auth.userInfo.mobile
                        })), t.call(this);
                    },
                    remove: function() {
                        var e = this;
                        return r(a.default.mark(function n() {
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, c.default.confirm({
                                        title: "",
                                        message: "确认删除拍照记录？"
                                    });

                                  case 2:
                                    return n.next = 4, e.$apis.commonApis.removePhotoRecord({
                                        photoInfoId: e.data.photoInfoId
                                    });

                                  case 4:
                                    t.showToast({
                                        icon: "success",
                                        title: "删除成功"
                                    }), t.startPullDownRefresh();

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, e);
                        }))();
                    }
                },
                watch: {
                    data: {
                        immediate: !0,
                        deep: !0,
                        handler: function(t) {
                            var e = this;
                            return r(a.default.mark(function n() {
                                return a.default.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return n.next = 2, (0, s.default)(t);

                                      case 2:
                                        e.layoutObject = n.sent;

                                      case 3:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n, e);
                            }))();
                        }
                    }
                }
            };
        }).call(this, n(13).default);
    },
    111: function(t, e, n) {},
    12: function(t, e, n) {},
    146: function(t, e, n) {
        n.r(e);
        var o = n(70), r = n(59);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(147);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/components/pull-down-refresh.vue", e.default = u.exports;
    },
    147: function(t, e, n) {
        var o = n(61);
        n.n(o).a;
    },
    15: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
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
        }, r = [];
        o._withStripped = !0;
    },
    151: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: t.themeClass,
                attrs: {
                    h_: 0
                }
            }, [ n("div", {
                class: [ "photo-record", t.classes ],
                attrs: {
                    h_: 1
                }
            }, [ n("div", {
                attrs: {
                    h_: 2
                },
                on: {
                    click: function(e) {
                        t.bindThis(t.layoutObject.body.click, "body");
                    }
                }
            }, [ n("div", {
                attrs: {
                    h_: 3
                }
            }, [ n("image", {
                key: t.data.originalUrl,
                attrs: {
                    src: t.$utils.resizeOSSImage(t.data.originalUrl, 136),
                    h_: 4,
                    k_: "originalUrl"
                }
            }) ], 1), n("div", {
                attrs: {
                    h_: 6
                }
            }, [ n("div", {
                attrs: {
                    h_: 7
                }
            }, [ t._v(t._s(t.data.certificateTypeValue) + "\n          ", 8), t._ri(!(1 != t.data.isReceipt), 9) ? n("span", {
                attrs: {
                    h_: 9
                }
            }, [ n("span", {
                attrs: {
                    h_: 11
                }
            }, [ t._v(t._s(t.data.cityName), 12) ]) ]) : t._e() ]), n("div", {
                attrs: {
                    h_: 14
                }
            }, [ t._v(t._s(t.data.createTime), 15) ]), n("div", {
                attrs: {
                    h_: 17
                }
            }, [ t._ri(!!t.isChecking, 18) ? n("image", {
                attrs: {
                    h_: 18
                }
            }) : t._e(), t._ri(!t.classes, 20) ? n("span", {
                class: t.StatusClasses,
                attrs: {
                    h_: 20
                }
            }, [ t._v(t._s(t.statusText), 21) ]) : n("span", {
                class: t.StatusClasses,
                attrs: {
                    h_: 22
                }
            }, [ t._ri(!!t.isStatus, 23) ? n("image", {
                attrs: {
                    src: "/static/images/photo-record/icon_" + t.isStatus + ".png",
                    h_: 23
                }
            }) : t._e(), n("span", {
                attrs: {
                    h_: 25
                }
            }, [ t._v(t._s(t.statusText), 26) ]) ], 1) ], 1) ]), n("view", {
                attrs: {
                    h_: 28
                },
                on: {
                    click: function(e) {
                        return "button" in e || !t._k(e.keyCode, "stop", void 0, e.key, void 0) ? t.remove(e) : null;
                    }
                }
            }, [ n("image", {
                attrs: {
                    h_: 29
                }
            }) ], 1) ], 1), t._ri(!(!t.layoutObject.footerText && !t.layoutObject.button), 31) ? n("div", {
                attrs: {
                    h_: 31
                }
            }, [ n("div", {
                attrs: {
                    h_: 32
                }
            }, [ n("span", {
                attrs: {
                    h_: 33
                }
            }, [ t._v(t._s(t.layoutObject.footerText), 34) ]) ]), t._ri(!(!t.layoutObject.button || t.classes), 36) ? n("button", {
                attrs: {
                    h_: 36
                },
                on: {
                    click: function(e) {
                        t.bindThis(t.layoutObject.button.click, "button");
                    }
                }
            }, [ t._v("\n        " + t._s(t.layoutObject.button.text) + "\n      ", 37) ]) : t._ri(!!t.layoutObject.button, 38) ? n("div", {
                attrs: {
                    h_: 38
                },
                on: {
                    click: function(e) {
                        t.bindThis(t.layoutObject.button.click);
                    }
                }
            }, [ t._v("\n        " + t._s(t.layoutObject.button.text) + "\n      ", 39) ]) : t._e() ]) : t._e(), n("van-dialog", {
                attrs: {
                    h_: 41
                }
            }) ], 1) ]);
        }, r = [];
        o._withStripped = !0;
    },
    16: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
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
        }, r = [];
        o._withStripped = !0;
    },
    17: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
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
            }, [ t._l("spinner" === t.type ? 12 : 0, function(t, e, o) {
                return n("i", {
                    key: e,
                    attrs: {
                        h_: 2,
                        f_: void 0 !== o ? o : e,
                        k_: "index"
                    }
                });
            }, [ 2 ], t._self), t._ri(!("circular" !== t.type), 4) ? n("view", {
                class: t.b("circular"),
                attrs: {
                    h_: 4
                }
            }) : t._e() ], 1) ]);
        }, r = [];
        o._withStripped = !0;
    },
    18: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
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
        }, r = [];
        o._withStripped = !0;
    },
    2: function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = o(n(29)), a = o(n(31)), i = o(n(33)), u = o(n(21)), s = [ "success", "fail", "loading" ];
        e.default = {
            name: "toast",
            components: {
                "par-overlay": i.default,
                "van-icon": r.default,
                "van-loading": a.default
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
        var o, r, a, i, u, s, c, f, d;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LOGIN_TYPE = e.LOGISTIC_STATUS = e.CouponStatus = e.CouponPreferential = e.COLOR = e.OrderType = e.OrderState = e.PhotoState = e.MEGALO_ENV = void 0, 
        (o = e.MEGALO_ENV || (e.MEGALO_ENV = {})).WECHAT = "wechat", o.SWAN = "swan", o.ALIPAY = "alipay", 
        o.TT = "tt", o.WEB = "web", (r = e.PhotoState || (e.PhotoState = {})).NEW = "NEW", 
        r.CHECKING = "CHECKING", r.CHECK_OK = "CHECK_OK", r.CHECK_FAIL = "CHECK_FAIL", r.CHECK_ABNORMAL = "CHECK_ABNORMAL", 
        r.DEALING = "DEALING", r.DEAL_OK = "DEAL_OK", r.DEAL_FAIL = "DEAL_FAIL", r.COMFIRM_FT_PAY_FAIL = "COMFIRM_FT_PAY_FAIL", 
        r.DEAL_RECEIPT_ING = "DEAL_RECEIPT_ING", r.DEAL_RECEIPT_OK = "DEAL_RECEIPT_OK", 
        r.DEAL_RECEIPT_FAIL = "DEAL_RECEIPT_FAIL", r.REFINEMENT_FAIL = "REFINEMENT_FAIL", 
        (a = e.OrderState || (e.OrderState = {})).WAITING_PAY = "WAITING_PAY", a.CANCEL = "CANCEL", 
        a.IS_PAY = "IS_PAY", a.REFUND = "REFUND", a.REFUNDING = "REFUNDING", a.PAY_FAILED = "PAY_FAILED", 
        a.WAITING_RECEIPT = "WAITING_RECEIPT", a.PARTIAL_REFUNDING = "PARTIAL_REFUNDING", 
        a.PARTIAL_REFUND = "PARTIAL_REFUND", (i = e.OrderType || (e.OrderType = {})).ELECTRON = "ELECTRON", 
        i.PAPER = "PAPER", i.FAST_PAPER = "FAST_PAPER", i.SHOP_PAPER = "SHOP_PAPER", (u = e.COLOR || (e.COLOR = {})).RED = "#970013", 
        u.BLUE = "#81cfff", u.WHITE = "#fff", (s = e.CouponPreferential || (e.CouponPreferential = {})).DISCOUNT = "DISCOUNT", 
        s.EXCHANGE = "EXCHANGE", s.REDUCTION = "REDUCTION", (c = e.CouponStatus || (e.CouponStatus = {})).NEW = "NEW", 
        c.GOT = "GOT", c.USED = "USED", c.EXPIRED = "EXPIRED", (f = e.LOGISTIC_STATUS || (e.LOGISTIC_STATUS = {})).WAIT_DELIVERY = "WAIT_DELIVERY", 
        f.IS_DELIVERY = "IS_DELIVERY", f.IS_RECEIVED = "IS_RECEIVED", (d = e.LOGIN_TYPE || (e.LOGIN_TYPE = {})).WINXIN_H5 = "WINXIN_H5", 
        d.WINXIN_APP = "WINXIN_APP", d.ALI_H5 = "ALI_H5", d.ALI_APP = "ALI_APP", d.H5 = "H5", 
        d.THIRD_API = "THIRD_API";
    },
    21: function(t, e, n) {
        function o(t, e, n) {
            return e ? t + n + e : t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t) {
            return function(e, n) {
                return e && "string" != typeof e && (n = e, e = ""), e = o(t, e, "__"), n ? [ e, function t(e, n) {
                    if ("string" == typeof n) return o(e, n, "--");
                    if (Array.isArray(n)) return n.map(function(n) {
                        return t(e, n);
                    });
                    var r = {};
                    return n && Object.keys(n).forEach(function(t) {
                        r[e + "--" + t] = n[t];
                    }), r;
                }(e, n) ] : e;
            };
        };
    },
    225: function(t, e, n) {
        n.r(e);
        var o = n(226), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    226: function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, n) {
                        return function o(r, a) {
                            try {
                                var i = e[r](a), u = i.value;
                            } catch (r) {
                                return void n(r);
                            }
                            if (!i.done) return Promise.resolve(u).then(function(t) {
                                o("next", t);
                            }, function(t) {
                                o("throw", t);
                            });
                            t(u);
                        }("next");
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = o(n(19)), i = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                }
                return t;
            }, u = o(n(285)), s = o(n(76)), c = o(n(146));
            n(23), e.default = {
                name: "PhotoRecord",
                components: {
                    Tips: s.default,
                    photoRecord: u.default,
                    pullDownRefresh: c.default
                },
                data: function() {
                    return {
                        loading: !1,
                        searchInfo: {
                            pageNum: 30,
                            pageSize: 10
                        },
                        list: [],
                        indexConfig: this.$utils.cache.getLocalCache("/params/photoApi/getIndexConfig") || {}
                    };
                },
                computed: {
                    themeClass: function() {
                        return this.$store.state.common.theme ? "theme-711" : "base";
                    }
                },
                created: function() {
                    var e = this;
                    return r(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.prev = 0, t.showNavigationBarLoading(), n.next = 4, e.init();

                              case 4:
                                return n.prev = 4, t.hideNavigationBarLoading(), n.finish(4);

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, n, e, [ [ 0, , 4, 7 ] ]);
                    }))();
                },
                onPullDownRefresh: function() {
                    var e = this;
                    return r(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.prev = 0, n.next = 3, e.init();

                              case 3:
                                return n.prev = 3, t.stopPullDownRefresh(), n.finish(3);

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n, e, [ [ 0, , 3, 6 ] ]);
                    }))();
                },
                methods: {
                    init: function() {
                        var t = this;
                        return r(a.default.mark(function e() {
                            var n, o;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, t.$apis.photoApis.getPhotoRecord(i({}, t.searchInfo, {
                                        pageNum: 0
                                    }));

                                  case 3:
                                    n = e.sent, o = n.data, t.list = o, t.searchInfo.pageNum = 0;

                                  case 7:
                                    return e.prev = 7, t.$nextTick(function() {
                                        t.$refs.scroller.finishInfinite(t.list.length < t.searchInfo.pageSize);
                                    }), e.finish(7);

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t, [ [ 0, , 7, 10 ] ]);
                        }))();
                    },
                    loadMore: function() {
                        var t = this;
                        return r(a.default.mark(function e() {
                            var n, o, r;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, t.$apis.photoApis.getPhotoRecord(i({}, t.searchInfo, {
                                        pageNum: t.searchInfo.pageNum + 1
                                    }));

                                  case 3:
                                    o = e.sent, r = o.data, t.searchInfo.pageNum++, (n = t.list).push.apply(n, function(t) {
                                        if (Array.isArray(t)) {
                                            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                            return n;
                                        }
                                        return Array.from(t);
                                    }(r)), t.$refs.scroller.finishInfinite(r.length < t.searchInfo.pageSize), e.next = 13;
                                    break;

                                  case 10:
                                    e.prev = 10, e.t0 = e.catch(0), t.$refs.scroller.finishInfinite();

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t, [ [ 0, 10 ] ]);
                        }))();
                    }
                }
            };
        }).call(this, n(13).default);
    },
    227: function(t, e, n) {},
    24: function(t, e, n) {
        n.r(e);
        var o = n(25), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    25: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "Tips"
        };
    },
    26: function(t, e, n) {},
    27: function(t, e, n) {
        n.r(e);
        var o = n(15), r = n(1);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(35);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/components/toast/index.vue", e.default = u.exports;
    },
    285: function(t, e, n) {
        n.r(e);
        var o = n(151), r = n(109);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(287);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/components/photo-record/index.vue", e.default = u.exports;
    },
    286: function(t, e, n) {
        function o(t) {
            return t ? t.split(";").filter(function(t) {
                return t;
            }).join(";") : "";
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(14), a = n(20), i = r.__importDefault(n(103)), u = r.__importDefault(n(85)), s = {
            strategy1: new i.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.PhotoState.CHECK_OK, a.PhotoState.DEAL_OK ]
                },
                photoOrderId: {
                    type: "number",
                    max: 0
                }
            }),
            strategy2: new i.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.PhotoState.CHECK_OK ]
                },
                photoOrderId: {
                    required: !0,
                    type: "number",
                    min: 1
                },
                paymentStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.OrderState.WAITING_PAY ]
                }
            }),
            strategy12: {
                validate: function(t, e) {
                    e(t.photoStatus === a.PhotoState.DEALING || t.photoStatus === a.PhotoState.DEAL_RECEIPT_ING || t.photoStatus === a.PhotoState.CHECK_OK && t.paymentStatus === a.OrderState.IS_PAY ? null : "不匹配strategy12");
                }
            },
            strategy3: new i.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.PhotoState.CHECK_FAIL ]
                }
            }),
            strategy4: new i.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.PhotoState.NEW, a.PhotoState.CHECKING ]
                }
            }),
            strategy5: new i.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.PhotoState.CHECK_ABNORMAL ]
                }
            }),
            strategy6: {
                validate: function(t, e) {
                    e(t.photoStatus === a.PhotoState.DEAL_OK && t.paymentStatus !== a.OrderState.WAITING_PAY || t.photoStatus === a.PhotoState.DEAL_RECEIPT_ING ? null : "不匹配strategy6");
                }
            },
            strategy7: new i.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.PhotoState.DEAL_RECEIPT_OK, a.PhotoState.DEAL_OK ]
                }
            }),
            strategy8: new i.default({
                isRefilming: {
                    required: !0,
                    type: "number",
                    len: 1
                }
            }),
            strategy9: new i.default({
                isRefilming: {
                    required: !0,
                    type: "number",
                    len: 2
                }
            }),
            strategy10: new i.default({
                isRePhotoComplete: {
                    required: !0,
                    type: "number",
                    len: 1
                }
            }),
            strategy11: new i.default({
                isRePhotoComplete: {
                    required: !0,
                    type: "number",
                    len: 1
                },
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ a.PhotoState.CHECK_ABNORMAL ]
                }
            })
        };
        e.default = function(t) {
            return new Promise(function(e, n) {
                var r = !1;
                s.strategy11.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: o(t.checkMessage),
                        body: {
                            click: function() {
                                var e = this;
                                u.default.confirm({
                                    title: "",
                                    confirmButtonText: "查看订单",
                                    message: "您重拍的证件照已完成，请去订单查看详细结果"
                                }).then(function() {
                                    e.$router.push({
                                        path: "/pages/transaction/orderDetail/Index",
                                        query: {
                                            photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                        }
                                    });
                                }).catch(function() {
                                    u.default.close();
                                });
                            }
                        },
                        button: {
                            text: "查看详情",
                            click: function() {
                                var e = this;
                                u.default.confirm({
                                    title: "",
                                    confirmButtonText: "查看订单",
                                    message: "您重拍的证件照已完成，请去订单查看详细结果"
                                }).then(function() {
                                    e.$router.push({
                                        path: "/pages/transaction/orderDetail/Index",
                                        query: {
                                            photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                        }
                                    });
                                }).catch(function() {
                                    u.default.close();
                                });
                            }
                        }
                    }));
                }), s.strategy8.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: o(t.checkMessage),
                        body: {
                            click: function() {
                                t.photoStatus === a.PhotoState.CHECK_FAIL ? this.$router.push({
                                    path: "/packageB/pages/check/checkFail/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                }) : this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId
                                    }
                                });
                            }
                        },
                        button: {
                            text: "免费重拍",
                            click: function() {
                                this.$router.push({
                                    path: "/pages/main/photoGuide/Index",
                                    query: {
                                        certificationInfoId: t.certificationInfoId,
                                        photoInfoId: t.photoInfoId,
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        }
                    }));
                }), s.strategy9.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: o(t.checkMessage),
                        body: {
                            click: function() {}
                        },
                        button: {
                            text: "重拍检测中",
                            click: function() {
                                u.default.alert({
                                    title: "",
                                    message: "您重拍的证件照正在云端处理中，请稍等！"
                                });
                            }
                        }
                    }));
                }), s.strategy10.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: o(t.checkMessage),
                        body: {
                            click: function() {
                                var e = this;
                                u.default.confirm({
                                    title: "",
                                    confirmButtonText: "查看订单",
                                    message: "您重拍的证件照已完成，请去订单查看详细结果"
                                }).then(function() {
                                    e.$router.push({
                                        path: "/pages/transaction/orderDetail/Index",
                                        query: {
                                            photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                        }
                                    });
                                }).catch(function() {
                                    u.default.close();
                                });
                            }
                        },
                        button: {
                            text: "免费重拍",
                            click: function() {
                                var e = this;
                                u.default.confirm({
                                    title: "",
                                    confirmButtonText: "查看订单",
                                    message: "您重拍的证件照已完成，请去订单查看详细结果"
                                }).then(function() {
                                    e.$router.push({
                                        path: "/pages/transaction/orderDetail/Index",
                                        query: {
                                            photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                        }
                                    });
                                }).catch(function() {
                                    u.default.close();
                                });
                            }
                        }
                    }));
                }), s.strategy1.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: "支付后可获取高清处理相片",
                        body: {
                            click: function() {
                                t.isNewProcess ? this.$router.push({
                                    path: "/packageB/pages/check/preview/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                }) : this.$router.push({
                                    path: "/packageB/pages/check/checkOk/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                });
                            }
                        },
                        button: {
                            text: "去支付",
                            click: function() {
                                t.isNeedChooseColor ? this.$router.push({
                                    path: "/packageB/pages/check/preview/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                }) : this.$router.push({
                                    path: "/packageB/pages/check/checkOk/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                });
                            }
                        }
                    }));
                }), s.strategy2.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: "支付后可获取高清处理相片",
                        body: {
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        },
                        button: {
                            text: "去支付",
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        }
                    }));
                }), s.strategy12.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: "查看订单可获取相片详细信息",
                        body: {
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        },
                        button: {
                            text: "查看订单",
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        }
                    }));
                }), s.strategy3.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: o(t.checkMessage),
                        body: {
                            click: function() {
                                this.$router.push({
                                    path: "/packageB/pages/check/checkFail/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                });
                            }
                        },
                        button: {
                            text: "重新拍摄",
                            click: function() {
                                this.$router.push({
                                    path: t.isCustomSize ? "/pages/main/customPhotoSize/Index" : "/pages/main/photoGuide/Index",
                                    query: {
                                        certificationInfoId: t.certificationInfoId,
                                        photoInfoId: t.photoInfoId,
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        }
                    }));
                }), s.strategy4.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: "",
                        body: {
                            click: function() {
                                this.$router.push({
                                    path: "/packageB/pages/check/checkIng/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                });
                            }
                        },
                        button: null
                    }));
                }), s.strategy5.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: o(t.checkMessage),
                        body: {
                            click: function() {
                                this.$router.push({
                                    path: "/packageB/pages/check/checkAbnormal/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                });
                            }
                        },
                        button: {
                            text: "查看详情",
                            click: function() {
                                this.$router.push({
                                    path: "/packageB/pages/check/checkAbnormal/Index",
                                    query: {
                                        photoInfoId: t.photoInfoId
                                    }
                                });
                            }
                        }
                    }));
                }), s.strategy6.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: "查看订单可获取相片详细信息",
                        body: {
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        },
                        button: {
                            text: "查看订单",
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        }
                    }));
                }), s.strategy7.validate(t, function(n) {
                    n || (r = !0, e({
                        footerText: "查看订单可获取相片详细信息",
                        body: {
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        },
                        button: {
                            text: "查看订单",
                            click: function() {
                                this.$router.push({
                                    path: "/pages/transaction/orderDetail/Index",
                                    query: {
                                        photoOrderId: t.photoOrderId ? t.photoOrderId : ""
                                    }
                                });
                            }
                        }
                    }));
                }), r || n({});
            });
        };
    },
    287: function(t, e, n) {
        var o = n(111);
        n.n(o).a;
    },
    29: function(t, e, n) {
        n.r(e);
        var o = n(16), r = n(3);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(30);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/components/icon/index.vue", e.default = u.exports;
    },
    3: function(t, e, n) {
        n.r(e);
        var o = n(4), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    30: function(t, e, n) {
        var o = n(5);
        n.n(o).a;
    },
    31: function(t, e, n) {
        n.r(e);
        var o = n(17), r = n(6);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(32);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/components/loading/index.vue", e.default = u.exports;
    },
    32: function(t, e, n) {
        var o = n(8);
        n.n(o).a;
    },
    33: function(t, e, n) {
        n.r(e);
        var o = n(18), r = n(9);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(34);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/components/overlay/index.vue", e.default = u.exports;
    },
    337: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
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
            }, [ n("pull-down-refresh", {
                ref: "scroller",
                attrs: {
                    infinite: "true",
                    "on-infinite": t.loadMore,
                    "on-refresh": t.refresh,
                    h_: 2,
                    c_: 0
                }
            }, [ n("tips", {
                staticClass: "sevenColor",
                attrs: {
                    h_: "s4",
                    c_: 1
                }
            }, []), n("div", {
                attrs: {
                    h_: "s8"
                }
            }, t._l(t.list, function(e, o, r) {
                var a = void 0 !== r ? r : o;
                return n("photo-record", {
                    key: o,
                    attrs: {
                        data: e,
                        classes: "1" === t.indexConfig.isApp ? "custom-photo-record" : "",
                        h_: "s9",
                        f_: a,
                        k_: "index",
                        c_: 2
                    }
                });
            }, [ "s9" ], t._self), 1) ], 1), n("van-dialog", {
                attrs: {
                    h_: 12
                }
            }) ], 1) ]);
        }, r = [];
        o._withStripped = !0;
    },
    34: function(t, e, n) {
        var o = n(11);
        n.n(o).a;
    },
    35: function(t, e, n) {
        var o = n(12);
        n.n(o).a;
    },
    36: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                attrs: {
                    h_: 0
                }
            }, [ this._t("default", null, {
                h_: 1
            }) ], 1);
        }, r = [];
        o._withStripped = !0;
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
    482: function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var r = o(n(483)), a = o(n(22));
        r.default.mpType = "page", new a.default(r.default).$mount();
    },
    483: function(t, e, n) {
        n.r(e);
        var o = n(337), r = n(225);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(484);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/pages/photoRecord/Index.vue", e.default = u.exports;
    },
    484: function(t, e, n) {
        var o = n(227);
        n.n(o).a;
    },
    5: function(t, e, n) {},
    59: function(t, e, n) {
        n.r(e);
        var o = n(60), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    6: function(t, e, n) {
        n.r(e);
        var o = n(7), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    60: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "pull-down-refresh",
            props: {
                lowerThreshold: String,
                noDataText: String,
                onInfinite: Function,
                onRefresh: Function,
                infinite: Boolean
            },
            data: function() {
                return {
                    infiniteDone: !1,
                    infiniteIng: !1
                };
            },
            computed: {},
            onReachBottom: function() {
                this.infinite && !this.infiniteDone && !this.infiniteIng && this.onInfinite && (this.onInfinite(), 
                this.infiniteIng = !0);
            },
            methods: {
                finishInfinite: function(t) {
                    var e = 0 < arguments.length && void 0 !== t && t;
                    this.infiniteIng = !1, this.infiniteDone = e;
                }
            }
        };
    },
    61: function(t, e, n) {},
    7: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, r = (o = n(21)) && o.__esModule ? o : {
            default: o
        }, a = "#c9c9c9";
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
                    default: a
                }
            },
            computed: {
                colorType: function() {
                    var t = this.color;
                    return "white" === t || "black" === t ? t : "";
                },
                style: function() {
                    return {
                        color: "black" === this.color ? a : this.color,
                        width: this.size,
                        height: this.size
                    };
                }
            },
            methods: {
                b: (0, r.default)("van-loading")
            }
        };
    },
    70: function(t, e, n) {
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
        var o = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("view", {
                attrs: {
                    h_: 0
                }
            }, [ n("div", {
                attrs: {
                    h_: 1
                }
            }, [ t._t("default", null, {
                h_: 2
            }) ], 1), t._ri(!!t.infinite, 4) ? n("div", {
                attrs: {
                    h_: 4
                }
            }, [ t._ri(!!t.infiniteDone, 5) ? [ t._t("infiniteFinish", null, {
                h_: 6
            }), t._ri(!t.$slots.infiniteFinish, 8) ? n("div", {
                attrs: {
                    h_: 8
                }
            }, []) : t._e() ] : t._ri(!!t.onInfinite, 10) ? [ t._t("infinite", null, {
                h_: 11
            }), t._ri(!t.$slots.infinite, 13) ? n("div", {
                attrs: {
                    h_: 13
                }
            }, [ n("van-loading", {
                attrs: {
                    h_: 14
                }
            }), n("span", {
                attrs: {
                    h_: 16
                }
            }, []) ], 1) : t._e() ] : t._e() ], 1) : t._e() ]);
        }, r = [];
        o._withStripped = !0;
    },
    76: function(t, e, n) {
        n.r(e);
        var o = n(36), r = n(24);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n(82);
        var i = n(0), u = Object(i.a)(r.default, o.a, o.b, !1, null, null, null);
        u.options.__file = "src/components/Tips.vue", e.default = u.exports;
    },
    8: function(t, e, n) {},
    82: function(t, e, n) {
        var o = n(26);
        n.n(o).a;
    },
    9: function(t, e, n) {
        n.r(e);
        var o = n(10), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    }
}, [ [ 482, "runtime", "vendor" ] ] ]);
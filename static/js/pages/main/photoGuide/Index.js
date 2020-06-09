var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/photoGuide/Index" ], {
    1: function(t, e, n) {
        n.r(e);
        var r = n(2), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
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
    100: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.getCertificationInfo = function(t) {
            return this.request.get("/params/photoApi/getPhotoTypeById", t);
        }, r.prototype.getConfig = function(t) {
            return this.request.get("/params/photoApi/getIndexConfig", t);
        }, r.prototype.voucher = function(t) {
            return this.request.get("/params/coupon/voucher", t);
        }, r.prototype.getPhotoType = function(t) {
            return this.request.get("/params/photoApi/getIndexPhotoType", t);
        }, r.prototype.uploadImage = function(t) {
            return this.request.post("/params/photoApi/uploadImgFile", t);
        }, r.prototype.sendSMS = function(t) {
            return this.request.get("/params/photoApi/sendSms", t);
        }, r.prototype.sendEmail = function(t) {
            return this.request.get("/params/photoApi/sendEmail", t);
        }, r.prototype.sendVerifyCode = function(t) {
            return this.request.get("/params/photoApi/sendVerifyCode", t);
        }, r.prototype.configInfos = function(t) {
            return this.request.get("/params/pageCustomize/configInfo", t);
        }, r.prototype.boundUserMobile = function(t) {
            return this.request.post("/params/photoApi/boundUserMobile", t);
        }, r.prototype.mobileLogin = function(t) {
            return this.request.post("/params/photoApi/mobileLoginByVCode", t);
        }, r.prototype.getCityList = function(t) {
            return this.request.get("/params/photoApi/listCitys", t);
        }, r.prototype.getHistorySearch = function(t) {
            return this.request.get("/params/photoApi/getHistorySearch", t);
        }, r.prototype.getMerchantPayWayDetail = function(t) {
            return this.request.get("/params/photoApi/merchantPayWayDetail", t);
        }, r.prototype.recordLog = function(t, e) {
            return this.request.post("/params/photoApi/uploadOperateLog", t);
        }, r.prototype.getMerchantInfo = function(t) {
            return this.request.get("/params/photoApi/getMerchantInfo", t);
        }, r.prototype.getCity = function(t) {
            return this.request.get("/params/photoApi/getCityByLocation", t);
        }, r.prototype.getPageConfig = function(t) {
            return this.request.get("/params/photoApi/getPageConfig", t);
        }, r.prototype.getCustomServiceInfo = function(t) {
            return this.request.get("/params/photoApi/getCustomServiceInfo ", t);
        }, r.prototype.personalCenter = function() {
            return this.request.get("/params/photoApi/personalCenter");
        }, r.prototype.getPaySuccessView = function(t) {
            return this.request.get("/params/photoOrder/getPaySuccessView", t);
        }, r.prototype.orderAssistance = function(t) {
            return this.request.post("/params/photoOrder/orderAssistance", t);
        }, r.prototype.configInfo = function(t) {
            return this.request.post("/params/pageCustomize/configInfo", t);
        }, r.prototype.bulletin = function(t) {
            return this.request.post("/params/pageCustomize/bulletin", t);
        }, r.prototype.getCompressConfig = function(t) {
            return this.request.get("/params/photoApi/getCompressConfig", t);
        }, r.prototype.removePhotoRecord = function(t) {
            return this.request.get("/params/photoApi/removePhotoRecord", t);
        }, r.prototype.getCityByLocation = function(t) {
            return this.request.get("/params/photoApi/getCityByLocation", t);
        }, r.prototype.dialogConfig = function(t) {
            return this.request.get("/params/pageCustomize/popup", t);
        }, r);
        e.default = o;
    },
    101: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.createOrder = function(t) {
            return this.request.post("/params/photoApi/createOrder", t);
        }, r.prototype.getUpgradePaperGoodsStands = function(t) {
            return this.request.get("/params/photoOrder/getUpgradePaperGoodsStands", t);
        }, r.prototype.getOrderList = function(t) {
            return this.request.get("/params/photoApi/getOrderList", t);
        }, r.prototype.getOrderDetail = function(t) {
            return this.request.get("/params/photoApi/getOrderDetail", t);
        }, r.prototype.upgradePaperInfo = function(t) {
            return this.request.get("/params/photoOrder/upgradePaperInfo", t);
        }, r.prototype.upgradePaper = function(t) {
            return this.request.post("/params/photoOrder/upgradePaper", t);
        }, r.prototype.toUpgradePaper = function(t) {
            return this.request.get("/params/photoOrder/toUpgradePaper", t);
        }, r.prototype.getRefundInfo = function(t) {
            return this.request.get("/params/photoOrder/getRefundInfo", t);
        }, r.prototype.getRefundDetail = function(t) {
            return this.request.get("/params/photoOrder/getRefundDetail", t);
        }, r.prototype.scanning = function(t) {
            return this.request.post("/params/selfPrint/scanning", t);
        }, r.prototype.getPrintDetail = function(t) {
            return this.request.get("/params/selfPrint/getPrintDetail", t);
        }, r.prototype.applyRefund = function(t) {
            return this.request.post("/params/photoOrder/applyRefund", t);
        }, r);
        e.default = o;
    },
    102: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.login = function(t) {
            return this.request.post("/params/user/weixinH5Login", t);
        }, r.prototype.pay = function(t) {
            return this.request.post("/params/weiXinPayApi/weiXinPay", t);
        }, r.prototype.saveFormId = function(t) {
            return this.request.post("/params/photoApi/saveAppFormId", t);
        }, r.prototype.updateUser = function(t) {
            return this.request.post("/params/user/updateUser", t);
        }, r);
        e.default = o;
    },
    11: function(t, e, n) {},
    12: function(t, e, n) {},
    136: function(t, e, n) {
        n.r(e);
        var r = n(137), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    137: function(t, e, n) {
        function r(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(o, i) {
                        try {
                            var a = e[o](i), s = a.value;
                        } catch (o) {
                            return void n(o);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(t) {
                            r("next", t);
                        }, function(t) {
                            r("throw", t);
                        });
                        t(s);
                    }("next");
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, i = (o = n(19)) && o.__esModule ? o : {
            default: o
        }, a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
        };
        n(23), e.default = {
            data: function() {
                return {
                    isNeedInfo: this.$utils.cache.getLocalCache("isNeedInfo")
                };
            },
            computed: {
                themeClass: function() {
                    return this.$store.state.common.theme ? "theme-711" : "base";
                }
            },
            methods: {
                cancel: function() {
                    this.$emit("close");
                },
                gotoLogin: function(t) {
                    var e = this;
                    return r(i.default.mark(function n() {
                        var r, o;
                        return i.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (t.detail.userInfo) return r = t.detail.userInfo, o = e.$utils.cache.getLocalCache("userInfo") || {}, 
                                2 == r.gender && (r.gender = 0), e.$store.commit("auth/changeUserInfo", Object.assign({}, o, a({}, r, {
                                    region: r.province + "," + r.city + "," + r.country,
                                    faceUrl: r.avatarUrl
                                }))), e.$buriedPoint.recordLog(a({
                                    operateCode: "send_user_info"
                                }, r)), e.$utils.cache.setLocalCache("isNeedInfo", 0, 1 / 0), e.$emit("close"), 
                                n.next = 10, e.$apis.weChatApis.updateUser(a({}, r, {
                                    faceUrl: r.avatarUrl,
                                    region: r.province + "," + r.city + "," + r.country
                                }));
                                n.next = 10;
                                break;

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                }
            }
        };
    },
    138: function(t, e, n) {},
    15: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
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
        }, o = [];
        r._withStripped = !0;
    },
    158: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
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
            }, [ n("div", {
                attrs: {
                    h_: 2
                }
            }, [ n("p", {
                attrs: {
                    h_: 3
                }
            }, []), n("p", {
                attrs: {
                    h_: 6
                }
            }, []), n("div", {
                attrs: {
                    h_: 9
                }
            }, [ t._ri(!this.$store.state.common.theme, 10) ? n("image", {
                attrs: {
                    h_: 10
                }
            }) : n("image", {
                attrs: {
                    h_: 11
                }
            }) ], 1), n("div", {
                attrs: {
                    h_: 13
                }
            }, [ n("button", {
                attrs: {
                    h_: 14
                },
                on: {
                    click: t.cancel
                }
            }, []), n("button", {
                attrs: {
                    h_: 17
                },
                on: {
                    getuserinfo: t.gotoLogin
                }
            }, []) ]) ]) ]) ]);
        }, o = [];
        r._withStripped = !0;
    },
    16: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
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
        }, o = [];
        r._withStripped = !0;
    },
    17: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
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
        }, o = [];
        r._withStripped = !0;
    },
    18: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
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
        }, o = [];
        r._withStripped = !0;
    },
    2: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(n(29)), i = r(n(31)), a = r(n(33)), s = r(n(21)), u = [ "success", "fail", "loading" ];
        e.default = {
            name: "toast",
            components: {
                "par-overlay": a.default,
                "van-icon": o.default,
                "van-loading": i.default
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
                    return -1 !== u.indexOf(this.currentOptions.type) ? "default" : this.currentOptions.type;
                }
            },
            methods: {
                b: (0, s.default)("van-toast"),
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
        var r, o, i, a, s, u, c, f, l;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LOGIN_TYPE = e.LOGISTIC_STATUS = e.CouponStatus = e.CouponPreferential = e.COLOR = e.OrderType = e.OrderState = e.PhotoState = e.MEGALO_ENV = void 0, 
        (r = e.MEGALO_ENV || (e.MEGALO_ENV = {})).WECHAT = "wechat", r.SWAN = "swan", r.ALIPAY = "alipay", 
        r.TT = "tt", r.WEB = "web", (o = e.PhotoState || (e.PhotoState = {})).NEW = "NEW", 
        o.CHECKING = "CHECKING", o.CHECK_OK = "CHECK_OK", o.CHECK_FAIL = "CHECK_FAIL", o.CHECK_ABNORMAL = "CHECK_ABNORMAL", 
        o.DEALING = "DEALING", o.DEAL_OK = "DEAL_OK", o.DEAL_FAIL = "DEAL_FAIL", o.COMFIRM_FT_PAY_FAIL = "COMFIRM_FT_PAY_FAIL", 
        o.DEAL_RECEIPT_ING = "DEAL_RECEIPT_ING", o.DEAL_RECEIPT_OK = "DEAL_RECEIPT_OK", 
        o.DEAL_RECEIPT_FAIL = "DEAL_RECEIPT_FAIL", o.REFINEMENT_FAIL = "REFINEMENT_FAIL", 
        (i = e.OrderState || (e.OrderState = {})).WAITING_PAY = "WAITING_PAY", i.CANCEL = "CANCEL", 
        i.IS_PAY = "IS_PAY", i.REFUND = "REFUND", i.REFUNDING = "REFUNDING", i.PAY_FAILED = "PAY_FAILED", 
        i.WAITING_RECEIPT = "WAITING_RECEIPT", i.PARTIAL_REFUNDING = "PARTIAL_REFUNDING", 
        i.PARTIAL_REFUND = "PARTIAL_REFUND", (a = e.OrderType || (e.OrderType = {})).ELECTRON = "ELECTRON", 
        a.PAPER = "PAPER", a.FAST_PAPER = "FAST_PAPER", a.SHOP_PAPER = "SHOP_PAPER", (s = e.COLOR || (e.COLOR = {})).RED = "#970013", 
        s.BLUE = "#81cfff", s.WHITE = "#fff", (u = e.CouponPreferential || (e.CouponPreferential = {})).DISCOUNT = "DISCOUNT", 
        u.EXCHANGE = "EXCHANGE", u.REDUCTION = "REDUCTION", (c = e.CouponStatus || (e.CouponStatus = {})).NEW = "NEW", 
        c.GOT = "GOT", c.USED = "USED", c.EXPIRED = "EXPIRED", (f = e.LOGISTIC_STATUS || (e.LOGISTIC_STATUS = {})).WAIT_DELIVERY = "WAIT_DELIVERY", 
        f.IS_DELIVERY = "IS_DELIVERY", f.IS_RECEIVED = "IS_RECEIVED", (l = e.LOGIN_TYPE || (e.LOGIN_TYPE = {})).WINXIN_H5 = "WINXIN_H5", 
        l.WINXIN_APP = "WINXIN_APP", l.ALI_H5 = "ALI_H5", l.ALI_APP = "ALI_APP", l.H5 = "H5", 
        l.THIRD_API = "THIRD_API";
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
                    var o = {};
                    return n && Object.keys(n).forEach(function(t) {
                        o[e + "--" + t] = n[t];
                    }), o;
                }(e, n) ] : e;
            };
        };
    },
    24: function(t, e, n) {
        n.r(e);
        var r = n(25), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    246: function(t, e, n) {
        n.r(e);
        var r = n(247), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    247: function(t, e, n) {
        (function(t) {
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, n) {
                        return function r(o, i) {
                            try {
                                var a = e[o](i), s = a.value;
                            } catch (o) {
                                return void n(o);
                            }
                            if (!a.done) return Promise.resolve(s).then(function(t) {
                                r("next", t);
                            }, function(t) {
                                r("throw", t);
                            });
                            t(s);
                        }("next");
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(n(19)), a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
            }, s = n(23), u = r(n(66)), c = r(n(27)), f = r(n(76)), l = r(n(572)), d = (r(n(318)), 
            r(n(574))), p = r(n(576)), h = r(n(49)), m = (n(293), r(n(85))), g = n(65);
            e.default = {
                name: "PhotoGuide",
                components: {
                    loginDialog: d.default,
                    Tips: f.default,
                    toast: c.default,
                    photoGuideInfo: l.default,
                    PhotoStepGuide: p.default
                },
                data: function() {
                    return this.$utils.cache.getLocalCache("isNeedInfo"), {
                        showDialog: !1,
                        isNeedInfo: this.$store.state.auth.isNeedInfo,
                        formId: "",
                        standardUrl: "",
                        tips: [],
                        disabled: !0,
                        certificationInfo: {},
                        guideInfo: {},
                        beforeRoute: null,
                        base64: "",
                        loading: !0,
                        correctModelUrl: "",
                        isStepGuide: "",
                        canvas: {
                            width: 0,
                            height: 0
                        },
                        showSelectMulti: !1,
                        actions: [ {
                            name: "相机拍摄",
                            value: 0
                        }, {
                            name: "本地上传",
                            value: 1
                        } ],
                        showAgreeProtocol: !1
                    };
                },
                computed: a({}, (0, s.mapState)({
                    userInfo: function(t) {
                        return t.auth.userInfo;
                    },
                    city: function(t) {
                        return t.common.city || {};
                    }
                }), {
                    themeClass: function() {
                        return this.$store.state.common.theme ? "theme-711" : "base";
                    }
                }),
                created: function() {
                    var t = this;
                    return o(i.default.mark(function e() {
                        var n, r, o, a;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, t.$toast.loading({
                                    message: "加载中...",
                                    selector: "#toast",
                                    duration: 0,
                                    forbidClick: !0
                                }), e.next = 4, Promise.all([ t.getCertificationInfo(), t.getPhotoGuide() ]);

                              case 4:
                                return e.next = 6, t.getPhotoGuideInfo();

                              case 6:
                                if (t.city && t.city.cityId) {
                                    e.next = 19;
                                    break;
                                }
                                return e.prev = 7, e.next = 10, t.$apis.commonApis.getCityByLocation({
                                    cityName: t.certificationInfo.cityName
                                });

                              case 10:
                                n = e.sent, r = n.data, t.$store.commit("common/changeCity", r.city), e.next = 19;
                                break;

                              case 15:
                                return e.prev = 15, e.t0 = e.catch(7), t.goCity(), e.abrupt("return");

                              case 19:
                                t.$toast.clear(), o = getCurrentPages(), a = o[o.length - 2], t.$buriedPoint.recordLog({
                                    operateCode: "guide_load",
                                    certificateTypeValue: t.certificationInfo.certificateType,
                                    isReceipt: t.certificationInfo.isReceipt,
                                    name: a && a.route || ""
                                }), e.next = 28;
                                break;

                              case 25:
                                e.prev = 25, e.t1 = e.catch(0);

                              case 28:
                                return e.prev = 28, t.disabled = !1, t.loading = !1, e.finish(28);

                              case 32:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 0, 25, 28, 32 ], [ 7, 15 ] ]);
                    }))();
                },
                methods: {
                    onProtocolClose: function() {
                        this.showAgreeProtocol = !1;
                    },
                    handleUserServiceProtocol: function() {
                        this.$router.push({
                            path: "/packageA/pages/webview/Index",
                            query: {
                                src: encodeURIComponent("https://www.parameters.cn/static/AlipayUserPrivacyAgreement.html"),
                                title: "隐私政策"
                            }
                        });
                    },
                    handleProtocol: function() {
                        this.$router.push({
                            path: "/packageA/pages/webview/Index",
                            query: {
                                src: encodeURIComponent("https://www.parameters.cn/static/AlipayPrivacyAgreement.html"),
                                title: "用户服务协议"
                            }
                        });
                    },
                    onProtocolConfirm: function() {
                        this.$utils.cache.setLocalCache("agreeProtocol", "1");
                    },
                    getUserInfo: function(t) {
                        var e = this;
                        return o(i.default.mark(function n() {
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.takePhotoCheck();

                                  case 2:
                                    if ("getUserInfo:ok" !== t.detail.errMsg) {
                                        n.next = 10;
                                        break;
                                    }
                                    if (e.$store.state.auth.unionId) {
                                        n.next = 6;
                                        break;
                                    }
                                    return n.next = 6, e.__handleGlobalAuthDialogGetUserInfo(t);

                                  case 6:
                                    if (e.certificationInfo.isUploadLocalPhoto) return e.showSelectMulti = !0, n.abrupt("return");
                                    n.next = 9;
                                    break;

                                  case 9:
                                    "camera" === t.currentTarget.dataset.type ? e.shooting() : "album" === t.currentTarget.dataset.type && e.chooseFromAlbum();

                                  case 10:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, e);
                        }))();
                    },
                    getPhotoGuide: function() {
                        var t = this;
                        return o(i.default.mark(function e() {
                            var n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$apis.photoApis.getSinglePhotoGuide({
                                        certificationInfoId: t.$route.query.certificationInfoId
                                    });

                                  case 2:
                                    n = e.sent, r = n.data, t.isStepGuide = r.isStepGuide, t.correctModelUrl = r.correctModelUrl, 
                                    t.standardUrl = r.standardUrl, t.tips = r.tipList;

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    getPhotoGuideInfo: function() {
                        var t = this;
                        return o(i.default.mark(function e() {
                            var n, r, o;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = {
                                        certificationInfoId: t.$route.query.certificationInfoId
                                    }, t.$route.query.photoInfoId && (n.photoInfoId = t.$route.query.photoInfoId), e.next = 4, 
                                    t.$apis.photoApis.getPhotoGuide(n);

                                  case 4:
                                    r = e.sent, o = r.data, t.guideInfo = o, t.$utils.cache.setTempCache("guideInfo", o);

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    getCertificationInfo: function() {
                        var t = this;
                        return o(i.default.mark(function e() {
                            var n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$apis.commonApis.getCertificationInfo({
                                        certificationInfoId: t.$route.query.certificationInfoId
                                    });

                                  case 2:
                                    n = e.sent, r = n.data, t.certificationInfo = r, t.$utils.cache.setTempCache("certificationInfo", r, 1 / 0);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    handleCancelMulti: function() {
                        this.showSelectMulti = !1;
                    },
                    onMultiSelect: function(t) {
                        0 === t.detail.value ? (this.handleCancelMulti(), this.shooting()) : 1 === t.detail.value && (this.handleCancelMulti(), 
                        this.chooseFromAlbum());
                    },
                    takePhotoCheck: function() {
                        if (!this.$utils.cache.getLocalCache("agreeProtocol")) return this.showAgreeProtocol = !0, 
                        Promise.reject();
                    },
                    shooting: function() {
                        var t = this;
                        return o(i.default.mark(function e() {
                            var n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.$buriedPoint.recordLog({
                                        operateCode: "guide_shot_click",
                                        certificateTypeValue: t.certificationInfo.certificateType,
                                        isReceipt: t.certificationInfo.isReceipt
                                    }), e.next = 3, t.authCamera();

                                  case 3:
                                    if (!t.certificationInfo.enableLivingCheck) {
                                        e.next = 15;
                                        break;
                                    }
                                    if (t.$route.query.photoInfoId) return e.next = 7, t.$apis.photoApis.getRePhotoLivingToken({
                                        photoInfoId: t.$route.query.photoInfoId
                                    });
                                    e.next = 12;
                                    break;

                                  case 7:
                                    if (n = e.sent, r = n.data) return t.$router.push({
                                        path: "/pages/main/camera/Index",
                                        query: a({}, t.$route.query, {
                                            livingCheckToken: r
                                        })
                                    }), e.abrupt("return");
                                    e.next = 12;
                                    break;

                                  case 12:
                                    t.$router.push({
                                        path: "/packageB/pages/living2Identify/Index",
                                        query: t.$route.query
                                    }), e.next = 16;
                                    break;

                                  case 15:
                                    t.$router.push({
                                        path: "/pages/main/camera/Index",
                                        query: t.$route.query
                                    });

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    authCamera: function() {
                        var e, n = this;
                        return new Promise((e = o(i.default.mark(function e(r, o) {
                            var a;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.getSetting();

                                  case 2:
                                    if ((a = e.sent).authSetting["scope.camera"]) {
                                        e.next = 36;
                                        break;
                                    }
                                    return e.prev = 6, e.next = 9, t.authorize({
                                        scope: "scope.camera"
                                    });

                                  case 9:
                                    e.next = 32;
                                    break;

                                  case 11:
                                    return e.prev = 11, e.t0 = e.catch(6), e.next = 15, m.default.confirm({
                                        title: "提示",
                                        message: "请点击授权后在授权页勾选摄像头权限",
                                        confirmButtonText: "授权",
                                        "confirm-button-open-type": "openSetting"
                                    });

                                  case 15:
                                    return e.prev = 15, e.next = 18, t.openSetting();

                                  case 18:
                                    if (e.sent.authSetting["scope.camera"]) return r(), e.abrupt("return");
                                    e.next = 24;
                                    break;

                                  case 24:
                                    return o(), e.abrupt("return");

                                  case 26:
                                    e.next = 32;
                                    break;

                                  case 28:
                                    return e.prev = 28, e.t1 = e.catch(15), o(), e.abrupt("return");

                                  case 32:
                                  case 36:
                                    return r(), e.abrupt("return");

                                  case 38:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, n, [ [ 6, 11 ], [ 15, 28 ] ]);
                        })), function(t, n) {
                            return e.apply(this, arguments);
                        }));
                    },
                    chooseFromAlbum: function() {
                        var t = this;
                        return o(i.default.mark(function e() {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.chooseImage("album");

                                  case 2:
                                    t.$buriedPoint.recordLog({
                                        operateCode: "guide_album_click",
                                        certificateTypeValue: t.certificationInfo.certificateType,
                                        isReceipt: t.certificationInfo.isReceipt
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    chooseImage: function(e) {
                        var n = this;
                        return o(i.default.mark(function r() {
                            var o, a, s, u;
                            return i.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.prev = 0, r.next = 3, t.chooseImage({
                                        count: 1,
                                        sizeType: [ "original" ],
                                        sourceType: [ e ]
                                    });

                                  case 3:
                                    if (o = r.sent, 0 < (a = o.tempFiles).length) return s = a[a.length - 1], n.$utils.cache.setTempCache("originalImage", s.path), 
                                    r.next = 10, n.compressImage(s);
                                    r.next = 14;
                                    break;

                                  case 10:
                                    u = r.sent, n.photo = u, n.$utils.cache.setTempCache("tempPhoto", n.photo), n.next();

                                  case 14:
                                    r.next = 19;
                                    break;

                                  case 16:
                                    r.prev = 16, r.t0 = r.catch(0);

                                  case 19:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, n, [ [ 0, 16 ] ]);
                        }))();
                    },
                    compressImage: function(t) {
                        var e = this;
                        return o(i.default.mark(function n() {
                            var r, o, a, s;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.prev = 0, e.$toast.loading({
                                        selector: "#toast",
                                        duration: 0,
                                        message: "正在压缩中"
                                    }), n.next = 4, e.$apis.commonApis.getCompressConfig({
                                        certificationInfoId: e.$route.query.certificationInfoId
                                    });

                                  case 4:
                                    return r = n.sent, o = r.data, a = new e.$utils.getCompressUtil({
                                        canvasId: "canvas",
                                        changeCanvasOption: function(t) {
                                            e.$set(e, "canvas", Object.assign({}, e.canvas, t));
                                        },
                                        opt: o
                                    }), n.next = 9, a.compress(t);

                                  case 9:
                                    return s = n.sent, n.abrupt("return", s);

                                  case 13:
                                    return n.prev = 13, n.t0 = n.catch(0), n.abrupt("return", t.path);

                                  case 18:
                                    return n.prev = 18, e.$toast.clear(), n.finish(18);

                                  case 21:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, e, [ [ 0, 13, 18, 21 ] ]);
                        }))();
                    },
                    next: function() {
                        this.certificationInfo.isNeedFill ? this.$router.replace({
                            path: "/pages/main/driverForm/Index",
                            query: this.$route.query
                        }) : this.certificationInfo.isNewProcess || 1 !== this.certificationInfo.chooseColor ? this.upload() : this.$router.replace({
                            path: "/pages/main/chooseBackground/Index",
                            query: this.$route.query
                        });
                    },
                    upload: function() {
                        var e = this;
                        return o(i.default.mark(function n() {
                            var r, o, a;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return e.$toast.loading({
                                        selector: "#toast",
                                        duration: 0,
                                        forbidClick: !0,
                                        message: "上传中……"
                                    }), e.disabled = !0, r = (0, u.default)().format("YYYY-MM-DD hh:mm:ss SSS"), n.prev = 3, 
                                    n.next = 6, t.uploadFile({
                                        url: h.default.baseURL + "/params/photoApi/uploadImgFile",
                                        name: "imageFile",
                                        filePath: e.photo,
                                        header: {
                                            appid: e.$store.state.common.mid || "",
                                            thirdAppId: e.$store.state.common.weChatAppID || "",
                                            token: e.$store.state.auth.token,
                                            userId: e.$store.state.auth.userId,
                                            vid: e.$utils.cache.getLocalCache("vid") || ""
                                        },
                                        formData: {
                                            photoType: 1,
                                            districtCode: e.certificationInfo.districtCode || e.$store.state.common.city.districtCode || "440100000000",
                                            certificateCode: e.certificationInfo.certificateCode,
                                            certificationInfoId: Number(e.$route.query.certificationInfoId),
                                            photoOrderId: e.$route.query.photoOrderId || "",
                                            photoInfoId: e.$route.query.photoInfoId || "",
                                            customWidth: e.$route.query.customWidth || "",
                                            customHeight: e.$route.query.customHeight || ""
                                        }
                                    });

                                  case 6:
                                    if (200 === (o = n.sent).statusCode) return a = JSON.parse(o.data), n.next = 11, 
                                    (0, g.responseIntercetor)(a);
                                    n.next = 18;
                                    break;

                                  case 11:
                                    e.certificationInfo.enableUpOrgPic && e.uploadOriginalImage(a.data.photoInfoId), 
                                    e.$buriedPoint.recordLog({
                                        operateCode: "confirm_upload_click",
                                        certificateTypeValue: e.certificationInfo.certificateType,
                                        isReceipt: e.certificationInfo.isReceipt,
                                        photoInfoId: a.data.photoInfoId,
                                        mobile: e.userInfo.mobile,
                                        uploadStartTime: r,
                                        uploadEndTime: (0, u.default)().format("YYYY-MM-DD hh:mm:ss SSS")
                                    }), e.$buriedPoint.recordLog({
                                        operateCode: "enter_server",
                                        photoInfoId: a.data.photoInfoId
                                    }), e.$router.replace({
                                        path: "/packageB/pages/check/checkIng/Index",
                                        query: {
                                            photoInfoId: a.data.photoInfoId,
                                            certificationInfoId: e.$route.query.certificationInfoId,
                                            useCache: !0
                                        }
                                    }), e.$toast.clear(), n.next = 19;
                                    break;

                                  case 18:
                                    throw new Error("网络错误");

                                  case 19:
                                    n.next = 24;
                                    break;

                                  case 21:
                                    n.prev = 21, n.t0 = n.catch(3), e.$toast({
                                        message: "网络错误请稍后重试",
                                        selector: "#toast",
                                        position: "bottom"
                                    });

                                  case 24:
                                    return n.prev = 24, e.disabled = !1, n.finish(24);

                                  case 27:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, e, [ [ 3, 21, 24, 27 ] ]);
                        }))();
                    },
                    uploadOriginalImage: function(e) {
                        var n = this;
                        return o(i.default.mark(function r() {
                            return i.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.prev = 0, r.next = 3, t.uploadFile({
                                        url: h.default.baseURL + "/params/photoApi/uploadTempOrgPhoto",
                                        name: "orgImageFile",
                                        filePath: n.$utils.cache.getTempCache("originalImage"),
                                        header: {
                                            appid: n.$store.state.common.mid || "",
                                            thirdAppId: n.$store.state.common.weChatAppID || "",
                                            token: n.$store.state.auth.token,
                                            userId: n.$store.state.auth.userId,
                                            vid: n.$utils.cache.getLocalCache("vid") || ""
                                        },
                                        formData: {
                                            photoInfoId: e
                                        }
                                    });

                                  case 3:
                                    r.next = 8;
                                    break;

                                  case 5:
                                    r.prev = 5, r.t0 = r.catch(0);

                                  case 8:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, n, [ [ 0, 5 ] ]);
                        }))();
                    }
                }
            };
        }).call(this, n(13).default);
    },
    248: function(t, e, n) {
        n.r(e);
        var r = n(249), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    249: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "photoGuideInfo",
            props: {
                status: {
                    type: String,
                    default: "error"
                },
                modelStandardUrl: String,
                checkMessage: String
            }
        };
    },
    25: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "Tips"
        };
    },
    250: function(t, e, n) {},
    251: function(t, e, n) {
        n.r(e);
        var r = n(252), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    252: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(o, i) {
                        try {
                            var a = e[o](i), s = a.value;
                        } catch (o) {
                            return void n(o);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(t) {
                            r("next", t);
                        }, function(t) {
                            r("throw", t);
                        });
                        t(s);
                    }("next");
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(19)), a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
        }, s = r(n(103)), u = n(23), c = r(n(27));
        e.default = {
            name: "base-login",
            components: {
                toast: c.default
            },
            data: function() {
                return {
                    form: {
                        mobile: "",
                        auth_time: 0,
                        verifyCode: ""
                    }
                };
            },
            computed: a({}, (0, u.mapState)({
                userInfo: function(t) {
                    return t.auth.userInfo;
                }
            }), {
                buttonText: function() {
                    return "绑定手机";
                }
            }),
            methods: {
                handleInputMobile: function(t) {
                    this.form.mobile = t.detail;
                },
                handleInputVerifyCode: function(t) {
                    this.form.verifyCode = t.detail;
                },
                getVerifyCode: function() {
                    var t, e = this;
                    new s.default({
                        mobile: [ {
                            required: !0,
                            message: "手机号不能为空哦~"
                        }, {
                            pattern: /^1\d{10}$/,
                            message: "手机号格式不对哦~"
                        } ],
                        auth_time: [ {
                            validator: function(t, n, r) {
                                0 < n ? r("请等待" + e.form.auth_time + "秒后重新尝试") : r();
                            }
                        } ]
                    }).validate(this.form, (t = o(i.default.mark(function t(n) {
                        var r, o;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n) return e.$toast.fail({
                                    message: n[0].message,
                                    selector: "#toast"
                                }), t.abrupt("return");
                                t.next = 3;
                                break;

                              case 3:
                                t.prev = 3, r = e.$utils.cache.getTempCache("certificationInfo") || {}, e.$buriedPoint.recordLog({
                                    operateCode: "identifyingcode_button",
                                    certificateTypeValue: r.certificateType ? r.certificateType : "",
                                    mobile: e.form.mobile
                                });

                              case 6:
                                return t.prev = 6, t.next = 9, e.$apis.commonApis.sendVerifyCode({
                                    mobile: e.form.mobile,
                                    type: "BOUND_MOBILE"
                                });

                              case 9:
                                return e.form.auth_time = 60, o = setInterval(function() {
                                    e.form.auth_time--, e.form.auth_time <= 0 && clearInterval(o);
                                }, 1e3), t.finish(6);

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, e, [ [ 3, , 6, 12 ] ]);
                    })), function(e) {
                        return t.apply(this, arguments);
                    }));
                },
                submit: function() {
                    var t, e = this;
                    new s.default({
                        mobile: [ {
                            required: !0,
                            message: "手机号不能为空哦~"
                        }, {
                            type: "string",
                            pattern: /^1\d{10}$/,
                            message: "手机号格式不对哦~"
                        } ],
                        verifyCode: [ {
                            required: !0,
                            message: "请输入验证码~"
                        }, {
                            pattern: /^\d{4}$/,
                            message: "请输入有效的验证码~"
                        } ]
                    }).validate(this.form, (t = o(i.default.mark(function t(n) {
                        var r;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n) return e.$toast.fail({
                                    message: n[0].message,
                                    selector: "#toast"
                                }), t.abrupt("return");
                                t.next = 3;
                                break;

                              case 3:
                                return t.prev = 3, r = e.$utils.cache.getTempCache("certificationInfo") || {}, e.$buriedPoint.recordLog({
                                    operateCode: "binding_button",
                                    certificateTypeValue: r.certificateType ? r.certificateType : "",
                                    mobile: e.form.mobile
                                }), t.next = 8, e.$apis.commonApis.boundUserMobile({
                                    mobile: e.form.mobile,
                                    verifyCode: e.form.verifyCode
                                });

                              case 8:
                                e.$toast.success({
                                    message: "绑定成功",
                                    selector: "#toast"
                                }), e.$emit("close"), e.$store.commit("auth/changeUserInfo", Object.assign({}, e.userInfo, {
                                    mobile: e.form.mobile
                                }));

                              case 11:
                                return t.prev = 11, t.finish(11);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, e, [ [ 3, , 11, 13 ] ]);
                    })), function(e) {
                        return t.apply(this, arguments);
                    }));
                },
                close: function() {
                    this.$emit("close");
                }
            }
        };
    },
    253: function(t, e, n) {},
    254: function(t, e, n) {
        n.r(e);
        var r = n(255), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    255: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(o, i) {
                        try {
                            var a = e[o](i), s = a.value;
                        } catch (o) {
                            return void n(o);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(t) {
                            r("next", t);
                        }, function(t) {
                            r("throw", t);
                        });
                        t(s);
                    }("next");
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(19)), a = r(n(76));
        e.default = {
            name: "photo-step-guide",
            components: {
                Tips: a.default
            },
            props: {
                certificationInfo: Object,
                correctModelUrl: String
            },
            data: function() {
                return {
                    start: !1,
                    tips: [],
                    step: -1,
                    tipList: [ "正对阳光充足的窗户或者白色光源", "手机顶部与眼睛对齐，相距60cm", "眼睛直视手机顶部中间位置" ],
                    timer: null
                };
            },
            computed: {
                themeClass: function() {
                    return this.$store.state.common.theme ? "theme-711" : "base";
                }
            },
            mounted: function() {
                var t = this;
                return o(i.default.mark(function e() {
                    var n, r;
                    return i.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, t.$apis.photoApis.getSinglePhotoGuide({
                                certificationInfoId: t.$route.query.certificationInfoId
                            });

                          case 2:
                            n = e.sent, r = n.data, t.handleStartStepGuide(), t.tips = r.tipList;

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            methods: {
                handleStartStepGuide: function() {
                    this.start = !0, this.timer = setInterval(this.handleNextStep, 1e3);
                },
                handleTakePhoto: function() {
                    this.$emit("take-photo");
                },
                handleNextStep: function() {
                    2 <= ++this.step && clearInterval(this.timer);
                }
            },
            beforeDestroy: function() {
                clearInterval(this.timer);
            }
        };
    },
    256: function(t, e, n) {},
    257: function(t, e, n) {},
    26: function(t, e, n) {},
    27: function(t, e, n) {
        n.r(e);
        var r = n(15), o = n(1);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(35);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/toast/index.vue", e.default = s.exports;
    },
    28: function(e, n, r) {
        (function(e) {
            function o(e) {
                return "string" == typeof e && "" === e.trim() || ("object" != (void 0 === e ? "undefined" : t(e)) || !Array.isArray(e) || !e.length) && null == e;
            }
            function i(t, e) {
                return {
                    data: t,
                    exp: Number.isFinite(e) ? Date.now() + e : "Infinity"
                };
            }
            function a(t) {
                return o(t) ? null : t.hasOwnProperty("exp") && t.hasOwnProperty("data") ? t && "Infinity" !== t.exp && t.exp < Date.now() ? null : t.data : t;
            }
            function s() {
                this.clearExpireAll();
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var u = r(14), c = new Map(), f = new (s.prototype.setTempCache = function(t, e, n) {
                void 0 === n && (n = 1 / 0), o(e) ? c.delete(t) : c.set(t, i(e, n));
            }, s.prototype.getTempCache = function(t) {
                var e = a(c.get(t));
                return o(e) && c.delete(t), e;
            }, s.prototype.setLocalCache = function(t, n, r) {
                o(n) ? e.removeStorage({
                    key: t
                }) : e.setStorageSync(t, i(n, r));
            }, s.prototype.getLocalCache = function(t) {
                var n = a(e.getStorageSync(t));
                return o(n) && e.removeStorage({
                    key: t
                }), n;
            }, s.prototype.clearExpireAll = function() {
                return u.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return u.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return Date.now(), [ 4, e.getStorageInfo() ];

                          case 1:
                            return t = r.sent().keys, [ 4, Promise.all(t.map(function(t) {
                                return u.__awaiter(n, void 0, void 0, function() {
                                    return u.__generator(this, function(e) {
                                        return this.getLocalCache(t), [ 2 ];
                                    });
                                });
                            })) ];

                          case 2:
                            return r.sent(), [ 2 ];
                        }
                    });
                });
            }, s)();
            n.default = f;
        }).call(this, r(13).default);
    },
    29: function(t, e, n) {
        n.r(e);
        var r = n(16), o = n(3);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(30);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/icon/index.vue", e.default = s.exports;
    },
    3: function(t, e, n) {
        n.r(e);
        var r = n(4), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    30: function(t, e, n) {
        var r = n(5);
        n.n(r).a;
    },
    31: function(t, e, n) {
        n.r(e);
        var r = n(17), o = n(6);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(32);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/loading/index.vue", e.default = s.exports;
    },
    318: function(t, e, n) {
        n.r(e);
        var r = n(158), o = n(136);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(319);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/login-popup/login-popup.vue", e.default = s.exports;
    },
    319: function(t, e, n) {
        var r = n(138);
        n.n(r).a;
    },
    32: function(t, e, n) {
        var r = n(8);
        n.n(r).a;
    },
    33: function(t, e, n) {
        n.r(e);
        var r = n(18), o = n(9);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(34);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/overlay/index.vue", e.default = s.exports;
    },
    330: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: t.themeClass,
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!t.loading, 1) ? n("div", {
                attrs: {
                    h_: 1
                }
            }, [ t._ri(!t.isStepGuide, 2) ? n("div", {
                attrs: {
                    h_: 2
                }
            }, [ n("div", {
                attrs: {
                    h_: 3
                }
            }, [ n("image", {
                attrs: {
                    src: t.standardUrl,
                    h_: 4
                }
            }) ], 1), n("div", {
                attrs: {
                    h_: 6
                }
            }, [ n("h2", {
                attrs: {
                    h_: 7
                }
            }, []), n("ul", {
                attrs: {
                    h_: 10
                }
            }, t._l(t.tips, function(e, r, o) {
                var i = void 0 !== o ? o : r;
                return n("li", {
                    key: r,
                    attrs: {
                        h_: 11,
                        f_: i,
                        k_: "index"
                    }
                }, [ n("div", {
                    attrs: {
                        h_: 12,
                        f_: i
                    }
                }, [ n("image", {
                    attrs: {
                        src: e.iconUrl,
                        h_: 13,
                        f_: i
                    }
                }) ], 1), n("div", {
                    attrs: {
                        h_: 15,
                        f_: i
                    }
                }, [ n("b", {
                    attrs: {
                        h_: 16,
                        f_: i
                    }
                }, [ t._v(t._s(e.title), 17, i) ]), n("span", {
                    attrs: {
                        h_: 19,
                        f_: i
                    }
                }, [ t._v(t._s(e.subTitle), 20, i) ]) ]) ]);
            }, [ 11 ], t._self), 0) ]), n("div", {
                attrs: {
                    h_: 22
                }
            }, [ t._ri(!t.certificationInfo.isReceipt, 23) ? n("button", {
                style: {
                    opacity: t.disabled ? "0.5" : "1"
                },
                attrs: {
                    disabled: t.disabled,
                    h_: 23
                },
                on: {
                    getuserinfo: t.getUserInfo
                }
            }, []) : t._e(), n("button", {
                style: {
                    opacity: t.disabled ? "0.5" : "1"
                },
                attrs: {
                    disabled: t.disabled,
                    h_: 26
                },
                on: {
                    getuserinfo: t.getUserInfo
                }
            }, [ t._v("\n          " + t._s(t.certificationInfo.enableLivingCheck ? "开始" : "开始拍摄") + "\n        ", 27) ]) ]) ]) : n("photo-step-guide", {
                attrs: {
                    certificationInfo: t.certificationInfo,
                    correctModelUrl: t.correctModelUrl,
                    h_: 28,
                    c_: 0
                },
                on: {
                    "take-photo": t.shooting
                }
            }, [ n("button", {
                attrs: {
                    h_: "s30"
                },
                on: {
                    getuserinfo: t.getUserInfo
                }
            }, [ t._v("\n        " + t._s(t.certificationInfo.enableLivingCheck ? "开始" : "开始拍摄") + "\n      ", "s31") ]) ]), t._ri(!!t.showDialog, 33) ? n("login-dialog", {
                attrs: {
                    h_: 33,
                    c_: 1
                },
                on: {
                    close: function(e) {
                        t.showDialog = !1;
                    }
                }
            }) : t._e(), n("toast", {
                ref: "toast",
                attrs: {
                    h_: 36,
                    c_: 2
                }
            }), n("canvas", {
                style: {
                    width: t.canvas.width + "px",
                    height: t.canvas.height + "px"
                },
                attrs: {
                    h_: 39
                }
            }) ], 1) : t._e(), n("van-dialog", {
                attrs: {
                    h_: 41
                }
            }), n("van-action-sheet", {
                attrs: {
                    actions: t.actions,
                    show: t.showSelectMulti,
                    h_: 43
                },
                on: {
                    cancel: t.handleCancelMulti,
                    select: t.onMultiSelect
                }
            }), n("van-dialog", {
                attrs: {
                    show: t.showAgreeProtocol,
                    h_: 45
                },
                on: {
                    close: t.onProtocolClose,
                    confirm: t.onProtocolConfirm
                }
            }, [ n("view", {
                attrs: {
                    h_: 46
                }
            }, [ n("text", {
                attrs: {
                    h_: 48
                },
                on: {
                    click: t.handleUserServiceProtocol
                }
            }, []), n("text", {
                attrs: {
                    h_: 51
                },
                on: {
                    click: t.handleProtocol
                }
            }, []) ], 1) ], 1), n("van-dialog", {
                attrs: {
                    h_: 55
                },
                on: {
                    getuserinfo: t.__handleGlobalAuthDialogGetUserInfo
                }
            }) ], 1);
        }, o = [];
        r._withStripped = !0;
    },
    34: function(t, e, n) {
        var r = n(11);
        n.n(r).a;
    },
    35: function(t, e, n) {
        var r = n(12);
        n.n(r).a;
    },
    350: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
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
            }, [ n("header", {
                attrs: {
                    h_: 2
                }
            }, [ n("tips", {
                class: this.$store.state.common.theme ? ".p-tipss" : "p-tips-s",
                attrs: {
                    h_: 3,
                    c_: 0
                }
            }, [ t._ri(!!this.$store.state.common.theme, "s5") ? n("image", {
                attrs: {
                    h_: "s5",
                    i_: [ !!this.$store.state.common.theme, "s5", null ]
                }
            }) : n("image", {
                attrs: {
                    h_: "s6",
                    i_: [ !!this.$store.state.common.theme, "s5", null ]
                }
            }), n("span", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.certificationInfo.cityName || t.certificationInfo.name,
                    expression: "certificationInfo.cityName || certificationInfo.name"
                } ],
                attrs: {
                    h_: "s8"
                }
            }, [ t._v(t._s(t.certificationInfo.cityName + " - " + t.certificationInfo.name), "s9") ]) ], 1) ], 1), n("main", {
                attrs: {
                    h_: 11
                }
            }, [ t._ri(!!t.start, 12) ? n("div", {
                attrs: {
                    h_: 12
                }
            }, [ n("image", {
                attrs: {
                    h_: 13
                }
            }), n("div", {
                attrs: {
                    h_: 15
                }
            }, [ n("image", {
                attrs: {
                    h_: 16
                }
            }), n("div", {
                attrs: {
                    h_: 18
                }
            }) ], 1), t._ri(!!(1 <= t.step), 20) ? n("div", {
                attrs: {
                    h_: 20
                }
            }, [ n("image", {
                attrs: {
                    h_: 21
                }
            }), n("div", {
                attrs: {
                    h_: 23
                }
            }), n("div", {
                attrs: {
                    h_: 25
                }
            }) ], 1) : t._e(), t._ri(!!(2 <= t.step), 27) ? n("div", {
                attrs: {
                    h_: 27
                }
            }, [ n("image", {
                attrs: {
                    h_: 28
                }
            }), n("div", {
                attrs: {
                    h_: 30
                }
            }) ], 1) : t._e() ], 1) : t._e() ]), n("footer", {
                attrs: {
                    h_: 32
                }
            }, [ n("div", {
                attrs: {
                    h_: 33
                }
            }, [ n("h2", {
                attrs: {
                    h_: 34
                }
            }, []), n("ul", {
                attrs: {
                    h_: 37
                }
            }, t._l(t.tips, function(e, r, o) {
                var i = void 0 !== o ? o : r;
                return n("li", {
                    key: r,
                    attrs: {
                        h_: 38,
                        f_: i,
                        k_: "index"
                    }
                }, [ n("div", {
                    attrs: {
                        h_: 39,
                        f_: i
                    }
                }, [ n("image", {
                    attrs: {
                        src: e.iconUrl,
                        h_: 40,
                        f_: i
                    }
                }) ], 1), n("div", {
                    attrs: {
                        h_: 42,
                        f_: i
                    }
                }, [ n("b", {
                    attrs: {
                        h_: 43,
                        f_: i
                    }
                }, [ t._v(t._s(e.title), 44, i) ]), n("span", {
                    attrs: {
                        h_: 46,
                        f_: i
                    }
                }, [ t._v(t._s(e.subTitle), 47, i) ]) ]) ]);
            }, [ 38 ], t._self), 0) ]), n("div", {
                attrs: {
                    h_: 49
                }
            }, [ t._t("default", null, {
                h_: 50
            }) ], 1) ]) ]) ]);
        }, o = [];
        r._withStripped = !0;
    },
    351: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                attrs: {
                    h_: 0
                }
            }, [ n("div", {
                attrs: {
                    h_: 1
                }
            }), n("div", {
                attrs: {
                    h_: 3
                }
            }, [ n("div", {
                attrs: {
                    h_: 4
                },
                on: {
                    click: t.close
                }
            }, [ n("image", {
                attrs: {
                    h_: 5
                }
            }) ], 1), n("div", {
                attrs: {
                    h_: 7
                }
            }, []), n("van-field", {
                attrs: {
                    value: t.form.mobile,
                    h_: 10
                },
                on: {
                    input: t.handleInputMobile
                }
            }), n("van-field", {
                attrs: {
                    value: t.form.verifyCode,
                    h_: 12
                },
                on: {
                    input: t.handleInputVerifyCode
                }
            }, [ n("van-button", {
                attrs: {
                    slot: "button",
                    disabled: 0 < t.form.auth_time,
                    h_: 13
                },
                on: {
                    click: t.getVerifyCode
                },
                slot: "button"
            }, [ t._v("\n                " + t._s(t.form.auth_time ? t.form.auth_time + "秒后重试" : "获取验证码") + "\n            ", 14) ]) ], 1), n("div", {
                attrs: {
                    h_: 16
                }
            }, [ n("van-button", {
                attrs: {
                    h_: 17
                },
                on: {
                    click: t.submit
                }
            }, [ t._v("\n                " + t._s(t.buttonText) + "\n            ", 18) ]) ], 1) ], 1), n("toast", {
                ref: "toast",
                attrs: {
                    h_: 20,
                    c_: 0
                }
            }) ], 1);
        }, o = [];
        r._withStripped = !0;
    },
    352: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                attrs: {
                    h_: 0
                }
            }, [ n("div", {
                class: t.status,
                style: {
                    backgroundImage: "url(" + t.modelStandardUrl + ")"
                },
                attrs: {
                    h_: 1
                }
            }, [ n("image", {
                attrs: {
                    src: "success" === t.status ? "/static/images/icon_success.png" : "/static/images/icon_error.png",
                    h_: 2
                }
            }) ], 1), n("div", {
                attrs: {
                    h_: 4
                }
            }, [ n("text", {
                attrs: {
                    h_: 5
                }
            }, [ n("text", {
                attrs: {
                    h_: 6
                }
            }, [ t._v(t._s(t.checkMessage), 7) ]) ], 1) ], 1) ]);
        }, o = [];
        r._withStripped = !0;
    },
    36: function(t, e, n) {
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
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
        }, o = [];
        r._withStripped = !0;
    },
    37: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.APIs = void 0;
        var r = n(14), o = r.__importDefault(n(65)), i = r.__importDefault(n(95)), a = r.__importDefault(n(96)), s = r.__importDefault(n(97)), u = r.__importDefault(n(98)), c = r.__importDefault(n(99)), f = r.__importDefault(n(100)), l = r.__importDefault(n(101)), d = r.__importDefault(n(102)), p = r.__importDefault(n(74)), h = r.__importDefault(n(80)), m = new (e.APIs = function() {
            this.aliPayApis = new i.default(o.default), this.aliPayAppApis = new a.default(o.default), 
            this.cmbApis = new s.default(o.default), this.userApis = new u.default(o.default), 
            this.photoApis = new c.default(o.default), this.commonApis = new f.default(o.default), 
            this.orderApis = new l.default(o.default), this.weChatApis = new d.default(o.default), 
            this.weAppApis = new p.default(o.default), this.couponApis = new h.default(o.default);
        })();
        e.default = m;
    },
    38: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(14), o = r.__importDefault(n(22)), i = r.__importDefault(n(23)), a = r.__importDefault(n(94)), s = r.__importDefault(n(90));
        o.default.use(i.default);
        var u = new i.default.Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {
                auth: a.default,
                common: s.default
            }
        });
        e.default = u;
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
    49: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            parseJson: !0,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            baseURL: "https://m.parameters.cn",
            timeout: 3e4,
            withCredentials: !1
        };
    },
    5: function(t, e, n) {},
    570: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var o = r(n(571)), i = r(n(22));
        o.default.mpType = "page", new i.default(o.default).$mount();
    },
    571: function(t, e, n) {
        n.r(e);
        var r = n(330), o = n(246);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(578);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/pages/main/photoGuide/Index.vue", e.default = s.exports;
    },
    572: function(t, e, n) {
        n.r(e);
        var r = n(352), o = n(248);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(573);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/photoGuideInfo.vue", e.default = s.exports;
    },
    573: function(t, e, n) {
        var r = n(250);
        n.n(r).a;
    },
    574: function(t, e, n) {
        n.r(e);
        var r = n(351), o = n(251);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(575);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/login-dialog.vue", e.default = s.exports;
    },
    575: function(t, e, n) {
        var r = n(253);
        n.n(r).a;
    },
    576: function(t, e, n) {
        n.r(e);
        var r = n(350), o = n(254);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(577);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/photo-guide/photo-step-guide.vue", e.default = s.exports;
    },
    577: function(t, e, n) {
        var r = n(256);
        n.n(r).a;
    },
    578: function(t, e, n) {
        var r = n(257);
        n.n(r).a;
    },
    6: function(t, e, n) {
        n.r(e);
        var r = n(7), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    65: function(e, n, r) {
        (function(e) {
            function o() {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(t) {
                        switch (t.label) {
                          case 0:
                            u.default.loading({
                                duration: 0,
                                message: "登录已失效,正在重新登录",
                                forbidClick: !0,
                                selector: "#toast"
                            }), t.label = 1;

                          case 1:
                            return t.trys.push([ 1, 4, 5, 6 ]), [ 4, _.default.refreshAuthCode() ];

                          case 2:
                            return t.sent(), [ 4, function() {
                                return s.__awaiter(this, void 0, void 0, function() {
                                    var t, n;
                                    return s.__generator(this, function(r) {
                                        switch (r.label) {
                                          case 0:
                                            return [ 4, e.getSetting({}) ];

                                          case 1:
                                            return r.sent().authSetting["scope.userInfo"] ? [ 4, e.getUserInfo({
                                                withCredentials: !0
                                            }) ] : [ 3, 12 ];

                                          case 2:
                                            return t = r.sent(), [ 4, _.default.getFreshCode() ];

                                          case 3:
                                            if (!((n = r.sent()) && t.hasOwnProperty("encryptedData") && t.hasOwnProperty("iv") && t.hasOwnProperty("rawData") && t.hasOwnProperty("signature"))) return [ 3, 10 ];
                                            r.label = 4;

                                          case 4:
                                            return r.trys.push([ 4, 6, 7, 9 ]), [ 4, g.default.authUserInfo({
                                                code: n,
                                                encryptedData: t.encryptedData,
                                                iv: t.iv,
                                                rawData: t.rawData,
                                                signature: t.signature
                                            }) ];

                                          case 5:
                                          case 6:
                                            return r.sent(), [ 3, 9 ];

                                          case 7:
                                            return [ 4, _.default.refreshAuthCode() ];

                                          case 8:
                                            return r.sent(), [ 7 ];

                                          case 9:
                                            return [ 3, 11 ];

                                          case 10:
                                            throw new Error("缺少用户加密字段");

                                          case 11:
                                            return [ 3, 13 ];

                                          case 12:
                                            throw new Error("未开启用户授权");

                                          case 13:
                                            return [ 2 ];
                                        }
                                    });
                                });
                            }() ];

                          case 3:
                            return t.sent(), [ 3, 6 ];

                          case 4:
                            return t.sent(), m.default.alert({
                                title: "提示",
                                asyncClose: !0,
                                message: "使用服务需要您的授权，请点击下面授权按钮进行授权",
                                showCancelButton: !1,
                                confirmButtonText: "授权",
                                confirmButtonOpenType: "getUserInfo",
                                selector: "#getUserInfoDialog"
                            }), [ 3, 6 ];

                          case 5:
                            return u.default.clear(), [ 7 ];

                          case 6:
                            return [ 2 ];
                        }
                    });
                });
            }
            function i(t) {
                return a(t.data);
            }
            function a(t) {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            switch (t.code) {
                              case 200:
                                return [ 3, 1 ];

                              case 4023:
                              case 4004:
                                return [ 3, 2 ];
                            }
                            return [ 3, 4 ];

                          case 1:
                            return t.mid && t.mid !== l.default.state.common.mid && l.default.commit("common/changeMid", t.mid), 
                            [ 2, t ];

                          case 2:
                            return [ 4, o() ];

                          case 3:
                            return n.sent(), u.default.success("登录成功"), e.startPullDownRefresh(), [ 3, 5 ];

                          case 4:
                            u.default({
                                message: t.message,
                                duration: 2e3,
                                position: "bottom",
                                selector: "#toast"
                            }), n.label = 5;

                          case 5:
                            return [ 2, Promise.reject(t) ];
                        }
                    });
                });
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.responseIntercetor = n.responseMainIntercetor = void 0;
            var s = r(14), u = s.__importDefault(r(87)), c = s.__importDefault(r(88)), f = s.__importDefault(r(89)), l = s.__importDefault(r(38)), d = s.__importDefault(r(49)), p = s.__importDefault(r(73)), h = s.__importDefault(r(28)), m = s.__importDefault(r(83)), g = s.__importDefault(r(91)), _ = s.__importDefault(r(67)), v = new c.default(f.default(p.default));
            v.config = d.default, v.interceptors.request.use(function(e) {
                return s.__awaiter(void 0, void 0, void 0, function() {
                    return s.__generator(this, function(n) {
                        return d.default.headers.appid = l.default.state.common.mid || "", d.default.headers.thirdAppId = l.default.state.common.weChatAppID || "", 
                        d.default.headers.token = l.default.state.auth.token, d.default.headers.userId = l.default.state.auth.userId, 
                        d.default.headers.vid = h.default.getLocalCache("vid") || "", "object" == t(d.default.body) && Object.keys(d.default.body).forEach(function(t) {
                            void 0 !== d.default.body[t] && "undefined" !== d.default.body[t] || delete d.default.body[t];
                        }), Object.assign(e, d.default), "object" == t(d.default.body) && Object.keys(d.default.body).forEach(function(t) {
                            var e = d.default.body[t];
                            void 0 !== e && "" !== e && null !== e && "undefined" !== e || delete d.default.body[t];
                        }), [ 2, e ];
                    });
                });
            }), v.interceptors.response.use(function(t) {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(e) {
                        return d.default.headers.vid || (d.default.headers.vid = t.data.vid, h.default.setLocalCache("vid", t.data.vid, 1 / 0)), 
                        [ 2 ];
                    });
                });
            }, function(t) {
                return u.default({
                    message: "网络错误请稍后重试",
                    position: "bottom",
                    selector: "#toast"
                }), t;
            }), v.interceptors.response.use(i), n.default = v, n.responseMainIntercetor = i, 
            n.responseIntercetor = a;
        }).call(this, r(13).default);
    },
    67: function(t, e, n) {
        (function(t) {
            function r() {
                this.cache = i.default, this.getCompressUtil = s.getCompressUtil, this.systemInfo = null;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(14), i = o.__importDefault(n(28)), a = o.__importDefault(n(37)), s = n(93), u = n(20), c = o.__importDefault(n(84)), f = (r.prototype.getLocation = function() {
                return o.__awaiter(this, void 0, void 0, function() {
                    var e, n, r, s;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return (e = i.default.getLocalCache("location")) ? [ 2, e ] : [ 3, 1 ];

                          case 1:
                            return c.default.recordLog({
                                operateCode: "home_location_flame"
                            }), [ 4, t.getLocation() ];

                          case 2:
                            return n = o.sent(), [ 4, a.default.commonApis.getCity({
                                longitude: n.longitude,
                                latitude: n.latitude
                            }) ];

                          case 3:
                            return r = o.sent().data, s = {
                                longitude: n.longitude,
                                latitude: n.latitude,
                                city: r.city.name
                            }, i.default.setLocalCache("location", s, 72e5), [ 2, s ];
                        }
                    });
                });
            }, r.prototype.getAllCity = function() {
                return o.__awaiter(this, void 0, void 0, function() {
                    var t, e;
                    return o.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return (t = i.default.getLocalCache("allCity")) ? [ 2, t ] : [ 3, 1 ];

                          case 1:
                            return [ 4, a.default.commonApis.getCityList({
                                type: 2
                            }) ];

                          case 2:
                            return e = n.sent().data, i.default.setLocalCache("allCity", e, 1 / 0), [ 2, e ];
                        }
                    });
                });
            }, r.prototype.getCurrentPage = function() {
                return getCurrentPages().slice(-1).pop();
            }, r.prototype.getSource = function() {
                switch (t.getEnv()) {
                  case u.MEGALO_ENV.WECHAT:
                    return "WEIXIN_APP";

                  case u.MEGALO_ENV.ALIPAY:
                    return "ALI_APP";
                }
            }, r.prototype.getColorCodeByColorId = function(t) {
                switch (t) {
                  case "1":
                    return u.COLOR.RED;

                  case "2":
                    return u.COLOR.WHITE;

                  case "3":
                    return u.COLOR.BLUE;

                  default:
                    return "";
                }
            }, r.prototype.resizeOSSImage = function(e, n) {
                return this.systemInfo || (this.systemInfo = t.getSystemInfoSync()), e + "?x-oss-process=image/auto-orient,1/interlace,1/resize,m_lfit,w_" + Math.floor(n / 750 * this.systemInfo.windowWidth * this.systemInfo.pixelRatio);
            }, r.prototype.getFreshCode = function() {
                return o.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return o.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return n.trys.push([ 0, 2, , 4 ]), [ 4, t.checkSession() ];

                          case 1:
                            if (n.sent(), e = i.default.getTempCache("authCode")) return [ 2, e ];
                            throw new Error("缓存code不存在");

                          case 2:
                            return n.sent(), [ 4, this.refreshAuthCode() ];

                          case 3:
                            return [ 2, n.sent() ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, r.prototype.refreshAuthCode = function() {
                return o.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return o.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return [ 4, t.login() ];

                          case 1:
                            return e = n.sent().code, i.default.setTempCache("authCode", e), [ 2, e ];
                        }
                    });
                });
            }, r);
            e.default = new f();
        }).call(this, n(13).default);
    },
    68: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BEACON_KEY = e.WEAPP_ID = e.DEFAULT_MID = void 0, e.DEFAULT_MID = "cs044cea2fd12a4681", 
        e.WEAPP_ID = "wxc208a30b208e59ce", e.BEACON_KEY = "MA1AD2R83EFACK";
    },
    7: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o = (r = n(21)) && r.__esModule ? r : {
            default: r
        }, i = "#c9c9c9";
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
                    default: i
                }
            },
            computed: {
                colorType: function() {
                    var t = this.color;
                    return "white" === t || "black" === t ? t : "";
                },
                style: function() {
                    return {
                        color: "black" === this.color ? i : this.color,
                        width: this.size,
                        height: this.size
                    };
                }
            },
            methods: {
                b: (0, o.default)("van-loading")
            }
        };
    },
    73: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(14);
            e.default = function(e, n) {
                return r.__awaiter(void 0, void 0, void 0, function() {
                    var o;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4, t.request({
                                url: e.url,
                                data: e.body,
                                header: e.headers,
                                method: e.method,
                                dataType: e.dataType,
                                responseType: e.responseType
                            }) ];

                          case 1:
                            return o = r.sent(), n({
                                responseText: o.data,
                                statusCode: o.statusCode,
                                errMsg: o.errMsg,
                                headers: o.header
                            }), [ 2 ];
                        }
                    });
                });
            };
        }).call(this, n(13).default);
    },
    74: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.login = function(t, e) {
            return this.request.post("/params/user/weixinAppLogin", t, e);
        }, r.prototype.pay = function(t) {
            return this.request.post("/params/weiXinPayApi/weiXinPay", t);
        }, r.prototype.decryptWxUserInfo = function(t) {
            return this.request.post("/params/photoApi/decryptWxUserInfo", t);
        }, r);
        e.default = o;
    },
    76: function(t, e, n) {
        n.r(e);
        var r = n(36), o = n(24);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n(82);
        var a = n(0), s = Object(a.a)(o.default, r.a, r.b, !1, null, null, null);
        s.options.__file = "src/components/Tips.vue", e.default = s.exports;
    },
    8: function(t, e, n) {},
    80: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        var o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.GetCouponListParamsType = void 0, (o = e.GetCouponListParamsType || (e.GetCouponListParamsType = {}))[o.NORMAL = 1] = "NORMAL", 
        o[o.INVALID = 2] = "INVALID";
        var i = (r.prototype.getCouponList = function(t, e) {
            return this.request.post("/params/myCoupon/list", t, e);
        }, r.prototype.getOrderCoupon = function(t, e) {
            return this.request.post("/params/orderCoupon/list", t, e);
        }, r.prototype.getCouponExplain = function() {
            return this.request.get("/params/myCoupon/explain");
        }, r.prototype.exchange = function(t) {
            return this.request.post("/params/redeemCode/exchange", t);
        }, r.prototype.getRedeemCode = function(t) {
            return this.request.post("/params/redeemCode/get", t);
        }, r);
        e.default = i;
    },
    82: function(t, e, n) {
        var r = n(26);
        n.n(r).a;
    },
    83: function(t, e, n) {
        function r(t) {
            return t = Object.assign(Object.assign({}, r.currentOptions), t), new Promise(function(e, n) {
                var r, i = (t.context || (r = getCurrentPages())[r.length - 1]).selectComponent(t.selector);
                delete t.context, delete t.selector, i && (i.setData(Object.assign({
                    onCancel: n,
                    onConfirm: e
                }, t)), o.push(i));
            });
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = [];
        r.defaultOptions = {
            show: !0,
            title: "",
            width: null,
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: ""
        }, (r.alert = r).confirm = function(t) {
            return r(Object.assign({
                showCancelButton: !0
            }, t));
        }, r.close = function() {
            o.forEach(function(t) {
                t.close();
            }), o = [];
        }, r.stopLoading = function() {
            o.forEach(function(t) {
                t.stopLoading();
            });
        }, r.setDefaultOptions = function(t) {
            Object.assign(r.currentOptions, t);
        }, (r.resetDefaultOptions = function() {
            r.currentOptions = Object.assign({}, r.defaultOptions);
        })(), e.default = r;
    },
    84: function(t, e, n) {
        (function(t) {
            function r() {
                this.queue = [], this.isLoadedCache = !1, this.throttleUpload = c.throttle(5e3, this.upload);
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(14), i = o.__importDefault(n(37)), a = o.__importDefault(n(66)), s = o.__importDefault(n(28)), u = o.__importDefault(n(38)), c = n(161), f = n(68), l = n(162), d = (r.prototype.recordLog = function(t) {
                var e;
                return o.__awaiter(this, void 0, void 0, function() {
                    var n, r, i, c, d, p, h, m, g;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            this.isLoadedCache || (this.queue = s.default.getLocalCache("BURIED_POINT") || [], 
                            this.isLoadedCache = !0), o.label = 1;

                          case 1:
                            return o.trys.push([ 1, 3, , 4 ]), n = u.default.state.common.mid || s.default.getLocalCache("mid"), 
                            r = s.default.getLocalCache("vid"), i = u.default.state.auth.userId, c = u.default.state.auth.userInfo.mobile, 
                            [ 4, this.getSystemInfo() ];

                          case 2:
                            return d = o.sent(), p = d.system.split(" "), h = p[0], m = p[1], g = {
                                nanoid: l(8),
                                time: a.default().format("YYYY-MM-DD HH:mm:ss SSS"),
                                vid: r,
                                userId: i,
                                mobile: c,
                                os: h.toUpperCase(),
                                osVersion: m,
                                ver: "2.1",
                                channel: n,
                                location: null === (e = u.default.state.common.city) || void 0 === e ? void 0 : e.name,
                                locationDetails: this.getLocationDetails(),
                                appid: f.WEAPP_ID,
                                systemInfo: d
                            }, Object.assign(g, t), this.appendData(g), this.throttleUpload(), [ 3, 4 ];

                          case 3:
                            return o.sent(), [ 2 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, r.prototype.appendData = function(t) {
                this.queue.push(t), this.updateCache();
            }, r.prototype.upload = function() {
                return o.__awaiter(this, void 0, void 0, function() {
                    var t, e, n = this;
                    return o.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            r.label = 1;

                          case 1:
                            return r.trys.push([ 1, 3, , 4 ]), t = this.queue.map(function(t) {
                                return t.nanoid;
                            }), e = {
                                jsonArrData: JSON.stringify(this.queue)
                            }, [ 4, i.default.commonApis.recordLog(e, {
                                ignoreErrorToast: !0
                            }) ];

                          case 2:
                            return r.sent(), this.queue.forEach(function(e, r) {
                                t.includes(e.nanoid) && delete n.queue[r];
                            }), this.queue = this.queue.filter(function(t) {
                                return t;
                            }), this.updateCache(), [ 3, 4 ];

                          case 3:
                            return r.sent(), [ 2 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, r.prototype.updateCache = function() {
                var t = a.default().add(1, "date").hour(0).minute(0).second(0);
                s.default.setLocalCache("BURIED_POINT", this.queue, t.unix());
            }, r.prototype.getLocationDetails = function() {
                var t, e = null !== (t = s.default.getTempCache("LOCATION")) && void 0 !== t ? t : null;
                return e ? {
                    horizontalAccuracy: e.horizontalAccuracy,
                    accuracy: e.accuracy,
                    altitude: e.altitude,
                    latitude: e.latitude,
                    longitude: e.longitude
                } : null;
            }, r.prototype.getSystemInfo = function() {
                return o.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return o.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return [ 4, t.getSystemInfo() ];

                          case 1:
                            return [ 2, {
                                brand: (e = n.sent()).brand,
                                model: e.model,
                                pixelRatio: e.pixelRatio,
                                windowWidth: e.windowWidth,
                                windowHeight: e.windowHeight,
                                screenWidth: e.screenWidth,
                                screenHeight: e.screenHeight,
                                statusBarHeight: e.statusBarHeight,
                                language: e.language,
                                system: e.system,
                                version: e.version,
                                albumAuthorized: e.albumAuthorized,
                                notificationAuthorized: e.notificationAuthorized,
                                notificationAlertAuthorized: e.notificationAlertAuthorized,
                                notificationBadgeAuthorized: e.notificationBadgeAuthorized,
                                notificationSoundAuthorized: e.notificationSoundAuthorized,
                                cameraAuthorized: e.cameraAuthorized,
                                locationAuthorized: e.locationAuthorized,
                                microphoneAuthorized: e.microphoneAuthorized,
                                locationEnabled: e.locationEnabled,
                                wifiEnabled: e.wifiEnabled,
                                SDKVersion: e.SDKVersion
                            } ];
                        }
                    });
                });
            }, r);
            e.default = new d();
        }).call(this, n(13).default);
    },
    87: function(t, e, n) {
        function r(t) {
            var e = Object.assign({}, a, t);
            "string" == typeof t && (e = Object.assign(e, {
                message: t
            })), r.show(e);
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, i = (o = n(67)) && o.__esModule ? o : {
            default: o
        }, a = {
            show: !0,
            message: "",
            duration: 2e3,
            position: "bottom",
            type: "text",
            mask: !1,
            forbidClick: !1
        };
        r.show = function(t) {
            var e, n = i.default.getCurrentPage().rootVM, r = "string" == typeof t ? {
                options: t
            } : t;
            !n || (e = n.$refs.toast) && e.setOptions(Object.assign({}, a, r));
        }, [ "success", "fail", "loading" ].forEach(function(t) {
            r[t] = function(e) {
                "string" == typeof e ? r.call(r, {
                    message: e,
                    type: t,
                    position: "middle"
                }) : r.call(r, Object.assign({
                    position: "middle"
                }, e, {
                    type: t
                }));
            };
        }), r.clear = function() {
            r.show({
                show: !1
            });
        }, e.default = r;
    },
    9: function(t, e, n) {
        n.r(e);
        var r = n(10), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    90: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(14), o = r.__importDefault(n(28)), i = r.__importDefault(n(37)), a = n(68), s = n(20), u = r.__importDefault(n(38));
        e.default = new function() {
            this.namespaced = !0, this.state = {
                theme: "",
                city: o.default.getLocalCache("city") || {},
                tempCity: o.default.getTempCache("city") || {},
                tempPayment: o.default.getTempCache("tempPayment") || {},
                cityList: [],
                mid: o.default.getLocalCache("mid") || a.DEFAULT_MID,
                weChatAppID: "",
                beaconKey: o.default.getTempCache("beaconKey") || a.BEACON_KEY,
                sendEmail: {
                    show: !1,
                    value: "",
                    orderNum: ""
                },
                downloadPreview: {
                    show: !1,
                    images: [ "" ]
                },
                configDialog: {
                    show: !1,
                    data: {}
                }
            }, this.mutations = {
                init: function(t) {
                    Object.assign(t, {
                        city: {},
                        tempCity: {},
                        tempPayment: {},
                        cityList: [],
                        sendEmail: {
                            show: !1,
                            value: "",
                            orderNum: ""
                        },
                        downloadPreview: {
                            show: !1,
                            images: [ "" ]
                        }
                    });
                },
                changeMid: function(t, e) {
                    t.mid = e, o.default.setLocalCache("mid", e, 2592e6);
                },
                changeWeChatAppID: function(t, e) {
                    t.weChatAppID = e, o.default.setTempCache("weChatAppID", e);
                },
                changeBeaconKey: function(t, e) {
                    t.beaconKey = e, o.default.setTempCache("beaconKey", e);
                },
                sendEmail: function(t, e) {
                    t.sendEmail = e;
                },
                downloadPreview: function(t, e) {
                    t.downloadPreview = e;
                },
                changeCity: function(t, e) {
                    t.city = e, o.default.setLocalCache("city", e, 1 / 0);
                },
                changeTempCity: function(t, e) {
                    t.tempCity = e, o.default.setTempCache("city", e, 1 / 0);
                },
                changeShowLoginAlert: function(t, e) {
                    t.city = e;
                },
                changeTempPayment: function(t, e) {
                    t.tempPayment = e, o.default.setTempCache("tempPayment", e);
                },
                changeCityList: function(t, e) {
                    t.cityList = e, o.default.setLocalCache("cityList", e, 1 / 0);
                },
                theme: function(t, e) {
                    t.theme = e;
                },
                showConfigDialog: function(t, e) {
                    t.configDialog.data = e, t.configDialog.show = !0;
                },
                hideConfigDialog: function(t, e) {
                    t.configDialog.show = !1;
                }
            }, this.actions = {
                getAllCityList: function(t) {
                    var e = t.commit, n = t.state;
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                              case 0:
                                return n.cityList.length ? [ 2, n.cityList ] : [ 4, i.default.commonApis.getCityList() ];

                              case 1:
                                return t = r.sent().data, e("changeCityList", t), [ 2, t ];
                            }
                        });
                    });
                },
                triggerConfigDialog: function(t, e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var n;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                              case 0:
                                return [ 4, i.default.commonApis.dialogConfig(r.__assign(r.__assign({}, e), {
                                    loginType: s.LOGIN_TYPE.WINXIN_APP,
                                    cityId: u.default.state.common.city.cityId || -1,
                                    isVisited: o.default.getTempCache("isVisited_" + e.type) ? 1 : 0
                                })) ];

                              case 1:
                                return n = a.sent().data, o.default.setTempCache("isVisited_" + e.type, "1", 1 / 0), 
                                n && t.commit("showConfigDialog", n), [ 2 ];
                            }
                        });
                    });
                }
            };
        }();
    },
    91: function(t, e, n) {
        function r() {}
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(14), i = o.__importDefault(n(73)), a = o.__importDefault(n(88)), s = o.__importDefault(n(89)), u = o.__importDefault(n(74)), c = o.__importDefault(n(37)), f = o.__importDefault(n(49)), l = o.__importDefault(n(38)), d = o.__importStar(n(65)), p = (r.prototype.login = function(t, e) {
            return void 0 === e && (e = {}), o.__awaiter(this, void 0, void 0, function() {
                var n, r, c;
                return o.__generator(this, function(o) {
                    return (n = new a.default(s.default(i.default))).interceptors.response.use(d.responseMainIntercetor), 
                    r = new u.default(n), c = Object.assign(e, f.default), [ 2, r.login(t, c) ];
                });
            });
        }, r.prototype.authUserInfo = function(t) {
            return o.__awaiter(this, void 0, void 0, function() {
                var e;
                return o.__generator(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([ 0, 4, , 5 ]), [ 4, this.login({
                            code: t.code,
                            encryptedData: t.encryptedData,
                            iv: t.iv,
                            rawData: t.rawData,
                            signature: t.signature,
                            source: "WEIXIN_APP"
                        }) ];

                      case 1:
                        return e = n.sent().data, l.default.commit("auth/login", e), d.default.unlock(), 
                        [ 4, c.default.commonApis.voucher() ];

                      case 2:
                        return n.sent(), [ 4, Promise.all([ l.default.dispatch("common/triggerConfigDialog", {
                            type: "POPUP_COUPON"
                        }), l.default.dispatch("common/triggerConfigDialog", {
                            type: "POPUP_LOGIN"
                        }) ]) ];

                      case 3:
                      case 4:
                        return n.sent(), [ 3, 5 ];

                      case 5:
                        return [ 2 ];
                    }
                });
            });
        }, r);
        e.default = new p();
    },
    93: function(t, e, n) {
        (function(t) {
            function r(t, e, n) {
                this.canvasId = "", this.opt = {
                    maxWidth: 1400,
                    maxFileSize: 1024,
                    quality: .99999,
                    timeout: 2e3,
                    changeCanvasRectWaitTime: 200,
                    drawCallBackWaitTime: 200
                }, this.canvasId = t, this.ctx = wx.createCanvasContext(this.canvasId), this.changeCanvasOption = e, 
                n && (this.opt = n);
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getCompressUtil = void 0;
            var o = n(14);
            e.getCompressUtil = function(t) {
                return new i(t.canvasId, t.changeCanvasOption, t.opt);
            };
            var i = (r.prototype.compress = function(t, e) {
                var n = this;
                return new Promise(function(r, i) {
                    return o.__awaiter(n, void 0, void 0, function() {
                        var n, a, s, u;
                        return o.__generator(this, function(o) {
                            switch (o.label) {
                              case 0:
                                return setTimeout(function() {
                                    i("压缩超时");
                                }, this.opt.timeout), e && (this.opt = e), n = t.path, this.log("原图文件大小: " + t.size / 1024 + "kb"), 
                                t.size < 1024 * this.opt.maxFileSize ? (this.log("未经压缩图片文件大小已通过"), r(t.path), [ 2 ]) : [ 4, this.computedSize(n, this.opt.maxWidth) ];

                              case 1:
                                return a = o.sent(), [ 4, this.compressSize(n, a) ];

                              case 2:
                                return s = o.sent(), u = s, [ 4, this.checkCompress(u) ];

                              case 3:
                                return o.sent() ? (r(u), [ 2 ]) : [ 4, this.compressQuality(this.opt.quality, a) ];

                              case 4:
                                return u = o.sent(), [ 4, this.checkCompress(u) ];

                              case 5:
                                return o.sent() ? r(u) : i(), [ 2 ];
                            }
                        });
                    });
                });
            }, r.prototype.computedSize = function(e, n) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var r, i, a, s;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return [ 4, t.getImageInfo({
                                src: e
                            }) ];

                          case 1:
                            return r = o.sent(), i = r.width / r.height, a = r.width, s = r.height, n && r.width > n && (this.log("压缩宽度" + r.width + " => " + n), 
                            s = (a = n) / i), [ 2, {
                                width: a,
                                height: s
                            } ];
                        }
                    });
                });
            }, r.prototype.compressSize = function(e, n) {
                var r = this;
                return new Promise(function(i, a) {
                    return o.__awaiter(r, void 0, void 0, function() {
                        var r, a = this;
                        return o.__generator(this, function(s) {
                            switch (s.label) {
                              case 0:
                                return r = Date.now(), [ 4, this.changeCanvasOption({
                                    width: n.width,
                                    height: n.height
                                }) ];

                              case 1:
                                return s.sent(), this.log("开始canvas更新" + this.opt.changeCanvasRectWaitTime + "ms"), 
                                [ 4, this.waitTime(this.opt.changeCanvasRectWaitTime) ];

                              case 2:
                                return s.sent(), this.ctx.drawImage(e, 0, 0, n.width, n.height), this.ctx.draw(!1, function() {
                                    return o.__awaiter(a, void 0, void 0, function() {
                                        var e;
                                        return o.__generator(this, function(o) {
                                            switch (o.label) {
                                              case 0:
                                                return this.log("开始等待绘制" + this.opt.drawCallBackWaitTime + "ms"), [ 4, this.waitTime(this.opt.drawCallBackWaitTime) ];

                                              case 1:
                                                return o.sent(), this.log("开始压缩宽度"), [ 4, t.canvasToTempFilePath({
                                                    x: 0,
                                                    y: 0,
                                                    width: n.width,
                                                    height: n.height,
                                                    destWidth: n.width,
                                                    destHeight: n.height,
                                                    canvasId: this.canvasId,
                                                    fileType: "jpg",
                                                    quality: 1
                                                }) ];

                                              case 2:
                                                return e = o.sent(), this.log("压缩宽度耗时:" + (Date.now() - r) + "ms"), i(e.tempFilePath), 
                                                [ 2 ];
                                            }
                                        });
                                    });
                                }), [ 2 ];
                            }
                        });
                    });
                });
            }, r.prototype.compressQuality = function(e, n) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var r, i;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return r = Date.now(), this.log("开始压缩质量"), [ 4, t.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: n.width,
                                height: n.height,
                                destWidth: n.width,
                                destHeight: n.height,
                                canvasId: "canvas",
                                fileType: "jpg",
                                quality: e
                            }) ];

                          case 1:
                            return i = o.sent(), this.log("压缩质量:" + e + ", 耗时:" + (Date.now() - r) + "ms"), 
                            [ 2, i.tempFilePath ];
                        }
                    });
                });
            }, r.prototype.checkCompress = function(e) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var n, r;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return [ 4, t.getFileInfo({
                                filePath: e
                            }) ];

                          case 1:
                            return n = o.sent(), r = n.size / 1024, this.log("压缩后文件大小:" + r + "kb"), r <= this.opt.maxFileSize ? (this.log("压缩通过标准"), 
                            [ 2, !0 ]) : [ 2 ];
                        }
                    });
                });
            }, r.prototype.waitTime = function(t) {
                return new Promise(function(e) {
                    setTimeout(e, t);
                });
            }, r.prototype.log = function(t) {}, r);
        }).call(this, n(13).default);
    },
    94: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(14).__importDefault(n(28));
        e.default = new function() {
            this.namespaced = !0, this.state = {
                showLoginAlert: !1,
                openId: r.default.getLocalCache("openId") || "",
                userId: r.default.getLocalCache("userId") || "",
                token: r.default.getLocalCache("token") || "",
                unionId: r.default.getLocalCache("unionId") || "",
                userInfo: r.default.getLocalCache("userInfo") || {},
                isNeedInfo: r.default.getLocalCache("isNeedInfo") || ""
            }, this.mutations = {
                init: function(t) {
                    Object.assign(t, {
                        showLoginAlert: !1,
                        openId: "",
                        userId: "",
                        unionId: "",
                        token: "",
                        userInfo: {}
                    });
                },
                login: function(t, e) {
                    try {
                        t.userId = e.userId, t.openId = e.openId, t.token = e.token, t.userInfo = e.userInfo, 
                        t.unionId = e.unionId, r.default.setLocalCache("userId", e.userId, 1 / 0), r.default.setLocalCache("token", e.token, 1 / 0), 
                        r.default.setLocalCache("openId", e.openId, 1 / 0), r.default.setLocalCache("userInfo", e.userInfo, 1 / 0), 
                        r.default.setLocalCache("isNeedInfo", e.isNeedInfo, 1 / 0), r.default.setLocalCache("unionId", e.unionId, 1 / 0);
                    } catch (t) {}
                },
                logout: function(t, e) {
                    t.userId = "", t.openId = "", t.token = "", t.unionId = "", t.userInfo = {
                        nickName: "",
                        mobile: ""
                    }, r.default.setLocalCache("userId", null, 1 / 0), r.default.setLocalCache("token", null, 1 / 0), 
                    r.default.setLocalCache("userInfo", null, 1 / 0);
                },
                changeUserInfo: function(t, e) {
                    t.userInfo = e, r.default.setLocalCache("userInfo", e, 1 / 0);
                },
                changeIsNeedInfo: function(t, e) {
                    t.isNeedInfo = e, r.default.setLocalCache("isNeedInfo", e, 1 / 0);
                },
                changeShowLoginAlert: function(t, e) {
                    t.showLoginAlert = e;
                }
            };
        }();
    },
    95: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.login = function(t) {
            return this.request.post("/params/user/aliLogin", t);
        }, r.prototype.pay = function(t) {
            return this.request.post("/params/aliPay/aliH5Pay", t);
        }, r);
        e.default = o;
    },
    96: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.login = function(t, e) {
            return this.request.post("/params/user/aliAppLogin", t, e);
        }, r);
        e.default = o;
    },
    97: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.login = function(t) {
            return this.request.get(Object({
                M_ID: "cs044cea2fd12a4681",
                BEACON_KEY: "MA1AD2R83EFACK",
                WEAPP_ID: "wxc208a30b208e59ce"
            }).VUE_APP_CMB_API + "/cmbApi/cmbUserLogin", t);
        }, r.prototype.getLoginUrl = function(t) {
            return this.request.get(Object({
                M_ID: "cs044cea2fd12a4681",
                BEACON_KEY: "MA1AD2R83EFACK",
                WEAPP_ID: "wxc208a30b208e59ce"
            }).VUE_APP_CMB_API + "/cmbApi/getCmbLoginUrl", t);
        }, r.prototype.pay = function(t) {
            return this.request.post("/params/cmbPayApi/cmbAppPay", t);
        }, r);
        e.default = o;
    },
    98: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        var o, i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (i = o = o || {})[i.MALE = 0] = "MALE", i[i.FEMALE = 1] = "FEMALE";
        var a = (r.prototype.getUserInfo = function(t) {
            return this.request.get("/photoApi/getIndexPhotoType", {
                userId: t
            });
        }, r);
        e.default = a;
    },
    99: function(t, e, n) {
        function r(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = (r.prototype.getPhotoRecord = function(t) {
            return this.request.get("/params/photoApi/getIndexPhotoRecord", t);
        }, r.prototype.getViewPhotoRecord = function() {
            return this.request.get("/params/photoApi/getViewPhotoRecord");
        }, r.prototype.useCheckFailPhoto = function(t) {
            return this.request.post("/params/photoApi/useCheckFailPhoto", t);
        }, r.prototype.getPhotoInfo = function(t) {
            return this.request.get("/params/photoApi/getPhotoInfo", t);
        }, r.prototype.getPhotoPriceInfo = function(t) {
            return this.request.get("/params/photoApi/getPhotoPriceInfo", t);
        }, r.prototype.getPhotoTips = function(t) {
            return this.request.post("/params/photoApi/getPhotoTips ", t);
        }, r.prototype.photoPriceDetail = function(t) {
            return this.request.get("/params/photoOrder/photoPriceDetail", t);
        }, r.prototype.bindPhotoOrder = function(t) {
            return this.request.post("/params/photoApi/bindPhotoOrder", t);
        }, r.prototype.getPhotoGuide = function(t) {
            return this.request.post("/params/photoApi/getPhotoGuide", t);
        }, r.prototype.getPhotoErrorInfo = function(t) {
            return this.request.post("/params/photoApi/getPhotoErrorInfo", t);
        }, r.prototype.fillColorTask = function(t) {
            return this.request.post("/params/photoApi/fillColorTask", t);
        }, r.prototype.getSinglePhotoGuide = function(t) {
            return this.request.get("/params/photoApi/getSinglePhotoGuide", t);
        }, r.prototype.getGoodsInfoDetail = function(t) {
            return this.request.get("/params/photoOrder/goodsInfoDetail", t);
        }, r.prototype.calculatePrice = function(t) {
            return this.request.get("/params/photoOrder/calculatePrice", t);
        }, r.prototype.getGoodsStands = function(t) {
            return this.request.get("/params/photoOrder/goodsStands", t);
        }, r.prototype.getRePhotoLivingToken = function(t) {
            return this.request.get("/params/photoApi/getRePhotoLivingToken", t);
        }, r);
        e.default = o;
    }
}, [ [ 570, "runtime", "vendor" ] ] ]);
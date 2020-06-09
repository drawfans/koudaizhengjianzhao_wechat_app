var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/camera/Index" ], {
    1: function(t, e, o) {
        o.r(e);
        var n = o(2), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    10: function(t, e, o) {
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
    100: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.getCertificationInfo = function(t) {
            return this.request.get("/params/photoApi/getPhotoTypeById", t);
        }, n.prototype.getConfig = function(t) {
            return this.request.get("/params/photoApi/getIndexConfig", t);
        }, n.prototype.voucher = function(t) {
            return this.request.get("/params/coupon/voucher", t);
        }, n.prototype.getPhotoType = function(t) {
            return this.request.get("/params/photoApi/getIndexPhotoType", t);
        }, n.prototype.uploadImage = function(t) {
            return this.request.post("/params/photoApi/uploadImgFile", t);
        }, n.prototype.sendSMS = function(t) {
            return this.request.get("/params/photoApi/sendSms", t);
        }, n.prototype.sendEmail = function(t) {
            return this.request.get("/params/photoApi/sendEmail", t);
        }, n.prototype.sendVerifyCode = function(t) {
            return this.request.get("/params/photoApi/sendVerifyCode", t);
        }, n.prototype.configInfos = function(t) {
            return this.request.get("/params/pageCustomize/configInfo", t);
        }, n.prototype.boundUserMobile = function(t) {
            return this.request.post("/params/photoApi/boundUserMobile", t);
        }, n.prototype.mobileLogin = function(t) {
            return this.request.post("/params/photoApi/mobileLoginByVCode", t);
        }, n.prototype.getCityList = function(t) {
            return this.request.get("/params/photoApi/listCitys", t);
        }, n.prototype.getHistorySearch = function(t) {
            return this.request.get("/params/photoApi/getHistorySearch", t);
        }, n.prototype.getMerchantPayWayDetail = function(t) {
            return this.request.get("/params/photoApi/merchantPayWayDetail", t);
        }, n.prototype.recordLog = function(t, e) {
            return this.request.post("/params/photoApi/uploadOperateLog", t);
        }, n.prototype.getMerchantInfo = function(t) {
            return this.request.get("/params/photoApi/getMerchantInfo", t);
        }, n.prototype.getCity = function(t) {
            return this.request.get("/params/photoApi/getCityByLocation", t);
        }, n.prototype.getPageConfig = function(t) {
            return this.request.get("/params/photoApi/getPageConfig", t);
        }, n.prototype.getCustomServiceInfo = function(t) {
            return this.request.get("/params/photoApi/getCustomServiceInfo ", t);
        }, n.prototype.personalCenter = function() {
            return this.request.get("/params/photoApi/personalCenter");
        }, n.prototype.getPaySuccessView = function(t) {
            return this.request.get("/params/photoOrder/getPaySuccessView", t);
        }, n.prototype.orderAssistance = function(t) {
            return this.request.post("/params/photoOrder/orderAssistance", t);
        }, n.prototype.configInfo = function(t) {
            return this.request.post("/params/pageCustomize/configInfo", t);
        }, n.prototype.bulletin = function(t) {
            return this.request.post("/params/pageCustomize/bulletin", t);
        }, n.prototype.getCompressConfig = function(t) {
            return this.request.get("/params/photoApi/getCompressConfig", t);
        }, n.prototype.removePhotoRecord = function(t) {
            return this.request.get("/params/photoApi/removePhotoRecord", t);
        }, n.prototype.getCityByLocation = function(t) {
            return this.request.get("/params/photoApi/getCityByLocation", t);
        }, n.prototype.dialogConfig = function(t) {
            return this.request.get("/params/pageCustomize/popup", t);
        }, n);
        e.default = r;
    },
    101: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.createOrder = function(t) {
            return this.request.post("/params/photoApi/createOrder", t);
        }, n.prototype.getUpgradePaperGoodsStands = function(t) {
            return this.request.get("/params/photoOrder/getUpgradePaperGoodsStands", t);
        }, n.prototype.getOrderList = function(t) {
            return this.request.get("/params/photoApi/getOrderList", t);
        }, n.prototype.getOrderDetail = function(t) {
            return this.request.get("/params/photoApi/getOrderDetail", t);
        }, n.prototype.upgradePaperInfo = function(t) {
            return this.request.get("/params/photoOrder/upgradePaperInfo", t);
        }, n.prototype.upgradePaper = function(t) {
            return this.request.post("/params/photoOrder/upgradePaper", t);
        }, n.prototype.toUpgradePaper = function(t) {
            return this.request.get("/params/photoOrder/toUpgradePaper", t);
        }, n.prototype.getRefundInfo = function(t) {
            return this.request.get("/params/photoOrder/getRefundInfo", t);
        }, n.prototype.getRefundDetail = function(t) {
            return this.request.get("/params/photoOrder/getRefundDetail", t);
        }, n.prototype.scanning = function(t) {
            return this.request.post("/params/selfPrint/scanning", t);
        }, n.prototype.getPrintDetail = function(t) {
            return this.request.get("/params/selfPrint/getPrintDetail", t);
        }, n.prototype.applyRefund = function(t) {
            return this.request.post("/params/photoOrder/applyRefund", t);
        }, n);
        e.default = r;
    },
    102: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(t) {
            return this.request.post("/params/user/weixinH5Login", t);
        }, n.prototype.pay = function(t) {
            return this.request.post("/params/weiXinPayApi/weiXinPay", t);
        }, n.prototype.saveFormId = function(t) {
            return this.request.post("/params/photoApi/saveAppFormId", t);
        }, n.prototype.updateUser = function(t) {
            return this.request.post("/params/user/updateUser", t);
        }, n);
        e.default = r;
    },
    11: function(t, e, o) {},
    12: function(t, e, o) {},
    15: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.currentOptions.show,
                    expression: "currentOptions.show"
                } ],
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!(!t.currentOptions.mask && !t.currentOptions.forbidClick), 1) ? o("par-overlay", {
                attrs: {
                    color: t.currentOptions.forbidClick ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)",
                    h_: 1,
                    c_: 0
                }
            }, [ o("div", {
                attrs: {
                    h_: "s3"
                }
            }) ]) : t._e(), o("div", {
                class: t.b([ t.style, t.currentOptions.position ]),
                attrs: {
                    h_: 5
                }
            }, [ t._ri(!("text" !== t.style), 6) ? o("div", {
                attrs: {
                    h_: 6
                },
                domProps: {
                    textContent: t._s(t.currentOptions.message)
                }
            }) : t._e(), t._ri(!("html" !== t.style), 8) ? o("div", {
                attrs: {
                    h_: 8
                },
                domProps: {
                    innerHTML: t._s(t.currentOptions.message)
                }
            }) : t._e(), t._ri(!("default" !== t.style), 10) ? [ t._ri(!("loading" !== t.currentOptions.type), 11) ? o("van-loading", {
                attrs: {
                    color: "white",
                    type: t.currentOptions.loadingType,
                    h_: 11,
                    c_: 1
                }
            }) : o("van-icon", {
                class: t.b("icon"),
                attrs: {
                    name: t.currentOptions.type,
                    h_: 13,
                    c_: 2
                }
            }), t._ri(!!t.isDef(t.currentOptions.message), 16) ? o("div", {
                class: t.b("text"),
                attrs: {
                    h_: 16
                },
                domProps: {
                    textContent: t._s(t.currentOptions.message)
                }
            }) : t._e() ] : t._e() ], 1) ], 1);
        }, r = [];
        n._withStripped = !0;
    },
    16: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("i", {
                class: t.classs,
                style: t.style,
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!!t.isSrc, 1) ? o("img", {
                attrs: {
                    src: t.name,
                    h_: 1
                }
            }) : t._e() ]);
        }, r = [];
        n._withStripped = !0;
    },
    17: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                class: t.b([ t.type, t.colorType ]),
                style: t.style,
                attrs: {
                    h_: 0
                }
            }, [ o("span", {
                class: t.b("spinner", t.type),
                attrs: {
                    h_: 1
                }
            }, [ t._l("spinner" === t.type ? 12 : 0, function(t, e, n) {
                return o("i", {
                    key: e,
                    attrs: {
                        h_: 2,
                        f_: void 0 !== n ? n : e,
                        k_: "index"
                    }
                });
            }, [ 2 ], t._self), t._ri(!("circular" !== t.type), 4) ? o("view", {
                class: t.b("circular"),
                attrs: {
                    h_: 4
                }
            }) : t._e() ], 1) ]);
        }, r = [];
        n._withStripped = !0;
    },
    18: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
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
        n._withStripped = !0;
    },
    2: function(t, e, o) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(o(29)), i = n(o(31)), a = n(o(33)), s = n(o(21)), u = [ "success", "fail", "loading" ];
        e.default = {
            name: "toast",
            components: {
                "par-overlay": a.default,
                "van-icon": r.default,
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
    20: function(t, e, o) {
        var n, r, i, a, s, u, c, p, f;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LOGIN_TYPE = e.LOGISTIC_STATUS = e.CouponStatus = e.CouponPreferential = e.COLOR = e.OrderType = e.OrderState = e.PhotoState = e.MEGALO_ENV = void 0, 
        (n = e.MEGALO_ENV || (e.MEGALO_ENV = {})).WECHAT = "wechat", n.SWAN = "swan", n.ALIPAY = "alipay", 
        n.TT = "tt", n.WEB = "web", (r = e.PhotoState || (e.PhotoState = {})).NEW = "NEW", 
        r.CHECKING = "CHECKING", r.CHECK_OK = "CHECK_OK", r.CHECK_FAIL = "CHECK_FAIL", r.CHECK_ABNORMAL = "CHECK_ABNORMAL", 
        r.DEALING = "DEALING", r.DEAL_OK = "DEAL_OK", r.DEAL_FAIL = "DEAL_FAIL", r.COMFIRM_FT_PAY_FAIL = "COMFIRM_FT_PAY_FAIL", 
        r.DEAL_RECEIPT_ING = "DEAL_RECEIPT_ING", r.DEAL_RECEIPT_OK = "DEAL_RECEIPT_OK", 
        r.DEAL_RECEIPT_FAIL = "DEAL_RECEIPT_FAIL", r.REFINEMENT_FAIL = "REFINEMENT_FAIL", 
        (i = e.OrderState || (e.OrderState = {})).WAITING_PAY = "WAITING_PAY", i.CANCEL = "CANCEL", 
        i.IS_PAY = "IS_PAY", i.REFUND = "REFUND", i.REFUNDING = "REFUNDING", i.PAY_FAILED = "PAY_FAILED", 
        i.WAITING_RECEIPT = "WAITING_RECEIPT", i.PARTIAL_REFUNDING = "PARTIAL_REFUNDING", 
        i.PARTIAL_REFUND = "PARTIAL_REFUND", (a = e.OrderType || (e.OrderType = {})).ELECTRON = "ELECTRON", 
        a.PAPER = "PAPER", a.FAST_PAPER = "FAST_PAPER", a.SHOP_PAPER = "SHOP_PAPER", (s = e.COLOR || (e.COLOR = {})).RED = "#970013", 
        s.BLUE = "#81cfff", s.WHITE = "#fff", (u = e.CouponPreferential || (e.CouponPreferential = {})).DISCOUNT = "DISCOUNT", 
        u.EXCHANGE = "EXCHANGE", u.REDUCTION = "REDUCTION", (c = e.CouponStatus || (e.CouponStatus = {})).NEW = "NEW", 
        c.GOT = "GOT", c.USED = "USED", c.EXPIRED = "EXPIRED", (p = e.LOGISTIC_STATUS || (e.LOGISTIC_STATUS = {})).WAIT_DELIVERY = "WAIT_DELIVERY", 
        p.IS_DELIVERY = "IS_DELIVERY", p.IS_RECEIVED = "IS_RECEIVED", (f = e.LOGIN_TYPE || (e.LOGIN_TYPE = {})).WINXIN_H5 = "WINXIN_H5", 
        f.WINXIN_APP = "WINXIN_APP", f.ALI_H5 = "ALI_H5", f.ALI_APP = "ALI_APP", f.H5 = "H5", 
        f.THIRD_API = "THIRD_API";
    },
    21: function(t, e, o) {
        function n(t, e, o) {
            return e ? t + o + e : t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t) {
            return function(e, o) {
                return e && "string" != typeof e && (o = e, e = ""), e = n(t, e, "__"), o ? [ e, function t(e, o) {
                    if ("string" == typeof o) return n(e, o, "--");
                    if (Array.isArray(o)) return o.map(function(o) {
                        return t(e, o);
                    });
                    var r = {};
                    return o && Object.keys(o).forEach(function(t) {
                        r[e + "--" + t] = o[t];
                    }), r;
                }(e, o) ] : e;
            };
        };
    },
    222: function(t, e, o) {
        o.r(e);
        var n = o(223), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    223: function(t, e, o) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, o) {
                        return function n(r, i) {
                            try {
                                var a = e[r](i), s = a.value;
                            } catch (r) {
                                return void o(r);
                            }
                            if (!a.done) return Promise.resolve(s).then(function(t) {
                                n("next", t);
                            }, function(t) {
                                n("throw", t);
                            });
                            t(s);
                        }("next");
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(o(19)), a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
                }
                return t;
            }, s = n(o(66)), u = o(23), c = n(o(27)), p = n(o(49)), f = o(65);
            e.default = {
                components: {
                    toast: c.default
                },
                data: function() {
                    return {
                        photo: "",
                        auxiliary: {
                            image: "",
                            width: 0,
                            height: 0,
                            ratio: 0
                        },
                        certificationInfo: this.$utils.cache.getTempCache("certificationInfo"),
                        tempImagePath: "",
                        devicePositionSource: [ "front", "back" ],
                        devicePosition: "front",
                        tip: {
                            list: [],
                            index: 0
                        },
                        canvas: {
                            width: "0px",
                            height: "0px"
                        },
                        timer: null
                    };
                },
                computed: a({}, (0, u.mapState)({
                    userInfo: function(t) {
                        return t.auth.userInfo;
                    }
                })),
                created: function() {
                    var t = this;
                    return r(i.default.mark(function e() {
                        var o, n;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.$apis.commonApis.configInfo({
                                    code: "AUXILIAY_BG_CONFIG"
                                }).then(function(e) {
                                    var o = e.data;
                                    o && (t.auxiliary.image = o.bgImageUrl, t.auxiliary.width = o.width, t.auxiliary.height = o.height, 
                                    t.auxiliary.ratio = o.ratio);
                                }), e.next = 3, t.$apis.photoApis.getPhotoTips({
                                    certificationInfoId: t.$route.query.certificationInfoId
                                });

                              case 3:
                                o = e.sent, n = o.data, t.tip.list = n.tips || [];

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                mounted: function() {
                    var t = this;
                    this.timer = setInterval(function() {
                        t.tip.index = t.tip.index > t.tip.list.length - 2 ? 0 : t.tip.index + 1;
                    }, 2e3);
                },
                methods: {
                    onerror: function() {},
                    takePhoto: function() {
                        var e, o = this;
                        t.createCameraContext().takePhoto({
                            success: (e = r(i.default.mark(function e(n) {
                                var r, a;
                                return i.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.getFileInfo({
                                            filePath: n.tempImagePath
                                        });

                                      case 2:
                                        return r = e.sent, o.$utils.cache.setTempCache("originalImage", n.tempImagePath), 
                                        e.next = 6, o.compressImage({
                                            path: n.tempImagePath,
                                            size: r.size
                                        });

                                      case 6:
                                        a = e.sent, o.photo = a, o.$utils.cache.setTempCache("tempPhoto", o.photo), o.next();

                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, o);
                            })), function(t) {
                                return e.apply(this, arguments);
                            }),
                            fail: function() {
                                t.showToast({
                                    icon: "none",
                                    title: "拍摄失败"
                                });
                            }
                        });
                    },
                    cancel: function() {
                        this.$router.back();
                    },
                    switchCamera: function() {
                        this.devicePosition = "back" === this.devicePosition ? "front" : "back";
                    },
                    compressImage: function(e) {
                        var o = this;
                        return r(i.default.mark(function n() {
                            var r, a, s, u;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.prev = 0, t.showLoading({
                                        title: "正在压缩中",
                                        mask: !0
                                    }), n.next = 4, o.$apis.commonApis.getCompressConfig({
                                        certificationInfoId: o.$route.query.certificationInfoId
                                    });

                                  case 4:
                                    return r = n.sent, a = r.data, s = new o.$utils.getCompressUtil({
                                        canvasId: "canvas",
                                        changeCanvasOption: function(t) {
                                            o.$set(o, "canvas", Object.assign({}, o.canvas, t));
                                        },
                                        opt: a
                                    }), n.next = 9, s.compress(e);

                                  case 9:
                                    return u = n.sent, n.abrupt("return", u);

                                  case 13:
                                    return n.prev = 13, n.t0 = n.catch(0), n.abrupt("return", e.path);

                                  case 18:
                                    return n.prev = 18, t.hideLoading(), n.finish(18);

                                  case 21:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, o, [ [ 0, 13, 18, 21 ] ]);
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
                        return r(i.default.mark(function o() {
                            var n, r, a;
                            return i.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "上传中",
                                        mask: !0
                                    }), e.disabled = !0, n = (0, s.default)().format("YYYY-MM-DD hh:mm:ss SSS"), o.prev = 3, 
                                    o.next = 6, t.uploadFile({
                                        url: p.default.baseURL + "/params/photoApi/uploadImgFile",
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
                                            districtCode: e.certificationInfo.districtCode || e.$store.state.common.city.districtCode,
                                            certificateCode: e.certificationInfo.certificateCode,
                                            certificationInfoId: Number(e.$route.query.certificationInfoId),
                                            photoOrderId: e.$route.query.photoOrderId || "",
                                            photoInfoId: e.$route.query.photoInfoId || "",
                                            customWidth: e.$route.query.customWidth || "",
                                            customHeight: e.$route.query.customHeight || "",
                                            livingCheckToken: e.$route.query.livingCheckToken || ""
                                        }
                                    });

                                  case 6:
                                    if (200 === (r = o.sent).statusCode) return a = JSON.parse(r.data), o.next = 11, 
                                    (0, f.responseIntercetor)(a);
                                    o.next = 16;
                                    break;

                                  case 11:
                                    e.certificationInfo.enableUpOrgPic && e.uploadOriginalImage(a.data.photoInfoId), 
                                    t.hideLoading(), e.$buriedPoint.recordLog({
                                        operateCode: "confirm_upload_click",
                                        certificateTypeValue: e.certificationInfo.certificateType,
                                        isReceipt: e.certificationInfo.isReceipt,
                                        photoInfoId: a.data.photoInfoId,
                                        mobile: e.userInfo.mobile,
                                        uploadStartTime: n,
                                        uploadEndTime: (0, s.default)().format("YYYY-MM-DD hh:mm:ss SSS")
                                    }), e.$buriedPoint.recordLog({
                                        operateCode: "enter_server",
                                        photoInfoId: a.data.photoInfoId
                                    }), e.$router.replace({
                                        path: "/packageB/pages/check/checkIng/Index",
                                        query: {
                                            photoInfoId: a.data.photoInfoId,
                                            certificationInfoId: e.certificationInfo.certificationInfoId,
                                            useCache: !0
                                        }
                                    });

                                  case 16:
                                    o.next = 21;
                                    break;

                                  case 18:
                                    o.prev = 18, o.t0 = o.catch(3), t.showLoading({
                                        title: "网络错误",
                                        mask: !0
                                    });

                                  case 21:
                                    return o.prev = 21, e.disabled = !1, o.finish(21);

                                  case 24:
                                  case "end":
                                    return o.stop();
                                }
                            }, o, e, [ [ 3, 18, 21, 24 ] ]);
                        }))();
                    },
                    uploadOriginalImage: function(e) {
                        var o = this;
                        return r(i.default.mark(function n() {
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.prev = 0, n.next = 3, t.uploadFile({
                                        url: p.default.baseURL + "/params/photoApi/uploadTempOrgPhoto",
                                        name: "orgImageFile",
                                        filePath: o.$utils.cache.getTempCache("originalImage"),
                                        header: {
                                            appid: o.$store.state.common.mid || "",
                                            thirdAppId: o.$store.state.common.weChatAppID || "",
                                            token: o.$store.state.auth.token,
                                            userId: o.$store.state.auth.userId,
                                            vid: o.$utils.cache.getLocalCache("vid") || ""
                                        },
                                        formData: {
                                            photoInfoId: e
                                        }
                                    });

                                  case 3:
                                    n.next = 8;
                                    break;

                                  case 5:
                                    n.prev = 5, n.t0 = n.catch(0);

                                  case 8:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, o, [ [ 0, 5 ] ]);
                        }))();
                    }
                },
                beforeDestroy: function() {
                    clearInterval(this.timer);
                }
            };
        }).call(this, o(13).default);
    },
    224: function(t, e, o) {},
    27: function(t, e, o) {
        o.r(e);
        var n = o(15), r = o(1);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(35);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/toast/index.vue", e.default = s.exports;
    },
    28: function(e, o, n) {
        (function(e) {
            function r(e) {
                return "string" == typeof e && "" === e.trim() || ("object" != (void 0 === e ? "undefined" : t(e)) || !Array.isArray(e) || !e.length) && null == e;
            }
            function i(t, e) {
                return {
                    data: t,
                    exp: Number.isFinite(e) ? Date.now() + e : "Infinity"
                };
            }
            function a(t) {
                return r(t) ? null : t.hasOwnProperty("exp") && t.hasOwnProperty("data") ? t && "Infinity" !== t.exp && t.exp < Date.now() ? null : t.data : t;
            }
            function s() {
                this.clearExpireAll();
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var u = n(14), c = new Map(), p = new (s.prototype.setTempCache = function(t, e, o) {
                void 0 === o && (o = 1 / 0), r(e) ? c.delete(t) : c.set(t, i(e, o));
            }, s.prototype.getTempCache = function(t) {
                var e = a(c.get(t));
                return r(e) && c.delete(t), e;
            }, s.prototype.setLocalCache = function(t, o, n) {
                r(o) ? e.removeStorage({
                    key: t
                }) : e.setStorageSync(t, i(o, n));
            }, s.prototype.getLocalCache = function(t) {
                var o = a(e.getStorageSync(t));
                return r(o) && e.removeStorage({
                    key: t
                }), o;
            }, s.prototype.clearExpireAll = function() {
                return u.__awaiter(this, void 0, void 0, function() {
                    var t, o = this;
                    return u.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return Date.now(), [ 4, e.getStorageInfo() ];

                          case 1:
                            return t = n.sent().keys, [ 4, Promise.all(t.map(function(t) {
                                return u.__awaiter(o, void 0, void 0, function() {
                                    return u.__generator(this, function(e) {
                                        return this.getLocalCache(t), [ 2 ];
                                    });
                                });
                            })) ];

                          case 2:
                            return n.sent(), [ 2 ];
                        }
                    });
                });
            }, s)();
            o.default = p;
        }).call(this, n(13).default);
    },
    29: function(t, e, o) {
        o.r(e);
        var n = o(16), r = o(3);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(30);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/icon/index.vue", e.default = s.exports;
    },
    3: function(t, e, o) {
        o.r(e);
        var n = o(4), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    30: function(t, e, o) {
        var n = o(5);
        o.n(n).a;
    },
    31: function(t, e, o) {
        o.r(e);
        var n = o(17), r = o(6);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(32);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/loading/index.vue", e.default = s.exports;
    },
    32: function(t, e, o) {
        var n = o(8);
        o.n(n).a;
    },
    33: function(t, e, o) {
        o.r(e);
        var n = o(18), r = o(9);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(34);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/overlay/index.vue", e.default = s.exports;
    },
    338: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("camera", {
                attrs: {
                    "device-position": t.devicePosition,
                    h_: 0
                },
                on: {
                    error: t.onerror
                }
            }, [ o("cover-image", {
                attrs: {
                    src: t.auxiliary.image,
                    h_: 1
                }
            }), t._ri(!("front" !== t.devicePosition || !t.tip.list.length), 3) ? o("cover-view", {
                attrs: {
                    h_: 3
                }
            }, [ t._v(t._s(t.tip.list[t.tip.index]), 4) ]) : t._e(), o("cover-view", {
                attrs: {
                    h_: 6
                }
            }, [ o("cover-view", {
                attrs: {
                    h_: 7
                },
                on: {
                    click: t.cancel
                }
            }, []), o("cover-view", {
                attrs: {
                    h_: 10
                },
                on: {
                    click: t.takePhoto
                }
            }, [ o("cover-view", {
                attrs: {
                    h_: 11
                }
            }) ], 1), o("cover-view", {
                attrs: {
                    h_: 13
                },
                on: {
                    click: t.switchCamera
                }
            }, []) ], 1), o("canvas", {
                style: {
                    width: t.canvas.width,
                    height: t.canvas.height
                },
                attrs: {
                    h_: 16
                }
            }) ], 1);
        }, r = [];
        n._withStripped = !0;
    },
    34: function(t, e, o) {
        var n = o(11);
        o.n(n).a;
    },
    35: function(t, e, o) {
        var n = o(12);
        o.n(n).a;
    },
    37: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.APIs = void 0;
        var n = o(14), r = n.__importDefault(o(65)), i = n.__importDefault(o(95)), a = n.__importDefault(o(96)), s = n.__importDefault(o(97)), u = n.__importDefault(o(98)), c = n.__importDefault(o(99)), p = n.__importDefault(o(100)), f = n.__importDefault(o(101)), l = n.__importDefault(o(102)), d = n.__importDefault(o(74)), h = n.__importDefault(o(80)), m = new (e.APIs = function() {
            this.aliPayApis = new i.default(r.default), this.aliPayAppApis = new a.default(r.default), 
            this.cmbApis = new s.default(r.default), this.userApis = new u.default(r.default), 
            this.photoApis = new c.default(r.default), this.commonApis = new p.default(r.default), 
            this.orderApis = new f.default(r.default), this.weChatApis = new l.default(r.default), 
            this.weAppApis = new d.default(r.default), this.couponApis = new h.default(r.default);
        })();
        e.default = m;
    },
    38: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = o(14), r = n.__importDefault(o(22)), i = n.__importDefault(o(23)), a = n.__importDefault(o(94)), s = n.__importDefault(o(90));
        r.default.use(i.default);
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
    4: function(t, e, o) {
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
    479: function(t, e, o) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var r = n(o(480)), i = n(o(22));
        r.default.mpType = "page", new i.default(r.default).$mount();
    },
    480: function(t, e, o) {
        o.r(e);
        var n = o(338), r = o(222);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(481);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/pages/main/camera/Index.vue", e.default = s.exports;
    },
    481: function(t, e, o) {
        var n = o(224);
        o.n(n).a;
    },
    49: function(t, e, o) {
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
    5: function(t, e, o) {},
    6: function(t, e, o) {
        o.r(e);
        var n = o(7), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    65: function(e, o, n) {
        (function(e) {
            function r() {
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
                                    var t, o;
                                    return s.__generator(this, function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return [ 4, e.getSetting({}) ];

                                          case 1:
                                            return n.sent().authSetting["scope.userInfo"] ? [ 4, e.getUserInfo({
                                                withCredentials: !0
                                            }) ] : [ 3, 12 ];

                                          case 2:
                                            return t = n.sent(), [ 4, _.default.getFreshCode() ];

                                          case 3:
                                            if (!((o = n.sent()) && t.hasOwnProperty("encryptedData") && t.hasOwnProperty("iv") && t.hasOwnProperty("rawData") && t.hasOwnProperty("signature"))) return [ 3, 10 ];
                                            n.label = 4;

                                          case 4:
                                            return n.trys.push([ 4, 6, 7, 9 ]), [ 4, g.default.authUserInfo({
                                                code: o,
                                                encryptedData: t.encryptedData,
                                                iv: t.iv,
                                                rawData: t.rawData,
                                                signature: t.signature
                                            }) ];

                                          case 5:
                                          case 6:
                                            return n.sent(), [ 3, 9 ];

                                          case 7:
                                            return [ 4, _.default.refreshAuthCode() ];

                                          case 8:
                                            return n.sent(), [ 7 ];

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
                    return s.__generator(this, function(o) {
                        switch (o.label) {
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
                            return t.mid && t.mid !== f.default.state.common.mid && f.default.commit("common/changeMid", t.mid), 
                            [ 2, t ];

                          case 2:
                            return [ 4, r() ];

                          case 3:
                            return o.sent(), u.default.success("登录成功"), e.startPullDownRefresh(), [ 3, 5 ];

                          case 4:
                            u.default({
                                message: t.message,
                                duration: 2e3,
                                position: "bottom",
                                selector: "#toast"
                            }), o.label = 5;

                          case 5:
                            return [ 2, Promise.reject(t) ];
                        }
                    });
                });
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.responseIntercetor = o.responseMainIntercetor = void 0;
            var s = n(14), u = s.__importDefault(n(87)), c = s.__importDefault(n(88)), p = s.__importDefault(n(89)), f = s.__importDefault(n(38)), l = s.__importDefault(n(49)), d = s.__importDefault(n(73)), h = s.__importDefault(n(28)), m = s.__importDefault(n(83)), g = s.__importDefault(n(91)), _ = s.__importDefault(n(67)), y = new c.default(p.default(d.default));
            y.config = l.default, y.interceptors.request.use(function(e) {
                return s.__awaiter(void 0, void 0, void 0, function() {
                    return s.__generator(this, function(o) {
                        return l.default.headers.appid = f.default.state.common.mid || "", l.default.headers.thirdAppId = f.default.state.common.weChatAppID || "", 
                        l.default.headers.token = f.default.state.auth.token, l.default.headers.userId = f.default.state.auth.userId, 
                        l.default.headers.vid = h.default.getLocalCache("vid") || "", "object" == t(l.default.body) && Object.keys(l.default.body).forEach(function(t) {
                            void 0 !== l.default.body[t] && "undefined" !== l.default.body[t] || delete l.default.body[t];
                        }), Object.assign(e, l.default), "object" == t(l.default.body) && Object.keys(l.default.body).forEach(function(t) {
                            var e = l.default.body[t];
                            void 0 !== e && "" !== e && null !== e && "undefined" !== e || delete l.default.body[t];
                        }), [ 2, e ];
                    });
                });
            }), y.interceptors.response.use(function(t) {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(e) {
                        return l.default.headers.vid || (l.default.headers.vid = t.data.vid, h.default.setLocalCache("vid", t.data.vid, 1 / 0)), 
                        [ 2 ];
                    });
                });
            }, function(t) {
                return u.default({
                    message: "网络错误请稍后重试",
                    position: "bottom",
                    selector: "#toast"
                }), t;
            }), y.interceptors.response.use(i), o.default = y, o.responseMainIntercetor = i, 
            o.responseIntercetor = a;
        }).call(this, n(13).default);
    },
    67: function(t, e, o) {
        (function(t) {
            function n() {
                this.cache = i.default, this.getCompressUtil = s.getCompressUtil, this.systemInfo = null;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = o(14), i = r.__importDefault(o(28)), a = r.__importDefault(o(37)), s = o(93), u = o(20), c = r.__importDefault(o(84)), p = (n.prototype.getLocation = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var e, o, n, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return (e = i.default.getLocalCache("location")) ? [ 2, e ] : [ 3, 1 ];

                          case 1:
                            return c.default.recordLog({
                                operateCode: "home_location_flame"
                            }), [ 4, t.getLocation() ];

                          case 2:
                            return o = r.sent(), [ 4, a.default.commonApis.getCity({
                                longitude: o.longitude,
                                latitude: o.latitude
                            }) ];

                          case 3:
                            return n = r.sent().data, s = {
                                longitude: o.longitude,
                                latitude: o.latitude,
                                city: n.city.name
                            }, i.default.setLocalCache("location", s, 72e5), [ 2, s ];
                        }
                    });
                });
            }, n.prototype.getAllCity = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, e;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return (t = i.default.getLocalCache("allCity")) ? [ 2, t ] : [ 3, 1 ];

                          case 1:
                            return [ 4, a.default.commonApis.getCityList({
                                type: 2
                            }) ];

                          case 2:
                            return e = o.sent().data, i.default.setLocalCache("allCity", e, 1 / 0), [ 2, e ];
                        }
                    });
                });
            }, n.prototype.getCurrentPage = function() {
                return getCurrentPages().slice(-1).pop();
            }, n.prototype.getSource = function() {
                switch (t.getEnv()) {
                  case u.MEGALO_ENV.WECHAT:
                    return "WEIXIN_APP";

                  case u.MEGALO_ENV.ALIPAY:
                    return "ALI_APP";
                }
            }, n.prototype.getColorCodeByColorId = function(t) {
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
            }, n.prototype.resizeOSSImage = function(e, o) {
                return this.systemInfo || (this.systemInfo = t.getSystemInfoSync()), e + "?x-oss-process=image/auto-orient,1/interlace,1/resize,m_lfit,w_" + Math.floor(o / 750 * this.systemInfo.windowWidth * this.systemInfo.pixelRatio);
            }, n.prototype.getFreshCode = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 2, , 4 ]), [ 4, t.checkSession() ];

                          case 1:
                            if (o.sent(), e = i.default.getTempCache("authCode")) return [ 2, e ];
                            throw new Error("缓存code不存在");

                          case 2:
                            return o.sent(), [ 4, this.refreshAuthCode() ];

                          case 3:
                            return [ 2, o.sent() ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, n.prototype.refreshAuthCode = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return [ 4, t.login() ];

                          case 1:
                            return e = o.sent().code, i.default.setTempCache("authCode", e), [ 2, e ];
                        }
                    });
                });
            }, n);
            e.default = new p();
        }).call(this, o(13).default);
    },
    68: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BEACON_KEY = e.WEAPP_ID = e.DEFAULT_MID = void 0, e.DEFAULT_MID = "cs044cea2fd12a4681", 
        e.WEAPP_ID = "wxc208a30b208e59ce", e.BEACON_KEY = "MA1AD2R83EFACK";
    },
    7: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, r = (n = o(21)) && n.__esModule ? n : {
            default: n
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
                b: (0, r.default)("van-loading")
            }
        };
    },
    73: function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = o(14);
            e.default = function(e, o) {
                return n.__awaiter(void 0, void 0, void 0, function() {
                    var r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
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
                            return r = n.sent(), o({
                                responseText: r.data,
                                statusCode: r.statusCode,
                                errMsg: r.errMsg,
                                headers: r.header
                            }), [ 2 ];
                        }
                    });
                });
            };
        }).call(this, o(13).default);
    },
    74: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(t, e) {
            return this.request.post("/params/user/weixinAppLogin", t, e);
        }, n.prototype.pay = function(t) {
            return this.request.post("/params/weiXinPayApi/weiXinPay", t);
        }, n.prototype.decryptWxUserInfo = function(t) {
            return this.request.post("/params/photoApi/decryptWxUserInfo", t);
        }, n);
        e.default = r;
    },
    8: function(t, e, o) {},
    80: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        var r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.GetCouponListParamsType = void 0, (r = e.GetCouponListParamsType || (e.GetCouponListParamsType = {}))[r.NORMAL = 1] = "NORMAL", 
        r[r.INVALID = 2] = "INVALID";
        var i = (n.prototype.getCouponList = function(t, e) {
            return this.request.post("/params/myCoupon/list", t, e);
        }, n.prototype.getOrderCoupon = function(t, e) {
            return this.request.post("/params/orderCoupon/list", t, e);
        }, n.prototype.getCouponExplain = function() {
            return this.request.get("/params/myCoupon/explain");
        }, n.prototype.exchange = function(t) {
            return this.request.post("/params/redeemCode/exchange", t);
        }, n.prototype.getRedeemCode = function(t) {
            return this.request.post("/params/redeemCode/get", t);
        }, n);
        e.default = i;
    },
    83: function(t, e, o) {
        function n(t) {
            return t = Object.assign(Object.assign({}, n.currentOptions), t), new Promise(function(e, o) {
                var n, i = (t.context || (n = getCurrentPages())[n.length - 1]).selectComponent(t.selector);
                delete t.context, delete t.selector, i && (i.setData(Object.assign({
                    onCancel: o,
                    onConfirm: e
                }, t)), r.push(i));
            });
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = [];
        n.defaultOptions = {
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
        }, (n.alert = n).confirm = function(t) {
            return n(Object.assign({
                showCancelButton: !0
            }, t));
        }, n.close = function() {
            r.forEach(function(t) {
                t.close();
            }), r = [];
        }, n.stopLoading = function() {
            r.forEach(function(t) {
                t.stopLoading();
            });
        }, n.setDefaultOptions = function(t) {
            Object.assign(n.currentOptions, t);
        }, (n.resetDefaultOptions = function() {
            n.currentOptions = Object.assign({}, n.defaultOptions);
        })(), e.default = n;
    },
    84: function(t, e, o) {
        (function(t) {
            function n() {
                this.queue = [], this.isLoadedCache = !1, this.throttleUpload = c.throttle(5e3, this.upload);
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = o(14), i = r.__importDefault(o(37)), a = r.__importDefault(o(66)), s = r.__importDefault(o(28)), u = r.__importDefault(o(38)), c = o(161), p = o(68), f = o(162), l = (n.prototype.recordLog = function(t) {
                var e;
                return r.__awaiter(this, void 0, void 0, function() {
                    var o, n, i, c, l, d, h, m, g;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            this.isLoadedCache || (this.queue = s.default.getLocalCache("BURIED_POINT") || [], 
                            this.isLoadedCache = !0), r.label = 1;

                          case 1:
                            return r.trys.push([ 1, 3, , 4 ]), o = u.default.state.common.mid || s.default.getLocalCache("mid"), 
                            n = s.default.getLocalCache("vid"), i = u.default.state.auth.userId, c = u.default.state.auth.userInfo.mobile, 
                            [ 4, this.getSystemInfo() ];

                          case 2:
                            return l = r.sent(), d = l.system.split(" "), h = d[0], m = d[1], g = {
                                nanoid: f(8),
                                time: a.default().format("YYYY-MM-DD HH:mm:ss SSS"),
                                vid: n,
                                userId: i,
                                mobile: c,
                                os: h.toUpperCase(),
                                osVersion: m,
                                ver: "2.1",
                                channel: o,
                                location: null === (e = u.default.state.common.city) || void 0 === e ? void 0 : e.name,
                                locationDetails: this.getLocationDetails(),
                                appid: p.WEAPP_ID,
                                systemInfo: l
                            }, Object.assign(g, t), this.appendData(g), this.throttleUpload(), [ 3, 4 ];

                          case 3:
                            return r.sent(), [ 2 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, n.prototype.appendData = function(t) {
                this.queue.push(t), this.updateCache();
            }, n.prototype.upload = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, e, o = this;
                    return r.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            n.label = 1;

                          case 1:
                            return n.trys.push([ 1, 3, , 4 ]), t = this.queue.map(function(t) {
                                return t.nanoid;
                            }), e = {
                                jsonArrData: JSON.stringify(this.queue)
                            }, [ 4, i.default.commonApis.recordLog(e, {
                                ignoreErrorToast: !0
                            }) ];

                          case 2:
                            return n.sent(), this.queue.forEach(function(e, n) {
                                t.includes(e.nanoid) && delete o.queue[n];
                            }), this.queue = this.queue.filter(function(t) {
                                return t;
                            }), this.updateCache(), [ 3, 4 ];

                          case 3:
                            return n.sent(), [ 2 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, n.prototype.updateCache = function() {
                var t = a.default().add(1, "date").hour(0).minute(0).second(0);
                s.default.setLocalCache("BURIED_POINT", this.queue, t.unix());
            }, n.prototype.getLocationDetails = function() {
                var t, e = null !== (t = s.default.getTempCache("LOCATION")) && void 0 !== t ? t : null;
                return e ? {
                    horizontalAccuracy: e.horizontalAccuracy,
                    accuracy: e.accuracy,
                    altitude: e.altitude,
                    latitude: e.latitude,
                    longitude: e.longitude
                } : null;
            }, n.prototype.getSystemInfo = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return [ 4, t.getSystemInfo() ];

                          case 1:
                            return [ 2, {
                                brand: (e = o.sent()).brand,
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
            }, n);
            e.default = new l();
        }).call(this, o(13).default);
    },
    87: function(t, e, o) {
        function n(t) {
            var e = Object.assign({}, a, t);
            "string" == typeof t && (e = Object.assign(e, {
                message: t
            })), n.show(e);
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, i = (r = o(67)) && r.__esModule ? r : {
            default: r
        }, a = {
            show: !0,
            message: "",
            duration: 2e3,
            position: "bottom",
            type: "text",
            mask: !1,
            forbidClick: !1
        };
        n.show = function(t) {
            var e, o = i.default.getCurrentPage().rootVM, n = "string" == typeof t ? {
                options: t
            } : t;
            !o || (e = o.$refs.toast) && e.setOptions(Object.assign({}, a, n));
        }, [ "success", "fail", "loading" ].forEach(function(t) {
            n[t] = function(e) {
                "string" == typeof e ? n.call(n, {
                    message: e,
                    type: t,
                    position: "middle"
                }) : n.call(n, Object.assign({
                    position: "middle"
                }, e, {
                    type: t
                }));
            };
        }), n.clear = function() {
            n.show({
                show: !1
            });
        }, e.default = n;
    },
    9: function(t, e, o) {
        o.r(e);
        var n = o(10), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    90: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = o(14), r = n.__importDefault(o(28)), i = n.__importDefault(o(37)), a = o(68), s = o(20), u = n.__importDefault(o(38));
        e.default = new function() {
            this.namespaced = !0, this.state = {
                theme: "",
                city: r.default.getLocalCache("city") || {},
                tempCity: r.default.getTempCache("city") || {},
                tempPayment: r.default.getTempCache("tempPayment") || {},
                cityList: [],
                mid: r.default.getLocalCache("mid") || a.DEFAULT_MID,
                weChatAppID: "",
                beaconKey: r.default.getTempCache("beaconKey") || a.BEACON_KEY,
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
                    t.mid = e, r.default.setLocalCache("mid", e, 2592e6);
                },
                changeWeChatAppID: function(t, e) {
                    t.weChatAppID = e, r.default.setTempCache("weChatAppID", e);
                },
                changeBeaconKey: function(t, e) {
                    t.beaconKey = e, r.default.setTempCache("beaconKey", e);
                },
                sendEmail: function(t, e) {
                    t.sendEmail = e;
                },
                downloadPreview: function(t, e) {
                    t.downloadPreview = e;
                },
                changeCity: function(t, e) {
                    t.city = e, r.default.setLocalCache("city", e, 1 / 0);
                },
                changeTempCity: function(t, e) {
                    t.tempCity = e, r.default.setTempCache("city", e, 1 / 0);
                },
                changeShowLoginAlert: function(t, e) {
                    t.city = e;
                },
                changeTempPayment: function(t, e) {
                    t.tempPayment = e, r.default.setTempCache("tempPayment", e);
                },
                changeCityList: function(t, e) {
                    t.cityList = e, r.default.setLocalCache("cityList", e, 1 / 0);
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
                    var e = t.commit, o = t.state;
                    return n.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                              case 0:
                                return o.cityList.length ? [ 2, o.cityList ] : [ 4, i.default.commonApis.getCityList() ];

                              case 1:
                                return t = n.sent().data, e("changeCityList", t), [ 2, t ];
                            }
                        });
                    });
                },
                triggerConfigDialog: function(t, e) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var o;
                        return n.__generator(this, function(a) {
                            switch (a.label) {
                              case 0:
                                return [ 4, i.default.commonApis.dialogConfig(n.__assign(n.__assign({}, e), {
                                    loginType: s.LOGIN_TYPE.WINXIN_APP,
                                    cityId: u.default.state.common.city.cityId || -1,
                                    isVisited: r.default.getTempCache("isVisited_" + e.type) ? 1 : 0
                                })) ];

                              case 1:
                                return o = a.sent().data, r.default.setTempCache("isVisited_" + e.type, "1", 1 / 0), 
                                o && t.commit("showConfigDialog", o), [ 2 ];
                            }
                        });
                    });
                }
            };
        }();
    },
    91: function(t, e, o) {
        function n() {}
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = o(14), i = r.__importDefault(o(73)), a = r.__importDefault(o(88)), s = r.__importDefault(o(89)), u = r.__importDefault(o(74)), c = r.__importDefault(o(37)), p = r.__importDefault(o(49)), f = r.__importDefault(o(38)), l = r.__importStar(o(65)), d = (n.prototype.login = function(t, e) {
            return void 0 === e && (e = {}), r.__awaiter(this, void 0, void 0, function() {
                var o, n, c;
                return r.__generator(this, function(r) {
                    return (o = new a.default(s.default(i.default))).interceptors.response.use(l.responseMainIntercetor), 
                    n = new u.default(o), c = Object.assign(e, p.default), [ 2, n.login(t, c) ];
                });
            });
        }, n.prototype.authUserInfo = function(t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var e;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                      case 0:
                        return o.trys.push([ 0, 4, , 5 ]), [ 4, this.login({
                            code: t.code,
                            encryptedData: t.encryptedData,
                            iv: t.iv,
                            rawData: t.rawData,
                            signature: t.signature,
                            source: "WEIXIN_APP"
                        }) ];

                      case 1:
                        return e = o.sent().data, f.default.commit("auth/login", e), l.default.unlock(), 
                        [ 4, c.default.commonApis.voucher() ];

                      case 2:
                        return o.sent(), [ 4, Promise.all([ f.default.dispatch("common/triggerConfigDialog", {
                            type: "POPUP_COUPON"
                        }), f.default.dispatch("common/triggerConfigDialog", {
                            type: "POPUP_LOGIN"
                        }) ]) ];

                      case 3:
                      case 4:
                        return o.sent(), [ 3, 5 ];

                      case 5:
                        return [ 2 ];
                    }
                });
            });
        }, n);
        e.default = new d();
    },
    93: function(t, e, o) {
        (function(t) {
            function n(t, e, o) {
                this.canvasId = "", this.opt = {
                    maxWidth: 1400,
                    maxFileSize: 1024,
                    quality: .99999,
                    timeout: 2e3,
                    changeCanvasRectWaitTime: 200,
                    drawCallBackWaitTime: 200
                }, this.canvasId = t, this.ctx = wx.createCanvasContext(this.canvasId), this.changeCanvasOption = e, 
                o && (this.opt = o);
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getCompressUtil = void 0;
            var r = o(14);
            e.getCompressUtil = function(t) {
                return new i(t.canvasId, t.changeCanvasOption, t.opt);
            };
            var i = (n.prototype.compress = function(t, e) {
                var o = this;
                return new Promise(function(n, i) {
                    return r.__awaiter(o, void 0, void 0, function() {
                        var o, a, s, u;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                              case 0:
                                return setTimeout(function() {
                                    i("压缩超时");
                                }, this.opt.timeout), e && (this.opt = e), o = t.path, this.log("原图文件大小: " + t.size / 1024 + "kb"), 
                                t.size < 1024 * this.opt.maxFileSize ? (this.log("未经压缩图片文件大小已通过"), n(t.path), [ 2 ]) : [ 4, this.computedSize(o, this.opt.maxWidth) ];

                              case 1:
                                return a = r.sent(), [ 4, this.compressSize(o, a) ];

                              case 2:
                                return s = r.sent(), u = s, [ 4, this.checkCompress(u) ];

                              case 3:
                                return r.sent() ? (n(u), [ 2 ]) : [ 4, this.compressQuality(this.opt.quality, a) ];

                              case 4:
                                return u = r.sent(), [ 4, this.checkCompress(u) ];

                              case 5:
                                return r.sent() ? n(u) : i(), [ 2 ];
                            }
                        });
                    });
                });
            }, n.prototype.computedSize = function(e, o) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, i, a, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4, t.getImageInfo({
                                src: e
                            }) ];

                          case 1:
                            return n = r.sent(), i = n.width / n.height, a = n.width, s = n.height, o && n.width > o && (this.log("压缩宽度" + n.width + " => " + o), 
                            s = (a = o) / i), [ 2, {
                                width: a,
                                height: s
                            } ];
                        }
                    });
                });
            }, n.prototype.compressSize = function(e, o) {
                var n = this;
                return new Promise(function(i, a) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, a = this;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                              case 0:
                                return n = Date.now(), [ 4, this.changeCanvasOption({
                                    width: o.width,
                                    height: o.height
                                }) ];

                              case 1:
                                return s.sent(), this.log("开始canvas更新" + this.opt.changeCanvasRectWaitTime + "ms"), 
                                [ 4, this.waitTime(this.opt.changeCanvasRectWaitTime) ];

                              case 2:
                                return s.sent(), this.ctx.drawImage(e, 0, 0, o.width, o.height), this.ctx.draw(!1, function() {
                                    return r.__awaiter(a, void 0, void 0, function() {
                                        var e;
                                        return r.__generator(this, function(r) {
                                            switch (r.label) {
                                              case 0:
                                                return this.log("开始等待绘制" + this.opt.drawCallBackWaitTime + "ms"), [ 4, this.waitTime(this.opt.drawCallBackWaitTime) ];

                                              case 1:
                                                return r.sent(), this.log("开始压缩宽度"), [ 4, t.canvasToTempFilePath({
                                                    x: 0,
                                                    y: 0,
                                                    width: o.width,
                                                    height: o.height,
                                                    destWidth: o.width,
                                                    destHeight: o.height,
                                                    canvasId: this.canvasId,
                                                    fileType: "jpg",
                                                    quality: 1
                                                }) ];

                                              case 2:
                                                return e = r.sent(), this.log("压缩宽度耗时:" + (Date.now() - n) + "ms"), i(e.tempFilePath), 
                                                [ 2 ];
                                            }
                                        });
                                    });
                                }), [ 2 ];
                            }
                        });
                    });
                });
            }, n.prototype.compressQuality = function(e, o) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return n = Date.now(), this.log("开始压缩质量"), [ 4, t.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: o.width,
                                height: o.height,
                                destWidth: o.width,
                                destHeight: o.height,
                                canvasId: "canvas",
                                fileType: "jpg",
                                quality: e
                            }) ];

                          case 1:
                            return i = r.sent(), this.log("压缩质量:" + e + ", 耗时:" + (Date.now() - n) + "ms"), 
                            [ 2, i.tempFilePath ];
                        }
                    });
                });
            }, n.prototype.checkCompress = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var o, n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4, t.getFileInfo({
                                filePath: e
                            }) ];

                          case 1:
                            return o = r.sent(), n = o.size / 1024, this.log("压缩后文件大小:" + n + "kb"), n <= this.opt.maxFileSize ? (this.log("压缩通过标准"), 
                            [ 2, !0 ]) : [ 2 ];
                        }
                    });
                });
            }, n.prototype.waitTime = function(t) {
                return new Promise(function(e) {
                    setTimeout(e, t);
                });
            }, n.prototype.log = function(t) {}, n);
        }).call(this, o(13).default);
    },
    94: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = o(14).__importDefault(o(28));
        e.default = new function() {
            this.namespaced = !0, this.state = {
                showLoginAlert: !1,
                openId: n.default.getLocalCache("openId") || "",
                userId: n.default.getLocalCache("userId") || "",
                token: n.default.getLocalCache("token") || "",
                unionId: n.default.getLocalCache("unionId") || "",
                userInfo: n.default.getLocalCache("userInfo") || {},
                isNeedInfo: n.default.getLocalCache("isNeedInfo") || ""
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
                        t.unionId = e.unionId, n.default.setLocalCache("userId", e.userId, 1 / 0), n.default.setLocalCache("token", e.token, 1 / 0), 
                        n.default.setLocalCache("openId", e.openId, 1 / 0), n.default.setLocalCache("userInfo", e.userInfo, 1 / 0), 
                        n.default.setLocalCache("isNeedInfo", e.isNeedInfo, 1 / 0), n.default.setLocalCache("unionId", e.unionId, 1 / 0);
                    } catch (t) {}
                },
                logout: function(t, e) {
                    t.userId = "", t.openId = "", t.token = "", t.unionId = "", t.userInfo = {
                        nickName: "",
                        mobile: ""
                    }, n.default.setLocalCache("userId", null, 1 / 0), n.default.setLocalCache("token", null, 1 / 0), 
                    n.default.setLocalCache("userInfo", null, 1 / 0);
                },
                changeUserInfo: function(t, e) {
                    t.userInfo = e, n.default.setLocalCache("userInfo", e, 1 / 0);
                },
                changeIsNeedInfo: function(t, e) {
                    t.isNeedInfo = e, n.default.setLocalCache("isNeedInfo", e, 1 / 0);
                },
                changeShowLoginAlert: function(t, e) {
                    t.showLoginAlert = e;
                }
            };
        }();
    },
    95: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(t) {
            return this.request.post("/params/user/aliLogin", t);
        }, n.prototype.pay = function(t) {
            return this.request.post("/params/aliPay/aliH5Pay", t);
        }, n);
        e.default = r;
    },
    96: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(t, e) {
            return this.request.post("/params/user/aliAppLogin", t, e);
        }, n);
        e.default = r;
    },
    97: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(t) {
            return this.request.get(Object({
                M_ID: "cs044cea2fd12a4681",
                BEACON_KEY: "MA1AD2R83EFACK",
                WEAPP_ID: "wxc208a30b208e59ce"
            }).VUE_APP_CMB_API + "/cmbApi/cmbUserLogin", t);
        }, n.prototype.getLoginUrl = function(t) {
            return this.request.get(Object({
                M_ID: "cs044cea2fd12a4681",
                BEACON_KEY: "MA1AD2R83EFACK",
                WEAPP_ID: "wxc208a30b208e59ce"
            }).VUE_APP_CMB_API + "/cmbApi/getCmbLoginUrl", t);
        }, n.prototype.pay = function(t) {
            return this.request.post("/params/cmbPayApi/cmbAppPay", t);
        }, n);
        e.default = r;
    },
    98: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        var r, i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (i = r = r || {})[i.MALE = 0] = "MALE", i[i.FEMALE = 1] = "FEMALE";
        var a = (n.prototype.getUserInfo = function(t) {
            return this.request.get("/photoApi/getIndexPhotoType", {
                userId: t
            });
        }, n);
        e.default = a;
    },
    99: function(t, e, o) {
        function n(t) {
            this.request = t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (n.prototype.getPhotoRecord = function(t) {
            return this.request.get("/params/photoApi/getIndexPhotoRecord", t);
        }, n.prototype.getViewPhotoRecord = function() {
            return this.request.get("/params/photoApi/getViewPhotoRecord");
        }, n.prototype.useCheckFailPhoto = function(t) {
            return this.request.post("/params/photoApi/useCheckFailPhoto", t);
        }, n.prototype.getPhotoInfo = function(t) {
            return this.request.get("/params/photoApi/getPhotoInfo", t);
        }, n.prototype.getPhotoPriceInfo = function(t) {
            return this.request.get("/params/photoApi/getPhotoPriceInfo", t);
        }, n.prototype.getPhotoTips = function(t) {
            return this.request.post("/params/photoApi/getPhotoTips ", t);
        }, n.prototype.photoPriceDetail = function(t) {
            return this.request.get("/params/photoOrder/photoPriceDetail", t);
        }, n.prototype.bindPhotoOrder = function(t) {
            return this.request.post("/params/photoApi/bindPhotoOrder", t);
        }, n.prototype.getPhotoGuide = function(t) {
            return this.request.post("/params/photoApi/getPhotoGuide", t);
        }, n.prototype.getPhotoErrorInfo = function(t) {
            return this.request.post("/params/photoApi/getPhotoErrorInfo", t);
        }, n.prototype.fillColorTask = function(t) {
            return this.request.post("/params/photoApi/fillColorTask", t);
        }, n.prototype.getSinglePhotoGuide = function(t) {
            return this.request.get("/params/photoApi/getSinglePhotoGuide", t);
        }, n.prototype.getGoodsInfoDetail = function(t) {
            return this.request.get("/params/photoOrder/goodsInfoDetail", t);
        }, n.prototype.calculatePrice = function(t) {
            return this.request.get("/params/photoOrder/calculatePrice", t);
        }, n.prototype.getGoodsStands = function(t) {
            return this.request.get("/params/photoOrder/goodsStands", t);
        }, n.prototype.getRePhotoLivingToken = function(t) {
            return this.request.get("/params/photoApi/getRePhotoLivingToken", t);
        }, n);
        e.default = r;
    }
}, [ [ 479, "runtime", "vendor" ] ] ]);
var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "app" ], {
    100: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.getCertificationInfo = function(e) {
            return this.request.get("/params/photoApi/getPhotoTypeById", e);
        }, n.prototype.getConfig = function(e) {
            return this.request.get("/params/photoApi/getIndexConfig", e);
        }, n.prototype.voucher = function(e) {
            return this.request.get("/params/coupon/voucher", e);
        }, n.prototype.getPhotoType = function(e) {
            return this.request.get("/params/photoApi/getIndexPhotoType", e);
        }, n.prototype.uploadImage = function(e) {
            return this.request.post("/params/photoApi/uploadImgFile", e);
        }, n.prototype.sendSMS = function(e) {
            return this.request.get("/params/photoApi/sendSms", e);
        }, n.prototype.sendEmail = function(e) {
            return this.request.get("/params/photoApi/sendEmail", e);
        }, n.prototype.sendVerifyCode = function(e) {
            return this.request.get("/params/photoApi/sendVerifyCode", e);
        }, n.prototype.configInfos = function(e) {
            return this.request.get("/params/pageCustomize/configInfo", e);
        }, n.prototype.boundUserMobile = function(e) {
            return this.request.post("/params/photoApi/boundUserMobile", e);
        }, n.prototype.mobileLogin = function(e) {
            return this.request.post("/params/photoApi/mobileLoginByVCode", e);
        }, n.prototype.getCityList = function(e) {
            return this.request.get("/params/photoApi/listCitys", e);
        }, n.prototype.getHistorySearch = function(e) {
            return this.request.get("/params/photoApi/getHistorySearch", e);
        }, n.prototype.getMerchantPayWayDetail = function(e) {
            return this.request.get("/params/photoApi/merchantPayWayDetail", e);
        }, n.prototype.recordLog = function(e, t) {
            return this.request.post("/params/photoApi/uploadOperateLog", e);
        }, n.prototype.getMerchantInfo = function(e) {
            return this.request.get("/params/photoApi/getMerchantInfo", e);
        }, n.prototype.getCity = function(e) {
            return this.request.get("/params/photoApi/getCityByLocation", e);
        }, n.prototype.getPageConfig = function(e) {
            return this.request.get("/params/photoApi/getPageConfig", e);
        }, n.prototype.getCustomServiceInfo = function(e) {
            return this.request.get("/params/photoApi/getCustomServiceInfo ", e);
        }, n.prototype.personalCenter = function() {
            return this.request.get("/params/photoApi/personalCenter");
        }, n.prototype.getPaySuccessView = function(e) {
            return this.request.get("/params/photoOrder/getPaySuccessView", e);
        }, n.prototype.orderAssistance = function(e) {
            return this.request.post("/params/photoOrder/orderAssistance", e);
        }, n.prototype.configInfo = function(e) {
            return this.request.post("/params/pageCustomize/configInfo", e);
        }, n.prototype.bulletin = function(e) {
            return this.request.post("/params/pageCustomize/bulletin", e);
        }, n.prototype.getCompressConfig = function(e) {
            return this.request.get("/params/photoApi/getCompressConfig", e);
        }, n.prototype.removePhotoRecord = function(e) {
            return this.request.get("/params/photoApi/removePhotoRecord", e);
        }, n.prototype.getCityByLocation = function(e) {
            return this.request.get("/params/photoApi/getCityByLocation", e);
        }, n.prototype.dialogConfig = function(e) {
            return this.request.get("/params/pageCustomize/popup", e);
        }, n);
        t.default = r;
    },
    101: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.createOrder = function(e) {
            return this.request.post("/params/photoApi/createOrder", e);
        }, n.prototype.getUpgradePaperGoodsStands = function(e) {
            return this.request.get("/params/photoOrder/getUpgradePaperGoodsStands", e);
        }, n.prototype.getOrderList = function(e) {
            return this.request.get("/params/photoApi/getOrderList", e);
        }, n.prototype.getOrderDetail = function(e) {
            return this.request.get("/params/photoApi/getOrderDetail", e);
        }, n.prototype.upgradePaperInfo = function(e) {
            return this.request.get("/params/photoOrder/upgradePaperInfo", e);
        }, n.prototype.upgradePaper = function(e) {
            return this.request.post("/params/photoOrder/upgradePaper", e);
        }, n.prototype.toUpgradePaper = function(e) {
            return this.request.get("/params/photoOrder/toUpgradePaper", e);
        }, n.prototype.getRefundInfo = function(e) {
            return this.request.get("/params/photoOrder/getRefundInfo", e);
        }, n.prototype.getRefundDetail = function(e) {
            return this.request.get("/params/photoOrder/getRefundDetail", e);
        }, n.prototype.scanning = function(e) {
            return this.request.post("/params/selfPrint/scanning", e);
        }, n.prototype.getPrintDetail = function(e) {
            return this.request.get("/params/selfPrint/getPrintDetail", e);
        }, n.prototype.applyRefund = function(e) {
            return this.request.post("/params/photoOrder/applyRefund", e);
        }, n);
        t.default = r;
    },
    102: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(e) {
            return this.request.post("/params/user/weixinH5Login", e);
        }, n.prototype.pay = function(e) {
            return this.request.post("/params/weiXinPayApi/weiXinPay", e);
        }, n.prototype.saveFormId = function(e) {
            return this.request.post("/params/photoApi/saveAppFormId", e);
        }, n.prototype.updateUser = function(e) {
            return this.request.post("/params/user/updateUser", e);
        }, n);
        t.default = r;
    },
    171: function(e, t, o) {
        o.r(t);
        var n = o(172), r = o.n(n);
        for (var a in n) "default" !== a && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(a);
        t.default = r.a;
    },
    172: function(e, t, o) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function r(e) {
                return function() {
                    var t = e.apply(this, arguments);
                    return new Promise(function(e, o) {
                        return function n(r, a) {
                            try {
                                var i = t[r](a), s = i.value;
                            } catch (r) {
                                return void o(r);
                            }
                            if (!i.done) return Promise.resolve(s).then(function(e) {
                                n("next", e);
                            }, function(e) {
                                n("throw", e);
                            });
                            e(s);
                        }("next");
                    });
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i, s = n(o(19)), u = n(o(84)), c = o(68), p = n(o(66));
            t.default = {
                mpType: "app",
                onLaunch: (i = r(s.default.mark(function t(o) {
                    var n, r, a, i;
                    return s.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return (n = this.$utils.cache.getLocalCache("vid")) || (n = "" + (0, p.default)().format("YYYYMMDDHHmmss") + Math.round(1e3 * Math.random()), 
                            this.$utils.cache.setLocalCache("vid", n, 1 / 0)), r = {}, t.prev = 3, e.showNavigationBarLoading(), 
                            t.next = 7, e.getLocation();

                          case 7:
                            r = t.sent, t.next = 12;
                            break;

                          case 10:
                            t.prev = 10, t.t0 = t.catch(3);

                          case 12:
                            return t.prev = 12, t.next = 15, this.$apis.commonApis.getCityByLocation(r);

                          case 15:
                            return a = t.sent, this.$store.commit("common/changeTempCity", a.data.city), this.$utils.cache.setLocalCache("location", r, 1 / 0), 
                            e.hideNavigationBarLoading(), t.finish(12);

                          case 20:
                            (i = wx.getUpdateManager()).onCheckForUpdate(function(e) {
                                u.default.recordLog({
                                    operateCode: "updateManager_has_update",
                                    hasUpdate: e.hasUpdate
                                });
                            }), i.onUpdateReady(function() {
                                wx.showModal({
                                    title: "更新提示",
                                    content: "新版本已经准备好，是否重启应用？",
                                    success: function(e) {
                                        u.default.recordLog({
                                            operateCode: "updateManager_update_confirm",
                                            confirmUpdate: e.confirm
                                        }), e.confirm && i.applyUpdate();
                                    }
                                });
                            }), i.onUpdateFailed(function() {
                                u.default.recordLog({
                                    operateCode: "updateManager_update_fail"
                                });
                            }), this.globalData.beason.appLaunch();

                          case 26:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 3, 10, 12, 20 ] ]);
                })), function(e) {
                    return i.apply(this, arguments);
                }),
                onShow: (a = r(s.default.mark(function e(t) {
                    var o, n, r;
                    return s.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (o = t.referrerInfo && t.referrerInfo.appId, this.$store.commit("common/changeWeChatAppID", o), 
                            n = t.query && t.query.mid || t.referrerInfo && t.referrerInfo.extraData && t.referrerInfo.extraData.mid, 
                            t.referrerInfo && t.referrerInfo.extraData && t.referrerInfo.extraData.terminalCode && (r = {
                                timestamp: Date.parse(new Date()),
                                terminalCode: t.referrerInfo.extraData.terminalCode
                            }, this.$utils.cache.setTempCache("rwyCode", r)), !n) {
                                e.next = 8;
                                break;
                            }
                            this.$store.commit("common/changeMid", n), e.next = 14;
                            break;

                          case 8:
                            e.t0 = t.scene, e.next = 1007 === e.t0 || 1008 === e.t0 || 1001 === e.t0 || 1011 === e.t0 || 1027 === e.t0 || 1034 === e.t0 || 1037 === e.t0 || 1038 === e.t0 || 1047 === e.t0 || 1048 === e.t0 || 1049 === e.t0 || 1089 === e.t0 || 1090 === e.t0 || 1135 === e.t0 ? 11 : 13;
                            break;

                          case 11:
                            return this.$store.commit("common/changeMid", this.$utils.cache.getLocalCache("mid") || c.DEFAULT_MID), 
                            e.abrupt("break", 14);

                          case 13:
                            this.$store.commit("common/changeMid", c.DEFAULT_MID);

                          case 14:
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                onHide: function() {},
                globalData: function() {
                    return {
                        a: "I am global data",
                        beason: o(386)
                    };
                }
            };
        }).call(this, o(13).default);
    },
    173: function(e, t, o) {},
    20: function(e, t, o) {
        var n, r, a, i, s, u, c, p, f;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LOGIN_TYPE = t.LOGISTIC_STATUS = t.CouponStatus = t.CouponPreferential = t.COLOR = t.OrderType = t.OrderState = t.PhotoState = t.MEGALO_ENV = void 0, 
        (n = t.MEGALO_ENV || (t.MEGALO_ENV = {})).WECHAT = "wechat", n.SWAN = "swan", n.ALIPAY = "alipay", 
        n.TT = "tt", n.WEB = "web", (r = t.PhotoState || (t.PhotoState = {})).NEW = "NEW", 
        r.CHECKING = "CHECKING", r.CHECK_OK = "CHECK_OK", r.CHECK_FAIL = "CHECK_FAIL", r.CHECK_ABNORMAL = "CHECK_ABNORMAL", 
        r.DEALING = "DEALING", r.DEAL_OK = "DEAL_OK", r.DEAL_FAIL = "DEAL_FAIL", r.COMFIRM_FT_PAY_FAIL = "COMFIRM_FT_PAY_FAIL", 
        r.DEAL_RECEIPT_ING = "DEAL_RECEIPT_ING", r.DEAL_RECEIPT_OK = "DEAL_RECEIPT_OK", 
        r.DEAL_RECEIPT_FAIL = "DEAL_RECEIPT_FAIL", r.REFINEMENT_FAIL = "REFINEMENT_FAIL", 
        (a = t.OrderState || (t.OrderState = {})).WAITING_PAY = "WAITING_PAY", a.CANCEL = "CANCEL", 
        a.IS_PAY = "IS_PAY", a.REFUND = "REFUND", a.REFUNDING = "REFUNDING", a.PAY_FAILED = "PAY_FAILED", 
        a.WAITING_RECEIPT = "WAITING_RECEIPT", a.PARTIAL_REFUNDING = "PARTIAL_REFUNDING", 
        a.PARTIAL_REFUND = "PARTIAL_REFUND", (i = t.OrderType || (t.OrderType = {})).ELECTRON = "ELECTRON", 
        i.PAPER = "PAPER", i.FAST_PAPER = "FAST_PAPER", i.SHOP_PAPER = "SHOP_PAPER", (s = t.COLOR || (t.COLOR = {})).RED = "#970013", 
        s.BLUE = "#81cfff", s.WHITE = "#fff", (u = t.CouponPreferential || (t.CouponPreferential = {})).DISCOUNT = "DISCOUNT", 
        u.EXCHANGE = "EXCHANGE", u.REDUCTION = "REDUCTION", (c = t.CouponStatus || (t.CouponStatus = {})).NEW = "NEW", 
        c.GOT = "GOT", c.USED = "USED", c.EXPIRED = "EXPIRED", (p = t.LOGISTIC_STATUS || (t.LOGISTIC_STATUS = {})).WAIT_DELIVERY = "WAIT_DELIVERY", 
        p.IS_DELIVERY = "IS_DELIVERY", p.IS_RECEIVED = "IS_RECEIVED", (f = t.LOGIN_TYPE || (t.LOGIN_TYPE = {})).WINXIN_H5 = "WINXIN_H5", 
        f.WINXIN_APP = "WINXIN_APP", f.ALI_H5 = "ALI_H5", f.ALI_APP = "ALI_APP", f.H5 = "H5", 
        f.THIRD_API = "THIRD_API";
    },
    28: function(t, o, n) {
        (function(t) {
            function r(t) {
                return "string" == typeof t && "" === t.trim() || ("object" != (void 0 === t ? "undefined" : e(t)) || !Array.isArray(t) || !t.length) && null == t;
            }
            function a(e, t) {
                return {
                    data: e,
                    exp: Number.isFinite(t) ? Date.now() + t : "Infinity"
                };
            }
            function i(e) {
                return r(e) ? null : e.hasOwnProperty("exp") && e.hasOwnProperty("data") ? e && "Infinity" !== e.exp && e.exp < Date.now() ? null : e.data : e;
            }
            function s() {
                this.clearExpireAll();
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var u = n(14), c = new Map(), p = new (s.prototype.setTempCache = function(e, t, o) {
                void 0 === o && (o = 1 / 0), r(t) ? c.delete(e) : c.set(e, a(t, o));
            }, s.prototype.getTempCache = function(e) {
                var t = i(c.get(e));
                return r(t) && c.delete(e), t;
            }, s.prototype.setLocalCache = function(e, o, n) {
                r(o) ? t.removeStorage({
                    key: e
                }) : t.setStorageSync(e, a(o, n));
            }, s.prototype.getLocalCache = function(e) {
                var o = i(t.getStorageSync(e));
                return r(o) && t.removeStorage({
                    key: e
                }), o;
            }, s.prototype.clearExpireAll = function() {
                return u.__awaiter(this, void 0, void 0, function() {
                    var e, o = this;
                    return u.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return Date.now(), [ 4, t.getStorageInfo() ];

                          case 1:
                            return e = n.sent().keys, [ 4, Promise.all(e.map(function(e) {
                                return u.__awaiter(o, void 0, void 0, function() {
                                    return u.__generator(this, function(t) {
                                        return this.getLocalCache(e), [ 2 ];
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
    37: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.APIs = void 0;
        var n = o(14), r = n.__importDefault(o(65)), a = n.__importDefault(o(95)), i = n.__importDefault(o(96)), s = n.__importDefault(o(97)), u = n.__importDefault(o(98)), c = n.__importDefault(o(99)), p = n.__importDefault(o(100)), f = n.__importDefault(o(101)), l = n.__importDefault(o(102)), d = n.__importDefault(o(74)), h = n.__importDefault(o(80)), g = new (t.APIs = function() {
            this.aliPayApis = new a.default(r.default), this.aliPayAppApis = new i.default(r.default), 
            this.cmbApis = new s.default(r.default), this.userApis = new u.default(r.default), 
            this.photoApis = new c.default(r.default), this.commonApis = new p.default(r.default), 
            this.orderApis = new f.default(r.default), this.weChatApis = new l.default(r.default), 
            this.weAppApis = new d.default(r.default), this.couponApis = new h.default(r.default);
        })();
        t.default = g;
    },
    376: function(e, t, o) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var r = n(o(377)), a = n(o(22)), i = n(o(389)), s = n(o(397)), u = n(o(38)), c = n(o(87)), p = n(o(67)), f = n(o(37)), l = n(o(84)), d = o(399);
        a.default.use(i.default), a.default.use(s.default, {
            tabBars: []
        }), a.default.prototype.$store = u.default, a.default.prototype.$toast = c.default, 
        a.default.prototype.$utils = p.default, a.default.prototype.$apis = f.default, a.default.prototype.$buriedPoint = l.default, 
        a.default.mixin(d.mixin), r.default.mpType = "app", new a.default(r.default).$mount(), 
        a.default.config.errorHandler = function(e, t, o) {
            l.default.recordLog({
                operateCode: "onerror",
                errorInfo: {
                    type: "VUE_ERROR",
                    error: e,
                    info: o
                }
            });
        };
    },
    377: function(e, t, o) {
        o.r(t);
        var n = o(171);
        for (var r in n) "default" !== r && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(r);
        o(388);
        var a = o(0), i = Object(a.a)(n.default, void 0, void 0, !1, null, null, null);
        i.options.__file = "src/App.vue", t.default = i.exports;
    },
    38: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(14), r = n.__importDefault(o(22)), a = n.__importDefault(o(23)), i = n.__importDefault(o(94)), s = n.__importDefault(o(90));
        r.default.use(a.default);
        var u = new a.default.Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {
                auth: i.default,
                common: s.default
            }
        });
        t.default = u;
    },
    386: function(t, o, n) {
        function r(e, t, o) {
            var n;
            e[t] ? (n = e[t], e[t] = function(e) {
                o.call(this, e, t), n.call(this, e);
            }) : e[t] = function(e) {
                o.call(this, e, t);
            };
        }
        function a(e, t) {
            var o;
            void 0 !== e && void 0 !== e[1] && (wx.setStorageSync(h.prefix + "share", JSON.stringify(e[1])), 
            o = e[1].success, e[1].success = function(e) {
                var t, n, r;
                "object" == d(e.shareTickets) && (t = new Date().getTime(), n = [ {
                    weappPageName: getCurrentPages().pop().__route__,
                    count: 1,
                    start: t,
                    name: "beacon_shareappmessage",
                    params: {}
                } ], (r = JSON.parse(wx.getStorageSync(h.prefix + "share"))).shareTickets = JSON.stringify(e.shareTickets), 
                l(4, t, 0, [], n, null, encodeURIComponent(JSON.stringify(r)))), void 0 !== o && o(e);
            });
        }
        function i() {
            return new Date().getTime();
        }
        function s(e) {
            return (1e6 * new Date() + Math.floor(1e6 * Math.random())).toString(e) || "";
        }
        function u() {
            h.conf.getLocation && wx.getLocation({
                type: h.conf.locationType || "wgs84",
                success: function(e) {
                    wx.setStorageSync(h.prefix + h.lt, JSON.stringify(e));
                }
            });
        }
        function c() {
            h.conf.getUserInfo && wx.getUserInfo({
                withCredentials: !1,
                success: function(e) {
                    var t = e.userInfo;
                    t.nickName = encodeURIComponent(t.nickName), wx.setStorageSync(h.prefix + h.ui, JSON.stringify(t));
                },
                fail: function() {}
            });
        }
        function p() {
            null != h.conf.channelId && "" != h.conf.channelId || null == h.options || void 0 === h.options.query || !h.options.query.hasOwnProperty("bea_channel_id") || (h.conf.channelId = h.options.query.bea_channel_id), 
            h.serverUrl = "https://" + (h.conf.isDebug ? "jrlts" : "otheve") + ".beacon.qq.com/analytics/upload?tp=weapp", 
            u(), c(), wx.getNetworkType({
                success: function(e) {
                    wx.setStorageSync(h.prefix + h.nt, e.networkType);
                }
            }), h.opid = wx.getStorageSync(h.prefix + h.oik), h.unid = wx.getStorageSync(h.prefix + h.uik);
        }
        function f(e, t, o, n) {
            (!t || void 0 === t || t <= 0) && (t = new Date().getTime());
            var r = getCurrentPages(), a = 0, i = [];
            r && 0 < r.length && (a = 0 === o ? 0 : t - o, i = [ {
                name: r.pop().__route__,
                start: t,
                duration: a,
                refer: ""
            } ]), l(e, t, a, i, n);
        }
        function l(e, t, o, n, r, a) {
            (!t || void 0 === t || t <= 0) && (t = new Date().getTime());
            var i, u = [ {
                type: 2,
                data: {
                    id: s(32),
                    start: t,
                    status: e,
                    duration: o || 0,
                    pages: n || [],
                    events: r || []
                }
            } ], c = wx.getSystemInfoSync(), p = ("" == (i = wx.getStorageSync(h.prefix + h.u)) && (i = s(36), 
            wx.setStorageSync(h.prefix + h.u, i)), i);
            a && void 0 !== a && "" != a || h.options && (a = h.options.scene);
            var f = {
                deviceId: p,
                appkey: h.conf.appKey,
                versionCode: h.conf.version,
                initTime: t,
                scene: a,
                channelID: h.conf.channelId,
                sdkVersion: h.sdkVersion,
                pixel: c.screenWidth + "*" + c.screenHeight + "*" + c.pixelRatio,
                language: c.language,
                model: encodeURIComponent(c.model),
                wxVersion: c.version,
                networkType: wx.getStorageSync(h.prefix + h.nt) || "4g",
                system: encodeURIComponent(c.system),
                platform: encodeURIComponent(c.platform),
                windowArea: c.windowWidth + "*" + c.windowHeight + "*" + c.pixelRatio,
                query: JSON.stringify(h.options),
                opid: h.opid,
                unid: h.unid,
                userInfo: h.conf.getUserInfo && wx.getStorageSync(h.prefix + h.ui) || "",
                location: h.conf.getLocation && wx.getStorageSync(h.prefix + h.lt) || "",
                msgs: u
            };
            wx.request({
                url: h.serverUrl,
                data: f,
                method: "POST"
            });
        }
        var d = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, h = {
            options: null,
            serverUrl: null,
            opid: null,
            unid: null,
            conf: n(387),
            prefix: "beacon_",
            sdkVersion: "weapp_v1.0.7",
            u: "u",
            ui: "ui",
            lt: "lt",
            nt: "nt",
            oik: "oik",
            uik: "uik",
            atl: 0,
            ats: 0,
            ptl: 0,
            pts: 0,
            appLaunch: function(e) {
                0 < arguments.length && null != e && (h.options = e), h.conf.beforeLoad(h.options), 
                h.conf.appKey && void 0 !== h.conf.appKey && 0 < h.conf.appKey.length && h.conf.version && void 0 !== h.conf.version && 0 < h.conf.version.length && (p(), 
                this.atl = i(), f(1, this.atl, 0, []));
            },
            appShow: function(e) {
                0 < arguments.length && null != e && (h.options = e), p(), this.ats = i();
            },
            appHide: function() {},
            pageLoad: function() {
                var e, t, o = getCurrentPages().pop();
                this.ptl = i(), f(5, this.ptl, 0, []), h.conf.onPullDownRefresh && (t = o.onPullDownRefresh, 
                o.onPullDownRefresh = function() {
                    h.onEvent("beacon_pulldownrefresh"), t.call(this, arguments);
                }), h.conf.onReachBottom && (e = o.onReachBottom, o.onReachBottom = function() {
                    h.onEvent("beacon_reachbottom"), e.call(this, arguments);
                });
            },
            pageUnload: function() {
                f(6, 0, this.ptl, []);
            },
            pageShow: function() {
                this.pts = i(), f(2, this.pts, 0, []);
            },
            pageHide: function() {
                f(4, 0, this.pts, []);
            },
            onEvent: function(e, t) {
                var o = new Date().getTime();
                l(4, o, 0, [], [ {
                    weappPageName: getCurrentPages().pop().__route__,
                    count: 1,
                    start: o,
                    name: e,
                    params: t || {}
                } ]);
            },
            setAppKey: function(e) {
                h.conf.appKey = e;
            },
            setChannelId: function(e) {
                h.conf.channelId = e;
            },
            setOpenid: function(e) {
                e && 0 < e.length && (h.opid = e, wx.setStorageSync(h.prefix + h.oik, e));
            },
            setUnionid: function(e) {
                e && 0 < e.length && (h.unid = e, wx.setStorageSync(h.prefix + h.uik, e));
            },
            setGetLocation: function(e) {
                h.conf.getLocation = !0 === e, !0 === e && u();
            },
            setGetUserInfo: function(e) {
                h.conf.getUserInfo = !0 === e, !0 === e && c();
            }
        }, g = App;
        App = function(e) {
            r(e, "onLaunch", h.appLaunch), r(e, "onShow", h.appShow), r(e, "onHide", h.appHide), 
            g(e);
        };
        var m = Page;
        Page = function(e) {
            var t, o, n, i;
            r(e, "onLoad", h.pageLoad), r(e, "onUnload", h.pageHide), r(e, "onShow", h.pageShow), 
            r(e, "onHide", h.pageHide), void 0 !== e.onShareAppMessage && (n = a, (t = e)[o = "onShareAppMessage"] ? (i = t[o], 
            t[o] = function(e) {
                var t = i.call(this, e);
                return n.call(this, [ e, t ], o), t;
            }) : t[o] = function(e) {
                n.call(this, e, o);
            }), m(e);
        }, t.exports = h;
    },
    387: function(e, t, o) {
        var n, r = (n = o(22)) && n.__esModule ? n : {
            default: n
        }, a = {
            appKey: r.default.prototype.$store.state.common.beaconKey,
            version: "1.0.2",
            channelId: r.default.prototype.$store.state.common.mid,
            getLocation: !0,
            locationType: "wgs84",
            getUserInfo: !1,
            onPullDownRefresh: !0,
            onReachBottom: !0,
            isDebug: !1,
            beforeLoad: function() {}
        };
        e.exports = a;
    },
    388: function(e, t, o) {
        var n = o(173);
        o.n(n).a;
    },
    399: function(e, t, o) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, o) {
                    return function n(r, a) {
                        try {
                            var i = t[r](a), s = i.value;
                        } catch (r) {
                            return void o(r);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            n("next", e);
                        }, function(e) {
                            n("throw", e);
                        });
                        e(s);
                    }("next");
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.mixin = void 0;
        var a = n(o(19)), i = n(o(22)), s = n(o(91)), u = n(o(67)), c = n(o(83)), p = {
            data: function() {
                return {
                    $currentPage: getCurrentPages().slice(-1).pop()
                };
            },
            onShareAppMessage: function() {
                return {
                    title: "提供回执，比相馆便宜，省时",
                    path: "/pages/home/Home?mid=" + i.default.prototype.$store.state.common.mid,
                    imageUrl: "https://c01.parameters.cn/mini-program/images/share.jpg"
                };
            },
            methods: {
                __handleGlobalAuthDialogGetUserInfo: function(e) {
                    var t = this;
                    return r(a.default.mark(function o() {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.prev = 0, e && e.detail && "getUserInfo:ok" === e.detail.errMsg) return t.next = 4, 
                                u.default.getFreshCode();
                                t.next = 7;
                                break;

                              case 4:
                                return n = t.sent, t.next = 7, s.default.authUserInfo({
                                    code: n,
                                    encryptedData: e.detail.encryptedData,
                                    iv: e.detail.iv,
                                    rawData: e.detail.rawData,
                                    signature: e.detail.signature
                                });

                              case 7:
                                c.default.close(), t.next = 13;
                                break;

                              case 10:
                                t.prev = 10, t.t0 = t.catch(0);

                              case 13:
                                return t.prev = 13, u.default.refreshAuthCode(), t.finish(13);

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }, o, t, [ [ 0, 10, 13, 16 ] ]);
                    }))();
                }
            }
        };
        t.mixin = p;
    },
    49: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            parseJson: !0,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            baseURL: "https://m.parameters.cn",
            timeout: 3e4,
            withCredentials: !1
        };
    },
    65: function(t, o, n) {
        (function(t) {
            function r() {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(e) {
                        switch (e.label) {
                          case 0:
                            u.default.loading({
                                duration: 0,
                                message: "登录已失效,正在重新登录",
                                forbidClick: !0,
                                selector: "#toast"
                            }), e.label = 1;

                          case 1:
                            return e.trys.push([ 1, 4, 5, 6 ]), [ 4, y.default.refreshAuthCode() ];

                          case 2:
                            return e.sent(), [ 4, function() {
                                return s.__awaiter(this, void 0, void 0, function() {
                                    var e, o;
                                    return s.__generator(this, function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return [ 4, t.getSetting({}) ];

                                          case 1:
                                            return n.sent().authSetting["scope.userInfo"] ? [ 4, t.getUserInfo({
                                                withCredentials: !0
                                            }) ] : [ 3, 12 ];

                                          case 2:
                                            return e = n.sent(), [ 4, y.default.getFreshCode() ];

                                          case 3:
                                            if (!((o = n.sent()) && e.hasOwnProperty("encryptedData") && e.hasOwnProperty("iv") && e.hasOwnProperty("rawData") && e.hasOwnProperty("signature"))) return [ 3, 10 ];
                                            n.label = 4;

                                          case 4:
                                            return n.trys.push([ 4, 6, 7, 9 ]), [ 4, m.default.authUserInfo({
                                                code: o,
                                                encryptedData: e.encryptedData,
                                                iv: e.iv,
                                                rawData: e.rawData,
                                                signature: e.signature
                                            }) ];

                                          case 5:
                                          case 6:
                                            return n.sent(), [ 3, 9 ];

                                          case 7:
                                            return [ 4, y.default.refreshAuthCode() ];

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
                            return e.sent(), [ 3, 6 ];

                          case 4:
                            return e.sent(), g.default.alert({
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
            function a(e) {
                return i(e.data);
            }
            function i(e) {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            switch (e.code) {
                              case 200:
                                return [ 3, 1 ];

                              case 4023:
                              case 4004:
                                return [ 3, 2 ];
                            }
                            return [ 3, 4 ];

                          case 1:
                            return e.mid && e.mid !== f.default.state.common.mid && f.default.commit("common/changeMid", e.mid), 
                            [ 2, e ];

                          case 2:
                            return [ 4, r() ];

                          case 3:
                            return o.sent(), u.default.success("登录成功"), t.startPullDownRefresh(), [ 3, 5 ];

                          case 4:
                            u.default({
                                message: e.message,
                                duration: 2e3,
                                position: "bottom",
                                selector: "#toast"
                            }), o.label = 5;

                          case 5:
                            return [ 2, Promise.reject(e) ];
                        }
                    });
                });
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.responseIntercetor = o.responseMainIntercetor = void 0;
            var s = n(14), u = s.__importDefault(n(87)), c = s.__importDefault(n(88)), p = s.__importDefault(n(89)), f = s.__importDefault(n(38)), l = s.__importDefault(n(49)), d = s.__importDefault(n(73)), h = s.__importDefault(n(28)), g = s.__importDefault(n(83)), m = s.__importDefault(n(91)), y = s.__importDefault(n(67)), _ = new c.default(p.default(d.default));
            _.config = l.default, _.interceptors.request.use(function(t) {
                return s.__awaiter(void 0, void 0, void 0, function() {
                    return s.__generator(this, function(o) {
                        return l.default.headers.appid = f.default.state.common.mid || "", l.default.headers.thirdAppId = f.default.state.common.weChatAppID || "", 
                        l.default.headers.token = f.default.state.auth.token, l.default.headers.userId = f.default.state.auth.userId, 
                        l.default.headers.vid = h.default.getLocalCache("vid") || "", "object" == e(l.default.body) && Object.keys(l.default.body).forEach(function(e) {
                            void 0 !== l.default.body[e] && "undefined" !== l.default.body[e] || delete l.default.body[e];
                        }), Object.assign(t, l.default), "object" == e(l.default.body) && Object.keys(l.default.body).forEach(function(e) {
                            var t = l.default.body[e];
                            void 0 !== t && "" !== t && null !== t && "undefined" !== t || delete l.default.body[e];
                        }), [ 2, t ];
                    });
                });
            }), _.interceptors.response.use(function(e) {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(t) {
                        return l.default.headers.vid || (l.default.headers.vid = e.data.vid, h.default.setLocalCache("vid", e.data.vid, 1 / 0)), 
                        [ 2 ];
                    });
                });
            }, function(e) {
                return u.default({
                    message: "网络错误请稍后重试",
                    position: "bottom",
                    selector: "#toast"
                }), e;
            }), _.interceptors.response.use(a), o.default = _, o.responseMainIntercetor = a, 
            o.responseIntercetor = i;
        }).call(this, n(13).default);
    },
    67: function(e, t, o) {
        (function(e) {
            function n() {
                this.cache = a.default, this.getCompressUtil = s.getCompressUtil, this.systemInfo = null;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(14), a = r.__importDefault(o(28)), i = r.__importDefault(o(37)), s = o(93), u = o(20), c = r.__importDefault(o(84)), p = (n.prototype.getLocation = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, o, n, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return (t = a.default.getLocalCache("location")) ? [ 2, t ] : [ 3, 1 ];

                          case 1:
                            return c.default.recordLog({
                                operateCode: "home_location_flame"
                            }), [ 4, e.getLocation() ];

                          case 2:
                            return o = r.sent(), [ 4, i.default.commonApis.getCity({
                                longitude: o.longitude,
                                latitude: o.latitude
                            }) ];

                          case 3:
                            return n = r.sent().data, s = {
                                longitude: o.longitude,
                                latitude: o.latitude,
                                city: n.city.name
                            }, a.default.setLocalCache("location", s, 72e5), [ 2, s ];
                        }
                    });
                });
            }, n.prototype.getAllCity = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return (e = a.default.getLocalCache("allCity")) ? [ 2, e ] : [ 3, 1 ];

                          case 1:
                            return [ 4, i.default.commonApis.getCityList({
                                type: 2
                            }) ];

                          case 2:
                            return t = o.sent().data, a.default.setLocalCache("allCity", t, 1 / 0), [ 2, t ];
                        }
                    });
                });
            }, n.prototype.getCurrentPage = function() {
                return getCurrentPages().slice(-1).pop();
            }, n.prototype.getSource = function() {
                switch (e.getEnv()) {
                  case u.MEGALO_ENV.WECHAT:
                    return "WEIXIN_APP";

                  case u.MEGALO_ENV.ALIPAY:
                    return "ALI_APP";
                }
            }, n.prototype.getColorCodeByColorId = function(e) {
                switch (e) {
                  case "1":
                    return u.COLOR.RED;

                  case "2":
                    return u.COLOR.WHITE;

                  case "3":
                    return u.COLOR.BLUE;

                  default:
                    return "";
                }
            }, n.prototype.resizeOSSImage = function(t, o) {
                return this.systemInfo || (this.systemInfo = e.getSystemInfoSync()), t + "?x-oss-process=image/auto-orient,1/interlace,1/resize,m_lfit,w_" + Math.floor(o / 750 * this.systemInfo.windowWidth * this.systemInfo.pixelRatio);
            }, n.prototype.getFreshCode = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([ 0, 2, , 4 ]), [ 4, e.checkSession() ];

                          case 1:
                            if (o.sent(), t = a.default.getTempCache("authCode")) return [ 2, t ];
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
                    var t;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return [ 4, e.login() ];

                          case 1:
                            return t = o.sent().code, a.default.setTempCache("authCode", t), [ 2, t ];
                        }
                    });
                });
            }, n);
            t.default = new p();
        }).call(this, o(13).default);
    },
    68: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BEACON_KEY = t.WEAPP_ID = t.DEFAULT_MID = void 0, t.DEFAULT_MID = "cs044cea2fd12a4681", 
        t.WEAPP_ID = "wxc208a30b208e59ce", t.BEACON_KEY = "MA1AD2R83EFACK";
    },
    73: function(e, t, o) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = o(14);
            t.default = function(t, o) {
                return n.__awaiter(void 0, void 0, void 0, function() {
                    var r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return [ 4, e.request({
                                url: t.url,
                                data: t.body,
                                header: t.headers,
                                method: t.method,
                                dataType: t.dataType,
                                responseType: t.responseType
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
    74: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(e, t) {
            return this.request.post("/params/user/weixinAppLogin", e, t);
        }, n.prototype.pay = function(e) {
            return this.request.post("/params/weiXinPayApi/weiXinPay", e);
        }, n.prototype.decryptWxUserInfo = function(e) {
            return this.request.post("/params/photoApi/decryptWxUserInfo", e);
        }, n);
        t.default = r;
    },
    80: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GetCouponListParamsType = void 0, (r = t.GetCouponListParamsType || (t.GetCouponListParamsType = {}))[r.NORMAL = 1] = "NORMAL", 
        r[r.INVALID = 2] = "INVALID";
        var a = (n.prototype.getCouponList = function(e, t) {
            return this.request.post("/params/myCoupon/list", e, t);
        }, n.prototype.getOrderCoupon = function(e, t) {
            return this.request.post("/params/orderCoupon/list", e, t);
        }, n.prototype.getCouponExplain = function() {
            return this.request.get("/params/myCoupon/explain");
        }, n.prototype.exchange = function(e) {
            return this.request.post("/params/redeemCode/exchange", e);
        }, n.prototype.getRedeemCode = function(e) {
            return this.request.post("/params/redeemCode/get", e);
        }, n);
        t.default = a;
    },
    83: function(e, t, o) {
        function n(e) {
            return e = Object.assign(Object.assign({}, n.currentOptions), e), new Promise(function(t, o) {
                var n, a = (e.context || (n = getCurrentPages())[n.length - 1]).selectComponent(e.selector);
                delete e.context, delete e.selector, a && (a.setData(Object.assign({
                    onCancel: o,
                    onConfirm: t
                }, e)), r.push(a));
            });
        }
        Object.defineProperty(t, "__esModule", {
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
        }, (n.alert = n).confirm = function(e) {
            return n(Object.assign({
                showCancelButton: !0
            }, e));
        }, n.close = function() {
            r.forEach(function(e) {
                e.close();
            }), r = [];
        }, n.stopLoading = function() {
            r.forEach(function(e) {
                e.stopLoading();
            });
        }, n.setDefaultOptions = function(e) {
            Object.assign(n.currentOptions, e);
        }, (n.resetDefaultOptions = function() {
            n.currentOptions = Object.assign({}, n.defaultOptions);
        })(), t.default = n;
    },
    84: function(e, t, o) {
        (function(e) {
            function n() {
                this.queue = [], this.isLoadedCache = !1, this.throttleUpload = c.throttle(5e3, this.upload);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(14), a = r.__importDefault(o(37)), i = r.__importDefault(o(66)), s = r.__importDefault(o(28)), u = r.__importDefault(o(38)), c = o(161), p = o(68), f = o(162), l = (n.prototype.recordLog = function(e) {
                var t;
                return r.__awaiter(this, void 0, void 0, function() {
                    var o, n, a, c, l, d, h, g, m;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            this.isLoadedCache || (this.queue = s.default.getLocalCache("BURIED_POINT") || [], 
                            this.isLoadedCache = !0), r.label = 1;

                          case 1:
                            return r.trys.push([ 1, 3, , 4 ]), o = u.default.state.common.mid || s.default.getLocalCache("mid"), 
                            n = s.default.getLocalCache("vid"), a = u.default.state.auth.userId, c = u.default.state.auth.userInfo.mobile, 
                            [ 4, this.getSystemInfo() ];

                          case 2:
                            return l = r.sent(), d = l.system.split(" "), h = d[0], g = d[1], m = {
                                nanoid: f(8),
                                time: i.default().format("YYYY-MM-DD HH:mm:ss SSS"),
                                vid: n,
                                userId: a,
                                mobile: c,
                                os: h.toUpperCase(),
                                osVersion: g,
                                ver: "2.1",
                                channel: o,
                                location: null === (t = u.default.state.common.city) || void 0 === t ? void 0 : t.name,
                                locationDetails: this.getLocationDetails(),
                                appid: p.WEAPP_ID,
                                systemInfo: l
                            }, Object.assign(m, e), this.appendData(m), this.throttleUpload(), [ 3, 4 ];

                          case 3:
                            return r.sent(), [ 2 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, n.prototype.appendData = function(e) {
                this.queue.push(e), this.updateCache();
            }, n.prototype.upload = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var e, t, o = this;
                    return r.__generator(this, function(n) {
                        switch (n.label) {
                          case 0:
                            n.label = 1;

                          case 1:
                            return n.trys.push([ 1, 3, , 4 ]), e = this.queue.map(function(e) {
                                return e.nanoid;
                            }), t = {
                                jsonArrData: JSON.stringify(this.queue)
                            }, [ 4, a.default.commonApis.recordLog(t, {
                                ignoreErrorToast: !0
                            }) ];

                          case 2:
                            return n.sent(), this.queue.forEach(function(t, n) {
                                e.includes(t.nanoid) && delete o.queue[n];
                            }), this.queue = this.queue.filter(function(e) {
                                return e;
                            }), this.updateCache(), [ 3, 4 ];

                          case 3:
                            return n.sent(), [ 2 ];

                          case 4:
                            return [ 2 ];
                        }
                    });
                });
            }, n.prototype.updateCache = function() {
                var e = i.default().add(1, "date").hour(0).minute(0).second(0);
                s.default.setLocalCache("BURIED_POINT", this.queue, e.unix());
            }, n.prototype.getLocationDetails = function() {
                var e, t = null !== (e = s.default.getTempCache("LOCATION")) && void 0 !== e ? e : null;
                return t ? {
                    horizontalAccuracy: t.horizontalAccuracy,
                    accuracy: t.accuracy,
                    altitude: t.altitude,
                    latitude: t.latitude,
                    longitude: t.longitude
                } : null;
            }, n.prototype.getSystemInfo = function() {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return r.__generator(this, function(o) {
                        switch (o.label) {
                          case 0:
                            return [ 4, e.getSystemInfo() ];

                          case 1:
                            return [ 2, {
                                brand: (t = o.sent()).brand,
                                model: t.model,
                                pixelRatio: t.pixelRatio,
                                windowWidth: t.windowWidth,
                                windowHeight: t.windowHeight,
                                screenWidth: t.screenWidth,
                                screenHeight: t.screenHeight,
                                statusBarHeight: t.statusBarHeight,
                                language: t.language,
                                system: t.system,
                                version: t.version,
                                albumAuthorized: t.albumAuthorized,
                                notificationAuthorized: t.notificationAuthorized,
                                notificationAlertAuthorized: t.notificationAlertAuthorized,
                                notificationBadgeAuthorized: t.notificationBadgeAuthorized,
                                notificationSoundAuthorized: t.notificationSoundAuthorized,
                                cameraAuthorized: t.cameraAuthorized,
                                locationAuthorized: t.locationAuthorized,
                                microphoneAuthorized: t.microphoneAuthorized,
                                locationEnabled: t.locationEnabled,
                                wifiEnabled: t.wifiEnabled,
                                SDKVersion: t.SDKVersion
                            } ];
                        }
                    });
                });
            }, n);
            t.default = new l();
        }).call(this, o(13).default);
    },
    87: function(e, t, o) {
        function n(e) {
            var t = Object.assign({}, i, e);
            "string" == typeof e && (t = Object.assign(t, {
                message: e
            })), n.show(t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = (r = o(67)) && r.__esModule ? r : {
            default: r
        }, i = {
            show: !0,
            message: "",
            duration: 2e3,
            position: "bottom",
            type: "text",
            mask: !1,
            forbidClick: !1
        };
        n.show = function(e) {
            var t, o = a.default.getCurrentPage().rootVM, n = "string" == typeof e ? {
                options: e
            } : e;
            !o || (t = o.$refs.toast) && t.setOptions(Object.assign({}, i, n));
        }, [ "success", "fail", "loading" ].forEach(function(e) {
            n[e] = function(t) {
                "string" == typeof t ? n.call(n, {
                    message: t,
                    type: e,
                    position: "middle"
                }) : n.call(n, Object.assign({
                    position: "middle"
                }, t, {
                    type: e
                }));
            };
        }), n.clear = function() {
            n.show({
                show: !1
            });
        }, t.default = n;
    },
    90: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(14), r = n.__importDefault(o(28)), a = n.__importDefault(o(37)), i = o(68), s = o(20), u = n.__importDefault(o(38));
        t.default = new function() {
            this.namespaced = !0, this.state = {
                theme: "",
                city: r.default.getLocalCache("city") || {},
                tempCity: r.default.getTempCache("city") || {},
                tempPayment: r.default.getTempCache("tempPayment") || {},
                cityList: [],
                mid: r.default.getLocalCache("mid") || i.DEFAULT_MID,
                weChatAppID: "",
                beaconKey: r.default.getTempCache("beaconKey") || i.BEACON_KEY,
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
                init: function(e) {
                    Object.assign(e, {
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
                changeMid: function(e, t) {
                    e.mid = t, r.default.setLocalCache("mid", t, 2592e6);
                },
                changeWeChatAppID: function(e, t) {
                    e.weChatAppID = t, r.default.setTempCache("weChatAppID", t);
                },
                changeBeaconKey: function(e, t) {
                    e.beaconKey = t, r.default.setTempCache("beaconKey", t);
                },
                sendEmail: function(e, t) {
                    e.sendEmail = t;
                },
                downloadPreview: function(e, t) {
                    e.downloadPreview = t;
                },
                changeCity: function(e, t) {
                    e.city = t, r.default.setLocalCache("city", t, 1 / 0);
                },
                changeTempCity: function(e, t) {
                    e.tempCity = t, r.default.setTempCache("city", t, 1 / 0);
                },
                changeShowLoginAlert: function(e, t) {
                    e.city = t;
                },
                changeTempPayment: function(e, t) {
                    e.tempPayment = t, r.default.setTempCache("tempPayment", t);
                },
                changeCityList: function(e, t) {
                    e.cityList = t, r.default.setLocalCache("cityList", t, 1 / 0);
                },
                theme: function(e, t) {
                    e.theme = t;
                },
                showConfigDialog: function(e, t) {
                    e.configDialog.data = t, e.configDialog.show = !0;
                },
                hideConfigDialog: function(e, t) {
                    e.configDialog.show = !1;
                }
            }, this.actions = {
                getAllCityList: function(e) {
                    var t = e.commit, o = e.state;
                    return n.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                              case 0:
                                return o.cityList.length ? [ 2, o.cityList ] : [ 4, a.default.commonApis.getCityList() ];

                              case 1:
                                return e = n.sent().data, t("changeCityList", e), [ 2, e ];
                            }
                        });
                    });
                },
                triggerConfigDialog: function(e, t) {
                    return n.__awaiter(this, void 0, void 0, function() {
                        var o;
                        return n.__generator(this, function(i) {
                            switch (i.label) {
                              case 0:
                                return [ 4, a.default.commonApis.dialogConfig(n.__assign(n.__assign({}, t), {
                                    loginType: s.LOGIN_TYPE.WINXIN_APP,
                                    cityId: u.default.state.common.city.cityId || -1,
                                    isVisited: r.default.getTempCache("isVisited_" + t.type) ? 1 : 0
                                })) ];

                              case 1:
                                return o = i.sent().data, r.default.setTempCache("isVisited_" + t.type, "1", 1 / 0), 
                                o && e.commit("showConfigDialog", o), [ 2 ];
                            }
                        });
                    });
                }
            };
        }();
    },
    91: function(e, t, o) {
        function n() {}
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(14), a = r.__importDefault(o(73)), i = r.__importDefault(o(88)), s = r.__importDefault(o(89)), u = r.__importDefault(o(74)), c = r.__importDefault(o(37)), p = r.__importDefault(o(49)), f = r.__importDefault(o(38)), l = r.__importStar(o(65)), d = (n.prototype.login = function(e, t) {
            return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                var o, n, c;
                return r.__generator(this, function(r) {
                    return (o = new i.default(s.default(a.default))).interceptors.response.use(l.responseMainIntercetor), 
                    n = new u.default(o), c = Object.assign(t, p.default), [ 2, n.login(e, c) ];
                });
            });
        }, n.prototype.authUserInfo = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t;
                return r.__generator(this, function(o) {
                    switch (o.label) {
                      case 0:
                        return o.trys.push([ 0, 4, , 5 ]), [ 4, this.login({
                            code: e.code,
                            encryptedData: e.encryptedData,
                            iv: e.iv,
                            rawData: e.rawData,
                            signature: e.signature,
                            source: "WEIXIN_APP"
                        }) ];

                      case 1:
                        return t = o.sent().data, f.default.commit("auth/login", t), l.default.unlock(), 
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
        t.default = new d();
    },
    93: function(e, t, o) {
        (function(e) {
            function n(e, t, o) {
                this.canvasId = "", this.opt = {
                    maxWidth: 1400,
                    maxFileSize: 1024,
                    quality: .99999,
                    timeout: 2e3,
                    changeCanvasRectWaitTime: 200,
                    drawCallBackWaitTime: 200
                }, this.canvasId = e, this.ctx = wx.createCanvasContext(this.canvasId), this.changeCanvasOption = t, 
                o && (this.opt = o);
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getCompressUtil = void 0;
            var r = o(14);
            t.getCompressUtil = function(e) {
                return new a(e.canvasId, e.changeCanvasOption, e.opt);
            };
            var a = (n.prototype.compress = function(e, t) {
                var o = this;
                return new Promise(function(n, a) {
                    return r.__awaiter(o, void 0, void 0, function() {
                        var o, i, s, u;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                              case 0:
                                return setTimeout(function() {
                                    a("压缩超时");
                                }, this.opt.timeout), t && (this.opt = t), o = e.path, this.log("原图文件大小: " + e.size / 1024 + "kb"), 
                                e.size < 1024 * this.opt.maxFileSize ? (this.log("未经压缩图片文件大小已通过"), n(e.path), [ 2 ]) : [ 4, this.computedSize(o, this.opt.maxWidth) ];

                              case 1:
                                return i = r.sent(), [ 4, this.compressSize(o, i) ];

                              case 2:
                                return s = r.sent(), u = s, [ 4, this.checkCompress(u) ];

                              case 3:
                                return r.sent() ? (n(u), [ 2 ]) : [ 4, this.compressQuality(this.opt.quality, i) ];

                              case 4:
                                return u = r.sent(), [ 4, this.checkCompress(u) ];

                              case 5:
                                return r.sent() ? n(u) : a(), [ 2 ];
                            }
                        });
                    });
                });
            }, n.prototype.computedSize = function(t, o) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, s;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4, e.getImageInfo({
                                src: t
                            }) ];

                          case 1:
                            return n = r.sent(), a = n.width / n.height, i = n.width, s = n.height, o && n.width > o && (this.log("压缩宽度" + n.width + " => " + o), 
                            s = (i = o) / a), [ 2, {
                                width: i,
                                height: s
                            } ];
                        }
                    });
                });
            }, n.prototype.compressSize = function(t, o) {
                var n = this;
                return new Promise(function(a, i) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, i = this;
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
                                return s.sent(), this.ctx.drawImage(t, 0, 0, o.width, o.height), this.ctx.draw(!1, function() {
                                    return r.__awaiter(i, void 0, void 0, function() {
                                        var t;
                                        return r.__generator(this, function(r) {
                                            switch (r.label) {
                                              case 0:
                                                return this.log("开始等待绘制" + this.opt.drawCallBackWaitTime + "ms"), [ 4, this.waitTime(this.opt.drawCallBackWaitTime) ];

                                              case 1:
                                                return r.sent(), this.log("开始压缩宽度"), [ 4, e.canvasToTempFilePath({
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
                                                return t = r.sent(), this.log("压缩宽度耗时:" + (Date.now() - n) + "ms"), a(t.tempFilePath), 
                                                [ 2 ];
                                            }
                                        });
                                    });
                                }), [ 2 ];
                            }
                        });
                    });
                });
            }, n.prototype.compressQuality = function(t, o) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var n, a;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return n = Date.now(), this.log("开始压缩质量"), [ 4, e.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                width: o.width,
                                height: o.height,
                                destWidth: o.width,
                                destHeight: o.height,
                                canvasId: "canvas",
                                fileType: "jpg",
                                quality: t
                            }) ];

                          case 1:
                            return a = r.sent(), this.log("压缩质量:" + t + ", 耗时:" + (Date.now() - n) + "ms"), 
                            [ 2, a.tempFilePath ];
                        }
                    });
                });
            }, n.prototype.checkCompress = function(t) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var o, n;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4, e.getFileInfo({
                                filePath: t
                            }) ];

                          case 1:
                            return o = r.sent(), n = o.size / 1024, this.log("压缩后文件大小:" + n + "kb"), n <= this.opt.maxFileSize ? (this.log("压缩通过标准"), 
                            [ 2, !0 ]) : [ 2 ];
                        }
                    });
                });
            }, n.prototype.waitTime = function(e) {
                return new Promise(function(t) {
                    setTimeout(t, e);
                });
            }, n.prototype.log = function(e) {}, n);
        }).call(this, o(13).default);
    },
    94: function(e, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(14).__importDefault(o(28));
        t.default = new function() {
            this.namespaced = !0, this.state = {
                showLoginAlert: !1,
                openId: n.default.getLocalCache("openId") || "",
                userId: n.default.getLocalCache("userId") || "",
                token: n.default.getLocalCache("token") || "",
                unionId: n.default.getLocalCache("unionId") || "",
                userInfo: n.default.getLocalCache("userInfo") || {},
                isNeedInfo: n.default.getLocalCache("isNeedInfo") || ""
            }, this.mutations = {
                init: function(e) {
                    Object.assign(e, {
                        showLoginAlert: !1,
                        openId: "",
                        userId: "",
                        unionId: "",
                        token: "",
                        userInfo: {}
                    });
                },
                login: function(e, t) {
                    try {
                        e.userId = t.userId, e.openId = t.openId, e.token = t.token, e.userInfo = t.userInfo, 
                        e.unionId = t.unionId, n.default.setLocalCache("userId", t.userId, 1 / 0), n.default.setLocalCache("token", t.token, 1 / 0), 
                        n.default.setLocalCache("openId", t.openId, 1 / 0), n.default.setLocalCache("userInfo", t.userInfo, 1 / 0), 
                        n.default.setLocalCache("isNeedInfo", t.isNeedInfo, 1 / 0), n.default.setLocalCache("unionId", t.unionId, 1 / 0);
                    } catch (e) {}
                },
                logout: function(e, t) {
                    e.userId = "", e.openId = "", e.token = "", e.unionId = "", e.userInfo = {
                        nickName: "",
                        mobile: ""
                    }, n.default.setLocalCache("userId", null, 1 / 0), n.default.setLocalCache("token", null, 1 / 0), 
                    n.default.setLocalCache("userInfo", null, 1 / 0);
                },
                changeUserInfo: function(e, t) {
                    e.userInfo = t, n.default.setLocalCache("userInfo", t, 1 / 0);
                },
                changeIsNeedInfo: function(e, t) {
                    e.isNeedInfo = t, n.default.setLocalCache("isNeedInfo", t, 1 / 0);
                },
                changeShowLoginAlert: function(e, t) {
                    e.showLoginAlert = t;
                }
            };
        }();
    },
    95: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(e) {
            return this.request.post("/params/user/aliLogin", e);
        }, n.prototype.pay = function(e) {
            return this.request.post("/params/aliPay/aliH5Pay", e);
        }, n);
        t.default = r;
    },
    96: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(e, t) {
            return this.request.post("/params/user/aliAppLogin", e, t);
        }, n);
        t.default = r;
    },
    97: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.login = function(e) {
            return this.request.get(Object({
                M_ID: "cs044cea2fd12a4681",
                BEACON_KEY: "MA1AD2R83EFACK",
                WEAPP_ID: "wxc208a30b208e59ce"
            }).VUE_APP_CMB_API + "/cmbApi/cmbUserLogin", e);
        }, n.prototype.getLoginUrl = function(e) {
            return this.request.get(Object({
                M_ID: "cs044cea2fd12a4681",
                BEACON_KEY: "MA1AD2R83EFACK",
                WEAPP_ID: "wxc208a30b208e59ce"
            }).VUE_APP_CMB_API + "/cmbApi/getCmbLoginUrl", e);
        }, n.prototype.pay = function(e) {
            return this.request.post("/params/cmbPayApi/cmbAppPay", e);
        }, n);
        t.default = r;
    },
    98: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        var r, a;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), (a = r = r || {})[a.MALE = 0] = "MALE", a[a.FEMALE = 1] = "FEMALE";
        var i = (n.prototype.getUserInfo = function(e) {
            return this.request.get("/photoApi/getIndexPhotoType", {
                userId: e
            });
        }, n);
        t.default = i;
    },
    99: function(e, t, o) {
        function n(e) {
            this.request = e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = (n.prototype.getPhotoRecord = function(e) {
            return this.request.get("/params/photoApi/getIndexPhotoRecord", e);
        }, n.prototype.getViewPhotoRecord = function() {
            return this.request.get("/params/photoApi/getViewPhotoRecord");
        }, n.prototype.useCheckFailPhoto = function(e) {
            return this.request.post("/params/photoApi/useCheckFailPhoto", e);
        }, n.prototype.getPhotoInfo = function(e) {
            return this.request.get("/params/photoApi/getPhotoInfo", e);
        }, n.prototype.getPhotoPriceInfo = function(e) {
            return this.request.get("/params/photoApi/getPhotoPriceInfo", e);
        }, n.prototype.getPhotoTips = function(e) {
            return this.request.post("/params/photoApi/getPhotoTips ", e);
        }, n.prototype.photoPriceDetail = function(e) {
            return this.request.get("/params/photoOrder/photoPriceDetail", e);
        }, n.prototype.bindPhotoOrder = function(e) {
            return this.request.post("/params/photoApi/bindPhotoOrder", e);
        }, n.prototype.getPhotoGuide = function(e) {
            return this.request.post("/params/photoApi/getPhotoGuide", e);
        }, n.prototype.getPhotoErrorInfo = function(e) {
            return this.request.post("/params/photoApi/getPhotoErrorInfo", e);
        }, n.prototype.fillColorTask = function(e) {
            return this.request.post("/params/photoApi/fillColorTask", e);
        }, n.prototype.getSinglePhotoGuide = function(e) {
            return this.request.get("/params/photoApi/getSinglePhotoGuide", e);
        }, n.prototype.getGoodsInfoDetail = function(e) {
            return this.request.get("/params/photoOrder/goodsInfoDetail", e);
        }, n.prototype.calculatePrice = function(e) {
            return this.request.get("/params/photoOrder/calculatePrice", e);
        }, n.prototype.getGoodsStands = function(e) {
            return this.request.get("/params/photoOrder/goodsStands", e);
        }, n.prototype.getRePhotoLivingToken = function(e) {
            return this.request.get("/params/photoApi/getRePhotoLivingToken", e);
        }, n);
        t.default = r;
    }
}, [ [ 376, "runtime", "vendor" ] ] ]);
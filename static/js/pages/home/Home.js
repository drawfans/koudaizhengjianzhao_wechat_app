var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/Home" ], {
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
    109: function(t, e, o) {
        o.r(e);
        var n = o(110), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    11: function(t, e, o) {},
    110: function(t, e, o) {
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
            }, s = o(20), u = n(o(286)), c = (o(23), n(o(85))), l = n(o(27));
            e.default = {
                config: {},
                props: {
                    data: Object,
                    classes: ""
                },
                components: {
                    toast: l.default
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
                        return this.data.photoStatus === s.PhotoState.DEALING || this.data.photoStatus === s.PhotoState.DEAL_RECEIPT_ING || this.data.photoStatus === s.PhotoState.CHECK_OK && this.data.paymentStatus === s.OrderState.IS_PAY ? "相片处理中" : [ s.PhotoState.REFINEMENT_FAIL, s.PhotoState.DEAL_RECEIPT_FAIL ].includes(this.data.photoStatus) ? "相片处理失败" : this.data.photoStatusValue;
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
                        return t === s.PhotoState.DEAL_OK || t === s.PhotoState.DEAL_RECEIPT_OK || t === s.PhotoState.DEAL_RECEIPT_ING || t === s.PhotoState.CHECK_OK;
                    },
                    isAbnormal: function() {
                        return this.data.photoStatus === s.PhotoState.CHECK_ABNORMAL;
                    },
                    isFail: function() {
                        var t = this.data.photoStatus;
                        return t === s.PhotoState.CHECK_FAIL || t === s.PhotoState.DEAL_FAIL || t === s.PhotoState.COMFIRM_FT_PAY_FAIL || t === s.PhotoState.DEAL_RECEIPT_FAIL || t === s.PhotoState.REFINEMENT_FAIL;
                    },
                    isChecking: function() {
                        return this.data.photoStatus === s.PhotoState.CHECKING || this.data.photoStatus === s.PhotoState.NEW;
                    }
                },
                methods: {
                    bindThis: function(t, e) {
                        this.$buriedPoint.recordLog(a({
                            operateCode: "button" === e ? "button_photorecord_click" : "photorecord_click"
                        }, this.data, {
                            mobile: this.$store.state.auth.userInfo.mobile
                        })), t.call(this);
                    },
                    remove: function() {
                        var e = this;
                        return r(i.default.mark(function o() {
                            return i.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, c.default.confirm({
                                        title: "",
                                        message: "确认删除拍照记录？"
                                    });

                                  case 2:
                                    return o.next = 4, e.$apis.commonApis.removePhotoRecord({
                                        photoInfoId: e.data.photoInfoId
                                    });

                                  case 4:
                                    t.showToast({
                                        icon: "success",
                                        title: "删除成功"
                                    }), t.startPullDownRefresh();

                                  case 6:
                                  case "end":
                                    return o.stop();
                                }
                            }, o, e);
                        }))();
                    }
                },
                watch: {
                    data: {
                        immediate: !0,
                        deep: !0,
                        handler: function(t) {
                            var e = this;
                            return r(i.default.mark(function o() {
                                return i.default.wrap(function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                      case 0:
                                        return o.next = 2, (0, u.default)(t);

                                      case 2:
                                        e.layoutObject = o.sent;

                                      case 3:
                                      case "end":
                                        return o.stop();
                                    }
                                }, o, e);
                            }))();
                        }
                    }
                }
            };
        }).call(this, o(13).default);
    },
    111: function(t, e, o) {},
    112: function(t, e, o) {
        o.r(e);
        var n = o(113), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    113: function(t, e, o) {
        function n(t) {
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
        var r, i = (r = o(19)) && r.__esModule ? r : {
            default: r
        }, a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
            }
            return t;
        }, s = o(23);
        e.default = {
            computed: a({}, (0, s.mapState)({
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
                    return n(i.default.mark(function o() {
                        var n;
                        return i.default.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                if (!t.triggerAct) {
                                    o.next = 15;
                                    break;
                                }
                                o.t0 = t.triggerAct, o.next = "GOTO" === o.t0 ? 4 : "CLOSE" === o.t0 || "CANCEL" === o.t0 ? 6 : "GET_COUPON" === o.t0 ? 8 : 14;
                                break;

                              case 4:
                                return e.$router.push(t.triggerOpt.url), o.abrupt("break", 15);

                              case 6:
                                return e.$store.commit("common/hideConfigDialog"), o.abrupt("break", 15);

                              case 8:
                                return o.next = 10, e.$apis.commonApis.voucher();

                              case 10:
                                return (n = o.sent).data && (e.$toast.success("领取成功"), e.$store.commit("common/hideConfigDialog"), 
                                e.$store.dispatch("common/triggerConfigDialog", {
                                    type: "POPUP_COUPON"
                                })), o.abrupt("break", 15);

                              case 14:
                                return o.abrupt("break", 15);

                              case 15:
                              case "end":
                                return o.stop();
                            }
                        }, o, e);
                    }))();
                }
            }
        };
    },
    114: function(t, e, o) {},
    12: function(t, e, o) {},
    139: function(t, e, o) {
        o.r(e);
        var n = o(69), r = o(50);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(144);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/tab-bar/index.vue", e.default = s.exports;
    },
    140: function(t, e, o) {
        o.r(e);
        var n = o(72), r = o(52);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(141);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/tab-bar/tabbar/index.vue", e.default = s.exports;
    },
    141: function(t, e, o) {
        var n = o(54);
        o.n(n).a;
    },
    142: function(t, e, o) {
        o.r(e);
        var n = o(71), r = o(55);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(143);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/tab-bar/tabbar-item/index.vue", e.default = s.exports;
    },
    143: function(t, e, o) {
        var n = o(57);
        o.n(n).a;
    },
    144: function(t, e, o) {
        var n = o(58);
        o.n(n).a;
    },
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
    151: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                class: t.themeClass,
                attrs: {
                    h_: 0
                }
            }, [ o("div", {
                class: [ "photo-record", t.classes ],
                attrs: {
                    h_: 1
                }
            }, [ o("div", {
                attrs: {
                    h_: 2
                },
                on: {
                    click: function(e) {
                        t.bindThis(t.layoutObject.body.click, "body");
                    }
                }
            }, [ o("div", {
                attrs: {
                    h_: 3
                }
            }, [ o("image", {
                key: t.data.originalUrl,
                attrs: {
                    src: t.$utils.resizeOSSImage(t.data.originalUrl, 136),
                    h_: 4,
                    k_: "originalUrl"
                }
            }) ], 1), o("div", {
                attrs: {
                    h_: 6
                }
            }, [ o("div", {
                attrs: {
                    h_: 7
                }
            }, [ t._v(t._s(t.data.certificateTypeValue) + "\n          ", 8), t._ri(!(1 != t.data.isReceipt), 9) ? o("span", {
                attrs: {
                    h_: 9
                }
            }, [ o("span", {
                attrs: {
                    h_: 11
                }
            }, [ t._v(t._s(t.data.cityName), 12) ]) ]) : t._e() ]), o("div", {
                attrs: {
                    h_: 14
                }
            }, [ t._v(t._s(t.data.createTime), 15) ]), o("div", {
                attrs: {
                    h_: 17
                }
            }, [ t._ri(!!t.isChecking, 18) ? o("image", {
                attrs: {
                    h_: 18
                }
            }) : t._e(), t._ri(!t.classes, 20) ? o("span", {
                class: t.StatusClasses,
                attrs: {
                    h_: 20
                }
            }, [ t._v(t._s(t.statusText), 21) ]) : o("span", {
                class: t.StatusClasses,
                attrs: {
                    h_: 22
                }
            }, [ t._ri(!!t.isStatus, 23) ? o("image", {
                attrs: {
                    src: "/static/images/photo-record/icon_" + t.isStatus + ".png",
                    h_: 23
                }
            }) : t._e(), o("span", {
                attrs: {
                    h_: 25
                }
            }, [ t._v(t._s(t.statusText), 26) ]) ], 1) ], 1) ]), o("view", {
                attrs: {
                    h_: 28
                },
                on: {
                    click: function(e) {
                        return "button" in e || !t._k(e.keyCode, "stop", void 0, e.key, void 0) ? t.remove(e) : null;
                    }
                }
            }, [ o("image", {
                attrs: {
                    h_: 29
                }
            }) ], 1) ], 1), t._ri(!(!t.layoutObject.footerText && !t.layoutObject.button), 31) ? o("div", {
                attrs: {
                    h_: 31
                }
            }, [ o("div", {
                attrs: {
                    h_: 32
                }
            }, [ o("span", {
                attrs: {
                    h_: 33
                }
            }, [ t._v(t._s(t.layoutObject.footerText), 34) ]) ]), t._ri(!(!t.layoutObject.button || t.classes), 36) ? o("button", {
                attrs: {
                    h_: 36
                },
                on: {
                    click: function(e) {
                        t.bindThis(t.layoutObject.button.click, "button");
                    }
                }
            }, [ t._v("\n        " + t._s(t.layoutObject.button.text) + "\n      ", 37) ]) : t._ri(!!t.layoutObject.button, 38) ? o("div", {
                attrs: {
                    h_: 38
                },
                on: {
                    click: function(e) {
                        t.bindThis(t.layoutObject.button.click);
                    }
                }
            }, [ t._v("\n        " + t._s(t.layoutObject.button.text) + "\n      ", 39) ]) : t._e() ]) : t._e(), o("van-dialog", {
                attrs: {
                    h_: 41
                }
            }) ], 1) ]);
        }, r = [];
        n._withStripped = !0;
    },
    154: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("van-popup", {
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
            }, [ o("image", {
                attrs: {
                    h_: 1
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleClose);
                    }
                }
            }), t._ri(!!t.config.data, 3) ? [ t._ri(!("DEFAULT" !== t.config.data.type), 4) ? [ o("div", {
                attrs: {
                    h_: 5
                }
            }, [ t._ri(!!t.config.data.elements.eleTitle, 6) ? o("div", {
                attrs: {
                    h_: 6
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleTitle);
                    }
                }
            }, [ t._v("\n          " + t._s(t.config.data.elements.eleTitle.text) + "\n        ", 7) ]) : t._e(), t._ri(!!t.config.data.elements.eleImage, 9) ? o("div", {
                attrs: {
                    h_: 9
                }
            }, [ o("image", {
                attrs: {
                    src: t.config.data.elements.eleImage.imgUrl,
                    h_: 10
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleImage);
                    }
                }
            }) ], 1) : t._e(), t._ri(!!t.config.data.elements.eleContents, 12) ? o("div", {
                attrs: {
                    h_: 12
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleContents);
                    }
                }
            }, [ t._v("\n          " + t._s(t.config.data.elements.eleContents.text) + "\n        ", 13) ]) : t._e(), o("div", {
                attrs: {
                    h_: 15
                }
            }, [ o("view", {
                attrs: {
                    h_: 16
                }
            }, [ t._ri(!!t.config.data.elements.eleButton1, 17) ? o("van-button", {
                attrs: {
                    h_: 17
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleButton1);
                    }
                }
            }, [ t._v(t._s(t.config.data.elements.eleButton1.buttonText), 18) ]) : t._e() ], 1), o("view", {
                attrs: {
                    h_: 20
                }
            }, [ t._ri(!!t.config.data.elements.eleButton2, 21) ? o("van-button", {
                attrs: {
                    h_: 21
                },
                on: {
                    click: function(e) {
                        t.handleElementClick(t.config.data.elements.eleButton2);
                    }
                }
            }, [ t._v(t._s(t.config.data.elements.eleButton2.buttonText), 22) ]) : t._e() ], 1) ], 1) ]) ] : [ o("div", {
                attrs: {
                    h_: 24
                }
            }, [ t._ri(!!t.config.data.elements.eleImage, 25) ? o("image", {
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
    174: function(t, e, o) {
        o.r(e);
        var n = o(175), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    175: function(t, e, o) {
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
            }, s = o(23), u = n(o(285)), c = n(o(27)), l = n(o(139)), d = n(o(423)), h = n(o(85)), f = (n(o(90)), 
            n(o(291)));
            e.default = {
                name: "Home",
                components: {
                    toast: c.default,
                    PhotoRecordItem: u.default,
                    TabBar: l.default,
                    configDialog: f.default
                },
                data: function() {
                    return {
                        inOot: "",
                        customServiceInfo: {},
                        classification: this.$utils.cache.getLocalCache("/params/photoApi/getIndexPhotoType") || [],
                        photoRecord: this.$utils.cache.getLocalCache("/params/photoApi/getIndexPhotoRecord") || [],
                        config: this.$utils.cache.getLocalCache("/params/photoApi/getIndexConfig") || {
                            city: "",
                            config: [ {} ],
                            hotList: []
                        },
                        channel711: "",
                        normal: !1,
                        location: null,
                        isUserInfo: !0,
                        customSwiperHeight: [],
                        customCurrentSwiper: 0,
                        currentDot: 0,
                        photoRecordView: null,
                        showProcedures: !0,
                        notice: {
                            message: "",
                            icon: "../../../static/images/ic_noti_2.png"
                        },
                        showAgreeProtocol: !this.$utils.cache.getLocalCache("agreeProtocol"),
                        relocationDialog: {
                            false: !0
                        },
                        doctorActive: {
                            show: !1,
                            step: 0
                        }
                    };
                },
                computed: a({
                    themeClass: function() {
                        return this.$store.state.common.theme ? "theme-711" : "base";
                    }
                }, (0, s.mapState)({
                    auth: function(t) {
                        return t.auth;
                    },
                    city: function(t) {
                        return t.common.city;
                    },
                    tempCity: function(t) {
                        return t.common.tempCity;
                    },
                    userInfo: function(t) {
                        return t.auth.userInfo;
                    }
                }), {
                    sessionForm: function() {
                        return "7moor|" + this.userInfo.nickName + "|" + this.userInfo.faceUrl;
                    },
                    customConfig: function() {
                        var t = (0, d.default)(this.config.hotList, 5);
                        return a({}, this.config, {
                            hotList: [ t[0], t[1] ]
                        });
                    }
                }),
                created: function() {
                    var t = this;
                    return r(i.default.mark(function e() {
                        var o, n;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, t.$apis.commonApis.getCustomServiceInfo();

                              case 3:
                                o = e.sent, n = o.data, t.customServiceInfo = n, t.$store.dispatch("common/triggerConfigDialog", {
                                    type: "POPUP_PAGES"
                                }), e.next = 11;
                                break;

                              case 9:
                                e.prev = 9, e.t0 = e.catch(0);

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 0, 9 ] ]);
                    }))();
                },
                onShow: function() {
                    var e = this;
                    return r(i.default.mark(function o() {
                        return i.default.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                return e.$apis.commonApis.getMerchantInfo({
                                    mid: e.$store.state.common.mid || "",
                                    thirdAppId: e.$store.state.common.weChatAppID || ""
                                }).then(function(e) {
                                    var o = e.data;
                                    t.setNavigationBarTitle({
                                        title: o.remark
                                    });
                                }), o.prev = 1, o.next = 4, e.$utils.getLocation();

                              case 4:
                                e.location = o.sent, o.next = 10;
                                break;

                              case 7:
                                o.prev = 7, o.t0 = o.catch(1);

                              case 10:
                                return o.prev = 10, o.prev = 11, t.showNavigationBarLoading(), o.next = 15, e.init();

                              case 15:
                                return o.prev = 15, t.hideNavigationBarLoading(), o.finish(15);

                              case 18:
                                return o.finish(10);

                              case 19:
                              case "end":
                                return o.stop();
                            }
                        }, o, e, [ [ 1, 7, 10, 19 ], [ 11, , 15, 18 ] ]);
                    }))();
                },
                onPullDownRefresh: function() {
                    var e = this;
                    return r(i.default.mark(function o() {
                        return i.default.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                return o.prev = 0, o.next = 3, e.init();

                              case 3:
                                return o.prev = 3, t.stopPullDownRefresh(), o.finish(3);

                              case 6:
                              case "end":
                                return o.stop();
                            }
                        }, o, e, [ [ 0, , 3, 6 ] ]);
                    }))();
                },
                mounted: function() {
                    var t = this;
                    return r(i.default.mark(function e() {
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.doctorActiveCheck();

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                methods: {
                    doctorActiveCheck: function() {
                        var t = this;
                        this.$route.query.doctorActiveCode && (this.doctorActive.show = !0, this.doctorActive.step = 0, 
                        setTimeout(function() {
                            t.doctorActive.step = 1;
                        }, 4e3));
                    },
                    closeDoctorActive: function() {
                        this.doctorActive.show = !1;
                    },
                    goCoupon: function(t) {
                        var e = this;
                        return r(i.default.mark(function o() {
                            return i.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    if ("getUserInfo:ok" !== t.detail.errMsg) {
                                        o.next = 6;
                                        break;
                                    }
                                    if (e.$store.state.auth.unionId) {
                                        o.next = 4;
                                        break;
                                    }
                                    return o.next = 4, e.__handleGlobalAuthDialogGetUserInfo(t);

                                  case 4:
                                    e.closeDoctorActive(), e.$router.push("/pages/user/coupon/Index");

                                  case 6:
                                  case "end":
                                    return o.stop();
                                }
                            }, o, e);
                        }))();
                    },
                    goCustomer: function() {
                        this.$router.push("/pages/user/customerService/Index");
                    },
                    goCustomerService: function() {
                        this.$router.push("/pages/user/customerService/Index");
                    },
                    closepopup: function() {
                        this.$utils.cache.getTempCache("add") || (this.showProcedures = !1, this.$utils.cache.setTempCache("add", "1"));
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
                    init: function() {
                        var t = this;
                        return r(i.default.mark(function e() {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.getPhotoRecord(), e.next = 3, t.renderBannerAndHotList();

                                  case 3:
                                    return t.checkAnnouncement(), e.next = 6, t.renderClassification();

                                  case 6:
                                    t.$toast.clear();

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    checkAnnouncement: function() {
                        var t = this;
                        return r(i.default.mark(function e() {
                            var o, n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.notice.message = "", e.next = 3, t.$apis.commonApis.bulletin({
                                        code: "HOME_BULLETIN",
                                        cityId: t.city.cityId
                                    });

                                  case 3:
                                    o = e.sent, (n = o.data) && (n.alertMessage && h.default.alert({
                                        title: "公告",
                                        message: n.alertMessage
                                    }), t.notice.message = n.topMessage);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    getPhotoRecord: function() {
                        var t = this;
                        return r(i.default.mark(function e() {
                            var o, n, r, a;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.auth.token && "1" != t.config.isApp) return e.next = 3, t.$apis.photoApis.getViewPhotoRecord();
                                    e.next = 8;
                                    break;

                                  case 3:
                                    o = e.sent, n = o.data, t.photoRecordView = n, e.next = 15;
                                    break;

                                  case 8:
                                    if (t.auth.token && "1" == t.config.isApp) return e.next = 11, t.$apis.photoApis.getPhotoRecord({
                                        pageNum: 0,
                                        pageSize: 1
                                    });
                                    e.next = 15;
                                    break;

                                  case 11:
                                    r = e.sent, a = r.data, t.$utils.cache.setLocalCache("/params/photoApi/getIndexPhotoRecord", a, 1 / 0), 
                                    t.photoRecord = a;

                                  case 15:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    handleClick: function() {},
                    renderBannerAndHotList: function() {
                        var t = this;
                        return r(i.default.mark(function e() {
                            var o, n, r, s, u, c;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return o = t.$utils.cache.getLocalCache("location") || {}, n = {
                                        cityName: t.city.name || "",
                                        latitude: o.latitude || "",
                                        longitude: o.longitude || ""
                                    }, e.next = 5, t.$apis.commonApis.getConfig(a({
                                        configCode: "homepage_banner"
                                    }, n, {
                                        isFirst: 0 < t.city.cityId ? 0 : 1,
                                        isNew: 1
                                    }));

                                  case 5:
                                    return r = e.sent, s = r.data, e.next = 9, t.$apis.commonApis.getPageConfig({
                                        code: "channel"
                                    });

                                  case 9:
                                    if (u = e.sent, (c = u.data) && ("711_in" != c.channel && "711_ot" != c.channel || (t.inOot = c.channel, 
                                    t.$store.commit("common/theme", c.channel))), s.channel ? t.channel711 = s.channel : t.normal = !0, 
                                    "711_in" == t.$store.state.common.theme) return e.next = 17, t.$apis.commonApis.voucher();
                                    e.next = 20;
                                    break;

                                  case 17:
                                    e.sent, e.next = 21;
                                    break;

                                  case 20:
                                  case 21:
                                    t.$store.commit("common/changeCity", s.city);
                                    try {
                                        s.config = JSON.parse(s.config);
                                    } catch (e) {} finally {
                                        t.$buriedPoint.recordLog({
                                            operateCode: "home_load",
                                            getCityWay: s.city.isDefault ? s.city.isDefault : 2
                                        });
                                    }
                                    t.config = s, t.$utils.cache.setLocalCache("/params/photoApi/getIndexConfig", s, 1 / 0);

                                  case 25:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    relocation: function() {
                        this.$store.commit("common/changeCity", this.tempCity), t.startPullDownRefresh();
                    },
                    renderClassification: function() {
                        var t = this;
                        return r(i.default.mark(function e() {
                            var o, n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$apis.commonApis.getPhotoType({
                                        cityId: t.config.city.cityId || ""
                                    });

                                  case 2:
                                    o = e.sent, n = o.data, t.$utils.cache.setLocalCache("/params/photoApi/getIndexPhotoType", n, 1 / 0), 
                                    t.classification = n;

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    goPhotoRecord: function() {
                        this.$buriedPoint.recordLog({
                            operateCode: "more_photorecord_click",
                            mobile: this.$store.state.auth.userInfo.mobile
                        }), this.$router.push("/pages/photoRecord/Index");
                    },
                    goCity: function() {
                        this.$buriedPoint.recordLog({
                            operateCode: "home_location_click"
                        }), this.$router.push("/packageA/pages/chooseCity/Index");
                    },
                    handleBannerClick: function(t) {
                        "SHOW_CUSTOMER_DIALOG" === t.clickType && h.default.confirm({
                            title: "提示",
                            message: t.clickData ? t.clickData.message : "",
                            sessionFrom: this.sessionForm,
                            confirmButtonText: "确定",
                            confirmButtonOpenType: "contact",
                            showCancelButton: !1
                        }), this.$buriedPoint.recordLog({
                            operateCode: "banner_click",
                            title: t.title,
                            subtitle: t.subtitle,
                            rank: t.rank
                        });
                    },
                    goPhotoGuide: function(t) {
                        var e, o = 0 < arguments.length && void 0 !== t ? t : {};
                        (o.targetUrl || o.certificationInfoId) && (this.$buriedPoint.recordLog(a({
                            operateCode: "icon_click"
                        }, o, {
                            page: "home"
                        })), e = this.config.city, o.targetUrl ? this.$router.push({
                            path: o.targetUrl
                        }) : -1 === e.cityId && o.isReceipt ? this.$router.push({
                            path: "/packageA/pages/chooseCity/Index"
                        }) : o.isCustomSize ? this.$router.push({
                            path: "/pages/main/customPhotoSize/Index",
                            query: {
                                certificationInfoId: o.certificationInfoId
                            }
                        }) : this.$router.push({
                            path: "/pages/main/photoGuide/Index",
                            query: {
                                certificationInfoId: o.certificationInfoId
                            }
                        }));
                    },
                    goMore: function(t, e) {
                        this.$buriedPoint.recordLog({
                            operateCode: "classification_click",
                            classificationName: t || "more"
                        }), this.$router.push({
                            path: "/pages/more/Index",
                            query: {
                                rank: e || ""
                            }
                        });
                    },
                    callPhones: function() {
                        t.makePhoneCall({
                            phoneNumber: this.customServiceInfo.customTel
                        });
                    },
                    imageLoad: function(t) {
                        var e = 690 / t.detail.width * t.detail.height;
                        this.customSwiperHeight.push(e);
                    },
                    customSwiperChange: function(t) {
                        this.customCurrentSwiper = t.detail.current;
                    },
                    changeDot: function(t) {
                        this.currentDot = t.detail.current;
                    },
                    onSearchLabelClick: function() {
                        this.$buriedPoint.recordLog({
                            operateCode: "home_location_click"
                        }), this.$router.push("/packageA/pages/chooseCity/Index");
                    },
                    onSearchInputClick: function() {
                        this.$router.push({
                            path: "/pages/more/Index",
                            query: {
                                focus: !0
                            }
                        });
                    },
                    onCustomServiceClick: function() {
                        this.$buriedPoint.recordLog({
                            operateCode: "customservice_click"
                        }), this.$router.push("/pages/user/customerService/Index");
                    }
                },
                watch: {
                    tempCity: {
                        deep: !0,
                        immediate: !0,
                        handler: function(t) {
                            this.city.name !== t.name && this.city.name && t.name && !this.$utils.cache.getTempCache("changedCityAlert") && (this.relocationDialog.show = !0, 
                            this.$utils.cache.setTempCache("changedCityAlert", "1"));
                        }
                    }
                }
            };
        }).call(this, o(13).default);
    },
    176: function(t, e, o) {},
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
        var n, r, i, a, s, u, c, l, d;
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
        c.GOT = "GOT", c.USED = "USED", c.EXPIRED = "EXPIRED", (l = e.LOGISTIC_STATUS || (e.LOGISTIC_STATUS = {})).WAIT_DELIVERY = "WAIT_DELIVERY", 
        l.IS_DELIVERY = "IS_DELIVERY", l.IS_RECEIVED = "IS_RECEIVED", (d = e.LOGIN_TYPE || (e.LOGIN_TYPE = {})).WINXIN_H5 = "WINXIN_H5", 
        d.WINXIN_APP = "WINXIN_APP", d.ALI_H5 = "ALI_H5", d.ALI_APP = "ALI_APP", d.H5 = "H5", 
        d.THIRD_API = "THIRD_API";
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
            var u = n(14), c = new Map(), l = new (s.prototype.setTempCache = function(t, e, o) {
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
            o.default = l;
        }).call(this, n(13).default);
    },
    285: function(t, e, o) {
        o.r(e);
        var n = o(151), r = o(109);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(287);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/photo-record/index.vue", e.default = s.exports;
    },
    286: function(t, e, o) {
        function n(t) {
            return t ? t.split(";").filter(function(t) {
                return t;
            }).join(";") : "";
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = o(14), i = o(20), a = r.__importDefault(o(103)), s = r.__importDefault(o(85)), u = {
            strategy1: new a.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.PhotoState.CHECK_OK, i.PhotoState.DEAL_OK ]
                },
                photoOrderId: {
                    type: "number",
                    max: 0
                }
            }),
            strategy2: new a.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.PhotoState.CHECK_OK ]
                },
                photoOrderId: {
                    required: !0,
                    type: "number",
                    min: 1
                },
                paymentStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.OrderState.WAITING_PAY ]
                }
            }),
            strategy12: {
                validate: function(t, e) {
                    e(t.photoStatus === i.PhotoState.DEALING || t.photoStatus === i.PhotoState.DEAL_RECEIPT_ING || t.photoStatus === i.PhotoState.CHECK_OK && t.paymentStatus === i.OrderState.IS_PAY ? null : "不匹配strategy12");
                }
            },
            strategy3: new a.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.PhotoState.CHECK_FAIL ]
                }
            }),
            strategy4: new a.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.PhotoState.NEW, i.PhotoState.CHECKING ]
                }
            }),
            strategy5: new a.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.PhotoState.CHECK_ABNORMAL ]
                }
            }),
            strategy6: {
                validate: function(t, e) {
                    e(t.photoStatus === i.PhotoState.DEAL_OK && t.paymentStatus !== i.OrderState.WAITING_PAY || t.photoStatus === i.PhotoState.DEAL_RECEIPT_ING ? null : "不匹配strategy6");
                }
            },
            strategy7: new a.default({
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.PhotoState.DEAL_RECEIPT_OK, i.PhotoState.DEAL_OK ]
                }
            }),
            strategy8: new a.default({
                isRefilming: {
                    required: !0,
                    type: "number",
                    len: 1
                }
            }),
            strategy9: new a.default({
                isRefilming: {
                    required: !0,
                    type: "number",
                    len: 2
                }
            }),
            strategy10: new a.default({
                isRePhotoComplete: {
                    required: !0,
                    type: "number",
                    len: 1
                }
            }),
            strategy11: new a.default({
                isRePhotoComplete: {
                    required: !0,
                    type: "number",
                    len: 1
                },
                photoStatus: {
                    required: !0,
                    type: "enum",
                    enum: [ i.PhotoState.CHECK_ABNORMAL ]
                }
            })
        };
        e.default = function(t) {
            return new Promise(function(e, o) {
                var r = !1;
                u.strategy11.validate(t, function(o) {
                    o || (r = !0, e({
                        footerText: n(t.checkMessage),
                        body: {
                            click: function() {
                                var e = this;
                                s.default.confirm({
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
                                    s.default.close();
                                });
                            }
                        },
                        button: {
                            text: "查看详情",
                            click: function() {
                                var e = this;
                                s.default.confirm({
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
                                    s.default.close();
                                });
                            }
                        }
                    }));
                }), u.strategy8.validate(t, function(o) {
                    o || (r = !0, e({
                        footerText: n(t.checkMessage),
                        body: {
                            click: function() {
                                t.photoStatus === i.PhotoState.CHECK_FAIL ? this.$router.push({
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
                }), u.strategy9.validate(t, function(o) {
                    o || (r = !0, e({
                        footerText: n(t.checkMessage),
                        body: {
                            click: function() {}
                        },
                        button: {
                            text: "重拍检测中",
                            click: function() {
                                s.default.alert({
                                    title: "",
                                    message: "您重拍的证件照正在云端处理中，请稍等！"
                                });
                            }
                        }
                    }));
                }), u.strategy10.validate(t, function(o) {
                    o || (r = !0, e({
                        footerText: n(t.checkMessage),
                        body: {
                            click: function() {
                                var e = this;
                                s.default.confirm({
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
                                    s.default.close();
                                });
                            }
                        },
                        button: {
                            text: "免费重拍",
                            click: function() {
                                var e = this;
                                s.default.confirm({
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
                                    s.default.close();
                                });
                            }
                        }
                    }));
                }), u.strategy1.validate(t, function(o) {
                    o || (r = !0, e({
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
                }), u.strategy2.validate(t, function(o) {
                    o || (r = !0, e({
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
                }), u.strategy12.validate(t, function(o) {
                    o || (r = !0, e({
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
                }), u.strategy3.validate(t, function(o) {
                    o || (r = !0, e({
                        footerText: n(t.checkMessage),
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
                }), u.strategy4.validate(t, function(o) {
                    o || (r = !0, e({
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
                }), u.strategy5.validate(t, function(o) {
                    o || (r = !0, e({
                        footerText: n(t.checkMessage),
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
                }), u.strategy6.validate(t, function(o) {
                    o || (r = !0, e({
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
                }), u.strategy7.validate(t, function(o) {
                    o || (r = !0, e({
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
                }), r || o({});
            });
        };
    },
    287: function(t, e, o) {
        var n = o(111);
        o.n(n).a;
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
    291: function(t, e, o) {
        o.r(e);
        var n = o(154), r = o(112);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(292);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/components/config-dialog.vue", e.default = s.exports;
    },
    292: function(t, e, o) {
        var n = o(114);
        o.n(n).a;
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
    34: function(t, e, o) {
        var n = o(11);
        o.n(n).a;
    },
    348: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                class: t.themeClass,
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!(!t.config.isApp || "1" == t.config.isApp), 1) ? o("div", {
                attrs: {
                    h_: 1
                }
            }, [ t._ri(!(!t.showProcedures || t.$utils.cache.getTempCache("add")), 2) ? o("div", {
                attrs: {
                    h_: 2
                }
            }, [ o("p", {
                attrs: {
                    h_: 3
                }
            }, [ o("span", {
                attrs: {
                    h_: 5
                },
                on: {
                    click: t.closepopup
                }
            }, []) ]), o("div", {
                attrs: {
                    h_: 8
                }
            }) ]) : t._e(), t._ri(!!t.notice.message, 10) ? [ t._ri(!!t.notice.message, 11) ? o("van-notice-bar", {
                attrs: {
                    "left-icon": t.notice.icon,
                    text: t.notice.message,
                    h_: 11
                }
            }) : t._e() ] : t._e(), o("div", {
                attrs: {
                    h_: 13
                }
            }, [ o("div", {
                style: t.notice.message ? "top:40px" : "top:0px",
                attrs: {
                    h_: 14
                }
            }, [ o("div", {
                attrs: {
                    h_: 15
                }
            }, [ o("div", {
                attrs: {
                    h_: 16
                }
            }, [ o("div", {
                attrs: {
                    h_: 17
                },
                on: {
                    click: t.onSearchLabelClick
                }
            }, [ o("span", {
                attrs: {
                    h_: 18
                }
            }, [ t._v(t._s(t.city.name || "无法获取定位"), 19) ]), o("van-icon", {
                attrs: {
                    h_: 21
                }
            }) ], 1), o("div", {
                attrs: {
                    h_: 23
                },
                on: {
                    click: t.onSearchInputClick
                }
            }, [ o("van-icon", {
                attrs: {
                    h_: 24
                }
            }), o("input", {
                attrs: {
                    h_: 26
                }
            }) ], 1) ]), t._ri(!t.channel, 28) ? o("view", {
                attrs: {
                    h_: 28
                },
                on: {
                    click: t.onCustomServiceClick
                }
            }, [ o("image", {
                attrs: {
                    h_: 29
                }
            }), o("span", {
                attrs: {
                    h_: 31
                }
            }, []) ], 1) : t._e() ], 1), o("swiper", {
                attrs: {
                    h_: 34
                }
            }, t._l(t.config.config, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("swiper-item", {
                    key: n,
                    attrs: {
                        h_: 35,
                        f_: i,
                        k_: "index"
                    }
                }, [ o("image", {
                    attrs: {
                        src: e.url,
                        h_: 36,
                        f_: i
                    },
                    on: {
                        click: function(o) {
                            t.handleBannerClick(e);
                        }
                    }
                }) ], 1);
            }, [ 35 ], t._self), 1) ], 1), t._ri(!(!t.config.hotList || !t.config.hotList.length), 38) ? o("van-row", {
                attrs: {
                    h_: 38
                }
            }, t._l(t.config.hotList, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("van-col", {
                    key: n,
                    attrs: {
                        h_: 39,
                        f_: i,
                        k_: "index"
                    },
                    on: {
                        click: function(o) {
                            t.goPhotoGuide(e);
                        }
                    }
                }, [ o("image", {
                    attrs: {
                        src: e.iconUrl,
                        h_: 40,
                        f_: i
                    }
                }), o("div", {
                    attrs: {
                        h_: 42,
                        f_: i
                    }
                }, [ t._v(t._s(e.name), 43, i) ]), t._ri(!!e.signBgUrl, 45, void 0 !== r ? r : n) ? o("image", {
                    attrs: {
                        src: e.signBgUrl,
                        h_: 45,
                        f_: i
                    }
                }) : t._e() ], 1);
            }, [ 39 ], t._self), 1) : t._e(), t._ri(!("711_in" === t.inOot), 47) ? o("div", {
                attrs: {
                    h_: 47
                }
            }, [ o("div", {
                attrs: {
                    h_: 48
                }
            }, []), o("div", {
                attrs: {
                    h_: 51
                }
            }, t._l(t.classification, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("div", {
                    key: n,
                    attrs: {
                        h_: 52,
                        f_: i,
                        k_: "index"
                    },
                    on: {
                        click: function(o) {
                            t.goMore(e.title, e.photoCardList && e.photoCardList.length ? n : "");
                        }
                    }
                }, [ o("div", {
                    attrs: {
                        h_: 53,
                        f_: i
                    }
                }, [ o("image", {
                    attrs: {
                        src: e.url,
                        h_: 54,
                        f_: i
                    }
                }), o("text", {
                    attrs: {
                        h_: 56,
                        f_: i
                    }
                }, [ t._v(t._s(e.title), 57, i) ]) ], 1), o("div", {
                    attrs: {
                        h_: 59,
                        f_: i
                    }
                }, [ o("text", {
                    attrs: {
                        h_: 60,
                        f_: i
                    }
                }, [ t._v(t._s(e.subtitle), 61, i) ]), o("image", {
                    attrs: {
                        h_: 63,
                        f_: i
                    }
                }) ], 1) ]);
            }, [ 52 ], t._self), 0) ]) : t._e(), t._ri(!(!this.$store.state.common.theme && !t.channel711), 65) ? o("div", {
                attrs: {
                    h_: 65
                }
            }, [ o("div", {
                attrs: {
                    h_: 66
                }
            }, [ o("image", {
                attrs: {
                    h_: 67
                }
            }), o("span", {
                attrs: {
                    h_: 69
                }
            }, []) ], 1), o("p", {
                attrs: {
                    h_: 72
                }
            }, [ t._v(t._s(t.customServiceInfo.customText), 73) ]), o("div", {
                attrs: {
                    h_: 75
                }
            }, [ o("button", {
                attrs: {
                    "session-from": t.sessionForm,
                    h_: 76
                }
            }, []), t._ri(!!t.customServiceInfo.isWorkTime, 79) ? o("button", {
                attrs: {
                    h_: 79
                },
                on: {
                    click: t.callPhones
                }
            }, []) : t._e() ]) ]) : t._e() ], 1), o("image", {
                attrs: {
                    src: t.$utils.resizeOSSImage("https://c01.parameters.cn/image/icon_customs.png", 90),
                    h_: 82
                },
                on: {
                    click: t.goCustomer
                }
            }), o("tab-bar", {
                attrs: {
                    value: 0,
                    h_: 84,
                    c_: 0
                }
            }), o("van-dialog", {
                attrs: {
                    h_: 87
                }
            }), o("van-toast", {
                attrs: {
                    h_: 89
                }
            }) ], 1) : t._ri(!("1" != t.config.isApp), 90) ? o("div", {
                attrs: {
                    h_: 90
                }
            }, [ t._ri(!!t.notice.message, 91) ? [ t._ri(!!t.notice.message, 92) ? o("van-notice-bar", {
                attrs: {
                    "left-icon": t.notice.icon,
                    text: t.notice.message,
                    h_: 92
                }
            }) : t._e() ] : t._e(), o("div", {
                attrs: {
                    h_: 94
                }
            }, [ o("div", {
                attrs: {
                    h_: 95
                },
                on: {
                    click: t.goCity
                }
            }, [ o("image", {
                attrs: {
                    h_: 96
                }
            }), o("text", {
                attrs: {
                    h_: 98
                }
            }, [ t._v(t._s(t.city.name), 99) ]), o("image", {
                attrs: {
                    h_: 101
                }
            }) ], 1), o("div", {
                attrs: {
                    h_: 103
                }
            }, [ o("div", {
                attrs: {
                    h_: 104
                },
                on: {
                    click: t.goCustomerService
                }
            }, [ o("image", {
                attrs: {
                    h_: 105
                }
            }), o("text", {
                attrs: {
                    h_: 107
                }
            }, []) ], 1) ]) ]), o("div", {
                attrs: {
                    h_: 110
                }
            }, [ o("div", {
                attrs: {
                    h_: 111
                },
                on: {
                    click: function(e) {
                        t.goPhotoGuide(t.config.mainInfo.mainCertification);
                    }
                }
            }, [ o("image", {
                attrs: {
                    src: t.config.mainInfo.indexUrl.bgUrl,
                    h_: 112
                }
            }), t._ri(!(!t.config.mainInfo.signInfo || !t.config.mainInfo.indexUrl.signUrl), 114) ? o("image", {
                attrs: {
                    src: t.config.mainInfo.indexUrl.signUrl,
                    h_: 114
                }
            }) : t._e(), t._ri(!!t.config.mainInfo.signInfo, 116) ? o("div", {
                attrs: {
                    h_: 116
                }
            }, [ o("image", {
                attrs: {
                    h_: 117
                }
            }), o("text", {
                attrs: {
                    h_: 119
                }
            }, [ t._v(t._s(t.config.mainInfo.signInfo), 120) ]) ], 1) : t._e(), o("div", {
                attrs: {
                    h_: 122
                }
            }, [ o("div", {
                attrs: {
                    h_: 123
                }
            }, [ o("div", {
                attrs: {
                    h_: 124
                }
            }, [ o("image", {
                attrs: {
                    src: t.config.mainInfo.indexUrl.titleUrl,
                    h_: 125
                }
            }), o("div", {
                attrs: {
                    h_: 127
                }
            }, [ o("div", {
                attrs: {
                    h_: 128
                }
            }, [ t._v(t._s(t.config.mainInfo.mainCertification.name), 129) ]), o("div", {
                attrs: {
                    h_: 131
                }
            }, [ t._v("\n                  " + t._s(t.config.mainInfo.mainCertification.desc) + "\n                ", 132) ]) ]) ], 1), t._ri(!!t.config.mainInfo.mainCertification.certificationInfoId, 134) ? o("div", {
                attrs: {
                    h_: 134
                },
                on: {
                    click: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "stop", void 0, e.key, void 0)) return null;
                        t.goPhotoGuide(t.config.mainInfo.mainCertification);
                    }
                }
            }, []) : o("div", {
                class: [ "button", "disabled" ],
                attrs: {
                    h_: 136
                }
            }, []) ]), o("div", {
                attrs: {
                    h_: 139
                }
            }, t._l(t.config.mainInfo.titleList, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("div", {
                    key: n,
                    attrs: {
                        h_: 140,
                        f_: i,
                        k_: "index"
                    }
                }, [ o("text", {
                    attrs: {
                        h_: 141,
                        f_: i
                    }
                }, [ t._v(t._s(e.mainTitle), 142, i) ]), o("text", {
                    attrs: {
                        h_: 144,
                        f_: i
                    }
                }, [ t._v(t._s(e.subTitle), 145, i) ]) ], 1);
            }, [ 140 ], t._self), 0) ]) ], 1), o("div", {
                attrs: {
                    h_: 147
                }
            }, [ t._ri(!(!t.customConfig.hotList || !t.customConfig.hotList.length), 148) ? o("swiper", {
                attrs: {
                    h_: 148
                },
                on: {
                    change: t.changeDot
                }
            }, t._l(t.customConfig.hotList, function(e, n, r) {
                return o("swiper-item", {
                    key: n,
                    attrs: {
                        h_: 149,
                        f_: void 0 !== r ? r : n,
                        k_: "parIndex"
                    }
                }, t._l(e, function(e, i, a) {
                    var s = (void 0 !== r ? r : n) + "-" + (void 0 !== a ? a : i);
                    return o("div", {
                        key: i,
                        attrs: {
                            h_: 150,
                            f_: s,
                            k_: "index"
                        },
                        on: {
                            click: function(o) {
                                t.goPhotoGuide(e);
                            }
                        }
                    }, [ o("image", {
                        attrs: {
                            src: e.iconUrl,
                            h_: 151,
                            f_: s
                        }
                    }), o("text", {
                        attrs: {
                            h_: 153,
                            f_: s
                        }
                    }, [ t._v(t._s(e.name), 154, s) ]), t._ri(!!e.signBgUrl, 156, (void 0 !== r ? r : n) + "-" + (void 0 !== a ? a : i)) ? o("image", {
                        attrs: {
                            src: e.signBgUrl,
                            h_: 156,
                            f_: s
                        }
                    }) : t._e() ], 1);
                }, [ 150, void 0 !== r ? r : n ], t._self), 0);
            }, [ 149 ], t._self), 1) : t._e(), o("div", {
                attrs: {
                    h_: 158
                }
            }, t._l(t.customConfig.hotList, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("div", {
                    key: n,
                    class: [ "dot", n === t.currentDot ? "active" : "" ],
                    attrs: {
                        h_: 159,
                        f_: i,
                        k_: "index"
                    }
                });
            }, [ 159 ], t._self), 0) ], 1) ]), t._ri(!!t.photoRecord.length, 161) ? o("div", {
                attrs: {
                    h_: 161
                }
            }, [ o("div", {
                attrs: {
                    h_: 162
                }
            }, [ o("text", {
                attrs: {
                    h_: 163
                }
            }, []), o("div", {
                attrs: {
                    h_: 166
                },
                on: {
                    click: t.goPhotoRecord
                }
            }, [ o("image", {
                attrs: {
                    h_: 168
                }
            }) ], 1) ], 1), o("div", {
                attrs: {
                    h_: 170
                }
            }, [ o("photo-record-item", {
                attrs: {
                    data: t.photoRecord[0],
                    classes: "custom-photo-record",
                    h_: 171,
                    c_: 1
                }
            }) ], 1) ]) : t._e(), t._ri(!!t.config.config, 174) ? o("div", {
                attrs: {
                    h_: 174
                }
            }, [ o("swiper", {
                style: {
                    height: t.customSwiperHeight[t.customCurrentSwiper] + "rpx"
                },
                attrs: {
                    h_: 175
                },
                on: {
                    change: t.customSwiperChange
                }
            }, t._l(t.config.config, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("swiper-item", {
                    key: n,
                    attrs: {
                        h_: 176,
                        f_: i,
                        k_: "index"
                    }
                }, [ o("image", {
                    attrs: {
                        src: e.url,
                        h_: 177,
                        f_: i
                    },
                    on: {
                        click: function(o) {
                            t.handleBannerClick(e);
                        },
                        load: t.imageLoad
                    }
                }) ], 1);
            }, [ 176 ], t._self), 1) ], 1) : t._e(), o("image", {
                attrs: {
                    src: t.$utils.resizeOSSImage("https://c01.parameters.cn/image/icon_customs.png", 90),
                    h_: 179
                },
                on: {
                    click: t.goCustomer
                }
            }), o("div", {
                attrs: {
                    h_: 181
                }
            }, [ o("div", {
                attrs: {
                    h_: 182
                }
            }, []), o("div", {
                attrs: {
                    h_: 185
                }
            }, t._l(t.classification, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("div", {
                    key: n,
                    attrs: {
                        h_: 186,
                        f_: i,
                        k_: "index"
                    },
                    on: {
                        click: function(o) {
                            t.goMore(e.title, e.photoCardList && e.photoCardList.length ? n : "");
                        }
                    }
                }, [ o("div", {
                    attrs: {
                        h_: 187,
                        f_: i
                    }
                }, [ o("image", {
                    attrs: {
                        src: e.url,
                        h_: 188,
                        f_: i
                    }
                }), o("text", {
                    attrs: {
                        h_: 190,
                        f_: i
                    }
                }, [ t._v(t._s(e.title), 191, i) ]) ], 1), o("div", {
                    attrs: {
                        h_: 193,
                        f_: i
                    }
                }, [ o("text", {
                    attrs: {
                        h_: 194,
                        f_: i
                    }
                }, [ t._v(t._s(e.subtitle), 195, i) ]), o("image", {
                    attrs: {
                        h_: 197,
                        f_: i
                    }
                }) ], 1) ]);
            }, [ 186 ], t._self), 0) ]) ], 1) : t._e(), o("toast", {
                ref: "toast",
                attrs: {
                    h_: 199,
                    c_: 2
                }
            }), o("tab-bar", {
                attrs: {
                    value: 0,
                    h_: 202,
                    c_: 3
                }
            }), o("van-dialog", {
                attrs: {
                    h_: 205
                }
            }), o("van-dialog", {
                attrs: {
                    show: t.showAgreeProtocol,
                    h_: 207
                },
                on: {
                    confirm: t.onProtocolConfirm
                }
            }, [ o("view", {
                attrs: {
                    h_: 208
                }
            }, [ o("text", {
                attrs: {
                    h_: 210
                },
                on: {
                    click: t.handleUserServiceProtocol
                }
            }, []), o("text", {
                attrs: {
                    h_: 213
                },
                on: {
                    click: t.handleProtocol
                }
            }, []) ], 1) ], 1), o("van-dialog", {
                attrs: {
                    show: t.relocationDialog.show,
                    h_: 217
                },
                on: {
                    confirm: t.relocation
                }
            }, [ o("view", {
                attrs: {
                    slot: "title",
                    h_: 218
                },
                slot: "title"
            }, [ o("text", {
                attrs: {
                    h_: 220
                }
            }, [ t._v(t._s(t.tempCity.name), 221) ]) ], 1) ], 1), o("van-popup", {
                attrs: {
                    show: t.doctorActive.show,
                    h_: 223
                }
            }, [ o("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: 0 === t.doctorActive.step,
                    expression: "doctorActive.step === 0"
                } ],
                attrs: {
                    h_: 224
                }
            }, [ o("image", {
                attrs: {
                    h_: 225
                }
            }), o("view", {
                attrs: {
                    h_: 227
                }
            }, [ o("image", {
                attrs: {
                    h_: 228
                }
            }), o("image", {
                attrs: {
                    h_: 230
                }
            }), o("text", {
                attrs: {
                    h_: 232
                }
            }, []) ], 1), o("view", {
                attrs: {
                    h_: 235
                }
            }, [ o("text", {
                attrs: {
                    h_: 236
                }
            }, []), o("text", {
                attrs: {
                    h_: 239
                }
            }, []) ], 1) ], 1), o("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: 1 === t.doctorActive.step,
                    expression: "doctorActive.step === 1"
                } ],
                attrs: {
                    h_: 242
                }
            }, [ o("view", {
                attrs: {
                    h_: 243
                }
            }, [ o("image", {
                attrs: {
                    h_: 244
                }
            }) ], 1), o("view", {
                attrs: {
                    h_: 246
                }
            }, [ o("text", {
                attrs: {
                    h_: 247
                }
            }, []), o("text", {
                attrs: {
                    h_: 250
                }
            }, []), o("view", {
                attrs: {
                    h_: 253
                }
            }, [ o("van-button", {
                attrs: {
                    h_: 254
                },
                on: {
                    click: t.goCoupon,
                    getuserinfo: t.goCoupon
                }
            }, []), o("van-button", {
                attrs: {
                    h_: 257
                },
                on: {
                    click: t.closeDoctorActive
                }
            }, []) ], 1) ], 1) ], 1) ], 1), o("config-dialog", {
                attrs: {
                    h_: 260,
                    c_: 4
                }
            }), o("van-dialog", {
                attrs: {
                    h_: 263
                },
                on: {
                    getuserinfo: t.__handleGlobalAuthDialogGetUserInfo
                }
            }) ], 1);
        }, r = [];
        n._withStripped = !0;
    },
    35: function(t, e, o) {
        var n = o(12);
        o.n(n).a;
    },
    37: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.APIs = void 0;
        var n = o(14), r = n.__importDefault(o(65)), i = n.__importDefault(o(95)), a = n.__importDefault(o(96)), s = n.__importDefault(o(97)), u = n.__importDefault(o(98)), c = n.__importDefault(o(99)), l = n.__importDefault(o(100)), d = n.__importDefault(o(101)), h = n.__importDefault(o(102)), f = n.__importDefault(o(74)), p = n.__importDefault(o(80)), _ = new (e.APIs = function() {
            this.aliPayApis = new i.default(r.default), this.aliPayAppApis = new a.default(r.default), 
            this.cmbApis = new s.default(r.default), this.userApis = new u.default(r.default), 
            this.photoApis = new c.default(r.default), this.commonApis = new l.default(r.default), 
            this.orderApis = new d.default(r.default), this.weChatApis = new h.default(r.default), 
            this.weAppApis = new f.default(r.default), this.couponApis = new p.default(r.default);
        })();
        e.default = _;
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
    400: function(t, e, o) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var r = n(o(401)), i = n(o(22));
        r.default.mpType = "page", new i.default(r.default).$mount();
    },
    401: function(t, e, o) {
        o.r(e);
        var n = o(348), r = o(174);
        for (var i in r) "default" !== i && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(i);
        o(432);
        var a = o(0), s = Object(a.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/pages/home/Home.vue", e.default = s.exports;
    },
    432: function(t, e, o) {
        var n = o(176);
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
    50: function(t, e, o) {
        o.r(e);
        var n = o(51), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    51: function(t, e, o) {
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
            var i = n(o(19)), a = n(o(140)), s = n(o(142));
            o(23), e.default = {
                name: "tab-bar",
                model: {
                    event: "change",
                    prop: "value"
                },
                components: {
                    "par-tabbar": a.default,
                    "par-tabbar-item": s.default
                },
                props: {
                    value: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    var t = "/static/images/custom-index/", e = "/static/7-11/";
                    return {
                        activeColor: "#000",
                        normalColor: "#CCC",
                        datas: [ {
                            icon: {
                                normal: t + "index_none.png",
                                active: t + "index_active.png"
                            },
                            text: "首页",
                            path: "/pages/home/Home"
                        }, {
                            icon: {
                                normal: t + "more_none.png",
                                active: t + "more_active.png"
                            },
                            text: "拍照",
                            path: "/pages/more/Index"
                        }, {
                            icon: {
                                normal: t + "order_none.png",
                                active: t + "order_active.png"
                            },
                            text: "订单",
                            path: "/pages/transaction/order/Index",
                            openType: "getUserInfo"
                        }, {
                            icon: {
                                normal: t + "mine_none.png",
                                active: t + "mine_active.png"
                            },
                            text: "我的",
                            path: "/pages/user/mine/Index"
                        } ],
                        data: [ {
                            icon: {
                                normal: t + "index_none.png",
                                active: e + "icon_1.png"
                            },
                            text: "首页",
                            path: "/pages/home/Home"
                        }, {
                            icon: {
                                normal: t + "more_none.png",
                                active: e + "icon_2.png"
                            },
                            text: "拍照",
                            path: "/pages/more/Index"
                        }, {
                            icon: {
                                normal: t + "order_none.png",
                                active: e + "icon_3.png"
                            },
                            text: "订单",
                            path: "/pages/transaction/order/Index",
                            openType: "getUserInfo"
                        }, {
                            icon: {
                                normal: t + "mine_none.png",
                                active: e + "icon_4.png"
                            },
                            text: "我的",
                            path: "/pages/user/mine/Index"
                        } ]
                    };
                },
                created: function() {
                    var t = this;
                    return r(i.default.mark(function e() {
                        var o, n;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.$apis.commonApis.getPageConfig({
                                    code: "photoAmount"
                                });

                              case 2:
                                o = e.sent, n = o.data, t.$set(t.data[1], "info", n.photoAmount), t.$set(t.datas[1], "info", n.photoAmount);

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                methods: {
                    handleChange: function(e) {
                        switch (e) {
                          case 0:
                            this.$buriedPoint.recordLog({
                                operateCode: "tab_home"
                            });
                            break;

                          case 1:
                            this.$buriedPoint.recordLog({
                                operateCode: "tab_photo"
                            });
                            break;

                          case 2:
                            this.$buriedPoint.recordLog({
                                operateCode: "tab_order"
                            });
                            break;

                          case 3:
                            this.$buriedPoint.recordLog({
                                operateCode: "tab_user"
                            });
                        }
                        t.reLaunch({
                            url: this.data[e].path
                        });
                    },
                    getUserInfo: function(t) {
                        var e = this;
                        return r(i.default.mark(function o() {
                            return i.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    if ("getUserInfo:ok" !== t.detail.errMsg) {
                                        o.next = 5;
                                        break;
                                    }
                                    if (e.$store.state.auth.unionId) {
                                        o.next = 4;
                                        break;
                                    }
                                    return o.next = 4, e.__handleGlobalAuthDialogGetUserInfo(t);

                                  case 4:
                                    e.handleChange(t.currentTarget.dataset.index);

                                  case 5:
                                  case "end":
                                    return o.stop();
                                }
                            }, o, e);
                        }))();
                    }
                }
            };
        }).call(this, o(13).default);
    },
    52: function(t, e, o) {
        o.r(e);
        var n = o(53), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    53: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "par-tabbar",
            props: {
                value: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    items: []
                };
            },
            methods: {
                selectActiveItem: function() {
                    var t = this;
                    this.items.forEach(function(e, o) {
                        e.active = o === t.value;
                    });
                },
                handleChange: function(t) {
                    t !== this.value && (this.$emit("input", t), this.$emit("change", t));
                }
            },
            watch: {
                items: function() {
                    this.selectActiveItem();
                },
                value: {
                    handler: function() {
                        this.selectActiveItem();
                    }
                }
            }
        };
    },
    54: function(t, e, o) {},
    55: function(t, e, o) {
        o.r(e);
        var n = o(56), r = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = r.a;
    },
    56: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "par-tabbar-item",
            props: {
                info: {
                    type: [ String, Number ]
                },
                dot: Boolean,
                icon: String,
                activeColor: String,
                normalColor: String
            },
            beforeCreate: function() {
                this.$parent.items.push(this);
            },
            data: function() {
                return {
                    active: !1
                };
            },
            computed: {
                styles: function() {
                    return {
                        color: this.active ? this.activeColor : this.normalColor
                    };
                }
            },
            destroyed: function() {
                this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
            },
            methods: {
                handleChange: function(t) {
                    this.$parent.handleChange(this.$parent.items.indexOf(this)), this.$emit("click", t);
                }
            }
        };
    },
    57: function(t, e, o) {},
    58: function(t, e, o) {},
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
                            return t.trys.push([ 1, 4, 5, 6 ]), [ 4, g.default.refreshAuthCode() ];

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
                                            return t = n.sent(), [ 4, g.default.getFreshCode() ];

                                          case 3:
                                            if (!((o = n.sent()) && t.hasOwnProperty("encryptedData") && t.hasOwnProperty("iv") && t.hasOwnProperty("rawData") && t.hasOwnProperty("signature"))) return [ 3, 10 ];
                                            n.label = 4;

                                          case 4:
                                            return n.trys.push([ 4, 6, 7, 9 ]), [ 4, m.default.authUserInfo({
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
                                            return [ 4, g.default.refreshAuthCode() ];

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
                            return t.sent(), _.default.alert({
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
                            return t.mid && t.mid !== d.default.state.common.mid && d.default.commit("common/changeMid", t.mid), 
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
            var s = n(14), u = s.__importDefault(n(87)), c = s.__importDefault(n(88)), l = s.__importDefault(n(89)), d = s.__importDefault(n(38)), h = s.__importDefault(n(49)), f = s.__importDefault(n(73)), p = s.__importDefault(n(28)), _ = s.__importDefault(n(83)), m = s.__importDefault(n(91)), g = s.__importDefault(n(67)), v = new c.default(l.default(f.default));
            v.config = h.default, v.interceptors.request.use(function(e) {
                return s.__awaiter(void 0, void 0, void 0, function() {
                    return s.__generator(this, function(o) {
                        return h.default.headers.appid = d.default.state.common.mid || "", h.default.headers.thirdAppId = d.default.state.common.weChatAppID || "", 
                        h.default.headers.token = d.default.state.auth.token, h.default.headers.userId = d.default.state.auth.userId, 
                        h.default.headers.vid = p.default.getLocalCache("vid") || "", "object" == t(h.default.body) && Object.keys(h.default.body).forEach(function(t) {
                            void 0 !== h.default.body[t] && "undefined" !== h.default.body[t] || delete h.default.body[t];
                        }), Object.assign(e, h.default), "object" == t(h.default.body) && Object.keys(h.default.body).forEach(function(t) {
                            var e = h.default.body[t];
                            void 0 !== e && "" !== e && null !== e && "undefined" !== e || delete h.default.body[t];
                        }), [ 2, e ];
                    });
                });
            }), v.interceptors.response.use(function(t) {
                return s.__awaiter(this, void 0, void 0, function() {
                    return s.__generator(this, function(e) {
                        return h.default.headers.vid || (h.default.headers.vid = t.data.vid, p.default.setLocalCache("vid", t.data.vid, 1 / 0)), 
                        [ 2 ];
                    });
                });
            }, function(t) {
                return u.default({
                    message: "网络错误请稍后重试",
                    position: "bottom",
                    selector: "#toast"
                }), t;
            }), v.interceptors.response.use(i), o.default = v, o.responseMainIntercetor = i, 
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
            var r = o(14), i = r.__importDefault(o(28)), a = r.__importDefault(o(37)), s = o(93), u = o(20), c = r.__importDefault(o(84)), l = (n.prototype.getLocation = function() {
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
            e.default = new l();
        }).call(this, o(13).default);
    },
    68: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BEACON_KEY = e.WEAPP_ID = e.DEFAULT_MID = void 0, e.DEFAULT_MID = "cs044cea2fd12a4681", 
        e.WEAPP_ID = "wxc208a30b208e59ce", e.BEACON_KEY = "MA1AD2R83EFACK";
    },
    69: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                attrs: {
                    h_: 0
                }
            }, [ o("par-tabbar", {
                staticClass: "tab-bar",
                attrs: {
                    value: t.value,
                    h_: 1,
                    c_: 0
                }
            }, t._l(t.$store.state.common.theme ? t.data : t.datas, function(e, n, r) {
                var i = void 0 !== r ? r : n;
                return o("block", {
                    key: n,
                    attrs: {
                        h_: "s3",
                        f_: i,
                        k_: "index"
                    }
                }, [ t._ri(!("getUserInfo" !== e.openType), "s4", void 0 !== r ? r : n) ? o("button", {
                    attrs: {
                        "open-type": e.openType,
                        "data-index": n,
                        h_: "s4",
                        f_: i,
                        i_: [ !("getUserInfo" !== e.openType), "s4", void 0 !== r ? r : n ]
                    },
                    on: {
                        getuserinfo: t.getUserInfo
                    }
                }, [ o("par-tabbar-item", {
                    attrs: {
                        info: e.info,
                        activeColor: t.activeColor,
                        normalColor: t.normalColor,
                        h_: "s5",
                        f_: i,
                        c_: 1
                    },
                    scopedSlots: t._u([ {
                        key: "icon",
                        fn: function(t) {
                            return o("image", {
                                attrs: {
                                    src: t.active ? e.icon.active : e.icon.normal,
                                    h_: "s8"
                                }
                            });
                        }
                    } ], !0)
                }, [ t._v("\n          " + t._s(e.text) + "\n        ", "s7") ]) ], 1) : o("button", {
                    attrs: {
                        h_: "s9",
                        f_: i,
                        i_: [ !("getUserInfo" !== e.openType), "s4", void 0 !== r ? r : n ]
                    },
                    on: {
                        click: function(e) {
                            t.handleChange(n);
                        }
                    }
                }, [ o("par-tabbar-item", {
                    attrs: {
                        info: e.info,
                        activeColor: t.activeColor,
                        normalColor: t.normalColor,
                        h_: "s10",
                        f_: i,
                        c_: 2
                    },
                    scopedSlots: t._u([ {
                        key: "icon",
                        fn: function(t) {
                            return o("image", {
                                attrs: {
                                    src: t.active ? e.icon.active : e.icon.normal,
                                    h_: "s13"
                                }
                            });
                        }
                    } ], !0)
                }, [ t._v("\n          " + t._s(e.text) + "\n        ", "s12") ]) ], 1) ]);
            }, [ "s3" ], t._self), 1) ], 1);
        }, r = [];
        n._withStripped = !0;
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
    71: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                style: t.styles,
                attrs: {
                    h_: 0
                },
                on: {
                    click: t.handleChange
                }
            }, [ o("div", {
                attrs: {
                    h_: 1
                }
            }, [ o("span", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.info,
                    expression: "info"
                } ],
                class: t.$store.state.common.theme ? "par-infos" : "par-info",
                attrs: {
                    h_: 2
                }
            }, [ t._v(t._s(t.info), 3) ]), t._t("icon", null, {
                active: t.active,
                h_: 5
            }), o("span", {
                attrs: {
                    h_: 7
                }
            }, [ t._t("default", null, {
                h_: 8
            }) ], 1) ], 1) ]);
        }, r = [];
        n._withStripped = !0;
    },
    72: function(t, e, o) {
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
        var n = function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                attrs: {
                    h_: 0
                }
            }, [ this._t("default", null, {
                h_: 1
            }) ], 1);
        }, r = [];
        n._withStripped = !0;
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
            var r = o(14), i = r.__importDefault(o(37)), a = r.__importDefault(o(66)), s = r.__importDefault(o(28)), u = r.__importDefault(o(38)), c = o(161), l = o(68), d = o(162), h = (n.prototype.recordLog = function(t) {
                var e;
                return r.__awaiter(this, void 0, void 0, function() {
                    var o, n, i, c, h, f, p, _, m;
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
                            return h = r.sent(), f = h.system.split(" "), p = f[0], _ = f[1], m = {
                                nanoid: d(8),
                                time: a.default().format("YYYY-MM-DD HH:mm:ss SSS"),
                                vid: n,
                                userId: i,
                                mobile: c,
                                os: p.toUpperCase(),
                                osVersion: _,
                                ver: "2.1",
                                channel: o,
                                location: null === (e = u.default.state.common.city) || void 0 === e ? void 0 : e.name,
                                locationDetails: this.getLocationDetails(),
                                appid: l.WEAPP_ID,
                                systemInfo: h
                            }, Object.assign(m, t), this.appendData(m), this.throttleUpload(), [ 3, 4 ];

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
            e.default = new h();
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
        var r = o(14), i = r.__importDefault(o(73)), a = r.__importDefault(o(88)), s = r.__importDefault(o(89)), u = r.__importDefault(o(74)), c = r.__importDefault(o(37)), l = r.__importDefault(o(49)), d = r.__importDefault(o(38)), h = r.__importStar(o(65)), f = (n.prototype.login = function(t, e) {
            return void 0 === e && (e = {}), r.__awaiter(this, void 0, void 0, function() {
                var o, n, c;
                return r.__generator(this, function(r) {
                    return (o = new a.default(s.default(i.default))).interceptors.response.use(h.responseMainIntercetor), 
                    n = new u.default(o), c = Object.assign(e, l.default), [ 2, n.login(t, c) ];
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
                        return e = o.sent().data, d.default.commit("auth/login", e), h.default.unlock(), 
                        [ 4, c.default.commonApis.voucher() ];

                      case 2:
                        return o.sent(), [ 4, Promise.all([ d.default.dispatch("common/triggerConfigDialog", {
                            type: "POPUP_COUPON"
                        }), d.default.dispatch("common/triggerConfigDialog", {
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
        e.default = new f();
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
}, [ [ 400, "runtime", "vendor" ] ] ]);
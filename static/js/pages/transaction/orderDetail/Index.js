(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/transaction/orderDetail/Index" ], {
    1: function(t, e, r) {
        r.r(e);
        var a = r(2), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    10: function(t, e, r) {
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
    11: function(t, e, r) {},
    115: function(t, e, r) {
        r.r(e);
        var a = r(116), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    116: function(t, e, r) {
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function n(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise(function(t, r) {
                    return function a(n, i) {
                        try {
                            var o = e[n](i), s = o.value;
                        } catch (n) {
                            return void r(n);
                        }
                        if (!o.done) return Promise.resolve(s).then(function(t) {
                            a("next", t);
                        }, function(t) {
                            a("throw", t);
                        });
                        t(s);
                    }("next");
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = a(r(19)), o = a(r(103)), s = a(r(27));
        e.default = {
            name: "send-email",
            components: {
                toast: s.default
            },
            props: {
                orderNum: String
            },
            data: function() {
                return {
                    show: !0,
                    focus: !1,
                    value: "",
                    isScroll: !1,
                    showSuccessDialog: !1,
                    tipSources: [ "qq.com", "163.com", "126.com", "vip.qq.com", "foxmail.com" ]
                };
            },
            computed: {
                tipList: function() {
                    if (!this.value) return [];
                    for (var t = [], e = 0; e < this.tipSources.length; e++) {
                        var r, a, n = this.tipSources[e], i = this.value.split("@"), o = i.length;
                        1 < i.length ? (r = i[o - 1], a = i[o - 2], n.startsWith(r) && n !== r && t.push(a + "@" + n)) : t.push(this.value + "@" + n);
                    }
                    return t;
                }
            },
            methods: {
                scroll: function() {
                    this.isScroll = !0;
                },
                preventTouchMove: function() {},
                chooseValue: function(t) {
                    this.focus = !1, this.value = t, this.isScroll = !1;
                },
                beforeDialogClose: function(t) {
                    var e, r = this;
                    "confirm" === t.detail ? new o.default({
                        value: {
                            type: "email",
                            required: !0,
                            message: "请输入正确的邮箱"
                        },
                        orderNum: {
                            required: !0,
                            validator: function(t, e, a) {
                                r.orderNum ? a() : a("无法获取到订单号");
                            }
                        }
                    }).validate(this, (e = n(i.default.mark(function t(e) {
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (t.prev = 0, e) return r.$toast.fail({
                                    selector: "#toast",
                                    message: e[0].message
                                }), r.change(!1), t.abrupt("return");
                                t.next = 5;
                                break;

                              case 5:
                                return t.next = 7, r.$apis.commonApis.sendEmail({
                                    orderNum: r.orderNum,
                                    targetMail: r.value
                                });

                              case 7:
                                r.show = !1, r.showSuccessDialog = !0, t.next = 14;
                                break;

                              case 11:
                                t.prev = 11, t.t0 = t.catch(0), r.show = !0;

                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t, r, [ [ 0, 11 ] ]);
                    })), function(t) {
                        return e.apply(this, arguments);
                    })) : this.change(!1);
                },
                change: function(t) {
                    this.show = t, this.$emit("close", t);
                }
            }
        };
    },
    117: function(t, e, r) {},
    118: function(t, e, r) {
        r.r(e);
        var a = r(119), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    119: function(t, e, r) {
        (function(t) {
            function a(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, r) {
                        return function a(n, i) {
                            try {
                                var o = e[n](i), s = o.value;
                            } catch (n) {
                                return void r(n);
                            }
                            if (!o.done) return Promise.resolve(s).then(function(t) {
                                a("next", t);
                            }, function(t) {
                                a("throw", t);
                            });
                            t(s);
                        }("next");
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n, i = (n = r(19)) && n.__esModule ? n : {
                default: n
            };
            e.default = {
                name: "download-image-preview",
                props: {
                    images: Array,
                    isReceipt: String
                },
                data: function() {
                    return {
                        index: 0,
                        show: !0,
                        active: 0,
                        isdownload: !1,
                        iosTip: !1
                    };
                },
                created: function() {
                    var e = this;
                    return a(i.default.mark(function r() {
                        return i.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, t.getSystemInfo();

                              case 2:
                                r.sent.system.includes("iOS") && (e.iosTip = !0);

                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r, e);
                    }))();
                },
                computed: {
                    tips: function() {
                        if (1 == this.isReceipt) switch (this.index) {
                          case 0:
                            return "适用于业务办理时上传";
                        } else if (3 == this.images.length) switch (this.index) {
                          case 0:
                            return "仅供留底，不适用于业务办理时上传";

                          case 1:
                            return "适用于业务办理时上传";
                        } else switch (this.index) {
                          case 0:
                            return "适用于业务办理时上传";
                        }
                    },
                    title: function() {
                        if (1 == this.isReceipt) switch (this.index) {
                          case 0:
                            return "标准尺寸";

                          case 1:
                            return "排版照";

                          case 2:
                            return "回执";
                        } else if (3 == this.images.length) switch (this.index) {
                          case 0:
                            return "高清图";

                          case 1:
                            return "标准尺寸";

                          case 2:
                            return "排版照";
                        } else switch (this.index) {
                          case 0:
                            return "标准尺寸";

                          case 1:
                            return "排版照";
                        }
                    }
                },
                methods: {
                    close: function() {
                        this.$emit("close", !1);
                    },
                    onChange: function(t) {
                        var e = t.detail;
                        this.index = e.current, this.active = e.current;
                    },
                    download: function() {
                        var e = this;
                        return a(i.default.mark(function r() {
                            var a;
                            return i.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.prev = 0, r.next = 3, e.checkScope();

                                  case 3:
                                    return e.isdownload = !0, r.prev = 4, r.next = 7, t.downloadFile({
                                        url: e.images[e.index]
                                    });

                                  case 7:
                                    return a = r.sent, r.next = 10, t.saveImageToPhotosAlbum({
                                        filePath: a.tempFilePath
                                    });

                                  case 10:
                                    t.showToast({
                                        icon: "success",
                                        title: "图片保存成功"
                                    }), e.isdownload = !1, r.next = 18;
                                    break;

                                  case 14:
                                    r.prev = 14, r.t0 = r.catch(4), e.isdownload = !1, t.showToast({
                                        icon: "loading",
                                        title: "保存图片失败"
                                    });

                                  case 18:
                                    r.next = 24;
                                    break;

                                  case 20:
                                    r.prev = 20, r.t1 = r.catch(0), e.isdownload = !1, t.showToast({
                                        icon: "loading",
                                        title: "没有保存权限"
                                    });

                                  case 24:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, e, [ [ 0, 20 ], [ 4, 14 ] ]);
                        }))();
                    },
                    checkScope: function() {
                        var e = this;
                        return a(i.default.mark(function r() {
                            return i.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.abrupt("return", new Promise(function() {
                                        var r = a(i.default.mark(function r(n, o) {
                                            return i.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.prev = 0, e.prev = 1, e.next = 4, t.authorize({
                                                        scope: "scope.writePhotosAlbum"
                                                    });

                                                  case 4:
                                                    n(), e.next = 10;
                                                    break;

                                                  case 7:
                                                    e.prev = 7, e.t0 = e.catch(1), t.showModal({
                                                        title: "提示",
                                                        content: "保存相片到本地需要您授权",
                                                        confirmText: "前往设置",
                                                        showCancel: !0,
                                                        success: function(e) {
                                                            var r = this;
                                                            return a(i.default.mark(function a() {
                                                                return i.default.wrap(function(r) {
                                                                    for (;;) switch (r.prev = r.next) {
                                                                      case 0:
                                                                        if (e.confirm) return r.next = 3, t.openSetting({});
                                                                        r.next = 5;
                                                                        break;

                                                                      case 3:
                                                                        (r.sent.authSetting["scope.writePhotosAlbum"] ? n : o)();

                                                                      case 5:
                                                                      case "end":
                                                                        return r.stop();
                                                                    }
                                                                }, a, r);
                                                            }))();
                                                        }
                                                    });

                                                  case 10:
                                                    e.next = 15;
                                                    break;

                                                  case 12:
                                                    e.prev = 12, e.t1 = e.catch(0), o();

                                                  case 15:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, r, e, [ [ 0, 12 ], [ 1, 7 ] ]);
                                        }));
                                        return function(t, e) {
                                            return r.apply(this, arguments);
                                        };
                                    }()));

                                  case 1:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, e);
                        }))();
                    }
                }
            };
        }).call(this, r(13).default);
    },
    12: function(t, e, r) {},
    120: function(t, e, r) {},
    121: function(t, e, r) {
        r.r(e);
        var a = r(122), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    122: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "image-preview",
            props: {
                show: {
                    type: Boolean,
                    default: !0
                },
                images: Array,
                initialIndex: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    index: this.initialIndex
                };
            },
            methods: {
                close: function(t) {
                    this.$emit("on-close", t);
                },
                onChange: function(t) {
                    var e = t.detail.current;
                    this.index = e;
                }
            }
        };
    },
    123: function(t, e, r) {},
    124: function(t, e, r) {
        r.r(e);
        var a = r(125), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    125: function(t, e, r) {
        (function(t) {
            function a(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, r) {
                        return function a(n, i) {
                            try {
                                var o = e[n](i), s = o.value;
                            } catch (n) {
                                return void r(n);
                            }
                            if (!o.done) return Promise.resolve(s).then(function(t) {
                                a("next", t);
                            }, function(t) {
                                a("throw", t);
                            });
                            t(s);
                        }("next");
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n, i = (n = r(19)) && n.__esModule ? n : {
                default: n
            }, o = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
                }
                return t;
            };
            e.default = {
                props: {
                    upgradeData: Array,
                    data: Object
                },
                data: function() {
                    return {};
                },
                created: function() {},
                methods: {
                    cancel: function() {
                        this.$emit("close");
                    },
                    goPath: function(e, r) {
                        var n = this;
                        return a(i.default.mark(function a() {
                            var s, u, c, d;
                            return i.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, n.$apis.orderApis.toUpgradePaper({
                                        photoOrderId: n.data.photoOrderId
                                    });

                                  case 2:
                                    if (s = a.sent, (u = s.data).toPay) return a.next = 7, n.$apis.weAppApis.pay({
                                        orderNum: n.data.orderNum,
                                        paymentType: u.result.paymentType,
                                        subject: n.data.certificateName,
                                        openId: n.auth.openId,
                                        returnUrl: "/pages/transaction/order/Index",
                                        upgradePaper: "UPGRADE_PAPER"
                                    });
                                    a.next = 24;
                                    break;

                                  case 7:
                                    return c = a.sent, d = c.data, n.$buriedPoint.recordLog(o({
                                        operateCode: "pay_click",
                                        source: "upgradePaper"
                                    }, n.data)), a.prev = 10, a.next = 13, t.requestPayment(d);

                                  case 13:
                                    n.$router.push({
                                        path: "/pages/transaction/orderDetail/Index",
                                        query: {
                                            photoOrderId: n.data.photoOrderId
                                        }
                                    }), a.next = 19;
                                    break;

                                  case 16:
                                    a.prev = 16, a.t0 = a.catch(10), n.$toast.success({
                                        selector: "#toast",
                                        message: "支付失败",
                                        duration: 1500
                                    });

                                  case 19:
                                    return a.prev = 19, n.$emit("close"), a.finish(19);

                                  case 22:
                                    a.next = 26;
                                    break;

                                  case 24:
                                    n.$router.push({
                                        path: "/pages/transaction/submitOrder/Index",
                                        query: {
                                            photoInfoId: n.data.photoInfoId,
                                            upgrade: 1,
                                            code: e,
                                            isLogistics: r
                                        }
                                    }), n.$emit("close");

                                  case 26:
                                  case "end":
                                    return a.stop();
                                }
                            }, a, n, [ [ 10, 16, 19, 22 ] ]);
                        }))();
                    }
                }
            };
        }).call(this, r(13).default);
    },
    126: function(t, e, r) {},
    149: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {
                attrs: {
                    h_: 0
                }
            }, [ r("div", {
                attrs: {
                    h_: 1
                }
            }, [ r("div", {
                attrs: {
                    h_: 2
                }
            }, [ r("span", {
                attrs: {
                    h_: 4
                },
                on: {
                    click: t.cancel
                }
            }, []) ]), t._l(t.upgradeData, function(e, a, n) {
                var i = void 0 !== n ? n : a;
                return r("div", {
                    key: a,
                    attrs: {
                        h_: 7,
                        f_: i,
                        k_: "index"
                    }
                }, [ r("div", {
                    attrs: {
                        h_: 8,
                        f_: i
                    },
                    on: {
                        click: function(r) {
                            t.goPath(e.code, e.isLogistics);
                        }
                    }
                }, [ t._v(t._s(e.title), 9, i) ]) ]);
            }, [ 7 ], t._self), r("div", {
                attrs: {
                    h_: 11
                },
                on: {
                    click: t.cancel
                }
            }, []) ], 1) ]);
        }, n = [];
        a._withStripped = !0;
    },
    15: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.currentOptions.show,
                    expression: "currentOptions.show"
                } ],
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!(!t.currentOptions.mask && !t.currentOptions.forbidClick), 1) ? r("par-overlay", {
                attrs: {
                    color: t.currentOptions.forbidClick ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)",
                    h_: 1,
                    c_: 0
                }
            }, [ r("div", {
                attrs: {
                    h_: "s3"
                }
            }) ]) : t._e(), r("div", {
                class: t.b([ t.style, t.currentOptions.position ]),
                attrs: {
                    h_: 5
                }
            }, [ t._ri(!("text" !== t.style), 6) ? r("div", {
                attrs: {
                    h_: 6
                },
                domProps: {
                    textContent: t._s(t.currentOptions.message)
                }
            }) : t._e(), t._ri(!("html" !== t.style), 8) ? r("div", {
                attrs: {
                    h_: 8
                },
                domProps: {
                    innerHTML: t._s(t.currentOptions.message)
                }
            }) : t._e(), t._ri(!("default" !== t.style), 10) ? [ t._ri(!("loading" !== t.currentOptions.type), 11) ? r("van-loading", {
                attrs: {
                    color: "white",
                    type: t.currentOptions.loadingType,
                    h_: 11,
                    c_: 1
                }
            }) : r("van-icon", {
                class: t.b("icon"),
                attrs: {
                    name: t.currentOptions.type,
                    h_: 13,
                    c_: 2
                }
            }), t._ri(!!t.isDef(t.currentOptions.message), 16) ? r("div", {
                class: t.b("text"),
                attrs: {
                    h_: 16
                },
                domProps: {
                    textContent: t._s(t.currentOptions.message)
                }
            }) : t._e() ] : t._e() ], 1) ], 1);
        }, n = [];
        a._withStripped = !0;
    },
    150: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {
                attrs: {
                    h_: 0
                }
            }, [ r("div", {
                attrs: {
                    h_: 1
                }
            }, [ t._t("default", null, {
                index: t.index,
                h_: 2
            }) ], 1), r("swiper", {
                attrs: {
                    autoplay: !0,
                    current: t.initialIndex,
                    h_: 4
                },
                on: {
                    change: t.onChange
                }
            }, t._l(t.images, function(e, a, n) {
                var i = void 0 !== n ? n : a;
                return r("swiper-item", {
                    key: a,
                    attrs: {
                        h_: 5,
                        f_: i,
                        k_: "index"
                    }
                }, [ r("div", {
                    attrs: {
                        h_: 6,
                        f_: i
                    }
                }, [ t._ri(!(!t.$slots.img && !t.$scopedSlots.img), 7, void 0 !== n ? n : a) ? t._t("img", null, {
                    index: a,
                    h_: 7,
                    f_: i
                }) : r("image", {
                    attrs: {
                        src: e,
                        h_: 8,
                        f_: i
                    }
                }) ], 1) ]);
            }, [ 5 ], t._self), 1), r("image", {
                attrs: {
                    h_: 10
                },
                on: {
                    click: t.close
                }
            }) ], 1);
        }, n = [];
        a._withStripped = !0;
    },
    152: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                } ],
                attrs: {
                    h_: 0
                }
            }, [ r("div", {
                attrs: {
                    h_: 1
                }
            }, [ r("div", {
                attrs: {
                    h_: 2
                }
            }, [ r("div", {
                attrs: {
                    h_: 3
                }
            }, [ t._v(t._s(t.title), 4) ]), t._ri(!!t.tips, 6) ? r("div", {
                attrs: {
                    h_: 6
                }
            }, [ r("span", {
                attrs: {
                    h_: 8
                }
            }, [ t._v(t._s(t.tips), 9) ]) ]) : t._e() ]), r("swiper", {
                attrs: {
                    autoplay: !0,
                    "indicator-dots": !1,
                    h_: 12
                },
                on: {
                    change: t.onChange
                }
            }, t._l(t.images, function(t, e, a) {
                var n = void 0 !== a ? a : e;
                return r("swiper-item", {
                    key: e,
                    attrs: {
                        h_: 13,
                        f_: n,
                        k_: "index"
                    }
                }, [ r("div", {
                    attrs: {
                        h_: 14,
                        f_: n
                    }
                }, [ r("image", {
                    attrs: {
                        src: t,
                        h_: 15,
                        f_: n
                    }
                }) ], 1) ]);
            }, [ 13 ], t._self), 1), r("div", {
                attrs: {
                    h_: 17
                }
            }, [ r("div", {
                attrs: {
                    h_: 18
                }
            }, []), r("div", {
                attrs: {
                    h_: 21
                }
            }, t._l(t.images, function(e, a, n) {
                var i = void 0 !== n ? n : a;
                return r("span", {
                    key: a,
                    class: {
                        activitys: a === t.active
                    },
                    attrs: {
                        h_: 22,
                        f_: i,
                        k_: "index"
                    }
                });
            }, [ 22 ], t._self), 0) ]), t._ri(!t.isdownload, 24) ? r("span", {
                class: "download",
                attrs: {
                    h_: 24
                },
                on: {
                    click: t.download
                }
            }, []) : r("span", {
                class: "download",
                attrs: {
                    h_: 26
                }
            }, []), r("div", {
                attrs: {
                    h_: 29
                }
            }, [ r("image", {
                attrs: {
                    h_: 30
                },
                on: {
                    click: t.close
                }
            }) ], 1), t._ri(!!t.iosTip, 32) ? r("div", {
                attrs: {
                    h_: 32
                }
            }, [ r("p", {
                attrs: {
                    h_: 33
                }
            }, []) ]) : t._e() ], 1) ]);
        }, n = [];
        a._withStripped = !0;
    },
    153: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {
                attrs: {
                    h_: 0
                }
            }, [ r("van-dialog", {
                attrs: {
                    show: t.show,
                    h_: 1
                },
                on: {
                    close: t.beforeDialogClose,
                    input: t.change
                }
            }, [ r("div", {
                attrs: {
                    h_: 2
                }
            }, [ r("view", {
                attrs: {
                    h_: 3
                }
            }, [ r("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.value,
                    expression: "value"
                } ],
                attrs: {
                    h_: 4
                },
                domProps: {
                    value: t.value
                },
                on: {
                    blur: function(e) {
                        t.focus = !1;
                    },
                    focus: function(e) {
                        t.focus = !0;
                    },
                    input: function(e) {
                        e.target.composing || (t.value = e.target.value);
                    }
                }
            }) ]), r("scroll-view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.value || t.isScroll,
                    expression: "value || isScroll"
                } ],
                attrs: {
                    "scroll-y": 2 < t.tipList.length,
                    h_: 6
                },
                on: {
                    scroll: t.scroll
                }
            }, t._l(t.tipList, function(e, a, n) {
                var i = void 0 !== n ? n : a;
                return r("li", {
                    key: a,
                    attrs: {
                        h_: 7,
                        f_: i,
                        k_: "index"
                    },
                    on: {
                        click: function(r) {
                            if (!("button" in r) && t._k(r.keyCode, "stop", void 0, r.key, void 0)) return null;
                            t.chooseValue(e);
                        }
                    }
                }, [ t._v(t._s(e) + "\n                ", 8, i) ]);
            }, [ 7 ], t._self), 0) ], 1), r("span", {
                attrs: {
                    h_: 10
                },
                on: {
                    click: function(e) {
                        t.change(!1);
                    }
                }
            }, [ r("image", {
                attrs: {
                    h_: 11
                }
            }) ], 1) ]), r("toast", {
                ref: "toast",
                attrs: {
                    h_: 13,
                    c_: 0
                }
            }), r("van-dialog", {
                attrs: {
                    show: t.showSuccessDialog,
                    h_: 16
                },
                on: {
                    close: function(e) {
                        t.change(!1);
                    }
                }
            }, [ r("div", {
                attrs: {
                    h_: 17
                }
            }, []) ]) ], 1);
        }, n = [];
        a._withStripped = !0;
    },
    16: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("i", {
                class: t.classs,
                style: t.style,
                attrs: {
                    h_: 0
                }
            }, [ t._ri(!!t.isSrc, 1) ? r("img", {
                attrs: {
                    src: t.name,
                    h_: 1
                }
            }) : t._e() ]);
        }, n = [];
        a._withStripped = !0;
    },
    17: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {
                class: t.b([ t.type, t.colorType ]),
                style: t.style,
                attrs: {
                    h_: 0
                }
            }, [ r("span", {
                class: t.b("spinner", t.type),
                attrs: {
                    h_: 1
                }
            }, [ t._l("spinner" === t.type ? 12 : 0, function(t, e, a) {
                return r("i", {
                    key: e,
                    attrs: {
                        h_: 2,
                        f_: void 0 !== a ? a : e,
                        k_: "index"
                    }
                });
            }, [ 2 ], t._self), t._ri(!("circular" !== t.type), 4) ? r("view", {
                class: t.b("circular"),
                attrs: {
                    h_: 4
                }
            }) : t._e() ], 1) ]);
        }, n = [];
        a._withStripped = !0;
    },
    18: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
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
        }, n = [];
        a._withStripped = !0;
    },
    2: function(t, e, r) {
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a(r(29)), i = a(r(31)), o = a(r(33)), s = a(r(21)), u = [ "success", "fail", "loading" ];
        e.default = {
            name: "toast",
            components: {
                "par-overlay": o.default,
                "van-icon": n.default,
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
    20: function(t, e, r) {
        var a, n, i, o, s, u, c, d, l;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LOGIN_TYPE = e.LOGISTIC_STATUS = e.CouponStatus = e.CouponPreferential = e.COLOR = e.OrderType = e.OrderState = e.PhotoState = e.MEGALO_ENV = void 0, 
        (a = e.MEGALO_ENV || (e.MEGALO_ENV = {})).WECHAT = "wechat", a.SWAN = "swan", a.ALIPAY = "alipay", 
        a.TT = "tt", a.WEB = "web", (n = e.PhotoState || (e.PhotoState = {})).NEW = "NEW", 
        n.CHECKING = "CHECKING", n.CHECK_OK = "CHECK_OK", n.CHECK_FAIL = "CHECK_FAIL", n.CHECK_ABNORMAL = "CHECK_ABNORMAL", 
        n.DEALING = "DEALING", n.DEAL_OK = "DEAL_OK", n.DEAL_FAIL = "DEAL_FAIL", n.COMFIRM_FT_PAY_FAIL = "COMFIRM_FT_PAY_FAIL", 
        n.DEAL_RECEIPT_ING = "DEAL_RECEIPT_ING", n.DEAL_RECEIPT_OK = "DEAL_RECEIPT_OK", 
        n.DEAL_RECEIPT_FAIL = "DEAL_RECEIPT_FAIL", n.REFINEMENT_FAIL = "REFINEMENT_FAIL", 
        (i = e.OrderState || (e.OrderState = {})).WAITING_PAY = "WAITING_PAY", i.CANCEL = "CANCEL", 
        i.IS_PAY = "IS_PAY", i.REFUND = "REFUND", i.REFUNDING = "REFUNDING", i.PAY_FAILED = "PAY_FAILED", 
        i.WAITING_RECEIPT = "WAITING_RECEIPT", i.PARTIAL_REFUNDING = "PARTIAL_REFUNDING", 
        i.PARTIAL_REFUND = "PARTIAL_REFUND", (o = e.OrderType || (e.OrderType = {})).ELECTRON = "ELECTRON", 
        o.PAPER = "PAPER", o.FAST_PAPER = "FAST_PAPER", o.SHOP_PAPER = "SHOP_PAPER", (s = e.COLOR || (e.COLOR = {})).RED = "#970013", 
        s.BLUE = "#81cfff", s.WHITE = "#fff", (u = e.CouponPreferential || (e.CouponPreferential = {})).DISCOUNT = "DISCOUNT", 
        u.EXCHANGE = "EXCHANGE", u.REDUCTION = "REDUCTION", (c = e.CouponStatus || (e.CouponStatus = {})).NEW = "NEW", 
        c.GOT = "GOT", c.USED = "USED", c.EXPIRED = "EXPIRED", (d = e.LOGISTIC_STATUS || (e.LOGISTIC_STATUS = {})).WAIT_DELIVERY = "WAIT_DELIVERY", 
        d.IS_DELIVERY = "IS_DELIVERY", d.IS_RECEIVED = "IS_RECEIVED", (l = e.LOGIN_TYPE || (e.LOGIN_TYPE = {})).WINXIN_H5 = "WINXIN_H5", 
        l.WINXIN_APP = "WINXIN_APP", l.ALI_H5 = "ALI_H5", l.ALI_APP = "ALI_APP", l.H5 = "H5", 
        l.THIRD_API = "THIRD_API";
    },
    207: function(t, e, r) {
        r.r(e);
        var a = r(208), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    208: function(t, e, r) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function n(t) {
                return function() {
                    var e = t.apply(this, arguments);
                    return new Promise(function(t, r) {
                        return function a(n, i) {
                            try {
                                var o = e[n](i), s = o.value;
                            } catch (n) {
                                return void r(n);
                            }
                            if (!o.done) return Promise.resolve(s).then(function(t) {
                                a("next", t);
                            }, function(t) {
                                a("throw", t);
                            });
                            t(s);
                        }("next");
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = a(r(19)), o = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
                }
                return t;
            }, s = r(20), u = a(r(66)), c = r(23), d = a(r(294)), l = a(r(27)), h = a(r(296)), p = a(r(298)), f = a(r(300)), _ = a(r(85));
            e.default = {
                name: "OrderDetail",
                components: {
                    SendEmail: d.default,
                    downloadImagePreview: h.default,
                    toast: l.default,
                    ImagePreview: p.default,
                    paperUpgrade: f.default
                },
                data: function() {
                    return {
                        printName: "扫码打印",
                        showDownload: !1,
                        upgradeData: [],
                        upgradeshow: !1,
                        photoOrderId: this.$route.query.photoOrderId,
                        immediatelyPay: this.$route.query.immediatelyPay,
                        data: {},
                        OrderState: s.OrderState,
                        PhotoState: s.PhotoState,
                        payment: {
                            list: [],
                            isShowPopup: !1,
                            selectedIndex: 0
                        },
                        sendEmail: {
                            show: !1,
                            value: "",
                            orderNum: ""
                        },
                        downloadPreview: {
                            show: !1,
                            images: [],
                            isReceipt: ""
                        },
                        preview: !1,
                        initialIndex: 0,
                        dealDialog: {
                            show: !1,
                            title: "温馨提示"
                        },
                        failMessage: []
                    };
                },
                decimal: function(t) {
                    return (Math.round(100 * t) / 100 || 0).toFixed(2);
                },
                watch: {
                    $route: {
                        immediate: !0,
                        handler: function() {}
                    }
                },
                computed: o({
                    clickWord: function() {
                        return "SEND" == this.data.printStatus ? "点此查看订单详情" : "PRINT_SUC" == this.data.printStatus ? "" : "点此查看附近网点";
                    },
                    themeClass: function() {
                        return this.$store.state.common.theme ? "theme-711" : "base";
                    },
                    fillBgStyles: function() {
                        return "background-color: " + this.$utils.getColorCodeByColorId(this.data.bgColor + "");
                    },
                    sessionForm: function() {
                        return "7moor|" + this.userInfo.nickName + "|" + this.userInfo.faceUrl;
                    },
                    previewImages: function() {
                        var t = [];
                        return this.data.pasterUrl ? t.push(this.data.pasterUrl) : t.push(this.data.originalUrl), 
                        this.data.templateUrl && t.push(this.data.templateUrl), this.data.receiptUrl && t.push(this.data.receiptUrl), 
                        t;
                    }
                }, (0, c.mapState)({
                    mid: function(t) {
                        return t.common.mid;
                    },
                    auth: function(t) {
                        return t.auth;
                    },
                    userInfo: function(t) {
                        return t.auth.userInfo;
                    },
                    tempPayment: function(t) {
                        return t.common.payment;
                    }
                }), {
                    isServiceTime: function() {
                        var t = (0, u.default)().hour(), e = this.data, r = e.dealType, a = e.serviceStartTime, n = e.serviceEndTime;
                        return !(0 === r && (n <= t || t < a));
                    },
                    downloadImageList: function() {
                        if (this.data) {
                            var t = this.data, e = t.orderStatus, r = t.photoStatus, a = t.isReceipt;
                            if ((e === this.OrderState.IS_PAY || e === this.OrderState.PARTIAL_REFUNDING || e === this.OrderState.PARTIAL_REFUND) && (r === this.PhotoState.DEAL_RECEIPT_OK || r === this.PhotoState.DEAL_OK && 0 === a)) {
                                var n = [ this.data.pasterUrl ];
                                return this.data.templateUrl && n.push(this.data.templateUrl), this.data.receiptUrl && n.push(this.data.receiptUrl), 
                                this.data.pasterHighUrl && n.unshift(this.data.pasterHighUrl), n;
                            }
                        }
                        return [];
                    },
                    status: function() {
                        var t, e, r = this.data, a = r.orderStatus, n = r.orderType, i = r.photoStatus, o = r.checkMessage, u = r.logisticStatus, c = r.isAllowRefund, d = r.isRefund, l = r.canBePrint, h = r.isReceipt, p = r.traceNumber, f = r.traceCompany, _ = r.payFee, v = r.refundFee, m = r.refundTime, g = r.isRefilming;
                        if (a === s.OrderState.IS_PAY) {
                            if ([ s.PhotoState.CHECK_FAIL, s.PhotoState.DEAL_FAIL, s.PhotoState.DEAL_RECEIPT_FAIL, s.PhotoState.REFINEMENT_FAIL ].includes(i)) {
                                var y = {
                                    title: {
                                        text: "相片处理失败",
                                        icon: "../../../static/icon/orderDetail/ic_sb.png"
                                    },
                                    text: o,
                                    content: "抱歉，您的照片未达标，还需要根据以下提示进行重新拍摄",
                                    buttons: [ {
                                        text: "免费重拍",
                                        click: this.handleRetakePhoto
                                    } ],
                                    bottomButtonList: [ {
                                        text: "联系客服",
                                        property: {
                                            type: "primary",
                                            size: "large"
                                        },
                                        click: this.handleContactCustomerService
                                    } ]
                                };
                                return c && !d && y.bottomButtonList.unshift({
                                    text: "申请退款",
                                    property: {
                                        type: "primary",
                                        plain: !0,
                                        size: "large"
                                    },
                                    click: this.handleRefund
                                }), y;
                            }
                            if ("1" == l) {
                                this.showDownload = !0, this.$utils.cache.getTempCache("rwyCode") && null !== this.$utils.cache.getTempCache("rwyCode") && (t = this.$utils.cache.getTempCache("rwyCode"), 
                                e = Number(t.timestamp), Date.parse(new Date()) - e < 6e5 && (this.printName = "立即打印"));
                                var w = {
                                    title: {
                                        text: this.data.orderStatusValue,
                                        icon: "PRINT_SUC" == this.data.printStatus ? "../../../static/icon/orderDetail/ic_wc.png" : "../../../static/icon/orderDetail/ic_wlz.png"
                                    },
                                    text: this.data.orderStatusDescribe,
                                    buttons: [ {
                                        text: "发送邮箱",
                                        click: this.handleShowEmail
                                    }, {
                                        text: "下载电子版",
                                        click: this.handleShowDownloadPicture
                                    }, {
                                        text: this.printName,
                                        click: this.sweepCode
                                    } ],
                                    bottomButtonList: [ {
                                        text: "联系客服",
                                        property: {
                                            type: "primary",
                                            size: "large"
                                        },
                                        click: this.handleContactCustomerService
                                    } ]
                                };
                                return "WAIT_DEAL" == this.data.printStatus && w.bottomButtonList.push({
                                    text: this.printName,
                                    property: {
                                        type: "primary",
                                        size: "large"
                                    },
                                    click: this.sweepCode
                                }), w;
                            }
                            if (i === s.PhotoState.CHECK_OK || i === s.PhotoState.DEAL_RECEIPT_ING || i === s.PhotoState.DEAL_OK && h) return {
                                title: {
                                    text: "相片处理中",
                                    icon: "../../../static/icon/orderDetail/ic_dzf.png"
                                },
                                text: "回执类业务预计等待约20~30分钟\n签证类业务预计等待约10~20分钟",
                                content: "由于当前业务对照片存在一定要求，需要进行进一步处理，请您稍等片刻",
                                bottomButtonList: [ {
                                    text: "联系客服",
                                    property: {
                                        type: "primary",
                                        size: "large"
                                    },
                                    click: this.handleContactCustomerService
                                } ]
                            };
                            if (u === s.LOGISTIC_STATUS.WAIT_DELIVERY) {
                                this.showDownload = !0;
                                var I = {
                                    title: {
                                        text: "待发货",
                                        icon: "../../../static/icon/orderDetail/ic_dfh.png"
                                    },
                                    text: "将在1个工作日内发货，请耐心等待。",
                                    buttons: [ {
                                        text: "发送邮箱",
                                        click: this.handleShowEmail
                                    }, {
                                        text: "下载电子版",
                                        click: this.handleShowDownloadPicture
                                    } ],
                                    bottomButtonList: [ {
                                        text: "联系客服",
                                        property: {
                                            type: "primary",
                                            size: "large"
                                        },
                                        click: this.handleContactCustomerService
                                    } ]
                                };
                                return n === s.OrderType.ELECTRON && I.buttons.unshift({
                                    text: "升级纸质版",
                                    click: this.handleUpgradePaperAction
                                }), I;
                            }
                            if (u === s.LOGISTIC_STATUS.IS_DELIVERY) return this.showDownload = !0, {
                                title: {
                                    text: "已发货",
                                    icon: "../../../static/icon/orderDetail/ic_wlz.png"
                                },
                                text: "快递单号：" + p + " （" + f + "）",
                                buttons: [ {
                                    text: "下载电子版",
                                    click: this.handleShowDownloadPicture
                                }, {
                                    text: "发送邮箱",
                                    click: this.handleShowEmail
                                } ],
                                bottomButtonList: [ {
                                    text: "联系客服",
                                    property: {
                                        type: "primary",
                                        size: "large"
                                    },
                                    click: this.handleContactCustomerService
                                } ]
                            };
                            if (s.PhotoState.DEAL_RECEIPT_OK === i || s.PhotoState.DEAL_OK && !h) {
                                if (this.showDownload = !0, "SELF_PRINTING_PAPER" == n) return {
                                    title: {
                                        text: this.data.orderStatusValue,
                                        icon: "../../../static/icon/orderDetail/ic_wlz.png"
                                    },
                                    text: this.data.orderStatusDescribe,
                                    buttons: [ {
                                        text: "发送邮箱",
                                        click: this.handleShowEmail
                                    }, {
                                        text: "下载电子版",
                                        click: this.handleShowDownloadPicture
                                    } ],
                                    bottomButtonList: [ {
                                        text: "联系客服",
                                        property: {
                                            type: "primary",
                                            size: "large"
                                        },
                                        click: this.handleContactCustomerService
                                    } ]
                                };
                                var P = {
                                    title: {
                                        text: "相片处理完成",
                                        icon: "../../../static/icon/orderDetail/ic_wc.png"
                                    },
                                    text: "可在下方按钮下载电子版哦",
                                    buttons: [ {
                                        text: "发送邮箱",
                                        click: this.handleShowEmail
                                    }, {
                                        text: "下载电子版",
                                        click: this.handleShowDownloadPicture
                                    } ],
                                    bottomButtonList: [ {
                                        text: "联系客服",
                                        property: {
                                            type: "primary",
                                            size: "large"
                                        },
                                        click: this.handleContactCustomerService
                                    } ]
                                };
                                return n === s.OrderType.ELECTRON && "1" == this.data.isCanUpgradePaper && P.buttons.unshift({
                                    text: "升级纸质版",
                                    click: this.handleUpgradePaperAction
                                }), P;
                            }
                        } else {
                            if (a === s.OrderState.WAITING_PAY) return {
                                title: {
                                    text: "待支付 ￥" + _,
                                    icon: "../../../static/icon/orderDetail/ic_dzf.png"
                                },
                                text: "",
                                buttons: [ {
                                    text: "去支付",
                                    click: this.handlePay
                                } ],
                                bottomButtonList: [ {
                                    text: "联系客服",
                                    property: {
                                        type: "primary",
                                        size: "large"
                                    },
                                    click: this.handleContactCustomerService
                                } ]
                            };
                            if (a === s.OrderState.REFUNDING || a === s.OrderState.PARTIAL_REFUNDING) {
                                var x = {
                                    title: {
                                        text: "退款中",
                                        icon: "../../../static/icon/orderDetail/ic_sb.png"
                                    },
                                    text: "退款将在3个工作日内处理完，请耐心等待。",
                                    bottomButtonList: [ {
                                        text: "联系客服",
                                        property: {
                                            type: "primary",
                                            size: "large"
                                        },
                                        click: this.handleContactCustomerService
                                    } ]
                                };
                                return 1 == g ? x.buttons = [ {
                                    text: "免费重拍",
                                    click: this.handleRetakePhoto
                                } ] : (a !== s.OrderState.PARTIAL_REFUNDING || s.PhotoState.DEAL_OK !== i && s.PhotoState.DEAL_RECEIPT_OK !== i) && (a !== s.OrderState.PARTIAL_REFUNDING || s.PhotoState.DEAL_OK !== i && s.PhotoState.DEAL_RECEIPT_OK !== i || h) || (this.showDownload = !0, 
                                x.buttons = [ {
                                    text: "发送邮箱",
                                    click: this.handleShowEmail
                                }, {
                                    text: "下载电子版",
                                    click: this.handleShowDownloadPicture
                                } ]), d && x.bottomButtonList.unshift({
                                    text: "退款详情",
                                    property: {
                                        type: "primary",
                                        size: "large",
                                        plain: !0
                                    },
                                    click: this.handleRefundDetail
                                }), x;
                            }
                            if (a === s.OrderState.REFUND || a === s.OrderState.PARTIAL_REFUND) {
                                var E = {
                                    title: {
                                        text: "已退款 " + v + "元",
                                        icon: "../../../static/icon/orderDetail/ic_wc.png"
                                    },
                                    text: "退款时间: " + m,
                                    bottomButtonList: [ {
                                        text: "联系客服",
                                        property: {
                                            type: "primary",
                                            size: "large"
                                        },
                                        click: this.handleContactCustomerService
                                    } ]
                                };
                                return 1 == g ? E.buttons = [ {
                                    text: "免费重拍",
                                    click: this.handleRetakePhoto
                                } ] : (a !== s.OrderState.PARTIAL_REFUND || s.PhotoState.DEAL_OK !== i && s.PhotoState.DEAL_RECEIPT_OK !== i) && (a !== s.OrderState.PARTIAL_REFUND || s.PhotoState.DEAL_OK !== i && s.PhotoState.DEAL_RECEIPT_OK !== i || h) || (this.showDownload = !0, 
                                E.buttons = [ {
                                    text: "发送邮箱",
                                    click: this.handleShowEmail
                                }, {
                                    text: "下载电子版",
                                    click: this.handleShowDownloadPicture
                                } ]), d && E.bottomButtonList.unshift({
                                    text: "退款详情",
                                    property: {
                                        type: "primary",
                                        size: "large",
                                        plain: !0
                                    },
                                    click: this.handleRefundDetail
                                }), E;
                            }
                        }
                    },
                    certificateInfoText: function() {
                        if (this.data.photoOrderId) {
                            var t = this.data.orderTypeValue || "";
                            return 1 === this.data.isReceipt && ("PAPER" === this.data.orderType ? t += "+纸质回执" : t += "+电子回执"), 
                            t += "+相片处理", "PAPER" === this.data.orderType && (t += "+(赠送电子版)"), t;
                        }
                    },
                    currentPayment: function() {
                        return this.tempPayment ? this.tempPayment : this.payment.list[this.payment.selectedIndex];
                    }
                }),
                onShow: function() {
                    var t = this;
                    return n(i.default.mark(function e() {
                        var r;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.$route.query.gotoPrinting && t.$utils.cache.getLocalCache("gotoPrinting") && (t.$utils.cache.setLocalCache("gotoPrinting", null), 
                                t.$router.push({
                                    path: "/pages/transaction/printPhoto/Index",
                                    query: {
                                        photoOrderId: t.$route.query.photoOrderId
                                    }
                                })), t.$toast.loading({
                                    message: "加载中……",
                                    duration: 0,
                                    mask: !0,
                                    selector: "#toast",
                                    forbidClick: !0
                                }), t.$buriedPoint.recordLog(o({
                                    operateCode: "orderDetailRouteInfo"
                                }, t.$route.query)), e.next = 5, Promise.all([ t.getOrderDetail(), t.getPayments() ]);

                              case 5:
                                t.checkOrders(), t.$toast.clear(), t.$route.query.rwyPaySuccess ? t.payinit() : "true" == t.immediatelyPay && t.payment && (r = t.$utils.cache.getTempCache("tempPayment"), 
                                t.immediatelyPay = !1, t.pay(r, t.$route.query.upgrade));

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                onPullDownRefresh: function() {
                    var e = this;
                    return n(i.default.mark(function r() {
                        return i.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.prev = 0, r.next = 3, Promise.all([ e.getOrderDetail(), e.getPayments() ]);

                              case 3:
                                return r.prev = 3, t.stopPullDownRefresh(), r.finish(3);

                              case 6:
                              case "end":
                                return r.stop();
                            }
                        }, r, e, [ [ 0, , 3, 6 ] ]);
                    }))();
                },
                methods: {
                    viewPrintOutlets: function() {
                        this.$toast.fail({
                            message: "功能目前暂未开放"
                        });
                    },
                    sweepCode: function() {
                        var t, e, r = this, a = this;
                        a.$utils.cache.getTempCache("rwyCode") && null !== a.$utils.cache.getTempCache("rwyCode") ? (t = a.$utils.cache.getTempCache("rwyCode"), 
                        e = Number(t.timestamp), Date.parse(new Date()) - e < 6e5 ? a.$apis.orderApis.scanning({
                            photoOrderId: a.$route.query.photoOrderId,
                            terminalCode: t.terminalCode
                        }).then(function(t) {
                            a.$router.push({
                                path: "/pages/transaction/printPhoto/Index",
                                query: {
                                    photoOrderId: a.$route.query.photoOrderId
                                }
                            });
                        }).catch(function(t) {
                            r.$utils.cache.setTempCache("rwyCode", null), r.printName = "扫码打印", a.$toast.fail({
                                message: t.message,
                                selector: "#toast",
                                duration: 2500
                            });
                        }) : a.printing()) : a.printing();
                    },
                    printing: function() {
                        var t = this;
                        wx.scanCode({
                            onlyFromCamera: !0,
                            success: function(e) {
                                e && t.$apis.orderApis.scanning({
                                    photoOrderId: t.$route.query.photoOrderId,
                                    qrContent: e.result
                                }).then(function(e) {
                                    t.$router.push({
                                        path: "/pages/transaction/printPhoto/Index",
                                        query: {
                                            photoOrderId: t.$route.query.photoOrderId
                                        }
                                    });
                                }).catch(function(e) {
                                    t.$toast({
                                        message: e.message,
                                        selector: "#toast",
                                        duration: 2500
                                    });
                                });
                            },
                            fail: function() {
                                t.$toast.fail({
                                    message: "扫码失败,请重新扫码",
                                    selector: "#toast"
                                });
                            }
                        });
                    },
                    clickView: function() {
                        "SEND" == this.data.printStatus ? this.$router.push({
                            path: "/pages/transaction/printPhoto/Index",
                            query: {
                                photoOrderId: this.$route.query.photoOrderId
                            }
                        }) : this.$toast.fail({
                            message: "功能目前暂未开放"
                        });
                    },
                    beforeDealClose: function(t) {
                        "confirm" === t.detail ? this.dealDialog.show = !1 : (this.dealDialog.show = !1, 
                        this.$router.push({
                            path: "/pages/main/photoGuide/Index",
                            query: {
                                photoInfoId: this.data.photoInfoId,
                                certificationInfoId: this.data.certificationInfoId,
                                photoOrderId: this.data.photoOrderId
                            }
                        }));
                    },
                    showPreview: function(t) {
                        this.showDownload ? this.handleShowDownloadPicture() : this.previewImages.length && (this.preview = !0, 
                        this.initialIndex = t);
                    },
                    previewText: function(t) {
                        if (this.data.photoStatus !== s.PhotoState.DEAL_OK && this.data.photoStatus !== s.PhotoState.DEAL_RECEIPT_OK) return "拍照原图";
                        switch (t) {
                          case 0:
                            return t + 1 + " / " + this.previewImages.length + " 单张照";

                          case 1:
                            return t + 1 + " / " + this.previewImages.length + " 排版照";

                          case 2:
                            return t + 1 + " / " + this.previewImages.length + " 回执照";
                        }
                    },
                    onConfirm: function(t) {
                        var e = t.detail.index;
                        this.payment.selectedIndex = e, this.payment.isShowPopup = !1, this.pay(this.payment.list[e]);
                    },
                    getPayments: function() {
                        var t = this;
                        return n(i.default.mark(function e() {
                            var r, a;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$apis.commonApis.getMerchantPayWayDetail({
                                        source: "WEIXIN_APP"
                                    });

                                  case 2:
                                    r = e.sent, a = r.data, t.payment.list = a;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    getOrderDetail: function() {
                        var t = this;
                        return n(i.default.mark(function e() {
                            var r, a;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, t.$apis.orderApis.getOrderDetail({
                                        photoOrderId: t.photoOrderId
                                    });

                                  case 3:
                                    r = e.sent, a = r.data, t.data = a, e.next = 15;
                                    break;

                                  case 8:
                                    if (e.prev = 8, e.t0 = e.catch(0), 5008 !== e.t0.code) {
                                        e.next = 14;
                                        break;
                                    }
                                    t.data = e.t0.data, e.next = 15;
                                    break;

                                  case 14:
                                    throw e.t0;

                                  case 15:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t, [ [ 0, 8 ] ]);
                        }))();
                    },
                    pay: function(e, r) {
                        var a = this;
                        return n(i.default.mark(function n() {
                            var s, u, c, d;
                            return i.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return s = void 0, s = e ? e.paymentType : a.currentPayment.paymentType, n.prev = 2, 
                                    a.$toast.loading({
                                        selector: "#toast",
                                        message: "等待支付",
                                        duration: 0
                                    }), n.next = 6, a.$apis.weAppApis.pay({
                                        orderNum: a.data.orderNum,
                                        paymentType: s,
                                        subject: a.data.certificateName,
                                        openId: a.auth.openId,
                                        returnUrl: "/pages/transaction/order/Index",
                                        upgradePaper: "1" == r ? "UPGRADE_PAPER" : ""
                                    });

                                  case 6:
                                    return u = n.sent, c = u.data, n.next = 10, t.requestPayment(c);

                                  case 10:
                                    try {
                                        a.$buriedPoint.recordLog(o({
                                            perateCode: "Payresult_load"
                                        }, a.data)), d = c.package.split("=")[1], a.$apis.weChatApis.saveFormId({
                                            formId: d,
                                            type: "PREPAY_ID",
                                            source: "WEIXIN_APP"
                                        });
                                    } catch (n) {}
                                    "1" == r ? a.$router.reLaunch({
                                        path: "/pages/transaction/order/Index"
                                    }) : "SELF_PRINTING_PAPER" == a.data.orderType ? a.payinit() : a.$router.push({
                                        path: "/pages/transaction/payResult/Index",
                                        query: {
                                            photoOrderId: a.data.photoOrderId
                                        }
                                    }), n.next = 17;
                                    break;

                                  case 14:
                                    n.prev = 14, n.t0 = n.catch(2), a.$toast({
                                        selector: "#toast",
                                        message: n.t0.message || "支付失败",
                                        duration: 1500
                                    });

                                  case 17:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, a, [ [ 2, 14 ] ]);
                        }))();
                    },
                    payinit: function() {
                        var e = this;
                        return n(i.default.mark(function r() {
                            var a, n;
                            return i.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, e.$apis.commonApis.getPaySuccessView({
                                        photoOrderId: e.$route.query.photoOrderId,
                                        source: "wxapp"
                                    });

                                  case 2:
                                    a = r.sent, n = a.data, (e.data = n).orderStatus === s.OrderState.WAITING_PAY ? setTimeout(e.payinit, 1500) : (e.$toast.clear(), 
                                    t.startPullDownRefresh());

                                  case 6:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, e);
                        }))();
                    },
                    checkOrders: function() {
                        var t = this;
                        return n(i.default.mark(function e() {
                            var r, a, n, o, s, c;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.data.assistanceTips && ((r = t.$utils.cache.getLocalCache("order-detail-customer-help-is-alert") || []).includes(t.photoOrderId) || (a = (0, 
                                    u.default)(), n = a.year(), o = a.month(), s = a.date(), c = (0, u.default)(new Date(n, o, s + 1)), 
                                    r.push(t.photoOrderId), t.$utils.cache.setLocalCache("order-detail-customer-help-is-alert", r, c.diff(a)), 
                                    _.default.alert({
                                        title: "提示",
                                        message: t.data.assistanceTips
                                    }).then(function() {})));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    handleCopyOrderNumber: function(e) {
                        var r = this;
                        return n(i.default.mark(function a() {
                            return i.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, t.setClipboardData({
                                        data: e
                                    });

                                  case 2:
                                  case "end":
                                    return r.stop();
                                }
                            }, a, r);
                        }))();
                    },
                    handleRetakePhoto: function() {
                        this.failMessage = this.data.checkMessage.split("|"), this.dealDialog.show = !0;
                    },
                    handleContactCustomerService: function() {
                        this.$router.push({
                            path: "/pages/user/customerService/Index",
                            query: {
                                customField: this.data.orderNum
                            }
                        });
                    },
                    handleRefund: function() {
                        this.$router.push({
                            path: "/pages/transaction/refund/Index",
                            query: {
                                photoOrderId: this.photoOrderId
                            }
                        });
                    },
                    handleRefundDetail: function() {
                        this.$router.push({
                            path: "/pages/transaction/refundDetail/Index",
                            query: {
                                photoOrderId: this.photoOrderId
                            }
                        });
                    },
                    handleShowEmail: function() {
                        this.sendEmail.show = !0, this.sendEmail.orderNum = this.data.orderNum;
                    },
                    handleShowDownloadPicture: function() {
                        this.downloadPreview.show = !0, this.downloadPreview.images = this.downloadImageList, 
                        this.downloadPreview.isReceipt = this.data.isReceipt;
                    },
                    handleUpgradePaperAction: function() {
                        var t = this;
                        return n(i.default.mark(function e() {
                            var r, a, n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$apis.orderApis.getUpgradePaperGoodsStands({
                                        photoOrderId: t.data.photoOrderId
                                    });

                                  case 2:
                                    if (!(1 < (r = e.sent).data.length)) {
                                        e.next = 8;
                                        break;
                                    }
                                    t.upgradeshow = !0, t.upgradeData = r.data, e.next = 13;
                                    break;

                                  case 8:
                                    return e.next = 10, t.$apis.orderApis.toUpgradePaper({
                                        photoOrderId: t.data.photoOrderId
                                    });

                                  case 10:
                                    a = e.sent, (n = a.data).toPay ? (t.$buriedPoint.recordLog({
                                        operateCode: "pay_click",
                                        source: "upgradePaper"
                                    }), t.pay(n.result, "UPGRADE_PAPER")) : t.$router.push({
                                        path: "/pages/transaction/submitOrder/Index",
                                        query: {
                                            photoInfoId: t.data.photoInfoId,
                                            upgrade: 1,
                                            code: r.data[0].code,
                                            isLogistics: r.data[0].isLogistics
                                        }
                                    });

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, t);
                        }))();
                    },
                    handlePay: function() {
                        this.pay();
                    },
                    remove: function() {
                        var e = this;
                        return n(i.default.mark(function r() {
                            return i.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, _.default.confirm({
                                        message: "订单删除后不可恢复，确认删除？"
                                    });

                                  case 2:
                                    return r.next = 4, e.$apis.commonApis.removePhotoRecord({
                                        orderId: e.data.photoOrderId
                                    });

                                  case 4:
                                    t.showToast({
                                        icon: "success",
                                        title: "删除成功"
                                    }), e.$router.back();

                                  case 6:
                                  case "end":
                                    return r.stop();
                                }
                            }, r, e);
                        }))();
                    }
                }
            };
        }).call(this, r(13).default);
    },
    209: function(t, e, r) {},
    21: function(t, e, r) {
        function a(t, e, r) {
            return e ? t + r + e : t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t) {
            return function(e, r) {
                return e && "string" != typeof e && (r = e, e = ""), e = a(t, e, "__"), r ? [ e, function t(e, r) {
                    if ("string" == typeof r) return a(e, r, "--");
                    if (Array.isArray(r)) return r.map(function(r) {
                        return t(e, r);
                    });
                    var n = {};
                    return r && Object.keys(r).forEach(function(t) {
                        n[e + "--" + t] = r[t];
                    }), n;
                }(e, r) ] : e;
            };
        };
    },
    27: function(t, e, r) {
        r.r(e);
        var a = r(15), n = r(1);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(35);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/toast/index.vue", e.default = s.exports;
    },
    29: function(t, e, r) {
        r.r(e);
        var a = r(16), n = r(3);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(30);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/icon/index.vue", e.default = s.exports;
    },
    294: function(t, e, r) {
        r.r(e);
        var a = r(153), n = r(115);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(295);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/send-email.vue", e.default = s.exports;
    },
    295: function(t, e, r) {
        var a = r(117);
        r.n(a).a;
    },
    296: function(t, e, r) {
        r.r(e);
        var a = r(152), n = r(118);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(297);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/download-image-preview.vue", e.default = s.exports;
    },
    297: function(t, e, r) {
        var a = r(120);
        r.n(a).a;
    },
    298: function(t, e, r) {
        r.r(e);
        var a = r(150), n = r(121);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(299);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/image-preview.vue", e.default = s.exports;
    },
    299: function(t, e, r) {
        var a = r(123);
        r.n(a).a;
    },
    3: function(t, e, r) {
        r.r(e);
        var a = r(4), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    30: function(t, e, r) {
        var a = r(5);
        r.n(a).a;
    },
    300: function(t, e, r) {
        r.r(e);
        var a = r(149), n = r(124);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(301);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/paper-upgrade.vue", e.default = s.exports;
    },
    301: function(t, e, r) {
        var a = r(126);
        r.n(a).a;
    },
    31: function(t, e, r) {
        r.r(e);
        var a = r(17), n = r(6);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(32);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/loading/index.vue", e.default = s.exports;
    },
    32: function(t, e, r) {
        var a = r(8);
        r.n(a).a;
    },
    33: function(t, e, r) {
        r.r(e);
        var a = r(18), n = r(9);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(34);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/components/overlay/index.vue", e.default = s.exports;
    },
    34: function(t, e, r) {
        var a = r(11);
        r.n(a).a;
    },
    344: function(t, e, r) {
        r.d(e, "a", function() {
            return a;
        }), r.d(e, "b", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {
                class: t.themeClass,
                attrs: {
                    h_: 0
                }
            }, [ r("div", {
                attrs: {
                    h_: 1
                }
            }, [ t._ri(!!t.upgradeshow, 2) ? r("paperUpgrade", {
                attrs: {
                    data: t.data,
                    upgradeData: t.upgradeData,
                    h_: 2,
                    c_: 0
                },
                on: {
                    close: function(e) {
                        t.upgradeshow = !1;
                    }
                }
            }) : t._e(), t._ri(!!t.status, 5) ? r("div", {
                style: t.status.styles,
                attrs: {
                    h_: 5
                }
            }, [ r("view", {
                attrs: {
                    h_: 6
                },
                on: {
                    click: function(e) {
                        return "button" in e || !t._k(e.keyCode, "stop", void 0, e.key, void 0) ? t.remove(e) : null;
                    }
                }
            }, [ r("image", {
                attrs: {
                    h_: 7
                }
            }) ], 1), t._ri(!!t.status.title, 9) ? r("div", {
                attrs: {
                    h_: 9
                }
            }, [ r("image", {
                attrs: {
                    src: t.status.title.icon,
                    h_: 10
                }
            }), r("span", {
                attrs: {
                    h_: 12
                }
            }, [ t._v(t._s(t.status.title.text), 13) ]) ], 1) : t._e(), t._ri(!!t.status.content, 15) ? r("div", {
                attrs: {
                    h_: 15
                }
            }, [ t._v(t._s(t.status.content), 16) ]) : t._e(), t._ri(!!t.status.text, 18) ? r("div", {
                attrs: {
                    h_: 18
                }
            }, [ t._v("\n                " + t._s(t.status.text) + "\n                ", 19), t._ri(!("SELF_PRINTING_PAPER" != t.data.orderType), 20) ? r("span", {
                attrs: {
                    h_: 20
                },
                on: {
                    click: t.clickView
                }
            }, []) : t._e() ]) : t._e(), t._ri(!(!t.status.buttons || !t.status.buttons.length), 23) ? r("div", {
                attrs: {
                    h_: 23
                }
            }, t._l(t.status.buttons, function(e, a, n) {
                var i = void 0 !== n ? n : a;
                return r("van-button", {
                    key: a,
                    style: e.styles,
                    attrs: {
                        h_: 24,
                        f_: i,
                        k_: "index"
                    },
                    on: {
                        click: e.click
                    }
                }, [ t._v(t._s(e.text), 25, i) ]);
            }, [ 24 ], t._self), 1) : t._e() ], 1) : t._e(), t._ri(!(!t.data.receiptName || !t.data.mobile), 27) ? r("van-cell", {
                attrs: {
                    h_: 27
                }
            }, [ r("span", {
                attrs: {
                    slot: "icon",
                    h_: 28
                },
                slot: "icon"
            }, [ t._ri(!!this.$store.state.common.theme, 29) ? r("image", {
                attrs: {
                    h_: 29
                }
            }) : r("image", {
                attrs: {
                    h_: 30
                }
            }) ], 1), r("div", {
                attrs: {
                    slot: "title",
                    h_: 32
                },
                slot: "title"
            }, [ r("span", {
                attrs: {
                    h_: 33
                }
            }, [ t._v(t._s(t.data.receiptName), 34) ]), r("span", {
                attrs: {
                    h_: 36
                }
            }, [ t._v(t._s(t.data.mobile), 37) ]), r("p", {
                attrs: {
                    h_: 39
                }
            }, [ t._v(t._s(t.data.province + t.data.city + t.data.district + t.data.address), 40) ]) ]) ]) : t._e(), r("van-cell-group", {
                attrs: {
                    h_: 42
                }
            }, [ t._ri(!("SELF_PRINTING_PAPER" != t.data.orderType), 43) ? r("van-cell", {
                attrs: {
                    h_: 43
                },
                on: {
                    click: t.viewPrintOutlets
                }
            }, [ r("van-icon", {
                attrs: {
                    slot: "right-icon",
                    h_: 44
                },
                slot: "right-icon"
            }) ], 1) : t._e() ], 1), r("div", {
                attrs: {
                    h_: 46
                }
            }, [ r("h2", {
                attrs: {
                    h_: 47
                }
            }, [ t._v(t._s(t.data.certificateName) + "\n                 ", 48), t._ri(!(1 != t.data.isReceipt), 49) ? r("span", {
                attrs: {
                    h_: 49
                }
            }, [ r("span", {
                attrs: {
                    h_: 51
                }
            }, [ t._v(t._s(t.data.cityName), 52) ]) ]) : t._e() ]), r("div", {
                attrs: {
                    h_: 54
                }
            }, [ r("div", {
                attrs: {
                    h_: 55
                }
            }, [ r("div", {
                attrs: {
                    h_: 56
                },
                on: {
                    click: function(e) {
                        t.showPreview(0);
                    }
                }
            }, [ t._ri(!!t.data.pasterUrl, 57) ? r("image", {
                style: t.fillBgStyles,
                attrs: {
                    src: t.data.pasterUrl,
                    h_: 57
                }
            }) : r("image", {
                style: t.fillBgStyles,
                attrs: {
                    src: t.data.originalUrl,
                    h_: 58
                }
            }) ], 1), r("div", {
                attrs: {
                    h_: 60
                }
            }, [ t._ri(!!t.data.templateUrl, 61) ? r("image", {
                style: t.fillBgStyles,
                attrs: {
                    src: t.data.templateUrl,
                    h_: 61
                },
                on: {
                    click: function(e) {
                        t.showPreview(1);
                    }
                }
            }) : t._e(), t._ri(!!t.data.receiptUrl, 63) ? r("image", {
                attrs: {
                    src: t.data.receiptUrl,
                    h_: 63
                },
                on: {
                    click: function(e) {
                        t.showPreview(2);
                    }
                }
            }) : t._e() ], 1), r("div", {
                attrs: {
                    h_: 65
                }
            }, [ r("h2", {
                attrs: {
                    h_: 66
                }
            }, [ t._v(t._s(t.certificateInfoText), 67) ]), r("span", {
                attrs: {
                    h_: 69
                }
            }, [ t._v("x" + t._s(t.data.amount), 70) ]) ]) ]), r("div", {
                attrs: {
                    h_: 72
                }
            }, []) ]) ]), r("section", {
                attrs: {
                    h_: 75
                }
            }, [ r("h2", {
                attrs: {
                    h_: 76
                }
            }, []), r("ul", {
                attrs: {
                    h_: 79
                }
            }, [ r("li", {
                attrs: {
                    h_: 80
                }
            }, [ r("span", {
                attrs: {
                    h_: 81
                }
            }, []), r("var", {
                attrs: {
                    h_: 84
                }
            }, [ t._v("￥" + t._s(t._f("decimal")(t.data.totalFee)), 85) ]) ]), r("li", {
                attrs: {
                    h_: 87
                }
            }, [ r("span", {
                attrs: {
                    h_: 88
                }
            }, []), r("var", {
                attrs: {
                    h_: 91
                }
            }, [ t._v("-￥" + t._s(t._f("decimal")(t.data.discountFee)), 92) ]) ]), r("li", {
                attrs: {
                    h_: 94
                }
            }, [ r("span", {
                attrs: {
                    h_: 95
                }
            }, []), r("var", {
                attrs: {
                    h_: 98
                }
            }, [ t._v("￥" + t._s(t._f("decimal")(t.data.deliveryFee)), 99) ]) ]), r("li", {
                attrs: {
                    h_: 101
                }
            }, [ r("span", {
                attrs: {
                    h_: 102
                }
            }, []), r("var", {
                attrs: {
                    h_: 105
                }
            }, [ t._v("￥" + t._s(t._f("decimal")(t.data.payFee)), 106) ]) ]) ]), r("div", {
                attrs: {
                    h_: 108
                }
            }, []), r("h2", {
                attrs: {
                    h_: 111
                }
            }, []), r("ul", {
                attrs: {
                    h_: 114
                }
            }, [ r("li", {
                attrs: {
                    h_: 115
                },
                on: {
                    click: function(e) {
                        t.handleCopyOrderNumber(t.data.orderNum);
                    }
                }
            }, [ r("span", {
                attrs: {
                    h_: 116
                }
            }, []), r("span", {
                attrs: {
                    h_: 119
                }
            }, [ r("button", {
                attrs: {
                    h_: 120
                }
            }, []), r("span", {
                attrs: {
                    h_: 123
                }
            }, [ t._v(t._s(t.data.orderNum), 124) ]) ]) ]), t._ri(!!t.data.receiptNum, 126) ? r("li", {
                attrs: {
                    h_: 126
                },
                on: {
                    click: function(e) {
                        t.handleCopyOrderNumber(t.data.receiptNum);
                    }
                }
            }, [ r("span", {
                attrs: {
                    h_: 127
                }
            }, []), r("span", {
                attrs: {
                    h_: 130
                }
            }, [ r("button", {
                attrs: {
                    h_: 131
                }
            }, []), r("span", {
                attrs: {
                    h_: 134
                }
            }, [ t._v(t._s(t.data.receiptNum), 135) ]) ]) ]) : t._e(), t._ri(!!t.data.traceNumber, 137) ? r("li", {
                attrs: {
                    h_: 137
                },
                on: {
                    click: function(e) {
                        t.handleCopyOrderNumber(t.data.traceNumber);
                    }
                }
            }, [ r("span", {
                attrs: {
                    h_: 138
                }
            }, []), r("span", {
                attrs: {
                    h_: 141
                }
            }, [ r("button", {
                attrs: {
                    h_: 142
                }
            }, []), r("span", {
                attrs: {
                    h_: 145
                }
            }, [ t._v(t._s(t.data.traceNumber), 146) ]) ]) ]) : t._e(), t._ri(!!t.data.traceCompany, 148) ? r("li", {
                attrs: {
                    h_: 148
                }
            }, [ r("span", {
                attrs: {
                    h_: 149
                }
            }, []), r("var", {
                attrs: {
                    h_: 152
                }
            }, [ t._v(t._s(t.data.traceCompany), 153) ]) ]) : t._e(), r("li", {
                attrs: {
                    h_: 155
                }
            }, [ r("span", {
                attrs: {
                    h_: 156
                }
            }, []), r("var", {
                attrs: {
                    h_: 159
                }
            }, [ t._v(t._s(t.data.createTime), 160) ]) ]), t._ri(!!t.data.paymentTypeValue, 162) ? r("li", {
                attrs: {
                    h_: 162
                }
            }, [ r("span", {
                attrs: {
                    h_: 163
                }
            }, []), r("var", {
                attrs: {
                    h_: 166
                }
            }, [ t._v(t._s(t.data.paymentTypeValue), 167) ]) ]) : t._e() ]) ]), t._ri(!!t.status, 169) ? r("div", {
                attrs: {
                    h_: 169
                }
            }, [ t._l(t.status.bottomButtonList, function(e, a, n) {
                var i = void 0 !== n ? n : a;
                return [ t._ri(!!e.text, 171, void 0 !== n ? n : a) ? r("van-button", {
                    key: a,
                    attrs: {
                        disabled: !!e.property.disabled,
                        plain: e.property.plain,
                        size: e.property.large,
                        type: e.property.type,
                        h_: 171,
                        f_: i,
                        k_: "index"
                    },
                    on: {
                        click: e.click
                    }
                }, [ t._v(t._s(e.text), 172, i) ]) : t._e() ];
            }, [ 170 ], t._self) ], 1) : t._e(), r("van-popup", {
                attrs: {
                    h_: 174
                },
                model: {
                    value: t.payment.isShowPopup,
                    callback: function(e) {
                        t.$set(t.payment, "isShowPopup", e);
                    },
                    expression: "payment.isShowPopup"
                }
            }, [ r("van-picker", {
                attrs: {
                    columns: t.payment.list.map(function(t) {
                        return t.name;
                    }),
                    h_: 175
                },
                on: {
                    confirm: t.onConfirm
                }
            }) ], 1), r("toast", {
                ref: "toast",
                attrs: {
                    h_: 177,
                    c_: 1
                }
            }), t._ri(!!t.sendEmail.show, 180) ? r("send-email", {
                attrs: {
                    "order-num": t.sendEmail.orderNum,
                    h_: 180,
                    c_: 2
                },
                on: {
                    close: function(e) {
                        return t.sendEmail.show = e;
                    }
                }
            }) : t._e(), t._ri(!!t.downloadPreview.show, 183) ? r("download-image-preview", {
                attrs: {
                    images: t.downloadPreview.images,
                    isReceipt: t.downloadPreview.isReceipt,
                    h_: 183,
                    c_: 3
                },
                on: {
                    close: function(e) {
                        return t.downloadPreview.show = e;
                    }
                }
            }) : t._e(), t._ri(!!t.preview, 186) ? r("image-preview", {
                attrs: {
                    images: t.previewImages,
                    initialIndex: t.initialIndex,
                    isReceipt: t.isReceipt,
                    h_: 186,
                    c_: 4
                },
                on: {
                    "on-close": function(e) {
                        t.preview = !1;
                    }
                },
                scopedSlots: t._u([ {
                    key: "default",
                    fn: function(e) {
                        return r("span", {
                            attrs: {
                                h_: "s188"
                            }
                        }, [ t._v(t._s(t.previewText(e.index)), "s189") ]);
                    }
                }, {
                    key: "img",
                    fn: function(e) {
                        return r("better-image", {
                            attrs: {
                                customStyle: t.fillBgStyles,
                                src: t.previewImages[e.index],
                                h_: "s190"
                            }
                        });
                    }
                } ])
            }) : t._e(), t._ri(!!t.dealDialog.show, 192) ? r("block", {
                attrs: {
                    h_: 192
                }
            }, [ r("van-dialog", {
                attrs: {
                    "session-from": t.sessionForm,
                    show: t.dealDialog.show,
                    title: t.dealDialog.title,
                    h_: 193
                },
                on: {
                    close: t.beforeDealClose
                }
            }, [ r("div", {
                attrs: {
                    h_: 194
                }
            }, [ r("p", {
                attrs: {
                    h_: 195
                }
            }, []), t._l(t.failMessage, function(e, a, n) {
                var i = void 0 !== n ? n : a;
                return r("li", {
                    key: a,
                    attrs: {
                        h_: 198,
                        f_: i,
                        k_: "index"
                    }
                }, [ r("span", {
                    attrs: {
                        h_: 199,
                        f_: i
                    }
                }), r("span", {
                    attrs: {
                        h_: 201,
                        f_: i
                    }
                }, [ t._v(t._s(e), 202, i) ]) ]);
            }, [ 198 ], t._self), r("p", {
                attrs: {
                    h_: 204
                }
            }, []) ], 1) ]) ], 1) : t._e(), r("van-dialog", {
                attrs: {
                    h_: 207
                }
            }) ], 1) ]);
        }, n = [];
        a._withStripped = !0;
    },
    35: function(t, e, r) {
        var a = r(12);
        r.n(a).a;
    },
    4: function(t, e, r) {
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
    464: function(t, e, r) {
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var n = a(r(465)), i = a(r(22));
        n.default.mpType = "page", new i.default(n.default).$mount();
    },
    465: function(t, e, r) {
        r.r(e);
        var a = r(344), n = r(207);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        r(466);
        var o = r(0), s = Object(o.a)(n.default, a.a, a.b, !1, null, null, null);
        s.options.__file = "src/pages/transaction/orderDetail/Index.vue", e.default = s.exports;
    },
    466: function(t, e, r) {
        var a = r(209);
        r.n(a).a;
    },
    5: function(t, e, r) {},
    6: function(t, e, r) {
        r.r(e);
        var a = r(7), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    },
    7: function(t, e, r) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, n = (a = r(21)) && a.__esModule ? a : {
            default: a
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
                b: (0, n.default)("van-loading")
            }
        };
    },
    8: function(t, e, r) {},
    9: function(t, e, r) {
        r.r(e);
        var a = r(10), n = r.n(a);
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = n.a;
    }
}, [ [ 464, "runtime", "vendor" ] ] ]);
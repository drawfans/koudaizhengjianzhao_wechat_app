(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/more/Index" ], {
    1: function(Y, Z, t) {
        t.r(Z);
        var n = t(2), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    10: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = {
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
    11: function(Y, Z, t) {},
    12: function(Y, Z, t) {},
    127: function(Y, Z, t) {
        t.r(Z);
        var n = t(128), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    128: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = {
            name: "list",
            props: {
                title: String,
                sticky: String
            }
        };
    },
    129: function(Y, Z, t) {},
    130: function(Y, Z, t) {
        t.r(Z);
        var n = t(131), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    131: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = {
            name: "list-item",
            methods: {
                handleClick: function(Y) {
                    this.$emit("click", Y);
                }
            }
        };
    },
    132: function(Y, Z, t) {},
    133: function(Y, Z, t) {
        t.r(Z);
        var n = t(134), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    134: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = {
            name: "Search",
            props: {
                value: String,
                placeholder: String
            },
            data: function() {
                return {
                    focus: !1
                };
            },
            computed: {
                currentValue: {
                    get: function() {
                        return this.value;
                    },
                    set: function(Y) {
                        this.$emit("input", Y);
                    }
                }
            },
            methods: {
                fireFocus: function() {},
                handleFocus: function() {
                    this.focus = !0, this.$emit("on-focus");
                },
                handleBlur: function() {
                    this.focus = !1, this.$emit("on-blur");
                },
                handleChange: function(Y) {
                    this.$emit("input", Y.target.value);
                },
                handleCancel: function() {
                    this.focus = !1, this.$emit("on-cancel");
                }
            }
        };
    },
    135: function(Y, Z, t) {},
    139: function(Y, Z, t) {
        t.r(Z);
        var n = t(69), e = t(50);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(144);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/tab-bar/index.vue", Z.default = J.exports;
    },
    140: function(Y, Z, t) {
        t.r(Z);
        var n = t(72), e = t(52);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(141);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/tab-bar/tabbar/index.vue", Z.default = J.exports;
    },
    141: function(Y, Z, t) {
        var n = t(54);
        t.n(n).a;
    },
    142: function(Y, Z, t) {
        t.r(Z);
        var n = t(71), e = t(55);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(143);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/tab-bar/tabbar-item/index.vue", Z.default = J.exports;
    },
    143: function(Y, Z, t) {
        var n = t(57);
        t.n(n).a;
    },
    144: function(Y, Z, t) {
        var n = t(58);
        t.n(n).a;
    },
    15: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: Y.currentOptions.show,
                    expression: "currentOptions.show"
                } ],
                attrs: {
                    h_: 0
                }
            }, [ Y._ri(!(!Y.currentOptions.mask && !Y.currentOptions.forbidClick), 1) ? t("par-overlay", {
                attrs: {
                    color: Y.currentOptions.forbidClick ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)",
                    h_: 1,
                    c_: 0
                }
            }, [ t("div", {
                attrs: {
                    h_: "s3"
                }
            }) ]) : Y._e(), t("div", {
                class: Y.b([ Y.style, Y.currentOptions.position ]),
                attrs: {
                    h_: 5
                }
            }, [ Y._ri(!("text" !== Y.style), 6) ? t("div", {
                attrs: {
                    h_: 6
                },
                domProps: {
                    textContent: Y._s(Y.currentOptions.message)
                }
            }) : Y._e(), Y._ri(!("html" !== Y.style), 8) ? t("div", {
                attrs: {
                    h_: 8
                },
                domProps: {
                    innerHTML: Y._s(Y.currentOptions.message)
                }
            }) : Y._e(), Y._ri(!("default" !== Y.style), 10) ? [ Y._ri(!("loading" !== Y.currentOptions.type), 11) ? t("van-loading", {
                attrs: {
                    color: "white",
                    type: Y.currentOptions.loadingType,
                    h_: 11,
                    c_: 1
                }
            }) : t("van-icon", {
                class: Y.b("icon"),
                attrs: {
                    name: Y.currentOptions.type,
                    h_: 13,
                    c_: 2
                }
            }), Y._ri(!!Y.isDef(Y.currentOptions.message), 16) ? t("div", {
                class: Y.b("text"),
                attrs: {
                    h_: 16
                },
                domProps: {
                    textContent: Y._s(Y.currentOptions.message)
                }
            }) : Y._e() ] : Y._e() ], 1) ], 1);
        }, e = [];
        n._withStripped = !0;
    },
    155: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("div", {
                attrs: {
                    "data-title": Y.title,
                    h_: 0
                }
            }, [ t("div", {
                attrs: {
                    h_: 1
                }
            }, [ Y._v(Y._s(Y.title), 2) ]), t("ul", {
                attrs: {
                    h_: 4
                }
            }, [ Y._t("default", null, {
                h_: 5
            }) ], 1) ]);
        }, e = [];
        n._withStripped = !0;
    },
    156: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("li", {
                attrs: {
                    sc_: "v-357a7841",
                    h_: 0
                },
                on: {
                    click: Y.handleClick
                }
            }, [ t("span", {
                attrs: {
                    h_: 1
                }
            }, [ Y._t("default", null, {
                h_: 2
            }) ], 1), t("span", {
                attrs: {
                    h_: 4
                }
            }, [ Y._t("right", null, {
                h_: 5
            }) ], 1) ]);
        }, e = [];
        n._withStripped = !0;
    },
    157: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("div", {
                attrs: {
                    h_: 0
                }
            }, [ t("div", {
                attrs: {
                    h_: 1
                },
                on: {
                    click: Y.fireFocus
                }
            }, [ Y._t("innerLeft", null, {
                h_: 2
            }), t("van-icon", {
                attrs: {
                    h_: 4
                }
            }), t("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: Y.currentValue,
                    expression: "currentValue"
                } ],
                attrs: {
                    placeholder: Y.placeholder,
                    h_: 6
                },
                domProps: {
                    value: Y.currentValue
                },
                on: {
                    blur: Y.handleBlur,
                    focus: Y.handleFocus,
                    input: [ function(Z) {
                        Z.target.composing || (Y.currentValue = Z.target.value);
                    }, Y.handleChange ]
                }
            }), t("span", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: Y.value,
                    expression: "value"
                } ],
                attrs: {
                    h_: 8
                }
            }, [ t("van-icon", {
                attrs: {
                    h_: 9
                },
                on: {
                    click: function(Z) {
                        if (!("button" in Z) && Y._k(Z.keyCode, "stop", void 0, Z.key, void 0)) return null;
                        Y.currentValue = "";
                    }
                }
            }) ], 1) ], 1), t("span", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: Y.focus,
                    expression: "focus"
                } ],
                attrs: {
                    h_: 11
                },
                on: {
                    click: Y.handleCancel
                }
            }, []) ]);
        }, e = [];
        n._withStripped = !0;
    },
    16: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("i", {
                class: Y.classs,
                style: Y.style,
                attrs: {
                    h_: 0
                }
            }, [ Y._ri(!!Y.isSrc, 1) ? t("img", {
                attrs: {
                    src: Y.name,
                    h_: 1
                }
            }) : Y._e() ]);
        }, e = [];
        n._withStripped = !0;
    },
    17: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("div", {
                class: Y.b([ Y.type, Y.colorType ]),
                style: Y.style,
                attrs: {
                    h_: 0
                }
            }, [ t("span", {
                class: Y.b("spinner", Y.type),
                attrs: {
                    h_: 1
                }
            }, [ Y._l("spinner" === Y.type ? 12 : 0, function(Y, Z, n) {
                return t("i", {
                    key: Z,
                    attrs: {
                        h_: 2,
                        f_: void 0 !== n ? n : Z,
                        k_: "index"
                    }
                });
            }, [ 2 ], Y._self), Y._ri(!("circular" !== Y.type), 4) ? t("view", {
                class: Y.b("circular"),
                attrs: {
                    h_: 4
                }
            }) : Y._e() ], 1) ]);
        }, e = [];
        n._withStripped = !0;
    },
    18: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement;
            return (Y._self._c || Z)("div", {
                style: {
                    backgroundColor: Y.color
                },
                attrs: {
                    h_: 0
                },
                on: {
                    scroll: function(Z) {
                        if (!("button" in Z) && Y._k(Z.keyCode, "prevent", void 0, Z.key, void 0)) return null;
                    }
                }
            }, [ Y._t("default", null, {
                h_: 1
            }) ], 1);
        }, e = [];
        n._withStripped = !0;
    },
    2: function(Y, Z, t) {
        function n(Y) {
            return Y && Y.__esModule ? Y : {
                default: Y
            };
        }
        Object.defineProperty(Z, "__esModule", {
            value: !0
        });
        var e = n(t(29)), L = n(t(31)), X = n(t(33)), J = n(t(21)), S = [ "success", "fail", "loading" ];
        Z.default = {
            name: "toast",
            components: {
                "par-overlay": X.default,
                "van-icon": e.default,
                "van-loading": L.default
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
                    return -1 !== S.indexOf(this.currentOptions.type) ? "default" : this.currentOptions.type;
                }
            },
            methods: {
                b: (0, J.default)("van-toast"),
                setOptions: function(Y) {
                    var Z = this;
                    clearTimeout(this.timer), this.currentOptions = Y, 0 < this.currentOptions.duration && (this.timer = setTimeout(function() {
                        Z.currentOptions.show = !1;
                    }, this.currentOptions.duration));
                },
                isDef: function(Y) {
                    return null != Y;
                },
                handleClick: function() {}
            },
            watch: {
                options: function(Y) {
                    this.$set(this, "options", Y);
                }
            }
        };
    },
    21: function(Y, Z, t) {
        function n(Y, Z, t) {
            return Z ? Y + t + Z : Y;
        }
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = function(Y) {
            return function(Z, t) {
                return Z && "string" != typeof Z && (t = Z, Z = ""), Z = n(Y, Z, "__"), t ? [ Z, function Y(Z, t) {
                    if ("string" == typeof t) return n(Z, t, "--");
                    if (Array.isArray(t)) return t.map(function(t) {
                        return Y(Z, t);
                    });
                    var e = {};
                    return t && Object.keys(t).forEach(function(Y) {
                        e[Z + "--" + Y] = t[Y];
                    }), e;
                }(Z, t) ] : Z;
            };
        };
    },
    219: function(Y, Z, t) {
        t.r(Z);
        var n = t(220), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    220: function(Y, Z, t) {
        (function(Y) {
            function n(Y) {
                return Y && Y.__esModule ? Y : {
                    default: Y
                };
            }
            function e(Y) {
                return function() {
                    var Z = Y.apply(this, arguments);
                    return new Promise(function(Y, t) {
                        return function n(e, L) {
                            try {
                                var X = Z[e](L), J = X.value;
                            } catch (e) {
                                return void t(e);
                            }
                            if (!X.done) return Promise.resolve(J).then(function(Y) {
                                n("next", Y);
                            }, function(Y) {
                                n("throw", Y);
                            });
                            Y(J);
                        }("next");
                    });
                };
            }
            Object.defineProperty(Z, "__esModule", {
                value: !0
            });
            var L = n(t(19)), X = function(Y, Z) {
                if (Array.isArray(Y)) return Y;
                if (Symbol.iterator in Object(Y)) return function(Y, Z) {
                    var t = [], n = !0, e = !1, L = void 0;
                    try {
                        for (var X, J = Y[Symbol.iterator](); !(n = (X = J.next()).done) && (t.push(X.value), 
                        !Z || t.length !== Z); n = !0) ;
                    } catch (Y) {
                        e = !0, L = Y;
                    } finally {
                        try {
                            !n && J.return && J.return();
                        } finally {
                            if (e) throw L;
                        }
                    }
                    return t;
                }(Y, Z);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }, J = Object.assign || function(Y) {
                for (var Z = 1; Z < arguments.length; Z++) {
                    var t = arguments[Z];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (Y[n] = t[n]);
                }
                return Y;
            }, S = n(t(302)), r = t(23), a = n(t(139)), i = n(t(303)), C = n(t(305)), o = n(t(307)), Q = n(t(27)), T = n(t(85));
            Z.default = {
                name: "More",
                components: {
                    TabBar: a.default,
                    ListItem: C.default,
                    List: i.default,
                    Search: o.default,
                    toast: Q.default
                },
                data: function() {
                    return {
                        searchText: "",
                        list: [],
                        hotSearch: [],
                        focus: !1,
                        searchHeight: 0,
                        scroll: null,
                        tabIndex: 0,
                        contentTop: "",
                        listTop: [],
                        DISTANCE_TOP: 109,
                        historyData: []
                    };
                },
                computed: J({}, (0, r.mapState)({
                    city: function(Y) {
                        return Y.common.city;
                    }
                }), {
                    filterList: function() {
                        var Y = this, Z = [];
                        if (/^[a-zA-Z]+$/.test(this.searchText)) {
                            var t = S.default.getFullChars(this.searchText).toUpperCase();
                            return this.list.forEach(function(Y) {
                                var n = Y.photoCardList.filter(function(Y) {
                                    return S.default.getFullChars(Y.name).toUpperCase().startsWith(t);
                                });
                                n.length && Z.push(J({}, Y, {
                                    photoCardList: n
                                }));
                            }), Z;
                        }
                        return this.list.forEach(function(t) {
                            var n = t.photoCardList.filter(function(Z) {
                                return Z.name.includes(Y.searchText);
                            });
                            n.length && Z.push(J({}, t, {
                                photoCardList: n
                            }));
                        }), Z;
                    }
                }),
                created: function() {
                    var Y = this;
                    return e(L.default.mark(function Z() {
                        return L.default.wrap(function(Z) {
                            for (;;) switch (Z.prev = Z.next) {
                              case 0:
                                Y.historyData = JSON.parse(Y.$utils.cache.getLocalCache("historyItems")), Y.$buriedPoint.recordLog({
                                    operateCode: "detail_load"
                                }), Y.tabIndex = Number(Y.$route.query.rank);

                              case 3:
                              case "end":
                                return Z.stop();
                            }
                        }, Z, Y);
                    }))();
                },
                onShow: function() {
                    var Z = this;
                    return e(L.default.mark(function t() {
                        var n, J, S, r, a, i, C;
                        return L.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (Z.$toast.loading({
                                    duration: 0,
                                    mask: !0,
                                    forbidClick: !0,
                                    message: "加载中……",
                                    selector: "#toast"
                                }), Z.city && Z.city.cityId) {
                                    t.next = 23;
                                    break;
                                }
                                return t.prev = 2, n = void 0, t.prev = 4, t.next = 7, Z.$utils.getLocation();

                              case 7:
                                n = t.sent, t.next = 12;
                                break;

                              case 10:
                                t.prev = 10, t.t0 = t.catch(4);

                              case 12:
                                return t.next = 14, Z.$apis.commonApis.getCityByLocation({
                                    longitude: n && n.longitude || "",
                                    latitude: n && n.latitude || ""
                                });

                              case 14:
                                J = t.sent, S = J.data, Z.$store.commit("common/changeCity", S.city), t.next = 23;
                                break;

                              case 19:
                                return t.prev = 19, t.t1 = t.catch(2), Z.goCity(), t.abrupt("return");

                              case 23:
                                return t.next = 25, Promise.all([ Z.$apis.commonApis.getPhotoType({
                                    cityId: Z.city.cityId
                                }), Z.$apis.commonApis.getHistorySearch({
                                    cityId: Z.city.cityId
                                }) ]);

                              case 25:
                                r = t.sent, a = X(r, 2), i = a[0].data, C = a[1].data, Z.list = i, Z.hotSearch = C, 
                                Z.$toast.clear(), Z.$nextTick(function() {
                                    Y.nextTick(e(L.default.mark(function Y() {
                                        var t;
                                        return L.default.wrap(function(Y) {
                                            for (;;) switch (Y.prev = Y.next) {
                                              case 0:
                                                return Y.next = 2, Z.list.map(function() {
                                                    var Y = e(L.default.mark(function Y(t, n) {
                                                        var e;
                                                        return L.default.wrap(function(Y) {
                                                            for (;;) switch (Y.prev = Y.next) {
                                                              case 0:
                                                                if (t.photoCardList.length) return Y.next = 3, Z.getItemTop("#rank" + n);
                                                                Y.next = 5;
                                                                break;

                                                              case 3:
                                                                e = Y.sent, Z.listTop.push(e);

                                                              case 5:
                                                              case "end":
                                                                return Y.stop();
                                                            }
                                                        }, Y, Z);
                                                    }));
                                                    return function(Z, t) {
                                                        return Y.apply(this, arguments);
                                                    };
                                                }());

                                              case 2:
                                                if (Z.$route.query.rank) return Y.next = 5, Z.getItemTop("#rank" + Z.$route.query.rank);
                                                Y.next = 8;
                                                break;

                                              case 5:
                                                t = Y.sent, Z.scrollToRank(t), delete Z.$route.query.rank;

                                              case 8:
                                                Z.$route.query.focus && (Z.focus = !0);

                                              case 9:
                                              case "end":
                                                return Y.stop();
                                            }
                                        }, Y, Z);
                                    })));
                                });

                              case 33:
                              case "end":
                                return t.stop();
                            }
                        }, t, Z, [ [ 2, 19 ], [ 4, 10 ] ]);
                    }))();
                },
                onPageScroll: function(Y) {
                    var Z = this, t = this.listTop.filter(function(t) {
                        return Y.scrollTop + Z.DISTANCE_TOP + 10 > t;
                    });
                    this.tabIndex = t.length - 1;
                },
                methods: {
                    goCity: function() {
                        this.$router.push("/packageA/pages/chooseCity/Index");
                    },
                    allDelete: function() {
                        var Y = this;
                        T.default.confirm({
                            message: "确定清空历史搜索记录？"
                        }).then(function() {
                            Y.$utils.cache.setLocalCache("historyItems", ""), Y.historyData = "";
                        }).catch(function() {});
                    },
                    getItemTop: function(Z) {
                        return new Promise(function(t) {
                            Y.createSelectorQuery().select(Z).boundingClientRect(function(Y) {
                                t(Y.top);
                            }).exec();
                        });
                    },
                    scrollToRank: function(Z) {
                        Y.pageScrollTo({
                            scrollTop: Z - this.DISTANCE_TOP,
                            duration: 0
                        });
                    },
                    recordLog: function() {
                        this.$buriedPoint.recordLog({
                            operateCode: "detail_location_click"
                        });
                    },
                    handleFocus: function() {
                        this.$buriedPoint.recordLog({
                            operateCode: "search_click"
                        }), this.focus = !0;
                    },
                    handleTabChange: function(Y) {
                        var Z = this;
                        return e(L.default.mark(function t() {
                            var n;
                            return L.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n = Y.detail.index, Z.tabIndex = n, Z.scrollToRank(Z.listTop[n]);

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, Z);
                        }))();
                    },
                    handleCancel: function() {
                        this.$buriedPoint.recordLog({
                            operateCode: "exit_after_search"
                        }), this.searchText = "", this.focus = !1;
                    },
                    goGuide: function(Y) {
                        var Z = [], t = {
                            certificationInfoId: Y.certificationInfoId,
                            name: Y.name
                        };
                        this.$utils.cache.getLocalCache("historyItems") ? (Z = JSON.parse(this.$utils.cache.getLocalCache("historyItems")), 
                        -1 == JSON.stringify(Z).indexOf(JSON.stringify(t)) && Z.unshift(t), 9 == Z.length && Z.pop()) : Z.push(t), 
                        this.historyData = Z, this.$utils.cache.setLocalCache("historyItems", JSON.stringify(Z)), 
                        Y.targetUrl ? this.$router.push({
                            path: Y.targetUrl
                        }) : (this.focus ? this.$buriedPoint.recordLog({
                            operateCode: "searchresult_click",
                            name: Y.name,
                            certificateType: Y.certificateType,
                            certificateCode: Y.certificateCode,
                            certificationInfoId: Y.certificationInfoId
                        }) : this.$buriedPoint.recordLog(J({
                            operateCode: "icon_click"
                        }, Y, {
                            page: "more"
                        })), -1 !== this.city.cityId || !Y.isReceipt && 0 !== Y.isAllCity ? Y.isCustomSize ? this.$router.push({
                            path: "/pages/main/customPhotoSize/Index",
                            query: {
                                certificationInfoId: Y.certificationInfoId
                            }
                        }) : this.$router.push({
                            path: "/pages/main/photoGuide/Index",
                            query: {
                                certificationInfoId: Y.certificationInfoId
                            }
                        }) : this.$router.push({
                            path: "/packageA/pages/chooseCity/Index"
                        }));
                    }
                }
            };
        }).call(this, t(13).default);
    },
    221: function(Y, Z, t) {},
    27: function(Y, Z, t) {
        t.r(Z);
        var n = t(15), e = t(1);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(35);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/toast/index.vue", Z.default = J.exports;
    },
    29: function(Y, Z, t) {
        t.r(Z);
        var n = t(16), e = t(3);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(30);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/icon/index.vue", Z.default = J.exports;
    },
    3: function(Y, Z, t) {
        t.r(Z);
        var n = t(4), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    30: function(Y, Z, t) {
        var n = t(5);
        t.n(n).a;
    },
    302: function(Y, Z, t) {
        function n(Y, Z, t) {
            return Z in Y ? Object.defineProperty(Y, Z, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Y[Z] = t, Y;
        }
        Object.defineProperty(Z, "__esModule", {
            value: !0
        });
        var e = function() {
            function Y(Y) {
                this.initialize(Y);
            }
            var Z = {
                checkPolyphone: !1,
                charcase: "default"
            };
            Y.fn = Y.prototype = {
                init: function(Y) {
                    this.options = t(Z, Y);
                },
                initialize: function(Y) {
                    var Z;
                    this.init(Y), this.char_dict = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY", 
                    this.full_dict = {
                        a: "啊阿锕",
                        ai: "埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭",
                        an: "鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯",
                        ang: "肮昂盎",
                        ao: "凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖",
                        ba: "芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃",
                        bai: "白柏百摆佰败拜稗薜掰鞴",
                        ban: "斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨",
                        bang: "邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃",
                        bao: "苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅",
                        bo: "剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛",
                        bei: "杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾",
                        ben: "奔苯本笨畚坌锛",
                        beng: "崩绷甭泵蹦迸唪嘣甏",
                        bi: "逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀",
                        bian: "鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊",
                        biao: "标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔",
                        bie: "鳖憋别瘪蹩鳘",
                        bin: "彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓",
                        bing: "兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹",
                        bu: "捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭",
                        ca: "擦嚓礤",
                        cai: "猜裁材才财睬踩采彩菜蔡",
                        can: "餐参蚕残惭惨灿骖璨粲黪",
                        cang: "苍舱仓沧藏伧",
                        cao: "操糙槽曹草艹嘈漕螬艚",
                        ce: "厕策侧册测刂帻恻",
                        ceng: "层蹭噌",
                        cha: "插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩",
                        chai: "拆柴豺侪茈瘥虿龇",
                        chan: "搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔",
                        chang: "昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳",
                        chao: "超抄钞朝嘲潮巢吵炒怊绉晁耖",
                        che: "车扯撤掣彻澈坼屮砗",
                        chen: "郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀",
                        cheng: "撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲",
                        chi: "吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑",
                        chong: "充冲虫崇宠茺忡憧铳艟",
                        chou: "抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋",
                        chu: "臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜",
                        chuan: "揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡",
                        chuang: "疮窗幢床闯创怆",
                        chui: "吹炊捶锤垂陲棰槌",
                        chun: "春椿醇唇淳纯蠢促莼沌肫朐鹑蝽",
                        chuo: "戳绰蔟辶辍镞踔龊",
                        ci: "疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑",
                        cong: "聪葱囱匆从丛偬苁淙骢琮璁枞",
                        cu: "凑粗醋簇猝殂蹙",
                        cuan: "蹿篡窜汆撺昕爨",
                        cui: "摧崔催脆瘁粹淬翠萃悴璀榱隹",
                        cun: "村存寸磋忖皴",
                        cuo: "撮搓措挫错厝脞锉矬痤鹾蹉躜",
                        da: "搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑",
                        dai: "呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛",
                        dan: "耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪",
                        dang: "当挡党荡档谠凼菪宕砀铛裆",
                        dao: "刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛",
                        de: "德得的锝",
                        deng: "蹬灯登等瞪凳邓噔嶝戥磴镫簦",
                        di: "堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶",
                        dian: "颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮",
                        diao: "碉叼雕凋刁掉吊钓调轺铞蜩粜貂",
                        die: "跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎",
                        ding: "丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊",
                        dong: "东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫",
                        dou: "兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡",
                        du: "都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩",
                        duan: "端短锻段断缎彖椴煅簖",
                        dui: "堆兑队对怼憝碓",
                        dun: "墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸",
                        duo: "掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱",
                        e: "蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄",
                        en: "恩蒽摁唔嗯",
                        er: "而儿耳尔饵洱二贰迩珥铒鸸鲕",
                        fa: "发罚筏伐乏阀法珐垡砝",
                        fan: "藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯",
                        fang: "坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂",
                        fei: "菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱",
                        fen: "芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢",
                        feng: "丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜",
                        fu: "佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆",
                        ga: "噶嘎蛤尬呷尕尜旮钆",
                        gai: "该改概钙盖溉丐陔垓戤赅胲",
                        gan: "干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐",
                        gang: "冈刚钢缸肛纲岗港戆罡颃筻",
                        gong: "杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥",
                        gao: "篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆",
                        ge: "哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂",
                        gei: "给",
                        gen: "根跟亘茛哏艮",
                        geng: "耕更庚羹埂耿梗哽赓鲠",
                        gou: "钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲",
                        gu: "辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘",
                        gua: "刮瓜剐寡挂褂卦诖呱栝鸹",
                        guai: "乖拐怪哙",
                        guan: "棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏",
                        guang: "光广逛犷桄胱疒",
                        gui: "瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜",
                        gun: "辊滚棍丨衮绲磙鲧",
                        guo: "锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈",
                        ha: "哈",
                        hai: "骸孩海氦亥害骇咴嗨颏醢",
                        han: "酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾",
                        hen: "夯痕很狠恨",
                        hang: "杭航沆绗珩桁",
                        hao: "壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝",
                        he: "呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮",
                        hei: "嘿黑",
                        heng: "哼亨横衡恒訇蘅",
                        hong: "轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓",
                        hou: "喉侯猴吼厚候后堠後逅瘊篌糇鲎骺",
                        hu: "呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛",
                        hua: "花哗华猾滑画划化话劐浍骅桦铧稞",
                        huai: "槐徊怀淮坏还踝",
                        huan: "欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟",
                        huang: "荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇",
                        hui: "灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾",
                        hun: "荤昏婚魂浑混诨馄阍溷缗",
                        huo: "豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖",
                        ji: "击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂",
                        jia: "嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏",
                        jian: "歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯",
                        jiang: "僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇",
                        jiao: "蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛",
                        jie: "窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫",
                        jin: "巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜",
                        jing: "劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌",
                        jiong: "炯窘冂迥扃",
                        jiu: "揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏",
                        ju: "鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫",
                        juan: "捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽",
                        jue: "撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖",
                        jun: "均菌钧军君峻俊竣浚郡骏捃狻皲筠麇",
                        ka: "喀咖卡佧咔胩",
                        ke: "咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁",
                        kai: "开揩楷凯慨剀垲蒈忾恺铠锎",
                        kan: "刊堪勘坎砍看侃凵莰莶戡龛瞰",
                        kang: "康慷糠扛抗亢炕坑伉闶钪",
                        kao: "考拷烤靠尻栲犒铐",
                        ken: "肯啃垦恳垠裉颀",
                        keng: "吭忐铿",
                        kong: "空恐孔控倥崆箜",
                        kou: "抠口扣寇芤蔻叩眍筘",
                        ku: "枯哭窟苦酷库裤刳堀喾绔骷",
                        kua: "夸垮挎跨胯侉",
                        kuai: "块筷侩快蒯郐蒉狯脍",
                        kuan: "宽款髋",
                        kuang: "匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶",
                        kui: "亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬",
                        kun: "坤昆捆困悃阃琨锟醌鲲髡",
                        kuo: "括扩廓阔蛞",
                        la: "垃拉喇蜡腊辣啦剌摺邋旯砬瘌",
                        lai: "莱来赖崃徕涞濑赉睐铼癞籁",
                        lan: "蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴",
                        lang: "琅榔狼廊郎朗浪莨蒗啷阆锒稂螂",
                        lao: "捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪",
                        le: "勒乐肋仂叻嘞泐鳓",
                        lei: "雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹",
                        ling: "棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮",
                        leng: "楞愣",
                        li: "厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧",
                        lian: "俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢",
                        liang: "粮凉梁粱良两辆量晾亮谅墚椋踉靓魉",
                        liao: "撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩耢",
                        lie: "列裂烈劣猎冽埒洌趔躐鬣",
                        lin: "琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟",
                        liu: "溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏",
                        long: "龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃",
                        lou: "楼娄搂篓漏陋喽嵝镂瘘耧蝼髅",
                        lu: "芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈",
                        lv: "驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛",
                        luan: "峦孪滦卵乱栾鸾銮",
                        lue: "掠略锊",
                        lun: "轮伦仑沦纶论囵",
                        luo: "萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒",
                        ma: "妈麻玛码蚂马骂嘛吗唛犸嬷杩麽",
                        mai: "埋买麦卖迈脉劢荬咪霾",
                        man: "瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔",
                        mang: "芒茫盲忙莽邙漭朦硭蟒",
                        meng: "氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾",
                        miao: "猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱",
                        mao: "茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦",
                        me: "么",
                        mei: "玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅",
                        men: "门闷们扪玟焖懑钔",
                        mi: "眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋",
                        mian: "棉眠绵冕免勉娩缅面沔湎腼眄",
                        mie: "蔑灭咩蠛篾",
                        min: "民抿皿敏悯闽苠岷闵泯珉",
                        ming: "明螟鸣铭名命冥茗溟暝瞑酩",
                        miu: "谬",
                        mo: "摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘",
                        mou: "谋牟某厶哞婺眸鍪",
                        mu: "拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼",
                        na: "拿哪呐钠那娜纳内捺肭镎衲箬",
                        nai: "氖乃奶耐奈鼐艿萘柰",
                        nan: "南男难囊喃囡楠腩蝻赧",
                        nao: "挠脑恼闹孬垴猱瑙硇铙蛲",
                        ne: "淖呢讷",
                        nei: "馁",
                        nen: "嫩能枘恁",
                        ni: "妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵",
                        nian: "蔫拈年碾撵捻念廿辇黏鲇鲶",
                        niang: "娘酿",
                        niao: "鸟尿茑嬲脲袅",
                        nie: "捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑",
                        nin: "您柠",
                        ning: "狞凝宁拧泞佞蓥咛甯聍",
                        niu: "牛扭钮纽狃忸妞蚴",
                        nong: "脓浓农侬",
                        nu: "奴努怒呶帑弩胬孥驽",
                        nv: "女恧钕衄",
                        nuan: "暖",
                        nuenue: "虐",
                        nue: "疟谑",
                        nuo: "挪懦糯诺傩搦喏锘",
                        ou: "哦欧鸥殴藕呕偶沤怄瓯耦",
                        pa: "啪趴爬帕怕琶葩筢",
                        pai: "拍排牌徘湃派俳蒎",
                        pan: "攀潘盘磐盼畔判叛爿泮袢襻蟠蹒",
                        pang: "乓庞旁耪胖滂逄",
                        pao: "抛咆刨炮袍跑泡匏狍庖脬疱",
                        pei: "呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈",
                        pen: "喷盆湓",
                        peng: "砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛",
                        pi: "砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔",
                        pian: "篇偏片骗谝骈犏胼褊翩蹁",
                        piao: "飘漂瓢票剽嘌嫖缥殍瞟螵",
                        pie: "撇瞥丿苤氕",
                        pin: "拼频贫品聘拚姘嫔榀牝颦",
                        ping: "乒坪苹萍平凭瓶评屏俜娉枰鲆",
                        po: "坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸",
                        pou: "剖裒踣",
                        pu: "扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼",
                        qi: "期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒",
                        qia: "掐恰洽葜",
                        qian: "牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝",
                        qiang: "枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄",
                        qiao: "橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒",
                        qie: "切茄且怯窃郄唼惬妾挈锲箧",
                        qin: "钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾",
                        qing: "青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥",
                        qiong: "琼穷邛茕穹筇銎",
                        qiu: "秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽",
                        qu: "趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢",
                        quan: "圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈",
                        que: "缺炔瘸却鹊榷确雀阙悫",
                        qun: "裙群逡",
                        ran: "然燃冉染苒髯",
                        rang: "瓤壤攘嚷让禳穰",
                        rao: "饶扰绕荛娆桡",
                        ruo: "惹若弱",
                        re: "热偌",
                        ren: "壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽",
                        reng: "扔仍",
                        ri: "日",
                        rong: "戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾",
                        rou: "揉柔肉糅蹂鞣",
                        ru: "茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥",
                        ruan: "软阮朊",
                        rui: "蕊瑞锐芮蕤睿蚋",
                        run: "闰润",
                        sa: "撒洒萨卅仨挲飒",
                        sai: "腮鳃塞赛噻",
                        san: "三叁伞散彡馓氵毵糁霰",
                        sang: "桑嗓丧搡磉颡",
                        sao: "搔骚扫嫂埽臊瘙鳋",
                        se: "瑟色涩啬铩铯穑",
                        sen: "森",
                        seng: "僧",
                        sha: "莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨",
                        shai: "筛晒酾",
                        shan: "珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝",
                        shang: "墒伤商赏晌上尚裳垧绱殇熵觞",
                        shao: "梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄",
                        she: "奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝",
                        shen: "砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃",
                        sheng: "声生甥牲升绳省盛剩胜圣丞渑媵眚笙",
                        shi: "师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺",
                        shou: "收手首守寿授售受瘦兽扌狩绶艏",
                        shu: "蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬",
                        shua: "刷耍唰涮",
                        shuai: "摔衰甩帅蟀",
                        shuan: "栓拴闩",
                        shuang: "霜双爽孀",
                        shui: "谁水睡税",
                        shun: "吮瞬顺舜恂",
                        shuo: "说硕朔烁蒴搠嗍濯妁槊铄",
                        si: "斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥",
                        song: "松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦",
                        sou: "搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋",
                        su: "苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣",
                        suan: "酸蒜算",
                        sui: "虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢",
                        sun: "孙损笋荪狲飧榫跣隼",
                        suo: "梭唆缩琐索锁所唢嗦娑桫睃羧",
                        ta: "塌他它她塔獭挞蹋踏闼溻遢榻沓",
                        tai: "胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐",
                        tan: "坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃",
                        tang: "汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣",
                        thang: "倘躺淌",
                        theng: "趟烫",
                        tao: "掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕",
                        te: "特",
                        teng: "藤腾疼誊滕",
                        ti: "梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍",
                        tian: "天添填田甜恬舔腆掭忝阗殄畋钿蚺",
                        tiao: "条迢眺跳佻祧铫窕龆鲦",
                        tie: "贴铁帖萜餮",
                        ting: "厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆",
                        tong: "通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼",
                        tou: "偷投头透亠",
                        tu: "凸秃突图徒途涂屠土吐兔堍荼菟钍酴",
                        tuan: "湍团疃",
                        tui: "推颓腿蜕褪退忒煺",
                        tun: "吞屯臀饨暾豚窀",
                        tuo: "拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍",
                        wa: "挖哇蛙洼娃瓦袜佤娲腽",
                        wai: "歪外",
                        wan: "豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢",
                        wang: "汪王亡枉网往旺望忘妄罔尢惘辋魍",
                        wei: "威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔",
                        wen: "瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯",
                        weng: "嗡翁瓮蓊蕹",
                        wo: "挝蜗涡窝我斡卧握沃莴幄渥杌肟龌",
                        wu: "巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯",
                        xi: "昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷",
                        xia: "瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠",
                        xian: "锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹",
                        xiang: "相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨",
                        xiao: "萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈",
                        xie: "楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞",
                        xin: "薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫",
                        xing: "星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎",
                        xiong: "兄凶胸匈汹雄熊芎",
                        xiu: "休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹",
                        xu: "墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑",
                        xuan: "轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃",
                        xue: "靴薛学穴雪血噱泶鳕",
                        xun: "勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟",
                        ya: "压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖",
                        yan: "焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹",
                        yang: "殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅",
                        yao: "邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐",
                        ye: "椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘",
                        yi: "一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟",
                        yin: "茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈",
                        ying: "英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂",
                        yo: "哟唷",
                        yong: "拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔",
                        you: "幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬",
                        yu: "迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉",
                        yuan: "鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋",
                        yue: "曰约越跃钥岳粤月悦阅龠樾刖钺",
                        yun: "耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲",
                        za: "匝砸杂拶咂",
                        zai: "栽哉灾宰载再在咱崽甾",
                        zan: "攒暂赞瓒昝簪糌趱錾",
                        zang: "赃脏葬奘戕臧",
                        zao: "遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫",
                        ze: "责择则泽仄赜啧迮昃笮箦舴",
                        zei: "贼",
                        zen: "怎谮",
                        zeng: "增憎曾赠缯甑罾锃",
                        zha: "扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄",
                        zhai: "摘斋宅窄债寨砦",
                        zhan: "瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃",
                        zhang: "樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑",
                        zhao: "招昭找沼赵照罩兆肇召爪诏棹钊笊",
                        zhe: "遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭",
                        zhen: "珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩",
                        zheng: "蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝",
                        zhi: "芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯",
                        zhong: "中盅忠钟衷终种肿重仲众冢锺螽舂舯踵",
                        zhou: "舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷",
                        zhu: "珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈",
                        zhua: "抓",
                        zhuai: "拽",
                        zhuan: "专砖转撰赚篆抟啭颛",
                        zhuang: "桩庄装妆撞壮状丬",
                        zhui: "椎锥追赘坠缀萑骓缒",
                        zhun: "谆准",
                        zhuo: "捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫",
                        zi: "兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭",
                        zong: "鬃棕踪宗综总纵腙粽",
                        zou: "邹走奏揍鄹鲰",
                        zu: "租足卒族祖诅阻组俎菹啐徂驵蹴",
                        zuan: "钻纂攥缵",
                        zui: "嘴醉最罪",
                        zun: "尊遵撙樽鳟",
                        zuo: "昨左佐柞做作坐座阝阼胙祚酢",
                        cou: "薮楱辏腠",
                        nang: "攮哝囔馕曩",
                        o: "喔",
                        dia: "嗲",
                        chuai: "嘬膪踹",
                        cen: "岑涔",
                        diu: "铥",
                        nou: "耨",
                        fou: "缶",
                        bia: "髟"
                    }, this.polyphone = (n(Z = {
                        19969: "DZ",
                        19975: "WM",
                        19988: "QJ",
                        20048: "YL",
                        20056: "SC",
                        20060: "NM",
                        20094: "QG",
                        20127: "QJ",
                        20167: "QC",
                        20193: "YG",
                        20250: "KH",
                        20256: "ZC",
                        20282: "SC",
                        20285: "QJG",
                        20291: "TD",
                        20314: "YD",
                        20340: "NE",
                        20375: "TD",
                        20389: "YJ",
                        20391: "CZ",
                        20415: "PB",
                        20446: "YS",
                        20447: "SQ",
                        20504: "TC",
                        20608: "KG",
                        20854: "QJ",
                        20857: "ZC",
                        20911: "PF"
                    }, "20504", "TC"), n(Z, "20608", "KG"), n(Z, "20854", "QJ"), n(Z, "20857", "ZC"), 
                    n(Z, "20911", "PF"), n(Z, "20985", "AW"), n(Z, "21032", "PB"), n(Z, "21048", "XQ"), 
                    n(Z, "21049", "SC"), n(Z, "21089", "YS"), n(Z, "21119", "JC"), n(Z, "21242", "SB"), 
                    n(Z, "21273", "SC"), n(Z, "21305", "YP"), n(Z, "21306", "QO"), n(Z, "21330", "ZC"), 
                    n(Z, "21333", "SDC"), n(Z, "21345", "QK"), n(Z, "21378", "CA"), n(Z, "21397", "SC"), 
                    n(Z, "21414", "XS"), n(Z, "21442", "SC"), n(Z, "21477", "JG"), n(Z, "21480", "TD"), 
                    n(Z, "21484", "ZS"), n(Z, "21494", "YX"), n(Z, "21505", "YX"), n(Z, "21512", "HG"), 
                    n(Z, "21523", "XH"), n(Z, "21537", "PB"), n(Z, "21542", "PF"), n(Z, "21549", "KH"), 
                    n(Z, "21571", "E"), n(Z, "21574", "DA"), n(Z, "21588", "TD"), n(Z, "21589", "O"), 
                    n(Z, "21618", "ZC"), n(Z, "21621", "KHA"), n(Z, "21632", "ZJ"), n(Z, "21654", "KG"), 
                    n(Z, "21679", "LKG"), n(Z, "21683", "KH"), n(Z, "21710", "A"), n(Z, "21719", "YH"), 
                    n(Z, "21734", "WOE"), n(Z, "21769", "A"), n(Z, "21780", "WN"), n(Z, "21804", "XH"), 
                    n(Z, "21834", "A"), n(Z, "21899", "ZD"), n(Z, "21903", "RN"), n(Z, "21908", "WO"), 
                    n(Z, "21939", "ZC"), n(Z, "21956", "SA"), n(Z, "21964", "YA"), n(Z, "21970", "TD"), 
                    n(Z, "22003", "A"), n(Z, "22031", "JG"), n(Z, "22040", "XS"), n(Z, "22060", "ZC"), 
                    n(Z, "22066", "ZC"), n(Z, "22079", "MH"), n(Z, "22129", "XJ"), n(Z, "22179", "XA"), 
                    n(Z, "22237", "NJ"), n(Z, "22244", "TD"), n(Z, "22280", "JQ"), n(Z, "22300", "YH"), 
                    n(Z, "22313", "XW"), n(Z, "22331", "YQ"), n(Z, "22343", "YJ"), n(Z, "22351", "PH"), 
                    n(Z, "22395", "DC"), n(Z, "22412", "TD"), n(Z, "22484", "PB"), n(Z, "22500", "PB"), 
                    n(Z, "22534", "ZD"), n(Z, "22549", "DH"), n(Z, "22561", "PB"), n(Z, "22612", "TD"), 
                    n(Z, "22771", "KQ"), n(Z, "22831", "HB"), n(Z, "22841", "JG"), n(Z, "22855", "QJ"), 
                    n(Z, "22865", "XQ"), n(Z, "23013", "ML"), n(Z, "23081", "WM"), n(Z, "23487", "SX"), 
                    n(Z, "23558", "QJ"), n(Z, "23561", "YW"), n(Z, "23586", "YW"), n(Z, "23614", "YW"), 
                    n(Z, "23615", "SN"), n(Z, "23631", "PB"), n(Z, "23646", "ZS"), n(Z, "23663", "ZT"), 
                    n(Z, "23673", "YG"), n(Z, "23762", "TD"), n(Z, "23769", "ZS"), n(Z, "23780", "QJ"), 
                    n(Z, "23884", "QK"), n(Z, "24055", "XH"), n(Z, "24113", "DC"), n(Z, "24162", "ZC"), 
                    n(Z, "24191", "GA"), n(Z, "24273", "QJ"), n(Z, "24324", "NL"), n(Z, "24377", "TD"), 
                    n(Z, "24378", "QJ"), n(Z, "24439", "PF"), n(Z, "24554", "ZS"), n(Z, "24683", "TD"), 
                    n(Z, "24694", "WE"), n(Z, "24733", "LK"), n(Z, "24925", "TN"), n(Z, "25094", "ZG"), 
                    n(Z, "25100", "XQ"), n(Z, "25103", "XH"), n(Z, "25153", "PB"), n(Z, "25170", "PB"), 
                    n(Z, "25179", "KG"), n(Z, "25203", "PB"), n(Z, "25240", "ZS"), n(Z, "25282", "FB"), 
                    n(Z, "25303", "NA"), n(Z, "25324", "KG"), n(Z, "25341", "ZY"), n(Z, "25373", "WZ"), 
                    n(Z, "25375", "XJ"), n(Z, "25384", "A"), n(Z, "25457", "A"), n(Z, "25528", "SD"), 
                    n(Z, "25530", "SC"), n(Z, "25552", "TD"), n(Z, "25774", "ZC"), n(Z, "25874", "ZC"), 
                    n(Z, "26044", "YW"), n(Z, "26080", "WM"), n(Z, "26292", "PB"), n(Z, "26333", "PB"), 
                    n(Z, "26355", "ZY"), n(Z, "26366", "CZ"), n(Z, "26397", "ZC"), n(Z, "26399", "QJ"), 
                    n(Z, "26415", "ZS"), n(Z, "26451", "SB"), n(Z, "26526", "ZC"), n(Z, "26552", "JG"), 
                    n(Z, "26561", "TD"), n(Z, "26588", "JG"), n(Z, "26597", "CZ"), n(Z, "26629", "ZS"), 
                    n(Z, "26638", "YL"), n(Z, "26646", "XQ"), n(Z, "26653", "KG"), n(Z, "26657", "XJ"), 
                    n(Z, "26727", "HG"), n(Z, "26894", "ZC"), n(Z, "26937", "ZS"), n(Z, "26946", "ZC"), 
                    n(Z, "26999", "KJ"), n(Z, "27099", "KJ"), n(Z, "27449", "YQ"), n(Z, "27481", "XS"), 
                    n(Z, "27542", "ZS"), n(Z, "27663", "ZS"), n(Z, "27748", "TS"), n(Z, "27784", "SC"), 
                    n(Z, "27788", "ZD"), n(Z, "27795", "TD"), n(Z, "27812", "O"), n(Z, "27850", "PB"), 
                    n(Z, "27852", "MB"), n(Z, "27895", "SL"), n(Z, "27898", "PL"), n(Z, "27973", "QJ"), 
                    n(Z, "27981", "KH"), n(Z, "27986", "HX"), n(Z, "27994", "XJ"), n(Z, "28044", "YC"), 
                    n(Z, "28065", "WG"), n(Z, "28177", "SM"), n(Z, "28267", "QJ"), n(Z, "28291", "KH"), 
                    n(Z, "28337", "ZQ"), n(Z, "28463", "TL"), n(Z, "28548", "DC"), n(Z, "28601", "TD"), 
                    n(Z, "28689", "PB"), n(Z, "28805", "JG"), n(Z, "28820", "QG"), n(Z, "28846", "PB"), 
                    n(Z, "28952", "TD"), n(Z, "28975", "ZC"), n(Z, "29100", "A"), n(Z, "29325", "QJ"), 
                    n(Z, "29575", "SL"), n(Z, "29602", "FB"), n(Z, "30010", "TD"), n(Z, "30044", "CX"), 
                    n(Z, "30058", "PF"), n(Z, "30091", "YSP"), n(Z, "30111", "YN"), n(Z, "30229", "XJ"), 
                    n(Z, "30427", "SC"), n(Z, "30465", "SX"), n(Z, "30631", "YQ"), n(Z, "30655", "QJ"), 
                    n(Z, "30684", "QJG"), n(Z, "30707", "SD"), n(Z, "30729", "XH"), n(Z, "30796", "LG"), 
                    n(Z, "30917", "PB"), n(Z, "31074", "NM"), n(Z, "31085", "JZ"), n(Z, "31109", "SC"), 
                    n(Z, "31181", "ZC"), n(Z, "31192", "MLB"), n(Z, "31293", "JQ"), n(Z, "31400", "YX"), 
                    n(Z, "31584", "YJ"), n(Z, "31896", "ZN"), n(Z, "31909", "ZY"), n(Z, "31995", "XJ"), 
                    n(Z, "32321", "PF"), n(Z, "32327", "ZY"), n(Z, "32418", "HG"), n(Z, "32420", "XQ"), 
                    n(Z, "32421", "HG"), n(Z, "32438", "LG"), n(Z, "32473", "GJ"), n(Z, "32488", "TD"), 
                    n(Z, "32521", "QJ"), n(Z, "32527", "PB"), n(Z, "32562", "ZSQ"), n(Z, "32564", "JZ"), 
                    n(Z, "32735", "ZD"), n(Z, "32793", "PB"), n(Z, "33071", "PF"), n(Z, "33098", "XL"), 
                    n(Z, "33100", "YA"), n(Z, "33152", "PB"), n(Z, "33261", "CX"), n(Z, "33324", "BP"), 
                    n(Z, "33333", "TD"), n(Z, "33406", "YA"), n(Z, "33426", "WM"), n(Z, "33432", "PB"), 
                    n(Z, "33445", "JG"), n(Z, "33486", "ZN"), n(Z, "33493", "TS"), n(Z, "33507", "QJ"), 
                    n(Z, "33540", "QJ"), n(Z, "33544", "ZC"), n(Z, "33564", "XQ"), n(Z, "33617", "YT"), 
                    n(Z, "33632", "QJ"), n(Z, "33636", "XH"), n(Z, "33637", "YX"), n(Z, "33694", "WG"), 
                    n(Z, "33705", "PF"), n(Z, "33728", "YW"), n(Z, "33882", "SR"), n(Z, "34067", "WM"), 
                    n(Z, "34074", "YW"), n(Z, "34121", "QJ"), n(Z, "34255", "ZC"), n(Z, "34259", "XL"), 
                    n(Z, "34425", "JH"), n(Z, "34430", "XH"), n(Z, "34485", "KH"), n(Z, "34503", "YS"), 
                    n(Z, "34532", "HG"), n(Z, "34552", "XS"), n(Z, "34558", "YE"), n(Z, "34593", "ZL"), 
                    n(Z, "34660", "YQ"), n(Z, "34892", "XH"), n(Z, "34928", "SC"), n(Z, "34999", "QJ"), 
                    n(Z, "35048", "PB"), n(Z, "35059", "SC"), n(Z, "35098", "ZC"), n(Z, "35203", "TQ"), 
                    n(Z, "35265", "JX"), n(Z, "35299", "JX"), n(Z, "35782", "SZ"), n(Z, "35828", "YS"), 
                    n(Z, "35830", "E"), n(Z, "35843", "TD"), n(Z, "35895", "YG"), n(Z, "35977", "MH"), 
                    n(Z, "36158", "JG"), n(Z, "36228", "QJ"), n(Z, "36426", "XQ"), n(Z, "36466", "DC"), 
                    n(Z, "36710", "JC"), n(Z, "36711", "ZYG"), n(Z, "36767", "PB"), n(Z, "36866", "SK"), 
                    n(Z, "36951", "YW"), n(Z, "37034", "YX"), n(Z, "37063", "XH"), n(Z, "37218", "ZC"), 
                    n(Z, "37325", "ZC"), n(Z, "38063", "PB"), n(Z, "38079", "TD"), n(Z, "38085", "QY"), 
                    n(Z, "38107", "DC"), n(Z, "38116", "TD"), n(Z, "38123", "YD"), n(Z, "38224", "HG"), 
                    n(Z, "38241", "XTC"), n(Z, "38271", "ZC"), n(Z, "38415", "YE"), n(Z, "38426", "KH"), 
                    n(Z, "38461", "YD"), n(Z, "38463", "AE"), n(Z, "38466", "PB"), n(Z, "38477", "XJ"), 
                    n(Z, "38518", "YT"), n(Z, "38551", "WK"), n(Z, "38585", "ZC"), n(Z, "38704", "XS"), 
                    n(Z, "38739", "LJ"), n(Z, "38761", "GJ"), n(Z, "38808", "SQ"), n(Z, "39048", "JG"), 
                    n(Z, "39049", "XJ"), n(Z, "39052", "HG"), n(Z, "39076", "CZ"), n(Z, "39271", "XT"), 
                    n(Z, "39534", "TD"), n(Z, "39552", "TD"), n(Z, "39584", "PB"), n(Z, "39647", "SB"), 
                    n(Z, "39730", "LG"), n(Z, "39748", "TPB"), n(Z, "40109", "ZQ"), n(Z, "40479", "ND"), 
                    n(Z, "40516", "HG"), n(Z, "40536", "HG"), n(Z, "40583", "QJ"), n(Z, "40765", "YQ"), 
                    n(Z, "40784", "QJ"), n(Z, "40840", "YK"), n(Z, "40863", "QJG"), Z);
                },
                getFullChars: function(Y) {
                    for (var Z, t = "", n = (new RegExp("[a-zA-Z0-9- ]"), 0), e = Y.length; n < e; n++) {
                        var L = Y.substr(n, 1), X = L.charCodeAt(0);
                        40869 < X || X < 19968 ? t += L : !1 !== (Z = this._getFullChar(L)) && (t += Z);
                    }
                    return t;
                },
                getCamelChars: function(Y) {
                    if ("string" != typeof Y) throw new Error(-1, "函数getFisrt需要字符串类型参数!");
                    for (var Z = [], t = 0, n = Y.length; t < n; t++) {
                        var e = Y.charAt(t);
                        Z.push(this._getChar(e));
                    }
                    return this._getResult(Z);
                },
                _getFullChar: function(Y) {
                    for (var Z in this.full_dict) if (-1 !== this.full_dict[Z].indexOf(Y)) return this._capitalize(Z);
                    return !1;
                },
                _capitalize: function(Y) {
                    if (0 < Y.length) return Y.substr(0, 1).toUpperCase() + Y.substr(1, Y.length);
                },
                _getChar: function(Y) {
                    var Z = Y.charCodeAt(0);
                    return 40869 < Z || Z < 19968 ? Y : this.options.checkPolyphone && this.polyphone[Z] ? this.polyphone[Z] : this.char_dict.charAt(Z - 19968);
                },
                _getResult: function(Y) {
                    if (!this.options.checkPolyphone) return Y.join("");
                    for (var Z = [ "" ], t = 0, n = Y.length; t < n; t++) {
                        var e = Y[t], L = e.length;
                        if (1 == L) for (J = 0; J < Z.length; J++) Z[r] += e; else for (var X = Z.slice(0), Z = [], J = 0; J < L; J++) {
                            for (var S = X.slice(0), r = 0; r < S.length; r++) S[r] += e.charAt(J);
                            Z = Z.concat(S);
                        }
                    }
                    return Z;
                }
            };
            var t = function(Y, Z) {
                for (var t in Z) Y[t] = Z[t];
                return Y;
            };
            return new Y(arguments);
        }();
        Z.default = e;
    },
    303: function(Y, Z, t) {
        t.r(Z);
        var n = t(155), e = t(127);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(304);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/list/list.vue", Z.default = J.exports;
    },
    304: function(Y, Z, t) {
        var n = t(129);
        t.n(n).a;
    },
    305: function(Y, Z, t) {
        t.r(Z);
        var n = t(156), e = t(130);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(306);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, "357a7841", null);
        J.options.__file = "src/components/list/list-item.vue", Z.default = J.exports;
    },
    306: function(Y, Z, t) {
        var n = t(132);
        t.n(n).a;
    },
    307: function(Y, Z, t) {
        t.r(Z);
        var n = t(157), e = t(133);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(308);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/search.vue", Z.default = J.exports;
    },
    308: function(Y, Z, t) {
        var n = t(135);
        t.n(n).a;
    },
    31: function(Y, Z, t) {
        t.r(Z);
        var n = t(17), e = t(6);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(32);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/loading/index.vue", Z.default = J.exports;
    },
    32: function(Y, Z, t) {
        var n = t(8);
        t.n(n).a;
    },
    33: function(Y, Z, t) {
        t.r(Z);
        var n = t(18), e = t(9);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(34);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/components/overlay/index.vue", Z.default = J.exports;
    },
    34: function(Y, Z, t) {
        var n = t(11);
        t.n(n).a;
    },
    341: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("div", {
                attrs: {
                    h_: 0
                }
            }, [ t("search", {
                ref: "search",
                staticClass: "search",
                attrs: {
                    placeholder: "请输入证件照名称",
                    h_: 1,
                    c_: 0
                },
                on: {
                    "on-cancel": Y.handleCancel,
                    "on-focus": Y.handleFocus
                },
                model: {
                    value: Y.searchText,
                    callback: function(Z) {
                        Y.searchText = Z;
                    },
                    expression: "searchText"
                }
            }, [ t("a", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: !Y.focus,
                    expression: "!focus"
                } ],
                attrs: {
                    slot: "innerLeft",
                    h_: "s3"
                },
                slot: "innerLeft"
            }, [ t("span", {
                attrs: {
                    h_: "s4"
                },
                on: {
                    click: Y.recordLog
                }
            }, [ Y._v(Y._s(Y.city.name), "s5") ]), t("van-icon", {
                attrs: {
                    h_: "s7"
                }
            }) ], 1) ]), Y._ri(!!Y.list.length, 9) ? [ Y._ri(!(Y.focus || !Y.list.length), 10) ? t("van-tabs", {
                attrs: {
                    active: Y.tabIndex,
                    h_: 10
                },
                on: {
                    change: Y.handleTabChange
                }
            }, Y._l(Y.list, function(Z, n, e) {
                var L = void 0 !== e ? e : n;
                return Y._ri(!!Z.photoCardList.length, 11, void 0 !== e ? e : n) ? t("van-tab", {
                    attrs: {
                        title: Z.title,
                        h_: 11,
                        f_: L
                    }
                }) : Y._e();
            }, [ 11 ], Y._self), 1) : Y._e(), t("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: !Y.focus,
                    expression: "!focus"
                } ],
                ref: "content",
                attrs: {
                    h_: 13
                }
            }, [ t("ul", {
                attrs: {
                    h_: 14
                }
            }, Y._l(Y.list, function(Z, n, e) {
                var L = void 0 !== e ? e : n;
                return Y._ri(!(!Z.photoCardList || !Z.photoCardList.length), 15, void 0 !== e ? e : n) ? t("li", {
                    attrs: {
                        id: "rank" + n,
                        h_: 15,
                        f_: L
                    }
                }, [ t("h2", {
                    attrs: {
                        h_: 16,
                        f_: L
                    }
                }, [ Y._v(Y._s(Z.title), 17, L) ]), t("ul", {
                    attrs: {
                        h_: 19,
                        f_: L
                    }
                }, Y._l(Z.photoCardList, function(Z, L, X) {
                    var J = (void 0 !== e ? e : n) + "-" + (void 0 !== X ? X : L);
                    return t("li", {
                        attrs: {
                            h_: 20,
                            f_: J
                        },
                        on: {
                            click: function(t) {
                                Y.goGuide(Z);
                            }
                        }
                    }, [ Y._ri(!!Z.signBgUrl, 21, (void 0 !== e ? e : n) + "-" + (void 0 !== X ? X : L)) ? t("image", {
                        attrs: {
                            src: Z.signBgUrl,
                            h_: 21,
                            f_: J
                        }
                    }) : Y._e(), t("image", {
                        attrs: {
                            src: Y.$utils.resizeOSSImage(Z.iconUrl, 60),
                            h_: 23,
                            f_: J
                        }
                    }), t("span", {
                        attrs: {
                            h_: 25,
                            f_: J
                        }
                    }, [ Y._v(Y._s(Z.name), 26, J) ]), t("span", {
                        attrs: {
                            h_: 28,
                            f_: J
                        }
                    }, [ Y._v(Y._s(Z.standard) + "mm", 29, J) ]) ], 1);
                }, [ 20, void 0 !== e ? e : n ], Y._self), 0) ]) : Y._e();
            }, [ 15 ], Y._self), 0) ]), t("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: Y.focus && !Y.searchText,
                    expression: "focus && !searchText"
                } ],
                attrs: {
                    h_: 31
                }
            }, [ t("h2", {
                attrs: {
                    h_: 32
                }
            }, []), t("ul", {
                attrs: {
                    h_: 35
                }
            }, Y._l(Y.hotSearch, function(Z, n, e) {
                var L = void 0 !== e ? e : n;
                return t("li", {
                    key: n,
                    attrs: {
                        h_: 36,
                        f_: L,
                        k_: "index"
                    },
                    on: {
                        click: function(t) {
                            Y.goGuide(Z);
                        }
                    }
                }, [ Y._v("\n          " + Y._s(Z.name) + "\n        ", 37, L) ]);
            }, [ 36 ], Y._self), 0) ]), t("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: Y.searchText,
                    expression: "searchText"
                } ],
                attrs: {
                    h_: 39
                }
            }, Y._l(Y.filterList, function(Z, n, e) {
                var L = void 0 !== e ? e : n;
                return t("list", {
                    key: n,
                    attrs: {
                        title: Z.title,
                        sticky: "18.667vw",
                        h_: 40,
                        f_: L,
                        k_: "index",
                        c_: 1
                    }
                }, Y._l(Z.photoCardList, function(Z, n, e) {
                    var L = void 0 !== e ? e : n;
                    return t("list-item", {
                        key: Z.certificationInfoId,
                        attrs: {
                            h_: "s42",
                            f_: L,
                            k_: "certificationInfoId",
                            c_: 2
                        },
                        nativeOn: {
                            click: function(t) {
                                Y.goGuide(Z);
                            }
                        }
                    }, [ Y._v("\n          " + Y._s(Z.name) + "\n        ", "s44") ]);
                }, [ "s42" ], Y._self), 1);
            }, [ 40 ], Y._self), 1) ] : Y._e(), Y._ri(!(!Y.historyData || !Y.focus || Y.searchText), 46) ? t("div", {
                attrs: {
                    h_: 46
                }
            }, [ t("h2", {
                attrs: {
                    h_: 47
                }
            }, [ t("image", {
                attrs: {
                    h_: 49
                },
                on: {
                    click: Y.allDelete
                }
            }) ], 1), t("ul", {
                attrs: {
                    h_: 51
                }
            }, Y._l(Y.historyData, function(Z, n, e) {
                var L = void 0 !== e ? e : n;
                return t("li", {
                    key: n,
                    attrs: {
                        h_: 52,
                        f_: L,
                        k_: "index"
                    },
                    on: {
                        click: function(t) {
                            Y.goGuide(Z);
                        }
                    }
                }, [ Y._v("\n        " + Y._s(Z.name) + "\n      ", 53, L) ]);
            }, [ 52 ], Y._self), 0) ]) : Y._e(), t("tab-bar", {
                attrs: {
                    value: 1,
                    h_: 55,
                    c_: 3
                }
            }), t("van-dialog", {
                attrs: {
                    h_: 58
                }
            }), t("toast", {
                ref: "toast",
                attrs: {
                    h_: 60,
                    c_: 4
                }
            }), t("van-dialog", {
                attrs: {
                    h_: 63
                },
                on: {
                    getuserinfo: Y.__handleGlobalAuthDialogGetUserInfo
                }
            }) ], 1);
        }, e = [];
        n._withStripped = !0;
    },
    35: function(Y, Z, t) {
        var n = t(12);
        t.n(n).a;
    },
    4: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = {
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
                src: function(Y) {
                    return /^(https?:)?\/\/|data:image/.test(Y);
                }
            }
        };
    },
    476: function(Y, Z, t) {
        function n(Y) {
            return Y && Y.__esModule ? Y : {
                default: Y
            };
        }
        var e = n(t(477)), L = n(t(22));
        e.default.mpType = "page", new L.default(e.default).$mount();
    },
    477: function(Y, Z, t) {
        t.r(Z);
        var n = t(341), e = t(219);
        for (var L in e) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return e[Y];
            });
        }(L);
        t(478);
        var X = t(0), J = Object(X.a)(e.default, n.a, n.b, !1, null, null, null);
        J.options.__file = "src/pages/more/Index.vue", Z.default = J.exports;
    },
    478: function(Y, Z, t) {
        var n = t(221);
        t.n(n).a;
    },
    5: function(Y, Z, t) {},
    50: function(Y, Z, t) {
        t.r(Z);
        var n = t(51), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    51: function(Y, Z, t) {
        (function(Y) {
            function n(Y) {
                return Y && Y.__esModule ? Y : {
                    default: Y
                };
            }
            function e(Y) {
                return function() {
                    var Z = Y.apply(this, arguments);
                    return new Promise(function(Y, t) {
                        return function n(e, L) {
                            try {
                                var X = Z[e](L), J = X.value;
                            } catch (e) {
                                return void t(e);
                            }
                            if (!X.done) return Promise.resolve(J).then(function(Y) {
                                n("next", Y);
                            }, function(Y) {
                                n("throw", Y);
                            });
                            Y(J);
                        }("next");
                    });
                };
            }
            Object.defineProperty(Z, "__esModule", {
                value: !0
            });
            var L = n(t(19)), X = n(t(140)), J = n(t(142));
            t(23), Z.default = {
                name: "tab-bar",
                model: {
                    event: "change",
                    prop: "value"
                },
                components: {
                    "par-tabbar": X.default,
                    "par-tabbar-item": J.default
                },
                props: {
                    value: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    var Y = "/static/images/custom-index/", Z = "/static/7-11/";
                    return {
                        activeColor: "#000",
                        normalColor: "#CCC",
                        datas: [ {
                            icon: {
                                normal: Y + "index_none.png",
                                active: Y + "index_active.png"
                            },
                            text: "首页",
                            path: "/pages/home/Home"
                        }, {
                            icon: {
                                normal: Y + "more_none.png",
                                active: Y + "more_active.png"
                            },
                            text: "拍照",
                            path: "/pages/more/Index"
                        }, {
                            icon: {
                                normal: Y + "order_none.png",
                                active: Y + "order_active.png"
                            },
                            text: "订单",
                            path: "/pages/transaction/order/Index",
                            openType: "getUserInfo"
                        }, {
                            icon: {
                                normal: Y + "mine_none.png",
                                active: Y + "mine_active.png"
                            },
                            text: "我的",
                            path: "/pages/user/mine/Index"
                        } ],
                        data: [ {
                            icon: {
                                normal: Y + "index_none.png",
                                active: Z + "icon_1.png"
                            },
                            text: "首页",
                            path: "/pages/home/Home"
                        }, {
                            icon: {
                                normal: Y + "more_none.png",
                                active: Z + "icon_2.png"
                            },
                            text: "拍照",
                            path: "/pages/more/Index"
                        }, {
                            icon: {
                                normal: Y + "order_none.png",
                                active: Z + "icon_3.png"
                            },
                            text: "订单",
                            path: "/pages/transaction/order/Index",
                            openType: "getUserInfo"
                        }, {
                            icon: {
                                normal: Y + "mine_none.png",
                                active: Z + "icon_4.png"
                            },
                            text: "我的",
                            path: "/pages/user/mine/Index"
                        } ]
                    };
                },
                created: function() {
                    var Y = this;
                    return e(L.default.mark(function Z() {
                        var t, n;
                        return L.default.wrap(function(Z) {
                            for (;;) switch (Z.prev = Z.next) {
                              case 0:
                                return Z.next = 2, Y.$apis.commonApis.getPageConfig({
                                    code: "photoAmount"
                                });

                              case 2:
                                t = Z.sent, n = t.data, Y.$set(Y.data[1], "info", n.photoAmount), Y.$set(Y.datas[1], "info", n.photoAmount);

                              case 6:
                              case "end":
                                return Z.stop();
                            }
                        }, Z, Y);
                    }))();
                },
                methods: {
                    handleChange: function(Z) {
                        switch (Z) {
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
                        Y.reLaunch({
                            url: this.data[Z].path
                        });
                    },
                    getUserInfo: function(Y) {
                        var Z = this;
                        return e(L.default.mark(function t() {
                            return L.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ("getUserInfo:ok" !== Y.detail.errMsg) {
                                        t.next = 5;
                                        break;
                                    }
                                    if (Z.$store.state.auth.unionId) {
                                        t.next = 4;
                                        break;
                                    }
                                    return t.next = 4, Z.__handleGlobalAuthDialogGetUserInfo(Y);

                                  case 4:
                                    Z.handleChange(Y.currentTarget.dataset.index);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, Z);
                        }))();
                    }
                }
            };
        }).call(this, t(13).default);
    },
    52: function(Y, Z, t) {
        t.r(Z);
        var n = t(53), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    53: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = {
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
                    var Y = this;
                    this.items.forEach(function(Z, t) {
                        Z.active = t === Y.value;
                    });
                },
                handleChange: function(Y) {
                    Y !== this.value && (this.$emit("input", Y), this.$emit("change", Y));
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
    54: function(Y, Z, t) {},
    55: function(Y, Z, t) {
        t.r(Z);
        var n = t(56), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    56: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        }), Z.default = {
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
                handleChange: function(Y) {
                    this.$parent.handleChange(this.$parent.items.indexOf(this)), this.$emit("click", Y);
                }
            }
        };
    },
    57: function(Y, Z, t) {},
    58: function(Y, Z, t) {},
    6: function(Y, Z, t) {
        t.r(Z);
        var n = t(7), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    },
    69: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("div", {
                attrs: {
                    h_: 0
                }
            }, [ t("par-tabbar", {
                staticClass: "tab-bar",
                attrs: {
                    value: Y.value,
                    h_: 1,
                    c_: 0
                }
            }, Y._l(Y.$store.state.common.theme ? Y.data : Y.datas, function(Z, n, e) {
                var L = void 0 !== e ? e : n;
                return t("block", {
                    key: n,
                    attrs: {
                        h_: "s3",
                        f_: L,
                        k_: "index"
                    }
                }, [ Y._ri(!("getUserInfo" !== Z.openType), "s4", void 0 !== e ? e : n) ? t("button", {
                    attrs: {
                        "open-type": Z.openType,
                        "data-index": n,
                        h_: "s4",
                        f_: L,
                        i_: [ !("getUserInfo" !== Z.openType), "s4", void 0 !== e ? e : n ]
                    },
                    on: {
                        getuserinfo: Y.getUserInfo
                    }
                }, [ t("par-tabbar-item", {
                    attrs: {
                        info: Z.info,
                        activeColor: Y.activeColor,
                        normalColor: Y.normalColor,
                        h_: "s5",
                        f_: L,
                        c_: 1
                    },
                    scopedSlots: Y._u([ {
                        key: "icon",
                        fn: function(Y) {
                            return t("image", {
                                attrs: {
                                    src: Y.active ? Z.icon.active : Z.icon.normal,
                                    h_: "s8"
                                }
                            });
                        }
                    } ], !0)
                }, [ Y._v("\n          " + Y._s(Z.text) + "\n        ", "s7") ]) ], 1) : t("button", {
                    attrs: {
                        h_: "s9",
                        f_: L,
                        i_: [ !("getUserInfo" !== Z.openType), "s4", void 0 !== e ? e : n ]
                    },
                    on: {
                        click: function(Z) {
                            Y.handleChange(n);
                        }
                    }
                }, [ t("par-tabbar-item", {
                    attrs: {
                        info: Z.info,
                        activeColor: Y.activeColor,
                        normalColor: Y.normalColor,
                        h_: "s10",
                        f_: L,
                        c_: 2
                    },
                    scopedSlots: Y._u([ {
                        key: "icon",
                        fn: function(Y) {
                            return t("image", {
                                attrs: {
                                    src: Y.active ? Z.icon.active : Z.icon.normal,
                                    h_: "s13"
                                }
                            });
                        }
                    } ], !0)
                }, [ Y._v("\n          " + Y._s(Z.text) + "\n        ", "s12") ]) ], 1) ]);
            }, [ "s3" ], Y._self), 1) ], 1);
        }, e = [];
        n._withStripped = !0;
    },
    7: function(Y, Z, t) {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        });
        var n, e = (n = t(21)) && n.__esModule ? n : {
            default: n
        }, L = "#c9c9c9";
        Z.default = {
            name: "index",
            props: {
                size: String,
                type: {
                    type: String,
                    default: "circular"
                },
                color: {
                    type: String,
                    default: L
                }
            },
            computed: {
                colorType: function() {
                    var Y = this.color;
                    return "white" === Y || "black" === Y ? Y : "";
                },
                style: function() {
                    return {
                        color: "black" === this.color ? L : this.color,
                        width: this.size,
                        height: this.size
                    };
                }
            },
            methods: {
                b: (0, e.default)("van-loading")
            }
        };
    },
    71: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this, Z = Y.$createElement, t = Y._self._c || Z;
            return t("div", {
                style: Y.styles,
                attrs: {
                    h_: 0
                },
                on: {
                    click: Y.handleChange
                }
            }, [ t("div", {
                attrs: {
                    h_: 1
                }
            }, [ t("span", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: Y.info,
                    expression: "info"
                } ],
                class: Y.$store.state.common.theme ? "par-infos" : "par-info",
                attrs: {
                    h_: 2
                }
            }, [ Y._v(Y._s(Y.info), 3) ]), Y._t("icon", null, {
                active: Y.active,
                h_: 5
            }), t("span", {
                attrs: {
                    h_: 7
                }
            }, [ Y._t("default", null, {
                h_: 8
            }) ], 1) ], 1) ]);
        }, e = [];
        n._withStripped = !0;
    },
    72: function(Y, Z, t) {
        t.d(Z, "a", function() {
            return n;
        }), t.d(Z, "b", function() {
            return e;
        });
        var n = function() {
            var Y = this.$createElement;
            return (this._self._c || Y)("div", {
                attrs: {
                    h_: 0
                }
            }, [ this._t("default", null, {
                h_: 1
            }) ], 1);
        }, e = [];
        n._withStripped = !0;
    },
    8: function(Y, Z, t) {},
    9: function(Y, Z, t) {
        t.r(Z);
        var n = t(10), e = t.n(n);
        for (var L in n) "default" !== L && function(Y) {
            t.d(Z, Y, function() {
                return n[Y];
            });
        }(L);
        Z.default = e.a;
    }
}, [ [ 476, "runtime", "vendor" ] ] ]);
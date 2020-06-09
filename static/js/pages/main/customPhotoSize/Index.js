(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/main/customPhotoSize/Index" ], {
    177: function(t, i, e) {
        e.r(i);
        var n = e(178), r = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(o);
        i.default = r.a;
    },
    178: function(t, i, e) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t) {
            return function() {
                var i = t.apply(this, arguments);
                return new Promise(function(t, e) {
                    return function n(r, o) {
                        try {
                            var h = i[r](o), s = h.value;
                        } catch (r) {
                            return void e(r);
                        }
                        if (!h.done) return Promise.resolve(s).then(function(t) {
                            n("next", t);
                        }, function(t) {
                            n("throw", t);
                        });
                        t(s);
                    }("next");
                });
            };
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = n(e(19)), h = Object.assign || function(t) {
            for (var i = 1; i < arguments.length; i++) {
                var e = arguments[i];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }
            return t;
        };
        n(e(66)), e(293), e(23), i.default = {
            name: "customSize",
            data: function() {
                return {
                    certificationInfo: {},
                    mmSize: 0,
                    imageSize: {
                        width: 0,
                        height: 0
                    },
                    viewPort: {},
                    units: [ {
                        label: "像素",
                        value: "px"
                    }, {
                        label: "毫米",
                        value: "mm"
                    } ],
                    selectedUnit: 0,
                    pxFormOptions: {
                        defaultWidth: 295,
                        defaultHeight: 413,
                        currentWidth: "",
                        currentHeight: "",
                        formWidth: 0,
                        formHeight: 0,
                        minWidth: 100,
                        minHeight: 100,
                        maxWidth: 1024,
                        maxHeight: 1024
                    },
                    mmFormOptions: {
                        defaultWidth: 25,
                        defaultHeight: 35,
                        currentWidth: "",
                        currentHeight: "",
                        formWidth: 0,
                        formHeight: 0,
                        minWidth: 25,
                        minHeight: 25,
                        maxWidth: 87,
                        maxHeight: 87
                    },
                    imageBoxStyleOptions: {
                        imageWrap: {
                            maxWidth: "",
                            minWidth: "",
                            maxHeight: "",
                            minHeight: "",
                            width: "",
                            height: ""
                        }
                    }
                };
            },
            computed: {
                themeClass: function() {
                    return this.$store.state.common.theme ? "theme-711" : "base";
                },
                currentFormOptions: {
                    get: function() {
                        return this[this.unit + "FormOptions"];
                    },
                    set: function(t) {
                        this.$set(this, this.unit + "FormOptions", t);
                    }
                },
                currentWidth: {
                    get: function() {
                        return this.currentFormOptions.currentWidth;
                    },
                    set: function(t) {
                        this.currentFormOptions.currentWidth = t;
                    }
                },
                currentHeight: {
                    get: function() {
                        return this.currentFormOptions.currentHeight;
                    },
                    set: function(t) {
                        this.currentFormOptions.currentHeight = t;
                    }
                },
                formWidth: {
                    get: function() {
                        return this.currentFormOptions.formWidth;
                    },
                    set: function(t) {
                        this.currentFormOptions.formWidth = t;
                    }
                },
                formHeight: {
                    get: function() {
                        return this.currentFormOptions.formHeight;
                    },
                    set: function(t) {
                        this.currentFormOptions.formHeight = t;
                    }
                },
                width: function() {
                    return this.currentFormOptions.formWidth || this.currentFormOptions.defaultWidth;
                },
                height: function() {
                    return this.currentFormOptions.formHeight || this.currentFormOptions.defaultHeight;
                },
                disabled: function() {
                    return !(this.currentFormOptions.currentWidth >= this.sizeControl.min.width && this.currentFormOptions.currentWidth <= this.sizeControl.max.width && this.currentFormOptions.currentHeight >= this.sizeControl.min.height && this.currentFormOptions.currentHeight <= this.sizeControl.max.height);
                },
                unit: function() {
                    return this.units[this.selectedUnit].value;
                },
                sizeControl: function() {
                    return {
                        min: {
                            width: this.currentFormOptions.minWidth,
                            height: this.currentFormOptions.minHeight
                        },
                        max: {
                            width: this.currentFormOptions.maxWidth,
                            height: this.currentFormOptions.maxHeight
                        }
                    };
                },
                wrapOptions: function() {
                    var t = this.width, i = this.height;
                    "mm" === this.unit && (t *= this.mmSize, i *= this.mmSize);
                    var e = this.imageBoxStyleOptions.imageWrap.maxWidth / this.imageBoxStyleOptions.imageWrap.maxHeight;
                    (this.width > this.imageBoxStyleOptions.imageWrap.maxWidth || this.height > this.imageBoxStyleOptions.imageWrap.maxHeight) && (this.ratio > e ? (t = this.imageBoxStyleOptions.imageWrap.maxWidth, 
                    i = this.imageBoxStyleOptions.imageWrap.maxWidth / this.ratio) : (i = this.imageBoxStyleOptions.imageWrap.maxHeight, 
                    t = this.imageBoxStyleOptions.imageWrap.maxHeight * this.ratio));
                    var n = wx.getSystemInfoSync();
                    return t > 580 / 750 * n.windowWidth && (t = 580 / 750 * n.windowWidth), i > 580 / 750 * n.windowWidth && (i = 580 / 750 * n.windowWidth), 
                    {
                        width: t,
                        height: i
                    };
                },
                wrapStyles: function() {
                    return {
                        width: this.wrapOptions.width + "px",
                        height: this.wrapOptions.height + "px"
                    };
                },
                heightControlStyles: function() {
                    return {
                        width: this.wrapOptions.height + 10 + "px"
                    };
                },
                widthControlStyles: function() {
                    return {
                        width: this.wrapOptions.width + 10 + "px"
                    };
                },
                form: function() {
                    var t = this.width, i = this.height;
                    return "mm" === this.unit && (t = this.MMToPX(t), i = this.MMToPX(i)), {
                        customWidth: t,
                        customHeight: i
                    };
                },
                imageStyles: function() {
                    var t = this.imageSize.width / this.imageSize.height;
                    return this.ratio < 25 / 35 ? {
                        flex: "0 0 " + 1.7 * this.wrapOptions.width + "px"
                    } : {
                        flex: "0 0 " + this.wrapOptions.height * t + "px",
                        width: this.wrapOptions.height * t + "px"
                    };
                },
                ratio: function() {
                    return this.width / this.height;
                }
            },
            created: function() {
                this.getCertificationInfo();
            },
            mounted: function() {
                var t = this, i = wx.createSelectorQuery();
                i.select(".container").boundingClientRect(), i.select(".image").boundingClientRect(), 
                i.select(".imageWrap").boundingClientRect(), i.select(".mmBlock").boundingClientRect(), 
                i.selectViewport().boundingClientRect(), i.exec(function(i) {
                    var e = i[0];
                    i[1], i[2], t.mmSize = i[3].width / 100, t.viewPort = i[4], t.imageBoxStyleOptions.imageWrap.maxWidth = e.width / 3 * 2, 
                    t.imageBoxStyleOptions.imageWrap.minHeight = t.imageBoxStyleOptions.imageWrap.minWidth = 100, 
                    t.imageBoxStyleOptions.imageWrap.maxHeight = e.height / 3 * 2;
                });
            },
            methods: {
                MMToPX: function(t) {
                    return this.round(t / 25.4 * 300);
                },
                PXToMM: function(t) {
                    return this.round(25.4 * t / 300);
                },
                handleImageOnLoad: function(t) {
                    this.imageSize = t.detail;
                },
                submit: function() {
                    var t = this;
                    return r(o.default.mark(function i() {
                        return o.default.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                t.$router.push({
                                    path: "/pages/main/photoGuide/Index",
                                    query: h({}, t.$route.query, {
                                        customWidth: t.form.customWidth,
                                        customHeight: t.form.customHeight,
                                        unit: t.unit
                                    })
                                });

                              case 1:
                              case "end":
                                return i.stop();
                            }
                        }, i, t);
                    }))();
                },
                getCertificationInfo: function() {
                    var t = this;
                    return r(o.default.mark(function i() {
                        var e, n;
                        return o.default.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                i.prev = 0, t.certificationInfo = JSON.parse(sessionStorage.getItem("certificationInfo")), 
                                i.next = 18;
                                break;

                              case 4:
                                return i.prev = 4, i.t0 = i.catch(0), i.prev = 6, t.$toast.loading({
                                    duration: 0,
                                    forbidClick: !0,
                                    message: "加载中……"
                                }), t.disabled = !0, i.next = 11, t.$apis.commonApis.getCertificationInfo({
                                    certificationInfoId: t.$route.query.certificationInfoId
                                });

                              case 11:
                                e = i.sent, n = e.data, t.certificationInfo = n, t.disabled = !1;

                              case 15:
                                return i.prev = 15, t.$toast.clear(), i.finish(15);

                              case 18:
                              case "end":
                                return i.stop();
                            }
                        }, i, t, [ [ 0, 4 ], [ 6, , 15, 18 ] ]);
                    }))();
                },
                handleTabChange: function(t) {
                    this.selectedUnit = t.detail.index;
                },
                round: function(t) {
                    return Math.round(Math.round(1e4 * t) / 1e4);
                }
            },
            watch: {
                currentWidth: function(t) {
                    var i = Number(t);
                    i >= this.sizeControl.max.width ? this.formWidth = this.currentWidth = this.formWidth = this.sizeControl.max.width : i >= this.sizeControl.min.width && (this.formWidth = this.currentWidth = Number(i));
                },
                currentHeight: function(t) {
                    var i = Number(t);
                    i >= this.sizeControl.max.height ? this.formHeight = this.currentHeight = this.formHeight = this.sizeControl.max.height : i >= this.sizeControl.min.height && (this.formHeight = this.currentHeight = Number(i));
                }
            }
        };
    },
    179: function(t, i, e) {},
    328: function(t, i, e) {
        e.d(i, "a", function() {
            return n;
        }), e.d(i, "b", function() {
            return r;
        });
        var n = function() {
            var t = this, i = t.$createElement, e = t._self._c || i;
            return e("div", {
                class: t.themeClass,
                attrs: {
                    h_: 0
                }
            }, [ e("div", {
                attrs: {
                    h_: 1
                }
            }, [ e("div", {
                attrs: {
                    h_: 2
                }
            }), e("section", {
                attrs: {
                    h_: 4
                }
            }, [ e("div", {
                attrs: {
                    h_: 5
                }
            }, [ e("div", {
                style: t.heightControlStyles,
                attrs: {
                    h_: 6
                }
            }, [ e("span", {
                attrs: {
                    h_: 7
                }
            }, [ t._v(t._s("" + t.height + t.unit), 8) ]) ]), e("div", {
                style: t.wrapStyles,
                attrs: {
                    h_: 10
                }
            }, [ e("image", {
                style: t.imageStyles,
                attrs: {
                    h_: 11
                },
                on: {
                    load: t.handleImageOnLoad
                }
            }) ], 1), e("div", {
                style: t.widthControlStyles,
                attrs: {
                    h_: 13
                }
            }, [ e("span", {
                attrs: {
                    h_: 14
                }
            }, [ t._v(t._s("" + t.width + t.unit), 15) ]) ]) ]) ]), e("section", {
                attrs: {
                    h_: 17
                }
            }, [ e("van-tabs", {
                attrs: {
                    value: t.selectedUnit,
                    h_: 18
                },
                on: {
                    change: t.handleTabChange
                }
            }, t._l(t.units, function(t, i, n) {
                var r = void 0 !== n ? n : i;
                return e("van-tab", {
                    key: i,
                    attrs: {
                        title: t.label,
                        h_: 19,
                        f_: r,
                        k_: "index"
                    }
                });
            }, [ 19 ], t._self), 1), e("div", {
                attrs: {
                    h_: 21
                }
            }, [ e("div", {
                attrs: {
                    h_: 22
                }
            }, [ e("div", {
                attrs: {
                    h_: 23
                }
            }, [ e("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.currentFormOptions.currentWidth,
                    expression: "currentFormOptions.currentWidth"
                } ],
                attrs: {
                    placeholder: t.sizeControl.min.width + " - " + t.sizeControl.max.width,
                    h_: 24
                },
                domProps: {
                    value: t.currentFormOptions.currentWidth
                },
                on: {
                    input: function(i) {
                        i.target.composing || t.$set(t.currentFormOptions, "currentWidth", i.target.value);
                    }
                }
            }), e("span", {
                attrs: {
                    h_: 26
                }
            }, [ t._v(t._s(t.unit), 27) ]) ]), e("label", {
                attrs: {
                    h_: 29
                }
            }, []) ]), e("div", {
                attrs: {
                    h_: 32
                }
            }, []), e("div", {
                attrs: {
                    h_: 35
                }
            }, [ e("div", {
                attrs: {
                    h_: 36
                }
            }, [ e("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.currentFormOptions.currentHeight,
                    expression: "currentFormOptions.currentHeight"
                } ],
                attrs: {
                    placeholder: t.sizeControl.min.height + " - " + t.sizeControl.max.height,
                    h_: 37
                },
                domProps: {
                    value: t.currentFormOptions.currentHeight
                },
                on: {
                    input: function(i) {
                        i.target.composing || t.$set(t.currentFormOptions, "currentHeight", i.target.value);
                    }
                }
            }), e("span", {
                attrs: {
                    h_: 39
                }
            }, [ t._v(t._s(t.unit), 40) ]) ]), e("label", {
                attrs: {
                    h_: 42
                }
            }, []) ]) ]), e("van-button", {
                attrs: {
                    disabled: t.disabled,
                    h_: 45
                },
                on: {
                    click: t.submit
                }
            }, []) ], 1) ]) ]);
        }, r = [];
        n._withStripped = !0;
    },
    433: function(t, i, e) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var r = n(e(434)), o = n(e(22));
        r.default.mpType = "page", new o.default(r.default).$mount();
    },
    434: function(t, i, e) {
        e.r(i);
        var n = e(328), r = e(177);
        for (var o in r) "default" !== o && function(t) {
            e.d(i, t, function() {
                return r[t];
            });
        }(o);
        e(438);
        var h = e(0), s = Object(h.a)(r.default, n.a, n.b, !1, null, null, null);
        s.options.__file = "src/pages/main/customPhotoSize/Index.vue", i.default = s.exports;
    },
    438: function(t, i, e) {
        var n = e(179);
        e.n(n).a;
    }
}, [ [ 433, "runtime", "vendor" ] ] ]);
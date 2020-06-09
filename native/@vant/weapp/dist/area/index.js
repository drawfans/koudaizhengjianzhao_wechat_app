var e = function() {
    function e(e, t) {
        var n = [], i = !0, r = !1, s = void 0;
        try {
            for (var c, u = e[Symbol.iterator](); !(i = (c = u.next()).done) && (n.push(c.value), 
            !t || n.length !== t); i = !0) ;
        } catch (e) {
            r = !0, s = e;
        } finally {
            try {
                !i && u.return && u.return();
            } finally {
                if (r) throw s;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), t = require("../common/component"), n = require("../picker/shared");

(0, t.VantComponent)({
    classes: [ "active-class", "toolbar-class", "column-class" ],
    props: Object.assign(Object.assign({}, n.pickerProps), {
        value: {
            type: String,
            observer: function(e) {
                this.code = e, this.setValues();
            }
        },
        areaList: {
            type: Object,
            value: {},
            observer: "setValues"
        },
        columnsNum: {
            type: null,
            value: 3,
            observer: function(e) {
                this.setData({
                    displayColumns: this.data.columns.slice(0, +e)
                });
            }
        },
        columnsPlaceholder: {
            type: Array,
            observer: function(e) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: e[0] || "",
                        city: e[1] || "",
                        county: e[2] || ""
                    }
                });
            }
        }
    }),
    data: {
        columns: [ {
            values: []
        }, {
            values: []
        }, {
            values: []
        } ],
        displayColumns: [ {
            values: []
        }, {
            values: []
        }, {
            values: []
        } ],
        typeToColumnsPlaceholder: {}
    },
    mounted: function() {
        var e = this;
        setTimeout(function() {
            e.setValues();
        }, 0);
    },
    methods: {
        getPicker: function() {
            return null == this.picker && (this.picker = this.selectComponent(".van-area__picker")), 
            this.picker;
        },
        onCancel: function(e) {
            this.emit("cancel", e.detail);
        },
        onConfirm: function(e) {
            var t = e.detail.index, n = e.detail.value;
            n = this.parseOutputValues(n), this.emit("confirm", {
                value: n,
                index: t
            });
        },
        emit: function(e, t) {
            t.values = t.value, delete t.value, this.$emit(e, t);
        },
        parseOutputValues: function(e) {
            var t = this.data.columnsPlaceholder;
            return e.map(function(e, n) {
                return e ? ((e = JSON.parse(JSON.stringify(e))).code && e.name !== t[n] || (e.code = "", 
                e.name = ""), e) : e;
            });
        },
        onChange: function(e) {
            var t = this, n = e.detail, i = n.index, r = n.picker, s = n.value;
            this.code = s[i].code, this.setValues().then(function() {
                t.$emit("change", {
                    picker: r,
                    values: t.parseOutputValues(r.getValues()),
                    index: i
                });
            });
        },
        getConfig: function(e) {
            var t = this.data.areaList;
            return t && t[e + "_list"] || {};
        },
        getList: function(e, t) {
            var n = this.data.typeToColumnsPlaceholder, i = [];
            if ("province" !== e && !t) return i;
            var r = this.getConfig(e);
            if (i = Object.keys(r).map(function(e) {
                return {
                    code: e,
                    name: r[e]
                };
            }), t && ("9" === t[0] && "city" === e && (t = "9"), i = i.filter(function(e) {
                return 0 === e.code.indexOf(t);
            })), n[e] && i.length) {
                var s = "province" === e ? "" : "city" === e ? "000000".slice(2, 4) : "000000".slice(4, 6);
                i.unshift({
                    code: "" + t + s,
                    name: n[e]
                });
            }
            return i;
        },
        getIndex: function(e, t) {
            var n = "province" === e ? 2 : "city" === e ? 4 : 6, i = this.getList(e, t.slice(0, n - 2));
            "9" === t[0] && "province" === e && (n = 1), t = t.slice(0, n);
            for (var r = 0; r < i.length; r++) if (i[r].code.slice(0, n) === t) return r;
            return 0;
        },
        setValues: function() {
            var t = this, n = this.getConfig("county"), i = this.code;
            i || (i = this.data.columnsPlaceholder.length ? "000000" : Object.keys(n)[0] ? Object.keys(n)[0] : "");
            var r = this.getList("province"), s = this.getList("city", i.slice(0, 2)), c = this.getPicker();
            if (c) {
                var u = [];
                if (u.push(c.setColumnValues(0, r, !1)), u.push(c.setColumnValues(1, s, !1)), s.length && "00" === i.slice(2, 4)) {
                    var a = e(s, 1);
                    i = a[0].code;
                }
                return u.push(c.setColumnValues(2, this.getList("county", i.slice(0, 4)), !1)), 
                Promise.all(u).catch(function() {}).then(function() {
                    return c.setIndexes([ t.getIndex("province", i), t.getIndex("city", i), t.getIndex("county", i) ]);
                }).catch(function() {});
            }
        },
        getValues: function() {
            var e = this.getPicker();
            return e ? e.getValues().filter(function(e) {
                return !!e;
            }) : [];
        },
        getDetail: function() {
            var e = this.getValues(), t = {
                code: "",
                country: "",
                province: "",
                city: "",
                county: ""
            };
            if (!e.length) return t;
            var n = e.map(function(e) {
                return e.name;
            });
            return t.code = e[e.length - 1].code, "9" === t.code[0] ? (t.country = n[1] || "", 
            t.province = n[2] || "") : (t.province = n[0] || "", t.city = n[1] || "", t.county = n[2] || ""), 
            t;
        },
        reset: function(e) {
            return this.code = e || "", this.setValues();
        }
    }
});
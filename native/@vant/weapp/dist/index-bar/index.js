var t = require("../common/component"), e = require("../common/color");

(0, t.VantComponent)({
    relation: {
        name: "index-anchor",
        type: "descendant",
        current: "index-bar",
        linked: function() {
            this.updateData();
        },
        linkChanged: function() {
            this.updateData();
        },
        unlinked: function() {
            this.updateData();
        }
    },
    props: {
        sticky: {
            type: Boolean,
            value: !0
        },
        zIndex: {
            type: Number,
            value: 1
        },
        highlightColor: {
            type: String,
            value: e.GREEN
        },
        scrollTop: {
            type: Number,
            value: 0,
            observer: "onScroll"
        },
        stickyOffsetTop: {
            type: Number,
            value: 0
        },
        indexList: {
            type: Array,
            value: function() {
                for (var t = [], e = "A".charCodeAt(0), n = 0; n < 26; n++) t.push(String.fromCharCode(e + n));
                return t;
            }()
        }
    },
    data: {
        activeAnchorIndex: null,
        showSidebar: !1
    },
    methods: {
        updateData: function() {
            var t = this;
            this.timer && clearTimeout(this.timer), this.timer = setTimeout(function() {
                t.children = t.getRelationNodes("../index-anchor/index"), t.setData({
                    showSidebar: !!t.children.length
                }), t.setRect().then(function() {
                    t.onScroll();
                });
            }, 0);
        },
        setRect: function() {
            return Promise.all([ this.setAnchorsRect(), this.setListRect(), this.setSiderbarRect() ]);
        },
        setAnchorsRect: function() {
            var t = this;
            return Promise.all(this.children.map(function(e) {
                return e.getRect(".van-index-anchor-wrapper").then(function(n) {
                    Object.assign(e, {
                        height: n.height,
                        top: n.top + t.data.scrollTop
                    });
                });
            }));
        },
        setListRect: function() {
            var t = this;
            return this.getRect(".van-index-bar").then(function(e) {
                Object.assign(t, {
                    height: e.height,
                    top: e.top + t.data.scrollTop
                });
            });
        },
        setSiderbarRect: function() {
            var t = this;
            return this.getRect(".van-index-bar__sidebar").then(function(e) {
                t.sidebar = {
                    height: e.height,
                    top: e.top
                };
            });
        },
        setDiffData: function(t) {
            var e = t.target, n = t.data, i = {};
            Object.keys(n).forEach(function(t) {
                e.data[t] !== n[t] && (i[t] = n[t]);
            }), Object.keys(i).length && e.setData(i);
        },
        getAnchorRect: function(t) {
            return t.getRect(".van-index-anchor-wrapper").then(function(t) {
                return {
                    height: t.height,
                    top: t.top
                };
            });
        },
        getActiveAnchorIndex: function() {
            for (var t = this.children, e = this.data, n = e.sticky, i = e.scrollTop, o = e.stickyOffsetTop, r = this.children.length - 1; r >= 0; r--) {
                var a = r > 0 ? t[r - 1].height : 0;
                if ((n ? a + o : 0) + i >= t[r].top) return r;
            }
            return -1;
        },
        onScroll: function() {
            var t = this, e = this.children, n = void 0 === e ? [] : e;
            if (n.length) {
                var i = this.data, o = i.sticky, r = i.stickyOffsetTop, a = i.zIndex, c = i.highlightColor, h = i.scrollTop, s = this.getActiveAnchorIndex();
                if (this.setDiffData({
                    target: this,
                    data: {
                        activeAnchorIndex: s
                    }
                }), o) {
                    var l = !1;
                    -1 !== s && (l = n[s].top <= r + h), n.forEach(function(e, i) {
                        if (i === s) {
                            var o = "", h = "\n              color: " + c + ";\n            ";
                            l && (o = "\n                height: " + n[i].height + "px;\n              ", h = "\n                position: fixed;\n                top: " + r + "px;\n                z-index: " + a + ";\n                color: " + c + ";\n              "), 
                            t.setDiffData({
                                target: e,
                                data: {
                                    active: !0,
                                    anchorStyle: h,
                                    wrapperStyle: o
                                }
                            });
                        } else if (i === s - 1) {
                            var d = n[i], u = d.top, f = "\n              position: relative;\n              transform: translate3d(0, " + ((i === n.length - 1 ? t.top : n[i + 1].top) - u - d.height) + "px, 0);\n              z-index: " + a + ";\n              color: " + c + ";\n            ";
                            t.setDiffData({
                                target: e,
                                data: {
                                    active: !0,
                                    anchorStyle: f
                                }
                            });
                        } else t.setDiffData({
                            target: e,
                            data: {
                                active: !1,
                                anchorStyle: "",
                                wrapperStyle: ""
                            }
                        });
                    });
                }
            }
        },
        onClick: function(t) {
            this.scrollToAnchor(t.target.dataset.index);
        },
        onTouchMove: function(t) {
            var e = this.children.length, n = t.touches[0], i = this.sidebar.height / e, o = Math.floor((n.clientY - this.sidebar.top) / i);
            o < 0 ? o = 0 : o > e - 1 && (o = e - 1), this.scrollToAnchor(o);
        },
        onTouchStop: function() {
            this.scrollToAnchorIndex = null;
        },
        scrollToAnchor: function(t) {
            var e = this;
            if ("number" == typeof t && this.scrollToAnchorIndex !== t) {
                this.scrollToAnchorIndex = t;
                var n = this.children.find(function(n) {
                    return n.data.index === e.data.indexList[t];
                });
                n && (this.$emit("select", n.data.index), wx.pageScrollTo({
                    duration: 0,
                    scrollTop: n.top
                }));
            }
        }
    }
});
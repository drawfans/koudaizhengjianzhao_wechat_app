var t = function() {
    function t(t, e) {
        var n = [], i = !0, r = !1, o = void 0;
        try {
            for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), 
            !e || n.length !== e); i = !0) ;
        } catch (t) {
            r = !0, o = t;
        } finally {
            try {
                !i && a.return && a.return();
            } finally {
                if (r) throw o;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();

(0, require("../common/component").VantComponent)({
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
            value: 0,
            observer: "observeContent"
        },
        disabled: {
            type: Boolean,
            observer: function(t) {
                this.mounted && (t ? this.disconnectObserver() : this.initObserver());
            }
        },
        container: {
            type: null,
            observer: function(t) {
                "function" == typeof t && this.data.height && (this.observeContainer(), this.updateFixed());
            }
        }
    },
    data: {
        height: 0,
        fixed: !1
    },
    methods: {
        getContainerRect: function() {
            var t = this.data.container();
            return new Promise(function(e) {
                return t.boundingClientRect(e).exec();
            });
        },
        initObserver: function() {
            var t = this;
            this.disconnectObserver(), this.getRect(".van-sticky").then(function(e) {
                t.setData({
                    height: e.height
                }), wx.nextTick(function() {
                    t.observeContent(), t.observeContainer();
                });
            });
        },
        updateFixed: function() {
            var e = this;
            Promise.all([ this.getRect(".van-sticky"), this.getContainerRect() ]).then(function(n) {
                var i = t(n, 2), r = i[0], o = i[1];
                e.setData({
                    height: r.height
                }), e.containerHeight = o.height, wx.nextTick(function() {
                    e.setFixed(r.top);
                });
            });
        },
        disconnectObserver: function(t) {
            if (t) {
                var e = this[t];
                e && e.disconnect();
            } else this.contentObserver && this.contentObserver.disconnect(), this.containerObserver && this.containerObserver.disconnect();
        },
        observeContent: function() {
            var t = this, e = this.data.offsetTop;
            this.disconnectObserver("contentObserver");
            var n = this.createIntersectionObserver({
                thresholds: [ .9, 1 ]
            });
            n.relativeToViewport({
                top: -e
            }), n.observe(".van-sticky", function(e) {
                t.data.disabled || t.setFixed(e.boundingClientRect.top);
            }), this.contentObserver = n;
        },
        observeContainer: function() {
            var t = this;
            if ("function" == typeof this.data.container) {
                var e = this.data.height;
                this.getContainerRect().then(function(n) {
                    t.containerHeight = n.height, t.disconnectObserver("containerObserver");
                    var i = t.createIntersectionObserver({
                        thresholds: [ .9, 1 ]
                    });
                    t.containerObserver = i, i.relativeToViewport({
                        top: t.containerHeight - e
                    }), i.observe(".van-sticky", function(e) {
                        t.data.disabled || t.setFixed(e.boundingClientRect.top);
                    });
                });
            }
        },
        setFixed: function(t) {
            var e = this.data, n = e.offsetTop, i = e.height, r = this.containerHeight, o = r && i ? t >= i - r && t < n : t < n;
            this.$emit("scroll", {
                scrollTop: t,
                isFixed: o
            }), this.setData({
                fixed: o
            });
        }
    },
    mounted: function() {
        this.mounted = !0, this.data.disabled || this.initObserver();
    },
    destroyed: function() {
        this.disconnectObserver();
    }
});
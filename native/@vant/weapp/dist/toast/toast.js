function e(e) {
    return (0, s.isObj)(e) ? e : {
        message: e
    };
}

function t() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

function n(n) {
    var s = Object.assign(Object.assign({}, r), e(n)), o = (s.context || t()).selectComponent(s.selector);
    if (o) return delete s.context, delete s.selector, o.clear = function() {
        o.setData({
            show: !1
        }), s.onClose && s.onClose();
    }, i.push(o), o.setData(s), clearTimeout(o.timer), s.duration > 0 && (o.timer = setTimeout(function() {
        o.clear(), i = i.filter(function(e) {
            return e !== o;
        });
    }, s.duration)), o;
    console.warn("未找到 van-toast 节点，请确认 selector 及 context 是否正确");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s = require("../common/utils"), o = {
    type: "text",
    mask: !1,
    message: "",
    show: !0,
    zIndex: 1e3,
    duration: 2e3,
    position: "middle",
    forbidClick: !1,
    loadingType: "circular",
    selector: "#van-toast"
}, i = [], r = Object.assign({}, o), c = function(t) {
    return function(s) {
        return n(Object.assign({
            type: t
        }, e(s)));
    };
};

n.loading = c("loading"), n.success = c("success"), n.fail = c("fail"), n.clear = function() {
    i.forEach(function(e) {
        e.clear();
    }), i = [];
}, n.setDefaultOptions = function(e) {
    Object.assign(r, e);
}, n.resetDefaultOptions = function() {
    r = Object.assign({}, o);
}, exports.default = n;
function t() {
    var t = getCurrentPages();
    return t[t.length - 1];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = [], n = function n(o) {
    return o = Object.assign(Object.assign({}, n.currentOptions), o), new Promise(function(n, s) {
        var c = (o.context || t()).selectComponent(o.selector);
        delete o.context, delete o.selector, c ? (c.setData(Object.assign({
            onCancel: s,
            onConfirm: n
        }, o)), e.push(c)) : console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确");
    });
};

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
}, n.alert = n, n.confirm = function(t) {
    return n(Object.assign({
        showCancelButton: !0
    }, t));
}, n.close = function() {
    e.forEach(function(t) {
        t.close();
    }), e = [];
}, n.stopLoading = function() {
    e.forEach(function(t) {
        t.stopLoading();
    });
}, n.setDefaultOptions = function(t) {
    Object.assign(n.currentOptions, t);
}, n.resetDefaultOptions = function() {
    n.currentOptions = Object.assign({}, n.defaultOptions);
}, n.resetDefaultOptions(), exports.default = n;
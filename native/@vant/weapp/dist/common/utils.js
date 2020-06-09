function t(t) {
    return void 0 !== t && null !== t;
}

function n(t) {
    return /^\d+(\.\d+)?$/.test(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

exports.isDef = t, exports.isObj = function(t) {
    var n = void 0 === t ? "undefined" : e(t);
    return null !== t && ("object" === n || "function" === n);
}, exports.isNumber = n, exports.range = function(t, n, e) {
    return Math.min(Math.max(t, n), e);
}, exports.nextTick = function(t) {
    setTimeout(function() {
        t();
    }, 1e3 / 30);
}, exports.getSystemInfoSync = function() {
    return null == o && (o = wx.getSystemInfoSync()), o;
}, exports.addUnit = function(e) {
    if (t(e)) return e = String(e), n(e) ? e + "px" : e;
};

var o = null;
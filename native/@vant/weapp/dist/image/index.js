var e = require("../common/utils"), t = require("../common/component"), o = require("../mixins/button"), i = require("../mixins/open-type"), s = {
    none: "center",
    fill: "scaleToFill",
    cover: "aspectFill",
    contain: "aspectFit"
};

(0, t.VantComponent)({
    mixins: [ o.button, i.openType ],
    classes: [ "custom-class", "loading-class", "error-class", "image-class" ],
    props: {
        src: {
            type: String,
            observer: function() {
                this.setData({
                    error: !1,
                    loading: !0
                });
            }
        },
        round: Boolean,
        width: {
            type: null,
            observer: "setStyle"
        },
        height: {
            type: null,
            observer: "setStyle"
        },
        radius: null,
        lazyLoad: Boolean,
        useErrorSlot: Boolean,
        useLoadingSlot: Boolean,
        showMenuByLongpress: Boolean,
        fit: {
            type: String,
            value: "fill",
            observer: "setMode"
        },
        showError: {
            type: Boolean,
            value: !0
        },
        showLoading: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        error: !1,
        loading: !0,
        viewStyle: ""
    },
    mounted: function() {
        this.setMode(), this.setStyle();
    },
    methods: {
        setMode: function() {
            this.setData({
                mode: s[this.data.fit]
            });
        },
        setStyle: function() {
            var t = this.data, o = t.width, i = t.height, s = t.radius, n = "";
            (0, e.isDef)(o) && (n += "width: " + (0, e.addUnit)(o) + ";"), (0, e.isDef)(i) && (n += "height: " + (0, 
            e.addUnit)(i) + ";"), (0, e.isDef)(s) && (n += "overflow: hidden;", n += "border-radius: " + (0, 
            e.addUnit)(s) + ";"), this.setData({
                viewStyle: n
            });
        },
        onLoad: function(e) {
            this.setData({
                loading: !1
            }), this.$emit("load", e.detail);
        },
        onError: function(e) {
            this.setData({
                loading: !1,
                error: !0
            }), this.$emit("error", e.detail);
        },
        onClick: function(e) {
            this.$emit("click", e.detail);
        }
    }
});
function n(n, o, t) {
    return o in n ? Object.defineProperty(n, o, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[o] = t, n;
}

var o = require("../common/component"), t = require("../mixins/button"), e = require("../mixins/open-type"), i = require("../common/color");

(0, o.VantComponent)({
    mixins: [ t.button, e.openType ],
    props: {
        show: {
            type: Boolean,
            observer: function(n) {
                !n && this.stopLoading();
            }
        },
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: null,
        zIndex: {
            type: Number,
            value: 2e3
        },
        confirmButtonText: {
            type: String,
            value: "确认"
        },
        cancelButtonText: {
            type: String,
            value: "取消"
        },
        confirmButtonColor: {
            type: String,
            value: i.BLUE
        },
        cancelButtonColor: {
            type: String,
            value: i.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            value: !0
        },
        overlay: {
            type: Boolean,
            value: !0
        },
        transition: {
            type: String,
            value: "scale"
        }
    },
    data: {
        loading: {
            confirm: !1,
            cancel: !1
        }
    },
    methods: {
        onConfirm: function() {
            this.handleAction("confirm");
        },
        onCancel: function() {
            this.handleAction("cancel");
        },
        onClickOverlay: function() {
            this.onClose("overlay");
        },
        handleAction: function(o) {
            this.data.asyncClose && this.setData(n({}, "loading." + o, !0)), this.onClose(o);
        },
        close: function() {
            this.setData({
                show: !1
            });
        },
        stopLoading: function() {
            this.setData({
                loading: {
                    confirm: !1,
                    cancel: !1
                }
            });
        },
        onClose: function(n) {
            this.data.asyncClose || this.close(), this.$emit("close", n), this.$emit(n, {
                dialog: this
            });
            var o = this.data["confirm" === n ? "onConfirm" : "onCancel"];
            o && o(this);
        }
    }
});
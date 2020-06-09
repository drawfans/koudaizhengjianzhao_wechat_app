var e = require("../common/component"), t = require("../mixins/button"), n = require("../mixins/open-type");

(0, e.VantComponent)({
    mixins: [ t.button, n.openType ],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        description: String,
        round: {
            type: Boolean,
            value: !0
        },
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: !0
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: !0
        },
        closeOnClickAction: {
            type: Boolean,
            value: !0
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        onSelect: function(e) {
            var t = e.currentTarget.dataset.index, n = this.data.actions[t];
            !n || n.disabled || n.loading || (this.$emit("select", n), this.data.closeOnClickAction && this.onClose());
        },
        onCancel: function() {
            this.$emit("cancel");
        },
        onClose: function() {
            this.$emit("close");
        },
        onClickOverlay: function() {
            this.$emit("click-overlay"), this.onClose();
        }
    }
});
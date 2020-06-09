(0, require("../common/component").VantComponent)({
    field: !0,
    relation: {
        name: "radio",
        type: "descendant",
        current: "radio-group",
        linked: function(e) {
            this.updateChild(e);
        }
    },
    props: {
        value: {
            type: null,
            observer: "updateChildren"
        },
        disabled: {
            type: Boolean,
            observer: "updateChildren"
        }
    },
    methods: {
        updateChildren: function() {
            var e = this;
            (this.children || []).forEach(function(t) {
                return e.updateChild(t);
            });
        },
        updateChild: function(e) {
            var t = this.data, d = t.value, a = t.disabled;
            e.setData({
                value: d,
                disabled: a || e.data.disabled
            });
        }
    }
});
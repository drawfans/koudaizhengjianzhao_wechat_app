(0, require("../common/component").VantComponent)({
    relation: {
        name: "tabbar-item",
        type: "descendant",
        current: "tabbar",
        linked: function(e) {
            e.parent = this, e.updateFromParent();
        },
        unlinked: function() {
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: null,
            observer: "updateChildren"
        },
        activeColor: {
            type: String,
            observer: "updateChildren"
        },
        inactiveColor: {
            type: String,
            observer: "updateChildren"
        },
        fixed: {
            type: Boolean,
            value: !0
        },
        border: {
            type: Boolean,
            value: !0
        },
        zIndex: {
            type: Number,
            value: 1
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        updateChildren: function() {
            var e = this.children;
            return Array.isArray(e) && e.length ? Promise.all(e.map(function(e) {
                return e.updateFromParent();
            })) : Promise.resolve();
        },
        onChange: function(e) {
            var t = this.children.indexOf(e), n = e.data.name || t;
            n !== this.data.active && this.$emit("change", n);
        }
    }
});
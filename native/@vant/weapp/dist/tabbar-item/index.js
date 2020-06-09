(0, require("../common/component").VantComponent)({
    props: {
        info: null,
        name: null,
        icon: String,
        dot: Boolean
    },
    relation: {
        name: "tabbar",
        type: "ancestor",
        current: "tabbar-item"
    },
    data: {
        active: !1
    },
    methods: {
        onClick: function() {
            this.parent && this.parent.onChange(this), this.$emit("click");
        },
        updateFromParent: function() {
            var t = this.parent;
            if (t) {
                var e = t.children.indexOf(this), i = t.data, o = this.data, a = (o.name || e) === i.active, n = {};
                return a !== o.active && (n.active = a), i.activeColor !== o.activeColor && (n.activeColor = i.activeColor), 
                i.inactiveColor !== o.inactiveColor && (n.inactiveColor = i.inactiveColor), Object.keys(n).length > 0 ? this.set(n) : Promise.resolve();
            }
        }
    }
});
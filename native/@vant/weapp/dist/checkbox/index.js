function e(e, a) {
    e.$emit("input", a), e.$emit("change", a);
}

(0, require("../common/component").VantComponent)({
    field: !0,
    relation: {
        name: "checkbox-group",
        type: "ancestor",
        current: "checkbox"
    },
    classes: [ "icon-class", "label-class" ],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: "round"
        },
        iconSize: {
            type: null,
            value: 20
        }
    },
    data: {
        parentDisabled: !1
    },
    methods: {
        emitChange: function(a) {
            this.parent ? this.setParentValue(this.parent, a) : e(this, a);
        },
        toggle: function() {
            var e = this.data, a = e.parentDisabled, t = e.disabled, n = e.value;
            t || a || this.emitChange(!n);
        },
        onClickLabel: function() {
            var e = this.data, a = e.labelDisabled, t = e.parentDisabled, n = e.disabled, i = e.value;
            n || a || t || this.emitChange(!i);
        },
        setParentValue: function(a, t) {
            var n = a.data.value.slice(), i = this.data.name, l = a.data.max;
            if (t) {
                if (l && n.length >= l) return;
                -1 === n.indexOf(i) && (n.push(i), e(a, n));
            } else {
                var s = n.indexOf(i);
                -1 !== s && (n.splice(s, 1), e(a, n));
            }
        }
    }
});
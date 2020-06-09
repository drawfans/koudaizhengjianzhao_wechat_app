var e = require("../common/component"), a = require("../mixins/button"), t = require("../mixins/open-type");

(0, e.VantComponent)({
    mixins: [ a.button, t.openType ],
    classes: [ "hover-class", "loading-class" ],
    data: {
        baseStyle: ""
    },
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        customStyle: String,
        loadingType: {
            type: String,
            value: "circular"
        },
        type: {
            type: String,
            value: "default"
        },
        size: {
            type: String,
            value: "normal"
        },
        loadingSize: {
            type: String,
            value: "20px"
        },
        color: {
            type: String,
            observer: function(e) {
                var a = "";
                e && (a += "color: " + (this.data.plain ? e : "white") + ";", this.data.plain || (a += "background: " + e + ";"), 
                -1 !== e.indexOf("gradient") ? a += "border: 0;" : a += "border-color: " + e + ";"), 
                a !== this.data.baseStyle && this.setData({
                    baseStyle: a
                });
            }
        }
    },
    methods: {
        onClick: function() {
            this.data.disabled || this.data.loading || this.$emit("click");
        }
    }
});
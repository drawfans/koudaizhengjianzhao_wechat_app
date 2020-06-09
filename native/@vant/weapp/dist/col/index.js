(0, require("../common/component").VantComponent)({
    relation: {
        name: "row",
        type: "ancestor",
        current: "col"
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        viewStyle: ""
    },
    methods: {
        setGutter: function(t) {
            var e = t / 2 + "px", n = t ? "padding-left: " + e + "; padding-right: " + e + ";" : "";
            n !== this.data.viewStyle && this.setData({
                viewStyle: n
            });
        }
    }
});
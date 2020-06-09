(0, require("../common/component").VantComponent)({
    relation: {
        name: "col",
        type: "descendant",
        current: "row",
        linked: function(t) {
            this.data.gutter && t.setGutter(this.data.gutter);
        }
    },
    props: {
        gutter: {
            type: Number,
            observer: "setGutter"
        }
    },
    data: {
        viewStyle: ""
    },
    mounted: function() {
        this.data.gutter && this.setGutter();
    },
    methods: {
        setGutter: function() {
            var t = this, e = this.data.gutter, r = "-" + Number(e) / 2 + "px", n = e ? "margin-right: " + r + "; margin-left: " + r + ";" : "";
            this.setData({
                viewStyle: n
            }), this.getRelationNodes("../col/index").forEach(function(e) {
                e.setGutter(t.data.gutter);
            });
        }
    }
});
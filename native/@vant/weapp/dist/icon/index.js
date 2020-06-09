(0, require("../common/component").VantComponent)({
    props: {
        dot: Boolean,
        info: null,
        size: null,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: "van-icon"
        },
        name: {
            type: String,
            observer: function(n) {
                this.setData({
                    isImageName: -1 !== n.indexOf("/")
                });
            }
        }
    },
    methods: {
        onClick: function() {
            this.$emit("click");
        }
    }
});
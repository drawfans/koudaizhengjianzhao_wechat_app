(0, require("../common/component").VantComponent)({
    props: {
        show: Boolean,
        customStyle: String,
        duration: {
            type: null,
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick: function() {
            this.$emit("click");
        },
        noop: function() {}
    }
});
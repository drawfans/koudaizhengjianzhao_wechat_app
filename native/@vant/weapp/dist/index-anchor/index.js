(0, require("../common/component").VantComponent)({
    relation: {
        name: "index-bar",
        type: "ancestor",
        current: "index-anchor"
    },
    props: {
        useSlot: Boolean,
        index: null
    },
    data: {
        active: !1,
        wrapperStyle: "",
        anchorStyle: ""
    }
});
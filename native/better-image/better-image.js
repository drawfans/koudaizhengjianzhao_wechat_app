Component({
    properties: {
        src: String,
        mode: String,
        lazyload: Boolean,
        "show-menu-by-longpress": Boolean,
        width: String,
        height: String,
        customStyle: String,
        customClassName: String
    },
    data: function() {
        return {
            currentMode: this.properties.mode,
            computedStyles: ""
        };
    },
    methods: {
        handleOnLoad: function(t) {
            var e = this, i = t.detail, h = i.width / i.height;
            "heightFix" === this.data.mode ? wx.createSelectorQuery().in(this).select(".better-image").boundingClientRect(function(t) {
                var i = t.height;
                e.setData({
                    computedStyles: "width: " + i * h + "px;height: " + i + "px;",
                    currentMode: "widthFix"
                });
            }).exec() : "widthFix" === this.data.mode && wx.createSelectorQuery().in(this).select(".better-image").boundingClientRect(function(t) {
                var i = t.width;
                t.height;
                e.setData({
                    computedStyles: "width: " + i + "px;height: " + i / h + "px;",
                    currentMode: "widthFix"
                });
            }).exec();
        },
        handleOnError: function(t) {}
    },
    attached: function() {
        "heightFix" === this.properties.mode ? this.setData({
            computedStyles: "width: 0;height: " + this.properties.height + ";"
        }) : "heightFix" === this.properties.mode && this.setData({
            computedStyles: "width: " + this.properties.width + ";height: 0;"
        });
    }
});
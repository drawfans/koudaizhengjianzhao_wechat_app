function t(t, e) {
    return t > e && t > s ? "horizontal" : e > t && e > s ? "vertical" : "";
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var s = 10;

exports.touch = Behavior({
    methods: {
        resetTouchStatus: function() {
            this.direction = "", this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0;
        },
        touchStart: function(t) {
            this.resetTouchStatus();
            var s = t.touches[0];
            this.startX = s.clientX, this.startY = s.clientY;
        },
        touchMove: function(s) {
            var e = s.touches[0];
            this.deltaX = e.clientX - this.startX, this.deltaY = e.clientY - this.startY, this.offsetX = Math.abs(this.deltaX), 
            this.offsetY = Math.abs(this.deltaY), this.direction = this.direction || t(this.offsetX, this.offsetY);
        }
    }
});
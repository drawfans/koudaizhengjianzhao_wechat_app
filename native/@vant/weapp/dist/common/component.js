function e(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e;
}

function n(e, n, i) {
    Object.keys(i).forEach(function(t) {
        e[t] && (n[i[t]] = e[t]);
    });
}

function i(n, i, t) {
    var r = t.type, a = t.name, d = t.linked, o = t.unlinked, l = t.linkChanged, c = i.beforeCreate, h = i.destroyed;
    "descendant" === r && (n.created = function() {
        c && c.bind(this)(), this.children = this.children || [];
    }, n.detached = function() {
        this.children = [], h && h.bind(this)();
    }), n.relations = Object.assign(n.relations || {}, e({}, "../" + a + "/index", {
        type: r,
        linked: function(e) {
            s[r].linked.bind(this)(e), d && d.bind(this)(e);
        },
        linkChanged: function(e) {
            l && l.bind(this)(e);
        },
        unlinked: function(e) {
            s[r].unlinked.bind(this)(e), o && o.bind(this)(e);
        }
    }));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VantComponent = void 0;

var t = require("../mixins/basic"), s = {
    ancestor: {
        linked: function(e) {
            this.parent = e;
        },
        unlinked: function() {
            this.parent = null;
        }
    },
    descendant: {
        linked: function(e) {
            this.children = this.children || [], this.children.push(e);
        },
        unlinked: function(e) {
            this.children = (this.children || []).filter(function(n) {
                return n !== e;
            });
        }
    }
};

exports.VantComponent = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = {};
    n(e, s, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses"
    });
    var r = e.relation;
    r && i(s, e, r), s.externalClasses = s.externalClasses || [], s.externalClasses.push("custom-class"), 
    s.behaviors = s.behaviors || [], s.behaviors.push(t.basic), e.field && s.behaviors.push("wx://form-field"), 
    s.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, Component(s);
};
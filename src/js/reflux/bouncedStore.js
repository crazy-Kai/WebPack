import React from "react";
import Reflux from "reflux";
import Action from "./bouncedAction";

var store = Reflux.createStore({
    listenables: [Action],
    isShow: false,
    onFlag: function() {
        var me = this;
        	console.log(me.isShow)
        me.trigger({
              display: me.isShow ? "none" : "show"
        })
         me.isShow = !me.isShow;

    }

});
module.exports = store;

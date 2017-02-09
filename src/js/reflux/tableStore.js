import React from "react";
import Reflux from "reflux";
import $ from "jquery";
import Action from "./tableAction";


var store = Reflux.createStore({
    listenables: [Action],
    isShow: false,
    store: {
        data: [{ name: "wuxiaowen" }, { name: "wukai" }, { name: "zp" }, { name: "zl" }],
        key: null,
        value: "",
       
    },
    getInitialState: function() {
        return this.store
    },
  
    //删除
    onDelete: function(e) {
        var me = this,
            index = $(e.target).data("index"),
            store = me.store;
        store.data.splice(index - 1, 1);
        me.trigger(store);
    },
    //change输入值
    onChangeValue: function(e) {
        var me = this,
            store = me.store,
            value = $(e.target).val();
        store.value = value;
        me.trigger(store);

    },
    //修改
    onModify: function(e) {
        var me = this,
            store = me.store,
            index = $(e.target).data('index'),
            targetValue = store.data[index - 1].name;
        store.value = targetValue;
        store.key = index - 1;
        me.trigger(store);
    },
    //保存修改或者添加
    onAdd: function(e) {
        var me = this,
            store = me.store,
            targetValue = store.value;
        console.log(targetValue)
        //判断是修改还是新增
        if (me.store.key != null) {
            me.store.data[me.store.key].name = targetValue;
        } else {
            me.store.data.push({ name: targetValue })
        };
        me.trigger(store);
       //清空设置
        store.key = null;
        store.value = "";
        me.trigger(store);
        console.log(store.key,store.value)

    }
    


});
module.exports = store;

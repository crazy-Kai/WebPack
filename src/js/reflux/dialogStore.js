import Action from "./dialogAction";
import Reflux from "reflux";

var Store = Reflux.createStore({
     listenables:[Action],
     flag:{
	     	boxStyle:{
	     	display:"none"
	     }
    },
     getInitialState:function(){
     	var me = this;
     	return me.flag
     },
     onSwitchShow:function(){
     	var me = this;
     	me.flag.boxStyle = {display:"block"};
     	me.trigger(me.flag)
     },
     onSwitchOff:function(){},

});

module.exports = Store;
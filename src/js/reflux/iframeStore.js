import Reflux from "reflux";
import Action from "./iframeAction.js";
import $ from "jquery";
import path from "path";

let iframeStore = Reflux.createStore({
    listenables: [Action],
    init: function() {
        /*初始化方法*/
    },
    getInitialState: function() {
        return this.store
    },
    store: {
        data: [
            { name: "page1", key: "1", url: path.resolve("/src/pages/iframe/page1.html") }, { name: "page2", key: "2", url: path.resolve("/src/pages/iframe/page2.html") },
            { name: "page3", key: "3", url: path.resolve("/src/pages/iframe/page3.html") }, { name: "page4", key: "4", url: path.resolve("/src/pages/iframe/page4.html") },
            { name: "page5", key: "5", url: path.resolve("/src/pages/iframe/page5.html") }, { name: "page6", key: "6", url: path.resolve("/src/pages/iframe/page6.html") }
        ],
        targetKey: "1",
        firstUrl: path.resolve("/src/pages/iframe/page1.html"),
    },
    onTargetLink: function(e) {
        let key = $(e.target).data("key");
        this.store.targetKey = key;
        this.store.firstUrl = firstURl(this.store.data)[key];
        this.trigger(this.store)
        console.log(firstURl(this.store.data),key)

    },


});
//把数组中的所有key,和url取出来放入一个map中,然后根据当前选中的key去找对应de url
function firstURl (data){
	let map = {};
	$(data).each(function(key,val){
		map[val.key] = val.url; 
	})
	return map;
}
export default iframeStore;

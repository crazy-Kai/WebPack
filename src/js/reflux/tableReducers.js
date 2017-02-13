/*reducers*/
//依赖
import { combineReducers } from 'redux';
import $ from "jquery";

let initialState =  {
        data: [{ name: "wuxiaowen",id:0 }, { name: "wukai",id:1 }, { name: "zp",id:2 }, { name: "zl",id:3 }],
        key: null,
        value: ""
    }
    function tableApp (state = initialState,action){
       switch (action.type){
       	 case "addItem":
       	   $.extend({},state,
              {
              	data:[
              	 ...state.data,
              	 	{	
	              	 	name:action.item,
	              		id:state.data.reduce((firstItem,curItem) => Math.max(curItem.id,firstItem),-1)+1
              	 	}
              	]
              	
              }
       	   	)
       	   break;
       	   case "deleteItem":

       }

    }
/*reducers*/
//依赖
import { combineReducers } from 'redux';
import $ from "jquery";

const initialState =  {
        data: [{ name: "wuxiaowen",id:0 }, { name: "wukai",id:1 }, { name: "zp",id:2 }, { name: "zl",id:3 }],
        key: null,
        value: ""
    }
const getData =  (state = initialState,action) =>{
       switch (action.type){
       	 case "addItem":
       	 console.log($(action.item.target))
       	
       	  return $.extend({},state,
              {
              	data:[
              	 ...state.data,
              	 	{	
	              	 	name:$(action.item.target).data("value"),
	              		id:state.data.reduce((firstItem,curItem) => Math.max(curItem.id,firstItem),-1)+1
              	 	}
              	]
              	
              }
       	   	)
       	   break;
       	   // case "deleteItem":
       	   //  return $.extend({},state,{
       	    	
       	   //  })
       	   case "changeValue":
       	    return $.extend({},state,{
       	    	value:$(action.val.target).val()
       	    })
       	   default: 
             return state

       }

    };
const tableApp = combineReducers({getData});

export default tableApp;
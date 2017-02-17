/*reducers*/
//依赖
import { combineReducers } from 'redux';
import $ from "jquery";

const initialState =  {
        data: [{ name: "wuxiaowen",id:0 }, { name: "wukai",id:1 }, { name: "zp",id:2 }, { name: "zl",id:3 }],
        key: null,
        value: "",
        addItem:"增加"
    }
    
const getData =  (state = initialState,action) =>{
       switch (action.type){
       	 case "addItem":
       	 if(state.key === null){

	       	  return $.extend({},state,
	              {
	              	data:[
	              	 ...state.data,
	              	 	{	
		              	 	name:$(action.item.target).data("value"),
		              		id:state.data.reduce((firstItem,curItem) => Math.max(curItem.id,firstItem),-1)+1
	              	 	}
	              	],
	              	value:""

	              	
	              }
	       	   	)
       	 }else{
	       	 state.data.map(function(val,key,arr){if(key === state.key){val.name = state.value }})
	       	 	
	       	 	return $.extend({},state,{
	       	 		data:state.data,
	       	 		value:"",
	       	 		addItem:"增加"
	       	 	})
       	 }
       	   break;

       	   case "deleteItem":
	       	    return $.extend({},state,{
	       	    	data:state.data.filter( item => { return (item.id !== action.id) } )
	       	    });
       	    break;

       	   case "changeValue":
	       	    return $.extend({},state,{
	       	    	value:$(action.val.target).val()
	       	    });
	       	break;

	       	case "modifyItem":
	       	    return  $.extend({},state,{
	       	    	value:action.text,
	       	    	key:action.id,
	       	    	addItem:"保存"
	       	    });
            break;
       
       	   default: 
             return state;

       }

    };
const tableApp = combineReducers({getData});
//每当触发action 掉用reducers后会更新store中的state树!

export default tableApp;
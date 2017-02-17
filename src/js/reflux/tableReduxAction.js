//依赖
import $ from "jquery";
/* action  */
 const  ADD_ITEM = 'addItem';
 const DELETE_ITEM = 'deleteItem';
 const MODIFY_ITEM = 'modifyItem';
 const QUERY_ITEM = 'queryItem';
 const CHANGE_VALUE = 'changeValue';
//addItem 
export  function addItems(item){
    let target = $(item.target),
         oldKey = target.data("key");
	return {type:ADD_ITEM,item,oldKey}
  }

//modifyItem
export  function modifyItems(e){
	let id = $(e.target).data("index"),
        text = $(e.target).data("value");

	return {type:MODIFY_ITEM,id,text}
}

//deleteItem 
export function deleteItem(itemId){

	let id = $(itemId.target).data("index")
  return {type:DELETE_ITEM,id}

}
//queryItem
export function queryItem(e){
	let val = $(e.target).val();
	return {type:QUERY_ITEM ,val}
}

//input onChange
export function changeValue(val){
	return {type:CHANGE_VALUE,val}
}

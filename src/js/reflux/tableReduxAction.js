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
   
	return {type:ADD_ITEM,item}
  }

//modifyItem
export  function modifyItems(id,text){
	return {type:MODIFY_ITEM,id,text}
}

//deleteItem 
export function deleteItem(itemId){
	let id =$(itemId.target).data("index")
  return {type:DELETE_ITEM,id}

}
//queryItem
export function queryItem(textContent){
	return {type:QUERY_ITEM ,textContent}
}

//input onChange
export function changeValue(val){
	return {type:CHANGE_VALUE,val}
}

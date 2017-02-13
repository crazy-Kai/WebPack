/* action  */
export const  addItem = (item) => ({type:"addItem",item});
export const deleteItem = (id) => ({type:"deleteItem",id});
export const modifyItem = (id,text) => ({type:"modifyItem",id,text});
export const queryItem = (textContent) => ({type:"queryItem",textContent});
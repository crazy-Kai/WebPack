//依赖
import 	{createStore} from "redux";
import Reducers from "../../js/reflux/tableReducers";
import Actions from "../../js/reflux/tableAction";
import {Provider} from "redux";
import React from "react";
import {PropTypes} from "react"; 
import ReactDom from "react-dom";
import IndexApp from "./pageComponents/reduxIndex";	
  const store = createStore(Reducers);


    ReactDom.render(
    	 <Provider store = {store}>
              <IndexApp />
           </Provider>,
           document.getElementById("test")
    	)
   
  
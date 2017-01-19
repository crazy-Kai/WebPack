
// var React = require("react");
// var ReactDOM = require("react-dom");
// var TableBuild = require("./src/js/common/index");
import React from "react";
import ReactDOM from "react-dom";
import TableBuild from "./src/js/common/index";

 var TestModule = React.createClass({
      getInitialState:function(){
      	return {
      		data:[{name:"wuxiaowen"},{name:"wukai"},{name:"zp"},{name:"zl"}]
      	}
      },
      render:function(){
      	return(
      			<TableBuild data={this.state.data}><p>I am A</p><p> I am B </p></TableBuild>
      		)
      }

 })
 ReactDOM.render(<TestModule/>,document.getElementById("test"))
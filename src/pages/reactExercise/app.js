
import React from "react";
import ReactDOM from "react-dom";
import TableBuild from "./pageComponents/index.js";

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
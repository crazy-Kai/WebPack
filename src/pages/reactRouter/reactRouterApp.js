import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, Link ,hashHistory} from 'react-router';
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";

class Application extends React.Component{
	
	
	 render(){
	 	return (
	 	 < div className = "fn-iframeView" >
            < div className = "fn-iframe-head" style = {{ backgroundColor: "#0073bf", color: "#fff" } } >react + iframe 实现单页面多视图的应用 < /div> 
            < div className = "fn-iframe-body" >
            	< div className = "fn-iframe-left" >
           				<li><Link to="page1">page1</Link></li>
           				<li><Link to="page2">page2</Link></li>
           				<li><Link to="page3">page3</Link></li>
           	    < /div > 
	           	< div className = "fn-iframe-right" >
	           	  {this.props.children}
	            < /div>
            < /div> 
        < /div> 
		
	 		)
	 }
			
};
ReactDOM.render(

  <Router history={hashHistory} >
  	  <Route path="/" component={Application}>
  	  	<IndexRoute component={Page1}/>
        <Route path="page1" component={Page1}></Route>
        <Route path="page2" component={Page2}></Route>
        <Route path="page3" component={Page3}></Route>
  	  </Route>
  </Router>,document.getElementById('pageView')
  )
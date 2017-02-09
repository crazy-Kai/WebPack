/*依赖*/
import $ from "jquery";
import React from "react";
import Reflux from "reflux";
import ReactDom from "react-dom";
import Store from "../../../js/reflux/dialogStore";
import ReactMixin from "react-mixin"; 

class Bounced  extends React.Component{
	constructor (props) {
		super(props);
		this.props = props;
		this.state = {
			defaultTime : this.props.time,
    		interval:false,
    		time:this.props.time
		}
		//这个绑定上父级的this 那么下面的方法中的this就不为null了!
		this.onInterval = this.onInterval.bind(this);
		this.onClearInerval = this.onClearInerval.bind(this); 
	}
	//获取验证码设置定时器
	onInterval(e){
          //子类没有创建this对象,而是继承父级的this对象,所以这里输出this为null ,而这些自定义方法是子类上定义的所有获取不到this对象
	  	   console.log(this)
	       let me = this,
	           nowTime = new Date ().getTime(),
	           time,interval,defaultTime;
	           var State = me.state;
	           State.interval = true;
	           me.setState(State);
	          defaultTime =State.defaultTime;
	           me.interval = window.setInterval(function(){
	            time = (+defaultTime) - Math.floor((new Date().getTime() - nowTime)/1000);
	            if(time<0){
	            	State.time = defaultTime;
	            	State.interval = false;
	            	me.setState(State);
	            	window.clearInterval(me.interval)
	            }else{
		           	State.time =  time;
		            me.setState(State)
	            	
	            }
	        },1000)
	}
	//清除定时器
	onClearInerval(){
		let me = this,
    	 state = me.state;
    	 state.interval= false;
    	 state.data.boxStyle = {display:"none"}
    	 state.time = state.defaultTime;
         window.clearInterval(me.interval)
    	 me.setState(state)
	}
	onClick(){
		console.log(1111)
	}
	//渲染虚拟DOM
	render(){
		//这个render方法时继承父类的this对象的所以这里能获取到this对象!
		let me = this;
    	console.log(me.state)
       	return(
    		<div style = {me.state.data.boxStyle} >

    		  <div className="fn-bounced">
    		  </div>
              <div className="fn-bounced-main">
    		  <div className="fn-bounced-icon" onClick = {this.onClearInerval}>X</div>
                <div className="fn-bounced-title">
                     获取验证码练习
                </div>
                <div className="fn-MT10">
                   <table className="fn-table fn-table-text" width="100%">
                   	    <tbody>
                            <tr>
                             <td width="220px">
                                <input className="fn-input-text fn-W200" />
                             </td>
                             <td>
                                <button className="fn-input-button fn-input-button-small fn-H32" ref="getData"  style ={{backgroundColor: this.state.interval?"#ddd":"",color:this.state.interval?"#000":""}}onClick={this.onInterval}>{this.state.interval?this.state.time+"s 后发送给您":"获取验证码"}</button>
                             </td>
                            </tr>
                   	    </tbody>
                   </table>
                   <div className="fn-MT20" style={{textAlign:"center"}}>
                         <button className="fn-input-button fn-input-button-small fn-W100" onClick ={this.onClick} >确认</button>
                   </div>
                </div>
              </div>
    		</div>)
    
        

	}

}



export default Bounced;
ReactMixin.onClass(Bounced, Reflux.connect(Store,'data'))
import $ from "jquery";
import React from "react";
import ReactDom from "react-dom";
import Action from "../../../js/reflux/bouncedAction";

var bounced = React.createClass({
    
    render:function(){
    	return (
    		<div>

    		  <div className="fn-bounced">
    		  </div>
              <div className="fn-bounced-main">
    		  <div className="fn-bounced-icon">X</div>
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
                                <button className="fn-input-button fn-input-button-small fn-H32" ref="getData">获取短信验证码</button>
                             </td>
                            </tr>
                   	    </tbody>
                   </table>
                </div>
              </div>
    		</div>
    
    		)

    }

});

module.exports = bounced;
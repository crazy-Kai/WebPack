import pageCss from "../../css/test.css";
import React from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
import Action from "../../js/reflux/iframeAction.js";
import Store from "../../js/reflux/iframeStore.js";
import Reflux from "reflux";
console.log(Reflux.createAction)
let IframeView = React.createClass({
    mixins: [Reflux.connect(Store, "data")],

    render: function() {
        let me = this,
            arr = [];
        console.log(me.state)
        me.state.data.data.map(function(val, key) {
            arr.push( < li key = { key }
                className = "fn-TAC fn-LH30 " > <a target = "reactIframe"  href = {val.url} data-key = { val.key }
                onClick = { Action.targetLink } className = {(me.state.data.targetKey && me.state.data.targetKey == val.key) ? "fn-TAC fn-LH30 ch-active" : "fn-TAC fn-LH30" }  > {val.name}< /a></li > )
        }.bind(me));

        return ( < div className = "fn-iframeView" >
            < div className = "fn-iframe-head"
            style = {
                { backgroundColor: "#0073bf", color: "#fff" } } >
            react + iframe 实现单页面多视图的应用 < /div> < div className = "fn-iframe-body" >
            < div className = "fn-iframe-left" >
            < ul > { arr } < /ul>  < /div >  < div className = "fn-iframe-right" >
            < iframe frameBorder = "0"
            width = "100%"
            height = "100%"
            name = "reactIframe" src= {this.state.data.firstUrl} > < /iframe>  < /div>

            < /div> < /div> 	
        )

    }
})
ReactDOM.render( < IframeView / > , document.getElementById("pageView"));

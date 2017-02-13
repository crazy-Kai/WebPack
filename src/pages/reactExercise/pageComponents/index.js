 //依赖
      import $ from "jquery";
      import ReactDOM from "react-dom";
      import React from "react";
      import Bounced from "./bounced";
      import Reflux from "reflux";
      import tableAction from "../../../js/reflux/tableAction";
      import tableStore from "../../../js/reflux/tableStore.js";
      import dialogAction from "../../../js/reflux/dialogAction";
      import ReactMixin from "react-mixin"; 
    
      class TableBuild extends React.Component{
            constructor(props) {
                //实例化父类,继承父类构造函数,如果不写此方法会报错
                super(props)
                this.props = props;
                console.log(this)
            }

            render(){
                //这里可以设置变量
                    //有循环元素的时候必须用key 等于一个变量来区分循环后的每个元素，就相当与给每个tr 加了ID 
                    let self = this,
                        arr = [];
                        console.log(this.state)
                     document.title = "页面title 可以用document.title属性来设定"   
                    this.state.data.data.map(function(v,i){
                        arr.push(<tr key = {i}>
                                    <td width="300">
                                        {++i}
                                    </td >
                                    <td width="300">
                                        {v.name}
                                    </td>
                                    <td>
                                        <button className="fn-btn fn-btn-primary fn-MR10" data-index = {i} onClick = {tableAction.modify} >编辑</button>
                                        <button className="fn-btn fn-btn-primary" data-index = {i} onClick = {tableAction.delete}  >删除</button>
                                    </td>
                                </tr>)
                    }.bind(this));
                    return (
                           <div >
                                <div className="fn-FS16 fn-main-style">
                                    <div width="100%">
                                        <h1 className="fn-TAC fn-LH30 fn-FS16 fn-FWB " >React 基础 练习 </h1>
                                    </div>  
                                    <table className="fn-table fn-table-text fn-table-border fn-MT20" width="100%">
                                        <thead>
                                            <tr>
                                                <th width="300">
                                                    序号
                                                </th>
                                                <th width="300">
                                                    名字
                                                </th>
                                                <th>
                                                    操作
                                                </th>   
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {arr}
                                        </tbody>    

                                    </table>

                                    <div className = "fn-MT20 fn-W300 fn-LH30 fn-MT20 ">

                                        <input  ref="myInput"  value={this.state.data.value} onChange={tableAction.changeValue} type="text" className="fn-input-text" placeholder="请输入姓名" maxLength="20"/>
                                        <button className="fn-btn fn-btn-default fn-LH28" style={{backgroundColor:"#047dc6",height:"33px",verticalAlign:"-1px",color:"#fff"}}   onClick = {tableAction.add}>增加</button>

                                    
                                    </div>
                                    <div className="fn-MT20">
                                        <ul>

                                            {React.Children.map(this.props.children,function(p){
                                                return (<li>{p}</li>)
                                            })}
                                        </ul>
                                    </div>
                                     <div className="fn-MT20">
                                        <button className = "fn-btn fn-btn-default fn-LH28" onClick={dialogAction.switchShow} >
                                            获取验证码
                                        </button>
                                    </div>
                                   
                                </div>
                                
                                 <div  className = "fn-bounced-box" >
                                    <Bounced  time="60"/>
                                 </div>

                           </div>
                          
                        )
            }

      }
 
export default  TableBuild;
//mixins
ReactMixin.onClass(TableBuild, Reflux.connect(tableStore,'data'))

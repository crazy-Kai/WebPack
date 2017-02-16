     //依赖
     import {connect} from "react-redux";
     import React from "react";
     import $ from "jquery";
     import  {bindActionCreators} from "redux" ;
     //这里的 *号 as 表示引入文件的所有action
     import * as Actions from "../../../js/reflux/tableReduxAction";


     class TableBuild extends React.Component{
                constructor(props) {
                    //实例化父类,继承父类构造函数,如果不写此方法会报错
                    super(props)
                }
                
                render(){
                    //这里可以设置变量
                        //有循环元素的时候必须用key 等于一个变量来区分循环后的每个元素，就相当与给每个tr 加了ID 
                        let self = this,
                            arr = [],
                            action = this.props.action;
                          console.log(this.props)
                        //  document.title = "页面title 可以用document.title属性来设定"   
                        this.props.tableData.data.map(function(v,i){
                            arr.push(<tr key = {i} id={v.id}>
                                        <td width="300">
                                            {++i}
                                        </td >
                                        <td width="300">
                                            {v.name}
                                        </td>
                                        <td>
                                            <button className="fn-btn fn-btn-primary fn-MR10" data-index = {i} >编辑</button>
                                            <button className="fn-btn fn-btn-primary" data-index = {v.id} onClick = {action.deleteItem} >删除</button>
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

                                            <input  type="text" value={this.props.tableData.value} className="fn-input-text" placeholder="请输入姓名" maxLength="20" onChange={action.changeValue}/>
                                            <button className="fn-btn fn-btn-default fn-LH28" style={{backgroundColor:"#047dc6",height:"33px",verticalAlign:"-1px",color:"#fff"}}  data-key = {this.props.tableData.key} data-value = {this.props.tableData.value} onClick={action.addItems} >增加</button>

                                        
                                        </div>
                                        <div className="fn-MT20">
                                            <ul>

                                                {React.Children.map(this.props.children,function(p){
                                                    return (<li>{p}</li>)
                                                })}
                                            </ul>
                                        </div>
                                         <div className="fn-MT20">
                                            <button className = "fn-btn fn-btn-default fn-LH28"  >
                                                获取验证码
                                            </button>
                                        </div>
                                       
                                    </div>
                                    
                                   

                               </div>
                              
                            )
                }

     }

     TableBuild.propTypes = {
     	tableData:React.PropTypes.object.isRequired
     }

     export default connect( state => ({tableData:state.getData}), dispatch => ({ action:bindActionCreators(Actions,dispatch) }))(TableBuild)
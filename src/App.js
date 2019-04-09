import React, { Component } from 'react';
import { Button,Input,List } from 'antd';
import store from './store/store.js'
import {  getAddAction, getDeltAction } from './store/actionCtrls.js'
import './App.css';

class App extends Component {
	constructor(props){
        super(props)
		this.state={
			data:store.getState().data,
			value:''
		}
		store.subscribe(this.onChange)
	}
	onChange = () => {
        this.setState(store.getState())
    }
	getInputVal = (e) =>{
		this.setState({value:e.target.value})
	}
	add = () =>{
		let action = getAddAction(this.state.value)
		store.dispatch(action)
		this.refs.inputvalue.value = ''
	}
	del = (item) =>{
		store.dispatch(getDeltAction(item))
	}
  render() {
	  let {data} = this.state
    return (
      <div>
	  		<h2 className="title">redux-todobox</h2>
			<div className='flex'>
				<Input placeholder="请输入" ref="inputvalue" onChange={this.getInputVal}/>
				<Button type="primary" onClick={this.add}>Add</Button>
			</div>
			<div className='list'>
				<List
					bordered
					dataSource={data}
					renderItem={(item,index) => (<List.Item key={index}>
						{item}
						<Button type="danger" onClick={()=>this.del(item)}>删除</Button>
					</List.Item>)}
				/>
			</div>
      </div>
    );
  }
}

export default App;

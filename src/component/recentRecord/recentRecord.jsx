"use strict"

import React,{Component} from 'react';
import {Icon} from 'antd';
import './recentRecord.css';
import { Link } from 'react-router'
import RecordModal from './recordModal.jsx'
// import fetchData from '../../util/fetch.js';

let fetchData = (url, opts, callback) => {
	fetch(url, {
		headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
		},
		method: 'post',
		body: JSON.stringify(opts)
	})
		.then(response => response.json())
		.then(res => {
			callback(res);
		})
}

class recentRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recordData:[],
            recordVisible:false,
        }
    }
    // 获取数据方法
    getData(url, opts) {
        fetchData(url, opts, function (res) {
            let data = eval(res)
            switch (url) {
                // 获取今天的任务数据
                case 'http://117.122.226.252:9997/api/component/recent/list':
                    this.setState({
                        recordData: data.data
                    });
                    break;
            }
        }.bind(this))
    }
    componentDidMount() {
        let Binding="99B45A2425CC2322B24FC5881A79FB47";
        this.getData("http://117.122.226.252:9997/api/component/recent/list", { "binding":Binding})
    }
    showTaskModal(){
        this.setState({
            recordVisible: true,
        })
    }
    handleAlertModalOk() {
        this.handleCreateModalCancel();
    }
    handleCreateModalCancel() {
        this.setState({
            recordVisible: false,
        })
    }
    render() {
        const {recordData}=this.state;
        console.log("recordData",recordData)
        let list=[];
        // for(let i=0;i<recordData.length;i++){
        //     if(i<5){
        //         list.push( recordData[i])
        //     }
        // }
        return (
            <div className="recentRecord">
                <h3>最近记录</h3>
                <ul className="record">
                        { list.map((res,i)=>{return (
                            <li key={i}>
                                <Icon type="book" />
                                <Link to={"query.action?&m=query&ismainpage=main&id="+`${res.id}`+"&rtnURL=home_mainPage.action"}>{res.recordName}</Link>
                            </li>
                        )
                        })}
                    <Link className="all" onClick={this.showTaskModal.bind(this)}>查看全部</Link>
                </ul>
                 <RecordModal
                     visible ={ this.state.recordVisible}
                     onCancel ={ this.handleCreateModalCancel.bind(this)}
                     onOk={this.handleAlertModalOk.bind(this)}
                     recordData={recordData}
                 />
            </div>
        )
    }
}

export default recentRecord

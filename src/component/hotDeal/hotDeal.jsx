"use strict"

import React,{Component} from 'react';
import {Checkbox,Modal} from 'antd';
import './hotDeal.css';
import { Link } from 'react-router'
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

class hotDeal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dealData:[],
        }
    }
    // 获取数据方法
    getData(url, opts) {
        fetchData(url, opts, function (res) {
            let data = eval(res)
            switch (url) {
                // 获取热门交易
                case 'http://117.122.226.252:9997/api/component/hotdeal/list':
                    this.setState({
                        dealData: data.data
                    });
                    break;
            }
        }.bind(this))
    }
    componentDidMount() {
        let Binding="99B45A2425CC2322B24FC5881A79FB47";
        this.getData("http://117.122.226.252:9997/api/component/hotdeal/list", {"binding":Binding})
    }
    render() {
        const {dealData}=this.state;
        console.log("dealData>>>",dealData)
        let list=[];
        if(!dealData || dealData.length==0){
            list=[];
        }else{
            for(let i=0;i<dealData.length;i++){
                if(i<5){
                    list.push({
                        id:dealData[i].id,
                        name: dealData[i].valueUnit_l_wx[3]
                    })
                }
            }
        }
        console.log("数组>>>",list)
        return (
            <div className="hotdeal">
                <h3>热门交易</h3>
                <ul>
                    {
                        list.map((res,i)=>{
                            return(
                                <li key={i}>
                                    <span>{i}.</span><Link to={"/query.action?id="+`${res.id}`+"&m=query"}>{res.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default hotDeal

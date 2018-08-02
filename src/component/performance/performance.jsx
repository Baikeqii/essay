"use strict"

import React,{Component} from 'react';
import {Checkbox,Modal} from 'antd';
import './salePerformance.scss';
import { Link } from 'react-router'
import fetchData from '../../util/fetch.js';

class Performance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Data:[{
                goal:100,
                
            }] 
        }
    }
    // 获取数据方法
    getData(url, opts) {
        fetchData(url, opts, function (res) {
            let data = eval(res)
            switch (url) {
                // 获取今天的任务数据
                case 'http://117.122.226.252:9997/api/component/event/list':
                    this.setState({
                        item: data.data
                    });
                    break;
            }
        }.bind(this))
    }
    componentDidMount() {
        let Binding="99B45A2425CC2322B24FC5881A79FB47";
        //this.getData("http://117.122.226.252:9997/api/component/event/list", { "binding":Binding})
    }

    render() {
        
        return (
            <div className="performance">
              
            </div>
        )
    }
}

export default Performance

"use strict"

import React,{Component} from 'react';
import {Modal,Radio} from 'antd';
import './taskModal.scss';
import fetchData from '../../util/fetch.js'

const RadioGroup = Radio.Group;

class TaskModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value: "未开始",
            listState:[],
            currentState:props.currentState,
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.state.currentState != nextProps.currentState){
            this.setState({currentState: nextProps.currentState});
        }
    }
    handleOk = (e) => {
        this.props.onOk()
    }
    handleCancel = (e) => {
        this.props.onCancel()
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            currentState: e.target.value,
        });
    }
    render() {
        const {visible,listState}=this.props;
        const {currentState}=this.state;
        console.log("listState>>>",listState)
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={visible}
                    onOk={this.handleOk} 
                    onCancel={this.handleCancel}
                    width = { 700 }
                >
                <RadioGroup onChange={this.onChange} value={1}>
                    <Radio value={1}>未开始</Radio>
                    <Radio value={2}>进行中</Radio>
                    <Radio value={3}>已结束</Radio>
                </RadioGroup>
                </Modal>
            </div>
        )
    }
}

export default TaskModal

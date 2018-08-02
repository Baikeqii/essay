"use strict"

import React,{Component} from 'react';
import {Modal,Table} from 'antd';
import { Link } from 'react-router'

class RecordModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.columns = [{
            title: '名称',
            dataIndex: 'recordName',
            key: 'recordName',
            render: (text,record) => {return(<Link to={"query.action?&m=query&ismainpage=main&id="
            +`${record.id}`+"&rtnURL=home_mainPage.action"} key={record.id}>{text}</Link>)}
        }, {
            title: '类别',
            dataIndex: 'label',
            key: 'label',
        }];
    }
    componentWillReceiveProps(nextProps) {
    }
    handleOk = (e) => {
        this.props.onOk()
    }
    handleCancel = (e) => {
        this.props.onCancel()
    }
    render() {
        const {visible,recordData}=this.props;
        return (
            <div>
                <Modal
                    title={<div><h3>最近记录</h3><span>20个项目</span></div>}
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width = { 700 }
                >
                    <Table rowKey={record => record.id} columns={this.columns} dataSource={recordData} />
                </Modal>
            </div>
        )
    }
}

export default RecordModal

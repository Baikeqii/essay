import React,{Component} from 'react';
import {Checkbox,Modal, Button} from 'antd';
import './pageThree.scss';

class PageThree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item:[],
        };
        this.handleShowModal = this.handleShowModal.bind(this);
    }

    handleShowModal()
    {
        this.setState({
            isShowModal: !this.state.isShowModal
        })
    }

    render() {
        
        return (
            <div className="pageThree">
                <Button type="primary" onClick={this.handleShowModal}>坦克出现</Button>
                <Modal centered visible={this.state.isShowModal} onOk={this.handleShowModal} onCancel={this.handleShowModal}>
                    <p>居中！</p>
                </Modal>
            </div>
        )
    }
 }
    

export default PageThree

"use strict"

import React,{Component} from 'react';
import {Checkbox,Modal} from 'antd';
import TaskModal from './taskModal.jsx';
import { Link } from 'react-router'
import './task.scss';
import fetchData from '../../util/fetch.js'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:false,
            firstClick:false,
            secondClick:false,

        }
    }
    render() {
        const {data,list,listState,taskStyle,currentState}=this.state;
        return (
            <div className='taskCheck'>
                <ul>
                    {
                        list.map((res,i)=>{return(

                            this.renderList(res)
                        )
                        })
                    }
                </ul>
                <TaskModal
                    visible ={ this.state.taskVisible}
                    onCancel ={ this.handleCreateModalCancel.bind(this)}
                    onOk={this.handleAlertModalOk.bind(this)}
                    listState={listState}
                    currentState={currentState}
                />
            </div>
        )
    }
}

export default Task

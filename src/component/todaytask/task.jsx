"use strict"
import React,{Component} from 'react';
import {Checkbox,Modal,Button} from 'antd';
import TaskModal from './taskModal.jsx';
import { Link } from 'react-router'
import './task.scss';
import fetchData from '../../util/fetch.js'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }
        
    }
    
    render() {

        return (
            <div className='task'>
                <div className="sky">
                    <div className="clouds_one"></div>
                    <div className="clouds_two"></div>
                    <div className="clouds_three"></div>
                </div>
            </div>
        )
    }
}

export default Task

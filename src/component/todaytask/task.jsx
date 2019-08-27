"use strict"
import React from 'react';
import './task.scss';

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

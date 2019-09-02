"use strict"

import React from 'react';
import './pageTwo.scss';
import { Link } from 'react-router'
class PageTwo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item:[],
        }
    }
    render() {
        return (
            <div className="immediate">
                <div className="container">
                    <div className="gear" id="gear1"></div>
                    <div className="gear" id="gear2"></div>
                    <div className="gear" id="gear3"></div>
                    <div className="gear" id="gear4"></div>
                    <div className="gear" id="gear5"></div>
                    <div className="gear" id="gear6"></div>
                    <div className="gear" id="gear7"></div>
                </div>
            </div>
        )
    }
 }
    

export default PageTwo

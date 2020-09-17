"use strict"
import React,{Component} from 'react';
import './pageThree.less';
import { Tabs, Radio } from 'antd';

const TabPane = Tabs.TabPane,
    RadioGroup = Radio.Group,
    RadioButton = Radio.Button;

class PageThree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'top'
        }
    }

    handleModeChange({target: {value}})
    {
        this.setState({ mode: value });
    }

    render()
    {
        let {mode} = this.state;
        const Typeahead = require('react-typeahead').Typeahead
        return <div className="pageThreeWrap">
            <RadioGroup onChange={this.handleModeChange.bind(this)} value={mode} style={{ marginBottom: 8 }}>
                <RadioButton value="top">Horizontal</RadioButton>
                <RadioButton value="left">Vertical</RadioButton>
            </RadioGroup>
            <Tabs
                defaultActiveKey="1"
                tabPosition={mode}
            >
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                <TabPane tab="Tab 11" key="11">
                    <Typeahead
                        options={['John', 'Paul', 'George', 'Ringo']}
                        maxVisible={2}
                    />
                </TabPane>
            </Tabs>
        </div>
    }
 }


export default PageThree

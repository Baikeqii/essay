import React,{Component} from 'react';
import {Icon,Card, Menu, Button, Switch} from 'antd';
import { Stat } from 'g2';
import './MenuSetting.less';
import PageOne from '../../component/pageOne/PageOne.js';
import PageTwo from '../../component/pageTwo/PageTwo.js';
import PageThree from "../pageThree/PageThree";

const SubMenu = Menu.SubMenu,
        MenuItem = Menu.Item,
        menuOption = [
            {title: "first", key: "first", iconType: "cloud"},
            {title: "second", key: "second", iconType: "pay-circle"},
            {title: "third", key: "third", iconType: "bank"},
            {title: "fouth", key: "fouth", iconType: "star", children: [{title: "fouth-one", subKey: "fouth-one"},{title: "fouth-two", subKey: "fouth-two"}]},
        ]
class MenuSetting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentItemKey: "third",
            collapsed: false,
            theme: "dark"
        }

    }

    getDefaultProps()
    {

    }

    getInialStatel()
    {

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }


    toggleCollapsed()
    {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    changeTheme(checked)
    {
        let theme = checked ? "dark" : "light";
        this.setState({theme})
    }

    getMenuItemComp(optionData)
    {
        return optionData.map((optionItem,index) =>
        {
            if(optionItem.children && optionItem.children.length>0)
            {
                return <SubMenu key={optionItem.key} title={<span><Icon type={optionItem.iconType}/><span>{optionItem.title}</span></span>}>
                        {
                            this.getMenuItemComp(optionItem.children)
                        }
                        </SubMenu>
            }
            else
            {
                return <MenuItem key={optionItem.key}>
                    <span>
                        <Icon type={optionItem.iconType}/>
                        <span>
                            {optionItem.title}
                        </span>
                    </span>
                    </MenuItem>
            }

        })
    }

    handleMenuItemClick(item)
    {
        this.setState({currentItemKey: item.key})
    }

    getContentComp()
    {
        let { currentItemKey } = this.state;
        switch (currentItemKey) {
            case "first":
                return <PageOne/>;
            case "second":
                return <PageTwo/>;
            case "third":
                return <PageThree/>;
            break;
            case "fouth":

            break;

            default:
                break;
        }

    }


    render() {
        let { collapsed } = this.state,
            transName = collapsed ? " easeIn" : "";



        return (
            <div className='wellcome'>
                <div className="originPageLeft" style={{width: this.state.collapsed ? "64px" : "300px"}}>
                    <div className={"themeSettingBox" + transName}>
                        <Button style={{margin: "7px 10px"}} type="primary" onClick={this.toggleCollapsed.bind(this)}>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                        <Switch
                            checked={this.state.theme === 'dark'}
                            onChange={this.changeTheme.bind(this)}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                            style={{margin: "7px 6px",display: collapsed ? "none" : "inline-block"}}
                        />
                    </div>

                    <Menu
                        defaultSelectedKeys={['third']}
                        mode="inline"
                        theme={this.state.theme}
                        inlineCollapsed={this.state.collapsed}
                        onClick={this.handleMenuItemClick.bind(this)}
                    >
                        {this.getMenuItemComp(menuOption)}
                    </Menu>
                </div>
                <div className="originPageRight" style={{width: this.state.collapsed ? "~calc(100% - 64px)" : "~calc(100% - 300px)", height: "100%"}}>
                    {this.getContentComp()}
                </div>
            </div>
        )
    }
}

export default MenuSetting

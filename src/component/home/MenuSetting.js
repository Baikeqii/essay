import React from 'react';
import {Icon,Card, Menu, Button, Switch} from 'antd';
import './MenuSetting.scss';
import PageOne from '../../component/pageOne/PageOne.js';
import PageTwo from '../../component/pageTwo/PageTwo.js';
import PageThree from "../pageThree/PageThree";
import Game from '../Game/Game';

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
            currentItemKey: "first",
            collapsed: false,
            theme: "dark"
        }

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
        return optionData.map(item =>
        {
            if(item.children && item.children.length>0)
            {
                return <SubMenu key={item.key} title={<span><Icon type={item.iconType}/><span>{item.title}</span></span>}>
                        {
                            this.getMenuItemComp(item.children)
                        }
                        </SubMenu>
            }
            else
            {
                return <MenuItem key={item.key}>
                    <span>
                        <Icon type={item.iconType}/>
                        <span>
                            {item.title}
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
                return <Game />;
            case "second":
                return <PageTwo/>;
            case "second-one":

            break;
            case "second-two":

            break;
            case "third":
                return <PageThree/>;
            case "fouth":
                return <PageOne/>;
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
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme={this.state.theme}
                        inlineCollapsed={this.state.collapsed}
                        onClick={this.handleMenuItemClick.bind(this)}
                    >
                        {this.getMenuItemComp(menuOption)}
                    </Menu>
                </div>
                <div className="originPageRight" style={{width: this.state.collapsed ? "calc(100% - 64px)" : "calc(100% - 300px)", height: "100%"}}>
                    {this.getContentComp()}
                </div>
            </div>
        )
    }
}

export default MenuSetting

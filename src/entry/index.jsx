import React from 'react'
import  'babel-polyfill'
import { render } from 'react-dom';
import {browserHistory, Router} from "react-router";
import MenuSetting from "../component/home/MenuSetting";
import pageRoutes from "../component/routeConfig";
const routes = [
    {
        path: '/',
        component: MenuSetting,
        indexRoute: {
            onEnter(nextState, replace) {
                replace('/home')
            }
        },
        childRoutes: pageRoutes,
    },
];
render((
    <Router routes={routes} history={browserHistory}/>
), document.getElementById('yt-app'))

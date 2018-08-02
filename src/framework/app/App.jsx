import React from 'react'

import {Router, browserHistory} from 'react-router'

import './base.css'
import './common.css'

import Home from '../../page/home'
import {local, session} from 'common/util/storage.js'
import pageRoutes from '../../page/routeConfig.js'

let routes = [
    {
        path: '/',
        component: Home,
        indexRoute: {
            onEnter(nextState, replace) {
                replace('/home')
            }
        },
        childRoutes: pageRoutes,
    },
]

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <Router routes={routes} history={browserHistory}/>
    }
}

export default App

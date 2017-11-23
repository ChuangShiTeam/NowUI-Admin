import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import Login from './view/Login';
import Main from './view/Main';

import constant from './common/constant';
import util from './common/util';

import './css/style.css'

document.getElementById("loading").remove();

util.setTitle(constant.name + '总控后台');

const reducers = {};
const storeContext = require.context('./store', false, /\.js$/);
const storeKeys = storeContext.keys().filter(item => item !== './index.js');
for (let i = 0; i < storeKeys.length; i += 1) {
    reducers[storeContext(storeKeys[i]).default.name] = storeContext(storeKeys[i]).default;
}

const childRoutes = [];
const routerContext = require.context('./router', false, /\.js$/);
const routerKeys = routerContext.keys().filter(item => item !== './index.js');
for (let i = 0; i < routerKeys.length; i += 1) {
    childRoutes.push(routerContext(routerKeys[i]).default);
}

const stores = createStore(
    combineReducers(Object.assign(reducers, {
        routing: routerReducer
    }))
);

const routes = {
    path: '/',
    childRoutes: [{
        component: Main,
        childRoutes: childRoutes
    }, {
        path: '/login',
        component: Login
    }]
};

const Routers = () =>
    <Provider store={stores}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>

ReactDOM.render(
    <Routers/>,
    document.getElementById('root')
);

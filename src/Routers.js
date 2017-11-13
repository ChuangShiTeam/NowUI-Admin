import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import dashboard from './store/dashboard';

import Index from './view/Index';
import DashboardIndex from './view/dashboard/Index';
import ProductIndex from './view/product/Index';
import ProductDetail from './view/product/Detail';
import Login from './view/Login';

import storage from './common/storage';

const store = createStore(
    combineReducers({
        dashboard,
        routing: routerReducer
    })
);

const handleEnter = function (nextState, replace) {
    if ((storage.getToken() === '' || storage.getToken() === null) && nextState.location.pathname !== '/login') {
        replace({ pathname: '/login' });
    }
};

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRedirect to="/product/index"/>
                <Route path="/login" component={Login}/>
                <Route component={Index} onEnter={handleEnter}>
                    <Route path="/dashboard/index" component={DashboardIndex}/>
                    <Route path="/product/index" component={ProductIndex}/>
                    <Route path="/product/detail" component={ProductDetail}/>
                </Route>
            </Route>
        </Router>
    </Provider>

export default Routers;

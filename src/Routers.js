import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import dashboard from './store/dashboard';
import app_config from './store/app_config';
import app_config_category from './store/app_config_category';

import Main from './view/Main';
import DashboardIndex from './view/dashboard/Index';
import ProductIndex from './view/product/Index';
import ProductDetail from './view/product/Detail';
import AppConfigIndex from './view/app_config/Index';
import AppConfigDetail from './view/app_config/Detail';
import AppConfigCategoryIndex from './view/app_config_category/Index';
import AppConfigCategoryDetail from './view/app_config_category/Detail';
import Login from './view/Login';

import storage from './common/storage';

const store = createStore(
    combineReducers({
        dashboard,
        app_config,
        app_config_category,
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
                <Route component={Main} onEnter={handleEnter}>
                    <Route path="/dashboard/index" component={DashboardIndex}/>
                    <Route path="/product/index" component={ProductIndex}/>
                    <Route path="/product/detail" component={ProductDetail}/>
                    <Route path="/app/config/index" component={AppConfigIndex}/>
                    <Route path="/app/config/detail" component={AppConfigDetail}/>
                    <Route path="/app/config/category/index" component={AppConfigCategoryIndex}/>
                    <Route path="/app/config/category/edit/:config_category_id" component={AppConfigCategoryDetail}/>
                    <Route path="/app/config/category/add" component={AppConfigCategoryDetail}/>
                </Route>
            </Route>
        </Router>
    </Provider>

export default Routers;

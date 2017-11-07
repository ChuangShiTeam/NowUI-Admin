import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import dashboard from './store/dashboard';

import Index from './view/Index';
import DashboardIndex from './view/dashboard/Index';
import DashboardDetail from './view/dashboard/Detail';

const store = createStore(
    combineReducers({
        dashboard,
        routing: routerReducer
    })
);

const handleEnter = function (next, replace, callback) {
    callback();
};

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" onEnter={handleEnter}>
                <IndexRedirect to="/dashboard/index"/>
                <Route path="/index" component={Index}>
                    <Route path="/dashboard/index" component={DashboardIndex}/>
                    <Route path="/dashboard/detail" component={DashboardDetail}/>
                </Route>
            </Route>
        </Router>
    </Provider>

export default Routers;

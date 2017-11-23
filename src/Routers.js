import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

// import dashboard from './store/dashboard';
// import app_config from './store/app_config';
// import app_config_category from './store/app_config_category';
// import product from './store/product';

const reducers = {};
const context = require.context('./store', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
for (let i = 0; i < keys.length; i += 1) {
    reducers[context(keys[i]).default.name] = context(keys[i]).default;
}

const store = createStore(
    combineReducers(Object.assign(reducers, {
        routing: routerReducer
    }))
);

// const store = createStore(
//     combineReducers({
//         dashboard,
//         app_config,
//         app_config_category,
//         product,
//         routing: routerReducer
//     })
// );

const handleEnter = function (next, replace, callback) {
    callback();
};

function handleLazyLoad(path, name) {
    return function (location, cb) {
        require.ensure([], (require) => {
            console.log(path);
            cb(null, require('' + path).default)
        }, 'm');
    }
};

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRedirect to="/product/index"/>
                <Route path="/login" getComponent={function (location, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('./view/Login').default)
                    }, 'login');
                }}/>
                <Route getComponent={handleLazyLoad('./view/Main', '')} onEnter={handleEnter}>
                    <Route path="/dashboard/index" getComponent={function (location, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./view/dashboard/Index').default)
                        }, 'dashboard.index');
                    }}/>
                    <Route path="/product/index" getComponent={function (location, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./view/product/Index').default)
                        }, 'product.index');
                    }}/>
                    <Route path="/product/detail" getComponent={function (location, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./view/product/Detail').default)
                        }, 'product.detail');
                    }}/>
                </Route>
            </Route>
        </Router>
    </Provider>

export default Routers;

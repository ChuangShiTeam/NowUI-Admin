import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import Login from './view/Login';
import Main from './view/Main';

import constant from './common/constant';
import entry from './common/entry';
import util from './common/util';

import 'ant-design-pro/dist/ant-design-pro.css';
import './css/style.css';

document.getElementById("loading").remove();

util.setTitle(constant.name + '总控后台');

const reducers = {};
if (constant.active === 'dev') {
	for (let i = 0; i < entry.webEntry.length; i++) {
		const context = entry.webEntry[i].store;
		const keys = context.keys();
		for (let j = 0; j < keys.length; j++) {
			reducers[context(keys[j]).default.name] = context(keys[j]).default;
		}
	}
} else {
	// const storeContext = require.context('./store', false, /\.js$/);
	// const storeKeys = storeContext.keys();
	// for (let i = 0; i < storeKeys.length; i++) {
	// 	reducers[storeContext(storeKeys[i]).default.name] = storeContext(storeKeys[i]).default;
	// }
}


const childRoutes = [];
if (constant.active === 'dev') {
	for (var i = 0; i < entry.webEntry.length; i++) {
		const context = entry.webEntry[i].router;
		const keys = context.keys();
		for (let j = 0; j < keys.length; j++) {
			childRoutes.push(context(keys[j]).default);
		}
	}
} else {
	// const routerContext = require.context('./router', false, /\.js$/);
	// const routerKeys = routerContext.keys();
	// for (let i = 0; i < routerKeys.length; i++) {
	// 	childRoutes.push(routerContext(routerKeys[i]).default);
	// }
}


const stores = createStore(
	combineReducers(Object.assign(reducers, {
		routing: routerReducer
	}))
);

const routes = {
	path: '/',
	indexRoute: {
		onEnter: function (next, replace, callback) {
			replace(null, constant.index);
			callback();
		}
	},
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

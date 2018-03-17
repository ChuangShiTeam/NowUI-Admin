import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import Login from './view/Login';
import Main from './view/Main';

import constant from './common/constant';
import util from './common/util';

import 'ant-design-pro/dist/ant-design-pro.css';
import './css/style.css';

document.getElementById("loading").remove();

util.setTitle(constant.name + '总控后台');

const reducers = {};
const storeContext = require.context('./store', false, /\.js$/);
const storeKeys = storeContext.keys();
for (let i = 0; i < storeKeys.length; i++) {
	reducers[storeContext(storeKeys[i]).default.name] = storeContext(storeKeys[i]).default;
}


const stores = createStore(
	combineReducers(Object.assign(reducers, {
		routing: routerReducer
	}))
);

const App = () =>
	<Provider store={stores}>
		<BrowserRouter>
			<Switch>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/" component={Main}></Route>
			</Switch>
		</BrowserRouter>
	</Provider>

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);

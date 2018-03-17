import React from 'react'
import {Route} from 'react-router-dom';

import MenuIndex from '../view/menu/Index';
import MenuDetail from '../view/menu/Detail';

export default [
	<Route key="MenuIndex" path="/menu/index" component={MenuIndex}/>,
	<Route key="MenuAdd" path="/menu/add" component={MenuDetail}/>,
	<Route key="MenuEditMenuId" path="/menu/edit/:menuId" component={MenuDetail}/>
]
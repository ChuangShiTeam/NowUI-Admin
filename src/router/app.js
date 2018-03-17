import React from 'react'
import {Route} from 'react-router-dom';

import AppIndex from '../view/app/Index';
import AppDetail from '../view/app/Detail';

export default [
	<Route key="AppIndex" path="/app/index" component={AppIndex}/>,
	<Route key="AppAdd" path="/app/add" component={AppDetail}/>,
	<Route key="AppEditAppId" path="/app/edit/:appId" component={AppDetail}/>
]
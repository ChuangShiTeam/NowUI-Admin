import React from 'react'
import {Route} from 'react-router-dom';

import NavigationIndex from '../view/navigation/Index';
import NavigationDetail from '../view/navigation/Detail';

export default [
	<Route key="NavigationIndex" path="/navigation/index" component={NavigationIndex}/>,
	<Route key="NavigationAdd" path="/navigation/add" component={NavigationDetail}/>,
	<Route key="NavigationEditNavigationId" path="/navigation/edit/:navigationId" component={NavigationDetail}/>
]
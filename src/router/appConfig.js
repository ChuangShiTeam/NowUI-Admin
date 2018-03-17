import React from 'react'
import {Route} from 'react-router-dom';

import AppConfigIndex from '../view/appConfig/Index';
import AppConfigDetail from '../view/appConfig/Detail';

export default [
	<Route key="AppConfigIndex" path="/app/config/index" component={AppConfigIndex}/>,
	<Route key="AppConfigAdd" path="/app/config/add" component={AppConfigDetail}/>,
	<Route key="AppConfigEditAppConfigId" path="/app/config/edit/:appConfigId" component={AppConfigDetail}/>
]
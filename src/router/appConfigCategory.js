import React from 'react'
import {Route} from 'react-router-dom';

import AppConfigCategoryIndex from '../view/appConfigCategory/Index';
import AppConfigCategoryDetail from '../view/appConfigCategory/Detail';

export default [
	<Route key="AppConfigCategoryIndex" path="/app/config/category/index" component={AppConfigCategoryIndex}/>,
	<Route key="AppConfigCategoryAdd" path="/app/config/category/add" component={AppConfigCategoryDetail}/>,
	<Route key="AppConfigCategoryEditAppConfigCategoryId" path="/app/config/category/edit/:appConfigCategoryId" component={AppConfigCategoryDetail}/>
]
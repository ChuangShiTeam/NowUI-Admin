import React from 'react'
import {Route} from 'react-router-dom';

import AdminIndex from '../view/admin/Index';
import AdminDetail from '../view/admin/Detail';

export default [
	<Route key="AdminIndex" path="/admin/index" component={AdminIndex}/>,
	<Route key="AdminAdd" path="/admin/add" component={AdminDetail}/>,
	<Route key="AdminEditAdminId" path="/admin/edit/:adminId" component={AdminDetail}/>
]
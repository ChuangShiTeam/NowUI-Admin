import React from 'react'
import {Route} from 'react-router-dom';

import RoleIndex from '../view/role/Index';
import RoleDetail from '../view/role/Detail';

export default [
	<Route key="RoleIndex" path="/role/index" component={RoleIndex}/>,
	<Route key="RoleAdd" path="/role/add" component={RoleDetail}/>,
	<Route key="RoleEditRoleId" path="/role/edit/:roleId" component={RoleDetail}/>
]
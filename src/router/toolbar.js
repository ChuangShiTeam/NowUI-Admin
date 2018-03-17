import React from 'react'
import {Route} from 'react-router-dom';

import ToolbarIndex from '../view/toolbar/Index';
import ToolbarDetail from '../view/toolbar/Detail';

export default [
	<Route key="ToolbarIndex" path="/toolbar/index" component={ToolbarIndex}/>,
	<Route key="ToolbarAdd" path="/toolbar/add" component={ToolbarDetail}/>,
	<Route key="ToolbarEditToolbarId" path="/toolbar/edit/:toolbarId" component={ToolbarDetail}/>
]
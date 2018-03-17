import React from 'react'
import {Route} from 'react-router-dom';

import CodeIndex from '../view/code/Index';
import CodeDetail from '../view/code/Detail';

export default [
	<Route key="CodeIndex" path="/code/index" component={CodeIndex}/>,
	<Route key="CodeEditTableSchemaTableName" path="/code/view/:tableSchema/:tableName" component={CodeDetail}/>
]
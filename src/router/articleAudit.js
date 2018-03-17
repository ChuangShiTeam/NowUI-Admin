import React from 'react'
import {Route} from 'react-router-dom';

import ArticleAuditIndex from '../view/articleAudit/Index';
import ArticleAuditDetail from '../view/articleAudit/Detail';

export default [
	<Route key="ArticleAuditIndex" path="/article/audit/index" component={ArticleAuditIndex}/>,
	<Route key="ArticleAuditAdd" path="/article/audit/add" component={ArticleAuditDetail}/>,
	<Route key="ArticleAuditEditArticleAuditId" path="/article/audit/edit/:articleAuditId" component={ArticleAuditDetail}/>
]
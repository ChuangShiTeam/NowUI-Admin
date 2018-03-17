import React from 'react'
import {Route} from 'react-router-dom';

import ForumAuditIndex from '../view/forumAudit/Index';
import ForumAuditDetail from '../view/forumAudit/Detail';

export default [
	<Route key="ForumAuditIndex" path="/forumAudit/index" component={ForumAuditIndex}/>,
	<Route key="ForumAuditAdd" path="/forumAudit/add" component={ForumAuditDetail}/>,
	<Route key="ForumAuditEditForumAuditId" path="/forumAudit/edit/:forumAuditId" component={ForumAuditDetail}/>
]
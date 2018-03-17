import React from 'react'
import {Route} from 'react-router-dom';

import ForumIndex from '../view/forum/Index';
import ForumDetail from '../view/forum/Detail';

export default [
	<Route key="ForumIndex" path="/forum/index" component={ForumIndex}/>,
	<Route key="ForumAdd" path="/forum/add" component={ForumDetail}/>,
	<Route key="ForumEditForumId" path="/forum/edit/:forumId" component={ForumDetail}/>
]
import React from 'react'
import {Route} from 'react-router-dom';

import ForumUserFollowIndex from '../view/forumUserFollow/Index';
import ForumUserFollowDetail from '../view/forumUserFollow/Detail';

export default [
	<Route key="ForumUserFollowIndex" path="/forumUser/follow/index" component={ForumUserFollowIndex}/>,
	<Route key="ForumUserFollowAdd" path="/forumUser/follow/add" component={ForumUserFollowDetail}/>,
	<Route key="ForumUserFollowEditForumUserFollowId" path="/forumUser/follow/edit/:forumUserFollowId" component={ForumUserFollowDetail}/>
]
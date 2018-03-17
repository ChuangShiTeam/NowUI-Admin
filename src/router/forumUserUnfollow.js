import React from 'react'
import {Route} from 'react-router-dom';

import ForumUserUnfollowIndex from '../view/forumUserUnfollow/Index';
import ForumUserUnfollowDetail from '../view/forumUserUnfollow/Detail';

export default [
	<Route key="ForumUserUnfollowIndex" path="/forumUser/unfollow/index" component={ForumUserUnfollowIndex}/>,
	<Route key="ForumUserUnfollowAdd" path="/forumUser/unfollow/add" component={ForumUserUnfollowDetail}/>,
	<Route key="ForumUserUnfollowEditForumUserUnfollowId" path="/forumUser/unfollow/edit/:forumUserUnfollowId" component={ForumUserUnfollowDetail}/>
]
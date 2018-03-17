import React from 'react'
import {Route} from 'react-router-dom';

import TopicForumIndex from '../view/topicForum/Index';
import TopicForumDetail from '../view/topicForum/Detail';

export default [
	<Route key="TopicForumIndex" path="/topic/forum/index" component={TopicForumIndex}/>,
	<Route key="TopicForumAdd" path="/topic/forum/add" component={TopicForumDetail}/>,
	<Route key="TopicForumEditTopicForumId" path="/topicForum/edit/:topicForumId" component={TopicForumDetail}/>
]
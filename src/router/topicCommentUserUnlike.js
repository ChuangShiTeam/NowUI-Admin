import React from 'react'
import {Route} from 'react-router-dom';

import TopicCommentUserUnlikeIndex from '../view/topicCommentUserUnlike/Index';
import TopicCommentUserUnlikeDetail from '../view/topicCommentUserUnlike/Detail';

export default [
	<Route key="TopicCommentUserUnlikeIndex" path="/topic/comment/user/unlike/index" component={TopicCommentUserUnlikeIndex}/>,
	<Route key="TopicCommentUserUnlikeAdd" path="/topic/comment/user/unlike/add" component={TopicCommentUserUnlikeDetail}/>,
	<Route key="TopicCommentUserUnlikeEditTopicCommentUserUnlikeId" path="/topic/comment/user/unlike/edit/:topicCommentUserUnlikeId" component={TopicCommentUserUnlikeDetail}/>
]
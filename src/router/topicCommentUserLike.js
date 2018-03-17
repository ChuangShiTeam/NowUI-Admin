import React from 'react'
import {Route} from 'react-router-dom';

import TopicCommentUserLikeIndex from '../view/topicCommentUserLike/Index';
import TopicCommentUserLikeDetail from '../view/topicCommentUserLike/Detail';

export default [
	<Route key="TopicCommentUserLikeIndex" path="/view/topic/commentu/user/like/index" component={TopicCommentUserLikeIndex}/>,
	<Route key="TopicCommentUserLikeAdd" path="/view/topic/commentu/user/like/add" component={TopicCommentUserLikeDetail}/>,
	<Route key="TopicCommentUserLikeEditTopicCommentUserLikeId" path="/view/topic/commentu/user/like/edit/:topicCommentUserLikeId" component={TopicCommentUserLikeDetail}/>
]
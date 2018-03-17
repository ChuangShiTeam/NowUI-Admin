import React from 'react'
import {Route} from 'react-router-dom';

import ForumCategoryIndex from '../view/forumCategory/Index';
import ForumCategoryDetail from '../view/forumCategory/Detail';

export default [
	<Route key="ForumCategoryIndex" path="/forum/category/index" component={ForumCategoryIndex}/>,
	<Route key="ForumCategoryAdd" path="/forum/category/add" component={ForumCategoryDetail}/>,
	<Route key="ForumCategoryEditForumCategoryId" path="/forum/category/edit/:forumCategoryId" component={ForumCategoryDetail}/>
]
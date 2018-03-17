import React from 'react'
import {Route} from 'react-router-dom';

import ArticleIndex from '../view/article/Index';
import ArticleDetail from '../view/article/Detail';

export default [
	<Route key="ArticleIndex" path="/article/index" component={ArticleIndex}/>,
	<Route key="ArticleAdd" path="/article/add" component={ArticleDetail}/>,
	<Route key="ArticleEditArticleId" path="/article/edit/:articleId" component={ArticleDetail}/>
]
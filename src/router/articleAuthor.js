import React from 'react'
import {Route} from 'react-router-dom';

import ArticleAuthorIndex from '../view/articleAuthor/Index';
import ArticleAuthorDetail from '../view/articleAuthor/Detail';

export default [
	<Route key="ArticleAuthorIndex" path="/article/author/index" component={ArticleAuthorIndex}/>,
	<Route key="ArticleAuthorAdd" path="/article/author/add" component={ArticleAuthorDetail}/>,
	<Route key="ArticleAuthorEditArticleAuthorId" path="/article/author/edit/:articleAuthorId" component={ArticleAuthorDetail}/>
]
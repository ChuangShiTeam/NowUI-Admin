import React from 'react'
import {Route} from 'react-router-dom';

import ArticleCategoryIndex from '../view/articleCategory/Index';
import ArticleCategoryDetail from '../view/articleCategory/Detail';

export default [
	<Route key="ArticleCategoryIndex" path="/article/category/index" component={ArticleCategoryIndex}/>,
	<Route key="ArticleCategoryAdd" path="/article/category/add" component={ArticleCategoryDetail}/>,
	<Route key="ArticleCategoryEditArticleCategoryId" path="/article/category/edit/:articleCategoryId" component={ArticleCategoryDetail}/>
]

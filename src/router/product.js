import React from 'react'
import {Route} from 'react-router-dom';

import ProductIndex from '../view/product/Index';
import ProductDetail from '../view/product/Detail';

export default [
	<Route key="ProductIndex" path="/product/index" component={ProductIndex}/>,
	<Route key="ProductAdd" path="/product/add" component={ProductDetail}/>,
	<Route key="ProductEditProductId" path="/product/edit/:productId" component={ProductDetail}/>
]
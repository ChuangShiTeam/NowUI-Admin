import React from 'react'
import {Route} from 'react-router-dom';

import CourseOrderIndex from '../view/courseOrder/Index';
import CourseOrderDetail from '../view/courseOrder/Detail';

export default [
	<Route key="CourseOrderIndex" path="/course/order/index" component={CourseOrderIndex}/>,
	<Route key="CourseOrderAdd" path="/course/order/add" component={CourseOrderDetail}/>,
	<Route key="CourseOrderEditCourseOrderId" path="/course/order/edit/:courseOrderId" component={CourseOrderDetail}/>
]

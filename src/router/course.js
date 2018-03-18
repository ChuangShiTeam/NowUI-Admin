import React from 'react'
import {Route} from 'react-router-dom';

import CourseIndex from '../view/course/Index';
import CourseDetail from '../view/course/Detail';

export default [
	<Route key="CourseIndex" path="/course/index" component={CourseIndex}/>,
	<Route key="CourseAdd" path="/course/add" component={CourseDetail}/>,
	<Route key="CourseEditCourseId" path="/course/edit/:courseId" component={CourseDetail}/>
]

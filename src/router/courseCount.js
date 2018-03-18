import React from 'react'
import {Route} from 'react-router-dom';

import CourseCountIndex from '../view/courseCount/Index';
import CourseCountDetail from '../view/courseCount/Detail';

export default [
	<Route key="CourseCountIndex" path="/course/count/index" component={CourseCountIndex}/>,
	<Route key="CourseCountAdd" path="/course/count/add" component={CourseCountDetail}/>,
	<Route key="CourseCountEditCourseCountId" path="/course/count/edit/:courseCountId" component={CourseCountDetail}/>
]

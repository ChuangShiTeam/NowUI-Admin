import React from 'react'
import {Route} from 'react-router-dom';

import CourseVideoIndex from '../view/courseVideo/Index';
import CourseVideoDetail from '../view/courseVideo/Detail';

export default [
	<Route key="CourseVideoIndex" path="/course/video/index" component={CourseVideoIndex}/>,
	<Route key="CourseVideoAdd" path="/course/video/add" component={CourseVideoDetail}/>,
	<Route key="CourseVideoEditCourseVideoId" path="/course/video/edit/:courseVideoId" component={CourseVideoDetail}/>
]

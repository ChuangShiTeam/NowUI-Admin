import React from 'react'
import {Route} from 'react-router-dom';

import PetCategoryIndex from '../view/petCategory/Index';
import PetCategoryDetail from '../view/petCategory/Detail';

export default [
	<Route key="PetCategoryIndex" path="/pet/category/index" component={PetCategoryIndex}/>,
	<Route key="PetCategoryAdd" path="/pet/category/add" component={PetCategoryDetail}/>,
	<Route key="PetCategoryEditPetCategoryId" path="/pet/category/edit/:petCategoryId" component={PetCategoryDetail}/>
]
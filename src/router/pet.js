import React from 'react'
import {Route} from 'react-router-dom';

import PetIndex from '../view/pet/Index';
import PetDetail from '../view/pet/Detail';

export default [
	<Route key="PetIndex" path="/pet/index" component={PetIndex}/>,
	<Route key="PetAdd" path="/pet/add" component={PetDetail}/>,
	<Route key="PetEditPetId" path="/pet/edit/:petId" component={PetDetail}/>
]
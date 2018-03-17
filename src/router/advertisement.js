import React from 'react'
import {Route} from 'react-router-dom';

import AdvertisementIndex from '../view/advertisement/Index';
import AdvertisementDetail from '../view/advertisement/Detail';

export default [
	<Route key="AdvertisementIndex" path="/advertisement/index" component={AdvertisementIndex}/>,
	<Route key="AdvertisementAdd" path="/advertisement/add" component={AdvertisementDetail}/>,
	<Route key="AdvertisementEditAdvertisementId" path="/advertisement/edit/:advertisementId" component={AdvertisementDetail}/>
]
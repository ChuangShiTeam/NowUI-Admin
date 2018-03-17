import React from 'react'
import {Route} from 'react-router-dom';

import MemberDeliveryAddressIndex from '../view/memberDeliveryAddress/Index';
import NemberDeliveryAddressDetail from '../view/memberDeliveryAddress/Detail';

export default [
	<Route key="MemberDeliveryAddressIndex" path="/member/delivery/address/index" component={MemberDeliveryAddressIndex}/>,
	<Route key="NemberDeliveryAddressAdd" path="/member/delivery/address/add" component={NemberDeliveryAddressDetail}/>,
	<Route key="NemberDeliveryAddressEditNemberDeliveryAddressId" path="/member/delivery/address/edit/:memberDeliveryAddressId" component={NemberDeliveryAddressDetail}/>
]
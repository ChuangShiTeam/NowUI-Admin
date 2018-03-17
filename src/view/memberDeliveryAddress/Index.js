import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'memberDeliveryAddress',
        type: 'TABLE',
        title: '会员收货地址',
        primaryKey: 'memberDeliveryAddressId',
        store: state.memberDeliveryAddress,
        listUrl: '/member/delivery/address/admin/v1/list',
        breadcrumbList: [{
            name: '会员收货地址管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }],
		secondButtonList: [{
			name: '新增',
			icon: 'plus-circle',
			type: 'ADD',
			pathname: '/member/delivery/address/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/member/delivery/address/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'memberDeliveryAddressName',
            name: '姓名',
            type: 'VARCHAR'
            }, {
            id: 'memberDeliveryAddressPhone',
            name: '手机号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'memberDeliveryAddressName',
            name: '姓名'
        }, {
            id: 'memberDeliveryAddressPhone',
            name: '手机号'
        }, {
            id: 'memberDeliveryAddressProvince',
            name: '省'
        }, {
            id: 'memberDeliveryAddressCity',
            name: '市'
        }, {
            id: 'memberDeliveryAddressArea',
            name: '区'
        }, {
            id: 'memberDeliveryAddressAddress',
            name: '详细地址'
        }, {
            id: 'memberDeliveryAddressPostcode',
            name: '邮政编码'
        }, {
            id: 'memberDeliveryAddressIsDefault',
            name: '是否默认收货地址'
        }]
    }
})(NIndex);

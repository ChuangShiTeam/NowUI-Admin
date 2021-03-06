import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'product',
        type: 'TABLE',
        title: '商品信息',
        primaryKey: 'productId',
        store: state.product,
        listUrl: '/product/admin/v1/list',
        breadcrumbList: [{
            name: '商品管理',
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
			addUrl: '/product/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/product/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'productName',
            name: '商品名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'productName',
            name: '商品名称',
            editUrl: '/product/edit/:productId'
        }]
    }
})(NIndex);

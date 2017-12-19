import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        type: 'TABLE',
        name: 'product',
        title: '商品信息',
        primaryKey: 'productId',
        store: state.product,
        listUrl: '/product/admin/list',
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
        }, {
            name: '新增',
            icon: 'plus-circle',
            type: 'ADD'
        }],
        searchList: [{
            id: 'productName',
            name: '商品名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'productName',
            name: '商品名称'
        }]
    }
})(NIndex);

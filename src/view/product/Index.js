import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'product',
        type: 'TABLE',
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
            type: 'ADD',
            addUrl: '/product/add'
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

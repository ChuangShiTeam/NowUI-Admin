import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        type: 'TABLE',
        name: 'product',
        primaryKey: 'productId',
        store: state.product,
        listUrl: '/product/admin/list',
        buttonList: [{
            name: '新增',
            icon: 'plus-circle',
            type: 'ADD'
        }, {
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
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

import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        name: 'product',
        title: '商品表单',
        primaryKey: 'productId',
        store: state.product,
        breadcrumbList: [{
            name: '商品管理',
            url: '/product/index'
        }, {
            name: '商品信息',
            url: ''
        }],
        buttonList: [{
            name: '返回',
            icon: 'left-circle',
            type: 'BACK',
            isPrimary: true
        }],
        secondButtonList: [{
            name: '删除',
            icon: 'delete',
            type: 'DELETE',
            isPrimary: true
        }],
        columnList: [{
            id: 'productName',
            name: '商品名称',
            required: true
        }]
    }
})(NDetail);

import React from 'react';
import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleUserPurchase',
        baseUrl: '/article/user/purchase/admin/v1',
        title: '用户文章购买表单',
        primaryKey: 'articleUserPurchaseId',
        store: state.articleUserPurchase,
        breadcrumbList: [{
            name: '用户文章购买管理',
            url: '/article/user/purchase/index'
        }, {
            name: '用户文章购买信息',
            url: ''
        }],
        buttonList: [{
            name: '返回',
            icon: 'left-circle',
            type: 'BACK',
            isPrimary: false
        }],
        secondButtonList: [{
            name: '删除',
            icon: 'delete',
            type: 'DELETE'
        }],
        columnList: [{
            id: 'userId',
            name: '用户ID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'payId',
            name: '支付ID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleId',
            name: '内容ID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articlePrice',
            name: '内容价格',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

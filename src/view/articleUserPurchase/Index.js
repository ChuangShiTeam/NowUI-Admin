import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleUserPurchase',
        type: 'TABLE',
        title: '用户文章购买',
        primaryKey: 'articleUserPurchaseId',
        store: state.articleUserPurchase,
        listUrl: '/article/user/purchase/admin/v1/list',
        breadcrumbList: [{
            name: '用户文章购买管理',
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
            addUrl: '/article/user/purchase/add'
        }],
        searchList: [{
            id: 'userId',
            name: '用户ID',
            type: 'VARCHAR'
            }, {
            id: 'articleId',
            name: '内容ID',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userId',
            name: '用户ID'
        }, {
            id: 'payId',
            name: '支付ID'
        }, {
            id: 'articleId',
            name: '内容ID'
        }, {
            id: 'articlePrice',
            name: '内容价格'
        }]
    }
})(NIndex);

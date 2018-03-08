import React from 'react';
import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articlePrice',
        baseUrl: '/article/price/admin/v1',
        title: '文章价格表单',
        primaryKey: 'articlePriceId',
        store: state.articlePrice,
        breadcrumbList: [{
            name: '文章价格管理',
            url: '/article/price/index'
        }, {
            name: '文章价格信息',
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
            id: 'articleId',
            name: '课程ID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articeIsFree',
            name: '是否免费',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articlePrice',
            name: '内容付费价格',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articlePrice',
        type: 'TABLE',
        title: '文章价格',
        primaryKey: 'articlePriceId',
        store: state.articlePrice,
        listUrl: '/article/price/admin/v1/list',
        breadcrumbList: [{
            name: '文章价格管理',
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
            addUrl: '/article/price/add'
        }],
        searchList: [{
            id: 'articleId',
            name: '课程ID',
            type: 'VARCHAR'
            }, {
            id: 'articeIsFree',
            name: '是否免费',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleId',
            name: '课程ID'
        }, {
            id: 'articeIsFree',
            name: '是否免费'
        }, {
            id: 'articlePrice',
            name: '内容付费价格'
        }]
    }
})(NIndex);

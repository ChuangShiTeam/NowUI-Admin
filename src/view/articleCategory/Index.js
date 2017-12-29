import React, {Component} from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleCategory',
        type: 'TREE_TABLE',
        title: '文章分类信息',
        primaryKey: 'articleCategoryId',
        store: state.articleCategory,
        listUrl: '/article/category/admin/list',
        breadcrumbList: [{
            name: '文章分类管理',
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
            addUrl: '/article/category/add'
        }],
        searchList: [{
            id: 'articleCategoryName',
            name: '名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleCategoryName',
            name: '名称',
            editUrl: '/article/category/edit/:articleCategoryId'
        }, {
            id: 'articleCategorySort',
            name: '排序'
        }, {
            id: 'articleCategoryId',
            name: '操作',
            render: function(text, record, index, self) {
                return (<span>
                    <a onClick={self.handleAdd.bind(self, '/article/category/add/' + record.articleCategoryId)}>添加</a>
                </span>)
            }
        }]
    }
})(NIndex);

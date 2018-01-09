import React, {Component} from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';
import constant from "../../common/constant";

export default connect(function (state) {
    return {
        id: 'menu',
        type: 'TREE_TABLE',
        title: '菜单',
        primaryKey: 'menuId',
        store: state.menu,
        listUrl: '/menu/admin/v1/list',
        breadcrumbList: [{
            name: '菜单管理',
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
            addUrl: '/menu/add'
        }],
        searchList: [{
            id: 'menuName',
            name: '名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'menuName',
            name: '名称',
            editUrl: '/menu/edit/:menuId'
        }, {
            id: 'menuUrl',
            name: '地址',
        }, {
            id: 'menuSort',
            name: '排序'
        }, {
            id: 'menuId',
            name: '操作',
            render: function(text, record, index, self) {
                return (<span>
                    <a onClick={self.handleAdd.bind(self, '/menu/add/' + record.menuId)}>添加</a>
                </span>)
            }
        }]
    }
})(NIndex);

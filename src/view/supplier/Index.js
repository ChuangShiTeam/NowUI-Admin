import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'supplier',
        type: 'TABLE',
        title: '供应商基本信息',
        primaryKey: 'supplierId',
        store: state.supplier,
        listUrl: '/supplier/admin/v1/list',
        breadcrumbList: [{
            name: '供应商基本信息管理',
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
            addUrl: '/supplier/add'
        }],
        searchList: [{
            id: 'supplierName',
            name: '供应商名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'supplierName',
            name: '供应商名称'
        }, {
            id: 'supplierContact',
            name: '联系人'
        }, {
            id: 'supplierPhone',
            name: '手机号码'
        }, {
            id: 'supplierCompany',
            name: '公司名称'
        }]
    }
})(NIndex);

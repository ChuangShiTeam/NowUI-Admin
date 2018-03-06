import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'purchaseOrder',
        type: 'TABLE',
        title: '采购申请单',
        primaryKey: 'purchaseId',
        store: state.purchaseOrder,
        listUrl: '/purchase/order/admin/v1/list',
        breadcrumbList: [{
            name: '采购申请单管理',
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
            addUrl: '/purchase/order/add'
        }],
        searchList: [{
            id: 'purchaseNo',
            name: '采购单号',
            type: 'VARCHAR'
            }, {
            id: 'purchaseName',
            name: '采购单名称',
            type: 'VARCHAR'
            }, {
            id: 'purchaseType',
            name: '采购类型;',
            type: 'VARCHAR'
            }, {
            id: 'purchaseUserName',
            name: '采购员姓名',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'purchaseNo',
            name: '采购单号'
        }, {
            id: 'purchaseName',
            name: '采购单名称'
        }, {
            id: 'purchaseType',
            name: '采购类型;'
        }, {
            id: 'purchaseUserName',
            name: '采购员姓名'
        }, {
            id: 'purchaseOrderDate',
            name: '订货日期'
        }, {
            id: 'purchaseTotalCost',
            name: '采购总金额'
        }, {
            id: 'purchaseStatus',
            name: '采购状态'
        }, {
            id: 'purchaseAuditUserName',
            name: '审核人姓名'
        }, {
            id: 'purchaseAuditTime',
            name: '审核时间'
        }]
    }
})(NIndex);

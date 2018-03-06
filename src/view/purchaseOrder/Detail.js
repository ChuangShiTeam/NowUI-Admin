import React from 'react';
import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'purchaseOrder',
        baseUrl: '/purchase/order/admin/v1',
        title: '采购申请单表单',
        primaryKey: 'purchaseId',
        store: state.purchaseOrder,
        breadcrumbList: [{
            name: '采购申请单管理',
            url: '/purchase/order/index'
        }, {
            name: '采购申请单信息',
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
            id: 'purchaseNo',
            name: '采购单号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseName',
            name: '采购单名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseType',
            name: '采购类型;',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseUserId',
            name: '采购员Id',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseUserName',
            name: '采购员姓名',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseSupplierId',
            name: '品牌供应商Id',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'warehouseId',
            name: '仓库id',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseOrderDate',
            name: '订货日期',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseTotalCost',
            name: '采购总金额',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseStatus',
            name: '采购状态',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseRemark',
            name: '采购备注',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseAuditUserId',
            name: '审核人',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseAuditUserName',
            name: '审核人姓名',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'purchaseAuditTime',
            name: '审核时间',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

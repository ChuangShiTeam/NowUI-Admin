import React from 'react';
import {connect} from 'react-redux';
import NDetail from '../../layout/NDetail';
import { Cascader } from 'antd';

export default connect(function (state) {
    return {
        id: 'supplier',
        baseUrl: '/supplier/admin/v1',
        title: '供应商基本信息表单',
        primaryKey: 'supplierId',
        store: state.supplier,
        breadcrumbList: [{
            name: '供应商基本信息管理',
            url: '/supplier/index'
        }, {
            name: '供应商基本信息信息',
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
            id: 'supplierName',
            name: '供应商名称',
            type: 'VARCHAR',
            required: true
        },  {
            id: 'supplierSrcFileId',
            mediaPathKey: 'supplierSrcFilePath',
            name: '供应商图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image'],
            required: true
        }, {
            id: 'supplierContact',
            name: '联系人',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'supplierPhone',
            name: '手机号码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'supplierTel',
            name: '电话',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'supplierCompany',
            name: '公司名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'supplierEmail',
            name: '电子邮箱',
            type: 'VARCHAR',
            required: false
        }, {
            id: 'supplierQQ',
            name: 'QQ号码',
            type: 'VARCHAR',
            required: false
        }, {
            id: 'supplierWeiXin',
            name: 'WeiXin',
            type: 'VARCHAR',
            required: false
        },
            {
                id: 'supplierProvinceCityArea',
                name: '供应商所属省',
                type: 'CASCADER',
                required: true
            },
        //     {
        //     id: 'supplierProvince',
        //     name: '供应商所属省份',
        //     type: 'VARCHAR',
        //     required: true
        // }, {
        //     id: 'supplierCity',
        //     name: '供应商所属市',
        //     type: 'VARCHAR',
        //     required: true
        // }, {
        //     id: 'supplierArea',
        //     name: '供应商所属',
        //     type: 'VARCHAR',
        //     required: true
        // },
            {
            id: 'supplierAddress',
            name: '详细地址',
            type: 'VARCHAR',
            required: false
        }, {
            id: 'supplierZipCode',
            name: '邮政编码',
            type: 'VARCHAR',
            required: false
        }, {
            id: 'supplierLongitude',
            name: '经度',
            type: 'VARCHAR',
            required: false
        }, {
            id: 'supplierLatitude',
            name: '纬度',
            type: 'VARCHAR',
            required: false
        }]
    }
})(NDetail);

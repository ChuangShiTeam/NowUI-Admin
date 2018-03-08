import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

import {Switch} from 'antd';

export default connect(function (state) {
    return {
        id: 'patient',
        type: 'TABLE',
        title: '患者',
        primaryKey: 'patientId',
        store: state.patient,
        listUrl: '/patient/admin/v1/list',
        breadcrumbList: [{
            name: '患者管理',
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
            addUrl: '/patient/add'
        }],
        searchList: [{
            id: 'patientPhone',
            name: '手机号码',
            type: 'VARCHAR'
        }, {
            id: 'patientNickname',
            name: '昵称',
            type: 'VARCHAR'
        }, {
            id: 'patientProvince',
            name: '所在省',
            type: 'VARCHAR'
        }, {
            id: 'patientCity',
            name: '所在市',
            type: 'VARCHAR'
        }, {
            id: 'patientArea',
            name: '所在区',
            type: 'VARCHAR'
        }, {
            id: 'patientSource',
            name: '来源入口',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'patientPhone',
            name: '手机号码',
            editUrl: '/patient/edit/:patientId'
        }, {
            id: 'patientImageId',
            name: '头像'
        }, {
            id: 'patientNickname',
            name: '昵称'
        }, {
            id: 'patientSex',
            name: '性别'
        }, {
            id: 'patientBirthDate',
            name: '出生日期'
        }, {
            id: 'patientProvince',
            name: '所在省'
        }, {
            id: 'patientCity',
            name: '所在市'
        }, {
            id: 'patientArea',
            name: '所在区'
        }, {
            id: 'patientAddress',
            name: '详细地址'
        }, {
            id: 'patientInvitationCode',
            name: '邀请码'
        }, {
            id: 'patientIsLock',
            name: '是否锁定',
            render: function (text, record, index, self) {
                return (
                    record.patientIsLock ?
                        <Switch defaultChecked />
                        :
                        <Switch />
                );
            }
        }, {
            id: 'patientSource',
            name: '来源入口'
        }]
    }
})(NIndex);

import React from 'react';
import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'patient',
        baseUrl: '/patient/admin/v1',
        title: '患者表单',
        primaryKey: 'patientId',
        store: state.patient,
        breadcrumbList: [{
            name: '患者管理',
            url: '/patient/index'
        }, {
            name: '患者信息',
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
            id: 'userId',
            name: '用户ID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberId',
            name: '会员ID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientPhone',
            name: '手机号码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientImageId',
            name: '头像',
            // type: 'VARCHAR',
            // required: true
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }, {
            id: 'patientNickname',
            name: '昵称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientSex',
            name: '性别',
            type: 'SELECT',
            select: {
                staticOptionList: [
                    {
                        key: '1',
                        value: '男'
                    }, {
                        key: '2',
                        value: '女'
                    }
                ]
            },
            required: true
        }, {
            id: 'patientProvince',
            name: '所在省',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientCity',
            name: '所在市',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientArea',
            name: '所在区',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientAddress',
            name: '详细地址',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientInvitationCode',
            name: '邀请码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'patientIsLock',
            name: '是否锁定',
            type: 'BOOLEAN',
            checkedChildren: '是',
            unCheckedChildren: '否'
        }, {
            id: 'patientSource',
            name: '来源入口',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

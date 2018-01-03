import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'user',
        baseUrl: '/user',
        title: '用户表单',
        primaryKey: 'userId',
        store: state.user,
        breadcrumbList: [{
            name: '用户管理',
            url: '/user/index'
        }, {
            name: '用户信息',
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
            id: 'objectId',
            name: '用户主体编号（会员、管理员、员工等编号）',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userType',
            name: '类型',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userAccount',
            name: '账号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userPassword',
            name: '密码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userNickName',
            name: '昵称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userName',
            name: '姓名',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userMobile',
            name: '手机号码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userEmail',
            name: '邮箱',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userAvatar',
            name: '头像',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image'],
            ref: 'navigationImage'
        }, {
            id: 'weixinOpenId',
            name: '微信openID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'weixinUnionId',
            name: '微信unionID',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

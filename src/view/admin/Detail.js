import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'admin',
        baseUrl: '/admin',
        title: '管理员表单',
        primaryKey: 'adminId',
        submitKey: ['userId'],
        store: state.admin,
        breadcrumbList: [{
            name: '管理员管理',
            url: '/admin/index'
        }, {
            name: '管理员信息',
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
            id: 'userNickName',
            name: '昵称',
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
            id: 'userName',
            name: '姓名',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userMobile',
            name: '手机号码',
            type: 'VARCHAR'
        }, {
            id: 'userEmail',
            name: '邮箱',
            type: 'VARCHAR'
        }, {
            id: 'userAvatar',
            name: '头像',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }]
    }
})(NDetail);

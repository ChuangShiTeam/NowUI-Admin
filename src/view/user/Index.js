import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'user',
        type: 'TABLE',
        title: '用户',
        primaryKey: 'userId',
        store: state.user,
        listUrl: '/user/admin/list',
        breadcrumbList: [{
            name: '用户管理',
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
            pathname: '/user/add'
        }],
        searchList: [{
            id: 'userType',
            name: '类型',
            type: 'VARCHAR'
            }, {
            id: 'userAccount',
            name: '账号',
            type: 'VARCHAR'
            }, {
            id: 'userName',
            name: '姓名',
            type: 'VARCHAR'
            }, {
            id: 'userMobile',
            name: '手机号码',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userType',
            name: '类型'
        }, {
            id: 'userAccount',
            name: '账号'
        }, {
            id: 'userNickName',
            name: '昵称'
        }, {
            id: 'userName',
            name: '姓名'
        }, {
            id: 'userMobile',
            name: '手机号码'
        }, {
            id: 'userEmail',
            name: '邮箱'
        }, {
            id: 'userAvatar',
            name: '头像'
        }]
    }
})(NIndex);

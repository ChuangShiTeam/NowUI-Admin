import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'userRole',
        type: 'TABLE',
        title: '用户角色',
        primaryKey: 'userRoleId',
        store: state.userRole,
        listUrl: '/user/role/admin/list',
        breadcrumbList: [{
            name: '用户角色管理',
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
            pathname: '/userRole/add'
        }],
        searchList: [{
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
            }, {
            id: 'roleId',
            name: '角色编号',
            type: 'VARCHAR'
            }, {
            id: 'userType',
            name: '用户类型',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userId',
            name: '用户编号'
        }, {
            id: 'roleId',
            name: '角色编号'
        }, {
            id: 'userType',
            name: '用户类型'
        }]
    }
})(NIndex);

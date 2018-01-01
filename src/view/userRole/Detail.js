import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'userRole',
        title: '用户角色表单',
        primaryKey: 'userRoleId',
        store: state.userRole,
        breadcrumbList: [{
            name: '用户角色管理',
            url: '/user/role/index'
        }, {
            name: '用户角色信息',
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
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'roleId',
            name: '角色编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userType',
            name: '用户类型',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

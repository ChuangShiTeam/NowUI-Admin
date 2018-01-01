import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'roleMenu',
        title: '角色菜单表单',
        primaryKey: 'roleMenuId',
        store: state.roleMenu,
        breadcrumbList: [{
            name: '角色菜单管理',
            url: '/role/menu/index'
        }, {
            name: '角色菜单信息',
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
            id: 'roleId',
            name: '角色编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'menuId',
            name: '菜单编号',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

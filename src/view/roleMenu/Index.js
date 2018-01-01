import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'roleMenu',
        type: 'TABLE',
        title: '角色菜单',
        primaryKey: 'roleMenuId',
        store: state.roleMenu,
        listUrl: '/role/menu/admin/list',
        breadcrumbList: [{
            name: '角色菜单管理',
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
            pathname: '/roleMenu/add'
        }],
        searchList: [{
            id: 'roleId',
            name: '角色编号',
            type: 'VARCHAR'
            }, {
            id: 'menuId',
            name: '菜单编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'roleId',
            name: '角色编号'
        }, {
            id: 'menuId',
            name: '菜单编号'
        }]
    }
})(NIndex);

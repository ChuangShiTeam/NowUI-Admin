import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'role',
        type: 'TABLE',
        title: '角色',
        primaryKey: 'roleId',
        store: state.role,
        listUrl: '/role/admin/v1/list',
        breadcrumbList: [{
            name: '角色管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }],
		secondButtonList: [{
			name: '新增',
			icon: 'plus-circle',
			type: 'ADD',
			addUrl: '/role/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/role/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'roleName',
            name: '名称',
            type: 'VARCHAR',
            }, {
            id: 'roleCode',
            name: '编码',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'roleName',
            name: '名称',
            editUrl: '/role/edit/:roleId'
        }, {
            id: 'roleCode',
            name: '编码'
        }, {
            id: 'roleSort',
            name: '排序'
        }]
    }
})(NIndex);

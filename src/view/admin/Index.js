import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'admin',
        type: 'TABLE',
        title: '管理员',
        primaryKey: 'adminId',
        store: state.admin,
        listUrl: '/admin/admin/list',
        breadcrumbList: [{
            name: '管理员管理',
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
            addUrl: '/admin/add'
        }],
        searchList: [{
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userId',
            name: '用户编号'
        }]
    }
})(NIndex);

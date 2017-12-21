import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        type: 'TABLE',
        name: 'app',
        title: '应用信息',
        primaryKey: 'appId',
        store: state.app,
        listUrl: '/app/admin/list',
        breadcrumbList: [{
            name: '应用管理',
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
            pathname: '/app/add'
        }],
        searchList: [{
            id: 'appName',
            name: '应用名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'appName',
            name: '应用名称',
            editUrl: '/app/edit'
        }]
    }
})(NIndex);

import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'app',
        type: 'TABLE',
        title: '应用信息',
        primaryKey: 'appId',
        store: state.app,
        listUrl: '/app/admin/v1/list',
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
        }],
		secondButtonList: [{
			name: '新增',
			icon: 'plus-circle',
			type: 'ADD',
			addUrl: '/app/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/app/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'appName',
            name: '应用名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'appName',
            name: '应用名称',
            editUrl: '/app/edit/:appId'
        }]
    }
})(NIndex);

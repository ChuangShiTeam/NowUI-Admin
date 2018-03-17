import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'message',
        type: 'TABLE',
        title: '消息',
        primaryKey: 'messageId',
        store: state.message,
        listUrl: '/message/admin/v1/list',
        breadcrumbList: [{
            name: '消息管理',
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
			addUrl: '/message/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/message/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'messageTitle',
            name: '标题',
            type: 'VARCHAR'
            }, {
            id: 'messageType',
            name: '类型',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'messageTitle',
            name: '标题'
        }, {
            id: 'messageType',
            name: '类型'
        }]
    }
})(NIndex);

import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'forumAudit',
        type: 'TABLE',
        title: '论坛审核信息',
        primaryKey: 'forumAuditId',
        store: state.forumAudit,
        listUrl: '/forum/audit/admin/list',
        breadcrumbList: [{
            name: '论坛审核信息管理',
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
			addUrl: '/forum/audit/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/forum/audit/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'forumAuditStatus',
            name: '审核状态',
            type: 'VARCHAR'
            }, {
            id: 'auditSuggestContent',
            name: '审核内容',
            type: 'VARCHAR'
            }, {
            id: 'forumId',
            name: '论坛id',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'forumAuditStatus',
            name: '审核状态'
        }, {
            id: 'auditSuggestContent',
            name: '审核内容'
        }, {
            id: 'forumId',
            name: '论坛id'
        }]
    }
})(NIndex);

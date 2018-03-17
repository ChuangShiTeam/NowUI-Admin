import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleAudit',
        type: 'TABLE',
        title: '文章审核',
        primaryKey: 'articleAuditId',
        store: state.articleAudit,
        listUrl: '/article/audit/admin/v1/list',
        breadcrumbList: [{
            name: '文章审核管理',
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
			pathname: '/article/audit/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/article/audit/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '审核人编号',
            type: 'VARCHAR'
            }, {
            id: 'articleAuditStatus',
            name: '审核状态',
            type: 'VARCHAR'
            }, {
            id: 'articleAuditTime',
            name: '审核时间',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleId',
            name: '文章编号'
        }, {
            id: 'userId',
            name: '审核人编号'
        }, {
            id: 'articleAuditStatus',
            name: '审核状态'
        }, {
            id: 'articleAuditTime',
            name: '审核时间'
        }]
    }
})(NIndex);

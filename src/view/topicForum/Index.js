import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
	return {
		id: 'topicForum',
		type: 'TABLE',
		title: '话题论坛关联',
		primaryKey: 'topicForumMapId',
		store: state.topicForum,
		listUrl: '/topic/forum/admin/list',
		breadcrumbList: [{
			name: '话题论坛关联管理',
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
			addUrl: '/topic/forum/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/topic/forum/v1/synchronize'
		}],
		searchList: [{
			id: 'forumId',
			name: '论坛Id',
			type: 'VARCHAR'
		}, {
			id: 'topicId',
			name: '话题Id',
			type: 'VARCHAR'
		}],
		columnList: [{
			id: 'forumId',
			name: '论坛Id'
		}, {
			id: 'topicId',
			name: '话题Id'
		}]
	}
})(NIndex);

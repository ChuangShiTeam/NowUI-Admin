import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
	return {
		id: 'articleCategory',
		type: 'TABLE',
		title: '文章分类',
		primaryKey: 'articleCategoryId',
		store: state.articleCategory,
		listUrl: '/article/category/admin/v1/list',
		breadcrumbList: [{
			name: '文章分类管理',
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
			addUrl: '/article/category/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/article/category/admin/v1/synchronize'
		}],
		searchList: [{
			id: 'articleCategoryName',
			name: '分类名称',
			type: 'VARCHAR',
		}, {
			id: 'articleCategoryKey',
			name: '分类编码',
			type: 'VARCHAR',
		}],
		columnList: [{
			id: 'articleCategoryName',
			name: '分类名称',
			editUrl: '/article/category/edit/:articleCategoryId'
		}, {
			id: 'articleCategoryKey',
			name: '分类编码'
		}, {
			id: 'articleCategoryImageId',
			name: '多媒体文件编号'
		}]
	}
})(NIndex);

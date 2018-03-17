import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
	return {
		id: 'articleCategory',
		baseUrl: '/article/category/admin/v1',
		title: '文章分类表单',
		primaryKey: 'articleCategoryId',
		store: state.articleCategory,
		breadcrumbList: [{
			name: '文章分类管理',
			url: '/article/category/index'
		}, {
			name: '文章分类信息',
			url: ''
		}],
		buttonList: [{
			name: '返回',
			icon: 'left-circle',
			type: 'BACK',
			isPrimary: false
		}],
		secondButtonList: [{
			name: '删除',
			icon: 'delete',
			type: 'DELETE'
		}],
		columnList: [{
			id: 'articleCategoryParentId',
			name: '父级编号',
			type: 'SELECT',
			select: {
				remoteOptionConfig: {
					key: 'articleCategoryId',
					value: 'articleCategoryName',
					url: '/article/category/admin/v1/tree',
					params: {}
				}
			},
			required: true
		}, {
			id: 'articleCategoryName',
			name: '分类名称',
			type: 'VARCHAR',
			required: true
		}, {
			id: 'articleCategoryCode',
			name: '分类编码',
			type: 'VARCHAR',
			required: true
		}, {
			id: 'articleCategoryImageId',
			name: '多媒体文件编号',
			type: 'MEDIA',
			returnLimit: 1,
			supportUploadTypes: ['image'],
			required: true
		}, {
			id: 'articleCategoryDescription',
			name: '描述',
			type: 'VARCHAR',
			required: true
		}, {
			id: 'articleCategorySort',
			name: '排序',
			type: 'NUMBER',
			min: 0,
			max: 99999,
			required: true
		}]
	}
})(NDetail);

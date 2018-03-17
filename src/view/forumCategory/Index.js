import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'forumCategory',
        type: 'TABLE',
        title: '论坛分类',
        primaryKey: 'forumCategoryId',
        store: state.forumCategory,
        listUrl: '/forum/category/admin/list',
        breadcrumbList: [{
            name: '论坛分类管理',
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
			addUrl: '/forum/category/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/forum/category/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'forumCategoryName',
            name: '论坛分类名称',
            type: 'VARCHAR'
            }, {
            id: 'forumCategoryThumb',
            name: '论坛分类缩略图',
            type: 'VARCHAR'
            }, {
            id: 'forumCategorySort',
            name: '论坛分类排序',
            type: 'VARCHAR'
            }, {
            id: 'forumCategoryEnabled',
            name: '论坛分类是否启用',
            type: 'VARCHAR'
            }, {
            id: 'forumCategoryRecommand',
            name: '是否推荐',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'forumCategoryName',
            name: '论坛分类名称'
        }, {
            id: 'forumCategoryThumb',
            name: '论坛分类缩略图'
        }, {
            id: 'forumCategorySort',
            name: '论坛分类排序'
        }, {
            id: 'forumCategoryEnabled',
            name: '论坛分类是否启用'
        }, {
            id: 'forumCategoryRecommand',
            name: '是否推荐'
        }]
    }
})(NIndex);

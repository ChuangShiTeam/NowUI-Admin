import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleAuthor',
        type: 'TABLE',
        title: '文章作者',
        primaryKey: 'articleAuthorId',
        store: state.articleAuthor,
        listUrl: '/article/author/admin/v1/list',
        breadcrumbList: [{
            name: '文章作者管理',
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
			addUrl: '/article/author/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/article/author/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'articleAuthorName',
            name: '作者姓名',
            type: 'VARCHAR'
            }, {
            id: 'articleAuthorProfessional',
            name: '名医专业',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleAuthorName',
            name: '作者姓名'
        }, {
            id: 'articleAuthorSex',
            name: '作者性别'
        }, {
            id: 'articleAuthorImageId',
            name: '名医头像'
        }, {
            id: 'articleAuthorProfessional',
            name: '名医专业'
        }, {
            id: 'articleAuthorMaster',
            name: '名医擅长'
        }, {
            id: 'articleAuthorIntroduction',
            name: '名医介绍'
        }]
    }
})(NIndex);

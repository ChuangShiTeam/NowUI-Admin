import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'courseCategory',
        type: 'TABLE',
        title: '课程分类',
        primaryKey: 'courseCategoryId',
        store: state.courseCategory,
        listUrl: '/course/category/admin/v1/list',
        breadcrumbList: [{
            name: '课程分类管理',
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
            addUrl: '/course/category/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/course/category/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'courseCategoryName',
            name: '课程分类名称',
            type: 'VARCHAR',
            }, {
            id: 'courseCategoryCode',
            name: '课程分类编码',
            type: 'VARCHAR',
            }, {
            id: 'courseCategoryDescription',
            name: '课程分类描述',
            type: 'VARCHAR',
        }],
        columnList: [{
            id: 'courseCategoryParentId',
            name: '课程父分类编号'
        }, {
            id: 'courseCategoryParentPath',
            name: '课程父分类路径'
        }, {
            id: 'courseCategoryName',
            name: '课程分类名称'
        }, {
            id: 'courseCategoryCode',
            name: '课程分类编码'
        }, {
            id: 'courseCategoryImageFileId',
            name: '课程分类图片文件编号'
        }, {
            id: 'courseCategoryDescription',
            name: '课程分类描述'
        }, {
            id: 'courseCategorySort',
            name: '课程分类排序'
        }]
    }
})(NIndex);

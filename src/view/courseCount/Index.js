import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'courseCount',
        type: 'TABLE',
        title: '课程统计',
        primaryKey: 'courseCountId',
        store: state.courseCount,
        listUrl: '/course/count/admin/v1/list',
        breadcrumbList: [{
            name: '课程统计管理',
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
            addUrl: '/course/count/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/course/count/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'courseId',
            name: '课程编号',
            type: 'VARCHAR',
        }, {
            id: 'courseCountType',
            name: '课程统计类型',
            type: 'VARCHAR',
        }],
        columnList: [{
            id: 'courseId',
            name: '课程编号'
        }, {
            id: 'courseCountType',
            name: '课程统计类型'
        }, {
            id: 'courseCountValue',
            name: '课程统计数量'
        }]
    }
})(NIndex);

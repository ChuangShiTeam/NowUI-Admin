import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'course',
        type: 'TABLE',
        title: '课程',
        primaryKey: 'courseId',
        store: state.course,
        listUrl: '/course/admin/v1/list',
        breadcrumbList: [{
            name: '课程管理',
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
            addUrl: '/course/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/course/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'courseAuthorUserId',
            name: '课程作者的userId',
            type: 'VARCHAR',
            }, {
            id: 'courseAuthorDoctorId',
            name: '课程作者的医生Id',
            type: 'VARCHAR',
            }, {
            id: 'courseTitle',
            name: '课程标题',
            type: 'VARCHAR',
            }, {
            id: 'courseIntroduce',
            name: '课程介绍',
            type: 'VARCHAR',
        }],
        columnList: [{
            id: 'courseAuthorUserId',
            name: '课程作者的userId'
        }, {
            id: 'courseAuthorDoctorId',
            name: '课程作者的医生Id'
        }, {
            id: 'courseIntroduce',
            name: '课程介绍'
        }, {
            id: 'courseAmount',
            name: '课程金额'
        }, {
            id: 'courseCoverContent',
            name: '课程栏目封面推荐词'
        }, {
            id: 'courseCoverImageFileId',
            name: '课程封面图片'
        }]
    }
})(NIndex);

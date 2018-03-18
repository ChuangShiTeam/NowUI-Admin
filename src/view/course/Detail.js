import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'course',
        baseUrl: '/course/admin/v1',
        title: '课程表单',
        primaryKey: 'courseId',
        store: state.course,
        breadcrumbList: [{
            name: '课程管理',
            url: '/course/index'
        }, {
            name: '课程信息',
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
            id: 'courseAuthorUserId',
            name: '课程作者的userId',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseAuthorDoctorId',
            name: '课程作者的医生Id',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseTitle',
            name: '课程标题',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseIntroduce',
            name: '课程介绍',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseAmount',
            name: '课程金额',
            type: 'NUMBER',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseCoverContent',
            name: '课程栏目封面推荐词',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseCoverImageFilePath',
            mediaPathKey: 'courseCoverImageFilePath',
            name: '课程封面图片',
            type: 'MEDIA',
            returnLimit: 1,
            returnValueName: 'courseCoverImageFileId',
            returnLabelName: 'courseCoverImageFilePath',
            supportUploadTypes: ['image']
        }]
    }
})(NDetail);

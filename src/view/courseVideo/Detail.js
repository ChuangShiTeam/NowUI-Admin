import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'courseVideo',
        baseUrl: '/course/video/admin/v1',
        title: '课程视频表单',
        primaryKey: 'courseVideoId',
        store: state.courseVideo,
        breadcrumbList: [{
            name: '课程视频管理',
            url: '/course/video/index'
        }, {
            name: '课程视频信息',
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
            id: 'courseId',
            name: '课程编号',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseVideoTitle',
            name: '课程视频标题',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseVideoIntroduce',
            name: '课程视频简介',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseVideoFileId',
            name: '课程视频文件编号',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseVideoCoverFileId',
            mediaPathKey: 'courseVideoCoverFilePath',
            name: '课程视频封面截图',
            type: 'MEDIA',
            returnLimit: 1,
            returnValueName: 'courseVideoCoverFileId',
            returnLabelName: 'courseVideoCoverFilePath',
            supportUploadTypes: ['image']
        }, {
            id: 'courseVideoSort',
            name: '课程视频排序',
            type: 'NUMBER',
			min: 0,
			max: 99999,
            required: true
        }]
    }
})(NDetail);

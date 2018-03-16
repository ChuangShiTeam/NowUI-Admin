import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'courseVideo',
        type: 'TABLE',
        title: '课程视频',
        primaryKey: 'courseVideoId',
        store: state.courseVideo,
        listUrl: '/course/video/admin/v1/list',
        breadcrumbList: [{
            name: '课程视频管理',
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
            addUrl: '/course/video/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/course/video/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'courseId',
            name: '课程编号',
            type: 'VARCHAR',
            }, {
            id: 'courseVideoTitle',
            name: '课程视频标题',
            type: 'VARCHAR',
            }, {
            id: 'courseVideoIntroduce',
            name: '课程视频简介',
            type: 'VARCHAR',
        }],
        columnList: [{
            id: 'courseId',
            name: '课程编号'
        }, {
            id: 'courseVideoTitle',
            name: '课程视频标题'
        }, {
            id: 'courseVideoIntroduce',
            name: '课程视频简介'
        }, {
            id: 'courseVideoFileId',
            name: '课程视频文件编号'
        }, {
            id: 'courseVideoCoverFileId',
            name: '课程视频封面截图文件编号'
        }, {
            id: 'courseVideoSort',
            name: '课程视频排序'
        }]
    }
})(NIndex);

import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'forum',
        baseUrl: '/forum/admin/v1',
        title: '论坛信息表单',
        primaryKey: 'forumId',
        store: state.forum,
        breadcrumbList: [{
            name: '论坛信息管理',
            url: '/forum/index'
        }, {
            name: '论坛信息信息',
            url: ''
        }],
        buttonList: [{
            name: '返回',
            icon: 'left-circle',
            type: 'BACK',
            isPrimary: false
        }],
        secondButtonList: [{
            name: '更新',
            icon: 'reload',
            type: 'REPLACE'
        }, {
            name: '删除',
            icon: 'delete',
            type: 'DELETE'
        }],
        columnList: [{
            id: 'forumName',
            name: '论坛名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'forumDescription',
            name: '论坛简介',
            type: 'LONG_VARCHAR'
        }, {
            id: 'forumMedia',
            name: '图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }, {
            id: 'forumBackgroundMedia',
            name: '背景图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }, {
            id: 'forumTopicLocation',
            name: '位置',
            type: 'VARCHAR'
        }, {
            id: 'forumIsTop',
            name: '是否置顶',
            type: 'BOOLEAN',
            required: true
        }, {
            id: 'forumTopLevel',
            name: '置顶级别',
            type: 'NUMBER',
            min: 0,
            max: 99999,
            required: true
        }, {
            id: 'forumTopEndTime',
            name: '置顶结束时间',
            type: 'DatePicker',
            format: 'YYYY-MM-DD HH:mm:ss',
            showTime: true,
        }, {
            id: 'forumIsActive',
            name: '是否有效',
            type: 'BOOLEAN',
            required: true
        }, {
            id: 'forumIsRecomand',
            name: '是否推荐',
            type: 'BOOLEAN',
            required: true
        }, {
            id: 'forumSort',
            name: '排序',
            type: 'NUMBER',
            min: 0,
            max: 99999,
            required: true
        }]
    }
})(NDetail);

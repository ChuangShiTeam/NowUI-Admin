import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'topicForum',
        baseUrl: '/topicForum',
        title: '话题论坛关联表单',
        primaryKey: 'topicForumMapId',
        store: state.topicForum,
        breadcrumbList: [{
            name: '话题论坛关联管理',
            url: '/topic/forum/index'
        }, {
            name: '话题论坛关联信息',
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
            id: 'forumId',
            name: '论坛Id',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'topicId',
            name: '话题Id',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

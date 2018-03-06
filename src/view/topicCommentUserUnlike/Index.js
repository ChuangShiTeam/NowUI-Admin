import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'topicCommentUserUnlike',
        type: 'TABLE',
        title: '话题评论的取消点赞',
        primaryKey: 'commentUserUnlikeId',
        store: state.topicCommentUserUnlike,
        listUrl: '/topic/comment/user/unlike/admin/v1/list',
        breadcrumbList: [{
            name: '话题评论的取消点赞管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }, {
            name: '新增',
            icon: 'plus-circle',
            type: 'ADD',
            addUrl: '/topic/comment/user/unlike/add'
        }],
        searchList: [{
            id: 'commentId',
            name: '被取消点赞的话题评论编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'commentId',
            name: '被取消点赞的话题评论编号'
        }, {
            id: 'userId',
            name: '用户编号'
        }]
    }
})(NIndex);

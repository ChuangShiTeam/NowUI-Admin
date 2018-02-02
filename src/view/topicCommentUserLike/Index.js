import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'topicCommentUserLike',
        type: 'TABLE',
        title: '话题的评论用户点赞',
        primaryKey: 'commentUserLikeId',
        store: state.topicCommentUserLike,
        listUrl: '/topic/comment/user/like/admin/v1/list',
        breadcrumbList: [{
            name: '话题的评论用户点赞管理',
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
            addUrl: '/topic/comment/user/like/add'
        }],
        searchList: [{
            id: 'commentId',
            name: '被点赞的评论编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '点赞的用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'commentId',
            name: '被点赞的评论编号'
        }, {
            id: 'userId',
            name: '点赞的用户编号'
        }]
    }
})(NIndex);

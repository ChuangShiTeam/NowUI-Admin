import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'topicCommentUserLike',
        baseUrl: '/topicCommentUserLike',
        title: '话题的评论用户点赞表单',
        primaryKey: 'commentUserLikeId',
        store: state.topicCommentUserLike,
        breadcrumbList: [{
            name: '话题的评论用户点赞管理',
            url: '/topic/comment/user/like/index'
        }, {
            name: '话题的评论用户点赞信息',
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
            id: 'commentId',
            name: '被点赞的评论编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userId',
            name: '点赞的用户编号',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'topicCommentUserUnlike',
        baseUrl: '/topicCommentUserUnlike',
        title: '话题评论的取消点赞表单',
        primaryKey: 'commentUserUnlikeId',
        store: state.topicCommentUserUnlike,
        breadcrumbList: [{
            name: '话题评论的取消点赞管理',
            url: '/topic/comment/user/unlike/index'
        }, {
            name: '话题评论的取消点赞信息',
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
            name: '被取消点赞的话题评论编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

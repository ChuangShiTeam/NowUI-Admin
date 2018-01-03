import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleCommentLike',
        title: '文章评论点赞表单',
        primaryKey: 'articleCommentLikeId',
        store: state.articleCommentLike,
        breadcrumbList: [{
            name: '文章评论点赞管理',
            url: '/article/comment/like/index'
        }, {
            name: '文章评论点赞信息',
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
            id: 'articleCommentId',
            name: '文章评论编号',
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

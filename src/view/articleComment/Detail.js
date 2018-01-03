import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleComment',
        title: '文章评论表单',
        primaryKey: 'articleCommentId',
        store: state.articleComment,
        breadcrumbList: [{
            name: '文章评论管理',
            url: '/article/comment/index'
        }, {
            name: '文章评论信息',
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
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleReolyCommentId',
            name: '回复的评论编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleReplyUserId',
            name: '回复的用户编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleCommentContent',
            name: '评论内容',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

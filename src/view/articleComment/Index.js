import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleComment',
        type: 'TABLE',
        title: '文章评论',
        primaryKey: 'articleCommentId',
        store: state.articleComment,
        listUrl: '/article/comment/admin/list',
        breadcrumbList: [{
            name: '文章评论管理',
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
            pathname: '/articleComment/add'
        }],
        searchList: [{
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
            }, {
            id: 'articleReolyCommentId',
            name: '回复的评论编号',
            type: 'VARCHAR'
            }, {
            id: 'articleReplyUserId',
            name: '回复的用户编号',
            type: 'VARCHAR'
            }, {
            id: 'articleCommentContent',
            name: '评论内容',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleId',
            name: '文章编号'
        }, {
            id: 'userId',
            name: '用户编号'
        }, {
            id: 'articleReolyCommentId',
            name: '回复的评论编号'
        }, {
            id: 'articleReplyUserId',
            name: '回复的用户编号'
        }, {
            id: 'articleCommentContent',
            name: '评论内容'
        }]
    }
})(NIndex);

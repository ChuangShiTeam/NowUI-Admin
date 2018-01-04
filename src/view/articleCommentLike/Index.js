import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleCommentLike',
        type: 'TABLE',
        title: '文章评论点赞',
        primaryKey: 'articleCommentLikeId',
        store: state.articleCommentLike,
        listUrl: '/article/comment/like/admin/list',
        breadcrumbList: [{
            name: '文章评论点赞管理',
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
            pathname: '/articleCommentLike/add'
        }],
        searchList: [{
            id: 'articleCommentId',
            name: '文章评论编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleCommentId',
            name: '文章评论编号'
        }, {
            id: 'userId',
            name: '用户编号'
        }]
    }
})(NIndex);

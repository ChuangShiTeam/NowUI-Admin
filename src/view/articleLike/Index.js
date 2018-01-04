import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleLike',
        type: 'TABLE',
        title: '文章点赞',
        primaryKey: 'articleLikeId',
        store: state.articleLike,
        listUrl: '/article/like/admin/list',
        breadcrumbList: [{
            name: '文章点赞管理',
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
            pathname: '/articleLike/add'
        }],
        searchList: [{
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '点赞数',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleId',
            name: '文章编号'
        }, {
            id: 'userId',
            name: '点赞数'
        }]
    }
})(NIndex);

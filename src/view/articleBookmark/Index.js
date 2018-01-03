import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleBookmark',
        type: 'TABLE',
        title: '文章收藏',
        primaryKey: 'articleBookMarkId',
        store: state.articleBookmark,
        listUrl: '/article/bookmark/admin/list',
        breadcrumbList: [{
            name: '文章收藏管理',
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
            pathname: '/articleBookmark/add'
        }],
        searchList: [{
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR'
            }, {
            id: 'useId',
            name: '用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleId',
            name: '文章编号'
        }, {
            id: 'useId',
            name: '用户编号'
        }]
    }
})(NIndex);

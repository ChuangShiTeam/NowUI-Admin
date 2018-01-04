import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleDislike',
        type: 'TABLE',
        title: '文章鄙视',
        primaryKey: 'articleDislikeId',
        store: state.articleDislike,
        listUrl: '/article/dislike/admin/list',
        breadcrumbList: [{
            name: '文章鄙视管理',
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
            pathname: '/articleDislike/add'
        }],
        searchList: [{
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleId',
            name: '文章编号'
        }, {
            id: 'userId',
            name: '用户编号'
        }]
    }
})(NIndex);

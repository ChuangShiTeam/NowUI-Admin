import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'articleMedia',
        type: 'TABLE',
        title: '文章多媒体',
        primaryKey: 'articleMediaId',
        store: state.articleMedia,
        listUrl: '/article/media/admin/list',
        breadcrumbList: [{
            name: '文章多媒体管理',
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
            pathname: '/articleMedia/add'
        }],
        searchList: [{
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR'
            }, {
            id: 'fileId',
            name: '文件编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleId',
            name: '文章编号'
        }, {
            id: 'fileId',
            name: '文件编号'
        }, {
            id: 'articleMediaSort',
            name: '排序'
        }]
    }
})(NIndex);

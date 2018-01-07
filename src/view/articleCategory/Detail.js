import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleCategory',
        baseUrl: '/article/category',
        title: '文章分类表单',
        primaryKey: 'articleCategoryId',
        submitKey: ['articleCategoryParentId'],
        store: state.articleCategory,
        breadcrumbList: [{
            name: '文章分类管理',
            url: '/article/category/index'
        }, {
            name: '文章分类信息',
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
            id: 'articleCategoryName',
            name: '名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleCategoryKeywords',
            name: '关键字',
            type: 'LONG_VARCHAR',
            required: true
        }, {
            id: 'articleCategoryDescription',
            name: '描述',
            type: 'LONG_VARCHAR'
        }, {
            id: 'articleCategorySort',
            name: '排序',
            type: 'NUMBER',
            min: 0,
            max: 99999
        }]
    }
})(NDetail);

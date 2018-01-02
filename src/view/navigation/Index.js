import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'navigation',
        type: 'TABLE',
        title: '导航栏',
        primaryKey: 'navigationId',
        store: state.navigation,
        listUrl: '/navigation/admin/list',
        breadcrumbList: [{
            name: '导航栏管理',
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
            pathname: '/navigation/add'
        }],
        searchList: [{
            id: 'navigationCategoryCode',
            name: '导航栏分类编码',
            type: 'VARCHAR'
            }, {
            id: 'navigationCode',
            name: '导航栏编码',
            type: 'VARCHAR'
            }, {
            id: 'navigationName',
            name: '导航栏名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'navigationCategoryCode',
            name: '导航栏分类编码'
        }, {
            id: 'navigationCode',
            name: '导航栏编码'
        }, {
            id: 'navigationName',
            name: '导航栏名称'
        }, {
            id: 'navigationImage',
            name: '导航栏图片'
        }, {
            id: 'navigationUrl',
            name: '导航栏链接'
        }, {
            id: 'navigationPosition',
            name: '导航栏位置'
        }, {
            id: 'navigationSort',
            name: '排序'
        }]
    }
})(NIndex);

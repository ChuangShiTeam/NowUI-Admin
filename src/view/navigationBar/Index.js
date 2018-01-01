import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'navigationBar',
        type: 'TABLE',
        title: '导航栏',
        primaryKey: 'navigationBarId',
        store: state.navigationBar,
        listUrl: '/navigation/bar/admin/list',
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
            pathname: '/navigationBar/add'
        }],
        searchList: [{
            id: 'navigationBarCategoryCode',
            name: '导航栏分类编码',
            type: 'VARCHAR'
            }, {
            id: 'navigationBarCode',
            name: '导航栏编码',
            type: 'VARCHAR'
            }, {
            id: 'navigationBarName',
            name: '导航栏名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'navigationBarCategoryCode',
            name: '导航栏分类编码'
        }, {
            id: 'navigationBarCode',
            name: '导航栏编码'
        }, {
            id: 'navigationBarName',
            name: '导航栏名称'
        }, {
            id: 'navigationBarImage',
            name: '导航栏图片'
        }, {
            id: 'navigationBarUrl',
            name: '导航栏链接'
        }, {
            id: 'navigationBarPosition',
            name: '导航栏位置'
        }, {
            id: 'navigationBarSort',
            name: '排序'
        }]
    }
})(NIndex);

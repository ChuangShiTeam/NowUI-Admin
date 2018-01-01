import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'toolbar',
        type: 'TABLE',
        title: '工具栏',
        primaryKey: 'toolbarId',
        store: state.toolbar,
        listUrl: '/toolbar/admin/list',
        breadcrumbList: [{
            name: '工具栏管理',
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
            pathname: '/toolbar/add'
        }],
        searchList: [{
            id: 'toolbarName',
            name: '工具栏名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'toolbarName',
            name: '工具栏名称'
        }, {
            id: 'toolbarImage',
            name: '工具栏图片'
        }, {
            id: 'toolbarSort',
            name: '排序'
        }]
    }
})(NIndex);

import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'menu',
        type: 'TABLE',
        title: '菜单',
        primaryKey: 'menuId',
        store: state.menu,
        listUrl: '/menu/admin/list',
        breadcrumbList: [{
            name: '菜单管理',
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
            pathname: '/menu/add'
        }],
        searchList: [{
            id: 'menuParentId',
            name: '父级ID',
            type: 'VARCHAR'
            }, {
            id: 'menuName',
            name: '名称',
            type: 'VARCHAR'
            }, {
            id: 'menuImage',
            name: '图片',
            type: 'VARCHAR'
            }, {
            id: 'menuUrl',
            name: '地址',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'menuParentId',
            name: '父级ID'
        }, {
            id: 'menuName',
            name: '名称'
        }, {
            id: 'menuImage',
            name: '图片'
        }, {
            id: 'menuUrl',
            name: '地址'
        }, {
            id: 'menuSort',
            name: '排序'
        }]
    }
})(NIndex);

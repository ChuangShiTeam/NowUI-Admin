import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        type: 'TABLE',
        name: 'appConfig',
        title: '应用配置信息',
        primaryKey: 'configId',
        store: state.appConfig,
        listUrl: '/app/config/admin/list',
        breadcrumbList: [{
            name: '应用配置管理',
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
            pathname: '/app/config/add'
        }],
        searchList: [{
            id: 'configCategoryId',
            name: '应用配置分类',
            type: 'SELECT',

        }, {
            id: 'configKey',
            name: '键',
            type: 'VARCHAR'
        }, {
            id: 'configIsDisabled',
            name: '是否禁用',
            type: 'SELECT',
            
        }],
        columnList: [{
            id: 'configKey',
            name: '键',
            editUrl: '/app/config/edit'
        }, {
            id: 'configValue',
            name: '值'
        }, {
            id: 'configCategoryName',
            name: '分类'
        }, {
            id: 'configIsDisabled',
            name: '是否禁用'
        }]
    }
})(NIndex);

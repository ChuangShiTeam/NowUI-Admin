import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'appConfig',
        baseUrl: '/app/config/admin/v1',
        title: '应用配置表单',
        primaryKey: 'configId',
        store: state.appConfig,
        breadcrumbList: [{
            name: '应用配置管理',
            url: '/app/config/index'
        }, {
            name: '应用配置信息',
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
            id: 'configCategoryId',
            name: '应用配置分类',
            type: 'SELECT',
            select: {
                remoteOptionConfig: {
                    key: 'configCategoryId',
                    value: 'configCategoryName',
                    url: '/app/config/category/admin/all/list',
                    params: {}
                }
            },
            required: true
        }, {
            id: 'configKey',
            name: '应用配置键',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'configValue',
            name: '应用配置值',
            type: 'LONG_VARCHAR',
            required: true
        }, {
            id: 'configIsDisabled',
            name: '是否禁用',
            type: 'BOOLEAN'
        }, {
            id: 'configDescription',
            name: '描述',
            type: 'LONG_VARCHAR'
        }]
    }
})(NDetail);

import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        name: 'app/config',
        title: '应用配置表单',
        primaryKey: 'appConfigId',
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
            required: true
        }, {
            id: 'configKey',
            name: '应用配置键',
            required: true
        }, {
            id: 'configValue',
            name: '应用配置值',
            required: true
        }, {
            id: 'configIsDisabled',
            name: '是否禁用',
            required: true
        }, {
            id: 'configDescription',
            name: '描述'
        }]
    }
})(NDetail);

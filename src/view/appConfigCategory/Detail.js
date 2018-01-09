import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'appConfigCategory',
        baseUrl: '/app/config/category/admin/v1',
        title: '应用配置分类表单',
        primaryKey: 'configCategoryId',
        store: state.appConfigCategory,
        breadcrumbList: [{
            name: '应用配置分类管理',
            url: '/app/config/category/index'
        }, {
            name: '应用配置分类信息',
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
            id: 'configCategoryName',
            name: '应用配置分类名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'configCategoryCode',
            name: '应用配置分类编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'configCategoryDescription',
            name: '应用配置分类描述',
            type: 'LONG_VARCHAR'
        }]
    }
})(NDetail);

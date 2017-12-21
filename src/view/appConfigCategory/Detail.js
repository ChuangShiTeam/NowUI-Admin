import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        name: 'app/config/category',
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
            required: true
        }, {
            id: 'configCategoryCode',
            name: '应用配置分类编码',
            required: true
        }, {
            id: 'configCategoryDescription',
            name: '应用配置分类描述'
        }]
    }
})(NDetail);

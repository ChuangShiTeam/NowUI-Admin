import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'navigation',
        baseUrl: '/navigation/admin/v1',
        title: '导航栏表单',
        primaryKey: 'navigationId',
        store: state.navigation,
        breadcrumbList: [{
            name: '导航栏管理',
            url: '/navigation/index'
        }, {
            name: '导航栏信息',
            url: ''
        }],
        buttonList: [{
            name: '返回',
            icon: 'left-circle',
            type: 'BACK',
            isPrimary: false
        }],
        secondButtonList: [{
            name: '更新',
            icon: 'reload',
            type: 'REPLACE'
        }, {
            name: '删除',
            icon: 'delete',
            type: 'DELETE'
        }],
        columnList: [{
            id: 'navigationCategoryCode',
            name: '导航栏分类编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationCode',
            name: '导航栏编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationName',
            name: '导航栏名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationImage',
            name: '导航栏图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image'],
            ref: 'navigationImage'
        }, {
            id: 'navigationUrl',
            name: '导航栏链接',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationPosition',
            name: '导航栏位置',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationSort',
            name: '排序',
            type: 'NUMBER',
            min: 0,
            max: 99999,
            required: true
        }]
    }
})(NDetail);

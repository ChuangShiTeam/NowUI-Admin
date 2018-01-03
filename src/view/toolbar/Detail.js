import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'toolbar',
        baseUrl: '/toolbar',
        title: '工具栏表单',
        primaryKey: 'toolbarId',
        store: state.toolbar,
        breadcrumbList: [{
            name: '工具栏管理',
            url: '/toolbar/index'
        }, {
            name: '工具栏信息',
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
            id: 'toolbarName',
            name: '工具栏名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'toolbarImage',
            name: '工具栏图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image'],
            ref: 'toolbarImage'
        }, {
            id: 'toolbarSort',
            name: '排序',
            type: 'NUMBER',
            min: 0,
            max: 99999,
            required: true
        }]
    }
})(NDetail);

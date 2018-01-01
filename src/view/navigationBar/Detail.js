import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'navigationBar',
        title: '导航栏表单',
        primaryKey: 'navigationBarId',
        store: state.navigationBar,
        breadcrumbList: [{
            name: '导航栏管理',
            url: '/navigation/bar/index'
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
            name: '删除',
            icon: 'delete',
            type: 'DELETE'
        }],
        columnList: [{
            id: 'navigationBarCategoryCode',
            name: '导航栏分类编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationBarCode',
            name: '导航栏编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationBarName',
            name: '导航栏名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationBarImage',
            name: '导航栏图片',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationBarUrl',
            name: '导航栏链接',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationBarPosition',
            name: '导航栏位置',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'navigationBarSort',
            name: '排序',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

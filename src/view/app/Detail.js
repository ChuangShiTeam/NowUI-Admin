import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        name: 'app',
        title: '应用表单',
        primaryKey: 'appId',
        store: state.app,
        breadcrumbList: [{
            name: '应用管理',
            url: '/app/index'
        }, {
            name: '应用信息',
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
            id: 'appName',
            name: '应用名称',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

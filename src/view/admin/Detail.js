import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'admin',
        title: '管理员表单',
        primaryKey: 'adminId',
        store: state.admin,
        breadcrumbList: [{
            name: '管理员管理',
            url: '/admin/index'
        }, {
            name: '管理员信息',
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
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

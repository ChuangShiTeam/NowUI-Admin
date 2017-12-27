import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'code',
        baseUrl: '/app/code',
        title: '表信息',
        primaryKey: 'tableName',
        store: state.code,
        breadcrumbList: [{
            name: '代码生成管理',
            url: '/code/index'
        }, {
            name: '商品信息',
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
            id: 'codeName',
            name: '商品名称',
            required: true
        }]
    }
})(NDetail);

import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'message',
        title: '消息表单',
        primaryKey: 'messageId',
        store: state.message,
        breadcrumbList: [{
            name: '消息管理',
            url: '/message/index'
        }, {
            name: '消息信息',
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
            id: 'objectId',
            name: '业务编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'messageTitle',
            name: '标题',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'messageType',
            name: '类型',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'messageContent',
            name: '内容',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

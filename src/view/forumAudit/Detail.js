import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'forumAudit',
        baseUrl: '/forumAudit',
        title: '论坛审核信息表单',
        primaryKey: 'forumAuditId',
        store: state.forumAudit,
        breadcrumbList: [{
            name: '论坛审核信息管理',
            url: '/forum/audit/index'
        }, {
            name: '论坛审核信息信息',
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
            id: 'forumAuditStatus',
            name: '审核状态',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'auditSuggestContent',
            name: '审核内容',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'forumId',
            name: '论坛id',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

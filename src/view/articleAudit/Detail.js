import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleAudit',
        title: '文章审核表单',
        primaryKey: 'articleAuditId',
        store: state.articleAudit,
        breadcrumbList: [{
            name: '文章审核管理',
            url: '/article/audit/index'
        }, {
            name: '文章审核信息',
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
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'userId',
            name: '审核人编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleAuditStatus',
            name: '审核状态',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleAuditTime',
            name: '审核时间',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'code',
        type: 'TABLE',
        title: '数据库表信息',
        primaryKey: 'tableName',
        store: state.code,
        listUrl: '/code/admin/table/v1/list',
        breadcrumbList: [{
            name: '代码生成管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }],
		secondButtonList: [],
        searchList: [{
            id: 'tableSchema',
            name: '数据表结构',
            type: 'VARCHAR'
        }, {
            id: 'tableName',
            name: '数据库名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'tableName',
            name: '数据库名称',
            editUrl: '/code/view/:tableSchema/:tableName'
        }, {
            id: 'tableComment',
            name: '说明'
        }, {
            id: 'engine',
            name: '引擎'
        }, {
            id: 'systemCreateTime',
            name: '创建时间'
        }]
    }
})(NIndex);

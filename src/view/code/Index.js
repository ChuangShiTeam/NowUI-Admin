import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'code',
        type: 'TABLE',
        title: '数据库表信息',
        primaryKey: 'tableName',
        store: state.code,
        listUrl: '/app/code/admin/table/list',
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
        searchList: [{
            id: 'tableName',
            name: '表名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'table_name',
            name: '表名称'
        }, {
            id: 'engine',
            name: '引擎'
        }, {
            id: 'table_rows',
            name: '数据'
        }, {
            id: 'create_time',
            name: '创建时间'
        }, {
            id: 'update_time',
            name: '更新时间'
        }, {
            id: 'table_comment',
            name: '说明'
        }]
    }
})(NIndex);

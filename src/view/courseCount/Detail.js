import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'courseCount',
        baseUrl: '/course/count/admin/v1',
        title: '课程统计表单',
        primaryKey: 'courseCountId',
        store: state.courseCount,
        breadcrumbList: [{
            name: '课程统计管理',
            url: '/course/count/index'
        }, {
            name: '课程统计信息',
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
            id: 'courseId',
            name: '课程编号',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseCountType',
            name: '课程统计类型',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseCountValue',
            name: '课程统计数量',
            type: 'NUMBER',
			min: 0,
			max: 99999,
            required: true
        }]
    }
})(NDetail);

import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'courseOrder',
        type: 'TABLE',
        title: '课程订单编号',
        primaryKey: 'courseOrderId',
        store: state.courseOrder,
        listUrl: '/course/order/admin/v1/list',
        breadcrumbList: [{
            name: '课程订单编号管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }],
		secondButtonList: [{
            name: '新增',
            icon: 'plus-circle',
            type: 'ADD',
            addUrl: '/course/order/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/course/order/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'courseId',
            name: '课程编号',
            type: 'VARCHAR',
            }, {
            id: 'userId',
            name: '订阅课程的用户编号',
            type: 'VARCHAR',
        }],
        columnList: [{
            id: 'courseId',
            name: '课程编号'
        }, {
            id: 'userId',
            name: '订阅课程的用户编号'
        }, {
            id: 'courseTryoutStatus',
            name: '是否试看'
        }, {
            id: 'courseSubscribeStatus',
            name: '订阅状态:是否订阅'
        }, {
            id: 'courseOrderPaymentType',
            name: '支付类型: 微信,支付宝'
        }, {
            id: 'courseOrderPaymentStatus',
            name: '支付状态:已支付, 生成订单未支付,订单关闭'
        }, {
            id: 'courseOrderPaymentAmount',
            name: '支付金额'
        }]
    }
})(NIndex);

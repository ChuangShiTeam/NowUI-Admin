import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'courseOrder',
        baseUrl: '/course/order/admin/v1',
        title: '课程订单表单',
        primaryKey: 'courseOrderId',
        store: state.courseOrder,
        breadcrumbList: [{
            name: '课程订单管理',
            url: '/course/order/index'
        }, {
            name: '课程订单信息',
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
            id: 'userId',
            name: '订阅课程的用户编号',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseTryoutStatus',
            name: '是否试看',
            type: 'NUMBER',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseSubscribeStatus',
            name: '订阅状态:是否订阅',
            type: 'NUMBER',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseOrderPaymentType',
            name: '支付类型: 微信,支付宝',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseOrderPaymentStatus',
            name: '支付状态:已支付, 生成订单未支付,订单关闭',
            type: 'VARCHAR',
			min: 0,
			max: 99999,
            required: true
        }, {
            id: 'courseOrderPaymentAmount',
            name: '支付金额',
            type: 'NUMBER',
			min: 0,
			max: 99999,
            required: true
        }]
    }
})(NDetail);

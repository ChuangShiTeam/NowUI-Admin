import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'memberDeliveryAddress',
        baseUrl: '/memberDeliveryAddress',
        title: '会员收货地址表单',
        primaryKey: 'memberDeliveryAddressId',
        store: state.memberDeliveryAddress,
        breadcrumbList: [{
            name: '会员收货地址管理',
            url: '/member/delivery/address/index'
        }, {
            name: '会员收货地址信息',
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
            id: 'memberId',
            name: '会员编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressName',
            name: '姓名',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressPhone',
            name: '手机号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressProvince',
            name: '省',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressCity',
            name: '市',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressArea',
            name: '区',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressAddress',
            name: '详细地址',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressPostcode',
            name: '邮政编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberDeliveryAddressIsDefault',
            name: '是否默认收货地址',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

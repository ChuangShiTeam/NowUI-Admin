import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'memberFollow',
        title: '会员关注表单',
        primaryKey: 'memberFollowId',
        store: state.memberFollow,
        breadcrumbList: [{
            name: '会员关注管理',
            url: '/member/follow/index'
        }, {
            name: '会员关注信息',
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
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'followMemberId',
            name: '关注会员编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'followUserId',
            name: '关注用户编号',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

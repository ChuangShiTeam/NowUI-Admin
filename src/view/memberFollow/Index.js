import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'memberFollow',
        type: 'TABLE',
        title: '会员关注',
        primaryKey: 'memberFollowId',
        store: state.memberFollow,
        listUrl: '/member/follow/admin/list',
        breadcrumbList: [{
            name: '会员关注管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }, {
            name: '新增',
            icon: 'plus-circle',
            type: 'ADD',
            pathname: '/memberFollow/add'
        }],
        searchList: [{
            id: 'memberId',
            name: '会员编号',
            type: 'VARCHAR'
            }, {
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'memberId',
            name: '会员编号'
        }, {
            id: 'userId',
            name: '用户编号'
        }, {
            id: 'followMemberId',
            name: '关注会员编号'
        }, {
            id: 'followUserId',
            name: '关注用户编号'
        }]
    }
})(NIndex);

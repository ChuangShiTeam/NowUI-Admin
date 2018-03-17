import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'member',
        type: 'TABLE',
        title: '会员',
        primaryKey: 'memberId',
        store: state.member,
        listUrl: '/member/admin/v1/list',
        breadcrumbList: [{
            name: '会员管理',
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
			pathname: '/member/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/member/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userId',
            name: '用户编号'
        }]
    }
})(NIndex);

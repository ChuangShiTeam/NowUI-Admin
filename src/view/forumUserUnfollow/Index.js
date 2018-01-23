import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'forumUserUnfollow',
        type: 'TABLE',
        title: '论坛用户取关关联',
        primaryKey: 'forumUserUnfollowMapId',
        store: state.forumUserUnfollow,
        listUrl: '/forum/user/unfollow/admin/list',
        breadcrumbList: [{
            name: '论坛用户取关关联管理',
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
            addUrl: '/forumUserUnfollow/add'
        }],
        searchList: [{
            id: 'userId',
            name: '用户ID',
            type: 'VARCHAR'
            }, {
            id: 'forumId',
            name: '论坛Id',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userId',
            name: '用户ID'
        }, {
            id: 'forumId',
            name: '论坛Id'
        }]
    }
})(NIndex);

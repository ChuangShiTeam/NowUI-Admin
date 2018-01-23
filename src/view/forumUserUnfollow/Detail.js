import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'forumUserUnfollow',
        baseUrl: '/forumUserUnfollow',
        title: '论坛用户取关关联表单',
        primaryKey: 'forumUserUnfollowMapId',
        store: state.forumUserUnfollow,
        breadcrumbList: [{
            name: '论坛用户取关关联管理',
            url: '/forum/user/unfollow/index'
        }, {
            name: '论坛用户取关关联信息',
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
            id: 'userId',
            name: '用户ID',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'forumId',
            name: '论坛Id',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

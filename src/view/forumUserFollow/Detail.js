import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'forumUserFollow',
        baseUrl: '/forumUserFollow',
        title: '论坛用户关注表单',
        primaryKey: 'forumUserFollowId',
        store: state.forumUserFollow,
        breadcrumbList: [{
            name: '论坛用户关注管理',
            url: '/forum/user/follow/index'
        }, {
            name: '论坛用户关注信息',
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
            name: '用户Id',
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

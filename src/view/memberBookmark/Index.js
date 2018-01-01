import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'memberBookmark',
        type: 'TABLE',
        title: '会员收藏',
        primaryKey: 'memberBookmarkId',
        store: state.memberBookmark,
        listUrl: '/member/bookmark/admin/list',
        breadcrumbList: [{
            name: '会员收藏管理',
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
            pathname: '/memberBookmark/add'
        }],
        searchList: [{
            id: 'memberId',
            name: '会员编号',
            type: 'VARCHAR'
            }, {
            id: 'memberBookmarkTitle',
            name: '会员收藏标题',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'memberId',
            name: '会员编号'
        }, {
            id: 'userId',
            name: '用户编号'
        }, {
            id: 'objectId',
            name: '收藏主体编号'
        }, {
            id: 'memberBookmarkTitle',
            name: '会员收藏标题'
        }]
    }
})(NIndex);

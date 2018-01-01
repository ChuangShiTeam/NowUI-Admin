import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'memberBookmark',
        title: '会员收藏表单',
        primaryKey: 'memberBookmarkId',
        store: state.memberBookmark,
        breadcrumbList: [{
            name: '会员收藏管理',
            url: '/member/bookmark/index'
        }, {
            name: '会员收藏信息',
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
            id: 'objectId',
            name: '收藏主体编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'memberBookmarkTitle',
            name: '会员收藏标题',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleBookmark',
        title: '文章收藏表单',
        primaryKey: 'articleBookMarkId',
        store: state.articleBookmark,
        breadcrumbList: [{
            name: '文章收藏管理',
            url: '/article/bookmark/index'
        }, {
            name: '文章收藏信息',
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
            id: 'articleId',
            name: '文章编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'useId',
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

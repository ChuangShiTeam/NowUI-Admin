import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleLike',
        title: '文章点赞表单',
        primaryKey: 'articleLikeId',
        store: state.articleLike,
        breadcrumbList: [{
            name: '文章点赞管理',
            url: '/article/like/index'
        }, {
            name: '文章点赞信息',
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
            id: 'userId',
            name: '点赞数',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

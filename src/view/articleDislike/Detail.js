import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleDislike',
        title: '文章鄙视表单',
        primaryKey: 'articleDislikeId',
        store: state.articleDislike,
        breadcrumbList: [{
            name: '文章鄙视管理',
            url: '/article/dislike/index'
        }, {
            name: '文章鄙视信息',
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
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

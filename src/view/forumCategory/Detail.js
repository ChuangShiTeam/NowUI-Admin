import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'forumCategory',
        baseUrl: '/forumCategory',
        title: '论坛分类表单',
        primaryKey: 'forumCategoryId',
        store: state.forumCategory,
        breadcrumbList: [{
            name: '论坛分类管理',
            url: '/forum/category/index'
        }, {
            name: '论坛分类信息',
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
            id: 'forumCategoryName',
            name: '论坛分类名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'forumCategoryThumb',
            name: '论坛分类缩略图',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'forumCategorySort',
            name: '论坛分类排序',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'forumCategoryEnabled',
            name: '论坛分类是否启用',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'forumCategoryRecommand',
            name: '是否推荐',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

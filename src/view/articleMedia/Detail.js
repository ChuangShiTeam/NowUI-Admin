import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleMedia',
        title: '文章多媒体表单',
        primaryKey: 'articleMediaId',
        store: state.articleMedia,
        breadcrumbList: [{
            name: '文章多媒体管理',
            url: '/article/media/index'
        }, {
            name: '文章多媒体信息',
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
            id: 'fileId',
            name: '文件编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleMediaSort',
            name: '排序',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

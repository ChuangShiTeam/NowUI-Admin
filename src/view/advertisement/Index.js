import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'advertisement',
        type: 'TABLE',
        title: '广告信息',
        primaryKey: 'advertisementId',
        store: state.advertisement,
        listUrl: '/advertisement/admin/list',
        breadcrumbList: [{
            name: '广告管理',
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
            pathname: '/advertisement/add'
        }],
        searchList: [{
            id: 'advertisementTitle',
            name: '广告标题',
            type: 'VARCHAR'
        }, {
            id: 'advertisementCategoryCode',
            name: '广告分类编码',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'advertisementTitle',
            name: '广告标题',
            pathname: '/advertisement/edit'
        }, {
            id: 'advertisementCategoryCode',
            name: '分类编码'
        }, {
            id: 'advertisementCode',
            name: '编码'
        }, {
            id: 'advertisementImage',
            name: '图片'
        }, {
            id: 'advertisementPosition',
            name: '位置'
        }, {
            id: 'advertisementLink',
            name: '超链接'
        }, {
            id: 'advertisementIsEfficient',
            name: '是否失效',
            render: function (text, record, index){
                return text ? '是' : '否';
            }
        }]
    }
})(NIndex);

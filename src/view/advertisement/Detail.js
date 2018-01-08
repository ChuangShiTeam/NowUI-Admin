import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'advertisement',
        baseUrl: '/advertisement',
        title: '广告表单',
        primaryKey: 'advertisementId',
        store: state.advertisement,
        breadcrumbList: [{
            name: '广告管理',
            url: '/advertisement/index'
        }, {
            name: '广告信息',
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
            id: 'advertisementTitle',
            name: '广告标题',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'advertisementCategoryCode',
            name: '广告分类编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'advertisementCode',
            name: '广告编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'advertisementImage',
            name: '广告图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }, {
            id: 'advertisementContent',
            name: '广告内容',
            type: 'LONG_VARCHAR'
        }, {
            id: 'advertisementPosition',
            name: '广告位置',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'advertisementLink',
            name: '广告超链接',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'advertisementIsEfficient',
            name: '广告是否失效',
            type: 'BOOLEAN',
            checkedChildren: '是',
            unCheckedChildren: '否'
        }, {
            id: 'advertisementSort',
            name: '广告排序',
            type: 'NUMBER',
            min: 0,
            max: 99999,
            required: true
        }]
    }
})(NDetail);

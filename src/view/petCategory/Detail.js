import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'petCategory',
        baseUrl: '/pet/category/admin/v1',
        title: '宠物分类表单',
        primaryKey: 'petCategoryId',
        submitKey: ['petCategoryParentId'],
        store: state.petCategory,
        breadcrumbList: [{
            name: '宠物分类管理',
            url: '/pet/category/index'
        }, {
            name: '宠物分类信息',
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
            id: 'petCategoryName',
            name: '宠物分类名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petCategoryCode',
            name: '宠物分类编码',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petCategoryImage',
            name: '宠物分类图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }, {
            id: 'petCategoryDescription',
            name: '宠物分类简介',
            type: 'LONG_VARCHAR'
        }, {
            id: 'petCategorySort',
            name: '宠物分类排序',
            type: 'NUMBER',
            min: 0,
            required: true
        }]
    }
})(NDetail);

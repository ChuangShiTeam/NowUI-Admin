import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'product',
        baseUrl: '/product/admin/v1',
        title: '商品表单',
        primaryKey: 'productId',
        store: state.product,
        breadcrumbList: [{
            name: '商品管理',
            url: '/product/index'
        }, {
            name: '商品信息',
            url: ''
        }],
        buttonList: [{
			name: '返回',
			icon: 'left-circle',
			type: 'BACK',
			isPrimary: false
		}, {
			name: '删除',
			icon: 'delete',
			type: 'DELETE',
			isPrimary: false
        }],
        columnList: [{
			id: 'productName',
			name: '商品名称',
			type: 'VARCHAR',
			required: true
		}, {
			id: 'productCategory',
			name: '商品分类',
			type: 'TREESELECT',
			required: true,
			select: {
				allowClear: true,
				showSearch: true,
				multiple: false,
				treeCheckable: false,
				treeDefaultExpandAll: true,
				storeName: "product",
				storeKey: 'productCategoryList',
				returnValueName: 'productCategoryId',
				returnLabelName: 'productCategoryName',
				remoteOptionConfig: {
					key: 'articleCategoryId',
					value: 'articleCategoryName',
					url: '/article/category/admin/v1/all/tree/list',
					params: {}
				}
			}
		}, {
			id: 'productImage',
			name: '商品图片',
			type: 'MEDIA',
			required: true,
			returnLimit: 1,
			returnValueName: 'productImageId',
			returnLabelName: 'productImagePath',
			supportUploadTypes: ['image'],
        }]
    }
})(NDetail);

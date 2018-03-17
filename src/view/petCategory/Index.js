import React from 'react';
import {connect} from 'react-redux';

import constant from '../../common/constant';
import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'petCategory',
        type: 'TABLE',
        title: '宠物分类',
        primaryKey: 'petCategoryId',
        store: state.petCategory,
        listUrl: '/pet/category/admin/v1/list',
        breadcrumbList: [{
            name: '宠物分类管理',
            url: ''
        }],
        buttonList: [{
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            isLoad: true,
            isPrimary: true
        }],
		secondButtonList: [{
			name: '新增',
			icon: 'plus-circle',
			type: 'ADD',
			addUrl: '/pet/category/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/pet/category/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'petCategoryName',
            name: '宠物分类名称',
            type: 'VARCHAR'
            }, {
            id: 'petCategoryCode',
            name: '宠物分类编码',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'petCategoryName',
            name: '宠物分类名称',
            editUrl: '/pet/category/edit/:petCategoryId'
        }, {
            id: 'petCategoryCode',
            name: '宠物分类编码'
        }, {
            id: 'petCategoryImage',
            name: '宠物分类图片',
            render: function(text, record, index, self) {
                return (
                    text && text.filePath?
                        <span>
                          <img alt="example" style={{width: 100}} src={constant.imageHost + text.filePath} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'petCategorySort',
            name: '宠物分类排序'
        }, {
            id: 'petCategoryId',
            name: '操作',
            render: function(text, record, index, self) {
                return (<span>
                    <a onClick={self.handleAdd.bind(self, '/pet/category/add/' + record.petCategoryId)}>添加</a>
                </span>)
            }
        }]
    }
})(NIndex);

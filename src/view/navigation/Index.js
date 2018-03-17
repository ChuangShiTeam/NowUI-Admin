import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';
import constant from "../../common/constant";

export default connect(function (state) {
    return {
        id: 'navigation',
        type: 'TABLE',
        title: '导航栏',
        primaryKey: 'navigationId',
        store: state.navigation,
        listUrl: '/navigation/admin/v1/list',
        breadcrumbList: [{
            name: '导航栏管理',
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
			addUrl: '/navigation/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/navigation/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'navigationName',
            name: '导航栏名称',
            type: 'VARCHAR'
        }, {
            id: 'navigationCategoryCode',
            name: '导航栏分类编码',
            type: 'VARCHAR'
        }, {
            id: 'navigationCode',
            name: '导航栏编码',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'navigationName',
            name: '导航栏名称',
            editUrl: '/navigation/edit/:navigationId'
        }, {
            id: 'navigationCategoryCode',
            name: '导航栏分类编码'
        }, {
            id: 'navigationCode',
            name: '导航栏编码'
        }, {
            id: 'navigationImageFilePath',
            name: '导航栏图片',
            render: function (text, record, index, self) {
                return (
                    text ?
                        <span>
                          <img alt="example" style={{width: 50}} src={constant.imageHost + text} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'navigationUrl',
            name: '导航栏链接'
        }, {
            id: 'navigationPosition',
            name: '导航栏位置'
        }, {
            id: 'navigationSort',
            name: '排序'
        }]
    }
})(NIndex);

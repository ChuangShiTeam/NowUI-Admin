import React from 'react';
import {connect} from 'react-redux';

import constant from '../../common/constant';
import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'toolbar',
        type: 'TABLE',
        title: '工具栏',
        primaryKey: 'toolbarId',
        store: state.toolbar,
        listUrl: '/toolbar/admin/v1/list',
        breadcrumbList: [{
            name: '工具栏管理',
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
            addUrl: '/toolbar/add'
        }],
		secondButtonList: [{
			name: '新增',
			icon: 'plus-circle',
			type: 'ADD',
			addUrl: '/toolbar/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/toolbar/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'toolbarName',
            name: '工具栏名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'toolbarName',
            name: '工具栏名称',
            editUrl: '/toolbar/edit/:toolbarId'
        }, {
            id: 'toolbarUrl',
            name: '工具栏链接',
            type: 'VARCHAR'
        }, {
            id: 'toolbarActiveImageFilePath',
            name: '工具栏激活图片',
            render: function (text, record, index, self) {
                return (
                    text ?
                        <span>
                          <img alt="example" style={{width: 30}} src={constant.imageHost + text} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'toolbarImageFilePath',
            name: '工具栏图片',
            render: function (text, record, index, self) {
                return (
                    text ?
                        <span>
                          <img alt="example" style={{width: 30}} src={constant.imageHost + text} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'toolbarSort',
            name: '排序'
        }]
    }
})(NIndex);

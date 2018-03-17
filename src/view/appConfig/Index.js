import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'appConfig',
        type: 'TABLE',
        title: '应用配置信息',
        primaryKey: 'configId',
        store: state.appConfig,
        listUrl: '/app/config/admin/v1/list',
        breadcrumbList: [{
            name: '应用配置管理',
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
			addUrl: '/app/config/add'
		}, {
			name: '同步',
			icon: 'sync',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/app/config/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'configCategoryId',
            name: '应用配置分类',
            type: 'SELECT',
            select: {
                remoteOptionConfig: {
                    key: 'configCategoryId',
                    value: 'configCategoryName',
                    url: '/app/config/category/admin/v1/all/list',
                    params: {}
                }
            }
        }, {
            id: 'configKey',
            name: '键',
            type: 'VARCHAR'
        }, {
            id: 'configIsDisabled',
            name: '是否禁用',
            type: 'SELECT',
            select: {
                staticOptionList: [{
                    key: '',
                    value: '全部'
                }, {
                    key: true,
                    value: '是'
                }, {
                    key: false,
                    value: '否'
                }]
            }
        }],
        columnList: [{
            id: 'configKey',
            name: '键',
            editUrl: '/app/config/edit/:configId'
        }, {
            id: 'configValue',
            name: '值'
        }, {
            id: 'configCategoryName',
            name: '分类'
        }, {
            id: 'configIsDisabled',
            name: '是否禁用',
            render: function (text, record, index, self){
                return (
                    text ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }]
    }
})(NIndex);

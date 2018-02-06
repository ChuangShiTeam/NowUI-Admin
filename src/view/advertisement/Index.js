import React from 'react';
import {connect} from 'react-redux';

import constant from '../../common/constant';
import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'advertisement',
        type: 'TABLE',
        title: '广告信息',
        primaryKey: 'advertisementId',
        store: state.advertisement,
        listUrl: '/advertisement/admin/v1/list',
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
            addUrl: '/advertisement/add'
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
            editUrl: '/advertisement/edit/:advertisementId'
        }, {
            id: 'advertisementCategoryCode',
            name: '分类编码'
        }, {
            id: 'advertisementCode',
            name: '编码'
        }, {
            id: 'filePath',
            name: '图片',
            render: function (text, record, index, self) {
                return (
                    record.advertisementImage.filePath ?
                        <span>
                          <img alt="example" style={{width: 50}} src={constant.imageHost + record.advertisementImage.filePath} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'advertisementPosition',
            name: '位置'
        }, {
            id: 'advertisementLink',
            name: '超链接'
        }, {
            id: 'advertisementIsEfficient',
            name: '是否失效',
            render: function (text, record, index, self){
                return (
                    record.advertisementIsEfficient ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'advertisementSort',
            name: '排序'
        }]
    }
})(NIndex);

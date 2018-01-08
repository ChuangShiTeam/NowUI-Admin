import React, {Component} from 'react';
import {connect} from 'react-redux';

import constant from '../../common/constant';
import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'article',
        type: 'TABLE',
        title: '文章信息',
        primaryKey: 'articleId',
        store: state.article,
        listUrl: '/article/admin/list',
        breadcrumbList: [{
            name: '文章管理',
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
            addUrl: '/article/add'
        }],
        searchList: [{
            id: 'articleTitle',
            name: '标题',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'articleTitle',
            name: '标题',
            editUrl: '/article/edit/:articleId'
        }, {
            id: 'articleCategoryName',
            name: '分类'
        }, {
            id: 'articleMediaId',
            name: '媒体',
            render: function (text, record, index, self) {
                return (
                    text ?
                        <span>
                          <img alt="example" style={{width: 100}} src={constant.imageHost + text.filePath} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'articleAuthor',
            name: '作者'
        }, {
            id: 'articlePublishTime',
            name: '发布时间'
        }, {
            id: 'articleIsTop',
            name: '是否置顶',
            render: function (text, record, index, self){
                return (
                    record.articleIsTop ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'articleIsRecommend',
            name: '是否推荐',
            render: function (text, record, index, self){
                return (
                    record.articleIsTop ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'articleIsDraft',
            name: '是否草稿',
            render: function (text, record, index, self){
                return (
                    record.articleIsDraft ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }]
    }
})(NIndex);

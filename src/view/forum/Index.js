import React, {Component} from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';
import constant from "../../common/constant";

export default connect(function (state) {
    return {
        id: 'forum',
        type: 'TABLE',
        title: '论坛信息',
        primaryKey: 'forumId',
        store: state.forum,
        listUrl: '/forum/admin/v1/list',
        breadcrumbList: [{
            name: '论坛信息管理',
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
            addUrl: '/forum/add'
        }],
        searchList: [{
            id: 'forumName',
            name: '论坛名称',
            type: 'VARCHAR'
            }, {
            id: 'forumDescription',
            name: '论坛简介',
            type: 'VARCHAR'
            }, {
            id: 'forumModerator',
            name: '版主(用户id)',
            type: 'VARCHAR'
            }, {
            id: 'forumTop',
            name: '论坛是否置顶',
            type: 'VARCHAR'
            }, {
            id: 'forumIsActive',
            name: '论坛是否有效',
            type: 'VARCHAR'
            }, {
            id: 'forumIsRecomand',
            name: '是否推荐',
            type: 'VARCHAR',
        }],
        columnList: [{
            id: 'forumName',
            name: '论坛名称',
            editUrl:'/forum/edit/:forumId'
        }, {
            id: 'forumModerator',
            name: '版主(用户id)'
        }, {
            id: 'forumDescription',
            name: '论坛简介'
        }, {
            id: 'forumMediaId',
            name: '论坛多媒体',
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
            id: 'forumBackgroundMediaId',
            name: '论坛多媒体背景',
            render: function (text, record, index, self) {
                return (
                    text && text.filePath ?
                        <span>
                          <img alt="example" style={{width: 50}} src={constant.imageHost + text.filePath} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'forumTopicLocation',
            name: '位置'
        }, {
            id: 'forumTop',
            name: '论坛是否置顶',
            render: function (text, record, index, self){
                return (
                    record.articleIsTop ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'forumTopLevel',
            name: '论坛置顶级别'
        }, {
            id: 'forumTopEndTime',
            name: '论坛置顶结束时间'
        }, {
            id: 'forumIsActive',
            name: '论坛是否有效',
            render: function (text, record, index, self){
                return (
                    record.articleIsTop ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'forumIsRecomand',
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
            id: 'forumSort',
            name: '论坛排序'
        }]
    }
})(NIndex);

import React from 'react';
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
        }],
		secondButtonList: [{
			name: '新增',
			icon: 'plus-circle',
			type: 'ADD',
			addUrl: '/forum/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/forum/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'forumName',
            name: '名称',
            type: 'VARCHAR'
        }, {
            id: 'forumIsActive',
            name: '是否有效',
            type: 'SELECT',
            initialValue: '',
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
        }, {
            id: 'forumIsRecommend',
            name: '是否推荐',
            type: 'SELECT',
            initialValue: '',
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
        }, {
            id: 'forumAuditStatus',
            name: '审核状态',
            type: 'SELECT',
            initialValue: '',
            select: {
                staticOptionList: [{
                    key: '',
                    value: '全部'
                }, {
                    key: 'WAIT_AUDIT',
                    value: '待审核'
                }, {
                    key: 'AUDIT_PASS',
                    value: '审核通过'
                }, {
                    key: 'AUDIT_NOT_PASS',
                    value: '审核不通过'
                }]
            }
        }],
        columnList: [{
            id: 'forumName',
            name: '名称',
            editUrl:'/forum/edit/:forumId'
        }, {
            id: 'forumModerator',
            name: '版主',
            render: function (text, record, index, self) {
                return (
                    text ?
                        <span>
                            {text.userNickName}
                            <img alt="example" style={{width: 50}} src={constant.imageHost + text.userAvatar} />
                        </span>
                        :
                        null
                )
            }
        },{
            id: 'forumMedia',
            name: '图片',
            render: function (text, record, index, self) {
                return (
                    text && text.filePath?
                        <span>
                          <img alt="example" style={{width: 50}} src={constant.imageHost + text.filePath} />
                        </span>
                        :
                        null
                )
            }
        }, {
            id: 'forumIsTop',
            name: '是否置顶',
            render: function (text, record, index, self){
                return (
                    record.forumIsTop ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'forumTopLevel',
            name: '置顶级别'
        }, {
            id: 'forumTopEndTime',
            name: '置顶结束时间'
        }, {
            id: 'forumIsActive',
            name: '是否有效',
            render: function (text, record, index, self){
                return (
                    record.forumIsActive ?
                        <span style={{color: '#52C41A'}}>是</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'forumIsRecommend',
            name: '是否推荐',
            render: function (text, record, index, self){
                return (
                    record.forumIsRecommend ?
                        <span style={{color: '#52C41A'}}>是{text}</span>
                        :
                        <span style={{color: '#F5222D'}}>否</span>
                );
            }
        }, {
            id: 'forumSort',
            name: '排序'
        }]
    }
})(NIndex);

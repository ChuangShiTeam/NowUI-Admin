import React, {Component} from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';
import constant from "../../common/constant";

export default connect(function (state) {
    return {
        id: 'user',
        type: 'TABLE',
        title: '用户',
        primaryKey: 'userId',
        store: state.user,
        listUrl: '/user/admin/list',
        breadcrumbList: [{
            name: '用户管理',
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
            addUrl: '/user/add'
        }],
        searchList: [{
            id: 'userType',
            name: '类型',
            type: 'VARCHAR'
            }, {
            id: 'userAccount',
            name: '账号',
            type: 'VARCHAR'
            }, {
            id: 'userName',
            name: '姓名',
            type: 'VARCHAR'
            }, {
            id: 'userMobile',
            name: '手机号码',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userType',
            name: '类型'
        }, {
            id: 'userAccount',
            name: '账号',
            editUrl: '/user/edit/:userId'
        }, {
            id: 'userNickName',
            name: '昵称',
            editUrl: '/user/edit/:userId'
        }, {
            id: 'userName',
            name: '姓名',
            editUrl: '/user/edit/:userId'
        }, {
            id: 'userMobile',
            name: '手机号码'
        }, {
            id: 'userEmail',
            name: '邮箱'
        }, {
            id: 'userAvatar',
            name: '头像',
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
        }]
    }
})(NIndex);

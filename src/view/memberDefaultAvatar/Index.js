import React from 'react';
import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';
import constant from "../../common/constant";

export default connect(function (state) {
    return {
        id: 'memberDefaultAvatar',
        type: 'TABLE',
        title: '用户默认头像',
        primaryKey: 'memberDefaultAvatarId',
        store: state.memberDefaultAvatar,
        listUrl: '/member/default/avatar/admin/v1/list',
        breadcrumbList: [{
            name: '用户默认头像管理',
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
			pathname: '/member/default/avatar/add'
		}, {
			name: '同步',
			icon: 'loading-3-quarters',
			type: 'SYNCHRONIZE',
			synchronizeUrl: '/member/default/avatar/admin/v1/synchronize'
		}],
        searchList: [{
            id: 'userAvatarFileId',
            name: '头像文件编号',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'userAvatarFileId',
            name: '头像文件编号',
            editUrl: '/member/default/avatar/edit/:memberDefaultAvatarId',
        },{
            id: 'userAvatarFilePath',
            name: '默认头像图片',
            render: function (text, record, index, self) {
                return (
                    text ?
                        <span>
                          <img alt="example" style={{width: 81}} src={constant.imageHost + text} />
                        </span>
                        :
                        null
                )
            }
        }]
    }
})(NIndex);

import React from 'react';
import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'articleAuthor',
        baseUrl: '/article/author/admin/v1',
        title: '文章作者表单',
        primaryKey: 'articleAuthorId',
        store: state.articleAuthor,
        breadcrumbList: [{
            name: '文章作者管理',
            url: '/article/author/index'
        }, {
            name: '文章作者信息',
            url: ''
        }],
        buttonList: [{
            name: '返回',
            icon: 'left-circle',
            type: 'BACK',
            isPrimary: false
        }],
        secondButtonList: [{
            name: '删除',
            icon: 'delete',
            type: 'DELETE'
        }],
        columnList: [{
            id: 'articleAuthorName',
            name: '作者姓名',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleAuthorSex',
            name: '作者性别',
            type: 'SELECT',
            select: {
                staticOptionList: [
                    {
                        key: '1',
                        value: '男'
                    }, {
                        key: '2',
                        value: '女'
                    }
                ]
            },
            required: true
        }, {
            id: 'articleAuthorImageId',
            name: '名医头像',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }, {
            id: 'articleAuthorProfessional',
            name: '名医专业',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleAuthorMaster',
            name: '名医擅长',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'articleAuthorIntroduction',
            name: '名医介绍',
            type: 'LONG_VARCHAR',
            required: true
        }]
    }
})(NDetail);

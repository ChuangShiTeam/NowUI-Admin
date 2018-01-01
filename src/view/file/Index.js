import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'file',
        type: 'TABLE',
        title: '文件',
        primaryKey: 'fileId',
        store: state.file,
        listUrl: '/file/admin/list',
        breadcrumbList: [{
            name: '文件管理',
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
            pathname: '/file/add'
        }],
        searchList: [{
            id: 'fileName',
            name: '名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'fileType',
            name: '类型'
        }, {
            id: 'fileName',
            name: '名称'
        }, {
            id: 'fileSuffix',
            name: '后缀'
        }, {
            id: 'fileSize',
            name: '大小'
        }, {
            id: 'filePath',
            name: '文件路径'
        }, {
            id: 'fileCoverImage',
            name: '文件封面图片'
        }, {
            id: 'fileIsExternal',
            name: '是否外部链接'
        }]
    }
})(NIndex);

import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'file',
        title: '文件表单',
        primaryKey: 'fileId',
        store: state.file,
        breadcrumbList: [{
            name: '文件管理',
            url: '/file/index'
        }, {
            name: '文件信息',
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
            id: 'fileType',
            name: '类型',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'fileName',
            name: '名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'fileSuffix',
            name: '后缀',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'fileSize',
            name: '大小',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'filePath',
            name: '文件路径',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'fileThumbnailPath',
            name: '文件路径',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'fileOriginalPath',
            name: '文件路径',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'fileCoverImage',
            name: '文件封面图片',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'fileIsExternal',
            name: '是否外部链接',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

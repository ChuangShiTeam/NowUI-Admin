import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'memberDefaultAvatar',
        baseUrl: '/member/default/avatar/admin/v1',
        title: '用户默认头像表单',
        primaryKey: 'memberDefaultAvatarId',
        store: state.memberDefaultAvatar,
        breadcrumbList: [{
            name: '用户默认头像管理',
            url: '/member/default/avatar/index'
        }, {
            name: '用户默认头像信息',
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
            id: 'userAvatarFileId',
            mediaPathKey: 'userAvatarFilePath',
            name: '默认头像图片',
            type: 'MEDIA',
            returnLimit: 1,
            supportUploadTypes: ['image']
        }]
    }
})(NDetail);

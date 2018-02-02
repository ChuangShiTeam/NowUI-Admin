import {connect} from 'react-redux';

import NDetail from '../../layout/NDetail';

export default connect(function (state) {
    return {
        id: 'pet',
        baseUrl: '/pet',
        title: '宠物表单',
        primaryKey: 'petId',
        store: state.pet,
        breadcrumbList: [{
            name: '宠物管理',
            url: '/pet/index'
        }, {
            name: '宠物信息',
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
            id: 'userId',
            name: '用户编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petCategoryId',
            name: '宠物分类编号',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petName',
            name: '宠物名称',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petSex',
            name: '宠物性别',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petBirthday',
            name: '宠物生日',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petAvatar',
            name: '宠物头像',
            type: 'VARCHAR',
            required: true
        }, {
            id: 'petDescription',
            name: '宠物简介',
            type: 'VARCHAR',
            required: true
        }]
    }
})(NDetail);

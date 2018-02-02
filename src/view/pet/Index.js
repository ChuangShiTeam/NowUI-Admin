import {connect} from 'react-redux';

import NIndex from '../../layout/NIndex';

export default connect(function (state) {
    return {
        id: 'pet',
        type: 'TABLE',
        title: '宠物',
        primaryKey: 'petId',
        store: state.pet,
        listUrl: '/pet/admin/v1/list',
        breadcrumbList: [{
            name: '宠物管理',
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
            addUrl: '/pet/add'
        }],
        searchList: [{
            id: 'petCategoryId',
            name: '宠物分类编号',
            type: 'VARCHAR'
            }, {
            id: 'petName',
            name: '宠物名称',
            type: 'VARCHAR'
        }],
        columnList: [{
            id: 'petCategoryId',
            name: '宠物分类编号'
        }, {
            id: 'petName',
            name: '宠物名称'
        }, {
            id: 'petSex',
            name: '宠物性别'
        }, {
            id: 'petBirthday',
            name: '宠物生日'
        }, {
            id: 'petAvatar',
            name: '宠物头像'
        }]
    }
})(NIndex);

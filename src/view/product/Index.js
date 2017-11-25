import {connect} from 'react-redux';

import NBaseIndex from '../../component/NBaseIndex';

export default connect(function (state) {
    return {
        name: 'product',
        store: state.product,
        buttonList: [{
            name: '新增',
            icon: 'plus-circle',
            type: 'ADD'
        }, {
            name: '搜索',
            icon: 'search',
            type: 'SEARCH',
            is_load: true,
            is_primary: true
        }],
        searchList: [{
            id: 'product_name',
            name: '商品名称',
            type: ''
        }]
    }
})(NBaseIndex);

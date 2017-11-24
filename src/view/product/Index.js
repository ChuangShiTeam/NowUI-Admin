import {connect} from 'react-redux';

import NBaseIndex from '../../component/NBaseIndex';

export default connect(function (state) {
    return {
        name: 'product',
        store: state.product,
        searchList: [{
            id: 'product_name',
            name: '商品名称',
            type: ''
        }]
    }
})(NBaseIndex);

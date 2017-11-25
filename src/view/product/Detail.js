import {connect} from 'react-redux';

import NBaseDetail from '../../component/NBaseDetail';

export default connect(function (state) {
    return {
        name: 'product',
        store: state.product,
        buttonList: [{
            name: '返回',
            icon: 'left-circle',
            type: 'BACK',
            is_primary: true
        }]
    }
})(NBaseDetail);

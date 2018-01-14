import util from '../common/util';

export default {
    childRoutes: [{
        path: '/member/delivery/address/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/memberDeliveryAddress/Index').default);
            }, 'memberDeliveryAddress.index');
        }
    }, {
        path: '/member/delivery/address/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/memberDeliveryAddress/Detail').default);
            }, 'memberDeliveryAddress.detail');
        }
    }, {
        path: '/member/delivery/address/edit/:memberDeliveryAddressId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/memberDeliveryAddress/Detail').default);
            }, 'memberDeliveryAddress.detail');
        }
    }]
}

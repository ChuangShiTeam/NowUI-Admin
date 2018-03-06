import util from '../common/util';

export default {
    childRoutes: [{
        path: '/purchase/order/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/purchaseOrder/Index').default);
            }, 'purchaseOrder.index');
        }
    }, {
        path: '/purchase/order/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/purchaseOrder/Detail').default);
            }, 'purchaseOrder.detail');
        }
    }, {
        path: '/purchase/order/edit/:purchaseId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/purchaseOrder/Detail').default);
            }, 'purchaseOrder.detail');
        }
    }]
}

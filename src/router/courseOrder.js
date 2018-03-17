import util from '../common/util';

export default {
    childRoutes: [{
        path: '/course/order/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseOrder/Index').default);
            }, 'courseOrder.index');
        }
    }, {
        path: '/course/order/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseOrder/Detail').default);
            }, 'courseOrder.add');
        }
    }, {
        path: '/course/order/edit/:courseOrderId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseOrder/Detail').default);
            }, 'courseOrder.edit.courseOrderId');
        }
    }]
}

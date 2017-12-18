import util from '../common/util';

export default {
    childRoutes: [{
        path: '/product/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/product/Index').default);
            }, 'product.index');
        }
    }, {
        path: '/product/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/product/Detail').default);
            }, 'product.detail');
        }
    }, {
        path: '/product/edit/:productId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/product/Detail').default);
            }, 'product.detail');
        }
    }]
}

import util from '../common/util';

export default {
    childRoutes: [{
        path: '/supplier/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/supplier/Index').default);
            }, 'supplier.index');
        }
    }, {
        path: '/supplier/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/supplier/Detail').default);
            }, 'supplier.detail');
        }
    }, {
        path: '/supplier/edit/:supplierId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/supplier/Detail').default);
            }, 'supplier.detail');
        }
    }]
}

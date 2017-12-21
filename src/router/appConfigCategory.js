import util from '../common/util';

export default {
    childRoutes: [{
        path: '/app/config/category/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/appConfigCategory/Index').default);
            }, 'appConfigCategory.index');
        }
    }, {
        path: '/app/config/category/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/appConfigCategory/Detail').default);
            }, 'appConfigCategory.detail');
        }
    }, {
        path: '/app/config/category/edit/:appConfigCategoryId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/appConfigCategory/Detail').default);
            }, 'appConfigCategory.detail');
        }
    }]
}

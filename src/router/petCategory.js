import util from '../common/util';

export default {
    childRoutes: [{
        path: '/pet/category/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/petCategory/Index').default);
            }, 'petCategory.index');
        }
    }, {
        path: '/pet/category/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/petCategory/Detail').default);
            }, 'petCategory.detail');
        }
    }, {
        path: '/pet/category/add/:petCategoryParentId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/petCategory/Detail').default);
            }, 'petCategory.detail');
        }
    }, {
        path: '/pet/category/edit/:petCategoryId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/petCategory/Detail').default);
            }, 'petCategory.detail');
        }
    }]
}

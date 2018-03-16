import util from '../common/util';

export default {
    childRoutes: [{
        path: '/course/category/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseCategory/Index').default);
            }, 'courseCategory.index');
        }
    }, {
        path: '/course/category/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseCategory/Detail').default);
            }, 'courseCategory.add');
        }
    }, {
        path: '/course/category/edit/:courseCategoryId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseCategory/Detail').default);
            }, 'courseCategory.edit.courseCategoryId');
        }
    }]
}

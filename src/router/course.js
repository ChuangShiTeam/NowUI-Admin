import util from '../common/util';

export default {
    childRoutes: [{
        path: '/course/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/course/Index').default);
            }, 'course.index');
        }
    }, {
        path: '/course/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/course/Detail').default);
            }, 'course.add');
        }
    }, {
        path: '/course/edit/:courseId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/course/Detail').default);
            }, 'course.edit.courseId');
        }
    }]
}

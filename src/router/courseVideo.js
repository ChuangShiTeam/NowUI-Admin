import util from '../common/util';

export default {
    childRoutes: [{
        path: '/course/video/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseVideo/Index').default);
            }, 'courseVideo.index');
        }
    }, {
        path: '/course/video/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseVideo/Detail').default);
            }, 'courseVideo.add');
        }
    }, {
        path: '/course/video/edit/:courseVideoId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/courseVideo/Detail').default);
            }, 'courseVideo.edit.courseVideoId');
        }
    }]
}

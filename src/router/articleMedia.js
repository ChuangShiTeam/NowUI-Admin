import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/media/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleMedia/Index').default);
            }, 'articleMedia.index');
        }
    }, {
        path: '/article/media/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleMedia/Detail').default);
            }, 'articleMedia.detail');
        }
    }, {
        path: '/article/media/edit/:articleMediaId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleMedia/Detail').default);
            }, 'articleMedia.detail');
        }
    }]
}

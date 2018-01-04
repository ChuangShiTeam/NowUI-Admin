import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/dislike/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleDislike/Index').default);
            }, 'articleDislike.index');
        }
    }, {
        path: '/article/dislike/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleDislike/Detail').default);
            }, 'articleDislike.detail');
        }
    }, {
        path: '/article/dislike/edit/:articleDislikeId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleDislike/Detail').default);
            }, 'articleDislike.detail');
        }
    }]
}

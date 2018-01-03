import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/like/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleLike/Index').default);
            }, 'articleLike.index');
        }
    }, {
        path: '/article/like/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleLike/Detail').default);
            }, 'articleLike.detail');
        }
    }, {
        path: '/article/like/edit/:articleLikeId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleLike/Detail').default);
            }, 'articleLike.detail');
        }
    }]
}

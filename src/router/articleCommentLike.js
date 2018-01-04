import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/comment/like/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleCommentLike/Index').default);
            }, 'articleCommentLike.index');
        }
    }, {
        path: '/article/comment/like/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleCommentLike/Detail').default);
            }, 'articleCommentLike.detail');
        }
    }, {
        path: '/article/comment/like/edit/:articleCommentLikeId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleCommentLike/Detail').default);
            }, 'articleCommentLike.detail');
        }
    }]
}

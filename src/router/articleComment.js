import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/comment/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleComment/Index').default);
            }, 'articleComment.index');
        }
    }, {
        path: '/article/comment/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleComment/Detail').default);
            }, 'articleComment.detail');
        }
    }, {
        path: '/article/comment/edit/:articleCommentId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleComment/Detail').default);
            }, 'articleComment.detail');
        }
    }]
}

import util from '../common/util';

export default {
    childRoutes: [{
        path: '/topic/comment/user/unlike/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topicCommentUserUnlike/Index').default);
            }, 'topicCommentUserUnlike.index');
        }
    }, {
        path: '/topic/comment/user/unlike/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topicCommentUserUnlike/Detail').default);
            }, 'topicCommentUserUnlike.detail');
        }
    }, {
        path: '/topic/comment/user/unlike/edit/:commentUserUnlikeId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topicCommentUserUnlike/Detail').default);
            }, 'topicCommentUserUnlike.detail');
        }
    }]
}

import util from '../common/util';

export default {
    childRoutes: [{
        path: '/topic/comment/user/like/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/topicCommentUserLike/Index').default);
			}, 'topicCommentUserLike.index');
        }
    }, {
        path: '/topic/comment/user/like/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/topicCommentUserLike/Detail').default);
			}, 'topicCommentUserLike.add');
        }
    }, {
        path: '/topic/comment/user/like/edit/:commentUserLikeId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/topicCommentUserLike/Detail').default);
			}, 'topicCommentUserLike.edit.commentUserLikeId');
        }
    }]
}

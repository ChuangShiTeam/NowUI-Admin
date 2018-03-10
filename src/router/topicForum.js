import util from '../common/util';

export default {
    childRoutes: [{
        path: '/topic/forum/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/topicForum/Index').default);
			}, 'topicForum.index');
        }
    }, {
        path: '/topic/forum/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/topicForum/Detail').default);
			}, 'topicForum.add');
        }
    }, {
        path: '/topic/forum/edit/:topicForumMapId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/topicForum/Detail').default);
			}, 'topicForum.edit.topicForumMapId');
        }
    }]
}

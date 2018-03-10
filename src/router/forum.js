import util from '../common/util';

export default {
    childRoutes: [{
        path: '/forum/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forum/Index').default);
			}, 'forum.index');
        }
    }, {
        path: '/forum/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forum/Detail').default);
			}, 'forum.add');
        }
    }, {
        path: '/forum/edit/:forumId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forum/Detail').default);
			}, 'forum.edit.forumId');
        }
    }]
}

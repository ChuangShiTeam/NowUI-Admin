import util from '../common/util';

export default {
    childRoutes: [{
        path: '/forum/category/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forumCategory/Index').default);
			}, 'forumCategory.index');
        }
    }, {
        path: '/forum/category/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forumCategory/Detail').default);
			}, 'forumCategory.add');
        }
    }, {
        path: '/forum/category/edit/:forumCategoryId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forumCategory/Detail').default);
			}, 'forumCategory.edit.forumCategoryId');
        }
    }]
}

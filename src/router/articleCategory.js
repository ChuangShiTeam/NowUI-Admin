import util from '../common/util';

export default {
	childRoutes: [{
		path: '/article/category/index',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articleCategory/Index').default);
			}, 'articleCategory.index');
		}
	}, {
		path: '/article/category/add',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articleCategory/Detail').default);
			}, 'articleCategory.add');
		}
	}, {
		path: '/article/category/add/:articleCategoryParentId',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articleCategory/Detail').default);
			}, 'articleCategory.add.articleCategoryParentId');
		}
	}, {
		path: '/article/category/edit/:articleCategoryId',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articleCategory/Detail').default);
			}, 'articleCategory.edit.articleCategoryId');
		}
	}]
}

import util from '../common/util';

export default {
	childRoutes: [{
		path: '/article/index',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/article/Index').default);
			}, 'article.index');
		}
	}, {
		path: '/article/add',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/article/Detail').default);
			}, 'article.add');
		}
	}, {
		path: '/article/edit/:articleId',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/article/Detail').default);
			}, 'article.edit.articleId');
		}
	}]
}

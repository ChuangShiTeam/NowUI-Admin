import util from '../common/util';

export default {
	childRoutes: [{
		path: '/code/index',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/code/Index').default);
			}, 'code.index');
		}
	}, {
		path: '/code/view/:tableSchema/:tableName',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/code/Detail').default);
			}, 'code.detail');
		}
	}]
}

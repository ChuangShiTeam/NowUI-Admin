import util from '../common/util';

export default {
    childRoutes: [{
        path: '/dashboard/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/dashboard/Index').default);
			}, 'dashboard.index');
        }
    }]
}

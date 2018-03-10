import util from '../common/util';

export default {
    childRoutes: [{
        path: '/navigation/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/navigation/Index').default);
			}, 'navigation.index');
        }
    }, {
        path: '/navigation/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/navigation/Detail').default);
			}, 'navigation.add');
        }
    }, {
        path: '/navigation/edit/:navigationId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/navigation/Detail').default);
			}, 'navigation.edit.navigationId');
        }
    }]
}

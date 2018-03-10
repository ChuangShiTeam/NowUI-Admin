import util from '../common/util';

export default {
    childRoutes: [{
        path: '/app/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/app/Index').default);
			}, 'app.index');
        }
    }, {
        path: '/app/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/app/Detail').default);
			}, 'app.add');
        }
    }, {
        path: '/app/edit/:appId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/app/Detail').default);
			}, 'app.edit.appId');
        }
    }]
}

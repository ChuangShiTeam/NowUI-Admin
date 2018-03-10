import util from '../common/util';

export default {
    childRoutes: [{
        path: '/toolbar/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/toolbar/Index').default);
			}, 'toolbar.index');
        }
    }, {
        path: '/toolbar/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/toolbar/Detail').default);
			}, 'toolbar.add');
        }
    }, {
        path: '/toolbar/edit/:toolbarId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/toolbar/Detail').default);
			}, 'toolbar.edit.toolbarId');
        }
    }]
}

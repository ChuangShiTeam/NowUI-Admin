import util from '../common/util';

export default {
    childRoutes: [{
        path: '/menu/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/menu/Index').default);
			}, 'menu.index');
        }
    }, {
        path: '/menu/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/menu/Detail').default);
			}, 'menu.add');
        }
	}, {
		path: '/menu/add/:menuParentId',
		onEnter: util.handleEnter,
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/menu/Detail').default);
			}, 'menu.add.menuParentId');
		}
    }, {
        path: '/menu/edit/:menuId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/menu/Detail').default);
			}, 'menu.edit.menuId');
        }
    }]
}

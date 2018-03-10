import util from '../common/util';

export default {
    childRoutes: [{
        path: '/admin/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/admin/Index').default);
			}, 'admin.index');
        }
    }, {
        path: '/admin/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/admin/Detail').default);
			}, 'admin.add');
        }
    }, {
        path: '/admin/edit/:adminId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/admin/Detail').default);
            }, 'admin.edit.adminId');
        }
    }]
}

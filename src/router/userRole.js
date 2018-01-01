import util from '../common/util';

export default {
    childRoutes: [{
        path: '/user/role/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/userRole/Index').default);
            }, 'userRole.index');
        }
    }, {
        path: '/user/role/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/userRole/Detail').default);
            }, 'userRole.detail');
        }
    }, {
        path: '/user/role/edit/:userRoleId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/userRole/Detail').default);
            }, 'userRole.detail');
        }
    }]
}

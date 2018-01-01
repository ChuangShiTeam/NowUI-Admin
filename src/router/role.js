import util from '../common/util';

export default {
    childRoutes: [{
        path: '/role/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/role/Index').default);
            }, 'role.index');
        }
    }, {
        path: '/role/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/role/Detail').default);
            }, 'role.detail');
        }
    }, {
        path: '/role/edit/:roleId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/role/Detail').default);
            }, 'role.detail');
        }
    }]
}

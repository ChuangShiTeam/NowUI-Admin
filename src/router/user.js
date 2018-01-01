import util from '../common/util';

export default {
    childRoutes: [{
        path: '/user/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/user/Index').default);
            }, 'user.index');
        }
    }, {
        path: '/user/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/user/Detail').default);
            }, 'user.detail');
        }
    }, {
        path: '/user/edit/:userId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/user/Detail').default);
            }, 'user.detail');
        }
    }]
}

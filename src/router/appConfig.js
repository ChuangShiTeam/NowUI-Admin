import util from '../common/util';

export default {
    childRoutes: [{
        path: '/app/config/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/appConfig/Index').default);
            }, 'appConfig.index');
        }
    }, {
        path: '/app/config/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/appConfig/Detail').default);
            }, 'appConfig.detail');
        }
    }, {
        path: '/app/config/edit/:configId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/appConfig/Detail').default);
            }, 'appConfig.detail');
        }
    }]
}

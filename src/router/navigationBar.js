import util from '../common/util';

export default {
    childRoutes: [{
        path: '/navigation/bar/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/navigationBar/Index').default);
            }, 'navigationBar.index');
        }
    }, {
        path: '/navigation/bar/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/navigationBar/Detail').default);
            }, 'navigationBar.detail');
        }
    }, {
        path: '/navigation/bar/edit/:navigationBarId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/navigationBar/Detail').default);
            }, 'navigationBar.detail');
        }
    }]
}

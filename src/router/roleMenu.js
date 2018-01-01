import util from '../common/util';

export default {
    childRoutes: [{
        path: '/role/menu/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/roleMenu/Index').default);
            }, 'roleMenu.index');
        }
    }, {
        path: '/role/menu/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/roleMenu/Detail').default);
            }, 'roleMenu.detail');
        }
    }, {
        path: '/role/menu/edit/:roleMenuId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/roleMenu/Detail').default);
            }, 'roleMenu.detail');
        }
    }]
}

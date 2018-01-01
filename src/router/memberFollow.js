import util from '../common/util';

export default {
    childRoutes: [{
        path: '/member/follow/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/memberFollow/Index').default);
            }, 'memberFollow.index');
        }
    }, {
        path: '/member/follow/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/memberFollow/Detail').default);
            }, 'memberFollow.detail');
        }
    }, {
        path: '/member/follow/edit/:memberFollowId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/memberFollow/Detail').default);
            }, 'memberFollow.detail');
        }
    }]
}

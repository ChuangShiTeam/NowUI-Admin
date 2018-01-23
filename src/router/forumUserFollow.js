import util from '../common/util';

export default {
    childRoutes: [{
        path: '/forum/user/follow/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forumUserFollow/Index').default);
            }, 'forumUserFollow.index');
        }
    }, {
        path: '/forum/user/follow/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forumUserFollow/Detail').default);
            }, 'forumUserFollow.detail');
        }
    }, {
        path: '/forum/user/follow/edit/:forumUserFollowId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forumUserFollow/Detail').default);
            }, 'forumUserFollow.detail');
        }
    }]
}

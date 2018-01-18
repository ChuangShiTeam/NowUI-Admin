import util from '../common/util';

export default {
    childRoutes: [{
        path: '/forum/user/unfollow/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forumUserUnfollow/Index').default);
            }, 'forumUserUnfollow.index');
        }
    }, {
        path: '/forum/user/unfollow/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forumUserUnfollow/Detail').default);
            }, 'forumUserUnfollow.detail');
        }
    }, {
        path: '/forum/user/unfollow/edit/:forumUserUnfollowMapId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forumUserUnfollow/Detail').default);
            }, 'forumUserUnfollow.detail');
        }
    }]
}

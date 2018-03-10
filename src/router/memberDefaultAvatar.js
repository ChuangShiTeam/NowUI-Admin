import util from '../common/util';

export default {
    childRoutes: [{
        path: '/member/default/avatar/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/memberDefaultAvatar/Index').default);
			}, 'memberDefaultAvatar.index');
        }
    }, {
        path: '/member/default/avatar/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/memberDefaultAvatar/Detail').default);
			}, 'memberDefaultAvatar.add');
        }
    }, {
        path: '/member/default/avatar/edit/:memberDefaultAvatarId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/memberDefaultAvatar/Detail').default);
			}, 'memberDefaultAvatar.edit.memberDefaultAvatarId');
        }
    }]
}

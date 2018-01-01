import util from '../common/util';

export default {
    childRoutes: [{
        path: '/member/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/member/Index').default);
            }, 'member.index');
        }
    }, {
        path: '/member/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/member/Detail').default);
            }, 'member.detail');
        }
    }, {
        path: '/member/edit/:memberId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/member/Detail').default);
            }, 'member.detail');
        }
    }]
}

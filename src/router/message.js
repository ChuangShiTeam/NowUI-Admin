import util from '../common/util';

export default {
    childRoutes: [{
        path: '/message/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/message/Index').default);
			}, 'message.index');
        }
    }, {
        path: '/message/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/message/Detail').default);
			}, 'message.add');
        }
    }, {
        path: '/message/edit/:messageId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/message/Detail').default);
			}, 'message.edit.messageId');
        }
    }]
}

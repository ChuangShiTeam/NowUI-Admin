import util from '../common/util';

export default {
    childRoutes: [{
        path: '/forum/audit/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forumAudit/Index').default);
			}, 'forumAudit.index');
        }
    }, {
        path: '/forum/audit/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forumAudit/Detail').default);
			}, 'forumAudit.add');
        }
    }, {
        path: '/forum/audit/edit/:forumAuditId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/forumAudit/Detail').default);
			}, 'forumAudit.edit.forumAuditId');
        }
    }]
}

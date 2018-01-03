import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/audit/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleAudit/Index').default);
            }, 'articleAudit.index');
        }
    }, {
        path: '/article/audit/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleAudit/Detail').default);
            }, 'articleAudit.detail');
        }
    }, {
        path: '/article/audit/edit/:articleAuditId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleAudit/Detail').default);
            }, 'articleAudit.detail');
        }
    }]
}

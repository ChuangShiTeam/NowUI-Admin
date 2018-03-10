import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/user/purchase/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articleUserPurchase/Index').default);
			}, 'articleUserPurchase.index');
        }
    }, {
        path: '/article/user/purchase/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articleUserPurchase/Detail').default);
			}, 'articleUserPurchase.add');
        }
    }, {
        path: '/article/user/purchase/edit/:articleUserPurchaseId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articleUserPurchase/Detail').default);
			}, 'articleUserPurchase.edit.articleUserPurchaseId');
        }
    }]
}

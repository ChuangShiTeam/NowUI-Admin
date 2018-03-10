import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/price/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articlePrice/Index').default);
			}, 'articlePrice.index');
        }
    }, {
        path: '/article/price/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articlePrice/Detail').default);
			}, 'articlePrice.add');
        }
    }, {
        path: '/article/price/edit/:articlePriceId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/articlePrice/Detail').default);
			}, 'articlePrice.edit.articlePriceId');
        }
    }]
}

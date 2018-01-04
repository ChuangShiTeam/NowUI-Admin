import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/bookmark/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleBookmark/Index').default);
            }, 'articleBookmark.index');
        }
    }, {
        path: '/article/bookmark/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleBookmark/Detail').default);
            }, 'articleBookmark.detail');
        }
    }, {
        path: '/article/bookmark/edit/:articleBookMarkId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleBookmark/Detail').default);
            }, 'articleBookmark.detail');
        }
    }]
}

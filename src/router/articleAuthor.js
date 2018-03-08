import util from '../common/util';

export default {
    childRoutes: [{
        path: '/article/author/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleAuthor/Index').default);
            }, 'articleAuthor.index');
        }
    }, {
        path: '/article/author/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleAuthor/Detail').default);
            }, 'articleAuthor.detail');
        }
    }, {
        path: '/article/author/edit/:articleAuthorId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/articleAuthor/Detail').default);
            }, 'articleAuthor.detail');
        }
    }]
}

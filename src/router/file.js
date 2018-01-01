import util from '../common/util';

export default {
    childRoutes: [{
        path: '/file/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/file/Index').default);
            }, 'file.index');
        }
    }, {
        path: '/file/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/file/Detail').default);
            }, 'file.detail');
        }
    }, {
        path: '/file/edit/:fileId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/file/Detail').default);
            }, 'file.detail');
        }
    }]
}

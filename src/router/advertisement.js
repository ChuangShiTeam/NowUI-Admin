/**
 * Created by shawn on 17/12/10.
 */
import util from '../common/util';

export default {
    childRoutes: [{
        path: '/advertisement/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/advertisement/Index').default);
            }, 'advertisement.index');
        }
    }, {
        path: '/advertisement/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/advertisement/Add').default);
            },'advertisement.detail');
        }
    }, {
        path: '/advertisement/edit/:advertisement_id',
        onEnter: util.handleEnter,
        getComponent(location, cb){
            require.ensure([], (require) => {
                cb(null, require('../view/advertisement/Detail').default);
            }, 'advertisement.detail');
        }
    }]
}

import util from '../common/util';

export default {
    childRoutes: [{
        path: '/pet/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/pet/Index').default);
			}, 'pet.index');
        }
    }, {
        path: '/pet/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/pet/Detail').default);
			}, 'pet.add');
        }
    }, {
        path: '/pet/edit/:petId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/pet/Detail').default);
			}, 'pet.edit.petId');
        }
    }]
}

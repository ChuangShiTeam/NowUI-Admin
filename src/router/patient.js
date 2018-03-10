import util from '../common/util';

export default {
    childRoutes: [{
        path: '/patient/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/patient/Index').default);
			}, 'patient.index');
        }
    }, {
        path: '/patient/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/patient/Detail').default);
			}, 'patient.add');
        }
    }, {
        path: '/patient/edit/:patientId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('../view/patient/Detail').default);
			}, 'patient.edit.patientId');
        }
    }]
}

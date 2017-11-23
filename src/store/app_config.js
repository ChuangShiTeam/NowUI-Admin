const initialState = {
	app_config_category_list: []
};

function app_config(state = initialState, action) {
	switch (action.type) {
		case 'app_config':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default app_config;
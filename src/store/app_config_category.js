const initialState = {
	
};

function app_config_category(state = initialState, action) {
	switch (action.type) {
		case 'app_config_category':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default app_config_category;
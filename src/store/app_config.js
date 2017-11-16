const initialState = {
	app_config_category_list: []
};

function product(state = initialState, action) {
	switch (action.type) {
		case 'app_config':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default product;
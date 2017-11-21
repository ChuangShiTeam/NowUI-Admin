const initialState = {
	
};

function product(state = initialState, action) {
	switch (action.type) {
		case 'app_config_category':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default product;
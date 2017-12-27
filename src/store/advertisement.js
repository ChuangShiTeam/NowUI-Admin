const initialState = {
	advertisementCategoryCode: '',
	advertisementTitle: '',
	total: 0,
	pageIndex: 1,
	pageSize: 10,
	list: []
};

function advertisement(state = initialState, action) {
	switch (action.type) {
		case 'advertisement':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default advertisement;
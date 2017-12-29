const initialState = {
	articleCategoryName: '',
	expandedRowKeys: [],
	total: 0,
	pageIndex: 1,
	pageSize: 10,
	list: []
};

function articleCategory(state = initialState, action) {
	switch (action.type) {
		case 'articleCategory':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default articleCategory;
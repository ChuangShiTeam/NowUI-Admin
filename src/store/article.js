const initialState = {
	articleTitle: '',
	articleCategoryList: [],
	total: 0,
	pageIndex: 1,
	pageSize: 10,
	list: []
};

function article(state = initialState, action) {
	switch (action.type) {
		case 'article':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default article;
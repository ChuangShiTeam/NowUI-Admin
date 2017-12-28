const initialState = {
    tableSchema: '',
	tableName: '',
	total: 0,
	pageIndex: 1,
	pageSize: 10,
	list: []
};

function code(state = initialState, action) {
	switch (action.type) {
		case 'code':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default code;
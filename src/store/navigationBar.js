const initialState = {
    navigationBarCategoryCode: '',
    navigationBarCode: '',
    navigationBarName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function navigationBar(state = initialState, action) {
    switch (action.type) {
        case 'navigationBar':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default navigationBar;
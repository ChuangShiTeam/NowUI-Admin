const initialState = {
    petCategoryName: '',
    petCategoryCode: '',
    expandedRowKeys: [],
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function petCategory(state = initialState, action) {
    switch (action.type) {
        case 'petCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default petCategory;
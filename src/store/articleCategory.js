const initialState = {
    articleCategoryName: '',
    articleCategoryCode: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
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
const initialState = {
    configCategoryName: '',
    configCategoryCode: '',
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    list: []
};

function appConfigCategory(state = initialState, action) {
    switch (action.type) {
        case 'appConfigCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default appConfigCategory;
const initialState = {
    navigationCategoryCode: '',
    navigationCode: '',
    navigationName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function navigation(state = initialState, action) {
    switch (action.type) {
        case 'navigation':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default navigation;
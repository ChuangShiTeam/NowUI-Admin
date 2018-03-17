const initialState = {
    courseCategoryName: '',
    courseCategoryCode: '',
    courseCategoryDescription: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function courseCategory(state = initialState, action) {
    switch (action.type) {
        case 'courseCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default courseCategory;
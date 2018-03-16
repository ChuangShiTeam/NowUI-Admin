const initialState = {
    courseId: '',
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function courseOrder(state = initialState, action) {
    switch (action.type) {
        case 'courseOrder':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default courseOrder;
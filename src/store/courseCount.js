const initialState = {
    courseId: '',
    courseCountType: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function courseCount(state = initialState, action) {
    switch (action.type) {
        case 'courseCount':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default courseCount;
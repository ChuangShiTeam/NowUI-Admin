const initialState = {
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function member(state = initialState, action) {
    switch (action.type) {
        case 'member':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default member;
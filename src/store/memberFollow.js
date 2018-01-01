const initialState = {
    memberId: '',
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberFollow(state = initialState, action) {
    switch (action.type) {
        case 'memberFollow':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberFollow;
const initialState = {
    userId: '',
    forumId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function forumUserFollow(state = initialState, action) {
    switch (action.type) {
        case 'forumUserFollow':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumUserFollow;
const initialState = {
    userId: '',
    forumId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function forumUserUnfollow(state = initialState, action) {
    switch (action.type) {
        case 'forumUserUnfollow':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumUserUnfollow;
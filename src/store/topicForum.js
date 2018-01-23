const initialState = {
    forumId: '',
    topicId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function topicForum(state = initialState, action) {
    switch (action.type) {
        case 'topicForum':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default topicForum;
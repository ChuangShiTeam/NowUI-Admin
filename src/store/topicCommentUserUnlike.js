const initialState = {
    commentId: '',
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function topicCommentUserUnlike(state = initialState, action) {
    switch (action.type) {
        case 'topicCommentUserUnlike':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default topicCommentUserUnlike;
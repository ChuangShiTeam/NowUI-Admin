const initialState = {
    commentId: '',
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function topicCommentUserLike(state = initialState, action) {
    switch (action.type) {
        case 'topicCommentUserLike':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default topicCommentUserLike;
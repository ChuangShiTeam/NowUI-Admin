const initialState = {
    articleCommentId: '',
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleCommentLike(state = initialState, action) {
    switch (action.type) {
        case 'articleCommentLike':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleCommentLike;
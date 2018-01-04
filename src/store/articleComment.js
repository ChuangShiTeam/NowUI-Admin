const initialState = {
    articleId: '',
    userId: '',
    articleReolyCommentId: '',
    articleReplyUserId: '',
    articleCommentContent: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleComment(state = initialState, action) {
    switch (action.type) {
        case 'articleComment':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleComment;
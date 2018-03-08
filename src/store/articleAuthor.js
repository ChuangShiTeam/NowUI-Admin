const initialState = {
    articleAuthorName: '',
    articleAuthorProfessional: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleAuthor(state = initialState, action) {
    switch (action.type) {
        case 'articleAuthor':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleAuthor;
const initialState = {
    articleId: '',
    useId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleBookmark(state = initialState, action) {
    switch (action.type) {
        case 'articleBookmark':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleBookmark;
const initialState = {
    articleId: '',
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleDislike(state = initialState, action) {
    switch (action.type) {
        case 'articleDislike':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleDislike;
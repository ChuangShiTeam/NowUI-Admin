const initialState = {
    articleId: '',
    fileId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleMedia(state = initialState, action) {
    switch (action.type) {
        case 'articleMedia':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleMedia;
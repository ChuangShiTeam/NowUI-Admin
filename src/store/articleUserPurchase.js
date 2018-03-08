const initialState = {
    userId: '',
    articleId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleUserPurchase(state = initialState, action) {
    switch (action.type) {
        case 'articleUserPurchase':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleUserPurchase;
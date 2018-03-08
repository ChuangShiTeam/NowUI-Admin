const initialState = {
    articleId: '',
    articeIsFree: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articlePrice(state = initialState, action) {
    switch (action.type) {
        case 'articlePrice':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articlePrice;
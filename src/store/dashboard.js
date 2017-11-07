const initialState = {
    article_list: []
}

function product(state = initialState, action) {
    switch (action.type) {
        case 'dashboard':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default product;
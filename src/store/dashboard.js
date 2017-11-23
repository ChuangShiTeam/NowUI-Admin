const initialState = {
    article_list: []
}

function dashboard(state = initialState, action) {
    switch (action.type) {
        case 'dashboard':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default dashboard;
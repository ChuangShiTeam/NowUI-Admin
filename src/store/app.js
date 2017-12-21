const initialState = {
    appName: '',
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    list: []
};

function app(state = initialState, action) {
    switch (action.type) {
        case 'app':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default app;
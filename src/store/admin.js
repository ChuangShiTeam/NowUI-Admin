const initialState = {
    userId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function admin(state = initialState, action) {
    switch (action.type) {
        case 'admin':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default admin;
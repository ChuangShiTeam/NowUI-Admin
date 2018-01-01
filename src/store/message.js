const initialState = {
    messageTitle: '',
    messageType: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function message(state = initialState, action) {
    switch (action.type) {
        case 'message':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default message;
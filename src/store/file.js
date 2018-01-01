const initialState = {
    fileName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function file(state = initialState, action) {
    switch (action.type) {
        case 'file':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default file;
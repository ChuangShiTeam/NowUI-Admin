const initialState = {
    toolbarName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function toolbar(state = initialState, action) {
    switch (action.type) {
        case 'toolbar':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default toolbar;
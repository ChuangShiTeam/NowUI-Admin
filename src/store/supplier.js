const initialState = {
    supplierName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function supplier(state = initialState, action) {
    switch (action.type) {
        case 'supplier':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default supplier;
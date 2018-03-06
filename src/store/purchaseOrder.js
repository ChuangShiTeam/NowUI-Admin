const initialState = {
    purchaseNo: '',
    purchaseName: '',
    purchaseType: '',
    purchaseUserName: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function purchaseOrder(state = initialState, action) {
    switch (action.type) {
        case 'purchaseOrder':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default purchaseOrder;
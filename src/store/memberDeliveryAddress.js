const initialState = {
    memberDeliveryAddressName: '',
    memberDeliveryAddressPhone: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberDeliveryAddress(state = initialState, action) {
    switch (action.type) {
        case 'memberDeliveryAddress':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberDeliveryAddress;
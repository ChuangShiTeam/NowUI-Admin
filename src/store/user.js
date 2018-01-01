const initialState = {
    userType: '',
    userAccount: '',
    userName: '',
    userMobile: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function user(state = initialState, action) {
    switch (action.type) {
        case 'user':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default user;
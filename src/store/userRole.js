const initialState = {
    userId: '',
    roleId: '',
    userType: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function userRole(state = initialState, action) {
    switch (action.type) {
        case 'userRole':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default userRole;
const initialState = {
    roleName: '',
    roleCode: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function role(state = initialState, action) {
    switch (action.type) {
        case 'role':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default role;
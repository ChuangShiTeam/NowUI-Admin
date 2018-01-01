const initialState = {
    roleId: '',
    menuId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function roleMenu(state = initialState, action) {
    switch (action.type) {
        case 'roleMenu':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default roleMenu;
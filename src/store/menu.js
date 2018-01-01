const initialState = {
    menuParentId: '',
    menuName: '',
    menuImage: '',
    menuUrl: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function menu(state = initialState, action) {
    switch (action.type) {
        case 'menu':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default menu;
const initialState = {
    configCategoryList: [],
    configCategoryId: '',
    configKey: '',
    configIsDisabled: '',
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    list: []
};

function appConfig(state = initialState, action) {
    switch (action.type) {
        case 'appConfig':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default appConfig;
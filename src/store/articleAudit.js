const initialState = {
    articleId: '',
    userId: '',
    articleAuditStatus: '',
    articleAuditTime: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function articleAudit(state = initialState, action) {
    switch (action.type) {
        case 'articleAudit':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default articleAudit;
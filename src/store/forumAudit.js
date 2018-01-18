const initialState = {
    forumAuditStatus: '',
    auditSuggestContent: '',
    forumId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function forumAudit(state = initialState, action) {
    switch (action.type) {
        case 'forumAudit':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumAudit;
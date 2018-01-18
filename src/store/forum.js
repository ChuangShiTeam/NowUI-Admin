const initialState = {
    forumMediaId: '',
    forumMediaType: '',
    forumBackgroundMediaId: '',
    forumBackgroundMediaType: '',
    forumName: '',
    forumDescription: '',
    forumModerator: '',
    forumTopicLocation: '',
    forumSort: '',
    forumTop: '',
    forumTopLevel: '',
    forumTopEndTime: '',
    forumIsActive: '',
    forumIsRecomand: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function forum(state = initialState, action) {
    switch (action.type) {
        case 'forum':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forum;
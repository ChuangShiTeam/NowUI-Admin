const initialState = {
    userAvatarFileId: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function memberDefaultAvatar(state = initialState, action) {
    switch (action.type) {
        case 'memberDefaultAvatar':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default memberDefaultAvatar;
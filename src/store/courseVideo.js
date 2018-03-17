const initialState = {
    courseId: '',
    courseVideoTitle: '',
    courseVideoIntroduce: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function courseVideo(state = initialState, action) {
    switch (action.type) {
        case 'courseVideo':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default courseVideo;
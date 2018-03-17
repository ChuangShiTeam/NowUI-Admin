const initialState = {
    courseAuthorUserId: '',
    courseAuthorDoctorId: '',
    courseTitle: '',
    courseIntroduce: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function course(state = initialState, action) {
    switch (action.type) {
        case 'course':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default course;
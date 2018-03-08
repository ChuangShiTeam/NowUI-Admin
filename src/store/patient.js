const initialState = {
    patientPhone: '',
    patientNickname: '',
    patientProvince: '',
    patientCity: '',
    patientArea: '',
    patientSource: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function patient(state = initialState, action) {
    switch (action.type) {
        case 'patient':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default patient;
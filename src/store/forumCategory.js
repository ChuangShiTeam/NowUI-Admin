const initialState = {
    forumCategoryName: '',
    forumCategoryThumb: '',
    forumCategorySort: '',
    forumCategoryEnabled: '',
    forumCategoryRecommand: '',
    total: 0,
    list: [],
    pageIndex: 1,
    pageSize: 10
};

function forumCategory(state = initialState, action) {
    switch (action.type) {
        case 'forumCategory':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumCategory;
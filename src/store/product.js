import constant from '../common/constant';

const initialState = {
    app_id: '',
    app_list: [],
    product_name: '',
    total: 0,
    page_index: 1,
    page_size: constant.page_size,
    list: [],
    product_brand_list: [],
    product_category_list: [],
    member_level_list: []
};

function product(state = initialState, action) {
    switch (action.type) {
        case 'product':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default product;
export default {
    path: '/product/detail',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../view/product/Detail').default);
        }, 'product.detail');
    }
}

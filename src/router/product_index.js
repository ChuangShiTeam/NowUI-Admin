export default {
    path: '/product/index',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../view/product/Index').default);
        }, 'product.index');
    }
}

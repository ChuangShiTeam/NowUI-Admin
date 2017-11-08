import constant from './constant';

const open_id_key = 'open_id_' + constant.version;
const token_key = 'token_' + constant.version;
const product_sku_list_key = 'product_sku_list_' + constant.version;
const cart_key = 'cart_' + constant.version;
const member_address_key = 'member_address_' + constant.version;
const trade_flow_key = 'trade_flow_' + constant.version;
const member_purchase_order_flow_key = 'member_purchase_order_flow_' + constant.version;
const member_delivery_order_flow_key = 'member_delivery_order_flow_' + constant.version;

function getOpenId() {
    if (constant.is_test) {
        if (constant.app_id === 'c1af3f1ae00e4e0da9b20f5bd41b4279') {
            return 'oqvzXv4c-FY2-cGh9U-RA4JIrZoc';
        } else {
            return 'oXxTjwoBVyBquUAAx3RaFow62zjA';
        }
    }
    return localStorage.getItem(open_id_key);
}

function setOpenId(open_id) {
    localStorage.setItem(open_id_key, open_id);
}

function getToken() {
    let token = localStorage.getItem(token_key);

    if (constant.is_test) {
        token = '8sJgFZkMMgLUPfF9dvJB0kqou5YYz7OBpHBnSIz7y/fMLJQYUAbBFzXE9GlYFHOo/0yKhg3ARlxntdZeK6jJcReT7cqlJ1bmRxZ56PFGm7s=';
    }

    if (token === null) {
        return '';
    } else {
        return token;
    }
}

function setToken(token) {
    localStorage.clear();

    localStorage.setItem(token_key, token);
}

function getProductSkuList() {
    let product_sku_list = localStorage.getItem(product_sku_list_key);

    if (product_sku_list === null) {
        return [];
    }

    return JSON.parse(product_sku_list);
}

function setProductSkuList(product_sku_list) {
    localStorage.setItem(product_sku_list_key, JSON.stringify(product_sku_list));
}

function removeProductSkuList() {
    localStorage.removeItem(product_sku_list_key);
}

function getCart() {
    var cart = localStorage.getItem(cart_key);

    if (cart == null) {
        return [];
    }

    return JSON.parse(cart);
}

function setCart(cart) {
    localStorage.setItem(cart_key, JSON.stringify(cart));
}

function addCart(product) {
    var cartList = getCart();
    var isNotExit = true;

    for (var i = 0; i < cartList.length; i++) {
        var cart = cartList[i];

        if (cart.product_id === product.product_id) {
            isNotExit = false;

            cart.product_id = product.product_id;
            cart.product_name = product.product_name;
            cart.product_image = product.product_image;
            cart.product_sku_id = product.product_sku_id;
            cart.product_sku_price = product.product_sku_price;
            cart.product_sku_quantity = product.product_sku_quantity + cart.product_sku_quantity;
        }
    }

    if (isNotExit) {
        cartList.push(product);
    }

    localStorage.setItem(cart_key, JSON.stringify(cartList));
}

function removeCart() {
    localStorage.removeItem(cart_key);
}

function getMemberAddress() {
    let member_address = localStorage.getItem(member_address_key);

    if (member_address === null) {
        return {
            member_address_name: '',
            member_address_mobile: '',
            member_address_province: '',
            member_address_city: '',
            member_address_area: '',
            member_address_address: ''
        };
    }

    return JSON.parse(member_address);
}

function setMemberAddress(member_address) {
    localStorage.setItem(member_address_key, JSON.stringify(member_address));
}

function removeMemberAddress() {
    localStorage.removeItem(member_address_key);
}

function getTradeFlow() {
    return JSON.parse(localStorage.getItem(trade_flow_key));
}

function setTradeFlow(trade_flow) {
    localStorage.setItem(trade_flow_key, JSON.stringify(trade_flow));
}

function removeTradeFlow() {
    localStorage.removeItem(trade_flow_key);
}

function getMemberPurchaseOrderFlow() {
    return JSON.parse(localStorage.getItem(member_purchase_order_flow_key));
}

function setMemberPurchaseOrderFlow(member_purchase_order_flow) {
    localStorage.setItem(member_purchase_order_flow_key, JSON.stringify(member_purchase_order_flow));
}

function removeMemberPurchaseOrderFlow() {
    localStorage.removeItem(member_purchase_order_flow_key);
}

function getMemberDeliveryOrderFlow() {
    return JSON.parse(localStorage.getItem(member_delivery_order_flow_key));
}

function setMemberDeliveryOrderFlow(member_delivery_order_flow) {
    localStorage.setItem(member_delivery_order_flow_key, JSON.stringify(member_delivery_order_flow));
}

function removeMemberDeliveryOrderFlow() {
    localStorage.removeItem(member_delivery_order_flow_key);
}

export default {
    getOpenId: getOpenId,
    setOpenId: setOpenId,
    getToken: getToken,
    setToken: setToken,
    getProductSkuList: getProductSkuList,
    setProductSkuList: setProductSkuList,
    removeProductSkuList: removeProductSkuList,
    getCart: getCart,
    setCart: setCart,
    addCart: addCart,
    removeCart: removeCart,
    getMemberAddress: getMemberAddress,
    setMemberAddress: setMemberAddress,
    removeMemberAddress: removeMemberAddress,
    getTradeFlow: getTradeFlow,
    setTradeFlow: setTradeFlow,
    removeTradeFlow: removeTradeFlow,
    getMemberPurchaseOrderFlow: getMemberPurchaseOrderFlow,
    setMemberPurchaseOrderFlow: setMemberPurchaseOrderFlow,
    removeMemberPurchaseOrderFlow: removeMemberPurchaseOrderFlow,
    getMemberDeliveryOrderFlow: getMemberDeliveryOrderFlow,
    setMemberDeliveryOrderFlow: setMemberDeliveryOrderFlow,
    removeMemberDeliveryOrderFlow: removeMemberDeliveryOrderFlow
};

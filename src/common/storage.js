import constant from './constant';

const token_key = ('token_' + constant.version);

function getToken() {
    return '7+Gvdl5H2VV94AOJQetgKqzmUxGSanrXPnCno9f866wKYwSkVBEwuqFAMgb10zL2eTsHgQkQzZRxDr0GVfDTlyA+v+nUkC2G1IG1jAXc0cQ=';
    let token = localStorage.getItem(token_key);

    if (token === null || typeof (token) === 'undefined') {
        return '';
    }

    return '7+Gvdl5H2VV94AOJQetgKvzuJthMdsQHZ+/KMkJ3E58KYwSkVBEwuqFAMgb10zL2eTsHgQkQzZRxDr0GVfDTlyA+v+nUkC2G1IG1jAXc0cQ=';

    return token;
}

function setToken(token) {
    localStorage.clear();

    localStorage.setItem(token_key, token);
}

export default {
    getToken: getToken,
    setToken: setToken
};
